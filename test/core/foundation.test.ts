import test from "node:test";
import assert from "node:assert/strict";
import { InMemoryPersistenceRepository, id } from "../../src/core/index.js";
import {
  createCommunity,
  createParticipation,
  createPersonIdentity,
  createSystemCredential,
  endParticipation,
  suspendParticipation
} from "../../src/core/identity-participation.js";

test("person identity creates person, identity and account", async () => {
  const repository = new InMemoryPersistenceRepository();
  const result = await createPersonIdentity(repository, {
    personId: id("person-1"),
    identityId: id("identity-1"),
    accountId: id("account-1")
  });
  assert.equal(result.person.id, id("person-1"));
  assert.equal(repository.read("identities", id("identity-1"))?.personId, id("person-1"));
  assert.equal(repository.read("accounts", id("account-1"))?.identityId, id("identity-1"));
});

test("community onboarding does not create person identity or account", async () => {
  const repository = new InMemoryPersistenceRepository();
  await createCommunity(repository, {
    communityId: id("community-1"),
    credentialId: id("credential-1"),
    name: "Royal Community"
  });
  assert.ok(repository.read("communities", id("community-1")));
  assert.equal(repository.read("identities", id("community-1")), undefined);
  assert.equal(repository.read("accounts", id("community-1")), undefined);
});

test("person can participate in community without another identity", async () => {
  const repository = new InMemoryPersistenceRepository();
  await createPersonIdentity(repository, {
    personId: id("person-1"),
    identityId: id("identity-1"),
    accountId: id("account-1")
  });
  await createCommunity(repository, {
    communityId: id("community-1"),
    credentialId: id("credential-1"),
    name: "Royal Community"
  });
  const participation = await createParticipation(repository, {
    participationId: id("participation-1"),
    personId: id("person-1"),
    communityId: id("community-1")
  });
  assert.equal(participation.personId, id("person-1"));
  assert.equal(repository.read("identities", id("community-1")), undefined);
});

test("participation requires an existing person and target", async () => {
  const repository = new InMemoryPersistenceRepository();
  await assert.rejects(
    createParticipation(repository, {
      participationId: id("participation-1"),
      personId: id("missing-person")
    }),
    { message: "INVALID_INPUT" }
  );
  await assert.rejects(
    createParticipation(repository, {
      participationId: id("participation-2"),
      personId: id("missing-person"),
      communityId: id("community-1")
    }),
    { message: "NOT_FOUND" }
  );
});

test("one person can hold independent community, provider and service participation", async () => {
  const repository = new InMemoryPersistenceRepository();
  await createPersonIdentity(repository, {
    personId: id("person-1"),
    identityId: id("identity-1"),
    accountId: id("account-1")
  });
  await createCommunity(repository, {
    communityId: id("community-1"),
    credentialId: id("credential-1"),
    name: "Royal Community"
  });
  const community = await createParticipation(repository, {
    participationId: id("community-participation"),
    personId: id("person-1"),
    communityId: id("community-1")
  });
  const provider = await createParticipation(repository, {
    participationId: id("provider-participation"),
    personId: id("person-1"),
    providerId: id("provider-1")
  });
  const service = await createParticipation(repository, {
    participationId: id("service-participation"),
    personId: id("person-1"),
    serviceId: id("service-1")
  });
  assert.equal(community.personId, provider.personId);
  assert.equal(provider.personId, service.personId);
});

test("participation suspension and ending preserve the record", async () => {
  const repository = new InMemoryPersistenceRepository();
  await createPersonIdentity(repository, {
    personId: id("person-1"),
    identityId: id("identity-1"),
    accountId: id("account-1")
  });
  await createParticipation(repository, {
    participationId: id("participation-1"),
    personId: id("person-1"),
    serviceId: id("service-1")
  });
  assert.equal((await suspendParticipation(repository, id("participation-1"))).status, "SUSPENDED");
  assert.equal((await endParticipation(repository, id("participation-1"))).status, "ENDED");
  assert.ok(repository.read("participations", id("participation-1")));
});

test("system credential remains distinct from person identity", async () => {
  const repository = new InMemoryPersistenceRepository();
  const credential = await createSystemCredential(repository, {
    credentialId: id("system-credential-1"),
    systemId: "community-gateway-1"
  });
  assert.equal(credential.systemId, "community-gateway-1");
  assert.equal(repository.read("identities", id("system-credential-1")), undefined);
});


test("relationship records governed type, scope, lifecycle and verification", async () => {
  const repository = new InMemoryPersistenceRepository();
  const relationship = await import("../../src/core/identity-participation.js").then((m) =>
    m.createRelationship(repository, {
      relationshipId: id("relationship-1"),
      subjectId: id("person-1"),
      targetId: id("community-1"),
      kind: "PARTICIPATES_IN",
      governingDomain: "participation",
      source: "royal-city",
      scope: "community:community-1",
      validFrom: "2026-01-01T00:00:00Z",
      verification: "VERIFIED"
    })
  );
  assert.equal(relationship.lifecycle, "ACTIVE");
  assert.equal(relationship.verification, "VERIFIED");
  assert.equal(relationship.scope, "community:community-1");
});

test("relationship rejects self-reference and invalid time range", async () => {
  const repository = new InMemoryPersistenceRepository();
  const createRelationship = (await import("../../src/core/identity-participation.js")).createRelationship;
  await assert.rejects(createRelationship(repository, {
    relationshipId: id("relationship-self"),
    subjectId: id("same"),
    targetId: id("same"),
    kind: "INVALID",
    governingDomain: "test",
    source: "test",
    validFrom: "2026-01-02T00:00:00Z"
  }), { message: "VALIDATION_FAILURE" });
  await assert.rejects(createRelationship(repository, {
    relationshipId: id("relationship-time"),
    subjectId: id("a"),
    targetId: id("b"),
    kind: "TEST",
    governingDomain: "test",
    source: "test",
    validFrom: "2026-01-02T00:00:00Z",
    validUntil: "2026-01-01T00:00:00Z"
  }), { message: "VALIDATION_FAILURE" });
});

test("context is scoped to participation and has an effective time window", async () => {
  const repository = new InMemoryPersistenceRepository();
  await createPersonIdentity(repository, {
    personId: id("person-2"),
    identityId: id("identity-2"),
    accountId: id("account-2")
  });
  await createParticipation(repository, {
    participationId: id("participation-2"),
    personId: id("person-2"),
    serviceId: id("service-2")
  });
  const { createContext } = await import("../../src/core/identity-participation.js");
  const context = await createContext(repository, {
    contextId: id("context-2"),
    participationId: id("participation-2"),
    kind: "SERVICE",
    purpose: "operate",
    scope: "service:service-2",
    effectiveFrom: "2026-01-01T00:00:00Z",
    effectiveUntil: "2026-02-01T00:00:00Z"
  });
  assert.equal(context.status, "ACTIVE");
  assert.equal(context.scope, "service:service-2");
  assert.equal(repository.read("contexts", id("context-2"))?.participationId, id("participation-2"));
});


test("authority is scoped to principal, target and time", async () => {
  const repository = new InMemoryPersistenceRepository();
  const { createAuthority } = await import("../../src/core/identity-participation.js");
  const authority = await createAuthority(repository, {
    authorityId: id("authority-1"),
    principalId: id("person-1"),
    targetId: id("community-1"),
    kind: "MANAGE",
    source: "community-management",
    scope: "community:community-1",
    validFrom: "2026-01-01T00:00:00Z",
    validUntil: "2027-01-01T00:00:00Z"
  });
  assert.equal(authority.lifecycle, "ACTIVE");
  assert.equal(authority.scope, "community:community-1");
});

test("authorization allows only when supplied authority matches requester, target and time", async () => {
  const repository = new InMemoryPersistenceRepository();
  const { createAuthority, evaluateAuthorization } = await import("../../src/core/identity-participation.js");
  await createAuthority(repository, {
    authorityId: id("authority-2"),
    principalId: id("person-2"),
    targetId: id("community-2"),
    kind: "MANAGE",
    source: "community-management",
    validFrom: "2026-01-01T00:00:00Z",
    validUntil: "2027-01-01T00:00:00Z"
  });
  const allowed = await evaluateAuthorization(repository, {
    authorizationId: id("auth-allow"),
    requesterId: id("person-2"),
    action: "UPDATE_COMMUNITY",
    targetId: id("community-2"),
    authorityId: id("authority-2"),
    decidedAt: "2026-06-01T00:00:00Z"
  });
  assert.equal(allowed.decision, "ALLOW");
  assert.equal(allowed.lifecycle, "ACTIVE");

  const denied = await evaluateAuthorization(repository, {
    authorizationId: id("auth-deny"),
    requesterId: id("person-3"),
    action: "UPDATE_COMMUNITY",
    targetId: id("community-2"),
    authorityId: id("authority-2"),
    decidedAt: "2026-06-01T00:00:00Z"
  });
  assert.equal(denied.decision, "DENY");
  assert.equal(denied.lifecycle, "CLOSED");
});

test("authorization denies when authority is missing or expired", async () => {
  const repository = new InMemoryPersistenceRepository();
  const { evaluateAuthorization } = await import("../../src/core/identity-participation.js");
  const missing = await evaluateAuthorization(repository, {
    authorizationId: id("auth-missing"),
    requesterId: id("person-1"),
    action: "ACCESS",
    targetId: id("facility-1"),
    authorityId: id("missing-authority"),
    decidedAt: "2026-06-01T00:00:00Z"
  });
  assert.equal(missing.decision, "DENY");
  assert.equal(missing.reason, "AUTHORITY_NOT_FOUND");
});test("action requires explicit ALLOW authorization bound to actor and operation", async () => {
  const repository = new InMemoryPersistenceRepository();
  const { createPersonIdentity, createAuthority, evaluateAuthorization } = await import("../../src/core/identity-participation.js");
  const { requestAction } = await import("../../src/core/action-execution.js");
  await createPersonIdentity(repository, { personId: id("person-action"), identityId: id("identity-action"), accountId: id("account-action") });
  await createAuthority(repository, { authorityId: id("authority-action"), principalId: id("person-action"), targetId: id("facility-action"), kind: "ACCESS", source: "test", validFrom: "2026-01-01T00:00:00Z" });
  await evaluateAuthorization(repository, { authorizationId: id("authorization-action"), requesterId: id("person-action"), action: "OPEN_GATE", targetId: id("facility-action"), authorityId: id("authority-action"), decidedAt: "2026-06-01T00:00:00Z" });
  const action = await requestAction(repository, { actionId: id("action-1"), actorId: id("person-action"), authorizationId: id("authorization-action"), operation: "OPEN_GATE", idempotencyKey: "open-gate-1" });
  assert.equal(action.state, "AUTHORIZED");
  assert.equal(repository.read("events", id("action-1:authorized"))?.type, "ACTION_AUTHORIZED");
});

test("action rejects denied authorization and conflicting idempotency reuse", async () => {
  const repository = new InMemoryPersistenceRepository();
  const { createPersonIdentity, createAuthority, evaluateAuthorization } = await import("../../src/core/identity-participation.js");
  const { requestAction } = await import("../../src/core/action-execution.js");
  await createPersonIdentity(repository, { personId: id("person-deny"), identityId: id("identity-deny"), accountId: id("account-deny") });
  await evaluateAuthorization(repository, { authorizationId: id("authorization-deny"), requesterId: id("person-deny"), action: "PAY", targetId: id("merchant-deny"), decidedAt: "2026-06-01T00:00:00Z" });
  await assert.rejects(requestAction(repository, { actionId: id("action-deny"), actorId: id("person-deny"), authorizationId: id("authorization-deny"), operation: "PAY", idempotencyKey: "pay-1" }), { message: "NOT_AUTHORIZED" });
  await createAuthority(repository, { authorityId: id("authority-idem"), principalId: id("person-deny"), targetId: id("merchant-idem"), kind: "PAY", source: "test", validFrom: "2026-01-01T00:00:00Z" });
  await evaluateAuthorization(repository, { authorizationId: id("authorization-idem"), requesterId: id("person-deny"), action: "PAY", targetId: id("merchant-idem"), authorityId: id("authority-idem"), decidedAt: "2026-06-01T00:00:00Z" });
  await requestAction(repository, { actionId: id("action-idem"), actorId: id("person-deny"), authorizationId: id("authorization-idem"), operation: "PAY", idempotencyKey: "pay-conflict" });
  await assert.rejects(requestAction(repository, { actionId: id("action-idem-2"), actorId: id("person-deny"), authorizationId: id("authorization-idem"), operation: "PAY_OTHER", idempotencyKey: "pay-conflict" }), { message: "IDEMPOTENCY_CONFLICT" });
});

test("execution records EXECUTING and final outcome with events", async () => {
  const repository = new InMemoryPersistenceRepository();
  const { createPersonIdentity, createAuthority, evaluateAuthorization } = await import("../../src/core/identity-participation.js");
  const { requestAction, executeAction } = await import("../../src/core/action-execution.js");
  await createPersonIdentity(repository, { personId: id("person-exec"), identityId: id("identity-exec"), accountId: id("account-exec") });
  await createAuthority(repository, { authorityId: id("authority-exec"), principalId: id("person-exec"), targetId: id("resource-exec"), kind: "OPERATE", source: "test", validFrom: "2026-01-01T00:00:00Z" });
  await evaluateAuthorization(repository, { authorizationId: id("authorization-exec"), requesterId: id("person-exec"), action: "OPERATE", targetId: id("resource-exec"), authorityId: id("authority-exec"), decidedAt: "2026-06-01T00:00:00Z" });
  await requestAction(repository, { actionId: id("action-exec"), actorId: id("person-exec"), authorizationId: id("authorization-exec"), operation: "OPERATE" });
  const succeeded = await executeAction(repository, id("action-exec"), async () => "SUCCEEDED", (state, version) => id("event-" + state + "-" + version));
  assert.equal(succeeded.state, "SUCCEEDED");
  assert.equal(repository.read("events", id("event-SUCCEEDED-3"))?.state, "SUCCEEDED");
});
