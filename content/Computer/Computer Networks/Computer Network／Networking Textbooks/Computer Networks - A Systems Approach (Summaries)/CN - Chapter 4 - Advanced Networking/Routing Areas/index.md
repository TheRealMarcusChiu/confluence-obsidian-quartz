---
title: "Routing Areas"
created: 2019-03-17T01:02:22.255-05:00
modified: 2019-03-17T01:03:49.834-05:00
parent: "[[CN - Chapter 4 - Advanced Networking]]"
children: []
---
- <em>routing areas</em> allows [[Autonomous System (AS) - Domain|Autonomous Systems/domains]] to grow larger without need of complex [[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)|inter-domain routing protocols]] (intra-domain "simpler")
- <strong>routing area</strong>
	- are subdomains/partitions of a domain/Autonomous System
	- [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|intra-domain routing protocols]] stays within each <em>routing area</em>
- <strong>backbone area</strong> - a special <em>routing area</em> also known as <em>area 0</em>
- <strong>area border router (ABR)</strong>
	- a router that is a member of both the backbone area and non-backbone area
	- ABRs are distinct to routers at the edge of an AS, which are referred to as AS border routers

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Routing Areas/1.png]]

### Problem 1
- <strong>problem</strong>: how does a router in one area determine the right next hop to another area
- <strong>solution</strong>: to forward packet from one non-backbone area to another, there are three parts:
	- packet travels from source network to backbone area
	- then crosses the backbone area
	- then travels from backbone area to destination network
- to make this work
	- ABRs summarizes routing information of an area and make it available in their advertisements to other areas
	- example, R1 receives link-state advertisements from all the routers in area 1 and can thus determine the cost of reaching any network in area 1. When R1 sends link-state advertisements into area 0, it advertises the costs of reaching the networks in area 1 much as if all those networks were directly connected to R1. This enables all the area 0 routers to learn the cost to reach all networks in area 1. The area border routers then summarize this information and advertise it into the non-backbone areas. Thus, all routers learn how to reach all networks in the domain.

### Problem 2
- <strong>problem</strong>: dividing a domain into areas makes a tradeoff between scalability and optimality of routing. the use of <em>routing areas</em> forces all packets traveling in one ares to another to go through the <em>backbone area</em>
- <strong>solution</strong>: flexibly decide which routers go in <em>area 0</em>
	- <strong>virtual link</strong> - allows this to happen and helps improve optimality of routing
