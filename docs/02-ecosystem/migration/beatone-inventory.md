# Royal City — BeatOne Migration Inventory

## Source

**Repository:** `kyabutwa/BeatOne`  
**Default branch:** `main`  
**Source tree head inspected:** `ffe71f4940d31d8a99c0577cadbbc755cd00b26d`

## Scale

- 224 tree entries
- 207 files
- 107 Markdown files
- 85 code/config files by extension inventory
- TypeScript source and tests
- SQL migrations
- Cloudflare Worker configuration
- PostgreSQL/Neon persistence material
- architecture and contract records

These counts describe repository contents, not completeness or production readiness.

## Major source surfaces

### Canonical contracts

BeatOne contains explicit contracts for:

- BeatCore;
- repository/persistence;
- People + Communities;
- Identity + Participant;
- Relationship + Context;
- Capability + Authorization;
- Intent + Proposal;
- Action;
- Event;
- Evidence;
- Place;
- Access;
- Payments;
- GENESIS;
- Integration;
- experience/application APIs.

### Architecture

The source architecture includes reconciliation work for:

- identity/participant;
- people/communities;
- relationships/context;
- capability/authorization;
- intent/proposal;
- action;
- event/evidence;
- access;
- place;
- payments;
- higher domains;
- intelligence;
- technical architecture;
- product architecture;
- Kenya launch/compliance.

### Implementation

Verified source implementation surfaces include:

- BeatCore primitives;
- identity/participant;
- relationship/context;
- capability/authorization;
- action/execution;
- event/evidence;
- place;
- payments;
- integration;
- GENESIS;
- application API;
- persistence/repository;
- authentication proxy;
- participant/experience model.

### Tests

The repository contains dedicated tests for the core domains, persistence, payments, event/evidence runtime, identity migration, integration, intelligence boundary and experience/application behavior.

## Source maturity classification

BeatOne contains substantially more executable implementation than Royal City currently does.

Source status labels such as **VERIFIED** are treated as evidence of BeatOne source maturity only.

They are **not automatically Royal City verification**.

Every migrated component must pass the Royal City adaptation → implementation → test → integration → deployment → verification gate.
