---
title: "Konnectivity Service"
created: 2024-08-24T11:54:03.668-05:00
modified: 2024-08-24T11:56:21.584-05:00
parent: "[[Kubernetes Addons]]"
children: []
---
###### Konnectivity Service
````excerpt
- replaces SSH tunnels for communication between [[Kubernetes Control Plane Component|control plane]] and [[Kubernetes Worker Node Component|worker nodes]]
- provides TCP level proxy for the control plane to cluster communication
- consists of two parts:
	- the Konnectivity server in the control plane network
	- the Konnectivity agents in the nodes network
- The Konnectivity agents initiate connections to the Konnectivity server and maintain the network connections
- After enabling the Konnectivity service, all control plane to nodes traffic goes through these connections
````
^excerpt

# Konnectivity Service - Installation & Setup
- [https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/](https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/)
