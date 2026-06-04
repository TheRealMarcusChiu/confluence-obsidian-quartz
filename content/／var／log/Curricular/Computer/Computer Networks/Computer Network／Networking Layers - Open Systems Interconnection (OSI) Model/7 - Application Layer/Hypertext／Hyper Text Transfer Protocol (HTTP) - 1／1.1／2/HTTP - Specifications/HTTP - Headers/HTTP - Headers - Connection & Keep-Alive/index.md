---
title: "HTTP - Headers - Connection & Keep-Alive"
created: 2019-12-21T15:54:51.498-06:00
modified: 2020-05-13T15:06:33.871-05:00
parent: "[[HTTP - Headers]]"
children: []
---
- <strong><code>Connection</code></strong> general header controls whether or not the network connection stays open after the current transaction finishes
- <code><strong>Keep-Alive</strong></code> general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests

<strong><code>Connection</code></strong> and <strong><code>Keep-Alive</code></strong> are ignored in [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP/2]]; connection management is handled by other mechanisms there
### Connection Header
<span style="white-space: pre-wrap"><code>Connection: keep-alive</code><br><code>Connection: close</code></span>

### Keep-Alive Header

The <strong><code>Connection</code></strong> header needs to be set to "keep-alive" for this header to have any meaning
<span style="white-space: pre-wrap"><code>Keep-Alive: parameters</code></span>

parameters is a comma-separated list of parameters, each consisting of an identifier and a value separated by the equal sign (<code>'='</code>). The following identifiers are possible:
- <code>timeout</code>: indicating the <em>minimum </em>amount of time an idle connection has to be kept opened (in seconds). Note that timeouts longer than the TCP timeout may be ignored if no keep-alive TCP message is set at the transport level.
- <code>max</code>: indicating the maximum number of requests that can be sent on this connection before closing it. Unless <code>0</code>, this value is ignored for non-pipelined connections as another request will be sent in the next response. An HTTP pipeline can use it to limit the pipelining.

### Example HTTP Response
```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```
