---
title: "SSL／TLS - Optimizing Handshaking"
created: 2019-12-21T14:11:08.468-06:00
modified: 2019-12-21T15:43:02.867-06:00
parent: "[[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)]]"
children: []
---
### TLS - Full Handshake

full handshake requires 3 round trips:
- 1 round trip for TCP 3-Way Handshake (note the last TCP ACK message is sent with the first TLS ClientHello message)
- 2 round trips for TLS cipher-suite choosing, certificate exchange, client-key-exchange, finished message

![[SSL／TLS - Optimizing Handshaking/2.png|500]]
### Optimizing TLS Handshakes

For Starting New Session
- <strong>False Start</strong> - send application data right after ChangeCipherSpec message is sent

![[SSL／TLS - Optimizing Handshaking/false-start.jpg|500]]

For Resuming A Session
- <strong>Abbreviated Handshake</strong> - [https://blogs.msdn.microsoft.com/huizhu/2009/12/17/ssl-tls-full-handshake-vs-abbreviated-handshake/](https://blogs.msdn.microsoft.com/huizhu/2009/12/17/ssl-tls-full-handshake-vs-abbreviated-handshake/)
	- uses 2 mechanisms:
		- session IDs -
		- session tickets -
	- the difference between TLS Full handshake and TLS Abbreviated Handshake is that abbreviated handshake is using 32 bit existing SSL session ID for Client Hello. If SSL server agreed on this session, server doesn't need to send the public key of certificate back to client. Also, client doesn't need to take time to validate the server cert as it is an existing session. If server doesn't agree on the SSL session, server needs to push a new session ID and then go to full handshake.
- <strong>Resumption and Pre-Shared Key (PSK)</strong> - [https://tools.ietf.org/html/rfc8446#section-2.2](https://tools.ietf.org/html/rfc8446#section-2.2)
	- introduced in TLS 1.3
	- deprecates <em>TLS Abbreviated Handshake</em>

The combination of both: False Start & Abbreviated Handshake allows us to deliver a consistent 1-RTT TLS handshake for new and returning visitors, plus computational savings for sessions that can be resumed based on previously negotiated session parameters. Make sure to take advantage of these optimizations in your deployments.

NOTE:
> One of the design goals for [TLS 1.3](https://hpbn.co/tls13-spec) is to reduce the latency overhead for setting up the secure connection: 1-RTT for new, and 0-RTT for resumed sessions!
### TODO Description

```merge-table
{
  "rows": [
    [
      {
        "content": "Session Resumption",
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
      "TLS 1.3",
      "###### Resumption and Pre-Shared Key (PSK)\n<span style=\"white-space: pre-wrap\"><code>   Although TLS PSKs can be established out of band, PSKs can also be</code><br><code>   established in a previous connection and then used to establish a new</code><br><code>   connection (\"session resumption\" or \"resuming\" with a PSK).  Once a</code><br><code>   handshake has completed, the server can send the client a PSK</code><br><code>   identity that corresponds to a unique key derived from the initial</code><br><code>   handshake (see [Section 4.6.1](https://tools.ietf.org/html/rfc8446#section-4.6.1)).  The client can then use that PSK</code><br><code>   identity in future handshakes to negotiate the use of the associated</code><br><code>   PSK.  If the server accepts the PSK, then the security context of the</code><br><code>   new connection is cryptographically tied to the original connection</code><br><code>   and the key derived from the initial handshake is used to bootstrap</code><br><code>   the cryptographic state instead of a full handshake.  In TLS 1.2 and</code><br><code>   below, this functionality was provided by \"session IDs\" and \"session</code><br><code>   tickets\" \\[[RFC5077](https://tools.ietf.org/html/rfc5077)\\].  Both mechanisms are obsoleted in TLS 1.3.</code><br><code></code><br><code>   PSKs can be used with (EC)DHE key exchange in order to provide</code><br><code>   forward secrecy in combination with shared keys, or can be used</code><br><code>   alone, at the cost of losing forward secrecy for the application</code><br><code>   data</code></span>"
    ],
    [
      "TLS 1.2",
      "###### \"session IDs\" and \"session tickets\"\n\nTwo mechanisms can be used to accomplish an abbreviated handshake:\n1. When the server sends the “Server Hello” message, it can include a <font style=\"color: rgb(184,15,40);\">session identifier</font>. The client should store it and present it in the “Client Hello” message of the next session. If the server finds the corresponding session in its cache and accepts to resume the session, it will send back the same session identifier and will continue with the abbreviated TLS handshake. Otherwise, it will issue a new session identifier and switch to a full handshake. This mechanism is detailed in [RFC 5246](https://tools.ietf.org/html/rfc5246). It is the most common mechanism because it exists since earlier versions of TLS.\n2. In the last exchange of a full TLS handshake, the server can include a “New Session Ticket” message (not represented in the handshake described in the picture) which will contain the complete session state (including the master secret negotiated between the client and the server and the cipher suite used). Therefore, this state is encrypted and integrity-protected by a key known only by the server. This opaque datum is known as a <font style=\"color: rgb(184,15,40);\">session ticket</font>. The details lie in [RFC 5077](https://tools.ietf.org/html/rfc5077) which supersedes [RFC 4507](https://tools.ietf.org/html/rfc4507).\n\nThe ticket mechanism is a TLS extension. The client can advertise its support by sending an empty “Session Ticket” extension in the “Client Hello” message. The server will answer with an empty “Session Ticket” extension in its “Server Hello” message if it supports it. If one of them does not support this extension, they can fallback to the session identifier mechanism built into TLS.\n\n[RFC 5077](https://tools.ietf.org/html/rfc5077) identifies situations where tickets are desirable over session identifiers. The main improvement is to avoid to maintain a server-side session cache since the whole session state is remembered by the client, not the server. A session cache can be costly in term of memory and difficult to share between multiple hosts when requests are load-balanced across servers."
    ]
  ]
}
```
