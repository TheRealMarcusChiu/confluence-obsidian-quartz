---
title: "Network-Based Intrusion Detection System (Network-Based IDS)"
created: 2019-11-11T14:27:59.644-06:00
modified: 2019-11-11T14:29:45.940-06:00
parent: "[[Intrusion Detection／Prevention Systems (IDS - IPS)]]"
children: []
---
### Network-based IDS (NIDS)
- monitor traffic at selected points on a network
- in (near) real time to detect intrusion patterns
- may examine network, transport and/or application level protocol activity directed toward systems

### Comprises a number of sensors
- inline (possibly as part of other net device) – IPS
- passive (monitors copy of traffic) – IDS

### Intrusion Detection Techniques for NIDS
- signature detection - at application, transport, network layers; unexpected application services, policy violations
- anomaly detection - for denial of service attacks, scanning, worms

When potential violation detected, sensor sends an alert and logs information
- used by analysis module to refine intrusion detection parameters and algorithms
- by security admin to improve protection
