# Royal City — BeatOne Concept Mapping

## Classification

- KEEP — compatible with Royal City.
- ADAPT — valuable but semantics/boundary change.
- MERGE — consolidate with existing Royal City/LEGAX/LegaKeys model.
- REPLACE — Royal City canonical boundary supersedes source semantics.
- RETIRE — do not carry forward.
- OPEN — insufficiently resolved.

| BeatOne concept | Royal City target | Decision |
|---|---|---|
| BeatCore | Royal City foundational technical contract | MERGE |
| Person | Royal City Person | KEEP |
| Identity | Royal City person/system identity boundary | ADAPT |
| Account | Royal City person account | ADAPT |
| Participant | Royal City participation model | MERGE |
| Community | Royal City participating community | ADAPT |
| Access | Royal City access/action capability | MERGE |
| Place | Royal City place hierarchy | ADAPT |
| Building/Floor/Unit | Royal City place hierarchy | MERGE |
| Resource | Royal City resource model | MERGE |
| Relationship | Royal City relationship contract | MERGE |
| Context | Royal City context model | KEEP / ADAPT |
| Capability | Royal City capability model | KEEP |
| Authorization | Royal City universal authorization gate | MERGE |
| Intent | Royal City action/request precursor | ADAPT |
| Proposal | Royal City governed proposal | KEEP / ADAPT |
| Action | Royal City action | MERGE |
| Event | Royal City event | MERGE |
| Evidence | Royal City evidence/provenance | MERGE |
| Repository boundary | Royal City persistence boundary | KEEP / ADAPT |
| Integration adapter | Royal City external adapter | KEEP |
| Payments | Royal City economic coordination | ADAPT |
| GENESIS | Royal City intelligence | ADAPT |
| OneApp | Royal City personal/application surfaces | ADAPT |
| Platform Website | Royal City web experience | ADAPT |
| Zalagren | Royal City product boundary | REPLACE |
| Beat* service brands | Royal City service applications | ADAPT |
| Kenya-first launch assumptions | Royal City jurisdiction strategy | OPEN |
| BeatOne production stack | Royal City technical implementation | ADAPT |

## Key semantic preservation

BeatOne's strong distinctions remain valuable:

- Identity ≠ Account;
- Account ≠ Credential;
- Credential ≠ Session;
- Authentication ≠ Authorization;
- Capability ≠ Authorization;
- Relationship ≠ Authorization;
- Context ≠ Authorization;
- Authorization ≠ Action;
- Action ≠ Event;
- Event ≠ Evidence.

These are merged into Royal City's existing canonical invariants.

## Participant reconciliation

BeatOne treats Participant as a first-class contextual participation record.

Royal City retains this concept but anchors the human path as:

`Person → Royal City Identity/Account → Participation/Relationship → Authorization`

A Participant/participation record must not create a second person identity.

## Community reconciliation

BeatOne's Community is a voluntarily participating collective context.

That semantic value is retained.

However, Royal City's stronger canonical rule remains:

`Community Management Environment → Onboarding Credentials → Royal City NOS`

A community must not be imported as a person-style Royal City account.

## Place reconciliation

BeatOne's Build Phase → Building → Floor → Unit → Resource hierarchy is useful, but Royal City already permits a richer hierarchy including:

`Community → Phase → Property → Building → Floor → Unit → Room → Facility → Infrastructure`

Therefore BeatOne's hierarchy becomes an implementation/reference model rather than the sole canonical hierarchy.

## Product boundary reconciliation

BeatOne's current repository identifies Zalagren as its user-facing product and BeatOne as historical compatibility naming.

Royal City does not inherit either product identity.

Only reusable contracts, implementation patterns, tests and verified behavior are migrated.
