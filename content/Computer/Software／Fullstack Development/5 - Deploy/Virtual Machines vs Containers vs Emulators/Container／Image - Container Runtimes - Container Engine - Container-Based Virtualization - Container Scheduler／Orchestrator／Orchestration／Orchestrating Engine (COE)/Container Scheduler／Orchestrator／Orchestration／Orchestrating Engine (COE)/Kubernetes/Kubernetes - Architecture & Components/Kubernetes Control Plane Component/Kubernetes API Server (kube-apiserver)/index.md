---
title: "Kubernetes API Server (kube-apiserver)"
created: 2024-08-24T00:45:50.207-05:00
modified: 2024-08-24T11:08:49.987-05:00
parent: "[[Kubernetes Control Plane Component]]"
children: []
---
###### Kubernetes API Server (<strong>kube-apiserver)</strong>
````excerpt
- is the core of Kubernetes' [[Kubernetes Control Plane Component|control plane]]
- exposes an HTTP API that lets end users, different parts of your cluster, and external components communicate with one another
- the Kubernetes API lets you query and manipulate the state of API objects in Kubernetes (for example: Pods, Namespaces, ConfigMaps, and Events).
- most operations can be performed through the [kubectl](https://kubernetes.io/docs/reference/kubectl/) command-line interface or other command-line tools, such as [kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/), which in turn use the API. However, you can also access the API directly using REST calls. Kubernetes provides a set of [client libraries](https://kubernetes.io/docs/reference/using-api/client-libraries/) for those looking to write applications using the Kubernetes API
````
^excerpt
