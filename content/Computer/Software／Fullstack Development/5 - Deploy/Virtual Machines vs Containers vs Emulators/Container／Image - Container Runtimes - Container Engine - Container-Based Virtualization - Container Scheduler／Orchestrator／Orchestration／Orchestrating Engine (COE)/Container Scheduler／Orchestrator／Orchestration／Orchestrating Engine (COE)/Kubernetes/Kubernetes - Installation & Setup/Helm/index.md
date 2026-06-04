---
title: "Helm"
created: 2024-08-23T19:50:19.496-05:00
modified: 2025-05-22T12:58:26.757-05:00
parent: "[[Kubernetes - Installation & Setup]]"
children: []
---
###### Helm
````excerpt
- is a [[Package Managers|package manager]] for [[Kubernetes]] that can make it easier to build, test, and manage applications in a Kubernetes cluster
- it's available by default on all control plane nodes of the Kubernetes cluster, so you can start working with it by connecting to the node
````
^excerpt

# Prerequisites

You should have the following before getting started with the helm setup.
- a running [[Kubernetes - Installation & Setup|Kubernetes cluster]]
- the Kubernetes cluster API endpoint should be reachable from the machine you are running helm
- authenticate the cluster using kubectl and it should have cluster-admin permissions

# Installation

> [!expand-ui]- Using Script
> ```
> curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
> chmod +x get_helm.sh
> ./get_helm.sh
> ```
>
> Validate helm installation
> ```
> helm
> ```
# Quick Start
- [https://helm.sh/docs/intro/quickstart/](https://helm.sh/docs/intro/quickstart/)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
