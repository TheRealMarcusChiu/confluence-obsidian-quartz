---
title: "IPv4 - Supernetting (CIDR)"
created: 2019-11-20T15:32:31.263-06:00
modified: 2019-11-20T17:52:48.568-06:00
parent: "[[IPv4 - Subnet & Supernet]]"
children: []
---
- <strong>supernetting</strong> also called <strong>Classless Addressing </strong>or <strong>Classless Inter-Domain Routing (CIDR)</strong>
- main goal of CIDR: to balance the desire to minimize the number of routes that a router needs to know against the need to hand out addresses efficiently
- How CIDR works:
	- suppose one needs 8 class C address
	- instead of assigning 8 addresses at random, we can hand out a block of contiguous class C addresses such as 128.112.128/24 through 128.112.135/24
	- this results in a common 21 bit [[IPv4 - Address Classes (now obsolete)|network prefix]]: 128.112.128/21
	- and thus, we get both the high address efficiency of handing out addresses in chunks smaller than a [[IPv4 - Address Classes (now obsolete)|class B network]], and a single network prefix that can be used in forwarding tables
- CIDR requires a new type of notation to represent network numbers, or prefixes as they are known, because the prefixes can be of any length. The convention is to place a /X after the prefix, where X is the prefix length in bits. So, for the example above, the 21-bit prefix for all the networks 128.112.128/24 through 128.112.135/24 is represented as 28.112.128/21.
- today, with CIDR being the norm, it is more common to hear people talk about “slash 24” prefixes than class C networks
- representing a network address in this way is similar to the ⟨subnet-mask, value⟩ approach used in <strong>[[IPv4 - Subnetting|subnetting]]</strong>, as long as masks consist of contiguous bits starting from the most significant bit (which in practice is almost always the case)

Now imagine using CIDR in a Internet Service Provider (ISP) network, whose primary job is to provide Internet connectivity to a large number of corporations and campuses (customers)

![[IPv4 - Supernetting (CIDR)/9.png|500]]
