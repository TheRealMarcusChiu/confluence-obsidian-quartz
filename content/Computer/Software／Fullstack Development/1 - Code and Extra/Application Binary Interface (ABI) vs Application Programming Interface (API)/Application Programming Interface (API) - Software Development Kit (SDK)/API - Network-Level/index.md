---
title: "API - Network-Level"
created: 2019-12-21T12:15:54.639-06:00
modified: 2022-02-14T21:14:48.019-06:00
parent: "[[Application Programming Interface (API) - Software Development Kit (SDK)]]"
children: []
---
````excerpt
<strong>[[API - Network-Level|Network-Level API]]</strong> (synonymous to [[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model|OSI]]'s [[7 - Application Layer|application-layer protocols]]) refers to any network protocol used to exchange data between participating parties. These are used to build Application-Level APIs and usually follows an [[API Design Patterns (API-DP)|API Design Pattern]]
````
^excerpt

see similar page: [[JavaScript - Native - V8 Engine - Web／Browser APIs|Web/Browser APIs]] which includes NON-network-level APIs (e.g. [[JavaScript - Web Audio API|Web Audio]], [[JavaScript - Web Components|Web Components]], etc)
# Network-Level APIs

```merge-table
{
  "rows": [
    [
      {
        "content": "Network-Level APIs",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Purpose",
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
        "content": "[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP 1.X]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "[[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|bi-directional]] communication",
      "- a network protocol\n- distinguishing features:\n\t- bi-directional communication\n\t- not full-duplex"
    ],
    [
      {
        "content": "[[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]][[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|2.0]]",
        "bg": "#F4F5F7"
      },
      "[[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|full-duplex]] communication",
      "- a network protocol\n- distinguishing features:\n\t- full-duplex (it would be possible for the client to communicate to the server by making another request on the same TCP connection, thanks to HTTP/2 multiplexing)\n\t- no <em>unsolicited</em> communication from server to client, HTTP/2 can \"push\" a resource to the client ONLY in the context of a previous request"
    ],
    [
      {
        "content": "[[WebSockets]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|full-duplex]] communication\n- [[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|unsolicited]] communication from server to client (after initialization)",
      "- a network protocol for full-duplex communication between server and client\n- distinguishing features:\n\t- full-duplex\n\t- uses [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] for initializing and a single [[Transmission Control Protocol (TCP)|TCP]] connection for communication\n\t- allows unsolicited communication from server to client (after HTTP initialize)"
    ],
    [
      {
        "content": "[[Reactive Streams]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|full-duplex]] communication\n- [[Uni-Directional／Unidirectional - Bi-Directional／Bidirectional - Half-Duplex - Full-Duplex - Unsolicited|unsolicited]] communication from server to client (after initialization)",
      "- a network protocol for full-duplex communication between server and client (with framing, session resumption, and backpressure built-in that works over the network)\n- is transport agnostic (i.e. RSocket can be run over [[WebSockets]], [[Transmission Control Protocol (TCP)|TCP]], [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP/2]], and Aeron)\n- intended for use in distributed/microservice applications\n- it works in a browser equally as well as on a server. In fact, a web browser can serve traffic to backend microservices"
    ],
    [
      {
        "content": "[[Web Real-Time Communication (WebRTC)|WebRTC]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- peer-to-peer/real-time communication",
      "- a bundle of network protocol standards for real-time/peer-to-peer communication (natively supported in most browsers) - faster than traditional peer-server-peer communication"
    ],
    [
      {
        "content": "[[Remote Procedure Call (RPC) - network protocol|RPC (protocol)]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "",
      "- a network protocol"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Network-Level API Comparisons
- [WebSockets vs HTTP](https://www.pubnub.com/blog/2015-01-05-websockets-vs-rest-api-understanding-the-difference/)
	- both run on top of TCP, WebSockets use HTTP for initial connection setup
	- both allows persistent connections (HTTP Keep Alive)
	- however, only WebSockets supports unsolicited communication from server to client (after HTTP initialize)
- WebSockets vs RSocket
	- Websockets do not provide application-level backpressure, only TCP-based byte-level backpressure
	- Websockets also only provide framing they do not provide application semantics. It is up to the developer to build out an application protocol for interacting with the websocket
	- RSocket provides framing, application semantics, application-level backpressure, and it is not tied to a specific transport
- [RSocket vs gRPC](https://medium.com/netifi/differences-between-grpc-and-rsocket-e736c954e60)
	- RSocket works in a web browser via Websockets, while gRPC requires additional code to be generated and deployed in order to work in browser
	- RSocket has application level flow control while gRPC relies on HTTP/2 byte-based flow control
