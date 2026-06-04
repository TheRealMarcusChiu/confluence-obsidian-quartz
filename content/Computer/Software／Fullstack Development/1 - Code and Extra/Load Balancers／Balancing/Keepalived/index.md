---
title: "Keepalived"
created: 2025-08-27T13:17:56.215-05:00
modified: 2025-08-27T13:50:38.435-05:00
parent: "[[Load Balancers／Balancing]]"
children: []
---
###### Keepalived
````excerpt
- provides frameworks for both load balancing and high availability
	- the load balancing framework relies on the well-known and widely used [[Linux Virtual Server (LVS)|LVS]]/[[IP Virtual Server (IPVS)|IPVS]] kernel module, which provides Layer 4 load balancing. Implements a set of health checkers to dynamically and adaptively maintain and manage load balanced server pools according to their health.
	- the high availability framework is achieved by the [[Virtual Router Redundancy Protocol (VRRP)]]. VRRP is a fundamental brick for router failover. In addition, keepalived implements a set of hooks to the VRRP finite state machine providing low-level and high-speed protocol interactions
- each Keepalived framework can be used independently or together to provide resilient infrastructures
- in this context, load balancer may also be referred to as a director or an LVS router
- in short, Keepalived provides two main functions:
	- health checking for LVS systems
	- implementation of the VRRPv2 stack to handle load balancer failover
````
^excerpt

# Resources
- [https://keepalived.readthedocs.io/en/latest/introduction.html](https://keepalived.readthedocs.io/en/latest/introduction.html)
