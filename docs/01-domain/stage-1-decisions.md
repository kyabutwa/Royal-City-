# Royal City — Stage 1 Domain Decisions

## Purpose
This document records explicit Royal City domain decisions. Unresolved details remain open and must not be invented.

## Resolved foundational decisions

### D-001 — Person identity
A participating person has one coherent Royal City identity and account. The identity belongs to the person and remains independent of any single community, provider, or service participation. One person may hold multiple simultaneous participations and roles.

### D-002 — Identity and authorization
Identity establishes who is participating. Authorization determines what that participant or an approved system may do in a particular context. Identity does not itself grant permission.

### D-003 — Actions
Meaningful interaction is represented as an attributable action governed by applicable authority and authorization.

### D-004 — Relationships
Relationships and participations are first-class domain concepts. A person can participate in multiple communities, providers, and Royal City services simultaneously.

### D-005 — Authority versus authorization
Authority is the basis for exercising a power, responsibility, or control. Authorization applies that authority to a specific action.

### D-006 — Community authority
Property owners hold community authority and exercise it through community management. Community authority is not automatically individual authority. Royal City coordinates the community but does not thereby replace ordinary community decision-making authority.

### D-007 — Transactions
Economic transactions are distinct from generic actions. The complete economic model remains open.

### D-008 — Services
A service is distinct from its execution, provider, request, authorization, result, and transaction.

### D-009 — Domain state
Valid state transitions require domain justification; implementation storage does not define domain truth.

### D-010 — External operating environments
Community/provider operating environments and other external systems do not become Royal City-owned merely because they integrate with Royal City.

### D-011 — Voluntary participation
Participation is voluntary subject to legitimate applicable rules. A community chooses which Royal City services it uses and may withdraw, subject to applicable obligations and Royal City network conditions. People can participate directly through Royal City-owned services without a community.

### D-012 — No implementation inference
Software architecture must not silently invent unresolved domain rules.

## D-101 — Participant and actor taxonomy
**Status: Resolved at foundational level**

Established:
- People: Royal City identity/account.
- Communities: residential property/real-estate environments using onboarding credentials, not person-style accounts.
- Royal City: the Network Operating System itself.
- Community service providers: independent participants that may operate their own environments and serve multiple communities.
- Approved devices/systems: machine participants using system credentials.
- Delegated/automated actors: approved systems may act within authority delegated by a person, community, provider, or Royal City service.

Detailed organizational and machine classifications remain open.

## D-102 — Identity and credential lifecycle
**Status: Resolved at policy level; detailed mechanics open**

A person's identity remains across participation changes. Royal City may suspend network participation of an identity under identity/security/network policy without erasing the identity. Community participation may be independently suspended or terminated. Communities use onboarding credentials; systems use system credentials.

Issuance, verification, recovery, rotation, and compromise mechanics remain open.

## D-103 — Relationship taxonomy
**Status: Partially resolved**

Established: person-community, person-provider, person-Royal-City-service, community-provider, principal-delegate, and principal-system participation relationships. Complete vocabulary remains open.

## D-104 — Authority model
**Status: Resolved at foundational boundary**

Property owners exercise community authority through community management. Royal City governs the Network Operating System, including identity integrity, security, and mandatory network participation requirements. Royal City does not thereby acquire ordinary authority over community affairs.

Detailed authority categories and conflict precedence remain open.

## D-105 — Delegation
**Status: Resolved at foundational level**

Authority may be delegated to another person, external participant, or approved system. Delegation may be scoped, conditional, time-bound, revoked, and delegated onward. A delegate cannot delegate or exercise more authority than it possesses.

## D-106 — Community model
**Status: Resolved at foundational level**

A community is a participating residential property/real-estate environment. Property owners exercise authority through community management. The community chooses its Royal City service participation and may withdraw. Community withdrawal does not terminate people's Royal City identities.

Detailed governance, ownership structures, membership taxonomy, and disputes remain open.

## D-107 — Place hierarchy
**Status: Resolved at foundational level**

Royal City places may form a hierarchy that reflects the real physical/spatial environment and may include intermediate structures such as phases.

A representative hierarchy may be:

`Community → Phase → Property → Building → Floor → Unit → Room → Facility → Infrastructure`

This is illustrative rather than a mandatory universal sequence. The hierarchy must be able to represent the actual structure of a participating environment.

Example:

`Royal City → Tsavo Royal Suburb Roysambu (Community) → Phase → Property/Plot → Building → Floor → Unit → Room`

Places may also have shared relationships: a place or facility may serve, connect, support, or be associated with multiple other places without being contained by only one of them. This supports shared roads, gates, parking, pools, utilities, security facilities, infrastructure, and other common environments.

Royal City should support multiple spatial/place relationships rather than treating containment as the only relationship. Examples include:

- contains
- part of
- adjacent to
- connected to
- serves
- accessed through
- located within
- shared by
- covers/serves an area

This relationship vocabulary is illustrative; the complete taxonomy and exact semantics remain open.

Place structures and relationships may change over time. Royal City must be able to represent changes such as additions, expansions, subdivisions, combinations, rerouting, and changes in which places or facilities are served or connected. The exact versioning, effective-date, history, and state-transition mechanics remain open.

Royal City may also represent temporary places created for a limited period or in response to planned or unpredictable circumstances. Examples include temporary construction areas, event spaces, security checkpoints, emergency shelters, temporary markets, and temporary parking areas. Their lifecycle, effective period, transition, and retirement mechanics remain open.

Royal City may also represent virtual or non-physical places. These may include online community spaces, digital service areas, virtual meeting rooms, administrative workspaces, digital marketplace areas, and Royal City system environments. The exact virtual-place taxonomy and relationship to physical places remain open.

## D-108 — Resource model
**Status: Resolved at foundational level**

Royal City resources may represent anything that people, communities, providers, or approved systems can use, access, consume, operate, allocate, or depend on.

Representative examples include water, electricity, parking spaces, rooms, equipment, vehicles, network capacity, staff/service capacity, money or funds, storage, land or space, time slots, digital resources, and infrastructure capacity.

The exact resource taxonomy, lifecycle, ownership/control model, availability model, allocation rules, consumption semantics, and measurement model remain open.

Resources may be shared across multiple participants, places, buildings, units, phases, communities, providers, or systems. A single resource may therefore serve multiple consumers or contexts without being duplicated for each one.

Resource availability may change over time and must be representable as changing states or conditions. Examples include available, interrupted, restored, reserved, occupied, limited, fully allocated, or unavailable. The exact availability-state taxonomy, transition rules, scheduling model, and concurrency semantics remain open.

Resources may also have measurable quantities or capacities. Royal City must be able to represent values such as volume, power, count, bandwidth, storage capacity, occupancy capacity, or available service-hours. The exact units, measurement model, precision, aggregation, and capacity semantics remain open.

Resources may be consumed or depleted through authorized actions. Consumption can reduce a resource's available quantity or capacity over time, such as water, electricity/energy, fuel, storage, service-hours, or inventory. The exact consumption, replenishment, reservation, accounting, and measurement semantics remain open.

Resources may also be replenished, restored, replenished through supply, or have their available quantity or capacity increased. Examples include refilling water, charging batteries, restocking inventory, increasing storage capacity, adding staff capacity, or adding electricity generation capacity. The exact replenishment, restoration, expansion, accounting, and measurement semantics remain open.

Resources may be reserved before actual use. A reservation may temporarily hold some quantity or capacity for an authorized participant, place, service, or activity. Examples include parking, rooms, facilities, vehicles, electricity capacity, service capacity, or inventory. The exact reservation lifecycle, priority, expiration, conflict, release, and commitment semantics remain open.

A resource may have an owner and/or controlling authority distinct from the participants who use it. Ownership and control may belong to a community, provider, Royal City service, person, organization, or other authorized authority depending on the resource. The exact ownership/control categories, rights, transfer rules, and precedence remain open.

Resources may have access and usage rules that determine who or what may access, use, reserve, operate, or consume them. These rules may differ by role, relationship, authorization, place, context, time, or other conditions. The exact policy model and precedence remain open.

Resource access and usage may also be conditional. Conditions may depend on time, capacity, reservations, supervision, emergencies, required qualifications or training, operating status, place, context, or other domain conditions. The exact condition model, evaluation rules, precedence, and conflict handling remain open.

Resources may depend on other resources. These dependencies can affect availability, operation, service delivery, capacity, or other resource states. Examples include pumps depending on electricity, buildings depending on water and power, internet services depending on network infrastructure and power, and security gates depending on power and network connectivity. The exact dependency types, propagation behavior, failure semantics, recovery semantics, and dependency graph rules remain open.

Royal City should be able to trace and represent the effects of resource failures, limitations, restoration, and other state changes through dependency chains. A change in one resource may affect dependent resources, places, services, or other domain elements, and restoration may enable recovery of affected dependencies. The exact propagation, prioritization, timing, causality, and recovery rules remain open.

Resources may be composed of other resources. A composite resource may consist of component resources whose existence, state, capacity, availability, or operation contributes to the composite resource. Examples include water systems composed of pumps, pipes, tanks, and treatment equipment; power systems composed of generation, storage, conversion, and wiring components; and facilities composed of space and supporting equipment. The exact composition, component lifecycle, dependency distinction, and state aggregation rules remain open.
## D-109 — Service model
**Status: Resolved at participation boundary**

Services can be provided through communities/providers or directly by Royal City. Providers may manage workers, service delivery, service details, and their own operating environments. Providers may serve multiple communities, with each participation separately governed. Royal City-owned services may have their own participation rules within Royal City policy.

Detailed service lifecycle remains open.

## D-110 — Action model
**Status: Partially resolved**

People, approved systems, delegates, and automated systems may perform authorized actions. System actions must remain attributable to system credentials and their authority context. Complete action taxonomy/lifecycle remains open.

## D-111 — Economic model
**Status: Open**

Commitment, settlement, finality, reversal, refund, dispute, and economic authority remain to be defined.

## D-112 — Record model
**Status: Partially resolved**

Significant participation, authorization, delegation, suspension/revocation, and action outcomes require appropriate records where recording is required. Ending a relationship does not erase required historical records. Complete retention/correction/deletion/visibility policy remains open.

## D-113 — Emergency authority
**Status: Open**

Extraordinary authority, if any, remains to be explicitly defined.

## D-114 — External boundary
**Status: Partially resolved**

Royal City coordinates the ecosystem and governs its Network Operating System. Community/provider environments may participate without becoming Royal City-owned. Approved external participants and systems may receive bounded delegated authority. Exact ownership/control and external-authority taxonomy remains open.

## Completion rule
Stage 1 closes only when D-101 through D-114 are either explicitly resolved as policy or deliberately declared non-domain concerns.
