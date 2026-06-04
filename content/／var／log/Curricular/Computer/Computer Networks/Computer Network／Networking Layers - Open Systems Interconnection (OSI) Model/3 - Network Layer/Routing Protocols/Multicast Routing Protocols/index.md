---
title: "Multicast Routing Protocols"
created: 2019-09-03T13:57:17.836-05:00
modified: 2023-11-16T17:51:40.362-06:00
parent: "[[Routing Protocols]]"
children:
  - "[[Distance-Vector Multicast Routing Protocol (DVMRP)]]"
  - "[[Multicast Source Discovery Protocol (MSDP)]]"
  - "[[Protocol Independent Multicasting (PIM)]]"
---
###### Multicast Routing Protocols
````excerpt
- manages group membership and controls the path that multicast data takes over the network
- updates a multicast routing table (as unicast routing protocols update unicast routing tables)
````
^excerpt

# Multicast Reverse Path Forwarding (mRPF or just RPF) aka Reverse Path Broadcast (RPB)
- often used in tandem with multicast protocols
- the underlying assumptions of RPF check are that:
	- the <em>unicast routing table</em> must be correct and converged (i.e. up to date)
	- the path used from a sender to a router and the reverse path from the router back to the sender are symmetric

# Multicasting Protocols Implementations
- [[Distance-Vector Multicast Routing Protocol (DVMRP)]]
- [[Protocol Independent Multicasting (PIM)]]
- [[Multicast Source Discovery Protocol (MSDP)]]
