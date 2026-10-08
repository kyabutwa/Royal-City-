# Royal City — State, Event and Evidence Architecture

## State

Royal City domain state represents the current governed condition of an object or process.

State must be derived according to domain rules and must not be inferred solely from UI appearance.

## Events

An event is a historical occurrence.

Events should preserve, where material:

- event identity;
- event type/version;
- actor;
- action/execution reference;
- subject/target;
- context;
- occurred time;
- recorded time;
- source;
- provenance;
- correlation/causation;
- payload integrity.

Historical events must not be rewritten merely because current state changes.

## Evidence

Evidence supports a claim, relationship, decision, action outcome or event.

Evidence should preserve:

- source;
- reference;
- capture/observation time;
- truth state;
- provenance;
- integrity;
- retention/privacy classification.

## Truth states

Royal City should distinguish at minimum:

- VERIFIED;
- DECLARED;
- OBSERVED;
- INFERRED;
- PROPOSED;
- UNKNOWN.

These states are not interchangeable.

## State transition discipline

`Event / Evidence → State transition`

does not mean every event automatically changes state. Domain rules determine whether and how state changes.

## Unknown and reconciliation

Unknown is a legitimate state.

Examples:

- external payment outcome unknown;
- device state unavailable;
- provider status not synchronized;
- telemetry missing;
- evidence insufficient.

Unknown must not be represented as success or failure without a governing basis.
