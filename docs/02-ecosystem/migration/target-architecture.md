# Royal City — Reconciled Target Architecture

## 1. Product boundary

Royal City is the canonical intelligent living infrastructure and Network Operating System.

It coordinates:

`People ↔ Communities ↔ Places ↔ Services ↔ Resources ↔ Economy ↔ Physical Infrastructure ↔ Digital Systems`

## 2. Actor and participation layer

### People

`Person → Royal City Identity → Royal City Account → Participation / Role / Relationship`

One person identity remains continuous across communities and direct Royal City services.

### Communities

`Community Management Environment → Onboarding Credentials → Royal City NOS`

Community is a real-estate/residential environment, not a person-style Royal City account.

### Providers

`Provider Environment → Provider Participation → Royal City NOS`

A provider may serve multiple communities and maintain its own operating environment.

### Systems

`System Credential → Delegated/Service Authority → Authorization → Action`

System actions remain attributable to the system credential and governing authority.

### Royal City

Royal City NOS is the coordinating platform itself and may own direct services.

## 3. Canonical semantic backbone

The reconciled architecture adopts the mature source separation while preserving Royal City policy:

`Identity / Credentials → Relationship / Participation → Authority → Authorization → Action → Target → Result → State / Event / Evidence`

For asynchronous consequential operations:

`Request → Authentication → Context → Authorization → Command → Execution → Outcome → Event → Evidence → State`

For intelligence-assisted operations:

`Purpose → Authorized Inputs → Context → Intelligence → Proposal → Authorization → Command → Execution → Outcome → Event/Evidence`

## 4. Core platform planes

### Identity and trust plane

- person identity/account;
- authentication;
- credentials;
- community onboarding credentials;
- system credentials;
- identity interoperability;
- relationship continuity;
- revocation.

### Relationship and authority plane

- participation;
- roles;
- authority;
- delegation;
- scope;
- conditions;
- policy;
- authorization decisions.

### Action and execution plane

- request;
- intent;
- proposal;
- action;
- command;
- execution;
- idempotency;
- retry;
- cancellation;
- reconciliation;
- outcome.

### State/event/evidence plane

- domain state;
- lifecycle/state machines;
- events;
- evidence;
- provenance;
- historical record;
- reconciliation.

### World/resource plane

- places;
- properties;
- buildings;
- units;
- facilities;
- infrastructure;
- resources;
- resource dependencies;
- telemetry;
- measurements;
- alerts;
- forecasting under explicit data authorization.

### Service/provider plane

- service definitions;
- service offerings;
- provider participation;
- provider adapters;
- community-provider relationships;
- availability;
- requests;
- execution.

### Economic coordination plane

- payment requests;
- payer authorization;
- payment attempts;
- settlement status;
- refunds;
- refund disputes;
- billing;
- pricing;
- fees;
- economic records;
- external financial integrations.

### Intelligence plane

- governed retrieval;
- contextual reasoning;
- forecasting;
- recommendations;
- proposals;
- human interaction;
- agents/automation;
- explainability;
- uncertainty;
- provenance.

Intelligence remains downstream of identity, authorization and data-purpose governance.

### Experience/application plane

Royal City should expose multiple applications and workspaces rather than force all functions into one undifferentiated interface.

Representative surfaces:

- personal;
- community operations;
- provider operations;
- Royal City operations;
- service-specific;
- team/project;
- incident/review;
- mobile/web/device experiences.

Application/workspace boundaries are experience and operational boundaries, not independent authority systems.

## 5. External boundary

External systems remain independently owned unless Royal City explicitly owns them.

Examples:

- banks/payment processors/mobile-money systems;
- community management systems;
- utility systems;
- access/security systems;
- provider systems;
- devices/IoT;
- identity providers;
- communication platforms.

Royal City coordinates through explicit contracts and adapters.

Technical direct communication is permitted where appropriate, but it must not bypass Royal City authorization when the interaction is Royal City-governed.

## 6. Source-of-truth rule

Every consequential domain concept must identify its authoritative owner/source.

Royal City should never replace an external source merely because it can technically observe or cache the information.

Examples:

- provider refund eligibility → provider;
- external payment settlement → external financial system;
- community internal governance → community management;
- Royal City identity integrity → Royal City;
- Royal City authorization decision → Royal City authorization layer.

## 7. Architectural invariants inherited from mature sources

The following are promoted into Royal City architecture:

- Identity ≠ Account ≠ Participation/Participant.
- Authentication ≠ Authorization.
- Relationship ≠ Authorization.
- Capability ≠ Authorization.
- Context ≠ Authority.
- Workspace visibility ≠ Authority.
- Recognition ≠ Authorization.
- Intelligence output ≠ Canonical state.
- Recommendation ≠ Authorization.
- Tool availability ≠ Tool authorization.
- Retrieval ≠ Permission.
- Automation ≠ Authority.
- External assertion ≠ Canonical truth.
- Requested ≠ Authorized.
- Authorized ≠ Executed.
- Executed ≠ Succeeded.
- Failed ≠ Completed.
- Proposed ≠ Active.
- Inferred ≠ Verified.
