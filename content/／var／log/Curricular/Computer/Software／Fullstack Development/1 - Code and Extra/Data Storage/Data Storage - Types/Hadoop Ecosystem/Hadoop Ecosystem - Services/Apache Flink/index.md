---
title: "Apache Flink"
created: 2025-04-25T17:23:55.992-05:00
modified: 2025-04-25T17:27:44.035-05:00
parent: "[[Hadoop Ecosystem - Services]]"
children: []
---
###### Apache Flink
````excerpt
- is an open-source, unified stream-processing and batch-processing framework
- the core of Apache Flink is a distributed streaming data-flow engine written in [[Java]] and [[Scala]]
- Flink executes arbitrary dataflow programs in a data-parallel and pipelined (hence task parallel) manner
- Flink's pipelined runtime system enables the execution of bulk/batch and stream processing programs
- Flink's runtime supports the execution of iterative algorithms natively
- Flink provides a high-throughput, low-latency streaming engine as well as support for event-time processing and state management
- Flink applications are fault-tolerant in the event of machine failure and support exactly-once semantics
- Programs can be written in [[Java]], [[Python]], and [[Structured Query Language (SQL)|SQL]] and are automatically compiled and optimized into dataflow programs that are executed in a cluster
- Flink does not provide its own data-storage system, but provides data-source and sink connectors to systems such as Apache Doris, Amazon Kinesis, [[Apache Kafka]], [[Hadoop Distributed File System (HDFS)|HDFS]], [[Apache - Cassandra|Apache Cassandra]], and [[Elasticsearch|ElasticSearch]]
````
^excerpt
