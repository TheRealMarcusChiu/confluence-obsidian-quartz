---
title: "Universal／User Datagram Protocol (UDP)"
created: 2019-03-16T21:44:12.776-05:00
modified: 2025-05-18T18:47:31.993-05:00
parent: "[[4 - Transport Layer]]"
children:
  - "[[UDP - Header Format]]"
---
###### Universal/User Datagram Protocol (UDP)
````excerpt
- is a type of [[Computer Network／Networking Communication Protocols|network protocol]] that operates at the [[4 - Transport Layer|transport layer]]
````
^excerpt

[https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970](https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970)
- no ordering of packets received
- no 3-way TCP handshake (SYN, SYN-ACK, ACK)
- no error correction (i.e. unreliable)
- no flow-control
- faster than [[Transmission Control Protocol (TCP)|TCP]]
- connectionless oriented
- supports [[Ports - Sockets - An Application Demultiplexer|demultiplexing]] (i.e. port numbers)
- often used for multimedia and for services based on request/reply schemes ([[Domain Name System／Service (DNS)|DNS]], NIS, [[Network File System (NFS)|NFS]], [[Remote Procedure Call (RPC) - network protocol|RPC]], etc)

![[Universal／User Datagram Protocol (UDP)/UDP Queue.png|400]]
# UDP - Header Format
[[UDP - Header Format]]
# Protocols that use UDP as a [[4 - Transport Layer|Transport Layer Protocol]]

often used for multimedia and for services based on request/reply schemes ([[Domain Name System／Service (DNS)|DNS]], NIS, [[Network File System (NFS)|NFS]], [[Remote Procedure Call (RPC) - network protocol|RPC]], etc)
- [[Domain Name System／Service (DNS)|DNS]]
- [[Bootstrap Protocol (BootP)|BOOTP]], [[Dynamic Host Configuration Protocol (DHCP)|DHCP]]
- [[Trivial File Transfer Protocol (TFTP)]]
- [[Real-Time Streaming Protocol (RTSP)]]
- [[Open Shortest Path First (OSPF)|OSPF]]
- [[Simple Network Management Protocol (SNMP)|SNMP]]
- [[Routing Information Protocol (RIP)|RIP]]
- VOIP
- [[Network Time Protocol (NTP)]]
- [[Network News Transfer Protocol (NNTP)]]
