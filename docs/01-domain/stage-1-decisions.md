# Royal City — Stage 1 Domain Decisions

## Purpose

This document records the decisions required to close the Royal City World & Domain Model.

A decision is only marked **Resolved** when it follows directly from an established Royal City principle or has been explicitly chosen as a domain rule.

A decision is **Open** when resolving it would require inventing a product rule.

---

## D-001 — People use a unified Royal City identity and account

**Status:** Resolved

A person participating in Royal City receives a Royal City identity and account through which the person manages their participation.

The person's participation is governed by their applicable role, relationship, authority, and authorization.

Identity does not itself confer permission.

---

## D-002 — Authorization is separate from identity

**Status:** Resolved

Authorization determines whether an identity may perform a particular action in a particular context.

Therefore:

`Identity ≠ Authorization`

---

## D-003 — Actions are the universal interaction mechanism

**Status:** Resolved

Meaningful interaction with Royal City is modeled as an action attributable to a participant through the applicable identity/credentials and governed by authorization.

---

## D-004 — Relationships are first-class domain concepts

**Status:** Resolved

Relationships are not merely metadata.

They provide participation context between people, communities, service providers, Royal City services, places, resources, and other domain elements.

The exact relationship taxonomy remains open.

---

## D-005 — Authority is distinct from authorization

**Status:** Resolved

Authority is the basis from which an actor or participant may possess a power, responsibility, or control.

Authorization is the decision applying that authority to a specific action.

Therefore:

`Authority ≠ Authorization`

---

## D-006 — Ownership and control are distinct

**Status:** Resolved

Royal City must not assume that ownership, control, access, responsibility, and authority are identical.

Their exact semantics remain open.

---

## D-007 — A transaction is not every action

**Status:** Resolved

Economic transactions are a distinct domain concept.

An action may have no economic consequence.

A transaction may arise from one or more economic actions or commitments.

The exact transaction model remains open.

---

## D-008 — Service is distinct from its execution

**Status:** Resolved

A service represents an available capability.

Provider, request, authorization, execution, result, and transaction are separate concerns.

---

## D-009 — Domain state is governed by domain rules

**Status:** Resolved

State cannot be defined merely by what software can store.

A valid state transition must be justified by domain rules and an applicable action.

---

## D-010 — External systems are not automatically Royal City domain objects

**Status:** Resolved

Integration does not automatically make an external entity part of the Royal City domain.

Royal City must distinguish its own coordination authority from externally authoritative systems.

---

## D-011 — Participation is voluntary

**Status:** Resolved

Participation in Royal City is voluntary, subject to legitimate rules and authority applicable to the participant and context.

---

## D-012 — No implementation inference

**Status:** Resolved

Software architecture must not silently resolve an unresolved Royal City domain question.

---

# Decisions requiring explicit Royal City policy

## D-101 — Participant and actor taxonomy

**Status:** Partially resolved

The current policy establishes three foundational participation layers:

1. **People** — human participants with Royal City identity and account.
2. **Communities** — participating residential properties/real-estate environments. A community does not receive a person-style identity/account; it receives credentials for onboarding and connecting its management environment to the Royal City Network Operating System.
3. **Royal City** — the operating system itself, coordinating the ecosystem and operating Royal City-owned services.

Community service providers can participate through community participation.

The following remain open and must not be invented:

- whether organizations/service providers are first-class actors or represented through another participant model
- whether approved devices/systems can independently act
- the exact actor semantics for delegated or automated actions

---

## D-102 — Identity lifecycle

**Status:** Partially resolved

A person has a Royal City identity and account for managing participation.

A community does not have a person-style identity/account; it receives community onboarding credentials for connection to the Royal City Network Operating System.

Royal City itself is the operating system and is not modeled as a normal participant account.

Still open:

- identity creation and verification
- identity attributes
- suspension/recovery/revocation
- account lifecycle
- compromised credentials
- identity succession
- exact community credential lifecycle

---

## D-103 — Relationship taxonomy

**Status:** Open

The exact first-class relationship types and the authority/access effects they create remain to be defined.

---

## D-104 — Authority model

**Status:** Open

Royal City must define the legitimate sources of authority and how conflicting legitimate authorities interact.

---

## D-105 — Delegation

**Status:** Open

Royal City must define whether and how authority can be delegated, including scope, nesting, expiry, revocation, and consequences.

---

## D-106 — Community model

**Status:** Resolved at the foundational definition; governance remains open

A Royal City community is a participating residential property or real-estate environment.

A community connects to Royal City through community onboarding credentials and the Royal City Network Operating System.

Through that participation, Royal City coordinates the community's participating management, people, services, places, utilities, economy, and related systems.

Still open:

- community ownership/control semantics
- membership rules
- community governance
- rule creation/change
- conflict resolution
- community service-provider authority

---

## D-107 — Place hierarchy

**Status:** Open

The exact hierarchy and semantics of places, properties, buildings, units, facilities, infrastructure, and related physical elements remain to be defined.

---

## D-108 — Resource model

**Status:** Open

The exact distinction between resources, assets, facilities, infrastructure, services, and other usable/control-able things remains to be defined.

---

## D-109 — Service model

**Status:** Partially resolved

Royal City coordinates services offered through two foundational participation paths:

1. services made available through participating communities and their onboarded service providers;
2. services owned or operated by Royal City itself, available to people participating directly in Royal City without community association.

The detailed provider, consumer, request, obligation, execution, completion, cancellation, and failure semantics remain open.

---

## D-110 — Action model

**Status:** Open

The universal action concept is resolved, but the final action taxonomy, lifecycle, and requirements for different action classes remain open.

---

## D-111 — Economic model

**Status:** Open

Royal City must define which economic activity is internal, which is externally settled, and the semantics of commitment, settlement, finality, reversal, refund, dispute, and economic authority.

---

## D-112 — Record model

**Status:** Open

Royal City must define authoritative records, correction, retention, deletion, immutability where required, and participant visibility.

---

## D-113 — Emergency authority

**Status:** Open

Royal City must explicitly decide whether extraordinary authority exists and, if so, its scope, activation, recording, review, and expiry.

---

## D-114 — External boundary

**Status:** Partially resolved

Royal City is the Network Operating System that coordinates participating people, communities, services, places, utilities, economic activity, and connected systems.

Royal City-owned services are part of Royal City's direct service domain.

Community-owned/operated services and external systems may participate through community or external relationships without automatically becoming Royal City-owned.

Still open:

- exact authority boundary
- externally authoritative systems
- control versus coordination
- ownership/control semantics at integration boundaries

---

## Completion rule

Stage 1 closes only when all **D-101 through D-114** are either:

1. explicitly resolved as Royal City domain policy, or
2. deliberately declared non-domain concerns.

No implementation decision may substitute for a missing domain decision.
