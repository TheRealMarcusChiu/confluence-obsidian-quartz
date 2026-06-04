---
title: "Pig - Run Modes"
created: 2020-05-21T00:29:06.358-05:00
modified: 2020-05-21T00:30:32.040-05:00
parent: "[[Pig]]"
children: []
---
there are 2 modes:
- Local Mode
- MapReduce Mode

## Local Mode
- It executes in a single JVM and is used for development experimenting and prototyping.
- Here, files are installed and run using localhost.
- The local mode works on a local file system. The input and output data stored in the local file system.

The command for local mode grunt shell:
```
pig -x local
```
## MapReduce Mode
- The MapReduce mode is also known as Hadoop Mode.
- It is the default mode.
- In this Pig renders Pig Latin into MapReduce jobs and executes them on the cluster.
- It can be executed against semi-distributed or fully distributed Hadoop installation.
- Here, the input and output data are present on HDFS.

The command for MapReduce mode:
```
pig
```

or
```
pig -x mapreduce
```
