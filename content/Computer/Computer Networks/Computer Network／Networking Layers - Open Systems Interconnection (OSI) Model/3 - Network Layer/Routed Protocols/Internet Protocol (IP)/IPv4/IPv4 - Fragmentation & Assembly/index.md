---
title: "IPv4 - Fragmentation & Assembly"
created: 2019-09-03T13:50:53.591-05:00
modified: 2019-09-03T13:52:09.230-05:00
parent: "[[IPv4]]"
children: []
---
read<strong>: [[IPv4 - Packet Header Format]]</strong>
### Fragmentation and Reassembly
- <strong>MTU</strong>
	- maximum transmission unit
	- is the largest IP datagram that it can carry in a frame
- fragmentation occurs in a router when it wants to forward a datagram (of larger MTU) through a network (of smaller MTU)
- these fragments would carry the same identifier in the <em>Ident</em> field
- if one of the fragments did not arrive, all other fragments are discarded, IP does not attempt to recover those missing fragments
- when possible, avoid <em>fragmentation</em> via "path MTU discovery"
- <strong>path MTU discovery</strong> - a process by which fragmentation is avoided by sending packets that are small enough to traverse the link with the smallest MTU in the path from sender to receiver

Consider what happens when host H5 (figure 3.17) sends a datagram to host H8 in the example internet shown in Figure 3.14. Assuming that the MTU is 1500 bytes for the two Ethernets and the 802.11 network, and 532 bytes for the point-to-point network, then a 1420-byte datagram (20-byte IP header plus 1400 bytes of data) sent from H5 makes it across the 802.11 network and the first Ethernet without fragmentation but must be fragmented into three datagrams at router R2. These three fragments are then forwarded by router R3 across the second Ethernet to the destination host.

![[IPv4 - Fragmentation & Assembly/2.png|800]]![[IPv4 - Fragmentation & Assembly/3.png|350]]
