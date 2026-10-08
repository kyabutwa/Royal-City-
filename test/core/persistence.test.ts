import test from "node:test";
import assert from "node:assert/strict";
import { InMemoryPersistenceRepository, id } from "../src/core/index.js";

const person = id("person-1");
const identity = id("identity-1");
const account = id("account-1");
const community = id("community-1");
const credential = id("community-credential-1");
const participation = id("participation-1");
const relationship = id("relationship-1");
const context = id("context-1");
const authorization = id("authorization-1");
const action = id("action-1");
const event = id("event-1");

test("persistence commits a valid transaction atomically", async () => {
  const repository = new InMemoryPersistenceRepository();

  await repository.transaction((tx) => {
    tx.insert("persons", { id: person });
    tx.insert("identities", { id: identity, personId: person });
    tx.insert("accounts", { id: account, identityId: identity, status: "ACTIVE" });
    tx.insert("communities", { id: community, name: "Example Community" });
    tx.insert("communityCredentials", {
      id: credential,
      communityId: community,
      status: "ACTIVE"
    });
    tx.insert("participations", {
      id: participation,
      personId: person,
      communityId: community,
      status: "ACTIVE"
    });
    tx.insert("relationships", {
      id: relationship,
      subjectId: person,
      targetId: community,
      kind: "PARTICIPATES_IN",
      validFrom: "2026-01-01T00:00:00.000Z"
    });
    tx.insert("contexts", {
      id: context,
      participationId: participation,
      purpose: "community-operation"
    });
    tx.insert("authorizations", {
      id: authorization,
      actorId: identity,
      actionType: "community.example",
      decision: "ALLOW",
      validFrom: "2026-01-01T00:00:00.000Z",
      contextId: context,
      relationshipId: relationship
    });
    tx.insert("actions", {
      id: action,
      actorId: identity,
      authorizationId: authorization,
      operation: "community.example",
      state: "AUTHORIZED",
      idempotencyKey: "idem-1",
      createdAt: "2026-01-01T00:00:00.000Z",
      updatedAt: "2026-01-01T00:00:00.000Z",
      version: 1
    });
    tx.insert("events", {
      id: event,
      actionId: action,
      type: "ACTION_AUTHORIZED",
      state: "AUTHORIZED",
      occurredAt: "2026-01-01T00:00:00.000Z",
      source: "royal-city-core",
      version: 1
    });
  });

  assert.equal(repository.read("persons", person)?.id, person);
  assert.equal(repository.read("actions", action)?.version, 1);
  assert.equal(repository.read("events", event)?.actionId, action);
});

test("a failed transaction does not partially commit", async () => {
  const repository = new InMemoryPersistenceRepository();

  await assert.rejects(
    repository.transaction((tx) => {
      tx.insert("persons", { id: id("rollback-person") });
      tx.insert("identities", {
        id: id("rollback-identity"),
        personId: id("missing-person")
      });
    }),
    { message: "NOT_FOUND" }
  );

  assert.equal(repository.read("persons", id("rollback-person")), undefined);
  assert.equal(repository.read("identities", id("rollback-identity")), undefined);
});

test("duplicate ids fail with CONFLICT", async () => {
  const repository = new InMemoryPersistenceRepository();

  await repository.transaction((tx) => {
    tx.insert("persons", { id: id("duplicate-person") });
  });

  await assert.rejects(
    repository.transaction((tx) => {
      tx.insert("persons", { id: id("duplicate-person") });
    }),
    { message: "CONFLICT" }
  );
});

test("action idempotency can find an existing consequential action", async () => {
  const repository = new InMemoryPersistenceRepository();

  await repository.transaction((tx) => {
    tx.insert("persons", { id: id("idem-person") });
    tx.insert("identities", { id: id("idem-identity"), personId: id("idem-person") });
    tx.insert("authorizations", {
      id: id("idem-auth"),
      actorId: id("idem-identity"),
      actionType: "example",
      decision: "ALLOW",
      validFrom: "2026-01-01T00:00:00.000Z"
    });
    tx.insert("actions", {
      id: id("idem-action"),
      actorId: id("idem-identity"),
      authorizationId: id("idem-auth"),
      operation: "example",
      state: "AUTHORIZED",
      idempotencyKey: "same-key",
      createdAt: "2026-01-01T00:00:00.000Z",
      updatedAt: "2026-01-01T00:00:00.000Z",
      version: 1
    });
  });

  const found = await repository.transaction((tx) =>
    tx.findActionByIdempotencyKey("same-key")
  );
  assert.equal(found?.id, id("idem-action"));
});

test("invalid temporal relationship is rejected", async () => {
  const repository = new InMemoryPersistenceRepository();

  await assert.rejects(
    repository.transaction((tx) => {
      tx.insert("persons", { id: id("time-person") });
      tx.insert("communities", { id: id("time-community"), name: "Time Community" });
      tx.insert("relationships", {
        id: id("time-relationship"),
        subjectId: id("time-person"),
        targetId: id("time-community"),
        kind: "TEST",
        validFrom: "2026-01-02T00:00:00.000Z",
        validUntil: "2026-01-01T00:00:00.000Z"
      });
    }),
    { message: "VALIDATION_FAILURE" }
  );

  assert.equal(repository.read("persons", id("time-person")), undefined);
});
