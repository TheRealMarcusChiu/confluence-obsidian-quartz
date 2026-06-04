---
title: "Kubernetes - Architecture & Components"
created: 2024-08-24T00:34:08.211-05:00
modified: 2024-08-24T11:20:20.909-05:00
parent: "[[Kubernetes]]"
children:
  - "[[Kubernetes Addons]]"
  - "[[Kubernetes Control Plane Component]]"
  - "[[Kubernetes Worker Node Component]]"
---
## ![[Kubernetes - Architecture & Components/kubernetes-components.png|700]]

![[Kubernetes - Architecture & Components/kubernetes_architecture.jpg|500]]
## <strong>Core Components[https://kubernetes.io/docs/concepts/overview/components/#core-components](https://kubernetes.io/docs/concepts/overview/components/#core-components)</strong>
### [[Kubernetes Control Plane Component|Control Plane Components]]

![[Kubernetes Control Plane Component#^excerpt]]
### [[Kubernetes Worker Node Component|Node Components]]

![[Kubernetes Worker Node Component#^excerpt]]
## <strong>[[Kubernetes Addons|Addons]]</strong>

Addons extend the functionality of Kubernetes. A few important examples include:
- <strong>DNS</strong> - for cluster-wide DNS resolution
- <strong>Web UI (Dashboard)</strong> - for cluster management via a web interface
- <strong>Container Resource Monitoring</strong> - for collecting and storing container metrics
- <strong>Cluster-level Logging</strong> - for saving container logs to a central log store
- etc
