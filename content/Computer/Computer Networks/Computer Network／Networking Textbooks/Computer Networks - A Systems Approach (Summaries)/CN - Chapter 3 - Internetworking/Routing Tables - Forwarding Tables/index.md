---
title: "Routing Tables - Forwarding Tables"
created: 2019-03-17T00:42:44.863-05:00
modified: 2019-11-17T22:45:52.269-06:00
parent: "[[CN - Chapter 3 - Internetworking]]"
children:
  - "[[Forwarding]]"
  - "[[Routing]]"
---
### Routing vs Forwarding

both routing and forwarding together helps determine how an [[Internet Protocol (IP)|IP]] packet is sent from source to destination
- <strong>[[Routing|routing]]</strong> - the process of building up the <em>routing-tables</em> to allow correct <em>forwarding</em>
- <strong>[[Forwarding|forwarding]]</strong> - the process of taking a packet from input and sending it out on the appropriate output

### Routing Tables vs Forwarding Tables

<em>forwarding-table</em> needs to be structured to optimize the process of looking up an address when forwarding a packet, while the <em>routing-table</em> needs to be optimized for the purpose of calculating changes in topology
- <strong>routing table</strong> - a table that is built up by the routing algorithms as a precursor to building the forwarding table. It generally contains mappings from network prefixes to next hops. It may also contain information about how this information was learned, so that the router will be able to decide when it should discard some information
	- routing tables itself can have 2 types:
		- unicast routing table - for unicast forwarding
		- multicast routing table - for multicast forwarding
- <strong>forwarding table</strong> - is used when a packet is being forwarded. a row in the forwarding table contains the mapping from a network prefix to an outgoing interface and some MAC information, such as the Ethernet address of the next hop.

![[Routing Tables - Forwarding Tables/routing-table-example.png|301]]![[Routing Tables - Forwarding Tables/forwarding-table-example.png|301]]
