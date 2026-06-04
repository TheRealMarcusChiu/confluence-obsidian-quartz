---
title: "Gorouter (Load Balancer)"
created: 2022-01-18T21:50:00.576-06:00
modified: 2022-01-18T21:55:37.729-06:00
parent: "[[Cloud Foundry]]"
children: []
---
###### Gorouter
- [https://github.com/cloudfoundry/gorouter](https://github.com/cloudfoundry/gorouter)
- Gorouter is a [[Reverse Proxy|reverse proxy]] that acts as a [[Load Balancers／Balancing|load balancer]] between many backend instances
- Gorouter's default load-balancing algorithm is a simple round-robin strategy
- Gorouter will retry a request if the chosen backend does not accept the [[Transmission Control Protocol (TCP)|TCP]] connection
