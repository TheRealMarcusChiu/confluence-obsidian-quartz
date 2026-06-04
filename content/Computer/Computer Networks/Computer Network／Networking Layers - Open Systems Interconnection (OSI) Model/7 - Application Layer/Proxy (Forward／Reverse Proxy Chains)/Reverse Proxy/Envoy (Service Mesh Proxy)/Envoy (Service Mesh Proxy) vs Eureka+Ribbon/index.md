---
title: "Envoy (Service Mesh Proxy) vs Eureka+Ribbon"
created: 2026-01-12T13:40:49.182-06:00
modified: 2026-01-12T13:43:59.927-06:00
parent: "[[Envoy (Service Mesh Proxy)]]"
children: []
---
# Eureka + Ribbon
```
App ---> Ribbon (client library) ---> multiple service instances
         ^                   |
         |                   v
    Eureka (registry) <------+
```
- load balancing happens <strong>inside the application process</strong>
- apps must embed Ribbon & talk to Eureka

# Envoy
```
App ---> Envoy proxy -----> Service instances (sidecar)
```
- load balancing, discovery, retries, metrics, etc. done <strong>in the proxy</strong>
- app code stays clean and unaware of network logic
- envoy usually deployed as a side-car to the app
