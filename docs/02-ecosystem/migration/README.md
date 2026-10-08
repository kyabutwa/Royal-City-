# Royal City — Cross-Repository Migration & Reconciliation

## Status

**Stage:** 2A — Cross-Repository Architecture Reconciliation  
**Status:** Initial reconciliation completed; migration execution remains staged  
**Canonical target:** Royal City

## Purpose

This directory records the structured migration of mature architecture and implementation knowledge from:

- LEGAX
- LegaKeys
- Royal City

The objective is **not** to copy repositories into Royal City.

The objective is to:

1. inventory existing work;
2. compare canonical semantics;
3. preserve mature contracts where they fit;
4. adapt terminology and boundaries where Royal City differs;
5. explicitly resolve or quarantine conflicts;
6. define the Royal City target architecture;
7. produce a migration map for later implementation.

Royal City is the canonical product and architectural authority for the merged system.

## Migration rule

Every source concept is classified as one of:

- **KEEP** — semantically compatible and adopted by Royal City.
- **ADAPT** — valuable, but its semantics/terminology must change.
- **MERGE** — overlapping concepts are combined under one Royal City concept.
- **REPLACE** — Royal City has a newer canonical boundary that supersedes the source concept.
- **RETIRE** — obsolete, duplicated, experimental, or incompatible material is not migrated.
- **OPEN** — insufficient evidence or unresolved policy prevents adoption.

No source document overrides a resolved Royal City decision.

## Canonical authority order

1. Resolved Royal City domain decisions.
2. Resolved Royal City Stage 2 decisions.
3. Royal City foundational definition and principles.
4. Reconciled migration contracts in this directory.
5. Mature LEGAX/LegaKeys contracts adopted through explicit mapping.
6. Source-repository implementation details.

## Core target

Royal City is the Network Operating System coordinating the participating ecosystem.

The canonical control path is:

`Identity / Participation Credentials → Relationship → Authority → Authorization → Action → Target → Result → State / Event / Record`

For consequential execution, mature source patterns may extend this to:

`Request → Authentication → Context → Authorization → Command/Action → Execution → Outcome → Event → Evidence → State`

The extra machinery is implementation/architecture support; it must not redefine Royal City domain semantics.

## Important boundary

People, communities, and Royal City remain distinct:

- **People** receive Royal City identity/account.
- **Communities** are participating residential property/real-estate environments and connect through community onboarding credentials; they do not receive a person-style Royal City identity/account.
- **Royal City** is the NOS itself, not an ordinary participant account.

This distinction is a Royal City canonical boundary and is therefore a mandatory reconciliation point for LegaKeys and LEGAX material.


## BeatOne reconciliation

BeatOne has been independently inspected and reconciled. The BeatOne package records its repository inventory, concept mapping, conflict register, implementation migration map, architecture delta, staged migration plan, and completion boundary.

BeatOne is treated as a major executable implementation source, not as a competing Royal City product or platform authority.
