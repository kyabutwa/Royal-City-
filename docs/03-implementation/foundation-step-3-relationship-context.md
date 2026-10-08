# Royal City — Technical Foundation Step 3: Relationship + Context

## Status

**Step:** 3 — Relationship + Context  
**Status:** IMPLEMENTED and CI-verified

## Canonical relationship model

Royal City represents a governed relationship as:

`SUBJECT → RELATIONSHIP → OBJECT`

The persistence contract now requires:

- relationship type;
- governing domain;
- source;
- scope where applicable;
- lifecycle;
- verification state;
- effective start/end time;
- optional observation/verification timestamps;
- optional supersession/privacy metadata.

Relationship is not authorization.

A relationship can establish contextual involvement or another governed connection, but it does not itself grant consequential permission.

## Relationship lifecycle

Royal City supports the foundational lifecycle vocabulary:

`PROPOSED → PENDING → ACTIVE → SUSPENDED → EXPIRED/REVOKED → CLOSED/SUPERSEDED`

Not every relationship requires every state.

The implementation currently accepts the lifecycle state at creation; richer transition commands belong to later relationship lifecycle work.

## Verification states

The relationship foundation distinguishes:

- DECLARED
- OBSERVED
- VERIFIED
- INFERRED
- PROPOSED

An inferred or proposed relationship is not silently converted into verified canonical truth.

## Context model

A Context is an operational scope attached to a person's Participation.

A context can define:

- kind;
- place;
- community;
- purpose;
- scope;
- effective time window;
- operational status.

Context changes how an operation is understood and scoped. It does not itself grant authorization.

## Source reconciliation

### BeatOne

Adopted:

- simple executable relationship creation;
- temporal validation;
- explicit context creation;
- repository-backed atomic persistence.

Adapted:

- BeatOne's simpler relationship shape is expanded with Royal City's governing-domain, source, lifecycle, verification and scope semantics.

### LEGAX

Adopted:

- `SUBJECT → RELATIONSHIP → OBJECT`;
- relationship metadata beyond foreign keys;
- lifecycle distinction;
- source-of-truth/provenance boundary;
- explicit scope and time;
- relationship ≠ authorization;
- inference/proposal ≠ canonical truth.

The broader relationship matrix remains a reference for future domain-specific relationship types.

### LegaKeys

Adopted:

- one identity across many contexts;
- context as operational framing;
- context/relationship/capability distinct from authorization;
- context and relationship must not silently create authority.

Adapted:

- Royal City keeps its established Community credential model instead of importing LegaKeys' community identity/account model.

## Verified invariants

CI verifies:

- relationships reject self-reference;
- relationship effective time is valid;
- relationship end time cannot precede its start;
- relationship governance/source/lifecycle/verification metadata persist;
- context requires an existing Participation;
- context has an explicit kind and effective start;
- context can carry scope and operational status;
- existing persistence behavior remains compatible with the expanded contracts;
- the complete TypeScript/test gate passes.

## Intentionally deferred

This step does not yet implement:

- complete relationship taxonomy;
- relationship transition command API;
- authority assignment;
- delegation;
- role assignment;
- authorization decisions;
- context selection policy;
- context-to-authorization evaluation;
- external relationship reconciliation;
- evidence objects attached to individual relationships;
- historical temporal queries;
- relationship conflict resolution;
- privacy policy engine.

Those belong to later foundation layers.

## Boundary

`IDENTITY → PARTICIPATION → RELATIONSHIP → CONTEXT`

is now executable.

The next layer determines:

`AUTHORITY → AUTHORIZATION`

A relationship or context may inform that decision, but neither is the decision itself.
