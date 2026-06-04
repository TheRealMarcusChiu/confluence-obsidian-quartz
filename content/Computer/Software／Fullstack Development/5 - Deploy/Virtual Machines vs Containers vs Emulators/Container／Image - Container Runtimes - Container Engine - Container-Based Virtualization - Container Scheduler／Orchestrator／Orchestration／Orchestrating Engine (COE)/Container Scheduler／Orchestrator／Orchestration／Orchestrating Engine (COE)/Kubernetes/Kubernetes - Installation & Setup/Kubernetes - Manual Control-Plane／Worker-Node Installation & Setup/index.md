---
title: "Kubernetes - Manual Control-Plane／Worker-Node Installation & Setup"
created: 2024-08-26T13:14:42.937-05:00
modified: 2024-08-26T13:20:49.177-05:00
parent: "[[Kubernetes - Installation & Setup]]"
children: []
---
Followed: [https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/)
# Ensure Hostname is Unique Across All Nodes
```
hostnamectl set-hostname UNIQUE_HOSTNAME_HERE
```
# Disable Swap
```
vim /etc/fstab
# comment out swap
```
# Enable IPv4 Forward
```
vim /etc/sysctl.conf
# Uncomment the next line to enable packet forwarding for IPv4
#net.ipv4.ip_forward=1
```

reboot
```
shutdown -r now
```
# Container Runtime Interface - Installation

> [!expand-ui]- containerd
> SKIP for some reason Kubernetes 1.31 doesn't really work with Containerd
>
> see [[Containerd - Installation]]

> [!expand-ui]- CRI-O
> see [[CRI-O - Installation Debian]]
# Install Tools
```
apt-get update
apt-get install -y apt-transport-https ca-certificates curl gpg
```
# Install Kubeadm Kubelet Kubectl
```
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl

systemctl enable --now kubelet
```
# Next Steps
- [[Kubernetes - Manual HA Cluster Setup]]
