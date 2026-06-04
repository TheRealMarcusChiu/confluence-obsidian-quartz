---
title: "Ingress (Kubernetes)"
created: 2024-09-04T16:48:01.650-05:00
modified: 2025-06-10T17:19:14.673-05:00
parent: "[[Kubernetes - Services, Load Balancing, and Networking]]"
children:
  - "[[Kubernetes - Ingress (Basic Example)]]"
  - "[[Kubernetes - Ingress (SSL Cert LetsEncrypt)]]"
  - "[[Kubernetes - Ingress (Sticky Sessions)]]"
---
###### Ingress (Kubernetes)
````excerpt
- make your HTTP (or HTTPS) network service available using a protocol-aware configuration mechanism, that understands web concepts like [[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor|URIs]], [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|hostnames]], [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|paths]], and more
- the Ingress concept lets you map traffic to different backends based on rules you define via the Kubernetes API
````
^excerpt

# Introduction
![[Ingress (Kubernetes)/ingress-kubernetes.png|500]]
# Prerequisite

You must have an [[Ingress Controllers|Ingress controller]] to satisfy an Ingress. Only creating an Ingress resource has no effect.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://kubernetes.io/docs/concepts/services-networking/ingress/](https://kubernetes.io/docs/concepts/services-networking/ingress/)
