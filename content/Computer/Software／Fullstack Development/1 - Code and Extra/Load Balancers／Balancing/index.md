---
title: "Load Balancers／Balancing"
created: 2019-03-16T01:33:28.415-05:00
modified: 2026-01-28T20:15:20.177-06:00
parent: "[[1 - Code and Extra]]"
children:
  - "[[Ingress-Nginx Controller]]"
  - "[[Keepalived]]"
  - "[[MetalLB]]"
---
###### Load Balancers/Balancing
````excerpt
- means spreading traffic across multiple servers instead of hammering just one
````
^excerpt

# Introduction
- [Introduction to modern network load balancing and proxying](https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236)

# Server Implementations
- [[Nginx]]
- [[Apache HTTP Server (Apache)]]
- [[Gorouter (Load Balancer)]]
- [[HAProxy]]
- [[Traefik]]
- [[Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)]]
- [[Linux Virtual Server (LVS)]] and [[IP Virtual Server (IPVS)]]
- [[Java - Spring Cloud - Zuul API Gateway Proxy]]
- [[Envoy (Service Mesh Proxy)]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
