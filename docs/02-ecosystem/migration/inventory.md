# Royal City — Source Repository Inventory

## Inventory basis

The inventory was performed against the current `main` trees of:

- `kyabutwa/LEGAX`
- `kyabutwa/LegaKeys-`
- `kyabutwa/Royal-City-`

Repository tree evidence was inspected before migration decisions were written.

## Repository scale

| Repository | Tree entries | Files | Markdown | Code/config | Notable implementation |
|---|---:|---:|---:|---:|---|
| LEGAX | 94 | 82 | 49 | 28 | `src/`, `db/`, `tests/`, CI/deploy |
| LegaKeys | 220 | 173 | 111 | 52 | `implementation/`, `database/`, `src/`, platform/production UI |
| Royal City | 47 | 37 | 35 | 0 by current extension inventory | canonical docs; implementation intentionally not yet defined |

The counts are repository-tree inventory counts, not claims about feature completeness or production readiness.

## LEGAX strengths identified

The mature contracts include:

- canonical domain model;
- canonical relationship model;
- canonical state machines;
- command/execution contract;
- event contract;
- evidence contract;
- provider adapter architecture;
- community/organization/provider Network OS material;
- security and privacy/governance;
- API architecture;
- core execution engine;
- database architecture;
- RAG/intelligence architecture;
- service specifications;
- implementation code, migrations, tests and deployment workflows.

The strongest migration value is the **governed execution and relationship machinery**.

## LegaKeys strengths identified

The mature platform model includes:

- world model;
- identity/account;
- context;
- capability;
- authority;
- operating-system concepts;
- community operating model;
- digital twin;
- living infrastructure;
- access;
- services;
- outcomes;
- workspaces/applications;
- integrations;
- economy;
- intelligence;
- governance/trust;
- platform operations;
- experience.

The `implementation/` tree contains explicit contracts, schemas, invariants, service contracts and test cases for many domains.

The strongest migration value is the **broad ecosystem/application/workspace model and domain implementation blueprints**.

## Royal City strengths identified

Royal City already establishes the product boundary that the other repositories must conform to:

- unified person identity/account;
- community onboarding credentials instead of person-style community accounts;
- Royal City as the NOS itself;
- direct Royal City participation without community association;
- community/provider/system participation;
- relationship/authority/authorization/action chain;
- place hierarchy;
- resource model;
- native economic coordination with external settlement;
- explicit payment authorization rules;
- privacy/authorization constraints on personal-data forecasting;
- ecosystem boundary;
- NOS coordination role;
- unified identity layer;
- universal authorization gate.

## Evidence discipline

This inventory does not infer that any source feature is production-ready merely because documentation exists.

Implementation claims require separate verification of:

- code path;
- tests;
- deployment;
- external integration;
- production evidence;
- current truth state.

Those gates remain open until verified in Royal City.
