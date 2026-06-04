---
title: "Proxmox Backup Server (PBS)"
created: 2025-05-07T15:11:24.124-05:00
modified: 2025-05-15T13:34:48.919-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
###### Proxmox Backup Server (PBS)
````excerpt
- is an enterprise backup solution, for backing up and restoring VMs, containers, and physical hosts
- supporting incremental, fully deduplicated backups - which significantly reduces network load and saves valuable storage space
- with strong encryption and methods of ensuring data integrity, you can feel safe when backing up data, even to targets which are not fully trusted
````
^excerpt

# Getting Started

[https://www.proxmox.com/en/products/proxmox-backup-server/get-started](https://www.proxmox.com/en/products/proxmox-backup-server/get-started)

![](https://www.youtube.com/watch?v=wv9v9HMZJNY)
# Components

Proxmox Backup Server consists of multiple components:
- a server-daemon providing, among other things, a [[Representational State Transfer (REST) - RESTful|RESTful]] API, super-fast asynchronous tasks, lightweight usage statistic collection, scheduling events, strict separation of privileged and unprivileged execution environments
- a JavaScript management web interface
- a management CLI tool for the server (<code><font style="color: rgb(122,134,154);">proxmox-backup-manager</font></code>)
- a client CLI tool (<code><font style="color: rgb(122,134,154);">proxmox-backup-client</font></code>) to access the server easily from any Linux amd64 environment

# Resources
- [https://www.proxmox.com/en/products/proxmox-backup-server/overview](https://www.proxmox.com/en/products/proxmox-backup-server/overview)
