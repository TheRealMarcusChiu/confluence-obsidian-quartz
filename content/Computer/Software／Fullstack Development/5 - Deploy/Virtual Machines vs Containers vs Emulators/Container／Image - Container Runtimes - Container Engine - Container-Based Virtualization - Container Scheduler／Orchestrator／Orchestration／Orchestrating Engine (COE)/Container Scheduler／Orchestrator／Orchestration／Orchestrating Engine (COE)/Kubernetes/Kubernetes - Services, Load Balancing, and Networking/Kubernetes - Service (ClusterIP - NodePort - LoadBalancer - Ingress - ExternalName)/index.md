---
title: "Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)"
created: 2024-08-24T12:59:03.523-05:00
modified: 2025-05-22T15:21:54.328-05:00
parent: "[[Kubernetes - Services, Load Balancing, and Networking]]"
children: []
---
###### Service
````excerpt
- is a method for exposing an application that is running as one or more Pods in the Kubernetes cluster
````
^excerpt

# Introduction

```merge-table
{
  "rows": [
    [
      {
        "content": "Bare No Service\n(not a service)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Every deployed Pod is assigned an IP address\n- The problem is whenever the nginx container gets restarted the pod IP address also changes\n- The solution is <code><font style=\"color: rgb(122,134,154);\">ClusterIP Service</font></code>\n\n> [!expand-ui]- No Service Pod Example\n> define a simple nginx deployment\n> ```yml\n> apiVersion: apps/v1\n> kind: Deployment\n> metadata:\n>   name: nginx-deployment\n> spec:\n>   selector:\n>     matchLabels:\n>       app: nginx\n>   template:\n>     metadata:\n>       labels:\n>         app: nginx\n>     spec:\n>       containers:\n>       - name: nginx\n>         image: nginx:1.14.2\n>         ports:\n>         - containerPort: 80\n> ```\n>\n> create an nginx deployment via command:\n> ```\n> kubectl apply -f nginx-deployment.yml\n> ```\n>\n> Show all pods via:\n> ```\n> > kubectl get pods -o wide\n> NAME                               READY   STATUS    RESTARTS   AGE   IP               NODE                         NOMINATED NODE   READINESS GATES\n> nginx-deployment-d556bf558-wvzll   1/1     Running   0          39m   172.16.241.132   ubuntu-server-k8s-worker-1   <none>           <none>\n> ```\n>\n> The nginx pod is assigned an IP address <code><font style=\"color: rgb(122,134,154);\">172.16.241.132</font></code>.\n>\n> We can curl it from within the k8s cluster via:\n> ```\n> curl http://172.16.241.132:80/\n> ```\n>\n> The problem is whenever the nginx container gets restarted the pod IP address also changes."
    ],
    [
      {
        "content": "ClusterIP Service Type\n\n(default service type)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- creates a <code><font style=\"color: rgb(122,134,154);\">Service</font></code> with a static internal IP that can ONLY be accessible from within the k8s cluster\n- the problem is <code><font style=\"color: rgb(122,134,154);\">ClusterIP Service</font></code> is only accessible from within the k8s cluster\n- the solution is <code><font style=\"color: rgb(122,134,154);\">NodePort Service</font></code>\n\n> [!expand-ui]- ClusterIP Service Example\n> Define a <code><font style=\"color: rgb(122,134,154);\">ClusterIP Service</font></code> via:\n> ```yml\n> apiVersion: v1\n> kind: Service\n> metadata:\n>   name: nginx-cluster-ip\n> spec:\n>   selector:\n>     app: nginx\n>   ports:\n>   - name: http\n>     port: 8888\n>     targetPort: 80\n> ```\n>\n> Create <code><font style=\"color: rgb(122,134,154);\">ClusterIP Service</font></code> via command:\n> ```\n> kubectl apply -f nginx-cluster-ip.yml\n> ```\n>\n> List all <code><font style=\"color: rgb(122,134,154);\">Services</font></code> within the k8s cluster via command:\n> ```\n> > kubectl get svc\n> NAME                  TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)          AGE\n> kubernetes            ClusterIP      10.96.0.1        <none>            443/TCP          133m\n> nginx-cluster-ip      ClusterIP      10.96.245.108    <none>            8888/TCP         48m\n> ```\n>\n> The created <code><font style=\"color: rgb(122,134,154);\">ClusterIP Service</font></code> is assigned an IP address <code><font style=\"color: rgb(122,134,154);\">10.96.245.108</font></code>.\n>\n> We can curl it from within the k8s cluster via:\n> ```\n> curl http://10.96.245.108:8888/\n> ```"
    ],
    [
      {
        "content": "NodePort Service Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- creates a Service that is accessible from outside the k8s cluster using \\<AnyNodeIP\\>:\\<NodePort\\>\n- superset of <code><font style=\"color: rgb(122,134,154);\">ClusterIP Service</font></code>\n- the problem with <code><font style=\"color: rgb(122,134,154);\">NodePort Service</font></code> is:\n\t- only ports 30000–32767 are allowed\n\t- whenever k8s cluster node is changed the IP address is also changed\n- the solution is <code><font style=\"color: rgb(122,134,154);\">LoadBalancer Service</font></code>\n\n> [!expand-ui]- NodePort Service Example\n> Define a <code><font style=\"color: rgb(122,134,154);\">NodePort Service</font></code> via:\n> ```yml\n> apiVersion: v1\n> kind: Service\n> metadata:\n>   name: nginx-node-port\n> spec:\n>   selector:\n>     app: nginx\n>   type: NodePort\n>   ports:\n>     - name: http\n>       port: 8888\n>       targetPort: 80\n>       nodePort: 30333 # allowed range of 30000-32767\n> ```\n>\n> Create <code><font style=\"color: rgb(122,134,154);\">NodePort Service</font></code> via command:\n> ```\n> kubectl apply -f nginx-node-port.yml\n> ```\n>\n> List all <code><font style=\"color: rgb(122,134,154);\">Services</font></code> within the k8s cluster via command:\n> ```\n> > kubectl get svc\n> NAME                  TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)          AGE\n> kubernetes            ClusterIP      10.96.0.1        <none>            443/TCP          142m\n> nginx-node-port       NodePort       10.106.201.133   <none>            8888:30333/TCP   53m\n> ```\n>\n> The created <code><font style=\"color: rgb(122,134,154);\">NodePort Service</font></code> is assigned an IP address <code><font style=\"color: rgb(122,134,154);\">10.106.201.133</font></code>.\n>\n> We can curl it from within the k8s cluster via:\n> ```\n> curl http://10.106.201.133:8888/\n> ```\n>\n> We can also curl it from outside the k8s cluster via\n> ```\n> curl http://ANY-CLUSTER-NODE-IP-ADDRESS:30333/\n> ```"
    ],
    [
      {
        "content": "LoadBalancer Service Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- creates an external load balancer in the current cloud (if supported) and assigns a fixed, external IP to the Service\n- superset of <code><font style=\"color: rgb(122,134,154);\">NodePort Service</font></code>\n- the problem with <code><font style=\"color: rgb(122,134,154);\">LoadBalancer Service</font></code> is:\n\t- doesn't provide filtering, routing, etc (i.e. can send HTTP, TCP, UDP, WebSockets, gRPC)\n\t- needs 1 load-balancer for EACH service\n- the solution is <code><font style=\"color: rgb(122,134,154);\">Ingress</font></code>\n\n> [!expand-ui]- LoadBalancer Service Example\n> Requires setting up a LoadBalancer:\n> - [[MetalLB - Installation & Setup]]\n>\n> Define a <code><font style=\"color: rgb(122,134,154);\">LoadBalancer Service</font></code> via:\n> ```yml\n> apiVersion: v1\n> kind: Service\n> metadata:\n>   name: nginx-load-balancer\n>   annotations:\n>     metallb.universe.tf/loadBalancerIPs: 192.168.111.101\n> spec:\n>   selector:\n>     app: nginx\n>   type: LoadBalancer\n>   ports:\n>     - name: http\n>       port: 8080\n>       targetPort: 80\n> ```\n>\n> Create the <code><font style=\"color: rgb(122,134,154);\">LoadBalancer Service</font></code> via command:\n> ```\n> kubectl apply -f nginx-load-balancer.yml\n> ```\n>\n> List all <code><font style=\"color: rgb(122,134,154);\">Services</font></code> within the k8s cluster via command:\n> ```\n> NAME                  TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)          AGE\n> kubernetes            ClusterIP      10.96.0.1        <none>            443/TCP          154m\n> nginx-load-balancer   LoadBalancer   10.109.69.52     192.168.111.101   8080:31567/TCP   34m\n> ```\n>\n> The created <code><font style=\"color: rgb(122,134,154);\">LoadBalancer Service</font></code> is assigned an IP address <code><font style=\"color: rgb(122,134,154);\">10.109.69.52</font></code>.\n>\n> We can curl it from within the k8s cluster via:\n> ```\n> curl http://10.109.69.52:8080/\n> ```\n>\n> We can also curl it from outside the k8s cluster via:\n> ```\n> curl http://ANY-CLUSTER-NODE-IP-ADDRESS:31567/\n> ```\n>\n> or the LoadBalancer way:\n> ```\n> curl http://192.168.111.101:8080/\n> ```"
    ],
    [
      {
        "content": "[[Ingress (Kubernetes)|Ingress]]\n\n(not a service)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is not a real service\n- allows path-based and sub-domain routing\n- only need to maintain 1 load-balancer for multiple services\n- most complicated\n\n> [!expand-ui]- Ingress Example\n> Requires an [[Ingress Controllers|Ingress Controller]]:\n> - I use [[Ingress-Nginx Controller]]"
    ],
    [
      {
        "content": "ExternalName\n\n(not a service)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Maps the Service to the contents of the externalName field (e.g. [foo.bar.example.com](http://foo.bar.example.com)), by returning a CNAME record with its value\n- No proxying of any kind is set up\n- This type requires v1.7 or higher of kube-dns, or [[CoreDNS]] version 0.0.8 or higher\n\n> [!expand-ui]- ExternalName Example\n> TODO"
    ]
  ]
}
```
# Resources
- [https://kubernetes.io/docs/concepts/services-networking/service/](https://kubernetes.io/docs/concepts/services-networking/service/)
