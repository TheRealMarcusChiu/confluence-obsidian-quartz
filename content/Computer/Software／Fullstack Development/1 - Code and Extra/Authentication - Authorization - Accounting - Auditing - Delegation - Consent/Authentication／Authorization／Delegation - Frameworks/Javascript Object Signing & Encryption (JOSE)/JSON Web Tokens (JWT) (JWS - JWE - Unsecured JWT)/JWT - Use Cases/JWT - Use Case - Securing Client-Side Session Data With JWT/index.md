---
title: "JWT - Use Case - Securing Client-Side Session Data With JWT"
created: 2019-09-16T14:32:33.095-05:00
modified: 2021-01-10T14:30:33.542-06:00
parent: "[[JWT - Use Cases]]"
children: []
---
# <strong>Securing Client-Side Session Data With JWT</strong>

[[JSON Web Tokens (JWT) (JWS - JWE - Unsecured JWT)|JSON Web Tokens (JWT)]] provides a SECURED container for client-side session data (i.e. information stored on the client side and transferred to server with each request)

to understand JWT as Session Data we need to understand:
- [[Server-Side／Stateful Sessions - Client-Side／Stateless Sessions - Hybrid Sessions|server-side/stateful sessions]]
- [[Server-Side／Stateful Sessions - Client-Side／Stateless Sessions - Hybrid Sessions|client-side/stateless sessions]]

there are 2 types of JWTs that secures the session-data:
- [[JWT - JSON Web Signature (JWS) Structure]]
- [[JWT - JSON Web Encryption (JWE) Structure]]

# <strong>Cons using JWT as Session Data</strong>

see: [http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/)

consider using:
- [[Redis]] - Server-Side Sessions
- [[HTTP Cookie (Web Cookie, Internet Cookie, Browser Cookie, or Cookie)|Cookies]] over HTTPS - Client-Side Sessions
