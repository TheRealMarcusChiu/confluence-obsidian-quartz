---
title: "Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model"
created: 2019-04-03T16:33:26.974-05:00
modified: 2024-06-27T13:09:30.185-05:00
parent: "[[Computer Networks]]"
children:
  - "[[1 - Physical Layer]]"
  - "[[2 - Data Link Layer]]"
  - "[[2.5 - Logical Link Control (LLC) - Data Link Sublayer]]"
  - "[[2／3 - Redundancy Protocols]]"
  - "[[3 - Network Layer]]"
  - "[[4 - Transport Layer]]"
  - "[[5 - Session Layer]]"
  - "[[6 - Presentation Layer]]"
  - "[[7 - Application Layer]]"
  - "[[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)]]"
  - "[[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited]]"
  - "[[？ - Mixed／Other Layers]]"
---
###### Open Systems Interconnection (OSI) Model
````excerpt
- is a model that describes seven layers that computer systems use to communicate over a network
- it was the first standard model for network communications, adopted by all major computer and telecommunication companies in the early 1980s
````
^excerpt

# Network Layers

```merge-table
{
  "rows": [
    [
      {
        "content": "Layer",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)|Packets - Protocol Data Unit (PDU)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[1 - Physical Layer]]",
        "bg": "#F4F5F7"
      },
      "bits",
      "![[1 - Physical Layer#^excerpt]]"
    ],
    [
      {
        "content": "[[2 - Data Link Layer]]",
        "bg": "#F4F5F7"
      },
      "frames",
      "![[2 - Data Link Layer#^excerpt]]"
    ],
    [
      {
        "content": "[[3 - Network Layer]]",
        "bg": "#F4F5F7"
      },
      "datagrams\n- [[Internet Protocol (IP)|IP]] packets",
      "![[3 - Network Layer#^excerpt]]"
    ],
    [
      {
        "content": "[[4 - Transport Layer]]",
        "bg": "#F4F5F7"
      },
      "segments\n- [[Transmission Control Protocol (TCP)|TCP]] packets\n- [[Universal／User Datagram Protocol (UDP)|UDP]] datagrams",
      "![[4 - Transport Layer#^excerpt]]"
    ],
    [
      {
        "content": "[[5 - Session Layer]]",
        "bg": "#F4F5F7"
      },
      "data\n- [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|SSL/TLS]] records",
      "![[5 - Session Layer#^excerpt]]"
    ],
    [
      {
        "content": "[[6 - Presentation Layer]]",
        "bg": "#F4F5F7"
      },
      "data",
      "![[6 - Presentation Layer#^excerpt]]"
    ],
    [
      {
        "content": "[[7 - Application Layer]]",
        "bg": "#F4F5F7"
      },
      "data",
      "![[7 - Application Layer#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Inter-Layer Communication
- [[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|Uni-Directional/Unidirectional - Bi-Directional/Bidirectional - Half-Duplex - Full-Duplex - Unsolicited]]
- [[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)]]

# Network Layer - Diagram
![[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model/4.png]]
# Network Layer - Protocols Diagram
![[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model/1.jpg]]![[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model/2.jpg|333x250]]

![[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model/3.jpg|400x250]]![[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model/4.png]]
