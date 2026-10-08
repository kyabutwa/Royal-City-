# Action Model

## Purpose

Actions are the central mechanism through which identity interacts with the Royal City world.

## Conceptual structure

`Actor → Identity → Authorization → Action → Target → Result → State / Record`

## Action questions

Every significant action should eventually answer:

1. Who acted?
2. Through which identity?
3. Under what authority?
4. What action was requested?
5. What was the target?
6. In what context?
7. What rules applied?
8. What happened?
9. What state changed?
10. What record is required?

## Action categories

No final taxonomy is established yet.

The domain may eventually distinguish actions involving:

- access
- use
- request
- provision
- payment
- purchase
- booking
- communication
- participation
- administration
- governance
- physical control
- digital control

These are analysis categories only until formally adopted.

## Action integrity

The domain must eventually establish:

- who may initiate an action
- whether actions can be delegated
- whether actions can be cancelled
- whether actions can be reversed
- whether actions are idempotent
- which actions require confirmation
- which actions require multiple authorities
- what must be recorded
- how failures are represented
