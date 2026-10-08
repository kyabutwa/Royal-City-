# Royal City — BeatOne Implementation Migration Map

## Highest-value implementation source

BeatOne is currently the strongest direct implementation source among the repositories reviewed because it combines explicit canonical contracts with executable TypeScript, persistence boundaries, migrations and tests.

## P0 — Foundation contracts

Adapt:

1. BeatCore domain types;
2. identifier rules;
3. lifecycle states;
4. identity/participant primitives;
5. relationship/context;
6. capability/authorization;
7. intent/proposal;
8. action;
9. event;
10. evidence.

These overlap strongly with LEGAX and LegaKeys.

**Migration rule:** consolidate rather than maintain three parallel implementations.

## P1 — Repository and transaction boundary

Adapt BeatOne's DB-neutral repository contract:

- canonical record persistence;
- duplicate-ID protection;
- reference validation;
- Action authorization requirement;
- idempotency;
- local atomic transaction;
- rollback;
- explicit unknown external outcomes.

This is a particularly valuable implementation pattern for Royal City's foundation.

## P2 — Execution

Adapt:

- authorization-to-action binding;
- action lifecycle;
- idempotency;
- correlation/causation;
- external integration outcome normalization;
- reconciliation-required states;
- prevention of fabricated external completion.

Combine with LEGAX's mature command/execution architecture and LegaKeys execution contracts.

## P3 — World and access

Adapt:

- place persistence;
- building/floor/unit representation;
- access contracts;
- resources;
- community/place context.

Reconcile against Royal City's richer place/resource model before final schema selection.

## P4 — Economic coordination

Adapt:

- exact monetary representation;
- payment lifecycle;
- payment/action linkage;
- idempotency;
- external references;
- UNKNOWN / reconciliation-required states;
- provider-neutral adapter boundary;
- refund/reversal mechanics where applicable.

Then enforce all Royal City payment decisions D-67 through D-88 and D-115.

## P5 — Integration

Adapt BeatOne's provider-neutral integration contract:

`Royal City Action → Adapter → External System → Normalized Outcome → Reconciliation`

Do not turn adapter acceptance into Royal City completion.

## P6 — Intelligence

Adapt:

- GENESIS boundary;
- authorized input model;
- proposal-first intelligence;
- intelligence/action separation;
- intelligence tests.

Merge with the existing LEGAX/LegaKeys intelligence architecture.

## P7 — Experience

Adapt:

- OneApp;
- Website;
- application API;
- UI state distinction;
- experience contracts.

Do not migrate the source product identity or create separate Royal City domain truth.

## P8 — Production/data migration

Only after the Royal City target implementation exists:

1. map source schemas;
2. classify data ownership;
3. reconcile canonical IDs;
4. preserve provenance;
5. migrate only approved data;
6. validate foreign references;
7. reconcile external references;
8. run deterministic verification;
9. perform controlled cutover.

No source production database should be treated as a Royal City database merely because the schemas look compatible.
