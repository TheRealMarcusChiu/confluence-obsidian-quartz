---
title: "Protocol Independent Multicasting (PIM)"
created: 2019-11-17T22:23:12.496-06:00
modified: 2019-12-03T14:41:13.902-06:00
parent: "[[Multicast Routing Protocols]]"
children: []
---
### Protocol Independent Multicasting (PIM)
- replaced [[Distance-Vector Multicast Routing Protocol (DVMRP)|DVMRP]]
- used for infra-domain multicast (within [[Autonomous System (AS) - Domain|autonomous systems]])
- has 2 modes:
	- <strong>Dense Mode (PIM-DM)</strong>
		- uses dense multicast routing. It implicitly builds shortest-path trees by flooding multicast traffic domain wide, and then pruning back branches of the tree where no receivers are present. PIM-DM is straightforward to implement but generally has poor scaling properties. The first multicast routing protocol, DVMRP used dense-mode multicast routing
	- <strong>Sparse Mode (PIM-SM)</strong>
		- a many-to-many multicast
		- explicitly builds unidirectional shared trees rooted at a <em>rendezvous point</em> (RP) per group, and optionally creates shortest-path trees per source. PIM-SM generally scales fairly well for wide-area usage
		- <strong>rendezvous point (RP)</strong> - a router chosen as root for a group
		- <strong>designated router</strong> - a router that receives a multicast packet within a local network
- <strong>Source Specific Multicast (PIM-SSM)</strong>
	- a one-to-many multicast
	- <strong>channel</strong> - a combination of source address S and a group address G
	- builds trees that are rooted in just one source, offering a more secure and scalable model for a limited number of applications (mostly broadcasting of content). In SSM, an IP datagram is transmitted by a source S to an SSM destination address G, and receivers can receive this datagram by subscribing to channel (S,G)
- <strong>Bidirectional PIM (BIDIR-PIM)</strong>
	- an enhancement to PIM
	- a many-to-many multicast
	- explicitly builds shared bi-directional trees. It never builds a shortest path tree, so may have longer end-to-end delays than PIM-SM, but scales well because it needs no source-specific state
