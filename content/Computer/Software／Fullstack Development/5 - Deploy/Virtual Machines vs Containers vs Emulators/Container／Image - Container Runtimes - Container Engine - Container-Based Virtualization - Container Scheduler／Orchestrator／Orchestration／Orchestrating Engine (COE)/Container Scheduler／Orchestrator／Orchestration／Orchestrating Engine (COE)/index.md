---
title: "Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)"
created: 2023-11-28T14:57:41.403-06:00
modified: 2025-12-18T13:49:59.608-06:00
parent: "[[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)]]"
children:
  - "[[Docker Compose vs Docker Swarm]]"
  - "[[Docker Desktop]]"
  - "[[Docker Desktop vs Portainer]]"
  - "[[Docker Swarm]]"
  - "[[Docker Swarm vs Kubernetes]]"
  - "[[Kubernetes]]"
  - "[[OpenShift]]"
  - "[[Portainer]]"
---
###### Container Scheduler/Orchestrator/Orchestration/Orchestrating Engine (COE)
````excerpt
- manage [[Container／Image - Container Runtimes - Container Engine - Container-Based Virtualization - Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|containers]] across a number of machines, allocating workloads appropriately
````
^excerpt

# Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Docker Compose]]",
        "bg": "#F4F5F7"
      },
      "- is a [[Container Scheduler／Orchestrator／Orchestration／Orchestrating Engine (COE)|container orchestration]] tool for defining and running multi-container [[Docker]] applications within a single server\n- with Compose, you use a YAML file (i.e. <code><font style=\"color: rgb(122,134,154);\">docker-compose.yml</font></code>) to configure your application's services"
    ],
    [
      {
        "content": "[[Docker Swarm]]",
        "bg": "#F4F5F7"
      },
      "- is an open-source clustering and scheduling tool for Docker containers\n- it comes with a command-line utility to manage a cluster of Docker hosts\n- it’s restricted to Docker containers, unlike Kubernetes and Mesos"
    ],
    [
      {
        "content": "[[Kubernetes]]' kube-scheduler",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[Mesos Kernel|Apache Mesos Kernel]]",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Cloud Foundry's Diego",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[Nomad](https://www.nomadproject.io/)",
        "bg": "#F4F5F7"
      },
      "- is a flexible workload orchestrator from HashiCorp to manage any containerized or non-containerized application\n- enables declarative infrastructure-as-code for deploying applications like Docker container"
    ],
    [
      {
        "content": "[OpenShift](https://www.openshift.com/)",
        "bg": "#F4F5F7"
      },
      "- is a container platform from Red Hat, orchestrated and managed by Kubernetes underneath\n- offers many features on top of what Kubernetes provides like an integrated image registry, a source-to-image build, and a native networking solution, to name a few"
    ],
    [
      {
        "content": "[[Portainer]]",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "[[Docker Desktop]]",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
# Comparisons
- [[Docker Compose vs Docker Swarm]]
- [[Docker Swarm vs Kubernetes]]
- [[Docker Desktop vs Portainer]]
