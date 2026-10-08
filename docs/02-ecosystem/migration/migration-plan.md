# Royal City — Migration Execution Plan

## Stage 2A.1 — Inventory

**Status: COMPLETE**

Inventoried the current repository trees and identified the main architecture, implementation, database, testing and operational surfaces.

## Stage 2A.2 — Canonical concept mapping

**Status: COMPLETE**

Mapped major LEGAX and LegaKeys concepts into Royal City terminology and boundaries.

## Stage 2A.3 — Conflict reconciliation

**Status: COMPLETE for identified conflicts**

Resolved the architectural direction for the major known conflicts.

Remaining policy/open areas are explicitly marked OPEN rather than silently decided.

## Stage 2A.4 — Target architecture

**Status: COMPLETE**

Established the reconciled Royal City target architecture in `target-architecture.md`.

## Stage 2A.5 — Migration classification

### KEEP

Migrate/adopt semantically compatible contracts:

- relationship-first modeling;
- lifecycle/state-machine discipline;
- authority versus authorization;
- command/execution separation;
- events and evidence;
- provenance;
- provider adapters;
- external source-of-truth boundaries;
- workspace/application separation;
- intelligence governance;
- digital-twin/world-state boundaries;
- economic coordination patterns.

### ADAPT

Migrate with Royal City-specific boundaries:

- community operating systems;
- provider/organization operating systems;
- identity/account/participant implementation;
- BeatAccess;
- payment/economic services;
- refund/dispute workflows;
- Digital Twin;
- GENESIS/CONSTANTYNA/world intelligence;
- workspaces/applications;
- external identity federation;
- agent/automation execution.

### MERGE

Consolidate overlapping platform concepts:

- LegaX platform + LegaKeys operating system → Royal City NOS;
- duplicate relationship models → Royal City relationship contract;
- duplicate authorization models → Royal City authorization layer;
- duplicate action/execution models → Royal City action/execution contract;
- overlapping event/evidence models → Royal City event/evidence contract;
- overlapping economic coordination → Royal City economic layer.

### REPLACE

Do not preserve as Royal City semantics:

- community-as-person-style-account;
- competing platform identity;
- competing NOS authority;
- any source assumption that contradicts resolved Royal City policy.

### RETIRE

Retire during migration when identified as:

- obsolete terminology;
- duplicate architecture;
- superseded product positioning;
- experiments without canonical status;
- features explicitly rejected by Royal City;
- implementation that creates authority outside Royal City policy.

### OPEN

Do not close without a future Royal City decision:

- full non-person identity taxonomy;
- complete relationship vocabulary;
- complete action taxonomy;
- emergency authority;
- exact federation/token/trust mechanics;
- exact service ownership taxonomy;
- exact technical service boundaries;
- production migration/data-cutover mechanics.

## Stage 2A.6 — Implementation migration

**NEXT**

Implementation migration must occur only after the reconciled contracts are accepted.

Recommended order:

1. Canonical relationship/state/record contracts.
2. Identity/account/credential integration.
3. Authorization and policy engine.
4. Action/command/execution engine.
5. Event/evidence/provenance.
6. Place/resource/world state.
7. Service/provider adapter layer.
8. Economic coordination.
9. Workspaces/applications.
10. Intelligence and agent execution.
11. Experience/UI migration.
12. Data migration and reconciliation.
13. Production verification.

## Stage 2A.7 — Verification gates

Every migrated component must be classified:

- VERIFIED;
- SUPPORTED;
- PROPOSED;
- FAILED.

Royal City must not inherit a source repository's status label without independently verifying the component in the Royal City target.

## Completion criterion

Stage 2A is complete when:

- all major source architecture has an explicit mapping;
- known semantic conflicts are resolved or marked OPEN;
- Royal City target architecture is explicit;
- migration classifications exist;
- implementation order is defined;
- no source repository remains an implicit authority.

This does **not** mean Royal City implementation is complete or production-ready.
