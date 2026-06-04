---
title: "Spark - Installation & Setup"
created: 2020-05-23T17:13:58.004-05:00
modified: 2020-05-28T12:15:53.566-05:00
parent: "[[Apache Spark]]"
children:
  - "[[Spark - Standalone]]"
---
based on: [https://spark.apache.org/docs/](https://spark.apache.org/docs/)

recommended prerequisite installs (as of May 2020):
- Java 8
- Python 3.4
- R 3.1
- Scala 2.12.\*
- Hadoop 3.2+

### Download/Install

download binary at [https://spark.apache.org/downloads.html](https://spark.apache.org/downloads.html)
```
wget https://www.apache.org/dyn/closer.lua/spark/spark-3.0.0-preview2/spark-3.0.0-preview2-bin-hadoop3.2.tgz
```
```
tar xzf spark-3.0.0-preview2-bin-hadoop3.2.tgz
```
### Setup PATH (optional)

> [!expand]- Click here to expand...
> edit \~/.bashrc and append the following lines
> ```
> export SPARK_HOME=/somewhere/spark-3.0.0-preview2-bin-hadoop3.2
> export PATH=$PATH:$SPARK_HOME/bin
> export PATH=$PATH:$SPARK_HOME/sbin
> ```
### Running Spark Interactively/Programmatically

see: [[Spark - Context Initialization]]
### Using Spark-Submit

> [!expand]- Click here to expand...
> Example applications are also provided in Python. For example,
> ```
> ./bin/spark-submit examples/src/main/python/pi.py 10
> ```
>
> Example applications are also provided in R. For example,
> ```
> ./bin/spark-submit examples/src/main/r/dataframe.R
> ```
### Launching on a Cluster

The Spark [cluster mode overview](https://spark.apache.org/docs/3.0.0-preview2/cluster-overview.html) explains the key concepts in running on a cluster. Spark can run both by itself, or over several existing cluster managers. It currently provides several options for deployment:
- [Standalone Deploy Mode](https://spark.apache.org/docs/3.0.0-preview2/spark-standalone.html): simplest way to deploy Spark on a private cluster
- [Apache Mesos](https://spark.apache.org/docs/3.0.0-preview2/running-on-mesos.html)
- [Hadoop YARN](https://spark.apache.org/docs/3.0.0-preview2/running-on-yarn.html)
- [Kubernetes](https://spark.apache.org/docs/3.0.0-preview2/running-on-kubernetes.html)
