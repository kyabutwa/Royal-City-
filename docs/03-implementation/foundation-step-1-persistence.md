# Royal City — Technical Foundation Step 1: Persistence Boundary

## Status

**Step:** 1 — Canonical repository/persistence boundary  
**Status:** IMPLEMENTED at domain-port level  
**Production adapter:** OPEN / next implementation task

## Architectural decision

Royal City domain and application code must depend on a storage-neutral persistence contract.

The persistence boundary owns:

- record retrieval;
- record insertion;
- record replacement;
- atomic local transactions;
- reference validation;
- duplicate detection;
- consequential-action idempotency lookup.

A concrete database/storage engine is an implementation detail behind this boundary.

## Source reconciliation

### BeatOne contribution

Adopted:

- DB-neutral `PersistenceRepository`;
- typed record map;
- transaction callback;
- insert/replace separation;
- foreign-reference validation;
- duplicate protection;
- action idempotency lookup;
- atomic local commit pattern.

### LEGAX contribution

Adopted:

- explicit consequential-action authorization boundary;
- idempotency as a core execution concern;
- expected-version/concurrency concept;
- no-parallel-source-of-truth principle.

Expected-version enforcement will be implemented when the Action/Execution foundation is constructed.

### LegaKeys contribution

Adopted:

- separation of canonical domain contracts from implementation surfaces;
- explicit state/event/evidence boundaries;
- no parallel authority chain.

## Royal City adaptations

The persistence model does not copy the source repository's product schema.

Royal City currently establishes separate persistence concepts for:

- Person;
- Community;
- Person Identity;
- Person Account;
- Community Onboarding Credential;
- System Credential;
- Participation;
- Relationship;
- Context;
- Authorization;
- Action;
- Event;
- Evidence.

This preserves the canonical Royal City distinction:

`People have identity/account`

`Communities have onboarding credentials`

`Royal City is the NOS`

## Current implementation

`src/core/persistence.ts`

Defines the storage-neutral persistence port and typed record contract.

`src/core/memory-persistence.ts`

Provides a deterministic in-memory adapter for foundation testing.

`test/core/persistence.test.ts`

Verifies:

- valid atomic commit;
- rollback on failed transaction;
- duplicate-ID conflict;
- action idempotency lookup;
- temporal relationship validation.

## Important boundary

The in-memory adapter is a test/foundation implementation.

It is **not** the production persistence solution.

The production adapter must later be selected and implemented without changing the canonical domain contract.

## Open items intentionally not decided here

- production database/vendor;
- physical SQL schema;
- migration tooling;
- transaction isolation level;
- distributed transaction strategy;
- event outbox implementation;
- encryption/key-management architecture;
- backup/restore architecture;
- data retention/deletion policy;
- complete non-person identity taxonomy;
- complete provider/system entity persistence model.

Those belong to later technical foundation steps and must not be inferred from source repositories.
