# Royal City — Source of Truth and Authority Boundaries

## Principle

Royal City coordinates a distributed ecosystem. It must not become the source of truth for information owned by another authoritative participant merely because Royal City can cache, observe or display it.

## Authority categories

### Royal City authoritative

Royal City is authoritative for Royal City-owned concerns such as:

- Royal City identity integrity;
- Royal City network participation requirements;
- Royal City authorization decisions;
- Royal City-owned services;
- Royal City platform state;
- Royal City coordination records.

### Community authoritative

A community and its management environment remain authoritative for community-owned affairs within the community authority boundary, subject to Royal City network requirements.

Examples:

- community governance;
- community-owned operational policies;
- community management records;
- community-owned facilities and operational decisions.

### Provider authoritative

A provider remains authoritative for provider-owned business rules and provider-side processes.

Example:

- provider refund eligibility and substantive refund decision.

### External financial authoritative

External payment/financial systems remain authoritative for actual financial movement and settlement where Royal City coordinates but does not hold or settle the funds.

### Device/system authoritative

A connected device or operational system may remain authoritative for its own measured/controlled state when its contract establishes that role.

## Coordination versus authority

Royal City may:

- request;
- authorize within its boundary;
- route;
- synchronize;
- record;
- notify;
- reconcile;
- present.

Those capabilities do not automatically transfer ownership or substantive decision authority.

## Evidence hierarchy

A source assertion, observation, cached value, inference or recommendation must not silently become authoritative state.

Royal City should preserve:

- source;
- provenance;
- observation time;
- effective time;
- verification state;
- freshness;
- reconciliation status;
- confidence/uncertainty where relevant.

## Conflict rule

When two systems disagree:

1. identify the governed domain;
2. identify the authoritative source;
3. preserve both relevant observations/assertions where required;
4. mark reconciliation state;
5. do not silently overwrite authoritative state;
6. escalate according to the domain's conflict rules.

## Consequential action rule

A system's claim that an action succeeded is not enough unless that system is the authoritative execution source for the operation.

Royal City must distinguish:

`requested → authorized → attempted → executed → outcome confirmed`

and must represent unknown or unreconciled external outcomes explicitly.
