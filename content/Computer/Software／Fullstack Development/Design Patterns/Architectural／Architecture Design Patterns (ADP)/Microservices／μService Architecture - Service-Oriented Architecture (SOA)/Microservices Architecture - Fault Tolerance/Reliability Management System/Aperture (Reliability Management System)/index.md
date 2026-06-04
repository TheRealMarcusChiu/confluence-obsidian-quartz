---
title: "Aperture (Reliability Management System)"
created: 2026-01-12T14:41:37.893-06:00
modified: 2026-01-12T14:42:52.785-06:00
parent: "[[Reliability Management System]]"
children: []
---
###### Aperture (Reliability Management System)
````excerpt
- is an open source reliability management system that can add these capabilities
- it offers a centralized load management system that collects reliability-related metrics from different systems and uses it to generate a global view
````
^excerpt

# Aperture - 3 components
- <strong>Observe</strong> - Aperture collects reliability-related metrics (latency, resource utilization, etc.) from each node using a sidecar and aggregates them in [Prometheus](https://en.wikipedia.org/wiki/Prometheus_(software)?utm_source=blog.quastor.org&utm_medium=referral&utm_campaign=scaling-microservices-at-doordash). You can also feed in metrics from other sources like InfluxDB, Docker Stats, Kafka, etc.
- <strong>Analyze</strong> - A controller will monitor the metrics in Prometheus and track any deviations from the service-level objectives you set. You set these in a YAML file and Aperture stores them in [etcd](https://github.com/etcd-io/etcd?utm_source=blog.quastor.org&utm_medium=referral&utm_campaign=scaling-microservices-at-doordash), a popular distributed key-value store.
- <strong>Actuate</strong> - If any of the policies are triggered, then Aperture will activate configured actions like load shedding or distributed rate limiting across the system.
