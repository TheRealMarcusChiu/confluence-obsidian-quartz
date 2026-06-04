---
title: "kube-proxy"
created: 2024-08-24T11:14:19.613-05:00
modified: 2024-08-24T11:23:29.655-05:00
parent: "[[Kubernetes Worker Node Component]]"
children: []
---
###### kube-proxy
````excerpt
- kube-proxy is a network proxy that runs on each [[Kubernetes Worker Node Component|node]] in your cluster, implementing part of the Kubernetes Service concept.
- kube-proxy maintains network rules on nodes. These network rules allow network communication to your Pods from network sessions inside or outside of your cluster.
- kube-proxy uses the operating system packet filtering layer if there is one and it's available. Otherwise, kube-proxy forwards the traffic itself.
- If you use a network plugin that implements packet forwarding for Services by itself, and providing equivalent behavior to kube-proxy, then you do not need to run kube-proxy on the nodes in your cluster.
````
^excerpt
