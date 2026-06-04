---
title: "Envoy (Service Mesh Proxy)"
created: 2022-12-20T13:12:12.248-06:00
modified: 2026-01-12T13:44:17.900-06:00
parent: "[[Reverse Proxy]]"
children:
  - "[[Envoy (Service Mesh Proxy) vs Eureka+Ribbon]]"
---
###### Envoy (Service Mesh Proxy)
````excerpt
- is an open-source [[7 - Application Layer|L7]] proxy and communication bus designed for large modern service-oriented architectures
- designed by Lyft
````
^excerpt

# Envoy - Features

is a high-performance distributed proxy (edge + service mesh data plane) that provides:
- service discovery
- load balancing
- health checks
- circuit breaking
- retries & timeouts
- observability (stats/tracing/logs)
- L7 [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]]/[[gRPC]] features
- Advanced routing

Envoy is <strong>typically deployed as a sidecar proxy or edge proxy, centralizing networking logic outside the application</strong>.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://github.com/envoyproxy/envoy](https://github.com/envoyproxy/envoy)
- [https://www.envoyproxy.io/](https://www.envoyproxy.io/)
