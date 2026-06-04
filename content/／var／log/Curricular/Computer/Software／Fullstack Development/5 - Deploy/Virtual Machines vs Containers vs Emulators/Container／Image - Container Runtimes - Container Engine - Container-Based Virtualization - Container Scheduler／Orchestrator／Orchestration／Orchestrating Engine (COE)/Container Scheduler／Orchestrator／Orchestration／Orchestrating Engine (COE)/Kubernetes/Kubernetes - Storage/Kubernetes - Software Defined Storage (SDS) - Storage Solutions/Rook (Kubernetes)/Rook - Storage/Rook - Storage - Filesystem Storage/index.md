---
title: "Rook - Storage - Filesystem Storage"
created: 2025-05-22T23:34:48.105-05:00
modified: 2025-05-24T22:21:07.155-05:00
parent: "[[Rook - Storage]]"
children:
  - "[[Rook - Storage - Filesystem Mirroring]]"
---
see: [https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Shared-Filesystem-CephFS/filesystem-storage/](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Shared-Filesystem-CephFS/filesystem-storage/)
# Prerequisites
- understand [[Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)]]
- understand [[Kubernetes - PersistentVolume (PV) and PersistentVolumeClaim (PVC) Example]]

# Define a new StorageClass

> [!expand-ui]- Setup Example
> Create a new file
> ```yml
> apiVersion: ceph.rook.io/v1
> kind: CephFilesystem
> metadata:
>   name: myfs
>   namespace: rook-ceph
> spec:
>   metadataPool:
>     replicated:
>       size: 3
>   dataPools:
>     - name: replicated
>       replicated:
>         size: 3
>   preserveFilesystemOnDelete: true
>   metadataServer:
>     activeCount: 1
>     activeStandby: true
> ---
> apiVersion: storage.k8s.io/v1
> kind: StorageClass
> metadata:
>   name: rook-ceph-fs
> # Change "rook-ceph" provisioner prefix to match the operator namespace if needed
> provisioner: rook-ceph.cephfs.csi.ceph.com
> parameters:
>   # clusterID is the namespace where the rook cluster is running
>   # If you change this namespace, also change the namespace below where the secret namespaces are defined
>   clusterID: rook-ceph
>
>   # CephFS filesystem name into which the volume shall be created
>   fsName: myfs
>
>   # Ceph pool into which the volume shall be created
>   # Required for provisionVolume: "true"
>   pool: myfs-replicated
>
>   # The secrets contain Ceph admin credentials. These are generated automatically by the operator
>   # in the same namespace as the cluster.
>   csi.storage.k8s.io/provisioner-secret-name: rook-csi-cephfs-provisioner
>   csi.storage.k8s.io/provisioner-secret-namespace: rook-ceph
>   csi.storage.k8s.io/controller-expand-secret-name: rook-csi-cephfs-provisioner
>   csi.storage.k8s.io/controller-expand-secret-namespace: rook-ceph
>   csi.storage.k8s.io/node-stage-secret-name: rook-csi-cephfs-node
>   csi.storage.k8s.io/node-stage-secret-namespace: rook-ceph
>
> reclaimPolicy: Delete
> allowVolumeExpansion: true
> ```
>
> Create in Kubernetes cluster
> ```
> kubectl apply -f storage-class-filesystem.yml
> ```
# StorageClass Usage

> [!expand-ui]- Dashy
> Create the following files:
> ```yml
> apiVersion: v1
> kind: PersistentVolumeClaim
> metadata:
>   name: cephfs-dashy
> spec:
>   accessModes:
>   - ReadWriteMany
>   resources:
>     requests:
>       storage: 1Gi
>   storageClassName: rook-ceph-fs
> ```
> ```yml
> apiVersion: apps/v1
> kind: Deployment
> metadata:
>   name: dashy
> spec:
>   replicas: 1
>   selector:
>     matchLabels:
>       app: dashy
>   template:
>     metadata:
>       labels:
>         app: dashy
>     spec:
>       automountServiceAccountToken: true
>       dnsPolicy: ClusterFirst
>       enableServiceLinks: true
>       containers:
>       - name: dashy
>         image: lissy93/dashy
>         ports:
>         - containerPort: 8080
>         env:
>         - name: NODE_ENV
>           value: "production"
>         volumeMounts:
>         - mountPath: /app/user-data
>           name: cephfs-dashy
>       volumes:
>       - name: cephfs-dashy
>         persistentVolumeClaim:
>           claimName: cephfs-dashy
>           readOnly: false
> ```
> ```yml
> apiVersion: v1
> kind: Service
> metadata:
>   name: dashy
> spec:
>   ports:
>   - port: 80
>     targetPort: 8080
>   selector:
>     app: dashy
>   type: LoadBalancer
> ```
>
> Create in Kubernetes cluster
> ```
> kubectl apply -f dashy-pvc.yml
> kubectl apply -f dashy-server.yml
> kubectl apply -f dashy-service-load-balancer.yml
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
