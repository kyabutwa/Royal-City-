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

The exact place types, containment rules, spatial relationships, and treatment of shared/non-contained places remain open.

## D-108 — Resource model
**Status: Open**

Detailed resource, asset, facility, infrastructure, and controllable-thing semantics remain to be defined.

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
