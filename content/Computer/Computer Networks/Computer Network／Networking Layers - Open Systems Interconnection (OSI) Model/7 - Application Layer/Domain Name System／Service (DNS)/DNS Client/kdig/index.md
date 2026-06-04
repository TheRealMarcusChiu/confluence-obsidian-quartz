---
title: "kdig"
created: 2026-01-22T21:52:56.322-06:00
modified: 2026-01-22T22:15:39.219-06:00
parent: "[[DNS Client]]"
children: []
---
###### kdig
````excerpt
- is an enhanced [[dig]] tool from BIND
````
^excerpt

# Examples

[[DNS over TLS (DoT)]]:
```
kdig +tls google.com @1.1.1.1
```

[[DNS over HTTPS (DoH)]]:
```
kdig +https google.com @cloudflare-dns.com
```

[[DNS over QUIC (DoQ)]]:
```
kdig +quic google.com @dns.quad9.net
```

[[DNS over HTTP／3 (DoH3)|DNS over HTTP/3 (DoH3)]]:
```
kdig +https +http3 google.com @dns.cloudflare.com
```
# Verify it’s actually Encrypted
```
sudo tcpdump -i any port 53
```
- ❌ Plain DNS → you’ll see packets
- ✅ DoH / DoT → nothing shows up
