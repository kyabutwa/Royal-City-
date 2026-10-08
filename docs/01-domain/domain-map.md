# Royal City Domain Map

## Primary map

```
                         ┌──────────────┐
                         │   COMMUNITY  │
                         └──────┬───────┘
                                │
                                ▼
┌──────────┐              ┌──────────────┐
│  ACTOR   │─────────────▶│   IDENTITY   │
└──────────┘              └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │ RELATIONSHIP │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │ AUTHORIZATION│
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │    ACTION    │
                         └──────┬───────┘
                                │
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
        ┌─────────┐        ┌─────────┐        ┌─────────┐
        │  PLACE  │        │ SERVICE │        │RESOURCE │
        └─────────┘        └─────────┘        └─────────┘
             │                  │                  │
             └──────────────────┼──────────────────┘
                                ▼
                         ┌──────────────┐
                         │    RESULT    │
                         └──────┬───────┘
                                ▼
                         ┌──────────────┐
                         │STATE / RECORD│
                         └──────────────┘
```

## Interpretation

The map expresses the current conceptual dependency:

**Actors participate through identity. Identity exists within relationships. Relationships and authority inform authorization. Authorization enables actions. Actions interact with the world and produce results and state.**

This is a domain model, not a software architecture diagram.
