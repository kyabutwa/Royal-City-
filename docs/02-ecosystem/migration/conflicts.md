# Royal City — Reconciliation Conflict Register

## Purpose

Conflicts are recorded before implementation so incompatible assumptions cannot enter Royal City by accidental migration.

## C-001 — Community identity/account model

**Source:** LegaKeys

**Source assumption:** Community is a first-class identity and may have a community account.

**Royal City rule:** Community is a participating residential property/real-estate environment. It does not receive a person-style identity/account. It receives onboarding credentials connecting its management environment to Royal City NOS.

**Resolution:** **REPLACE for Royal City semantics / ADAPT source implementation.**

**Migration consequence:** Community operating functionality may migrate; the source community identity/account abstraction must not be copied into Royal City as a person-style account.

---

## C-002 — Generic entity identity model

**Source:** LEGAX / LegaKeys

**Source assumption:** Many represented entities may receive governed identities.

**Royal City rule:** The canonical person identity/account is explicit; community uses onboarding credentials; systems use system credentials; provider participation is independently governed.

**Resolution:** **ADAPT.**

**Open detail:** Exact identity/credential taxonomy for providers, organizations, places, services and other non-person entities remains an architecture decision unless already established by Royal City.

---

## C-003 — Platform identity versus Royal City NOS

**Source:** LEGAX/LegaKeys platform and operating-system concepts

**Royal City rule:** Royal City itself is the Network Operating System.

**Resolution:** **MERGE / REPLACE.**

There must not be multiple competing canonical platform authorities inside Royal City.

---

## C-004 — Community/organization/provider operating systems

**Source:** LEGAX and LegaKeys

**Resolution:** **ADAPT.**

These become participating management/operating environments connected to Royal City NOS rather than independent competing Royal City platforms.

Their internal autonomy can remain where ownership and authority stay external.

---

## C-005 — Payment service boundary

**Source:** LegaPay/economic architecture

**Royal City rule:** Royal City coordinates money, payment requests, authorization, status, refunds/disputes and records, while actual settlement may remain external.

**Resolution:** **ADAPT.**

Payment implementation must not silently turn Royal City into a bank or financial institution.

---

## C-006 — Provider refund/dispute authority

**Source:** mature economic/refund architecture

**Royal City rule:** Provider owns its refund eligibility/rules and provider-side decision process. Royal City coordinates identity, authorization, requests, evidence, communication, status synchronization and participant experience.

**Resolution:** **ADAPT.**

Provider remains source of truth for provider-side refund eligibility and substantive provider decision.

---

## C-007 — Intelligence and personal-data use

**Source:** intelligence/forecasting architecture

**Royal City rule:** Personal data may be used for resource forecasting only when the person explicitly authorizes that purpose.

**Resolution:** **ADAPT.**

Technical data availability must never be treated as authorization for a new purpose.

---

## C-008 — Workspace as authority

**Source:** LegaKeys workspace model

**Source invariant:** Workspace membership/visibility is not authority.

**Royal City resolution:** **KEEP.**

Workspaces are organizational/experience contexts. They never become an authority source merely because a participant can see or join them.

---

## C-009 — Digital Twin authority

**Source:** LegaKeys Digital Twin

**Resolution:** **KEEP boundary.**

Digital Twin/world-state representation can be adopted, but it cannot create authority, rewrite history, or convert inference into canonical fact.

---

## C-010 — Universal action gate

**Source:** both source repositories

**Resolution:** **KEEP and elevate.**

Royal City authorization is the universal gate for Royal City-governed consequential actions. External systems may add their own authorization; neither side silently replaces the other.

---

## C-011 — Unresolved non-person identity taxonomy

**Status:** OPEN

Royal City has established people, communities, providers, systems and Royal City as distinct categories, but has not fully finalized identity semantics for every non-person object.

No migration should close this gap by assumption.

---

## C-012 — Emergency authority

**Status:** OPEN

Royal City D-113 remains open. Source emergency machinery must not be imported as a Royal City emergency authority model until explicitly reconciled.
