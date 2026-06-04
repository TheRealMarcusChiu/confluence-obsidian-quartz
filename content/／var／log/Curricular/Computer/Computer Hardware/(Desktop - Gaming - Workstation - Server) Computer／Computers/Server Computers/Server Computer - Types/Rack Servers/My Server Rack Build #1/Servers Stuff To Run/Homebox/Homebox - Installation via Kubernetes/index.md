---
title: "Homebox - Installation via Kubernetes"
created: 2025-06-10T16:56:10.153-05:00
modified: 2025-06-10T16:57:46.279-05:00
parent: "[[Homebox]]"
children: []
---
Here we will install [[Homebox]] via [[Kubernetes]]

Create the following workload file
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: homebox
spec:
  replicas: 2
  selector:
    matchLabels:
      app: homebox
  template:
    metadata:
      labels:
        app: homebox
    spec:
      automountServiceAccountToken: true
      dnsPolicy: ClusterFirst
      enableServiceLinks: true
      containers:
      - name: homebox
        image: ghcr.io/sysadminsmedia/homebox:0.19
        ports:
        - containerPort: 7745
        env:
        - name: HBOX_OPTIONS_ALLOW_ANALYTICS
          value: "false"
        - name: TZ
          value: "America/Chicago"
        volumeMounts:
        - mountPath: /data
          name: cephfs-homebox
      volumes:
      - name: cephfs-homebox
        persistentVolumeClaim:
          claimName: cephfs-homebox
          readOnly: false
```

Apply it
```
kubectl apply -f deployment.yml
```
