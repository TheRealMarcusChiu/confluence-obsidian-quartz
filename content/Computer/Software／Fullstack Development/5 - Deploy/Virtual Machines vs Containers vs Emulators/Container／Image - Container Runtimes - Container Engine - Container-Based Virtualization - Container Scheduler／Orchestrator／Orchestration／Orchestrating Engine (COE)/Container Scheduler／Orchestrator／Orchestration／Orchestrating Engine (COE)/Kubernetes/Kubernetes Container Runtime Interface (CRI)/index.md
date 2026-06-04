---
title: "Kubernetes Container Runtime Interface (CRI)"
created: 2024-08-20T15:37:45.486-05:00
modified: 2024-08-24T12:06:31.197-05:00
parent: "[[Kubernetes]]"
children: []
---
###### Kubernetes Container Runtime Interface (CRI)
````excerpt
- is a plugin interface which enables the [[kubelet]] to use a wide variety of container runtimes, without having a need to recompile the cluster components.
- You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers.
- is the main protocol for the communication between the [[kubelet]] and [[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|Container Runtime]]
- defines the main [[gRPC]] protocol for the communication between the node components kubelet and container runtime
````
^excerpt

# CRI - Implementations
- [[Containerd]]
- [[CRI-O]]
