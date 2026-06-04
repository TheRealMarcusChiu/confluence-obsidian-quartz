---
title: "Kubernetes Scheduler (kube-scheduler)"
created: 2024-08-24T11:07:16.097-05:00
modified: 2024-08-24T11:08:08.791-05:00
parent: "[[Kubernetes Control Plane Component]]"
children: []
---
###### Kubernetes Scheduler (kube-scheduler)
````excerpt
- [[Kubernetes Control Plane Component|control plane]] component that watches for newly created Pods with no assigned node, and selects a node for them to run on
- factors taken into account for scheduling decisions include: individual and collective resource requirements, hardware/software/policy constraints, affinity and anti-affinity specifications, data locality, inter-workload interference, and deadlines
````
^excerpt
