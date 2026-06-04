---
title: "Reverse Proxy"
created: 2019-03-16T22:08:16.405-05:00
modified: 2025-06-21T15:48:40.800-05:00
parent: "[[Proxy (Forward／Reverse Proxy Chains)]]"
children:
  - "[[Envoy (Service Mesh Proxy)]]"
  - "[[HAProxy]]"
---
###### Reverse Proxies
````excerpt
- control access to a server on private networks
- can perform authentication tasks, as well as cache or decrypt data
````
^excerpt

# Reverse Proxy Server Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
- [[Nginx]]
- [[Apache HTTP Server (Apache)]]
- [[Gorouter (Load Balancer)]]
- [[Caddy]]
- [[Traefik]]
