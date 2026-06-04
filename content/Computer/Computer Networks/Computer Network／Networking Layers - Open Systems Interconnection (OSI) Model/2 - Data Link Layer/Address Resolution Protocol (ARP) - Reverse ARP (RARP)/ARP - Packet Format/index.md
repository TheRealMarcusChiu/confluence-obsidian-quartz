---
title: "ARP - Packet Format"
created: 2019-11-17T22:50:15.515-06:00
modified: 2019-12-03T10:00:29.729-06:00
parent: "[[Address Resolution Protocol (ARP) - Reverse ARP (RARP)]]"
children: []
---
![[ARP - Packet Format/3.png|500]]
- <strong>HardwareType</strong> - specifies the type of physical network (ethernet, wifi, etc)
- <strong>ProtocolType</strong> - specifies the higher-layer protocol (IP)
- <strong>HLen</strong> - hardware address length, specifies length of the link-layer address
- <strong>PLen</strong> - protocol address length, specifies length of the higher-layer protocol address
- <strong>Operation</strong> - specifies whether this is a request or a response
- <strong>Source</strong> and <strong>Target</strong> hardware ([[802.3 - Ethernet|ethernet]]) and protocol ([[Internet Protocol (IP)|IP]]) addresses:
	- length of addresses are specified in the Hlen and Plen fields
	- <strong>SourceHardwareAddr</strong> (ethernet) - 6 bytes
	- <strong>SourceProtocolAddr</strong> (ip) - 4 bytes
	- <strong>TargetHardwareAddr</strong> (ethernet) - 6 bytes
	- <strong>TargetProtocolAddr</strong> (ip) - 4 bytes
