---
title: "Kubernetes Controller Manager (kube-controller-manager)"
created: 2024-08-24T11:09:52.933-05:00
modified: 2024-08-24T11:18:00.740-05:00
parent: "[[Kubernetes Control Plane Component]]"
children: []
---
###### Kubernetes Controller Manager (kube-controller-manager)
````excerpt
- [[Kubernetes Control Plane Component|control plane]] component that runs controller processes.
- Logically, each controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process.
- There are many different types of controllers. Some examples of them are:
	- <strong>node controller</strong> - responsible for noticing and responding when [[Kubernetes Worker Node Component|nodes]] go down.
	- <strong>Job controller</strong> - watches for Job objects that represent one-off tasks, then creates Pods to run those tasks to completion.
	- <strong>EndpointSlice controller</strong> - populates EndpointSlice objects (to provide a link between Services and Pods).
	- <strong>ServiceAccount controller</strong> - create default ServiceAccounts for new namespaces
````
^excerpt
