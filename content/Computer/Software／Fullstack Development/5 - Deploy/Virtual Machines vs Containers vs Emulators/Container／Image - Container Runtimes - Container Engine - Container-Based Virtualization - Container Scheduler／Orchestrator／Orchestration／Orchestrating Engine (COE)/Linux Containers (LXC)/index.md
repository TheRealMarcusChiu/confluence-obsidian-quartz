---
title: "Linux Containers (LXC)"
created: 2019-10-15T20:50:12.487-05:00
modified: 2024-08-20T16:23:27.110-05:00
parent: "[[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)]]"
children: []
---
###### Linux Container (LXC) (lex-see)
````excerpt
- is a program which creates and administers “[[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|containers]]” on a local system
- is a system-level container virtualization method for running multiple isolated Linux systems on a control host using a single [[Linux Kernel|Linux kernel]]
- is very much like a [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|virtual machine]], but significantly lighter weight since it is sharing the host kernel with the LXC host. It does not require the disk space or other resources as full VMs
- is a subset of [[LXD]]
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
- [[Linux Containers vs Docker Containers - System Container vs Application Container]]

# Resources
- [https://linuxcontainers.org/lxc/introduction/](https://linuxcontainers.org/lxc/introduction/)
