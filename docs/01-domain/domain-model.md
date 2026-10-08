# Royal City — Authoritative Stage 1 Domain Model

## Status

**Stage:** 1 — World & Domain Model  
**Status:** Policy resolution in progress  
**Implementation:** Not defined

This document describes the Royal City world and domain. It is not software architecture.

## Royal City foundational model

Royal City has three foundational participation layers:

### People

People are human participants in Royal City.

A participating person receives:

- a Royal City identity
- a Royal City account
- participation according to applicable roles, relationships, authority, and authorization

A person may participate through a community or directly through Royal City-owned services.

### Communities

A Royal City community is a participating residential property or real-estate environment.

A community does **not** receive a person-style identity/account.

Instead, it receives community onboarding credentials used to connect its management environment to the Royal City Network Operating System.

Through that connection, Royal City coordinates the community's participating:

- people
- management
- services
- places
- utilities
- economic activity
- related physical and digital systems

### Royal City

Royal City is the operating system itself.

It coordinates participating people, communities, services, places, resources, utilities, economic activity, and connected systems.

Royal City also owns or operates services that people can use directly, including participation that does not require association with a community.

## Participation paths

### Community participation

`Person → Royal City Identity/Account → Community Relationship → Authorization → Community / Community Provider → Service / Place / Resource`

### Direct Royal City participation

`Person → Royal City Identity/Account → Royal City Service → Authorization → Action`

## Core domain chain

`Participant → Identity or Participation Credentials → Relationship / Authority → Authorization → Action → Target → Result → State / Record`

Economic activity may introduce:

`Action → Economic consequence → Transaction → Result / State / Record`

A transaction is not synonymous with an action.

## Core concepts

### Person
A human participant with a Royal City identity and account.

### Community
A participating residential property or real-estate environment connected to Royal City through community onboarding credentials.

### Royal City
The Royal City Network Operating System that coordinates the participating ecosystem and provides Royal City-owned services.

### Identity
The unified participation representation assigned to a person. Identity answers who is participating; it does not itself establish permission.

### Community onboarding credentials
Credentials by which a community connects its management environment to the Royal City Network Operating System. They are not a person-style identity/account.

### Relationship
A meaningful connection between participants and/or domain elements that provides participation context, authority, access, responsibility, service, representation, governance, or other domain meaning.

### Authority
The domain basis that permits a participant or authorized actor to exercise a particular power, responsibility, or control.

### Authorization
The decision determining whether a specific participant may perform a specific action in a specific context.

### Place
A physical/spatial domain recognized or interacted with by Royal City.

### Resource
Something that can be accessed, controlled, allocated, used, provided, consumed, or otherwise acted upon.

### Service
A capability made available to participants. Services may be made available through participating communities/service providers or be owned/operated directly by Royal City.

### Action
A meaningful operation performed by a participant through the applicable identity/credentials under an applicable authorization context.

### Transaction
A representation of an economic exchange or economic commitment where transactional semantics apply.

### State
The current condition of a domain element or process according to domain rules.

### Record
A required persistent representation of a significant domain occurrence, decision, action, transaction, or state transition.

## Foundational invariants

1. A participating person has a Royal City identity and account.
2. Identity and permission are separate concepts.
3. Community onboarding credentials are distinct from a person's identity/account.
4. A community is a participating residential property/real-estate environment, not a person-style account.
5. Royal City is the operating system coordinating the ecosystem, not an ordinary participant account.
6. A person can participate through a community or directly through Royal City-owned services.
7. Authorization requires an identifiable basis of authority.
8. Authorization is contextual.
9. Meaningful actions identify what is being attempted and what it acts upon.
10. Meaningful actions have results, including defined failure where required.
11. State-changing actions produce the required state consequence or record.
12. Economic transactions are distinct from generic actions.
13. Community authority is not automatically individual authority.
14. Technical implementation cannot silently redefine domain semantics.
15. Unknown domain rules remain unknown until explicitly decided.
16. External systems are not automatically Royal City-owned domain objects merely because they integrate with Royal City.
