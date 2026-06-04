---
title: "Minikube"
created: 2019-12-23T16:39:19.366-06:00
modified: 2026-05-21T13:41:45.637-05:00
parent: "[[Kubernetes - Installation & Setup]]"
children: []
---
###### Minikube
````excerpt
- is a tool that runs a single-node [[Kubernetes]] cluster in a [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|virtual machine]] on your personal computer
````
^excerpt

# Installation
- [https://kubernetes.io/docs/tasks/tools/install-minikube/](https://kubernetes.io/docs/tasks/tools/install-minikube/)

# Using Minikube
- <code><font style="color: rgb(122,134,154);">minikube start --vm-driver=\<driver\_name\></font></code>
- <code><font style="color: rgb(122,134,154);">minikube status</font></code>
- <code><font style="color: rgb(122,134,154);">minikube stop</font></code>

# Using Minikube With VirtualBox
- install [[VirtualBox]]
- <code><font style="color: rgb(122,134,154);">minikube start --vm-driver=virtualbox</font></code>
- <code><font style="color: rgb(122,134,154);">minikube status</font></code>
- <code><font style="color: rgb(122,134,154);">minikube stop</font></code>
