# Domain Rules

## Purpose

This document records foundational rules that have been established for Royal City.

Rules define what must be true in the domain. They are not implementation constraints.

## Established rules

### R-001 — Identity precedes authorized action

An action performed through Royal City must be attributable to an identity or explicitly defined system actor.

### R-002 — Identity does not grant permission

Possessing an identity does not imply permission to perform every action.

Authorization is a separate domain concern.

### R-003 — Authorization is contextual

Authorization may depend on the actor, relationship, target, place, time, purpose, conditions, community rules, or other domain context.

The exact policy dimensions remain to be defined.

### R-004 — Actions have outcomes

A meaningful action must have an observable result, state transition, or explicitly recorded failure where the domain requires recording.

### R-005 — Authority must be explicit

Where an action affects another person, community, organization, resource, place, or service, the source of authority must be identifiable.

### R-006 — Voluntary participation

Royal City participation is based on voluntary participation subject to the legitimate rules and authorities of the relevant community or service.

### R-007 — Domain before implementation

Technical convenience cannot silently become a Royal City domain rule.

### R-008 — Unknowns remain unknown

Where the domain has not established a rule, the repository must represent it as an open question rather than inventing a rule.

## Rules still requiring formalization

- identity creation and verification
- authority and delegation
- ownership
- membership
- access
- service obligations
- economic settlement
- dispute handling
- privacy and information authority
- emergency authority
- governance authority
- lifecycle and deletion/retention semantics
