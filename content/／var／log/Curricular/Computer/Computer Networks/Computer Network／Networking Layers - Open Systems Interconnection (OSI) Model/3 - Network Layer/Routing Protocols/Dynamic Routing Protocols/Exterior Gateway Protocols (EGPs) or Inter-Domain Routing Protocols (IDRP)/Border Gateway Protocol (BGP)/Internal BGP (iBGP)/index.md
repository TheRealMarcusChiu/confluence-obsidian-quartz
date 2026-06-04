---
title: "Internal BGP (iBGP)"
created: 2019-10-23T11:06:49.595-05:00
modified: 2019-11-20T13:26:34.530-06:00
parent: "[[Border Gateway Protocol (BGP)]]"
children: []
---
<strong>Internal BGP (iBGP)</strong> is used for integrating [[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)|EGP]] & [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|IGP]]: more in [[Integrating EGP & IGP]]

backbone networks uses a variant of [[Border Gateway Protocol (BGP)|BGP]] called <strong>Internal BGP (iBGP)</strong> because <em>border routers </em>learn way too much routing information that it becomes too costly to inject it into [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|intra-domain protocol]].

for any router in an AS to determine to appropriate next hop, 2 things must exist:
- each router in the AS must know the best <em>border router</em> when sending a packet to any address. this is done via <em>iBGP</em>
- each router in the AS keeps track of how to get to each <em>border router</em>. this is done via conventional intra-domain protocol

to see how this all works, consider the simple example network, representing a single AS, in Figure 4.9
- the 3 border routers, A, D, and E, speak [[External BGP (eBGP)]] to other [[Autonomous System (AS) - Domain|autonomous systems (AS)]] and learn how to reach other networks. These 3 border routers communicate with each other and with the interior routers B and C by building a mesh of iBGP sessions among all the routers in its own AS.
- Let’s now focus in on how interior router B builds up its complete view of how to forward packets to any prefix.

Look at the table at the top left of Figure 4.10 which shows the information that router B learns from its iBGP sessions. It learns that some prefixes are best reached via router A, some via D, and some via E. At the same time, all the routers in the AS are also running some [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|intra-domain routing protocol]] (e.g. [[Routing Information Protocol (RIP)|RIP]]or [[Open Shortest Path First (OSPF)|OSPF]]). From this completely separate protocol, B learns how to reach other nodes inside the domain, as shown in the top right table. For example, to reach router E, B needs to send packets toward router C. Finally, in the bottom table, B puts the whole picture together, combining the information about external prefixes learned from iBGP with the information about interior routes to the border routers learned from the IGP. Thus, if a prefix like 18.0/16 is reachable via border router E, and the best interior path to E is via C, then it follows that any packet destined for 18.0/16 should be forwarded toward C. In this way, any router in the AS can build up a complete routing table for any prefix that is reachable via some border router of the AS

![[Internal BGP (iBGP)/2.png|400]]
