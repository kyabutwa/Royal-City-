# Royal City — BeatOne Migration Plan

## Stage B0 — Repository inspection

**COMPLETE**

Repository tree, contracts, architecture, source, tests and migration material inspected.

## Stage B1 — Semantic reconciliation

**COMPLETE for identified major conflicts**

BeatOne concepts were mapped against Royal City and existing LEGAX/LegaKeys reconciliation.

## Stage B2 — Implementation-source classification

**COMPLETE**

BeatOne implementation is classified as a major source for:

- foundation contracts;
- repository boundary;
- action execution;
- event/evidence;
- integrations;
- place/resource;
- payments;
- intelligence;
- application experience.

## Stage B3 — Consolidated technical target

**COMPLETE at architecture level**

The target is one Royal City implementation, not a runtime federation of three competing codebases.

## Stage B4 — Code migration

**NEXT**

Code migration must proceed domain-by-domain.

Priority:

1. repository/persistence contract;
2. identity/participation;
3. relationships/context;
4. capability/authorization;
5. action/execution;
6. event/evidence;
7. place/resources;
8. integrations;
9. economic coordination;
10. applications/workspaces;
11. intelligence;
12. production/data migration.

## Stage B5 — Verification

Every migrated domain requires:

`Contract → Adaptation → Code → Unit Tests → Integration Tests → Persistence Tests → CI → Deployment → Runtime Verification`

Source status is never copied as Royal City status.

## Completion boundary

This migration package is complete at the architecture/reconciliation stage.

The next phase is executable Royal City foundation construction, where the strongest BeatOne/LEGAX/LegaKeys implementation pieces are consolidated into one Royal City runtime.
