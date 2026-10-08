# Royal City — Technical Foundation Step 4: Authority + Authorization

## Status

**Step:** 4 — Authority + Authorization  
**Status:** IMPLEMENTED and CI-verified

## Canonical security boundary

Royal City distinguishes:

`IDENTITY → PARTICIPATION → RELATIONSHIP / CONTEXT → AUTHORITY → AUTHORIZATION`

These are different concepts.

- Identity establishes who an actor is.
- Participation establishes participation in a community, provider or Royal City service.
- Relationship establishes a governed connection.
- Context establishes the operational scope in which an interaction is understood.
- Authority establishes what a principal is empowered to control or perform against a target.
- Authorization is the explicit decision permitting or denying a requested action.

**Relationship is not authorization.**

**Context is not authorization.**

**Participation is not authorization.**

**Role/capability is not automatically authorization.**

## Authority

An authority record is scoped to:

- principal;
- target;
- authority kind;
- source;
- optional scope;
- effective start/end;
- lifecycle.

The current implementation supports:

`PROPOSED → ACTIVE → SUSPENDED / REVOKED / EXPIRED → CLOSED`

This is a foundational contract; richer authority transitions and delegation are intentionally deferred.

## Authorization

An authorization record represents a decision for:

- requester;
- action;
- target;
- optional context;
- optional matching authority;
- decision;
- lifecycle;
- reason;
- decision time;
- optional expiry.

The core decision invariant is:

> **No applicable authority → DENY.**

The implementation currently evaluates:

1. authority exists;
2. authority is active;
3. authority is effective at decision time;
4. authority principal matches requester;
5. authority target matches requested target.

Only then is the decision ALLOW.

A denied authorization is still recorded. A denied request does not create a dangling reference to a nonexistent authority.

## Migration compatibility

The repository already contained an earlier authorization persistence shape used by Action/Execution foundations.

Instead of deleting that contract, Step 4 reconciles it:

- canonical requester/action/target fields are added;
- existing actor/actionType/validFrom/validUntil/relationshipId fields remain available during migration;
- newly evaluated authorizations emit the compatibility fields;
- existing persistence and action execution code therefore remains intact.

This preserves the repository boundary while the canonical authorization model is migrated.

## Source reconciliation

### BeatOne

Adopted:

- explicit authority/authorization operations;
- repository-backed authorization decisions;
- time-bounded authority;
- deny-by-default behavior.

### LEGAX

Adopted:

- authority distinct from authorization;
- authorization as a decision rather than capability ownership;
- relationship and context as inputs, not permission themselves;
- explicit authorization lifecycle;
- canonical no-authorization/no-consequential-action boundary.

### LegaKeys

Adopted:

- authority/capability/role/context distinctions;
- identity is not authority;
- interface or capability availability does not itself grant authorization;
- contextual participation does not silently become permission.

Adapted:

- Royal City keeps its canonical three-layer Person / Community / NOS model and community onboarding credential boundary.

## Verified invariants

CI verifies:

- authority creation validates principal, target, kind, source and time;
- authority is time-bounded when an end is supplied;
- authorization ALLOW requires matching active authority;
- requester mismatch produces DENY;
- missing authority produces DENY;
- expired/out-of-window authority cannot produce ALLOW;
- denied authorization is persistable without a dangling authority reference;
- existing authorization persistence remains compatible;
- existing Action/Execution persistence remains compatible;
- all existing and new tests pass.

## Correction recorded

The first Step 4 migration replaced the existing AuthorizationRecord contract too aggressively. CI exposed the conflict because the existing persistence adapter and tests still depended on the earlier shape.

The correction was to **extend and reconcile**, not replace:

`Existing persistence contract + canonical Step 4 semantics → reconciled contract`

This is now the required migration pattern for subsequent foundation steps.

## Deferred

This step does not yet implement:

- complete authority taxonomy;
- delegation;
- authority inheritance;
- authority conflict precedence;
- policy language;
- policy evaluation engine;
- authorization caching;
- authorization freshness/revocation propagation;
- multi-party approval;
- emergency authority;
- external authorization federation;
- payment-specific authorization rules.

These remain later architectural/implementation work.

## Foundation boundary

The executable security chain is now:

`IDENTITY → PARTICIPATION → RELATIONSHIP → CONTEXT → AUTHORITY → AUTHORIZATION`

The next layer may consume an explicit authorization decision, but must never infer authorization from identity, relationship, context or capability alone.
