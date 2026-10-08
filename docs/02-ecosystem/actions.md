# Royal City — Action Architecture

Actions are the bridge between identity and the world around the participant.

## Canonical action path

`Identity / Credentials → Relationship / Authority → Authorization → Action → Target / Context → Execution → Result → State / Event / Record`

Authorization and execution are separate concerns.

A Royal City authorization decision establishes permission. It does not itself prove that the requested operation was executed or succeeded.

## Q5 — Coordinated action lifecycle

**Decision: Yes.**

Every Royal City-governed consequential action should have a coordinated lifecycle where applicable:

`requested → authorized → initiated → executing → succeeded / failed / cancelled / rejected → recorded`

The lifecycle represents Royal City's coordination view. Actual execution may occur inside a Royal City service, community/provider environment, device/system, or external system.

Royal City must not represent an action as successful merely because it was requested, authorized, or initiated. Completion and failure must reflect the applicable execution outcome or authoritative external status.

## Mature execution extension

The lifecycle may be implemented through the following architecture:

`Request → Authentication → Context → Authorization → Command/Action → Execution → Outcome → Event → Evidence → State`

This extension is adopted from the mature execution patterns identified during cross-repository reconciliation, but it does not change the Royal City domain meaning of an Action.

## Required distinctions

- requested ≠ authorized
- authorized ≠ initiated
- initiated ≠ executing
- executing ≠ succeeded
- failed ≠ completed
- cancelled ≠ succeeded
- rejected ≠ failed execution
- recorded ≠ succeeded

## External execution

When a provider, community system, device, or external service executes the action, Royal City should retain:

- the Royal City action identity;
- the authorization reference;
- the target/context;
- the external execution reference where available;
- the authoritative external status;
- relevant events/evidence;
- reconciliation state when external status is delayed or unavailable.

Royal City must not fabricate an outcome when an external system has not provided sufficient evidence.

## Remaining Stage 2 work

The following implementation semantics remain open:

- exact lifecycle state taxonomy;
- transition rules;
- asynchronous execution model;
- idempotency;
- retry behavior;
- cancellation;
- timeout;
- compensation/reversal;
- stale authorization handling;
- reconciliation;
- external status synchronization;
- evidence requirements by action class.
