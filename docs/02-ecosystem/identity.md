# Identity

Identity is the foundational connective layer of Royal City.

The identity model must eventually establish:

- what an identity represents
- how identities are created and verified
- identity lifecycle
- identity ownership and control
- relationships between identities
- delegation and representation
- authorization context
- identity security
- identity interoperability

These are design questions for Stage 1 and Stage 2, not assumptions to be silently implemented.


## Q3 — Unified Royal City identity layer

**Decision: Yes.**

Royal City NOS provides the unified identity layer across the Royal City digital ecosystem. A person's Royal City identity can be recognized across participating communities, Royal City services, providers, facilities, devices, and external systems when the person has authorized the relevant interaction.

A unified identity does **not** require one universal credential or authentication mechanism. External systems may retain their own credentials, authentication methods, and sessions. Royal City maintains the authoritative relationship between the Royal City identity and the authorized external participation.

Identity recognition does not itself grant permission. The applicable authorization, relationship, authority, context, and policy determine what the identity may do in each participating system or service.

The exact identity federation, credential, trust, authentication, token, mapping, lifecycle, and revocation mechanisms remain Stage 2 work.
