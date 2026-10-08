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
      requireText(record.name);
      return;

    case "identities":
      requireReference(tx, "persons", record.personId);
      return;

    case "accounts":
      requireReference(tx, "identities", record.identityId);
      return;

    case "communityCredentials":
      requireReference(tx, "communities", record.communityId);
      return;

    case "systemCredentials":
      requireText(record.systemId);
      return;

    case "participations":
      requireReference(tx, "persons", record.personId);
      if (record.communityId) requireReference(tx, "communities", record.communityId);
      if (record.providerId) requireText(record.providerId);
      if (record.serviceId) requireText(record.serviceId);
      return;

    case "relationships": {
      requireText(record.subjectId);
      requireText(record.targetId);
      requireText(record.kind);
      const from = new Date(record.validFrom);
      if (Number.isNaN(from.getTime())) throw new Error("INVALID_INPUT");
      if (record.validUntil) {
        const until = new Date(record.validUntil);
        if (Number.isNaN(until.getTime())) throw new Error("INVALID_INPUT");
        if (until <= from) throw new Error("VALIDATION_FAILURE");
      }
      if (record.subjectId === record.targetId) {
        throw new Error("VALIDATION_FAILURE");
      }
      return;
    }

    case "contexts":
      requireReference(tx, "participations", record.participationId);
      if (record.purpose !== undefined) requireText(record.purpose);
      return;

    case "authorizations":
      requireText(record.actorId);
      requireText(record.actionType);
      requireText(record.validFrom);
      if (record.relationshipId) requireReference(tx, "relationships", record.relationshipId);
      if (record.contextId) requireReference(tx, "contexts", record.contextId);
      if (record.validUntil) {
        const from = new Date(record.validFrom);
        const until = new Date(record.validUntil);
        if (Number.isNaN(from.getTime()) || Number.isNaN(until.getTime())) {
          throw new Error("INVALID_INPUT");
        }
        if (until <= from) throw new Error("VALIDATION_FAILURE");
      }
      return;

    case "actions":
      requireReference(tx, "authorizations", record.authorizationId);
      requireText(record.actorId);
      requireText(record.operation);
      requireText(record.createdAt);
      requireText(record.updatedAt);
      if (record.idempotencyKey) requireText(record.idempotencyKey);
      if (!Number.isSafeInteger(record.version) || record.version < 1) {
        throw new Error("VALIDATION_FAILURE");
      }
      return;

    case "events":
      requireReference(tx, "actions", record.actionId);
      requireText(record.type);
      requireText(record.source);
      requireText(record.occurredAt);
      if (!Number.isSafeInteger(record.version) || record.version < 1) {
        throw new Error("VALIDATION_FAILURE");
      }
      return;

    case "evidence":
      requireText(record.source);
      requireText(record.recordedAt);
      if (record.eventId) requireReference(tx, "events", record.eventId);
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
