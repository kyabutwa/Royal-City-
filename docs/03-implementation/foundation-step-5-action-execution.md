# Royal City — Technical Foundation Step 5: Action + Execution

## Status

**Step:** 5 — Action + Execution  
**Status:** IMPLEMENTED and CI-verified

## Canonical control chain

Royal City now has an executable path:

`IDENTITY → PARTICIPATION → RELATIONSHIP → CONTEXT → AUTHORITY → AUTHORIZATION → ACTION → EXECUTION → OUTCOME`

The key boundary is:

> **Authorization is permission, not execution.**

An ALLOW decision cannot itself mutate a domain resource.

## Action

An Action is the durable Royal City execution object that binds:

- actor;
- authorization decision;
- operation;
- action state;
- optional idempotency key;
- creation/update timestamps;
- optimistic version.

A requested consequential operation must be bound to an explicit ALLOW authorization.

The authorization is checked against:

- actor/requester;
- operation;
- authorization lifecycle;
- authorization expiry;
- target presence.

A denied authorization cannot create a consequential Action.

## Action lifecycle

The foundation supports:

`REQUESTED → AUTHORIZED → EXECUTING → SUCCEEDED / FAILED / CANCELLED / UNKNOWN`

with explicit rejection/cancellation paths.

Terminal outcomes are not silently converted into another state.

UNKNOWN is preserved as uncertainty rather than being treated as FAILED.

## Execution

Execution is a separate operation from Action creation.

Before execution, Royal City revalidates the bound authorization.

The executor is supplied as an explicit execution boundary rather than allowing arbitrary database code to masquerade as an external/physical effect.

The core execution flow is:

`AUTHORIZED → EXECUTING → OUTCOME`

The implementation records both state transitions and corresponding events in the same persistence transaction.

## Idempotency

Actions may carry an idempotency key.

Royal City uses the persistence idempotency lookup to detect an existing logical action.

A reused key with materially different actor, authorization or operation is rejected as:

`IDEMPOTENCY_CONFLICT`

This establishes a logical duplicate-operation boundary.

It does **not** claim universal exactly-once physical execution across distributed/external systems.

## Event boundary

Action state changes produce Event records.

For the current local foundation:

`STATE MUTATION + EVENT RECORD → SAME TRANSACTION → COMMIT`

This prevents the local action state from being committed without its corresponding event record.

External side effects remain outside the persistence transaction and require later reconciliation architecture.

## Source reconciliation

### LEGAX

Adopted:

- authorization ≠ execution;
- command/action identity;
- authorization binding;
- explicit execution lifecycle;
- idempotency;
- duplicate-operation protection;
- UNKNOWN as a distinct outcome;
- state/event atomicity;
- separation between local transaction and external side effect.

The broader LEGAX execution-gate, retry, reconciliation, compensation and external-provider contracts remain future layers.

### BeatOne

Adopted:

- executable action operations;
- durable action state;
- explicit outcome handling;
- repository-backed execution;
- idempotency-oriented persistence.

### LegaKeys

Adopted:

- governed operation boundary;
- identity/context/authority must remain distinct from execution;
- execution is a platform capability rather than an interface-level permission.

## Corrections made during migration

Step 5 exposed an idempotency-test mismatch: the first test attempted to exercise idempotency conflict with an operation that did not have a valid authorization.

The implementation correctly rejected that request as unauthorized before idempotency evaluation.

The test was corrected to provide a valid authorization for the conflicting operation, so the test now verifies the intended invariant:

`VALID AUTHORIZATION + SAME IDEMPOTENCY KEY + DIFFERENT MATERIAL OPERATION → IDEMPOTENCY_CONFLICT`

No authorization boundary was weakened to make the test pass.

## Verified invariants

CI verifies:

- Action creation requires explicit ALLOW authorization;
- actor must match authorization requester;
- operation must match authorized action;
- authorization must remain active and unexpired;
- denied authorization cannot create an Action;
- idempotency can return an existing logical action;
- conflicting idempotency reuse is rejected;
- Action transitions follow the allowed lifecycle;
- execution revalidates authorization;
- execution records EXECUTING;
- successful execution records SUCCEEDED;
- state transition and event record are persisted together;
- existing persistence tests remain green.

## Deferred execution capabilities

This step intentionally does not yet implement:

- command versioning;
- full execution envelopes;
- authorization freshness/version binding;
- optimistic concurrency conflicts;
- retry schedules;
- external-provider execution;
- asynchronous WAITING_EXTERNAL state;
- timeout reconciliation;
- provider outcome synchronization;
- compensation;
- execution evidence;
- durable outbox;
- distributed locks;
- workflow orchestration;
- physical-device enforcement;
- execution policy engine.

Those require the next execution/event/evidence layers rather than being improvised inside this first executable foundation.

## Foundation boundary

Royal City now has a real governed-operation path:

`REQUEST → AUTHORIZATION → ACTION → EXECUTION → OUTCOME`

The next layer should establish the durable **Event + Evidence** contract so execution outcomes become trustworthy, attributable and reconcilable records rather than merely Action state.
