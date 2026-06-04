---
title: "Rook - Storage - Block Storage (RDB)"
created: 2025-05-22T23:33:58.052-05:00
modified: 2025-05-24T22:21:34.530-05:00
parent: "[[Rook - Storage]]"
children: []
---
see: [https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/)
# Prerequisites
- understand [[Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)]]
- understand [[Kubernetes - PersistentVolume (PV) and PersistentVolumeClaim (PVC) Example]]

# Define a StorageClass

Define a StorageClass for Block Storage
```yml
kind: CephBlockPool
metadata:
  name: replicapool
  namespace: rook-ceph
spec:
  failureDomain: host
  replicated:
    size: 3
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
   name: rook-ceph-block
# Change "rook-ceph" provisioner prefix to match the operator namespace if needed
provisioner: rook-ceph.rbd.csi.ceph.com
parameters:
    # clusterID is the namespace where the rook cluster is running
    clusterID: rook-ceph
    # Ceph pool into which the RBD image shall be created
    pool: replicapool

    # (optional) mapOptions is a comma-separated list of map options.
    # For krbd options refer
    # https://docs.ceph.com/docs/master/man/8/rbd/#kernel-rbd-krbd-options
    # For nbd options refer
    # https://docs.ceph.com/docs/master/man/8/rbd-nbd/#options
    # mapOptions: lock_on_read,queue_depth=1024

    # (optional) unmapOptions is a comma-separated list of unmap options.
    # For krbd options refer
    # https://docs.ceph.com/docs/master/man/8/rbd/#kernel-rbd-krbd-options
    # For nbd options refer
    # https://docs.ceph.com/docs/master/man/8/rbd-nbd/#options
    # unmapOptions: force

    # RBD image format. Defaults to "2".
    imageFormat: "2"

    # RBD image features
    # Available for imageFormat: "2". Older releases of CSI RBD
    # support only the `layering` feature. The Linux kernel (KRBD) supports the
    # full complement of features as of 5.4
    # `layering` alone corresponds to Ceph's bitfield value of "2" ;
    # `layering` + `fast-diff` + `object-map` + `deep-flatten` + `exclusive-lock` together
    # correspond to Ceph's OR'd bitfield value of "63". Here we use
    # a symbolic, comma-separated format:
    # For 5.4 or later kernels:
    #imageFeatures: layering,fast-diff,object-map,deep-flatten,exclusive-lock
    # For 5.3 or earlier kernels:
    imageFeatures: layering

    # The secrets contain Ceph admin credentials.
    csi.storage.k8s.io/provisioner-secret-name: rook-csi-rbd-provisioner
    csi.storage.k8s.io/provisioner-secret-namespace: rook-ceph
    csi.storage.k8s.io/controller-expand-secret-name: rook-csi-rbd-provisioner
    csi.storage.k8s.io/controller-expand-secret-namespace: rook-ceph
    csi.storage.k8s.io/node-stage-secret-name: rook-csi-rbd-node
    csi.storage.k8s.io/node-stage-secret-namespace: rook-ceph

    # Specify the filesystem type of the volume. If not specified, csi-provisioner
    # will set default as `ext4`. Note that `xfs` is not recommended due to potential deadlock
    # in hyperconverged settings where the volume is mounted on the same node as the osds.
    csi.storage.k8s.io/fstype: ext4

# Delete the rbd volume when a PVC is deleted
reclaimPolicy: Delete

# Optional, if you want to add dynamic resize for PVC.
# For now only ext3, ext4, xfs resize support provided, like in Kubernetes itself.
allowVolumeExpansion: true
```

Create the new StorageClass
```
kubectl apply -f storage-class-block.yml
```
# StorageClass Usage

> [!expand-ui]- MySQL
> Create the following files
> ```yml
> apiVersion: v1
> kind: PersistentVolumeClaim
> metadata:
>   name: mysql-pv-claim
>   labels:
>     app: wordpress
> spec:
>   storageClassName: rook-ceph-block
>   accessModes:
>     - ReadWriteOnce
>   resources:
>     requests:
>       storage: 20Gi
> ```
> ```yml
> kind: Deployment
> metadata:
>   name: wordpress-mysql
>   labels:
>     app: wordpress
>     tier: mysql
> spec:
>   selector:
>     matchLabels:
>       app: wordpress
>       tier: mysql
>   strategy:
>     type: Recreate
>   template:
>     metadata:
>       labels:
>         app: wordpress
>         tier: mysql
>     spec:
>       containers:
>         - image: mysql:5.6
>           name: mysql
>           env:
>             - name: MYSQL_ROOT_PASSWORD
>               value: changeme
>           ports:
>             - containerPort: 3306
>               name: mysql
>           volumeMounts:
>             - name: mysql-persistent-storage
>               mountPath: /var/lib/mysql
>       volumes:
>         - name: mysql-persistent-storage
>           persistentVolumeClaim:
>             claimName: mysql-pv-claim
> ```
> ```yml
> apiVersion: v1
> kind: Service
> metadata:
>   name: wordpress-mysql
>   labels:
>     app: wordpress
> spec:
>   ports:
>     - port: 3306
>   selector:
>     app: wordpress
>     tier: mysql
>   clusterIP: None
> ```
>
> Create in Kubernetes cluster
> ```
> kubectl apply -f mysql-pvc.yml
> kubectl apply -f mysql-server.yml
> kubectl apply -f mysql-service.yml
> ```

> [!expand-ui]- Wordpress
> Create the following files
> ```yml
> apiVersion: v1
> kind: PersistentVolumeClaim
> metadata:
>   name: wp-pv-claim
>   labels:
>     app: wordpress
> spec:
>   storageClassName: rook-ceph-block
>   accessModes:
>     - ReadWriteOnce
>   resources:
>     requests:
>       storage: 20Gi
> ```
> ```yml
> apiVersion: apps/v1
> kind: Deployment
> metadata:
>   name: wordpress
>   labels:
>     app: wordpress
>     tier: frontend
> spec:
>   selector:
>     matchLabels:
>       app: wordpress
>       tier: frontend
>   strategy:
>     type: Recreate
>   template:
>     metadata:
>       labels:
>         app: wordpress
>         tier: frontend
>     spec:
>       containers:
>         - image: wordpress:4.6.1-apache
>           name: wordpress
>           env:
>             - name: WORDPRESS_DB_HOST
>               value: wordpress-mysql
>             - name: WORDPRESS_DB_PASSWORD
>               value: changeme
>           ports:
>             - containerPort: 80
>               name: wordpress
>           volumeMounts:
>             - name: wordpress-persistent-storage
>               mountPath: /var/www/html
>       volumes:
>         - name: wordpress-persistent-storage
>           persistentVolumeClaim:
>             claimName: wp-pv-claim
> ```
> ```yml
> apiVersion: v1
> kind: Service
> metadata:
>   name: wordpress
>   labels:
>     app: wordpress
> spec:
>   ports:
>     - port: 80
>   selector:
>     app: wordpress
>     tier: frontend
>   type: LoadBalancer
> ```
>
> Create in Kubernetes cluster
> ```
> kubectl apply -f wordpress-pvc.yml
> kubectl apply -f wordpress-server.yml
> kubectl apply -f wordpress-service-load-balancer.yml
> ```
