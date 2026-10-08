# Authorization

Authorization determines what an identity is allowed to do.

A Royal City authorization model must distinguish identity from permission and account for relevant context, relationships, authority, conditions, and community or service rules.

The exact authorization model is an open architecture/domain question until Stage 1 defines the domain semantics.


## Q4 — Authorization as the universal action gate

**Decision: Yes.**

Royal City's authorization layer determines whether an identity or approved actor is permitted to perform a Royal City-governed action, regardless of whether the target is a Royal City service, community, provider, building/unit/facility, physical resource, device/system, payment/transaction, or external service.

The architectural pattern is:

`Identity → Relationship / Authority → Authorization → Action → Target → Result`

External systems may perform additional authorization or policy checks required by their own operation. Royal City authorization does not automatically replace external authorization, and external authorization does not automatically create Royal City authority.

The exact authorization decision architecture, policy evaluation, delegation handling, trust propagation, enforcement points, caching, revocation, and failure behavior remain Stage 2 work.
