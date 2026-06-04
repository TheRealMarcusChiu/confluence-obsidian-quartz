---
title: "Terraform - Kubernetes - Typhoon"
created: 2024-08-28T11:01:12.655-05:00
modified: 2024-08-28T12:03:39.641-05:00
parent: "[[Terraform]]"
children: []
---
###### Typhoon
````excerpt
- minimal and free [[Kubernetes]] distribution with [[Terraform]]
````
^excerpt

# Usage

Define a Kubernetes cluster by using the Terraform module for your chosen platform and operating system. Here's a minimal example:
```
module "yavin" {
  source = "git::https://github.com/poseidon/typhoon//google-cloud/fedora-coreos/kubernetes?ref=v1.31.0"

  # Google Cloud
  cluster_name  = "yavin"
  region        = "us-central1"
  dns_zone      = "example.com"
  dns_zone_name = "example-zone"

  # configuration
  ssh_authorized_key = "ssh-ed25519 AAAAB3Nz..."

  # optional
  worker_count = 2
  worker_preemptible = true
}

# Obtain cluster kubeconfig
resource "local_file" "kubeconfig-yavin" {
  content  = module.yavin.kubeconfig-admin
  filename = "/home/user/.kube/configs/yavin-config"
}
```

Initialize modules, plan the changes to be made, and apply the changes.
```
$ terraform init
$ terraform plan
Plan: 62 to add, 0 to change, 0 to destroy.
$ terraform apply
Apply complete! Resources: 62 added, 0 changed, 0 destroyed.
```

In 4-8 minutes (varies by platform), the cluster will be ready. This Google Cloud example creates a <code><font style="color: rgb(122,134,154);">yavin.example.com</font></code> DNS record to resolve to a network load balancer across controller nodes.
```
$ export KUBECONFIG=/home/user/.kube/configs/yavin-config
$ kubectl get nodes
NAME                                       ROLES    STATUS  AGE  VERSION
yavin-controller-0.c.example-com.internal  <none>   Ready   6m   v1.31.0
yavin-worker-jrbf.c.example-com.internal   <none>   Ready   5m   v1.31.0
yavin-worker-mzdm.c.example-com.internal   <none>   Ready   5m   v1.31.0
```

List the pods.
```
$ kubectl get pods --all-namespaces
NAMESPACE     NAME                                      READY  STATUS    RESTARTS  AGE
kube-system   cilium-1cs8z                              1/1    Running   0         6m
kube-system   cilium-d1l5b                              1/1    Running   0         6m
kube-system   cilium-sp9ps                              1/1    Running   0         6m
kube-system   cilium-operator-68d778b448-g744f          1/1    Running   0         6m
kube-system   coredns-1187388186-zj5dl                  1/1    Running   0         6m
kube-system   coredns-1187388186-dkh3o                  1/1    Running   0         6m
kube-system   kube-apiserver-controller-0               1/1    Running   0         6m
kube-system   kube-controller-manager-controller-0      1/1    Running   0         6m
kube-system   kube-proxy-117v6                          1/1    Running   0         6m
kube-system   kube-proxy-9886n                          1/1    Running   0         6m
kube-system   kube-proxy-njn47                          1/1    Running   0         6m
kube-system   kube-scheduler-controller-0               1/1    Running   0         6m
```
# Resources
- [https://github.com/poseidon/typhoon](https://github.com/poseidon/typhoon)
