---
title: "Bridging - LAN Switches"
created: 2019-03-17T00:37:47.518-05:00
modified: 2019-12-03T10:52:44.179-06:00
parent: "[[CN - Chapter 3 - Internetworking]]"
children: []
---
- <strong>Bridges</strong> also called <strong>LAN switches</strong> is a class of <em>[[Network Switch|switch]]</em> that is used to forward packets between LANs
- <strong>extended LAN</strong> - a collection of LANs connected by one or more <em>bridges</em>
- simplest bridge accepts LAN frames on inputs and forward them out on all other outputs

### Learning Bridges
- maintain a forwarding table
- should the bridge receive a frame that is addressed to a host not currently in the table, it forwards the frame out on all the other ports
> [!list-indent-undo]
> > [!indent]
> > ![[Bridging - LAN Switches/1.png|600x250]]

### Spanning Tree Algorithm
- <strong>problem</strong> with <em>learning bridges</em> - the preceding strategy works just fine until the extended LAN has a loop in it, in which case it fails in a horrible way
> [!list-indent-undo]
> > [!indent]
> > ![[Bridging - LAN Switches/2.png]]
- <strong>solution</strong> - have the bridges run a distributed <em>spanning tree algorithm</em>
	- TODO explain implementation of algorithm

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Bridging - LAN Switches/3.png|575x250]]

### Broadcast and Multicast
- preceding discussion has focused on how bridges forward unicast frames from one LAN to another
- bridges must support broadcast and multicast
- <strong>broadcast</strong> is simple—each bridge forwards a frame with a destination broadcast address out on each active (selected) port other than the one on which the frame was received
- <strong>multicast</strong> can be implemented exactly like broadcast

### Limitations of Bridges
- <strong>problem</strong> with scale:
	- spanning tree scales linearly
	- forwards all broadcast frames
- <strong>solution</strong>
	- use Virtual LAN (VLAN) - allows a single extended LAN to be partitioned into several seemingly separate LANs
	- each LAN is assigned an identifier and packets can only travel from one segment/LAN to another if both segments/LAN have the same identifier

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Bridging - LAN Switches/4.png|556x250]]
