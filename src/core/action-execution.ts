import type {
  ActionRecord, AuthorizationRecord, EventRecord, Id, PersistenceRepository
} from "./persistence.js";

export type ActionOutcome = "SUCCEEDED" | "FAILED" | "CANCELLED" | "REJECTED" | "UNKNOWN";

function nowIso(value?: string): string {
  const result = value ? new Date(value) : new Date();
  if (Number.isNaN(result.getTime())) throw new Error("INVALID_INPUT");
  return result.toISOString();
}

function transitionAllowed(from: ActionRecord["state"], to: ActionRecord["state"]): boolean {
  const transitions: Record<ActionRecord["state"], readonly ActionRecord["state"][]> = {
    REQUESTED: ["AUTHORIZED", "REJECTED", "CANCELLED"],
    AUTHORIZED: ["EXECUTING", "CANCELLED", "REJECTED"],
    EXECUTING: ["SUCCEEDED", "FAILED", "CANCELLED", "UNKNOWN"],
    SUCCEEDED: [], FAILED: [], CANCELLED: [], REJECTED: [],
    UNKNOWN: ["EXECUTING", "SUCCEEDED", "FAILED", "CANCELLED", "UNKNOWN"]
  };
  return transitions[from].includes(to);
}

function requireAuthorization(repository: PersistenceRepository, authorizationId: Id, actorId: Id, operation: string): AuthorizationRecord {
  const authorization = repository.read("authorizations", authorizationId);
  if (!authorization) throw new Error("NOT_FOUND");
  if (authorization.decision !== "ALLOW") throw new Error("NOT_AUTHORIZED");
  if (authorization.requesterId !== actorId || authorization.action !== operation) throw new Error("NOT_AUTHORIZED");
  if (authorization.lifecycle && authorization.lifecycle !== "ACTIVE") throw new Error("AUTHORIZATION_NOT_ACTIVE");
  if (authorization.expiresAt && new Date(authorization.expiresAt) <= new Date()) throw new Error("AUTHORIZATION_EXPIRED");
  if (!authorization.targetId) throw new Error("INVALID_INPUT");
  return authorization;
}

export interface RequestActionCommand {
  readonly actionId: Id; readonly actorId: Id; readonly authorizationId: Id; readonly operation: string;
  readonly idempotencyKey?: string; readonly requestedAt?: string;
}

export async function requestAction(repository: PersistenceRepository, command: RequestActionCommand): Promise<ActionRecord> {
  if (!command.actionId.trim() || !command.actorId.trim() || !command.authorizationId.trim() || !command.operation.trim()) throw new Error("INVALID_INPUT");
  const authorization = requireAuthorization(repository, command.authorizationId, command.actorId, command.operation);
  if (command.idempotencyKey) {
    const existing = await repository.transaction((tx) => tx.findActionByIdempotencyKey(command.idempotencyKey!));
    if (existing) {
      if (existing.actorId !== command.actorId || existing.authorizationId !== command.authorizationId || existing.operation !== command.operation) throw new Error("IDEMPOTENCY_CONFLICT");
      return existing;
    }
  }
  const timestamp = nowIso(command.requestedAt);
  const action: ActionRecord = { id: command.actionId, actorId: command.actorId, authorizationId: authorization.id, operation: command.operation, state: "AUTHORIZED",
    ...(command.idempotencyKey ? { idempotencyKey: command.idempotencyKey } : {}), createdAt: timestamp, updatedAt: timestamp, version: 1 };
  await repository.transaction((tx) => {
    tx.insert("actions", action);
    tx.insert("events", { id: (command.actionId + ":authorized") as Id, actionId: command.actionId, type: "ACTION_AUTHORIZED", state: "AUTHORIZED", occurredAt: timestamp, source: "royal-city-core", version: 1 });
  });
  return action;
}

export async function transitionAction(repository: PersistenceRepository, actionId: Id, to: ActionRecord["state"], eventId: Id, occurredAt?: string): Promise<ActionRecord> {
  const action = repository.read("actions", actionId);
  if (!action) throw new Error("NOT_FOUND");
  if (!transitionAllowed(action.state, to)) throw new Error("INVALID_TRANSITION");
  const timestamp = nowIso(occurredAt);
  const next: ActionRecord = { ...action, state: to, updatedAt: timestamp, version: action.version + 1 };
  const event: EventRecord = { id: eventId, actionId, type: "ACTION_" + to, state: to, occurredAt: timestamp, source: "royal-city-core", version: next.version };
  await repository.transaction((tx) => { tx.replace("actions", next); tx.insert("events", event); });
  return next;
}

export async function executeAction(repository: PersistenceRepository, actionId: Id, executor: () => Promise<ActionOutcome>, eventIdFactory: (state: ActionRecord["state"], version: number) => Id): Promise<ActionRecord> {
  let action = repository.read("actions", actionId);
  if (!action) throw new Error("NOT_FOUND");
  requireAuthorization(repository, action.authorizationId, action.actorId, action.operation);
  if (action.state === "SUCCEEDED" || action.state === "FAILED" || action.state === "CANCELLED") return action;
  action = await transitionAction(repository, action.id, "EXECUTING", eventIdFactory("EXECUTING", action.version + 1));
  let outcome: ActionOutcome;
  try { outcome = await executor(); } catch { outcome = "FAILED"; }
  return transitionAction(repository, action.id, outcome, eventIdFactory(outcome, action.version + 1));
}
