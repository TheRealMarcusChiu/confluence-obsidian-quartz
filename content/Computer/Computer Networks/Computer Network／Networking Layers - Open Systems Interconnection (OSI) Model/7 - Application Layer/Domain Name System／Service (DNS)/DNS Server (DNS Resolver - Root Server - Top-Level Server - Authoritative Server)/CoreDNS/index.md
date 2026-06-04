---
title: "CoreDNS"
created: 2024-08-23T18:45:08.612-05:00
modified: 2024-08-23T18:47:37.869-05:00
parent: "[[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)]]"
children: []
---
###### CoreDNS
````excerpt
- is a [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS server]]
- it is written in [[Go-lang|Go]]
- is licensed under the Apache License Version 2
- is completely open source
- CoreDNS chains [plugins](https://coredns.io/plugins). Each plugin performs a DNS function, such as [Kubernetes service discovery](https://coredns.io/plugins/kubernetes), [prometheus metrics](https://coredns.io/plugins/metrics), [rewriting queries](https://coredns.io/plugins/rewrite), or <em>just</em> serving from [zone files](https://coredns.io/plugins/file). And [many](https://coredns.io/plugins/)[more](https://coredns.io/explugins/)
````
^excerpt
