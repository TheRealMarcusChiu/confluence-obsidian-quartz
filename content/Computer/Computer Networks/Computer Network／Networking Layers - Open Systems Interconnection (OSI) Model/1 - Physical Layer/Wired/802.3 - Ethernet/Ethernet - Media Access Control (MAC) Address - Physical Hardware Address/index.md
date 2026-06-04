---
title: "Ethernet - Media Access Control (MAC) Address - Physical Hardware Address"
created: 2019-11-09T11:54:13.459-06:00
modified: 2021-08-14T11:29:47.184-05:00
parent: "[[802.3 - Ethernet]]"
children: []
---
[[802.3 - Ethernet|Ethernet]]'s<strong> Media Access Control (MAC) Address</strong> is a type of [[2 - Data Link Layer|Data Link]] Control (DLC) address
# <strong>MAC Address</strong>
- is a 48-bit address
- types of MAC addresses:
	- unicast address - a unique MAC address
	- broadcast address - all 1s
	- multicast address - first bit set to 1 but is not broadcast address

# <strong>Ethernet Adaptors</strong>
- ethernet adaptor in [[NIC Modes (Normal／Promiscuous／Monitor Mode)|normal mode]] accepts:
	- frames addressed to its own address
	- frames addressed to the broadcast address
	- frames addressed to a multicast address, and if it has been instructed to listen to that address
- ethernet adaptor in [[NIC Modes (Normal／Promiscuous／Monitor Mode)|promiscuous mode]] accepts all frames
