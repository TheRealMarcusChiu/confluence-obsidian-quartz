---
title: "Distance-Vector Multicast Routing Protocol (DVMRP)"
created: 2019-11-17T22:25:02.078-06:00
modified: 2019-12-03T14:43:22.695-06:00
parent: "[[Multicast Routing Protocols]]"
children: []
---
### Distance-Vector Multicast Routing Protocol (DVMRP)
- replaced by [[Protocol Independent Multicasting (PIM)|PIM]]
- often described as <em>flood-and-prune</em> protocol
- an extension of [Distance-Vector](http://confluence.marcuschiu.com/display/NOT/Distant+Vector) where each [[Router|router]] maintains a table of (Destination, Cost, NextHop) tuples, and exchanges a list of (Destination, Cost) pairs with it directly connected neighbors
- extending Distance-Vector to support multicast is a 2-stage process:
	1. create a broadcast mechanism that allows packet to be forwarded to all the networks within the internet
	2. refine this mechanism to prune back networks that do not have hosts belonging to the multicast group
