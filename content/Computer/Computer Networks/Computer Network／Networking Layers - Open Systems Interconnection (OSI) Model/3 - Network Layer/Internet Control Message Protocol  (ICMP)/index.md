---
title: "Internet Control Message Protocol  (ICMP)"
created: 2019-03-16T20:48:03.524-05:00
modified: 2023-11-16T17:22:05.115-06:00
parent: "[[3 - Network Layer]]"
children:
  - "[[ICMP Destination Unreachable]]"
---
###### Internet Control Message Protocol (ICMP)
````excerpt
- is a [[Computer Network／Networking Communication Protocols|network protocol]] that operates at the [[3 - Network Layer|network layer]]
- messages are encapsulated inside [[Internet Protocol (IP)|IP]] packets/datagrams
````
^excerpt

# ICMP Message Types
- <strong>echo request/reply</strong> - used to test connectivity (ping)
- <strong>time exceeded</strong> - used to report expired datagrams (TTL = 0)
- <strong>redirect</strong> - used to inform hosts about better routes (gateways)
- <strong>destination unreachable</strong> - used to inform a host of the impossibility of delivering traffic to a specific destination

# ICMP Commands
- [[ping]] - uses ICMP echo messages to determine whether a node is reachable and alive
- [[traceroute]] - determines the set of routers along the path to the destination
