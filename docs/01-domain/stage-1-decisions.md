# Royal City — Stage 1 Domain Decisions

## Purpose

This document records the decisions required to close the Royal City World & Domain Model.

A decision is only marked **Resolved** when it follows directly from an established Royal City principle or has been explicitly chosen as a domain rule.

A decision is **Open** when resolving it would require inventing a product rule.

---

## D-001 — Identity is the universal participation layer

**Status:** Resolved

Royal City uses one unified identity as the common participation layer across the ecosystem.

Identity identifies the actor participating in an action.

Identity does not automatically confer permission.

---

## D-002 — Authorization is separate from identity

**Status:** Resolved

Authorization determines whether an identity may perform a particular action in a particular context.

Therefore:

`Identity ≠ Authorization`

---

## D-003 — Actions are the universal interaction mechanism

**Status:** Resolved

Meaningful interaction with Royal City is modeled as an action attributable to an actor through an identity and governed by authorization.

This provides the common domain mechanism across places, services, resources, economic activity, and physical/digital systems.

---

## D-004 — Relationships are first-class domain concepts

**Status:** Resolved

Relationships are not merely metadata.

They may provide participation, authority, access, responsibility, representation, delegation, service, or governance context.

The exact relationship taxonomy remains open.

---

## D-005 — Authority is distinct from authorization

**Status:** Resolved

Authority is the basis from which an actor may possess a power, responsibility, or control.

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

Royal City must distinguish internal domain authority from external authority.

---

## D-011 — Participation is voluntary

**Status:** Resolved

Participation in Royal City is voluntary, subject to legitimate rules and authority of the relevant community or service.

This principle does not itself resolve every governance or emergency scenario.

---

## D-012 — No implementation inference

**Status:** Resolved

Software architecture must not silently resolve an unresolved Royal City domain question.

---

# Decisions requiring explicit Royal City policy

## D-101 — Actor taxonomy

**Status:** Open

Questions:

- Is every person a first-class actor?
- Are organizations first-class actors?
- Are communities actors, contexts, or both?
- Under what conditions can a device or autonomous system act?
- Can an actor act through another actor?

**Required decision:** final actor taxonomy.

---

## D-102 — Identity lifecycle

**Status:** Open

Questions:

- How is an identity established?
- Who can establish it?
- What makes it authoritative?
- Can one actor have multiple identities?
- Can identities represent roles or only actors?
- How are suspension, revocation, recovery, and succession handled?

**Required decision:** identity lifecycle and identity authority.

---

## D-103 — Relationship taxonomy

**Status:** Open

Required relationship types and semantics must be chosen.

Candidate dimensions:

- membership
- ownership
- control
- responsibility
- representation
- delegation
- access
- provision
- consumption
- service
- governance

These candidates must not become requirements without explicit approval.

---

## D-104 — Authority model

**Status:** Open

Royal City must define the legitimate sources of authority and how they interact.

Candidates:

- individual
- ownership
- organizational
- community
- delegated
- contractual/service
- emergency

**Required decision:** authority sources and precedence.

---

## D-105 — Delegation

**Status:** Open

Royal City must decide:

- whether authority can be delegated
- who can delegate
- what can be delegated
- whether delegation can be nested
- whether delegation expires
- whether delegation can be revoked
- what happens to actions after revocation

---

## D-106 — Community model

**Status:** Open

Royal City must define:

- what constitutes a community
- membership
- community boundaries
- community authority
- community rules
- rule changes
- disputes between community and individual authority

---

## D-107 — Place hierarchy

**Status:** Open

The exact relationship between:

`Place → Building → Unit → Facility → Infrastructure`

must be established, including whether these are universal concepts or only examples of possible physical structures.

---

## D-108 — Resource model

**Status:** Open

Royal City must distinguish:

- resource
- asset
- facility
- infrastructure
- service
- digital resource
- physical resource

Only the concepts required by the actual domain should be retained.

---

## D-109 — Service model

**Status:** Open

Royal City must define:

- provider
- consumer
- service availability
- request
- acceptance
- obligation
- execution
- completion
- cancellation
- failure

---

## D-110 — Action model

**Status:** Open

The universal action concept is resolved, but the final action taxonomy is not.

Royal City must decide which action classes are domain-level concepts and which are merely application-level operations.

---

## D-111 — Economic model

**Status:** Open

Royal City must define:

- what economic activity belongs inside the domain
- what remains external
- transaction formation
- commitment
- settlement
- finality
- reversal
- refund
- dispute
- economic authority

---

## D-112 — Record model

**Status:** Open

Royal City must define:

- which actions require records
- authoritative records
- correction
- immutability where required
- retention
- deletion
- participant visibility

---

## D-113 — Emergency authority

**Status:** Open

Royal City must explicitly decide whether extraordinary authority exists.

If it exists:

- who holds it
- when it activates
- what it can override
- who can review its use
- what must be recorded
- when it expires

---

## D-114 — External boundary

**Status:** Open

Royal City must distinguish:

1. Royal City-owned domain objects
2. Royal City-controlled objects
3. Royal City-coordinated objects
4. external objects
5. externally authoritative objects

The boundary must be established before architecture.

---

## Completion rule

Stage 1 closes only when all **D-101 through D-114** are either:

1. explicitly resolved as Royal City domain policy, or
2. deliberately declared non-domain concerns.

No implementation decision may substitute for a missing domain decision.
