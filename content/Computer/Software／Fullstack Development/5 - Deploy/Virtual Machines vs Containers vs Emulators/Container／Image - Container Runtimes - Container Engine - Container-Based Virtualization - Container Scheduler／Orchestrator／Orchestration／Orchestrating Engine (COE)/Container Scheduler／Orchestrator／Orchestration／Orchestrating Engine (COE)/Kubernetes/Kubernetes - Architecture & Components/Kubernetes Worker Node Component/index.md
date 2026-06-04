---
title: "Kubernetes Worker Node Component"
created: 2024-08-24T00:57:21.506-05:00
modified: 2024-08-24T11:50:45.029-05:00
parent: "[[Kubernetes - Architecture & Components]]"
children:
  - "[[Konnectivity Agents]]"
  - "[[Kubernetes Pod／Pods]]"
  - "[[kube-proxy]]"
  - "[[kubelet]]"
---
###### Kubernetes Worker Node Component
````excerpt
- Run on every node, maintaining running pods and providing the Kubernetes runtime environment:
	- <strong>[[kubelet]]</strong> - ensures that Pods are running, including their containers
	- <strong>[[kube-proxy]]</strong> (optional) - maintains network rules on nodes to implement [Services](https://kubernetes.io/docs/concepts/services-networking/service/)
	- <strong>[[Kubernetes Container Network Interface (CNI)]]</strong> (e.g. [[Kube-router|kube-router]]) - a turn-key Kubernetes networking solution purpose built for operational simplicity and performance.
	- <strong>[[Kubernetes Container Runtime Interface (CRI)]]</strong> (e.g. [[Containerd|containerd]]) - software responsible for running [[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|containers]]
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
