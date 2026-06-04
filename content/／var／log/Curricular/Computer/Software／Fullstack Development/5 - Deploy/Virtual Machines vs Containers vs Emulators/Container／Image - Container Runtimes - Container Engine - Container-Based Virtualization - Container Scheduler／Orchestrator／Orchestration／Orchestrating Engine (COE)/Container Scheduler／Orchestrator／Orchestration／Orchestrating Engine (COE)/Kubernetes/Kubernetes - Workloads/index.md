---
title: "Kubernetes - Workloads"
created: 2024-08-24T12:14:55.462-05:00
modified: 2025-05-24T01:30:10.593-05:00
parent: "[[Kubernetes]]"
children:
  - "[[Kubernetes - Deployment]]"
---
###### Workloads
````excerpt
- a workload is an application running on [[Kubernetes]]
- on Kubernetes you run it inside a set of [[Kubernetes Pod／Pods|pods]]
````
^excerpt

# Workload - Types
- <strong>[Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)</strong> and <strong>[ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)</strong> (replacing the legacy resource [ReplicationController](https://kubernetes.io/docs/reference/glossary/?all=true#term-replication-controller)). Deployment is a good fit for managing a stateless application workload on your cluster, where any Pod in the Deployment is interchangeable and can be replaced if needed.
- <strong>[StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)</strong> lets you run one or more related Pods that do track state somehow. For example, if your workload records data persistently, you can run a StatefulSet that matches each Pod with a [PersistentVolume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/). Your code, running in the Pods for that StatefulSet, can replicate data to other Pods in the same StatefulSet to improve overall resilience.
- <strong>[DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)</strong> defines Pods that provide facilities that are local to nodes. Every time you add a node to your cluster that matches the specification in a DaemonSet, the control plane schedules a Pod for that DaemonSet onto the new node. Each pod in a DaemonSet performs a job similar to a system daemon on a classic Unix / POSIX server. A DaemonSet might be fundamental to the operation of your cluster, such as a plugin to run [cluster networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/#how-to-implement-the-kubernetes-network-model), it might help you to manage the node, or it could provide optional behavior that enhances the container platform you are running.
- <strong>[Job](https://kubernetes.io/docs/concepts/workloads/controllers/job/)</strong> and <strong>[CronJob](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)</strong> provide different ways to define tasks that run to completion and then stop. You can use a [Job](https://kubernetes.io/docs/concepts/workloads/controllers/job/) to define a task that runs to completion, just once. You can use a [CronJob](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/) to run the same Job multiple times according a schedule.

# Workload - Types Tutorials
- [Run a stateless application using a Deployment](https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/)
- Run a stateful application either as a [single instance](https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/) or as a [replicated set](https://kubernetes.io/docs/tasks/run-application/run-replicated-stateful-application/)
- [Run automated tasks with a CronJob](https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/)
