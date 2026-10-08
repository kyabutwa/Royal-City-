# Royal City — Canonical Concept Mapping

## Mapping legend

- **KEEP:** adopt with Royal City meaning unchanged.
- **ADAPT:** retain value but change boundary/semantics.
- **MERGE:** combine overlapping source concepts.
- **REPLACE:** Royal City canonical model supersedes source semantics.
- **RETIRE:** do not migrate.
- **OPEN:** requires a later explicit decision.

## Core mapping

| Source concept | LEGAX | LegaKeys | Royal City target | Decision |
|---|---|---|---|---|
| Person identity | Identity | BeatIdentity | Royal City person identity | KEEP / MERGE |
| Account | Account | Account | Royal City person account | KEEP / ADAPT |
| Participant | Participant | Participant | Participation/actor construct | KEEP / ADAPT |
| Community | Community entity / NOS | Community identity/account | Community + onboarding credentials | **ADAPT** |
| Platform/NOS | LegaX platform/services | LegaKeys OS | Royal City NOS | **MERGE / REPLACE** |
| Relationship | Canonical relationship | First-class relationship | Royal City relationship | KEEP / MERGE |
| Role | Role | Role | Role within participation | KEEP |
| Capability | Capability | Capability | Capability | KEEP |
| Authority | Authority | Authority | Domain authority | KEEP |
| Authorization | Authorization | Authorization | Universal Royal City action gate | KEEP / MERGE |
| Access | Access | BeatAccess | Access as governed action/enforcement | ADAPT |
| Action | Action | Intent → proposal → action | Royal City action | KEEP / MERGE |
| Command | Command/execution | Core execution | Command/execution mechanism | ADAPT |
| Event | Event | Event | Royal City event record | KEEP |
| Evidence | Evidence | Evidence | Royal City evidence/provenance | KEEP |
| State machine | Canonical state machines | State/truth model | Royal City state contracts | KEEP / ADAPT |
| Provider adapter | Provider adapter | Integrations | External/provider adapter boundary | KEEP |
| Community OS | Community management NOS | Community OS | Participating community management environment | ADAPT |
| Organization OS | Organization NOS | Organization/workspaces | Provider/organization operating environment | ADAPT |
| Digital Twin | Intelligence/state concepts | Digital Twin | Royal City world/state representation | ADAPT |
| GENESIS | Intelligence | GENESIS | Royal City intelligence layer | ADAPT |
| CONSTANTYNA | Human intelligence concepts | CONSTANTYNA | Royal City human-interaction intelligence | ADAPT |
| World intelligence | World/environment | Urban intelligence | Royal City world/environment intelligence | ADAPT |
| Workspace | UI/operating contexts | Workspaces | Royal City workspace/application surface | KEEP / ADAPT |
| Application | Services/UI | Workspaces & Applications | Royal City application ecosystem | KEEP / ADAPT |
| Economy | Economic/commercial model | Economy | Royal City native economic coordination | ADAPT |
| Payment | LegaPay | Payment/economy | Royal City payment coordination | ADAPT |
| Settlement | External/provider boundary | Economy | External financial/payment system | KEEP |
| RAG | RAG architecture | Knowledge/intelligence | Governed intelligence support | ADAPT |
| Agent | Intelligence architecture | Intelligence/core execution | Authorized automation actor | ADAPT |
| Digital identity federation | Identity adapters | Identity | Royal City identity interoperability | ADAPT |
| Production UI | Production UI | Experience | Royal City applications/experiences | ADAPT |

## Critical semantic mappings

### Identity

The mature distinction:

`Identity ≠ Account ≠ Participant`

is retained.

Royal City additionally establishes that a **person** receives the Royal City identity/account, while a community connects using onboarding credentials rather than receiving a person-style account.

### Community

The LegaKeys community identity/account model is **not imported unchanged**.

Royal City canonical rule:

`Community → onboarding credentials → Royal City NOS`

This preserves the community as a real domain environment without turning it into a person-style participant account.

### Network Operating System

LEGAX/LegaKeys operating-system concepts are consolidated under the Royal City NOS boundary.

Royal City NOS is the logical coordination authority. It does not have to proxy every technical message.

### Execution

LEGAX command/execution patterns are adopted as implementation architecture around Royal City actions:

`Authorization → Command/Action → Execution → Outcome → Event/Evidence`

Authorization remains the permission decision; execution remains a separate concern.

### Intelligence

LegaX/LegaKeys intelligence architecture is adopted only behind Royal City authorization and data-governance boundaries.

In particular:

- model output is not authority;
- recommendation is not authorization;
- tool availability is not authorization;
- retrieval is not permission;
- automation is not authority;
- intelligence cannot silently change canonical state.

Personal data may be used for Royal City resource forecasting only when the person has explicitly authorized that use.

### Economy

Mature payment/economic architecture is adopted as Royal City economic coordination.

Royal City does not become a bank, mobile-money service, or general financial institution merely because payment orchestration exists.

External systems remain responsible for actual financial movement/settlement where applicable.
