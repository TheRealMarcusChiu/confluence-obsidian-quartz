---
title: "Kubernetes Addons"
created: 2024-08-24T11:19:01.289-05:00
modified: 2025-01-12T23:52:30.789-06:00
parent: "[[Kubernetes - Architecture & Components]]"
children:
  - "[[Konnectivity Service]]"
  - "[[Kubernetes Dashboard]]"
  - "[[Kubernetes Metrics Service／Server]]"
  - "[[Kubernetes NFS Subdir External Provisioner]]"
---
###### Kubernetes Addons
````excerpt
- Addons use Kubernetes resources ([DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset), [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), etc) to implement cluster features
- because these are providing cluster-level features, namespaced resources for addons belong within the <code><font style="color: rgb(122,134,154);">kube-system</font></code> namespace
````
^excerpt

# Addons - List
- see [Addons](https://kubernetes.io/docs/concepts/cluster-administration/addons/)
- see official repositories: [https://github.com/orgs/kubernetes-sigs/repositories?language=&q=&sort=stargazers&type=all](https://github.com/orgs/kubernetes-sigs/repositories?language=&q=&sort=stargazers&type=all)
- [[Kubernetes - Software Defined Storage (SDS) - Storage Solutions]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
