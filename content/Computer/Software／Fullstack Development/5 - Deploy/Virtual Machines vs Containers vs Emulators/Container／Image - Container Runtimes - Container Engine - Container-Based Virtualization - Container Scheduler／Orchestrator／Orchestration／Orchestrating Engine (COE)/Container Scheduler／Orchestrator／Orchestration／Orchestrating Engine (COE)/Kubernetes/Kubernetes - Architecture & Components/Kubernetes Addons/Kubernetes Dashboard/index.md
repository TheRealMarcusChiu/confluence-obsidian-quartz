---
title: "Kubernetes Dashboard"
created: 2024-09-04T20:01:50.305-05:00
modified: 2025-05-26T20:02:25.215-05:00
parent: "[[Kubernetes Addons]]"
children:
  - "[[Kubernetes Dashboard - Creating Login Bearer Token]]"
  - "[[Kubernetes Dashboard - Expose via LoadBalancer]]"
---
###### Kubernetes Dashboard
````excerpt
- general-purpose web UI for [[Kubernetes]] clusters
````
^excerpt

# Installation

Only supports [[Helm]]-based installation.

Add kubernetes-dashboard repository.
```
$ helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
```

Deploy a Helm Release named "kubernetes-dashboard" using the kubernetes-dashboard chart
```
$ helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
Release "kubernetes-dashboard" does not exist. Installing it now.
NAME: kubernetes-dashboard
LAST DEPLOYED: Tue May 27 01:01:19 2025
NAMESPACE: kubernetes-dashboard
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
*************************************************************************************************
*** PLEASE BE PATIENT: Kubernetes Dashboard may need a few minutes to get up and become ready ***
*************************************************************************************************

Congratulations! You have just installed Kubernetes Dashboard in your cluster.

To access Dashboard run:
  kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-proxy 8443:443

NOTE: In case port-forward command does not work, make sure that kong service name is correct.
      Check the services in Kubernetes Dashboard namespace using:
        kubectl -n kubernetes-dashboard get svc

Dashboard will be available at:
  https://localhost:8443
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://github.com/kubernetes/dashboard](https://github.com/kubernetes/dashboard)
