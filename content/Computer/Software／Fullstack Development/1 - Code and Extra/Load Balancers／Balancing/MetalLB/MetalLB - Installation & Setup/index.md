---
title: "MetalLB - Installation & Setup"
created: 2024-08-28T10:55:00.652-05:00
modified: 2024-09-04T16:18:14.100-05:00
parent: "[[MetalLB]]"
children: []
---
see: [https://metallb.io/installation/](https://metallb.io/installation/)
# Preparation

Enable strict ARP mode
```
kubectl edit configmap -n kube-system kube-proxy
```

and set:
```
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: "ipvs"
ipvs:
  strictARP: true
```
# Installation by Manifest
```
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.14.8/config/manifests/metallb-native.yaml
```
# Layer 2 Configuration

Create 2 manifest files:
```
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: my-ip-address-pool-1
  namespace: metallb-system
spec:
  addresses:
  - 192.168.111.240-192.168.111.250
```
```
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: my-l2-advertisement-1
  namespace: metallb-system
```

Now apply both manifests:
```
> kubectl apply -f my-ip-address-pool-1.yaml
ipaddresspool.metallb.io/my-ip-address-pool-1 created
> kubectl apply -f my-l2-advertisement-1.yaml
l2advertisement.metallb.io/my-l2-advertisement-1 created
```
# Usage
- see [https://metallb.io/usage/](https://metallb.io/usage/)

requesting specific IPs
```
apiVersion: v1
kind: Service
metadata:
  name: nginx
  annotations:
    metallb.universe.tf/loadBalancerIPs: 192.168.1.100
spec:
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```
