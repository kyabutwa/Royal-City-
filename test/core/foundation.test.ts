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
