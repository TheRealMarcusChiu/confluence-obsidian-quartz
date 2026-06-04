---
title: "Kubernetes - Ingress (Basic Example)"
created: 2025-06-10T17:19:16.496-05:00
modified: 2025-06-10T17:20:00.812-05:00
parent: "[[Ingress (Kubernetes)]]"
children: []
---
Create the following files
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-app
  labels:
    app: example
spec:
  replicas: 2
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
      - name: example-app
        image: hashicorp/http-echo
        args:
        - "-text=Hello from Kubernetes"
        ports:
        - containerPort: 5678
```
```yml
apiVersion: v1
kind: Service
metadata:
  name: example-service
spec:
  selector:
    app: example
  ports:
    - protocol: TCP
      port: 80
      targetPort: 5678
  type: ClusterIP
```
```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: test.devopslearnwith.us
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: example-service
            port:
              number: 80
```

Create in Kubernetes cluster via
```
kubectl apply -f deployment.yml
kubectl apply -f service.yml
kubectl apply -f ingress.yml
```

Get EXTERNAL IP of Ingress Controller
```
$ kubectl get svc -n ingress-nginx
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.111.167.128   192.168.111.100   80:32738/TCP,443:30823/TCP   3d6h
```

In this case, it's <code><font style="color: rgb(122,134,154);">192.168.111.100</font></code>.

Add <code><font style="color: rgb(122,134,154);">192.168.111.100</font></code> into DNS as an A record bounded to <code><font style="color: rgb(122,134,154);">[test.devopslearnwith.us](http://test.devopslearnwith.us)</font></code>.

Open [http://test.devopslearnwith.us](http://test.devopslearnwith.us) in browser.
