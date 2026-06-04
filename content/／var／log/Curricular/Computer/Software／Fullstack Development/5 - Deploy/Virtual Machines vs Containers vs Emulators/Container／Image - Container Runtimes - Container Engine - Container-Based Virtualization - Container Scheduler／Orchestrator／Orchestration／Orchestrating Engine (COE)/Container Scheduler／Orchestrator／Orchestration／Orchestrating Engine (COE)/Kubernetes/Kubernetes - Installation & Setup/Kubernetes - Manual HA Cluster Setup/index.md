---
title: "Kubernetes - Manual HA Cluster Setup"
created: 2024-08-25T22:37:59.336-05:00
modified: 2025-05-22T12:40:34.908-05:00
parent: "[[Kubernetes - Installation & Setup]]"
children: []
---
# Install Prerequisites
- [[Kubernetes - Manual Control-Plane／Worker-Node Installation & Setup|Kubernetes - Manual Control-Plane/Worker-Node Installation & Setup]]

# Start First [[Kubernetes Control Plane Component|Control Plane]]

Replace <code><font style="color: rgb(122,134,154);">--control-plane-endpoint</font></code> with actual endpoint
```
kubeadm init --control-plane-endpoint "k8s-control.pve1.lan:6443" --upload-certs --cri-socket=unix:///var/run/crio/crio.sock
```

output
```
I0522 17:36:06.472955    1101 version.go:261] remote version is much newer: v1.33.1; falling back to: stable-1.31
[init] Using Kubernetes version: v1.31.9
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action beforehand using 'kubeadm config images pull'
W0522 17:36:06.861877    1101 checks.go:846] detected that the sandbox image "registry.k8s.io/pause:3.9" of the container runtime is inconsistent with that used by kubeadm.It is recommended to use "registry.k8s.io/pause:3.10" as the CRI sandbox image.
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [k8s-control.pve1.lan kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local ubuntu-server-k8s-control-1] and IPs [10.96.0.1 192.168.111.91]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [localhost ubuntu-server-k8s-control-1] and IPs [192.168.111.91 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [localhost ubuntu-server-k8s-control-1] and IPs [192.168.111.91 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "super-admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests"
[kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
[kubelet-check] The kubelet is healthy after 501.391222ms
[api-check] Waiting for a healthy API server. This can take up to 4m0s
[api-check] The API server is healthy after 5.001159554s
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
[upload-certs] Using certificate key:
9ed5ccf5932d2f28b5170b210be69935a54088d149b94c222ab5ee2bee27d3bc
[mark-control-plane] Marking the node ubuntu-server-k8s-control-1 as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
[mark-control-plane] Marking the node ubuntu-server-k8s-control-1 as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
[bootstrap-token] Using token: vo8v1g.x0mo3351gfnduc9t
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now join any number of the control-plane node running the following command on each as root:

  kubeadm join k8s-control.pve1.lan:6443 --token vo8v1g.x0mo3351gfnduc9t \
	--discovery-token-ca-cert-hash sha256:ed15b7fca732839fd595a8927234520cb9b70f35d58687434a4cbb07b30a9473 \
	--control-plane --certificate-key 9ed5ccf5932d2f28b5170b210be69935a54088d149b94c222ab5ee2bee27d3bc

Please note that the certificate-key gives access to cluster sensitive data, keep it secret!
As a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use
"kubeadm init phase upload-certs --upload-certs" to reload certs afterward.

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join k8s-control.pve1.lan:6443 --token vo8v1g.x0mo3351gfnduc9t \
	--discovery-token-ca-cert-hash sha256:ed15b7fca732839fd595a8927234520cb9b70f35d58687434a4cbb07b30a9473
```
# If Root User

Execute the following (if not see output above):
```
export KUBECONFIG=/etc/kubernetes/admin.conf
```
# Install Pod Network (i.e. [[Kubernetes Container Network Interface (CNI)|Container Network Interface]])

> [!expand-ui]- Calico
> We will be installing the calico pod network (there are other pod networks / [[Kubernetes Container Network Interface (CNI)|Container Network Interface]])
> - see [[Calico]]
# Test
```
> kubectl get nodes
NAME                             STATUS   ROLES           AGE   VERSION
pve1-ubuntu-server-k8s-control   Ready    control-plane   28m   v1.31.0
```

<strong><font style="color: rgb(255,0,0);">Wait till status is Ready!</font></strong>
# Joining New Control Planes
```
kubeadm join k8s-control.pve1.lan:6443 --token vo8v1g.x0mo3351gfnduc9t \
	--discovery-token-ca-cert-hash sha256:ed15b7fca732839fd595a8927234520cb9b70f35d58687434a4cbb07b30a9473 \
	--control-plane --certificate-key 9ed5ccf5932d2f28b5170b210be69935a54088d149b94c222ab5ee2bee27d3bc
```

output

> [!expand]- Click here to expand...
> ```
> [preflight] Running pre-flight checks
> [preflight] Reading configuration from the cluster...
> [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
> [preflight] Running pre-flight checks before initializing the new control plane instance
> [preflight] Pulling images required for setting up a Kubernetes cluster
> [preflight] This might take a minute or two, depending on the speed of your internet connection
> [preflight] You can also perform this action beforehand using 'kubeadm config images pull'
> W0522 17:39:23.698643    1263 checks.go:846] detected that the sandbox image "registry.k8s.io/pause:3.9" of the container runtime is inconsistent with that used by kubeadm.It is recommended to use "registry.k8s.io/pause:3.10" as the CRI sandbox image.
> [download-certs] Downloading the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
> [download-certs] Saving the certificates to the folder: "/etc/kubernetes/pki"
> [certs] Using certificateDir folder "/etc/kubernetes/pki"
> [certs] Generating "apiserver" certificate and key
> [certs] apiserver serving cert is signed for DNS names [k8s-control.pve1.lan kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local ubuntu-server-k8s-control-2] and IPs [10.96.0.1 192.168.111.81]
> [certs] Generating "apiserver-kubelet-client" certificate and key
> [certs] Generating "front-proxy-client" certificate and key
> [certs] Generating "etcd/peer" certificate and key
> [certs] etcd/peer serving cert is signed for DNS names [localhost ubuntu-server-k8s-control-2] and IPs [192.168.111.81 127.0.0.1 ::1]
> [certs] Generating "etcd/server" certificate and key
> [certs] etcd/server serving cert is signed for DNS names [localhost ubuntu-server-k8s-control-2] and IPs [192.168.111.81 127.0.0.1 ::1]
> [certs] Generating "etcd/healthcheck-client" certificate and key
> [certs] Generating "apiserver-etcd-client" certificate and key
> [certs] Valid certificates and keys now exist in "/etc/kubernetes/pki"
> [certs] Using the existing "sa" key
> [kubeconfig] Generating kubeconfig files
> [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
> [kubeconfig] Writing "admin.conf" kubeconfig file
> [kubeconfig] Writing "controller-manager.conf" kubeconfig file
> [kubeconfig] Writing "scheduler.conf" kubeconfig file
> [control-plane] Using manifest folder "/etc/kubernetes/manifests"
> [control-plane] Creating static Pod manifest for "kube-apiserver"
> [control-plane] Creating static Pod manifest for "kube-controller-manager"
> [control-plane] Creating static Pod manifest for "kube-scheduler"
> [check-etcd] Checking that the etcd cluster is healthy
> [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
> [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
> [kubelet-start] Starting the kubelet
> [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
> [kubelet-check] The kubelet is healthy after 500.689331ms
> [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
> [etcd] Announced new etcd member joining to the existing etcd cluster
> [etcd] Creating static Pod manifest for "etcd"
> {"level":"warn","ts":"2025-05-22T17:39:46.403842Z","logger":"etcd-client","caller":"v3@v3.5.14/retry_interceptor.go:63","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc0006041e0/192.168.111.91:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
> {"level":"warn","ts":"2025-05-22T17:39:46.904786Z","logger":"etcd-client","caller":"v3@v3.5.14/retry_interceptor.go:63","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc0006041e0/192.168.111.91:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
> {"level":"warn","ts":"2025-05-22T17:39:47.405335Z","logger":"etcd-client","caller":"v3@v3.5.14/retry_interceptor.go:63","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc0006041e0/192.168.111.91:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
> {"level":"warn","ts":"2025-05-22T17:39:47.904864Z","logger":"etcd-client","caller":"v3@v3.5.14/retry_interceptor.go:63","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc0006041e0/192.168.111.91:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
> {"level":"warn","ts":"2025-05-22T17:39:48.405013Z","logger":"etcd-client","caller":"v3@v3.5.14/retry_interceptor.go:63","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc0006041e0/192.168.111.91:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
> {"level":"warn","ts":"2025-05-22T17:39:48.9052Z","logger":"etcd-client","caller":"v3@v3.5.14/retry_interceptor.go:63","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc0006041e0/192.168.111.91:2379","attempt":0,"error":"rpc error: code = Unavailable desc = etcdserver: rpc not supported for learner"}
> [etcd] Waiting for the new etcd member to join the cluster. This can take up to 40s
> [mark-control-plane] Marking the node ubuntu-server-k8s-control-2 as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
> [mark-control-plane] Marking the node ubuntu-server-k8s-control-2 as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
>
> This node has joined the cluster and a new control plane instance was created:
>
> * Certificate signing request was sent to apiserver and approval was received.
> * The Kubelet was informed of the new secure connection details.
> * Control plane label and taint were applied to the new node.
> * The Kubernetes control plane instances scaled up.
> * A new etcd member was added to the local/stacked etcd cluster.
>
> To start administering your cluster from this node, you need to run the following as a regular user:
>
> 	mkdir -p $HOME/.kube
> 	sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
> 	sudo chown $(id -u):$(id -g) $HOME/.kube/config
>
> Run 'kubectl get nodes' to see this node join the cluster.
> ```

If any of the control-planes are not labelled control-plane like below
```
> kubectl get nodes
NAME                          STATUS   ROLES           AGE     VERSION
ubuntu-server-k8s-control-1   Ready    control-plane   23m     v1.31.9
ubuntu-server-k8s-control-2   Ready    control-plane   10m     v1.31.9
ubuntu-server-k8s-control-3   Ready    <none>          4m53s   v1.31.9
```

Then execute the following
```
kubectl label node NODE_NAME_HERE node-role.kubernetes.io/control-plane=true
```
# Joining New Workers
```
kubeadm join k8s-control.pve1.lan:6443 --token vo8v1g.x0mo3351gfnduc9t \
	--discovery-token-ca-cert-hash sha256:ed15b7fca732839fd595a8927234520cb9b70f35d58687434a4cbb07b30a9473
```

In a control plane node label the newly joined worker as a worker
```
kubectl label node NODE_NAME_HERE node-role.kubernetes.io/worker=worker
```
