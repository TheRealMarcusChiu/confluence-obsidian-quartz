---
title: "Kube-router"
created: 2024-08-23T20:08:29.543-05:00
modified: 2025-05-18T16:15:35.416-05:00
parent: "[[Kubernetes Container Network Interface (CNI)]]"
children: []
---
###### Kube-router
````excerpt
- implements the [[Kubernetes Container Network Interface (CNI)]]
- is a turnkey solution for Kubernetes networking with aim to provide operational simplicity. Networking is hard as such. In typical Kubernetes cluster you would need to install multiple network components for various functionality. With many moving parts it makes Kubernetes networking even harder.
- be it the use of IPVS/LVS for service proxy or the use of direct routing across the nodes for pod networking etc.
- Kube-router is also a purpose built solution for Kubernetes so no additional overhead to support other orchestration platforms and natively integrates with out-of-box functionality provided by Kubernetes and CNI plug-ins for IPAM, pod networking etc.
- Also one of the key design tenet of Kube-router is to use standard Linux networking stack and toolset. There is no overlays or SDN pixie dust, but just plain good old Linux networking. So its lot leaner.
````
^excerpt
