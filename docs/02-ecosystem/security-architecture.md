# Royal City — Security Architecture Foundation

## Security invariant

`Identity → Authentication → Authorization → Enforcement`

Authentication establishes confidence about the actor. Authorization determines whether the actor may perform the requested operation.

## Required separations

- Identity ≠ Account.
- Authentication ≠ Authorization.
- Credential ≠ Authority.
- Relationship ≠ Authorization.
- Capability ≠ Authorization.
- Recognition/biometrics ≠ Authorization.
- Workspace visibility ≠ Authority.
- System credential ≠ human identity.

## Credential classes

Royal City may support distinct credentials for:

- people;
- community onboarding;
- providers/organizations;
- approved systems/devices;
- external federated assertions.

Exact credential mechanisms remain implementation architecture work.

## Revocation

Security architecture must support revocation of:

- sessions;
- credentials;
- community participation;
- provider participation;
- system credentials;
- delegations;
- authorizations.

Revocation must not silently erase historical records.

## Least privilege

Authorization should be:

- scoped;
- purpose-aware where required;
- time-bounded where required;
- condition-aware;
- revocable;
- attributable.

## Sensitive data

Sensitive identity, credential and biometric material must not be copied into ordinary domain records unnecessarily.

Data use must respect authorization and purpose boundaries.

In particular, access to personal data does not automatically authorize secondary uses such as resource forecasting.
