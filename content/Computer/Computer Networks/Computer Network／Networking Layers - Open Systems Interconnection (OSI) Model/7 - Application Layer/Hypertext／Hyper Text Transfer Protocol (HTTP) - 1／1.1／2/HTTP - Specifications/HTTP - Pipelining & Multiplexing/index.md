---
title: "HTTP - Pipelining & Multiplexing"
created: 2019-08-23T21:37:42.470-05:00
modified: 2019-08-23T21:41:14.644-05:00
parent: "[[HTTP - Specifications]]"
children: []
---
### <strong>HTTP/1.1 Without Pipelining</strong>

Each HTTP request over the TCP connection must be responded to before the next request can be made.
### <strong>HTTP/1.1 With Pipelining</strong>

Each HTTP request over the TCP connection may be made immediately without waiting for the previous request's response to return. The responses will come back in the same order.
### <strong>HTTP/2 Multiplexing</strong>

Each HTTP request over the TCP connection may be made immediately without waiting for the previous response to come back. The responses may come back in any order. Also allows the requests responses to be split into chunks and be returned in an intermingled fashion so avoiding <em>head of line blocking</em>
