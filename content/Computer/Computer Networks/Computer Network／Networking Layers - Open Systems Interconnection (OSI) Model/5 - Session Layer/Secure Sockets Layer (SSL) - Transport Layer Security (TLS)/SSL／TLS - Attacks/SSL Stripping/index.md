---
title: "SSL Stripping"
created: 2019-03-16T02:51:28.281-05:00
modified: 2019-11-09T21:02:34.159-06:00
parent: "[[SSL／TLS - Attacks]]"
children: []
---
stripping [[Hyper Text Transfer Protocol Secure (HTTPS)|HTTPS]] to plain [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]

<strong>1. install sslstrip</strong>
<span style="white-space: pre-wrap"><code>  yum search sslstrip</code><br><code>  yum install sslstrip</code><br><code></code><br><code>  yum search dsniff</code><br><code>  yum install dsniff</code></span>

<strong>2. test it</strong>
<span style="white-space: pre-wrap"><code>  sslstrip 8080</code><br><code>  tail -f sslstrip.log</code></span>

### Performing MITM (Man in the Middle) Attack SSL Stripping
- [https://avicoder.me/2016/02/22/SSLstrip-for-newbies/](https://avicoder.me/2016/02/22/SSLstrip-for-newbies/)
