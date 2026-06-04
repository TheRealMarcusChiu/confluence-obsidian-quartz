---
title: "Forwarding"
created: 2019-03-17T00:43:49.916-05:00
modified: 2019-11-20T16:29:45.292-06:00
parent: "[[Routing Tables - Forwarding Tables]]"
children: []
---
<strong>forwarding</strong> is the process of taking an [[Internet Protocol (IP)|IP]] packet from input and sending it out on the appropriate output
## <strong>Forwarding IP Packets - Between Physical Networks</strong>

> [!expand]- Click here to expand...
> when a node receives/sends an IP packet, it checks whether the [[IPv4 - Address Classes (now obsolete)|network prefixes]] of the IP packet's destination address matches any of the [[IPv4 - Address Classes (now obsolete)|network prefixes]] of the node's [[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|network-interface(s)]]:
> - if same, then the destination lies on the same physical network as that network-interface. Therefore the packet can be directly delivered over that network (e.g. [[802.3 - Ethernet|Ethernet]], [[802.11 - WiFi／Wi-Fi|WiFi]], [[Point-to-Point Protocol (PPP)|PPP]], etc).
> - if different, then the node sends the packet to a router. if multiple routers, choose "best" or "default" router
>
> ![[Forwarding/1.png]]![[Forwarding/2.png]]
> - for example, suppose node H5 wants to send a packet to node H8. Since these nodes are on different physical networks, they have different network numbers, so H5 deduces that it needs to send the packet to a router. R1 is the only choice—the default router—so H5 sends the datagram over the wireless network to R1. Similarly, R1 knows that it cannot deliver a datagram directly to H8 because neither of R1’s interfaces is on the same network as H8. Suppose R1’s default router is R2; R1 then sends the datagram to R2 over the Ethernet. Assuming R2 has the forwarding table shown in Table 3.5, it looks up H8’s network number (network 4) and forwards the datagram over the [[Point-to-Point Protocol (PPP)|point-to-point]] network to R3. Finally, R3, since it is on the same network as H8, forwards the datagram directly to H8.
>
> ### Forwarding with [[IPv4 - Subnet & Supernet|Supernetting / CDIR addresses]]
> - it is sometimes possible to have prefixes in the forwarding table that “overlap,” in the sense that some addresses may match more than one prefix. For example, we might find both 171.69 (a 16-bit prefix) and 171.69.10 (a 24-bit prefix) in the forwarding table of a single router. In this case, a packet destined to, say, 171.69.10.5 clearly matches both prefixes. The rule in this case is based on the principle of “<strong>longest match</strong>”; that is, the packet matches the longest prefix, which would be 171.69.10 in this example. On the other hand, a packet destined to 171.69.20.5 would match 171.69 and not 171.69.10, and in the absence of any other matching entry in the routing table 171.69 would be the longest match
## <strong>Forwarding IP Packets - Within </strong><strong>Physical </strong><strong>Network (ARP)</strong>

> [!expand]- Click here to expand...
> - previously, we have talked about how to get [[Internet Protocol (IP)|IP]] [[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)|datagrams]] to the right physical network
> - now we will talk about how to get a datagram to the right host or router on that network
> - problem: IP datagrams contain [[IPv4 - Address|IP addresses]], but physical interface requires 48-bit [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC address]] for transmission
> - solution:
> 	- routers maintain a table of \<IP,MAC\> pairs
> 	- host node broadcasts an [[Address Resolution Protocol (ARP) - Reverse ARP (RARP)|Address Resolution Protocol (ARP)]] query to obtain the corresponding [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC address]]
