# Royal City — Technical Foundation Step 2: Identity + Participation

## Status

**Step:** 2 — Identity + Participation  
**Status:** IMPLEMENTED and CI-verified

## Canonical Royal City boundary

Royal City has three foundational layers:

1. **People** — receive a Royal City identity and account.
2. **Communities** — participating residential/property environments that receive onboarding credentials to connect to Royal City NOS; they do not receive a person-style Royal City identity/account.
3. **Royal City** — the NOS that coordinates the ecosystem.

Participation connects a person to a community, provider, or Royal City service without creating another person identity.

## Source reconciliation

### BeatOne

Adopted:

- explicit identity creation operation;
- participant/participation separation;
- repository-backed lifecycle operations;
- validation before persistence.

Adapted:

- BeatOne's broader participant taxonomy is not copied as the Royal City canonical taxonomy;
- Royal City keeps Person Identity + Account distinct from Participation;
- Community is not converted into a person-style participant identity.

### LEGAX

Adopted:

- identity/account/participant distinctions;
- relationship-first participation semantics;
- lifecycle state rather than deletion;
- canonical distinction between identity, participation and authority.

Adapted:

- Royal City community onboarding follows the Royal City-specific credential model;
- detailed relationship ownership and authorization semantics remain later foundation steps.

### LegaKeys

Adopted:

- one durable person identity across multiple contexts;
- participation/context must not silently become authorization;
- identity is not authority;
- community participation does not duplicate the person's identity.

Rejected/adapted:

- LegaKeys' community-as-independent-identity/account model is not imported into Royal City because it conflicts with the established Royal City community onboarding model.

## Implemented operations

`src/core/identity-participation.ts` provides:

- `createPersonIdentity`
- `createCommunity`
- `createSystemCredential`
- `createParticipation`
- `suspendParticipation`
- `endParticipation`

## Verified invariants

The test suite verifies:

- person identity creates one person, one identity and one account;
- identity creation is atomic;
- community onboarding creates a community and onboarding credential;
- community onboarding does not create a person identity;
- community onboarding does not create a person account;
- community participation does not create another identity;
- participation requires a real person;
- participation requires at least one participation target;
- one person can hold independent community/provider/service participations;
- participation suspension preserves the record;
- participation ending preserves the record;
- system credentials remain distinct from person identity.

## Important boundary

Participation is **not authorization**.

Creating a participation does not grant consequential authority.

Creating an account does not grant authority.

Holding a community relationship does not grant unrestricted community control.

Those decisions belong to the Relationship, Authority and Authorization foundations.

## Open items for later steps

- complete identity/credential lifecycle;
- authentication/session model;
- credential issuance and recovery;
- identity verification;
- provider identity taxonomy;
- approved system actor taxonomy;
- relationship metadata and lifecycle;
- context model;
- authority model implementation;
- authorization decision engine;
- identity suspension/revocation propagation;
- privacy classification;
- identity federation/external identity mapping.

These are intentionally not implemented here.
