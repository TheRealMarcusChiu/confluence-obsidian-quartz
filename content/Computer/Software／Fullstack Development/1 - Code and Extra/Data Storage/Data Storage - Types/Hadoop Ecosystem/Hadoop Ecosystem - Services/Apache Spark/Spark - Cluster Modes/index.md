---
title: "Spark - Cluster Modes"
created: 2020-05-22T22:28:12.419-05:00
modified: 2020-05-22T22:30:01.265-05:00
parent: "[[Apache Spark]]"
children: []
---
Apache Spark runs in the following cluster modes
- Local
- Standalone
- YARN
- Mesos
- Kubernetes
- Nomad

<strong>Local mode</strong> is used to run Spark applications on Operating system. This mode is useful for Spark application development and testing.

Modes like standalone, Yarn, Mesos and Kubernetes modes are distributed environment. In distributed environment, resource management is very important to manage the computing resources. So to manage computing resources in efficient way, we need good resource management system or Resource Schedular.

<strong>Standalone</strong> is good for small spark clusters, but it is not good for bigger clusters (There is an overhead of running spark daemons(master + slave) in cluster nodes). These daemons require dedicated resources. So standalone is not recommended for bigger production clusters. Standalone supports only Spark applications and it is not general purpose cluster manager. In Enterprise context where we have variety of work loads to run, spark standalone cluster manager is not a good a choice.

In case of <strong>YARN and Mesos mode</strong>, Spark runs as an application and there are no daemons overhead. So we can use either YARN or Mesos for better performance and scalability. Both YARN and Mesos are general purpose distributed resource management and they support a variety of work loads like MapReduce, Spark, Flink, Storm etc... with container orchestration. They are good for running large scale Enterprise production clusters.

In between YARN and Mesos, YARN is specially designed for Hadoop work loads whereas Mesos is designed for all kinds of work loads. YARN is application level scheduler and Mesos is OS level scheduler. it is better to use YARN if you have already running Hadoop cluster (Apache/CDH/HDP). In case of a brand new project, better to use Mesos(Apache, Mesosphere). There is also a provision to use both of them in colocated manner using Project called Apache Myriad.

<strong>Kubernetes</strong> - Open source system for automating deployment, scaling, and management of containerized applications. This mode is experimental state. So it used for running Spark applications in containerized fashion.

<strong>Nomad</strong> - It is another open source system for running Spark applications. This cluster manager is not officially supported by the Spark project as a cluster manager.
> Out of all above modes, Apache Mesos has better resource management capabilities.

Please see this link, it contains a detailed explanation from expertise about Yarn vs Mesos. [http://www.quora.com/How-does-YARN-compare-to-Mesos](http://www.quora.com/How-does-YARN-compare-to-Mesos)
