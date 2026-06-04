---
title: "Distributed Computing Environment ／ Remote Procedure Calls (DCE／RPC)"
created: 2019-09-10T19:21:19.570-05:00
modified: 2023-11-16T17:17:35.190-06:00
parent: "[[4 - Transport Layer]]"
children: []
---
###### Distributed Computing Environment / Remote Procedure Calls (DCE/RPC)
````excerpt
- is the [[Remote Procedure Call (RPC) - network protocol|remote procedure call]] system developed for the Distributed Computing Environment (DCE)
- this system allows programmers to write distributed software as if it were all working on the same computer, without having to worry about the underlying network code
````
^excerpt

# Protocol Dependencies

DCE/RPC can run atop a number of protocols, including:
- [[Transmission Control Protocol (TCP)|TCP]]: Typically, connection-oriented DCE/RPC uses TCP as its transport protocol. The well-known TCP port for DCE/RPC EPMAP is 135. This transport is called [ncacn_ip_tcp](https://wiki.wireshark.org/ncacn_ip_tcp).
- [[Universal／User Datagram Protocol (UDP)|UDP]]: Typically, connectionless DCE/RPC uses UDP as its transport protocol. The well-known UDP port for DCE/RPC EPMAP is 135. This transport is called [ncadg_ip_udp](https://wiki.wireshark.org/ncadg_ip_udp).
- [[Server Message Block Protocol (SMB)|SMB]]: connection-oriented DCE/RPC can also use authenticated named pipes on top of SMB as its transport protocol. This transport is called [ncacn_np](https://wiki.wireshark.org/ncacn_np).
- [[Server Message Block Protocol (SMB)|SMB2]]: connection-oriented DCE/RPC can also use authenticated named pipes on top of SMB2 as its transport protocol. This transport is called [ncacn_np](https://wiki.wireshark.org/ncacn_np).
