---
title: "Kubernetes - Services, Load Balancing, and Networking"
created: 2024-08-24T12:42:42.862-05:00
modified: 2024-09-08T14:27:19.372-05:00
parent: "[[Kubernetes]]"
children:
  - "[[Ingress (Kubernetes)]]"
  - "[[Ingress Controllers]]"
  - "[[Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Kubernetes - Service (ClusterIP - NodePort - LoadBalancer - Ingress - ExternalName)|Service]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- exposes an application running in your cluster behind a single outward-facing endpoint, even when the workload is split across multiple backends"
    ],
    [
      {
        "content": "[[Ingress (Kubernetes)|Ingress]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- makes your HTTP (or HTTPS) network service available using a protocol-aware configuration mechanism, that understands web concepts like URIs, hostnames, paths, and more\n- the Ingress concept lets you map traffic to different backends based on rules you define via the Kubernetes API."
    ],
    [
      {
        "content": "[[Ingress Controllers]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- In order for an [[Ingress (Kubernetes)|Ingress]] to work in your cluster, there must be an <em>ingress controller</em> running. You need to select at least one ingress controller and make sure it is set up in your cluster. This page lists common ingress controllers that you can deploy."
    ],
    [
      {
        "content": "[Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing."
    ],
    [
      {
        "content": "[EndpointSlices](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- The EndpointSlice API is the mechanism that Kubernetes uses to let your Service scale to handle large numbers of backends, and allows the cluster to update its list of healthy backends efficiently."
    ],
    [
      {
        "content": "[Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- If you want to control traffic flow at the IP address or port level (OSI layer 3 or 4), NetworkPolicies allow you to specify rules for traffic flow within your cluster, and also between Pods and the outside world. Your cluster must use a network plugin that supports NetworkPolicy enforcement."
    ],
    [
      {
        "content": "[DNS for Services and Pods](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Your workload can discover Services within your cluster using DNS; this page explains how that works."
    ],
    [
      {
        "content": "[IPv4/IPv6 dual-stack](https://kubernetes.io/docs/concepts/services-networking/dual-stack/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- Kubernetes lets you configure single-stack IPv4 networking, single-stack IPv6 networking, or dual stack networking with both network families active. This page explains how."
    ],
    [
      {
        "content": "[Topology Aware Routing](https://kubernetes.io/docs/concepts/services-networking/topology-aware-routing/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- provides a mechanism to help keep network traffic within the zone where it originated\n- preferring same-zone traffic between Pods in your cluster can help with reliability, performance (network latency and throughput), or cost."
    ],
    [
      {
        "content": "[Networking on Windows](https://kubernetes.io/docs/concepts/services-networking/windows-networking/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- TODO"
    ],
    [
      {
        "content": "[Service ClusterIP allocation](https://kubernetes.io/docs/concepts/services-networking/cluster-ip-allocation/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- TODO"
    ],
    [
      {
        "content": "[Service Internal Traffic Policy](https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- If two Pods in your cluster want to communicate, and both Pods are actually running on the same node, use <em>Service Internal Traffic Policy</em> to keep network traffic within that node. Avoiding a round trip via the cluster network can help with reliability, performance (network latency and throughput), or cost."
    ]
  ]
}
```
