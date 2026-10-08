# Royal City — Implementation Migration Map

## Purpose

This document maps mature implementation material into Royal City without importing source-repository assumptions blindly.

## Verified source implementation evidence

### LEGAX

Verified implementation surfaces include:

- `src/core/contracts.ts`
  - lifecycle states;
  - authorization effects;
  - request context;
  - command envelope;
  - canonical runtime rules.
- `src/core/runtime.ts`
  - fail-closed consequential execution gate;
  - authorization binding;
  - command binding;
  - idempotency key requirement;
  - expected-version validation.
- `src/auth.ts`
  - account creation;
  - authentication;
  - session lifecycle;
  - identity/account/credential persistence.
- `src/onboarding.ts`
  - participant onboarding;
  - relationship establishment;
  - separation of participant relationship from authority.
- `tests/core-runtime.test.mjs`
  - request/trace context;
  - authorization fail-closed behavior;
  - malformed authorization rejection;
  - command authorization/idempotency binding;
  - expected-version validation.
- `db/migrations/0005_canonical_legax_schema.sql`
  - canonical schema migration and runtime invariant repair.

**Migration classification:** KEEP/ADAPT as implementation reference. Do not copy the `legax` schema name, product naming, or runtime assumptions into Royal City without a target implementation decision.

### LegaKeys

Verified implementation surfaces include:

- `implementation/identity/`
  - identity schema;
  - account governance;
  - evidence/biometric schema;
  - types and service contract.
- `implementation/authorization/`
  - authorization schema;
  - policy conditions;
  - decision history;
  - evidence/delegation references;
  - service contract and test cases.
- `implementation/action-event-evidence/`
  - action lifecycle;
  - execution attempts;
  - immutable events;
  - event outbox;
  - event consumption;
  - evidence;
  - action outcomes;
  - reconciliation state.
- `implementation/core-execution/`
  - authorization-to-execution binding;
  - target/action/principal matching;
  - effective/expiry checks;
  - capability checks;
  - execution guards;
  - terminal-state protection.
- `implementation/world/`
  - places;
  - physical entities;
  - resources;
  - world relationships;
  - world states;
  - observations;
  - provenance/truth-state support.
- Additional implementation domains include authority, capability, context, services, workspaces, Digital Twin, GENESIS, CONSTANTYNA, BeatAccess, BeatVisitor and World Intelligence.

**Migration classification:** KEEP/ADAPT as the strongest detailed implementation blueprint currently identified.

## Royal City implementation rule

Royal City currently has no implementation code in its repository tree. Therefore:

- source code cannot be declared migrated merely because its architecture has been mapped;
- target language/runtime/database/deployment choices remain implementation architecture decisions;
- source code should first be transformed into Royal City contracts;
- only then should code be ported/adapted into a Royal City runtime;
- every ported component must be independently tested and verified.

## Recommended port order

### P0 — Canonical foundation

Port/adapt:

1. identity/account/session primitives;
2. relationship model;
3. authority model;
4. authorization decision model;
5. action model;
6. lifecycle/state primitives;
7. record/event/evidence primitives.

### P1 — Execution integrity

Port/adapt:

1. request context;
2. authorization freshness;
3. command/action binding;
4. idempotency;
5. expected-version/concurrency checks;
6. execution guards;
7. retries/timeouts;
8. outcome and reconciliation;
9. immutable event/evidence behavior.

### P2 — World and participation

Port/adapt:

1. places;
2. community onboarding;
3. provider participation;
4. resources;
5. physical entities;
6. world relationships;
7. observations/telemetry;
8. provenance/truth states.

### P3 — Services and economy

Port/adapt:

1. service definitions;
2. provider adapters;
3. service requests/execution;
4. payment coordination;
5. refund/dispute coordination;
6. economic records;
7. external settlement adapters.

### P4 — Experience and intelligence

Port/adapt:

1. workspaces;
2. applications;
3. notifications;
4. Digital Twin;
5. world intelligence;
6. human interaction intelligence;
7. forecasting;
8. governed agents/automation.

## What must not be ported unchanged

- competing product names as canonical semantics;
- LegaKeys community identity/account semantics;
- competing NOS/platform authority;
- source-specific schema names;
- source-specific deployment assumptions;
- unverified production claims;
- duplicate identity/authorization/execution systems;
- features rejected by Royal City policy;
- provider-owned business rules that Royal City only coordinates;
- any implementation that bypasses Royal City authorization.

## Verification requirement

A migrated component is not considered complete until Royal City has evidence for:

`Source contract → Royal City adaptation → implementation → tests → integration → deployment → verification`

Source-repository GREEN/production status is evidence of source maturity, not proof of Royal City readiness.
