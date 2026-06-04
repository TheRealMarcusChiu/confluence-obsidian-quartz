---
title: "DNS Encryption"
created: 2019-10-31T19:07:06.543-05:00
modified: 2026-01-22T22:11:55.755-06:00
parent: "[[Domain Name System／Service (DNS)]]"
children:
  - "[[DNS over HTTPS (DoH)]]"
  - "[[DNS over HTTP／3 (DoH3)]]"
  - "[[DNS over QUIC (DoQ)]]"
  - "[[DNS over TLS (DoT)]]"
---
[[DNS Client|DNS queries]] and answers are typically unprotected. [[Encryption|Encrypting]] [[Domain Name System／Service (DNS)|DNS]] would improve user [[Computer Security - Cybersecurity - IT Security|security]]
# DNS Encryption Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "[[DNS over TLS (DoT)]]",
        "bg": "#F4F5F7"
      },
      "- using [[Secure Sockets Layer (SSL) - Transport Layer Security (TLS)|Transport Layer Security (TLS)]]"
    ],
    [
      {
        "content": "[[DNS over HTTPS (DoH)]]",
        "bg": "#F4F5F7"
      },
      "- using [[Hyper Text Transfer Protocol Secure (HTTPS)]]"
    ],
    [
      {
        "content": "[[DNS over QUIC (DoQ)]]",
        "bg": "#F4F5F7"
      },
      "- using [[Quick UDP Internet Connections (QUIC)]]"
    ],
    [
      {
        "content": "[[DNS over HTTP／3 (DoH3)|DNS over HTTP/3 (DoH3)]]",
        "bg": "#F4F5F7"
      },
      "- using HTTP/3"
    ]
  ]
}
```
