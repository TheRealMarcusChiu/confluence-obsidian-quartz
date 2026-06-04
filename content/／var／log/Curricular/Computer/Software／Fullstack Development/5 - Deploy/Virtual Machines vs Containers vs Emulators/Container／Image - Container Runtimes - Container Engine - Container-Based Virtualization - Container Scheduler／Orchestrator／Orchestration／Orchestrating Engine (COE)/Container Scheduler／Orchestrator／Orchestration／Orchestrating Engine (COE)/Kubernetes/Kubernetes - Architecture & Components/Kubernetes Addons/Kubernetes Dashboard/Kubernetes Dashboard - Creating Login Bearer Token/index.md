---
title: "Kubernetes Dashboard - Creating Login Bearer Token"
created: 2025-01-12T16:09:59.189-06:00
modified: 2025-01-12T16:37:42.027-06:00
parent: "[[Kubernetes Dashboard]]"
children: []
---
see: [https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)
# Create ServiceAccount & ClusterRoleBinding

Create a [[Kubernetes - Manifest Files|manifest file]]:
```
kind: ServiceAccount
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kubernetes-dashboard
  labels:
    k8s-app: kubernetes-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
```

Apply the manifest file
```
kubectl apply -f k8s-dashboard-serviceaccount-and-clusterrolebinding.yaml
```

This will:
- create a ServiceAccount named "kubernetes-dashboard"
- Binds subject "kubernetes-dashboard" with role ClusterRole "cluster-admin" (NOT PRODUCTION SAFE)

# Getting a Bearer Token for ServiceAccount
```
kubectl create token kubernetes-dashboard --namespace kubernetes-dashboard
```
# Getting a long-lived Bearer Token for ServiceAccount
```
apiVersion: v1
kind: Secret
metadata:
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
  annotations:
    kubernetes.io/service-account.name: "kubernetes-dashboard"   
type: kubernetes.io/service-account-token
```

Apply the manifest file
```
kubectl apply -f k8s-dashboard-serviceaccounts-secret.yaml
```

Obtain the secret Bearer Token
```
kubectl get secret kubernetes-dashboard -n kubernetes-dashboard -o jsonpath="{.data.token}" | base64 -d
```
# Delete ServiceAccount & ClusterRoleBinding
```
kubectl -n kubernetes-dashboard delete serviceaccount admin-user
kubectl -n kubernetes-dashboard delete clusterrolebinding admin-user
```
