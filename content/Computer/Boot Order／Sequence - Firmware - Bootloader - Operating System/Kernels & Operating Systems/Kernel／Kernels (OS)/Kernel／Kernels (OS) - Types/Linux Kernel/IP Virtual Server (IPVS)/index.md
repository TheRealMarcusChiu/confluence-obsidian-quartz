---
title: "IP Virtual Server (IPVS)"
created: 2024-08-28T10:48:30.834-05:00
modified: 2025-08-27T13:30:36.493-05:00
parent: "[[Linux Kernel]]"
children: []
---
###### IP Virtual Server (IPVS)
````excerpt
- implements transport-layer [load balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)), usually called [Layer 4](https://en.wikipedia.org/wiki/Layer_4) [LAN switching](https://en.wikipedia.org/wiki/LAN_switching), as part of the [[Linux Kernel|Linux kernel]]
- it's configured via the user-space utility <code>[ipvsadm](https://man.cx/?page=ipvsadm(8))</code> tool or [[Keepalived]]
- is incorporated into the [[Linux Virtual Server (LVS)|Linux Virtual Server (LVS)]], where it runs on a host and acts as a load balancer in front of a cluster of real servers. IPVS can direct requests for TCP- and UDP-based services to the real servers, and make services of the real servers appear as virtual services on a single IP address
- is built on top of [[Netfilter]]
- is merged into versions 2.4.x and newer of the Linux kernel mainline
````
^excerpt
