# Royal City — Authoritative Stage 1 Domain Model

## Status

**Stage:** 1 — World & Domain Model  
**Status:** Working baseline  
**Implementation:** Not defined

This document consolidates the current Royal City domain model. It describes the world Royal City represents; it is not software architecture.

## Core domain chain

`Actor → Identity → Relationship / Authority → Authorization → Action → Target → Result → State / Record`

Economic activity may introduce:

`Action → Economic consequence → Transaction → Result / State / Record`

A transaction is not synonymous with an action.

## Core concepts

### Actor
A participant capable of initiating, receiving, controlling, providing, or otherwise participating in a domain interaction.

Current categories: person, organization, community, and an authorized system/device actor where Royal City explicitly permits autonomous participation.

### Identity
The unified participation representation through which an actor is recognized.

Identity answers **who or what is participating**. It does not itself establish permission.

### Relationship
A meaningful connection between actors or between an actor and another domain element. Relationships provide context for participation, authority, access, responsibility, representation, delegation, or service.

### Authority
The domain basis that permits an actor to exercise a particular power, responsibility, or control.

Authority is distinct from identity and from the authorization decision.

### Authorization
The decision determining whether an identified actor may perform a specific action in a specific context.

Conceptually:

`Identity + Authority + Relationship + Context + Policy → Authorization Decision`

### Place
A physical location or spatial domain recognized or interacted with by Royal City.

### Resource
Something that can be controlled, accessed, consumed, allocated, used, provided, or otherwise acted upon.

### Service
A capability made available to participants. A service is distinct from its provider, request, authorization, action, and result.

### Action
A meaningful operation performed by an actor through an identity under an applicable authorization context.

### Transaction
A representation of an economic exchange or economic commitment where transactional semantics apply.

### Community
A participating social or organizational context with membership, relationships, rules, authority, or shared environment.

### State
The current condition of a domain element or process according to domain rules.

### Record
A domain-required representation of something that must remain attributable or observable after a significant action, transaction, decision, or state transition.

## Foundational invariants

1. Every attributable Royal City action has an identifiable actor.
2. Identity and permission are separate concepts.
3. Authorization requires an identifiable basis of authority.
4. Authorization is contextual.
5. Meaningful actions identify what is being attempted and what it acts upon.
6. Meaningful actions have results, including defined failure where required.
7. State-changing actions produce the required state consequence or record.
8. Economic transactions are distinct from generic actions.
9. Community authority is not automatically individual authority.
10. Technical implementation cannot silently redefine domain semantics.
11. Unknown domain rules remain unknown until explicitly decided.
12. External systems are not automatically part of the Royal City domain merely because they integrate with it.

## Remaining Stage 1 decisions

The following require explicit Royal City policy decisions:

- exact identity lifecycle
- actor taxonomy
- relationship taxonomy
- ownership versus control
- authority sources and precedence
- delegation
- community membership and governance
- place hierarchy
- resource taxonomy
- service lifecycle and obligations
- action taxonomy and lifecycle
- economic boundary and transaction semantics
- dispute/refund/finality rules
- record authority and retention
- emergency authority
- external-domain boundary

## Stage 1 gate

Stage 1 is **not yet complete** until these remaining domain decisions are resolved sufficiently for Stage 2 architecture to proceed without inventing requirements.
