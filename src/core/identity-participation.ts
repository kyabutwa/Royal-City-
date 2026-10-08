import type {
  AccountRecord,
  CommunityCredentialRecord,
  CommunityRecord,
  Id,
  IdentityRecord,
  ParticipationRecord,
  RelationshipRecord,
  ContextRecord,
  PersistenceRepository,
  PersonRecord,
  SystemCredentialRecord
} from "./persistence.js";

const requireText = (value: string): void => {
  if (!value.trim()) throw new Error("INVALID_INPUT");
};

const createId = (value: string): Id => {
  requireText(value);
  return value as Id;
};

export interface CreatePersonIdentityCommand {
  readonly personId: Id;
  readonly identityId: Id;
  readonly accountId: Id;
}

export async function createPersonIdentity(
  repository: PersistenceRepository,
  command: CreatePersonIdentityCommand
): Promise<{ person: PersonRecord; identity: IdentityRecord; account: AccountRecord }> {
  const personId = createId(command.personId);
  const identityId = createId(command.identityId);
  const accountId = createId(command.accountId);
  const person: PersonRecord = { id: personId };
  const identity: IdentityRecord = { id: identityId, personId };
  const account: AccountRecord = { id: accountId, identityId, status: "ACTIVE" };

  await repository.transaction((tx) => {
    tx.insert("persons", person);
    tx.insert("identities", identity);
    tx.insert("accounts", account);
  });
  return { person, identity, account };
}

export interface CreateCommunityCommand {
  readonly communityId: Id;
  readonly name: string;
  readonly credentialId: Id;
}

export async function createCommunity(
  repository: PersistenceRepository,
  command: CreateCommunityCommand
): Promise<{ community: CommunityRecord; credential: CommunityCredentialRecord }> {
  const communityId = createId(command.communityId);
  const credentialId = createId(command.credentialId);
  requireText(command.name);
  const community: CommunityRecord = { id: communityId, name: command.name.trim() };
  const credential: CommunityCredentialRecord = { id: credentialId, communityId, status: "ACTIVE" };

  await repository.transaction((tx) => {
    tx.insert("communities", community);
    tx.insert("communityCredentials", credential);
  });
  return { community, credential };
}

export interface CreateSystemCredentialCommand {
  readonly credentialId: Id;
  readonly systemId: string;
}

export async function createSystemCredential(
  repository: PersistenceRepository,
  command: CreateSystemCredentialCommand
): Promise<SystemCredentialRecord> {
  const credentialId = createId(command.credentialId);
  requireText(command.systemId);
  const credential: SystemCredentialRecord = {
    id: credentialId,
    systemId: command.systemId.trim(),
    status: "ACTIVE"
  };
  await repository.transaction((tx) => tx.insert("systemCredentials", credential));
  return credential;
}

export interface CreateParticipationCommand {
  readonly participationId: Id;
  readonly personId: Id;
  readonly communityId?: Id;
  readonly providerId?: Id;
  readonly serviceId?: Id;
}

export async function createParticipation(
  repository: PersistenceRepository,
  command: CreateParticipationCommand
): Promise<ParticipationRecord> {
  const participationId = createId(command.participationId);
  const personId = createId(command.personId);
  if (!command.communityId && !command.providerId && !command.serviceId) throw new Error("INVALID_INPUT");

  const participation: ParticipationRecord = {
    id: participationId,
    personId,
    ...(command.communityId ? { communityId: createId(command.communityId) } : {}),
    ...(command.providerId ? { providerId: createId(command.providerId) } : {}),
    ...(command.serviceId ? { serviceId: createId(command.serviceId) } : {}),
    status: "ACTIVE"
  };
  await repository.transaction((tx) => tx.insert("participations", participation));
  return participation;
}

export async function suspendParticipation(
  repository: PersistenceRepository,
  participationId: Id
): Promise<ParticipationRecord> {
  return repository.transaction((tx) => {
    const current = tx.get("participations", participationId);
    if (!current) throw new Error("NOT_FOUND");
    if (current.status === "ENDED") throw new Error("VALIDATION_FAILURE");
    const updated = { ...current, status: "SUSPENDED" as const };
    tx.replace("participations", updated);
    return updated;
  });
}

export async function endParticipation(
  repository: PersistenceRepository,
  participationId: Id
): Promise<ParticipationRecord> {
  return repository.transaction((tx) => {
    const current = tx.get("participations", participationId);
    if (!current) throw new Error("NOT_FOUND");
    if (current.status === "ENDED") throw new Error("VALIDATION_FAILURE");
    const updated = { ...current, status: "ENDED" as const };
    tx.replace("participations", updated);
    return updated;
  });
}


export interface CreateRelationshipCommand {
  readonly relationshipId: Id;
  readonly subjectId: Id;
  readonly targetId: Id;
  readonly kind: string;
  readonly governingDomain: string;
  readonly source: string;
  readonly lifecycle?: "PROPOSED" | "PENDING" | "ACTIVE" | "SUSPENDED" | "EXPIRED" | "REVOKED" | "CLOSED" | "SUPERSEDED";
  readonly verification?: "DECLARED" | "OBSERVED" | "VERIFIED" | "INFERRED" | "PROPOSED";
  readonly scope?: string;
  readonly validFrom: string;
  readonly validUntil?: string;
}

const canonicalTime = (value: string): string => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) throw new Error("INVALID_INPUT");
  return parsed.toISOString();
};

export async function createRelationship(
  repository: PersistenceRepository,
  command: CreateRelationshipCommand
): Promise<RelationshipRecord> {
  if (!command.subjectId.trim() || !command.targetId.trim() || !command.kind.trim() ||
      !command.governingDomain.trim() || !command.source.trim()) {
    throw new Error("INVALID_INPUT");
  }
  if (command.subjectId === command.targetId) throw new Error("VALIDATION_FAILURE");

  const validFrom = canonicalTime(command.validFrom);
  const validUntil = command.validUntil ? canonicalTime(command.validUntil) : undefined;
  if (validUntil && new Date(validUntil) <= new Date(validFrom)) throw new Error("VALIDATION_FAILURE");

  const relationship: RelationshipRecord = {
    id: command.relationshipId,
    subjectId: command.subjectId,
    targetId: command.targetId,
    kind: command.kind.trim(),
    governingDomain: command.governingDomain.trim(),
    source: command.source.trim(),
    lifecycle: command.lifecycle ?? "ACTIVE",
    verification: command.verification ?? "DECLARED",
    ...(command.scope ? { scope: command.scope.trim() } : {}),
    validFrom,
    ...(validUntil ? { validUntil } : {})
  };

  await repository.transaction((tx) => tx.insert("relationships", relationship));
  return relationship;
}

export interface CreateContextCommand {
  readonly contextId: Id;
  readonly participationId: Id;
  readonly kind: string;
  readonly placeId?: Id;
  readonly communityId?: Id;
  readonly purpose?: string;
  readonly scope?: string;
  readonly effectiveFrom: string;
  readonly effectiveUntil?: string;
}

export async function createContext(
  repository: PersistenceRepository,
  command: CreateContextCommand
): Promise<ContextRecord> {
  if (!command.contextId.trim() || !command.participationId.trim() || !command.kind.trim()) {
    throw new Error("INVALID_INPUT");
  }
  const effectiveFrom = canonicalTime(command.effectiveFrom);
  const effectiveUntil = command.effectiveUntil ? canonicalTime(command.effectiveUntil) : undefined;
  if (effectiveUntil && new Date(effectiveUntil) <= new Date(effectiveFrom)) {
    throw new Error("VALIDATION_FAILURE");
  }

  const context: ContextRecord = {
    id: command.contextId,
    participationId: command.participationId,
    kind: command.kind.trim(),
    ...(command.placeId ? { placeId: command.placeId } : {}),
    ...(command.communityId ? { communityId: command.communityId } : {}),
    ...(command.purpose ? { purpose: command.purpose.trim() } : {}),
    ...(command.scope ? { scope: command.scope.trim() } : {}),
    effectiveFrom,
    ...(effectiveUntil ? { effectiveUntil } : {}),
    status: "ACTIVE"
  };

  await repository.transaction((tx) => tx.insert("contexts", context));
  return context;
}
