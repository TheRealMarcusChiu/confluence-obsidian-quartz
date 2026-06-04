---
title: "Rook - Ceph Dashboard"
created: 2025-05-22T22:49:25.782-05:00
modified: 2025-05-22T23:03:45.439-05:00
parent: "[[Rook (Kubernetes)]]"
children: []
---
Based on: [https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-dashboard/](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-dashboard/)
# Enable the Ceph Dashboard

The [dashboard](https://docs.ceph.com/en/latest/mgr/dashboard/) can be enabled with settings in the CephCluster CRD. The CephCluster CRD must have the dashboard <code>enabled</code> setting set to <code><font style="color: rgb(122,134,154);">true</font></code>. This is the default setting in the example manifests.
```
[...]
spec:
  dashboard:
    enabled: true
```

The Rook operator will enable the ceph-mgr dashboard module. A service object will be created to expose that port inside the Kubernetes cluster. Rook will enable port 8443 for https access.

This example shows that port 8443 was configured.
```
$ kubectl -n rook-ceph get service
NAME                         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
rook-ceph-mgr                ClusterIP   10.108.111.192   <none>        9283/TCP         3h
rook-ceph-mgr-dashboard      ClusterIP   10.110.113.240   <none>        8443/TCP         3h
```

The first service is for reporting the [Prometheus metrics](https://rook.github.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-monitoring/), while the latter service is for the dashboard. If you are on a node in the cluster, you will be able to connect to the dashboard by using either the DNS name of the service at <code><font style="color: rgb(122,134,154);">https://rook-ceph-mgr-dashboard-https:8443</font></code> or by connecting to the cluster IP, in this example at <code><font style="color: rgb(122,134,154);">https://10.110.113.240:8443</font></code>.
# Load Balancer

If you have a cluster on a cloud provider that supports load balancers (see: [[MetalLB]]), you can create a service that is provisioned with a public hostname.

Define the LoadBalancer Service:
```yml
apiVersion: v1
kind: Service
metadata:
  name: rook-ceph-mgr-dashboard-loadbalancer
  namespace: rook-ceph
  labels:
    app: rook-ceph-mgr
    rook_cluster: rook-ceph
spec:
  ports:
  - name: dashboard
    port: 443
    protocol: TCP
    targetPort: 8443
  selector:
    app: rook-ceph-mgr
    rook_cluster: rook-ceph
    mgr_role: active
  sessionAffinity: None
  type: LoadBalancer
```

Create the [[Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)|LoadBalancer Service]]:
```
kubectl apply -f rook-ceph-dashboard-loadbalancer.yml
```

You will see the new service <code><font style="color: rgb(122,134,154);">rook-ceph-mgr-dashboard-loadbalancer</font></code> created:
```
$ kubectl -n rook-ceph get service
NAME                                     TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)             AGE
rook-ceph-mgr                            ClusterIP      172.30.11.40     <none>            9283/TCP            4h
rook-ceph-mgr-dashboard                  ClusterIP      172.30.203.185   <none>            8443/TCP            4h
rook-ceph-mgr-dashboard-loadbalancer     LoadBalancer   172.30.27.242    192.168.111.101   8443:32747/TCP      4h
```

Now you can enter the URL <code><font style="color: rgb(122,134,154);">https://192.168.111.101/</font></code>.
# Login Credentials
After you connect to the dashboard you will need to login for secure access. Rook creates a default user named <code><font style="color: rgb(122,134,154);">admin</font></code> and generates a secret called <code><font style="color: rgb(122,134,154);">rook-ceph-dashboard-password</font></code> in the namespace where the Rook Ceph cluster is running. To retrieve the generated password, you can run the following
```
kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o jsonpath="{['data']['password']}" | base64 --decode && echo
```
