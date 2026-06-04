---
title: "Rook - Installation & Setup"
created: 2024-09-05T18:23:11.846-05:00
modified: 2025-05-27T23:28:24.683-05:00
parent: "[[Rook (Kubernetes)]]"
children: []
---
Based on: [https://rook.github.io/docs/rook/latest-release/Getting-Started/quickstart/](https://rook.github.io/docs/rook/latest-release/Getting-Started/quickstart/)
# Prerequisites

The k8s worker nodes have a raw device (see [[Proxmox - Disk Pass Through]] if k8s worker node is a Proxmox VM)
# Deploy the Rook Operator

Before starting the operator in production, consider these settings:
1. Some Rook features are disabled by default. See the [operator.yaml](https://github.com/rook/rook/blob/release-1.17/deploy/examples/operator.yaml) for these and other advanced settings.
	1. Device discovery: Rook will watch for new devices to configure if the <code><font style="color: rgb(122,134,154);">ROOK\_ENABLE\_DISCOVERY\_DAEMON</font></code> setting is enabled, commonly used in bare metal clusters.
	2. Node affinity and tolerations: The CSI driver by default will run on any node in the cluster. To restrict the CSI driver affinity, several settings are available.
2. If deploying Rook into a namespace other than the default <code><font style="color: rgb(122,134,154);">rook-ceph</font></code>, see the topic on [using an alternative namespace](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Advanced/ceph-configuration/#using-alternate-namespaces).

Deploy <code><font style="color: rgb(122,134,154);">rook-ceph-operator</font></code> via:
```
git clone --single-branch --branch v1.17.2 https://github.com/rook/rook.git
cd rook/deploy/examples
kubectl apply -f crds.yaml
kubectl apply -f common.yaml
kubectl apply -f operator.yaml
```

Verify the <code><font style="color: rgb(122,134,154);">rook-ceph-operator</font></code> is in the \`Running\` state before proceeding
```
kubectl -n rook-ceph get pod
```
# Cluster Environments

The Rook documentation is focused around starting Rook in a variety of environments. While creating the cluster in this guide, consider these example cluster manifests:
- [cluster.yaml](https://github.com/rook/rook/blob/release-1.17/deploy/examples/cluster.yaml): Cluster settings for a production cluster running on bare metal. Requires at least three worker nodes.
- [cluster-on-pvc.yaml](https://github.com/rook/rook/blob/release-1.17/deploy/examples/cluster-on-pvc.yaml): Cluster settings for a production cluster running in a dynamic cloud environment.
- [cluster-test.yaml](https://github.com/rook/rook/blob/release-1.17/deploy/examples/cluster-test.yaml): Cluster settings for a test environment such as minikube.

See the [Ceph example configurations](https://rook.github.io/docs/rook/latest-release/Getting-Started/example-configurations/) for more details.
# Create a Ceph Cluster

Create the cluster via
```
kubectl apply -f cluster.yaml
```

Verify the cluster is running by viewing the pods in the <code><font style="color: rgb(122,134,154);">rook-ceph</font></code> namespace.

The number of osd pods will depend on the number of nodes in the cluster and the number of devices configured. For the default <code><font style="color: rgb(122,134,154);">cluster.yaml</font></code> above, one OSD will be created for each available device found on each node.
```
$ kubectl -n rook-ceph get pod
NAME                                                 READY   STATUS      RESTARTS   AGE
csi-cephfsplugin-provisioner-d77bb49c6-n5tgs         5/5     Running     0          140s
csi-cephfsplugin-provisioner-d77bb49c6-v9rvn         5/5     Running     0          140s
csi-cephfsplugin-rthrp                               3/3     Running     0          140s
csi-rbdplugin-hbsm7                                  3/3     Running     0          140s
csi-rbdplugin-provisioner-5b5cd64fd-nvk6c            6/6     Running     0          140s
csi-rbdplugin-provisioner-5b5cd64fd-q7bxl            6/6     Running     0          140s
rook-ceph-crashcollector-minikube-5b57b7c5d4-hfldl   1/1     Running     0          105s
rook-ceph-mgr-a-64cd7cdf54-j8b5p                     2/2     Running     0          77s
rook-ceph-mgr-b-657d54fc89-2xxw7                     2/2     Running     0          56s
rook-ceph-mon-a-694bb7987d-fp9w7                     1/1     Running     0          105s
rook-ceph-mon-b-856fdd5cb9-5h2qk                     1/1     Running     0          94s
rook-ceph-mon-c-57545897fc-j576h                     1/1     Running     0          85s
rook-ceph-operator-85f5b946bd-s8grz                  1/1     Running     0          92m
rook-ceph-osd-0-6bb747b6c5-lnvb6                     1/1     Running     0          23s
rook-ceph-osd-1-7f67f9646d-44p7v                     1/1     Running     0          24s
rook-ceph-osd-2-6cd4b776ff-v4d68                     1/1     Running     0          25s
rook-ceph-osd-prepare-node1-vx2rz                    0/2     Completed   0          60s
rook-ceph-osd-prepare-node2-ab3fd                    0/2     Completed   0          60s
rook-ceph-osd-prepare-node3-w4xyz                    0/2     Completed   0          60s
```

To verify that the cluster is in a healthy state, connect to the [[Rook Toolbox]] and run the <code><font style="color: rgb(122,134,154);">ceph status</font></code> command.
- All mons should be in quorum
- A mgr should be active
- At least three OSDs should be <code>up</code> and <code>in</code>
- If the health is not <code><font style="color: rgb(122,134,154);">HEALTH\_OK</font></code>, the warnings or errors should be investigated
```
$ ceph status
  cluster:
    id:     a0452c76-30d9-4c1a-a948-5d8405f19a7c
    health: HEALTH_OK

  services:
    mon: 3 daemons, quorum a,b,c (age 3m)
    mgr:a(active, since 2m), standbys: b
    osd: 3 osds: 3 up (since 1m), 3 in (since 1m)
[]...]
```
# Storage

For a walkthrough of the three types of storage exposed by Rook, see the guides for:
- <strong>[Block](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/)</strong>: Create block storage to be consumed by a pod (RWO)
- <strong>[Shared Filesystem](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Shared-Filesystem-CephFS/filesystem-storage/)</strong>: Create a filesystem to be shared across multiple pods (RWX)
- <strong>[Object](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Object-Storage-RGW/object-storage/)</strong>: Create an object store that is accessible with an [[AWS - Simple Storage Service (S3) Bucket|S3]] endpoint inside or outside the Kubernetes cluster

# Ceph Dashboard

Ceph has a dashboard to view the status of the cluster. See the [[Rook - Ceph Dashboard|dashboard guide]].
# Tools

Create a toolbox pod for full access to a ceph admin client for debugging and troubleshooting the Rook cluster. See the [toolbox documentation](https://rook.github.io/docs/rook/latest-release/Troubleshooting/ceph-toolbox/) for setup and usage information.

The [Rook kubectl plugin](https://github.com/rook/kubectl-rook-ceph) provides commands to view status and troubleshoot issues.

See the [advanced configuration](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Advanced/ceph-configuration/) document for helpful maintenance and tuning examples.
# Monitoring

Each Rook cluster has built-in metrics collectors/exporters for monitoring with Prometheus. To configure monitoring, see the [monitoring guide](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-monitoring/).
# Teardown

When finished with the test cluster, see [the cleanup guide](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/ceph-teardown/).
