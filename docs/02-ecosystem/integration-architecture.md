# Royal City — Integration and Adapter Architecture

## Principle

External systems participate through explicit contracts.

An adapter translates between Royal City semantics and external system semantics. It does not silently redefine the Royal City domain model.

## Integration categories

- community management;
- provider operations;
- payment/financial;
- utility;
- building/property;
- access/security;
- identity;
- communication;
- devices/IoT;
- external services;
- partner/public APIs.

## Boundary model

`Royal City Contract ↔ Adapter ↔ External System Contract`

The adapter should preserve:

- source identity;
- external identifiers;
- request/action correlation;
- authorization references;
- status mapping;
- timestamps;
- provenance;
- reconciliation state.

## Ownership

Integration does not imply ownership.

Royal City must distinguish:

- Royal City-owned system;
- community-owned system;
- provider-owned system;
- externally owned system;
- integrated system;
- source of truth;
- execution authority.

## Direct communication

Systems may communicate directly when technically appropriate.

However, direct communication must not bypass Royal City authorization where the interaction is governed by Royal City.

## Failure

Adapters must represent:

- unavailable;
- timeout;
- rejected;
- partial;
- unknown;
- stale;
- reconciliation required.

They must not fabricate successful external outcomes.
