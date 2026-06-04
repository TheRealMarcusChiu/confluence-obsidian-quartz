---
title: "kubelet"
created: 2024-08-24T11:13:57.789-05:00
modified: 2024-08-24T11:21:56.895-05:00
parent: "[[Kubernetes Worker Node Component]]"
children: []
---
###### kubelet
````excerpt
- an agent that runs on each [[Kubernetes Worker Node Component|node]] in the cluster
- it makes sure that containers are running in a Pod
- the kubelet takes a set of PodSpecs that are provided through various mechanisms and ensures that the containers described in those PodSpecs are running and healthy
- the kubelet doesn't manage containers which were not created by Kubernetes
````
^excerpt
