---
title: "Multicast Source Discovery Protocol (MSDP)"
created: 2019-11-17T22:24:24.482-06:00
modified: 2019-11-17T22:24:57.012-06:00
parent: "[[Multicast Routing Protocols]]"
children: []
---
### Multicast Source Discovery Protocol (MSDP)
- used for <em>inter-domain (i.e. between [[Autonomous System (AS) - Domain|autonomous systems]])</em> multicasting
- is an extension of [[Protocol Independent Multicasting (PIM)|PIM]]-SM
- each rendezvous point RP in a domain connects with other RP(s) in a different domain via [TCP](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=328881)
- each RP periodically uses MSDP to broadcast Source Active messages to its peers
	- Source Active message contains:
		- IP address of the source
		- multicast group address
		- IP address of the originating RP
