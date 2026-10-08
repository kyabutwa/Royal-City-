# Authorization Model — Domain Questions

## Purpose

Authorization is central to Royal City's unified identity model.

This document establishes the questions the domain must answer before an implementation model is selected.

## Conceptual model

`Identity + Relationship + Context + Policy → Authorization Decision`

The equation is conceptual, not an implementation specification.

## Questions

### Subject

Who is requesting the action?

- person
- organization
- community
- delegated actor
- approved system or device

### Action

What exactly is being requested?

The action must be represented at a level meaningful to the Royal City domain.

### Target

What is affected?

Potential target categories include:

- place
- unit
- facility
- resource
- service
- relationship
- economic activity
- physical system
- digital system

### Authority

Why is the actor entitled to request the action?

Possible sources of authority must be defined by the domain rather than assumed.

### Context

Which conditions matter?

Potential dimensions include location, time, relationship, community, purpose, state, and other domain conditions.

### Decision

The domain must define possible authorization outcomes, at minimum distinguishing an authorized action from an unauthorized action.

Additional outcomes such as pending, conditional, or requiring additional authority remain open questions.

## Critical distinction

Royal City must never treat:

`Identity = Permission`

The foundational distinction is:

`Identity → establishes actor`

`Authorization → establishes permitted action`

This distinction is foundational to the ecosystem.
