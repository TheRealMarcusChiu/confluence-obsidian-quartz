---
title: "DNS over HTTPS (DoH)"
created: 2019-11-09T21:12:00.187-06:00
modified: 2026-01-22T21:52:11.840-06:00
parent: "[[DNS Encryption]]"
children: []
---
###### DNS over HTTPS (DoH)
````excerpt
- is [[Domain Name System／Service (DNS)|DNS]] over [[Hyper Text Transfer Protocol Secure (HTTPS)|HTTPS]]
````
^excerpt

# Example

> [!expand-ui]- curl
> ```
> curl -H 'accept: application/dns-json' 'https://cloudflare-dns.com/dns-query?name=google.com&type=A'
> ```
> ```
> {
>   "Answer": [
>     { "data": "142.250.72.14" }
>   ]
> }
> ```

> [!expand-ui]- kdig
> TODO
