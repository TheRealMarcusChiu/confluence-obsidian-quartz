---
title: "Prometheus Operator"
created: 2025-01-19T22:56:49.142-06:00
modified: 2025-01-19T22:59:27.918-06:00
parent: "[[Prometheus]]"
children: []
---
###### Prometheus Operator
````excerpt
- creates/configures/manages [[Prometheus]] clusters atop [[Kubernetes]]
````
^excerpt

# Overview

The Prometheus Operator provides [[Kubernetes]] native deployment and management of [[Prometheus]] and related monitoring components. The purpose of this project is to simplify and automate the configuration of a Prometheus based monitoring stack for Kubernetes clusters.

The Prometheus operator includes, but is not limited to, the following features:
- <strong>Kubernetes Custom Resources</strong>: Use Kubernetes custom resources to deploy and manage Prometheus, Alertmanager, and related components.
- <strong>Simplified Deployment Configuration</strong>: Configure the fundamentals of Prometheus like versions, persistence, retention policies, and replicas from a native Kubernetes resource.
- <strong>Prometheus Target Configuration</strong>: Automatically generate monitoring target configurations based on familiar Kubernetes label queries; no need to learn a Prometheus specific configuration language.

For an introduction to the Prometheus Operator, see the [getting started](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/developer/getting-started.md) guide.
# Resources
- [https://github.com/prometheus-operator/prometheus-operator](https://github.com/prometheus-operator/prometheus-operator)
