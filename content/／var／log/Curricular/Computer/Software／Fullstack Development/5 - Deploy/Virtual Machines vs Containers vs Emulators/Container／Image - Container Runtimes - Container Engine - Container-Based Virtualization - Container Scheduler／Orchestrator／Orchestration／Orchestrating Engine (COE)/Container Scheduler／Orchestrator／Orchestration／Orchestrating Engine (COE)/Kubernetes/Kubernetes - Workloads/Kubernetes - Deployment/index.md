---
title: "Kubernetes - Deployment"
created: 2024-08-26T11:57:36.775-05:00
modified: 2024-08-26T12:01:09.759-05:00
parent: "[[Kubernetes - Workloads]]"
children: []
---
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app.kubernetes.io/name: my-nginx-label
spec:
  replicas: 3
  selector:
    matchLabels:
      app.kubernetes.io/name: my-nginx-label
  template:
    metadata:
      labels:
        app.kubernetes.io/name: my-nginx-label
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```
```
kubectl apply -f nginx-deployment.yaml
```
