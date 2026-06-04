---
title: "IPv4 - Subnetting"
created: 2019-11-20T15:31:51.316-06:00
modified: 2019-11-20T16:51:24.424-06:00
parent: "[[IPv4 - Subnet & Supernet]]"
children: []
---
read [[Forwarding|Forwarding IP Packets - Between Networks]] before this

<strong>subnetting</strong> - reduces total number of network numbers that are assigned

when a host wants to send a packet to a certain IP address, first perform bitwise AND between its own subnet mask and the destination IP address:
- if equal, destination host is on same subnet (physical network) and packet can be delivered directly over the subnet
- if not equal, packet is sent to a default router

![[IPv4 - Subnetting/6.png|497x250]]
### Example Subnetting

consider figure 3.21, where node H1 is sending to node H2
- H1 ANDs its subnet mask (255.255.255.128) with the address of H2 (128.96.34.139) resulting 128.96.34.128
- 128.96.34.128 is not equal to H1's subnet number 128.96.34.0
- H1 sends packet to router R1
- R1 checks forwarding table (table 3.7) which contains tuples of \<<em>SubnetNumber</em>, <em>SubnetMask</em>, <em>NextHop</em>\>
- to find right entry in <em>forwarding table</em>, the router ANDs the packet's destination address with the <em>SubnetMask </em>for each tuple entry and compares result to <em>SubnetNumber</em>

- 
	- if entry found, it forwards packet to the <em>NextHop</em> indicated in entry
	- if entry not found, a default route would usually be included in the <em>forwarding table</em>

- in our scenario, R1 found a matching entry and would forward the datagram to H2 using <em>interface 1</em>

<em>![[IPv4 - Subnetting/7.png|450]]![[IPv4 - Subnetting/8.png|301]]</em>
