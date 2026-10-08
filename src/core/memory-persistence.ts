import type {
  ActionRecord,
  Id,
  PersistenceRecordMap,
  PersistenceRepository,
  PersistenceTransaction,
  RepositoryTable
} from "./persistence.js";

type StoredRecord = PersistenceRecordMap[RepositoryTable];
type Store = Map<RepositoryTable, Map<Id, StoredRecord>>;

const TABLES: readonly RepositoryTable[] = [
  "persons",
  "communities",
  "identities",
  "accounts",
  "communityCredentials",
  "systemCredentials",
  "participations",
  "relationships",
  "contexts",
  "authorizations",
  "actions",
  "events",
  "evidence"
];

function cloneStore(source: Store): Store {
  return new Map(
    TABLES.map((table) => [
      table,
      new Map(source.get(table) ?? [])
    ])
  );
}

function emptyStore(): Store {
  return new Map(TABLES.map((table) => [table, new Map()]));
}

function requireText(value: string, code = "INVALID_INPUT"): void {
  if (!value.trim()) throw new Error(code);
}

function requireReference(
  tx: PersistenceTransaction,
  table: RepositoryTable,
  recordId: Id
): void {
  if (!tx.get(table, recordId)) throw new Error("NOT_FOUND");
}

function validateRecord(
  table: RepositoryTable,
  record: StoredRecord,
  tx: PersistenceTransaction,
  replacing: boolean
): void {
  requireText(record.id);

  if (!replacing && tx.get(table, record.id)) {
    throw new Error("CONFLICT");
  }

  switch (table) {
    case "persons":
      return;

    case "communities":
      requireText((record as PersistenceRecordMap["communities"]).name);
      return;

    case "identities":
      requireReference(tx, "persons", (record as PersistenceRecordMap["identities"]).personId);
      return;

    case "accounts":
      requireReference(tx, "identities", (record as PersistenceRecordMap["accounts"]).identityId);
      return;

    case "communityCredentials":
      requireReference(tx, "communities", (record as PersistenceRecordMap["communityCredentials"]).communityId);
      return;

    case "systemCredentials":
      requireText((record as PersistenceRecordMap["systemCredentials"]).systemId);
      return;

    case "participations":
      requireReference(tx, "persons", (record as PersistenceRecordMap["participations"]).personId);
      if ((record as PersistenceRecordMap["participations"]).communityId) requireReference(tx, "communities", (record as PersistenceRecordMap["participations"]).communityId);
      if ((record as PersistenceRecordMap["participations"]).providerId) requireText((record as PersistenceRecordMap["participations"]).providerId);
      if ((record as PersistenceRecordMap["participations"]).serviceId) requireText((record as PersistenceRecordMap["participations"]).serviceId);
      return;

    case "relationships": {
      requireText((record as PersistenceRecordMap["relationships"]).subjectId);
      requireText((record as PersistenceRecordMap["relationships"]).targetId);
      requireText((record as PersistenceRecordMap["relationships"]).kind);
      const from = new Date((record as PersistenceRecordMap["relationships"]).validFrom);
      if (Number.isNaN(from.getTime())) throw new Error("INVALID_INPUT");
      if ((record as PersistenceRecordMap["relationships"]).validUntil) {
        const until = new Date((record as PersistenceRecordMap["relationships"]).validUntil!);
        if (Number.isNaN(until.getTime())) throw new Error("INVALID_INPUT");
        if (until <= from) throw new Error("VALIDATION_FAILURE");
      }
      if ((record as PersistenceRecordMap["relationships"]).subjectId === (record as PersistenceRecordMap["relationships"]).targetId) {
        throw new Error("VALIDATION_FAILURE");
      }
      return;
    }

    case "contexts":
      requireReference(tx, "participations", (record as PersistenceRecordMap["contexts"]).participationId);
      if ((record as PersistenceRecordMap["contexts"]).purpose !== undefined) requireText((record as PersistenceRecordMap["contexts"]).purpose!);
      return;

    case "authorizations":
      requireText((record as PersistenceRecordMap["authorizations"]).actorId);
      requireText((record as PersistenceRecordMap["authorizations"]).actionType);
      requireText((record as PersistenceRecordMap["authorizations"]).validFrom);
      if ((record as PersistenceRecordMap["authorizations"]).relationshipId) requireReference(tx, "relationships", (record as PersistenceRecordMap["authorizations"]).relationshipId!);
      if ((record as PersistenceRecordMap["authorizations"]).contextId) requireReference(tx, "contexts", (record as PersistenceRecordMap["authorizations"]).contextId!);
      if ((record as PersistenceRecordMap["authorizations"]).validUntil) {
        const from = new Date((record as PersistenceRecordMap["authorizations"]).validFrom);
        const until = new Date((record as PersistenceRecordMap["authorizations"]).validUntil!);
        if (Number.isNaN(from.getTime()) || Number.isNaN(until.getTime())) {
          throw new Error("INVALID_INPUT");
        }
        if (until <= from) throw new Error("VALIDATION_FAILURE");
      }
      return;

    case "actions":
      requireReference(tx, "authorizations", (record as PersistenceRecordMap["actions"]).authorizationId);
      requireText((record as PersistenceRecordMap["actions"]).actorId);
      requireText((record as PersistenceRecordMap["actions"]).operation);
      requireText((record as PersistenceRecordMap["actions"]).createdAt);
      requireText((record as PersistenceRecordMap["actions"]).updatedAt);
      if ((record as PersistenceRecordMap["actions"]).idempotencyKey) requireText((record as PersistenceRecordMap["actions"]).idempotencyKey!);
      if (!Number.isSafeInteger((record as PersistenceRecordMap["actions"]).version) || (record as PersistenceRecordMap["actions"]).version < 1) {
        throw new Error("VALIDATION_FAILURE");
      }
      return;

    case "events":
      requireReference(tx, "actions", (record as PersistenceRecordMap["events"]).actionId);
      requireText((record as PersistenceRecordMap["events"]).type);
      requireText((record as PersistenceRecordMap["events"]).source);
      requireText((record as PersistenceRecordMap["events"]).occurredAt);
      if (!Number.isSafeInteger((record as PersistenceRecordMap["events"]).version) || (record as PersistenceRecordMap["events"]).version < 1) {
        throw new Error("VALIDATION_FAILURE");
      }
      return;

    case "evidence":
      requireText((record as PersistenceRecordMap["evidence"]).source);
      requireText((record as PersistenceRecordMap["evidence"]).recordedAt);
      if ((record as PersistenceRecordMap["evidence"]).eventId) requireReference(tx, "events", (record as PersistenceRecordMap["evidence"]).eventId!);
      return;
  }
}

export class InMemoryPersistenceRepository implements PersistenceRepository {
  private store: Store = emptyStore();

  read<T extends RepositoryTable>(
    table: T,
    recordId: Id
  ): PersistenceRecordMap[T] | undefined {
    return this.store.get(table)?.get(recordId) as PersistenceRecordMap[T] | undefined;
  }

  async transaction<T>(
    work: (tx: PersistenceTransaction) => Promise<T> | T
  ): Promise<T> {
    const working = cloneStore(this.store);
    let result!: T;

    const tx: PersistenceTransaction = {
      get: (table, recordId) =>
        working.get(table)?.get(recordId) as PersistenceRecordMap[typeof table] | undefined,

      insert: (table, record) => {
        validateRecord(table, record as StoredRecord, tx, false);
        working.get(table)!.set(record.id, record as StoredRecord);
      },

      replace: (table, record) => {
        if (!tx.get(table, record.id)) throw new Error("NOT_FOUND");
        validateRecord(table, record as StoredRecord, tx, true);
        working.get(table)!.set(record.id, record as StoredRecord);
      },

      findActionByIdempotencyKey: (key): ActionRecord | undefined => {
        requireText(key);
        for (const value of working.get("actions")!.values()) {
          const action = value as ActionRecord;
          if (action.idempotencyKey === key) return action;
        }
        return undefined;
      }
    };

    result = await work(tx);
    this.store = working;
    return result;
  }
}
