---
title: "Kubernetes Control Plane Component"
created: 2024-08-24T00:56:44.686-05:00
modified: 2024-08-24T11:36:28.034-05:00
parent: "[[Kubernetes - Architecture & Components]]"
children:
  - "[[Konnectivity Server]]"
  - "[[Kubernetes API Server (kube-apiserver)]]"
  - "[[Kubernetes Controller Manager (kube-controller-manager)]]"
  - "[[Kubernetes Scheduler (kube-scheduler)]]"
---
###### Kubernetes Control Plane Component
````excerpt
- Manage the overall state of the cluster:
	- <strong>[[Kubernetes API Server (kube-apiserver)|kube-apiserver]]</strong> - the core component server that exposes the Kubernetes HTTP API
	- <strong>[[Etcd|etcd]]</strong> - consistent and highly-available key value store for all API server data
	- <strong>[[Kubernetes Scheduler (kube-scheduler)|kube-scheduler]]</strong> - Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node
	- <strong>[[Kubernetes Controller Manager (kube-controller-manager)|kube-controller-manager]]</strong> - runs controllers to implement Kubernetes API behavior
	- <strong>cloud-controller-manager</strong> (optional) - integrates with underlying cloud provider(s)
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Control Plane - Deployment Options

The control plane components can be deployed in several ways:

```merge-table
{
  "rows": [
    [
      {
        "content": "Traditional Deployment",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Control plane components run directly on dedicated machines or VMs\n- managed as [[Systemd|systemd]] services or of the like"
    ],
    [
      {
        "content": "Static Pods",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Control plane components are deployed as static Pods\n- managed by the [[kubelet]] on specific nodes\n- this is a common approach used by tools like kubeadm"
    ],
    [
      {
        "content": "Self-Hosted",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Control plane components runs as Pods within the Kubernetes cluster itself\n- managed by <code><font style=\"color: rgb(122,134,154);\">Deployments</font></code> and <code><font style=\"color: rgb(122,134,154);\">StatefulSets</font></code> or other Kubernetes primitives"
    ],
    [
      {
        "content": "Managed Kubernetes Services",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Control plane components are often abstracted away by Cloud providers\n- managing its components as part of their service offering"
    ]
  ]
}
```
