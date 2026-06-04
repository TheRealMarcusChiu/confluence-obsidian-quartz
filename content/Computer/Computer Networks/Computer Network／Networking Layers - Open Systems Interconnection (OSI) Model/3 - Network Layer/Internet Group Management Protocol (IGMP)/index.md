---
title: "Internet Group Management Protocol (IGMP)"
created: 2019-10-08T19:09:24.272-05:00
modified: 2023-11-16T17:22:45.131-06:00
parent: "[[3 - Network Layer]]"
children: []
---
###### Internet Group Management Protocol (IGMP)
- is a [[Computer Network／Networking Communication Protocols|network protocol]] that operates at the [[3 - Network Layer|network layer]]
- is a communications protocol used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships
- is an integral part of IP multicast

Hosts “join” and “leave” multicast groups using IGMP

Routers create a delivery path through the Internet using routing protocols such as:
- PIM (Protocol Independent Multicast)
	- Helps build multicast forwarding trees
	- Routers maintain multicast states to remember which forwarding trees they are part of
- MSDP (Multicast Source Distribution Protocol)
