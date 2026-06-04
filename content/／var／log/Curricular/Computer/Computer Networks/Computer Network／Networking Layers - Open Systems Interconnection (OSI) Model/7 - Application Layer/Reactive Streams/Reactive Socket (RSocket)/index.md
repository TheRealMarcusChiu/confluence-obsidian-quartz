---
title: "Reactive Socket (RSocket)"
created: 2019-09-23T12:32:29.240-05:00
modified: 2022-02-14T21:38:24.104-06:00
parent: "[[Reactive Streams]]"
children: []
---
###### RSocket ([rsocket.io](http://rsocket.io/))
- initially developed by Netflix
- an implementation of [[Reactive Streams]] specification
- is an [[7 - Application Layer|application protocol]]/[[API - Network-Level|network-level API]] protocol with framing, session resumption, and backpressure built-in that works over the network
- is transport agnostic (i.e. RSocket can be run over [[WebSockets]], [[Transmission Control Protocol (TCP)|TCP]], [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP/2]], and Aeron)

# 4 Communication Models

> [!expand-ui]- FireAndForget
> This mode supports sending a request without sending a response message. It can be applied to scenarios, such as event tracking and log reporting. A response in these scenarios is not needed, and it does not matter if several requests are lost.
>
> ![[Reactive Socket (RSocket)/fire-and-forget.png]]

> [!expand-ui]- RequestResponse
> The requestor sends a request, and the responder receives the request and returns a response. HTTP typically uses the <code>RequestResponse</code> mode.
>
> ![[Reactive Socket (RSocket)/request-response.png]]

> [!expand-ui]- RequestStream
> The requester sends a request, and the responder returns N responses. Conventional MQ typically uses the <code>RequestStream</code> mode.
>
> ![[Reactive Socket (RSocket)/request-stream.png]]

> [!expand-ui]- RequestChannel
> Create a channel context so both parties can send messages. IM is a typical <code>RequstChannel</code> scenario.
>
> ![[Reactive Socket (RSocket)/request-channel.png]]
# Implementations
- [[Java - Spring Framework - Web - RSocket]]
