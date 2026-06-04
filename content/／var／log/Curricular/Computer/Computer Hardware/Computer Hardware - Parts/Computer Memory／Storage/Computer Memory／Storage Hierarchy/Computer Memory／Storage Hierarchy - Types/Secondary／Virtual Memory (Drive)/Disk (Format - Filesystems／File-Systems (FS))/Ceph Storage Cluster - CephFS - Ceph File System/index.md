---
title: "Ceph Storage Cluster - CephFS - Ceph File System"
created: 2024-06-09T08:23:56.914-05:00
modified: 2025-08-26T14:23:30.817-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS))]]"
children:
  - "[[Ceph Block Devices (CBD) - RADOS Block Devices (RBD)]]"
  - "[[Ceph Storage - Installation & Setup]]"
---
###### Ceph Storage Cluster - CephFS - Ceph File System
````excerpt
- is a shared [[Disk (Format - Filesystems／File-Systems (FS))|file system]] so multiple clients can work on the same file system at once
````
^excerpt

# Ceph - Architecture & Components

Whether you want to:
- provide [Ceph Object Storage](https://docs.ceph.com/en/nautilus/glossary/#term-ceph-object-storage) and/or [[Ceph Block Devices (CBD) - RADOS Block Devices (RBD)|Ceph Block Device]] services to [Cloud Platforms](https://docs.ceph.com/en/nautilus/glossary/#term-cloud-platforms)
- deploy a [Ceph Filesystem](https://docs.ceph.com/en/nautilus/glossary/#term-ceph-filesystem) or use Ceph for another purpose

all Ceph Storage Cluster deployments begin with setting up each Ceph Node, your network, and the Ceph Storage Cluster.

A Ceph Storage Cluster requires at least one of each of the following:
- <strong>Ceph Monitor (<code>ceph-mon</code>)</strong> - maintains maps of the cluster state, including the monitor map, manager map, the OSD map, and the CRUSH map. These maps are critical cluster state required for Ceph daemons to coordinate with each other. Monitors are also responsible for managing authentication between daemons and clients. At least three monitors are normally required for redundancy and high availability.
- <strong>Ceph Manager daemon (<code>ceph-mgr</code>)</strong> - is responsible for keeping track of runtime metrics and the current state of the Ceph cluster, including storage utilization, current performance metrics, and system load. The Ceph Manager daemons also host python-based modules to manage and expose Ceph cluster information, including a web-based [Ceph Dashboard](https://docs.ceph.com/en/nautilus/mgr/dashboard/#mgr-dashboard) and [REST API](https://docs.ceph.com/en/nautilus/mgr/restful). At least two managers are normally required for high availability.
- <strong>Ceph OSD (Object Storage Daemon) (<code>ceph-osd</code>)</strong> - stores data, handles data replication, recovery, rebalancing, and provides some monitoring information to Ceph Monitors and Managers by checking other Ceph OSD Daemons for a heartbeat. At least 3 Ceph OSDs are normally required for redundancy and high availability.

When running Ceph Filesystem clients the following is required:
- <strong>Ceph Metadata Server (MDS) (<code>ceph-mds</code>)</strong> - stores metadata on behalf of the [Ceph Filesystem](https://docs.ceph.com/en/nautilus/glossary/#term-ceph-filesystem) (i.e., Ceph Block Devices and Ceph Object Storage do not use MDS). Ceph Metadata Servers allow POSIX file system users to execute basic commands (like <code>ls</code>, <code>find</code>, etc.) without placing an enormous burden on the Ceph Storage Cluster.

Ceph stores data as objects within logical storage pools. Using the [[Controlled Replication Under Scalable Hashing (CRUSH)|CRUSH]] algorithm, Ceph calculates which placement group should contain the object, and further calculates which Ceph OSD Daemon should store the placement group. The CRUSH algorithm enables the Ceph Storage Cluster to scale, rebalance, and recover dynamically.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://docs.ceph.com/en/reef/](https://docs.ceph.com/en/reef/)
