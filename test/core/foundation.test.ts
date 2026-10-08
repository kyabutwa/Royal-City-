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
