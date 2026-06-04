---
title: "4 - Transport Layer"
created: 2019-03-16T21:43:26.849-05:00
modified: 2023-11-16T17:06:50.464-06:00
parent: "[[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model]]"
children:
  - "[[Distributed Computing Environment ／ Remote Procedure Calls (DCE／RPC)]]"
  - "[[Quick UDP Internet Connections (QUIC)]]"
  - "[[Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)]]"
  - "[[Remote Procedure Call (RPC) - network protocol]]"
  - "[[Stream Control Transmission Protocol (SCTP)]]"
  - "[[Transmission Control Protocol (TCP)]]"
  - "[[Universal／User Datagram Protocol (UDP)]]"
---
###### Transport Layer
````excerpt
- establishes a reliable communication stream between a pair of systems across an unreliable network by putting sequence numbers in packets, holding packets at the destination until they can be delivered in order, and retransmitting lost packets
````
^excerpt

# The Need for Transport Layer

underlying the transport layer is the [[3 - Network Layer|network layer]] which has limitations:
- drop messages
- reorder messages
- deliver duplicate copies of a message
- limit the message to a finite size
- deliver messages after an arbitrarily long delay

the transport layer can provide (but is not necessary):
- guarantees message delivery
- delivers messages in the same order they are sent
- delivers at most one copy of each message
- supports arbitrarily large messages
- supports synchronization between the sender and the receiver
- allows the receiver to apply flow control to the sender
- <strong>[[Ports - Sockets - An Application Demultiplexer|demultiplexing]]</strong> - supports multiple application processes on each host (port numbers)

# Types of Transport/End-to-End Services/Protocols
- <strong>simple asynchronous demultiplexing service</strong>
	- [[Universal／User Datagram Protocol (UDP)|User Datagram Protocol (UDP)]]
	- [[Quick UDP Internet Connections (QUIC)]]
- <strong>reliable byte-stream service</strong>
	- [[Transmission Control Protocol (TCP)]]
	- [[Stream Control Transmission Protocol (SCTP)]]
- <strong>request/reply service</strong>
	- [[Remote Procedure Call (RPC) - network protocol]]
	- [[Distributed Computing Environment ／ Remote Procedure Calls (DCE／RPC)|Distributed Computing Environment / Remote Procedure Calls (DCE/RPC)]]
- <strong>real-time service</strong>
	- [[Real-Time Transport Protocol (RTP) & Real-Time Transport Control Protocol (RTCP)]]
