---
title: "Kubernetes Container Storage Interface (CSI)"
created: 2024-08-23T20:13:16.146-05:00
modified: 2024-08-24T11:24:17.171-05:00
parent: "[[Kubernetes]]"
children: []
---
###### Kubernetes Container Storage Interface (CSI)
````excerpt
- is an initiative to unify the storage interface of [[Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|Container Orchestrators]] (CO) like [[Kubernetes]], [[Mesos Kernel|Mesos]], [[Docker Swarm]], [[Cloud Foundry]], etc. combined with storage vendors like Ceph, Portworx, NetApp etc. This means, implementing a single CSI for a storage vendor is guaranteed to work with all COs
- assuming a CSI storage plugin is already deployed on a Kubernetes cluster, users can use CSI volumes through the familiar Kubernetes storage API objects: <code>PersistentVolumeClaims</code>, <code>PersistentVolumes</code>, and <code>StorageClasses</code>. Documented [here](https://kubernetes.io/docs/concepts/storage/volumes/#csi).
````
^excerpt

# CSI - Example Storage Solutions
- Rook-Ceph (Open Source)
- MinIO (Open Source)
- Gluster (Open Source)
- Longhorn (Open Source)
- Amazon EBS
- Google Persistent Disk
- Azure Disk
- Portworx

# CSI - Without and With
![[Kubernetes Container Storage Interface (CSI)/csi-without.png|400]]![[Kubernetes Container Storage Interface (CSI)/csi-with.png|500]]
