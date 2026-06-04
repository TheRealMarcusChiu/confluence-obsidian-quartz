---
title: "DNS over HTTP／3 (DoH3)"
created: 2026-01-22T22:10:14.796-06:00
modified: 2026-01-22T22:14:12.502-06:00
parent: "[[DNS Encryption]]"
children: []
---
###### DNS over HTTP/3 (DoH3)
````excerpt
- sends [[Domain Name System／Service (DNS)|DNS]] queries over HTTP/3, which itself runs on [[Quick UDP Internet Connections (QUIC)|QUIC]] ([[Universal／User Datagram Protocol (UDP)|UDP]] + [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|TLS]] 1.3)
````
^excerpt

# Client Examples
- [[kdig]]

# Server Examples
- <code>h3://cloudflare-dns.com/dns-query</code>
- <code>h3://security.cloudflare-dns.com/dns-query</code> (malware blocking)
- <code>h3://family.cloudflare-dns.com/dns-query</code> (family protection)
