# Ecosystem Overview

Royal City is intended to operate as one connected ecosystem across people, communities, places, services, resources, economic activity, physical infrastructure, and digital systems.

The ecosystem boundary and its internal system boundaries are Stage 2 architecture work.

The current repository deliberately avoids prescribing whether the eventual implementation is one application, multiple applications, services, platforms, or another structure.


## Q1 — Digital ecosystem boundary

**Decision: Yes.**

The Royal City digital ecosystem includes all digital systems that Royal City operates or officially coordinates, including Royal City core/NOS, Royal City-owned services, connected community management systems, community/provider systems, provider systems, payment and financial systems, building/property systems, utility systems, access/security systems, IoT/devices, external services/platforms, and participating people's devices/apps.

Inclusion in the Royal City ecosystem does **not** imply ownership by Royal City. System ownership, operational control, coordination responsibility, and integration participation are distinct architectural concerns.

The exact classification and boundary rules for each system category remain Stage 2 work.


## Q2 — Royal City NOS as central coordination layer

**Decision: Yes.**

Royal City NOS is the central coordination layer for the participating ecosystem. It coordinates identity, authorization, actions, services, data exchange, state, events, and ecosystem relationships across participating people, communities, providers, devices, and external systems.

Royal City NOS does not have to act as a mandatory technical proxy for every system-to-system communication. Participating systems may communicate directly where appropriate, but a communication must not bypass Royal City authority or authorization requirements when the interaction is governed by Royal City.

This establishes a distinction between **logical coordination authority** and **technical communication routing**. Exact communication patterns, trust boundaries, protocols, and bypass rules remain Stage 2 work.
