# Royal City World Model

## Purpose

This document establishes the current conceptual model of the Royal City world before software implementation.

Royal City is treated as a living environment in which participating actors, communities, places, resources, services, economic activity, and physical and digital systems interact through identity, relationships, authorization, actions, and resulting state.

## Core world

The current model is:

`Actors ↔ Identity ↔ Relationships ↔ Authorization ↔ Actions ↔ Things / Services / Places ↔ Results / State`

The model is intentionally conceptual. It does not prescribe databases, APIs, applications, protocols, or infrastructure.

## World elements

### Actors

Actors are entities capable of participating in Royal City.

The initial actor categories are:

- people
- communities
- organizations
- authorized systems or devices where the domain later establishes them as actors

The exact actor taxonomy remains subject to Stage 1 refinement.

### Identity

Identity provides the unified representation through which an actor participates.

Identity answers **who or what is acting**.

It does not by itself answer **what that actor is allowed to do**.

### Relationships

Relationships describe meaningful connections between actors and other domain elements.

Examples of relationship classes that require formal definition include participation, membership, representation, ownership, responsibility, service relationship, access relationship, and delegation.

These names are working categories, not final requirements.

### Places and physical things

Royal City may contain or connect to physical places and things such as:

- buildings
- units
- facilities
- resources
- infrastructure

Their exact hierarchy, ownership, control, lifecycle, and boundaries must be formally established.

### Services

A service is a capability made available to an actor through Royal City.

A service may involve people, organizations, physical resources, digital systems, or combinations of them.

The service model must distinguish the service itself from the request, authorization, execution, and resulting state.

### Actions

An action is a meaningful operation performed by an authorized actor in a particular context.

Conceptually:

`Identity → Authorization → Action → Target / Context → Result`

Actions may affect places, resources, services, relationships, economic activity, or other domain state.

### Transactions

A transaction represents a meaningful exchange or recorded economic operation where the domain requires transactional semantics.

Not every action is a transaction.

### State

State describes the current relevant condition of a domain object, relationship, process, or other modeled element.

State must be derived from explicit domain rules rather than from application assumptions.

### Community

A community is a participating social or organizational context within Royal City.

The final model must establish membership, authority, governance, participation, boundaries, and relationships between communities and other domain elements.

## World boundary

The Royal City world includes what Royal City directly models, coordinates, authorizes, records, or intentionally connects.

External systems and entities may interact with the world without becoming part of Royal City's internal domain.

The exact boundary is an open question for the architecture stage.
