/**
 * Royal City canonical persistence boundary.
 *
 * Domain/application code depends on these contracts only.
 * Concrete storage engines implement the port.
 */

export type Id = string & { readonly __brand: "RoyalCityId" };

export function id(value: string): Id {
  if (!value.trim()) throw new Error("INVALID_ID");
  return value as Id;
}

export type RepositoryTable =
  | "persons"
  | "communities"
  | "identities"
  | "accounts"
  | "communityCredentials"
  | "systemCredentials"
  | "participations"
  | "relationships"
  | "contexts"
  | "authorizations"
  | "actions"
  | "events"
  | "evidence";

export interface PersonRecord {
  readonly id: Id;
}

export interface CommunityRecord {
  readonly id: Id;
  readonly name: string;
}

export interface IdentityRecord {
  readonly id: Id;
  readonly personId: Id;
}

export interface AccountRecord {
  readonly id: Id;
  readonly identityId: Id;
  readonly status: "ACTIVE" | "SUSPENDED" | "CLOSED";
}

export interface CommunityCredentialRecord {
  readonly id: Id;
  readonly communityId: Id;
  readonly status: "ACTIVE" | "REVOKED" | "EXPIRED";
}

export interface SystemCredentialRecord {
  readonly id: Id;
  readonly systemId: Id;
  readonly status: "ACTIVE" | "REVOKED" | "EXPIRED";
}

export interface ParticipationRecord {
  readonly id: Id;
  readonly personId: Id;
  readonly communityId?: Id;
  readonly providerId?: Id;
  readonly serviceId?: Id;
  readonly status: "ACTIVE" | "SUSPENDED" | "ENDED";
}

export interface RelationshipRecord {
  readonly id: Id;
  readonly subjectId: Id;
  readonly targetId: Id;
  readonly kind: string;
  readonly validFrom: string;
  readonly validUntil?: string;
}

export interface ContextRecord {
  readonly id: Id;
  readonly participationId: Id;
  readonly placeId?: Id;
  readonly purpose?: string;
}

export interface AuthorizationRecord {
  readonly id: Id;
  readonly actorId: Id;
  readonly actionType: string;
  readonly decision: "ALLOW" | "DENY";
  readonly validFrom: string;
  readonly validUntil?: string;
  readonly scope?: string;
  readonly relationshipId?: Id;
  readonly contextId?: Id;
}

export interface ActionRecord {
  readonly id: Id;
  readonly actorId: Id;
  readonly authorizationId: Id;
  readonly operation: string;
  readonly state:
    | "REQUESTED"
    | "AUTHORIZED"
    | "EXECUTING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | "REJECTED"
    | "UNKNOWN";
  readonly idempotencyKey?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly version: number;
}

export interface EventRecord {
  readonly id: Id;
  readonly actionId: Id;
  readonly type: string;
  readonly state: ActionRecord["state"];
  readonly occurredAt: string;
  readonly source: string;
  readonly version: number;
}

export interface EvidenceRecord {
  readonly id: Id;
  readonly eventId?: Id;
  readonly source: string;
  readonly verification: "UNVERIFIED" | "VERIFIED" | "REJECTED";
  readonly recordedAt: string;
  readonly externalProvider?: string;
  readonly externalReference?: string;
}

export interface PersistenceRecordMap {
  persons: PersonRecord;
  communities: CommunityRecord;
  identities: IdentityRecord;
  accounts: AccountRecord;
  communityCredentials: CommunityCredentialRecord;
  systemCredentials: SystemCredentialRecord;
  participations: ParticipationRecord;
  relationships: RelationshipRecord;
  contexts: ContextRecord;
  authorizations: AuthorizationRecord;
  actions: ActionRecord;
  events: EventRecord;
  evidence: EvidenceRecord;
}

export interface PersistenceTransaction {
  get<T extends RepositoryTable>(
    table: T,
    recordId: Id
  ): PersistenceRecordMap[T] | undefined;

  insert<T extends RepositoryTable>(
    table: T,
    record: PersistenceRecordMap[T]
  ): void;

  replace<T extends RepositoryTable>(
    table: T,
    record: PersistenceRecordMap[T]
  ): void;

  findActionByIdempotencyKey(
    key: string
  ): ActionRecord | undefined;
}

export interface PersistenceRepository {
  read<T extends RepositoryTable>(
    table: T,
    recordId: Id
  ): PersistenceRecordMap[T] | undefined;

  transaction<T>(
    work: (tx: PersistenceTransaction) => Promise<T> | T
  ): Promise<T>;
}
