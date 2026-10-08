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

Resources may be transformed into other resources through authorized operations or processes. Transformation may change resource type, quantity, capacity, state, or other properties. Examples include raw water becoming treated water, solar energy becoming electricity, electricity becoming stored battery charge, raw materials becoming manufactured goods, data becoming processed information, and waste becoming recycled material. The exact transformation model, inputs/outputs, conversion rules, loss/yield semantics, and accounting remain open.

Resource transformations and consumption may produce waste, byproducts, losses, or secondary resources that Royal City can represent. These outcomes may have their own quantity, state, lifecycle, ownership/control, availability, or further transformation. The exact waste/byproduct taxonomy, loss accounting, conservation rules, and processing semantics remain open.

Royal City resources may be continuously measured through telemetry or other automated observations. Measurements may report quantity, capacity, consumption, generation, occupancy, availability, state, performance, or other resource properties over time. The exact telemetry sources, measurement protocols, frequency, accuracy, trust model, storage, aggregation, and reconciliation rules remain open.

Royal City may generate alerts or domain events when resource conditions, measurements, state changes, thresholds, patterns, or anomalies meet defined criteria. Alerts may represent conditions such as low levels, excessive load, overflow, full occupancy, critical battery state, severe capacity constraints, abnormal consumption, or other detected conditions. The exact alert taxonomy, threshold and pattern rules, severity model, detection confidence, escalation, notification, suppression, correlation, and automated-response semantics remain open.

Royal City may forecast future resource conditions, demand, consumption, generation, availability, capacity, or other resource-related states using authorized historical measurements, current state, dependencies, patterns, and other permitted inputs. Forecasting may support planning, allocation, maintenance, capacity management, service continuity, and other authorized resource decisions. The exact forecasting models, horizons, confidence representation, validation, and operational use remain open.

Personal data must not be used for resource forecasting merely because Royal City can access it. Where forecasting would use personal data, the person must have explicitly authorized that use for the applicable purpose, subject to applicable law and other domain constraints. Access to personal data does not itself constitute authorization to repurpose it for forecasting.
## D-109 — Service model
**Status: Resolved at participation boundary**

Services can be provided through communities/providers or directly by Royal City. Providers may manage workers, service delivery, service details, and their own operating environments. Providers may serve multiple communities, with each participation separately governed. Royal City-owned services may have their own participation rules within Royal City policy.

Detailed service lifecycle remains open.

## D-110 — Action model
**Status: Partially resolved**

People, approved systems, delegates, and automated systems may perform authorized actions. System actions must remain attributable to system credentials and their authority context. Complete action taxonomy/lifecycle remains open.

## D-111 — Economic model
**Status: Resolved at foundational level**

Royal City has a native economic coordination layer within its ecosystem. It may represent and coordinate economic concepts and activities such as money and balances, payments and transfers, prices and fees, invoices and bills, credits and debts, transactions, community contributions, provider compensation, budgets, revenue, and expenses.

Royal City's economic layer is part of the ecosystem's operating model, but Royal City is not itself a bank, mobile-money service such as M-Pesa, or general financial institution. Royal City may connect to and coordinate with external financial, payment, banking, mobile-money, or other regulated economic systems where appropriate.

The exact monetary instruments, settlement model, commitment and finality semantics, reversals, refunds, disputes, financial authority, custody, regulatory boundaries, external-system integration, and other detailed economic rules remain open.

Royal City may initiate and coordinate payments through connected external payment, banking, mobile-money, or other financial systems. Royal City does not need to hold or stockpile participants' money in order to coordinate these payments; the actual movement and settlement of funds may be performed by the connected external financial system. The exact payment initiation, authorization, settlement, confirmation, failure, reversal, refund, and reconciliation mechanics remain open.

A person may associate multiple external payment sources or financial accounts with their Royal City identity, subject to applicable authorization and provider support, and may select an appropriate source for a particular payment. Royal City may also support multiple payment-authorization methods, including methods based on devices, credentials, biometrics, or other approved mechanisms. For example, a person may authorize a payment using a palm-based biometric method. A payment-authorization method identifies or authenticates the authorized participant and does not itself constitute a monetary instrument or require Royal City to hold the participant's funds. The exact supported methods, security requirements, consent, fallback, verification, and external-provider mechanics remain open.

Royal City may support recurring, scheduled, or automatic payments when the participant has explicitly authorized the applicable payment arrangement. Examples include recurring community fees, utility bills, subscriptions, scheduled service payments, and installment payments. Automatic payment authorization may define the applicable amount or pricing rule, payment source, schedule or trigger, duration, limits, and conditions. The actual movement and settlement of funds may continue to be performed by the connected external financial system. The exact recurring-payment lifecycle, authorization renewal, cancellation, insufficient-funds handling, changes in amount, notifications, retries, disputes, and reconciliation remain open.

Authorized participants may create payment requests through Royal City for legitimate economic activities such as community fees, service charges, purchases, bookings, invoices, contributions, or other authorized obligations. A payment request may identify the requesting participant, payer or intended payer, amount or applicable pricing rule, purpose, due date or trigger, and other relevant conditions. A payment request does not itself move funds; the payer must authorize the applicable payment and settlement may be performed by a connected external financial system. The exact payment-request lifecycle, acceptance, rejection, expiration, modification, cancellation, dispute, and record semantics remain open.

Royal City may support authorized payment splitting or allocation, where one payment is allocated among multiple authorized recipients, destinations, services, or obligations. Such allocation must be governed by an applicable authorization and allocation rule; Royal City must not distribute funds to recipients merely because it can technically route the payment. The allocation may be defined by the payer, an authorized recipient, a community rule, a service arrangement, or another authorized economic relationship. Actual settlement remains subject to the connected external financial system and applicable rules. The exact split-allocation lifecycle, precedence, rounding, failure handling, authorization changes, and reconciliation semantics remain open.

Royal City may support refunds and refund coordination for authorized payments when an economic obligation or transaction requires money to be returned. A refund may be initiated by an authorized participant or according to an applicable authorized rule, and Royal City may coordinate the refund request, authorization, status, and outcome with the connected external financial system. Royal City does not need to hold the original funds in order to coordinate a refund; the actual return and settlement of funds may be performed by the external financial system. The exact refund eligibility, authorization, timing, partial-refund, failure, reversal, dispute, and reconciliation semantics remain open.

Royal City may support payment disputes as a first-class economic process. A dispute may address matters such as an incorrect charge, unauthorized payment, non-delivery or inadequate delivery of a service, duplicate charging, an unresolved refund, or another authorized economic disagreement. Royal City may coordinate dispute initiation, evidence, notifications, participant responses, status, escalation, and outcomes, subject to the applicable authority and rules. Where financial settlement or reversal is required, the appropriate authorized party and/or connected external financial system may perform the actual financial resolution. The exact dispute categories, evidence requirements, timelines, decision authority, escalation, provisional actions, resolution, appeal, and reconciliation semantics remain open.

Royal City should create a payment record and proof of outcome for each coordinated payment. The record may capture the payment request, applicable authorization, payer and recipients, amount or allocation, purpose, payment source or method where permitted, timestamps, processing status, completion or failure outcome, refund or dispute relationship where applicable, and an external transaction or settlement reference where available. The record should distinguish what was requested, what was authorized, what was attempted, and what actually occurred. The exact receipt format, proof requirements, record visibility, correction, retention, reconciliation, and privacy rules remain open.

Royal City should support notifications for important payment lifecycle events to the relevant authorized participants. Events may include payment requests, authorization, successful or failed processing, refunds, dispute initiation and resolution, and upcoming or triggered automatic payments. Notifications must respect identity, authorization, privacy, communication preferences, and applicable rules. The exact notification channels, timing, delivery guarantees, content, escalation, suppression, and preference semantics remain open.

Every payment coordinated through Royal City requires explicit authorization by the payer. This requirement applies to all payment forms, including one-time, recurring, scheduled, automatic, split, or otherwise coordinated payments. A previously granted recurring or automatic-payment arrangement does not remove the requirement for payment authorization; each payment must remain attributable to an explicit authorization that covers it. Royal City must not silently create payment authority from mere account connection, participation, access to funds, or possession of personal data. The exact representation, verification, validity period, revocation, re-authorization, and evidence of payment authorization remain open.

A payer may request cancellation of an authorized payment before settlement where cancellation is supported and still possible. A cancellation must not silently alter the payment state: Royal City should record the cancellation request and outcome and notify the relevant authorized participants. If the external financial system has already settled the payment or does not support cancellation, the payment may instead require a refund or other authorized resolution. The exact cancellation window, authority, notification timing, race conditions, and external-provider semantics remain open.

A failed payment must be recorded as a failed payment outcome and must not be represented as completed or settled. Royal City should notify the relevant authorized participants of the failure and preserve the distinction between an attempted payment, a failed payment, and a completed or settled payment. Failure may result from insufficient funds, provider rejection, unavailable services, network failure, authorization failure, or other conditions. The exact failure taxonomy, retry behavior, notification timing, reconciliation, and recovery semantics remain open.

Authorized payment requests should expire automatically when they remain incomplete beyond their applicable authorization period. Expiration must prevent an expired authorization from being treated as a current authorization for settlement. After expiration, the payer must explicitly re-authorize the payment before it can proceed. The payer should also be able to revoke an existing payment authorization before it expires. Payment authorization must be scoped to the payment or payment arrangement it authorizes and must not be treated as blanket authority for arbitrary payments. Scope may include amount, recipient or destination, purpose, payment type, frequency, timing, and other defined conditions. A payment must not proceed when it falls outside the authorization scope. The exact scope vocabulary, condition semantics, matching/evaluation rules, modification behavior, and external-provider representation remain open. Changes to an existing payment authorization must require explicit authorization by the payer. A modification may change the amount, recipient or destination, purpose, payment type, frequency, timing, or other authorization conditions, but the modified scope must not become effective merely through account access, system behavior, or an implicit change. The exact modification workflow, whether changes create a new authorization version, handling of in-flight payments, and external-provider synchronization remain open. Royal City must preserve the history/version of payment authorizations and their changes, including creation, modification, revocation, expiration, and the applicable authorization scope and state at each relevant point. Historical authorization records must remain distinguishable from current authorization state. The exact versioning structure, retention, correction, deletion, visibility, and evidentiary semantics remain open. Once revoked, that authorization must no longer be valid for initiating or completing the covered payment. The exact revocation timing, race conditions, external-provider coordination, notification, and evidence semantics remain open. The exact expiry duration, whether it varies by payment type or rule, warning/notification behavior, extension or re-authorization process, and interaction with external payment systems remain open.

## Payment authorization safety and visibility — additional resolved requirements

Royal City should protect against accidental duplicate payments. Where the same authorized payment is submitted or retried more than once, Royal City should be able to distinguish the retry from a new payment and prevent unintended duplicate settlement where the applicable systems and information allow. Duplicate-detection and prevention must not silently block a genuinely distinct payment. The exact idempotency mechanism, payment identity, matching criteria, concurrency handling, external-provider coordination, duplicate resolution, and reconciliation semantics remain open.

The payer must be able to view their active and historical payment authorizations through Royal City, including their applicable scope, status, and relevant authorization changes. Visibility must respect identity, authorization, privacy, and applicable record-access rules. The exact presentation, filtering, historical detail, and access-control semantics remain open.

Royal City should notify the payer when a payment authorization changes state, including when it is created, modified, revoked, expires, or is used for a payment. Notifications must respect identity, authorization, privacy, communication preferences, and applicable rules. The exact notification channels, timing, delivery guarantees, content, and suppression semantics remain open.

## Payment-related delegation — additional resolved requirement

Royal City should support limited delegation for payment-related actions that do not authorize or execute a payment. A payer or other authorized principal may delegate actions such as viewing payment status or receipts, submitting refund requests, opening payment disputes, or managing payment-related notifications, while actual payment authorization remains subject to the payer's explicit authorization and the payment-specific delegation restriction. The exact delegable action taxonomy, delegation scope, duration, revocation, visibility, and evidence semantics remain open. The payer should be able to explicitly authorize a refund request. Royal City may coordinate the refund request, authorization, status, notifications, and outcome, while actual money movement may be performed by the connected external payment or financial system. The exact refund authorization scope, eligibility, timing, cancellation, evidence, and external-provider semantics remain open. The payer should be able to request cancellation of an authorized refund before the refund is settled where cancellation remains possible. Royal City should record the cancellation request and outcome and ensure the refund is not represented as settled if cancellation succeeds. The exact cancellation window, race conditions, notification, and external-provider semantics remain open. Royal City must always record the final outcome of a refund, including successful, failed, cancelled, rejected, or otherwise unresolved outcomes. A refund must not be represented as completed or settled until actual settlement is confirmed. The exact outcome taxonomy, confirmation evidence, reconciliation, timing, and external-provider semantics remain open.  Where a provider’s refund rules determine eligibility, Royal City should use those applicable provider rules rather than inventing independent refund-eligibility rules. Royal City may coordinate the request, authorization, status, notifications, and outcome while the provider or applicable external system remains the authority for its refund policy. The exact provider-rule representation, precedence, conflicts, and synchronization semantics remain open.

The payer should be able to open a refund dispute when they believe a provider wrongfully denied a refund. Royal City should coordinate the dispute process, including evidence, communication, status, and escalation, while the applicable provider or other authorized authority determines the substantive outcome. The exact dispute evidence, timelines, decision authority, escalation, appeal, and reconciliation semantics remain open. Royal City should preserve the evidence associated with a refund dispute, including the relevant original payment, refund request, provider response, communications, submitted documents or other evidence, and relevant timestamps, subject to applicable privacy, authorization, retention, and legal rules. The exact evidence schema, integrity/provenance requirements, retention, correction, deletion, visibility, and access semantics remain open. Royal City should always notify the relevant authorized participants whenever a refund dispute changes state, including when it is opened, evidence is submitted, a provider response is received, the dispute is escalated, resolved, or closed. Notifications must respect identity, authorization, privacy, communication preferences, and applicable rules. The exact notification channels, timing, delivery guarantees, content, and suppression semantics remain open.

Royal City should always notify the relevant authorized participants when a refund changes state, including when it is requested, authorized, cancelled, failed, rejected, or successfully settled. Notifications must respect identity, authorization, privacy, communication preferences, and applicable rules. The exact notification channels, timing, delivery guarantees, content, and suppression semantics remain open.

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
