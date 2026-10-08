# Royal City — Execution Architecture

## Canonical rule

**No authorization → no consequential action.**

Authorization is a permission decision. Execution is a separate operation.

## Execution chain

`Request → Authentication → Context → Authorization → Action/Command → Execution → Outcome → Event → Evidence → State`

## Execution envelope

A consequential execution should carry, where applicable:

- request identity;
- actor identity/credential;
- participation/context;
- authorization reference;
- action type;
- target;
- idempotency key;
- expected/current version;
- correlation/causation references;
- execution deadline;
- provenance.

## Fail-closed behavior

Execution must fail closed when:

- authorization is missing;
- authorization is denied;
- authorization is expired/revoked;
- actor/target/action does not match authorization;
- required capability is inactive;
- required context is invalid;
- execution deadline has expired;
- required policy conditions are not satisfied;
- required external authority is unavailable.

## Idempotency and concurrency

Consequential commands must support an explicit idempotency mechanism where duplicate execution is possible.

Where state concurrency matters, execution may require an expected version or equivalent optimistic-concurrency condition.

A retry must not silently become a second consequential action.

## External execution

An external adapter may execute the action, but Royal City remains responsible for coordinating the Royal City action lifecycle.

External execution must return or expose enough information to distinguish:

- accepted;
- executing;
- completed;
- failed;
- cancelled;
- timed out;
- unknown/reconciliation required.

Royal City must not convert an unknown external outcome into success.

## Reconciliation

When execution and external status diverge:

`Observed External State → Reconciliation → Canonical Royal City Record`

The reconciliation process must preserve the original action, attempts, external references and evidence.

## Compensation

Reversal or compensation is action-specific. It is not assumed that every action can be reversed.

A compensation operation is itself governed by authorization and its own lifecycle.
