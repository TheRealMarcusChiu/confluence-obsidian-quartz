---
title: "dig - commands"
created: 2019-12-14T14:03:08.676-06:00
modified: 2019-12-14T14:05:09.764-06:00
parent: "[[dig]]"
children: []
---
basic query
```bash
$ dig google.com +short
172.217.9.142
```

query a specific [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS Resolver]]
```bash
$ dig @8.8.8.8 google.com +short
216.58.194.142
$ dig @8.8.4.4 www.example.org +short
93.184.216.34
```

search for specific [[DNS Resource Records／Entries (DNS RR)|DNS Resource Record Type]] value (e.g. A, CNAME, MX, NS, TXT, etc)
```bash
$ dig @8.8.8.8 google.com MX +short # MX type
40 alt3.aspmx.l.google.com.
30 alt2.aspmx.l.google.com.
50 alt4.aspmx.l.google.com.
20 alt1.aspmx.l.google.com.
10 aspmx.l.google.com.
```

search all record types
```bash
$ dig google.com ANY +short
216.58.194.78
2607:f8b0:4000:814::200e
ns1.google.com. dns-admin.google.com. 281483560 900 900 1800 60
```

reverse DNS lookup
```bash
$ dig -x 216.58.220.110 +short
syd10s01-in-f110.1e100.net.
```

trace DNS
```bash
$ dig google.com +trace
```

specify port number (default [[Domain Name System／Service (DNS)|DNS]] port number: 53)
```bash
$ dig @8.8.8.8 -p 5300 google.com
```

using [[Transmission Control Protocol (TCP)|TCP]] (default [[Universal／User Datagram Protocol (UDP)|UDP]])
```bash
$ dig +tcp www.example.org
93.184.216.34 
```

using [[IPv6]] (default [[IPv4]])
```bash
$ dig -6 @2001:4860:4860::8888 google.com A
for some reason does not work...
```
