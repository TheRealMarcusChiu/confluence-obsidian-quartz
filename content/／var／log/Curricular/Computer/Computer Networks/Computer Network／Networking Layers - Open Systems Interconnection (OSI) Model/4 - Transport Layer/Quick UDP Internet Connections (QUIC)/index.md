---
title: "Quick UDP Internet Connections (QUIC)"
created: 2019-03-16T21:46:51.737-05:00
modified: 2023-11-16T17:10:05.453-06:00
parent: "[[4 - Transport Layer]]"
children: []
---
###### Quick UDP Internet Connections (QUIC)
````excerpt
- is an experimental [[Computer Network／Networking Communication Protocols|network protocol]] that operates at the [[4 - Transport Layer|transport layer]]
- designed by Jim Roskind at Google
- initially implemented in 2012, and announced publicly in 2013 as experimentation broadened
- supports a set of multiplexed connections between two endpoints over [[Universal／User Datagram Protocol (UDP)|User Datagram Protocol (UDP)]]
- was designed to provide security protection equivalent to [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|TLS/SSL]], along with reduced connection and transport latency, and bandwidth estimation in each direction to avoid congestion
- main goal is to improve the perceived performance of connection-oriented web applications that are currently using [[Transmission Control Protocol (TCP)|TCP]]
- it also moves control of the congestion avoidance algorithms into the application space at both endpoints, rather than the kernel space, which it is claimed will allow these algorithms to improve more rapidly
````
^excerpt
