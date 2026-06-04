---
title: "Kubernetes - PersistentVolume (PV) and PersistentVolumeClaim (PVC) Example"
created: 2025-01-12T21:03:12.471-06:00
modified: 2025-01-12T21:29:31.658-06:00
parent: "[[Kubernetes - Storage]]"
children: []
---
# Lifecycle of PV and PVC

In a Kubernetes cluster, a PV exists as a storage resource in the cluster. PVCs are requests for those resources and also act as claim checks to the resource. The interaction between PVs and PVCs follows this lifecycle:
1. <strong>Provisioning</strong> - the creation of the PV, either directly (static) or dynamically using StorageClass.
2. <strong>Binding</strong> - assigning the PV to the PVC.
3. <strong>Using</strong> - Pods use the volume through the PVC.
4. <strong>Reclaiming</strong> - the PV is reclaimed, either by keeping it for the next use or by deleting it directly from the cloud storage.

A volume will be in one of the following states:
- <strong>Available</strong> - this state shows that the PV is ready to be used by the PVC.
- <strong>Bound</strong> - this state shows that the PV has been assigned to a PVC.
- <strong>Released</strong> - the claim has been deleted, but the cluster has not yet reclaimed the resource.
- <strong>Failed</strong> - this state shows that an error has occurred in the PV.

# 1. Provisioning - Create a PersistentVolume
```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-example-01
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
```
```
kubectl apply -f pv.yaml
```

This will create a "manual" PersistentVolume of size 10Gi under directory <code><font style="color: rgb(122,134,154);">/mnt/data</font></code> on the Kubernetes [[Kubernetes Worker Node Component|WORKER NODE]] that ends up mounting this.

This PersistentVolume's name is "pv-example-01".

This PersistentVolume accessMode is [[Kubernetes - Storage - AccessModes (ReadOnlyMany (ROX) - ReadWriteMany (RWX) - ReadWriteOnce (RWO) - ReadWriteOncePod (RWOP))|ReadWriteOnce]], which allows multiple pods in the same WORKER NODE to use this volume.
```
> kubectl get pv
NAME            CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                    STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
pv-example-01   10Gi       RWO            Retain           Bound    default/pvc-example-01   manual         <unset>                          126m
```
# 2. Binding - Create a PersistentVolumeClaim
```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-example-01
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
```
```
kubectl apply -f pvc.yaml
```

This creates a PersistentVolumeClaim named "pvc-example-01". It will try to find a suitable PersistentVolume of at least 3Gi.

This should end up claiming PersistentVolume "pv-example-01".
```
> kubectl get pvc
NAME             STATUS   VOLUME          CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
pvc-example-01   Bound    pv-example-01   10Gi       RWO            manual         <unset>                 125m
```
# 3. Using - Create a Pod Using PersistentVolumeClaim
```
apiVersion: v1
kind: Pod
metadata:
  name: pv-pod
spec:
  volumes:
    - name: pv-name-here
      persistentVolumeClaim:
        claimName: pvc-example-01
  containers:
    - name: pv-container
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: pv-name-here
```
```
kubectl apply -f pod.yaml
```

This creates a container where it's mountPath "/usr/share/nginx/html" is connected to the worker node's hostPath "/mnt/data".
```
> kubectl exec -it pv-pod -- /bin/bash
cd /usr/share/nginx/html
# make some changes and see it reflect in worker node
```

Check which worker node the pod was deployed to. In this case it's "pve2-ubuntu-server-k8s-worker"
```
> kc get pods -o wide
NAME     READY   STATUS    RESTARTS   AGE     IP               NODE                            NOMINATED NODE   READINESS GATES
pv-pod   1/1     Running   1          126m    172.17.248.177   pve2-ubuntu-server-k8s-worker   <none>           <none>
```

ssh into worker node "pve2-ubuntu-server-k8s-worker"
```
> ssh pve2-ubuntu-server-k8s-worker
cd /mnt/data
# check changes reflected here
```
