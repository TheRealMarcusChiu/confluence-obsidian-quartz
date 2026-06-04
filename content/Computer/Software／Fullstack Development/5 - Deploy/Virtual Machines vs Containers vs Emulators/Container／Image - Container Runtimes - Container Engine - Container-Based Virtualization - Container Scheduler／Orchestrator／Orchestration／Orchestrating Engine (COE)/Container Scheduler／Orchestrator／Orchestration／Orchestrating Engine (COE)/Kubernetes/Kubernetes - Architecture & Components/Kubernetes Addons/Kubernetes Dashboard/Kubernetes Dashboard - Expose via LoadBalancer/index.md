---
title: "Kubernetes Dashboard - Expose via LoadBalancer"
created: 2024-09-04T20:14:42.511-05:00
modified: 2024-09-04T20:34:32.031-05:00
parent: "[[Kubernetes Dashboard]]"
children: []
---
Create a [[Kubernetes - Service (LoadBalancer)|Kubernetes LoadBalancer Service]] manifest file
```
---
apiVersion: v1
kind: Service
metadata:
  name: kubernetes-dashboard-lb
  namespace: kubernetes-dashboard
spec:
  type: LoadBalancer
  ports:
    - port: 443
      protocol: TCP
      targetPort: 8443
  selector:
    app.kubernetes.io/component: app
    app.kubernetes.io/instance: kubernetes-dashboard
    app.kubernetes.io/name: kong
```

Apply this manifest
```
$ kubectl apply -f k8s-dashboard-loadbalancer.yml
service/kubernetes-dashboard-lb created
```
