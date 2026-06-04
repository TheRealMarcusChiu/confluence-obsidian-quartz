---
title: "Kubernetes Metrics Service／Server"
created: 2024-09-05T11:23:57.921-05:00
modified: 2025-05-26T21:45:17.047-05:00
parent: "[[Kubernetes Addons]]"
children: []
---
###### Kubernetes Metrics Server
````excerpt
- scalable and efficient source of container resource metrics for Kubernetes built-in autoscaling pipelines
````
^excerpt

# Installation

Run in Kubernetes
```
$ kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
serviceaccount/metrics-server created
clusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created
clusterrole.rbac.authorization.k8s.io/system:metrics-server created
rolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created
clusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created
clusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created
service/metrics-server created
deployment.apps/metrics-server created
apiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created
```
# Resources
- [https://github.com/kubernetes-sigs/metrics-server](https://github.com/kubernetes-sigs/metrics-server)
- [https://github.com/kubernetes-sigs/metrics-server?tab=readme-ov-file](https://github.com/kubernetes-sigs/metrics-server?tab=readme-ov-file)
