---
title: "Network Basic Input／Output System (NetBIOS)"
created: 2019-09-10T19:11:34.741-05:00
modified: 2023-11-16T17:02:40.636-06:00
parent: "[[5 - Session Layer]]"
children: []
---
###### Network Basic Input/Output System (NetBIOS)
````excerpt
- provides services related to the [[5 - Session Layer|session layer]] of the [[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model|OSI model]] allowing applications on separate computers to communicate over a local area network
- As strictly an API, <strong>NetBIOS</strong> is <font style="color: rgb(255,0,0);">NOT</font> a [[Computer Network／Networking Communication Protocols|networking protocol]] (neither [[3 - Network Layer|network layer]] nor [[4 - Transport Layer|transport layer]])
````
^excerpt

# Services

NetBIOS provides 3 distinct services:
- <strong>Name Service (NetBIOS-NS)</strong> - for name registration and resolution
- <strong>Datagram Distribution Service (NetBIOS-DGM)</strong> - for connectionless communication
- <strong>Session Service (NetBIOS-SSN)</strong> - for connection-oriented communication
