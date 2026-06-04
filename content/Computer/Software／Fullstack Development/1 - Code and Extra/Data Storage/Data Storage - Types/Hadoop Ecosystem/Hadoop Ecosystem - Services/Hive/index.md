---
title: "Hive"
created: 2020-05-20T16:26:10.571-05:00
modified: 2025-04-25T17:04:32.360-05:00
parent: "[[Hadoop Ecosystem - Services]]"
children:
  - "[[Hive - Installation]]"
  - "[[Hive - Server Installation]]"
---
###### Hive
````excerpt
- originally developed by Facebook
- is a [[Data Warehouse - Data Lake - Lakeshore Data Mart／Warehouse - Data Mesh|data warehouse]] system for Hadoop that runs [[Structured Query Language (SQL)|SQL]] like queries called [[Hive Query Language (HQL)]] which are internally transformed to [[MapReduce (MR)]] or Spark jobs
- supports [[SQL - Data Definition／Description Language (DDL)|Data Definition Language]], [[SQL - Data Manipulation／Query Language (DML／DQL)|Data Manipulation Language]] and [[SQL - User Defined Functions／Language (UDL - UDF)|User Defined Functions]]
- It is capable of analyzing large datasets stored in [[Hadoop Distributed File System (HDFS)|HDFS]]
- allows different storage types such as plain text, RCFile, and [[HBase]]
- uses indexing to accelerate queries
- can operate on compressed data stored in the [[Hadoop Ecosystem - Services]]
````
^excerpt

# Hive - Limitations
- Hive is not capable of handling real-time data
- It is not designed for online transaction processing
- Hive queries contain high latency

# Hive - Architecture
###### Hive Client

Hive allows writing applications in various languages, including Java, Python, and C++. It supports different types of clients such as:
- <strong>Thrift Server</strong> - a cross-language service provider platform that serves the request from all those programming languages that supports Thrift.
- <strong>JDBC Driver</strong> - used to establish a connection between hive and Java applications. The JDBC Driver is present in the class org.apache.hadoop.hive.jdbc.HiveDriver.
- <strong>ODBC Driver</strong> - allows the applications that support the [[Open Database Connectivity (ODBC)|ODBC protocol]] to connect to Hive

###### Hive Services
- <strong>Hive CLI (Command Line Interface)</strong> - a [[UNIX - Shell|shell]] where we can execute Hive queries and commands
- <strong>Hive Web UI (User Interface)</strong> - web-based GUI of Hive CLI for executing Hive queries and commands
- <strong>Hive MetaStore</strong> - a central repository that stores all the structure information of various tables and partitions in the warehouse. It also includes metadata of column and its type information, the serializers and deserializers which is used to read and write data and the corresponding [[Hadoop Distributed File System (HDFS)|HDFS]] files where the data is stored
- <strong>Hive Server</strong> - referred to as <strong>Apache Thrift Server</strong>. It accepts the request from different clients and provides it to Hive Driver
- <strong>Hive Driver</strong> - receives queries from different sources like Web UI, CLI, Thrift, and JDBC/ODBC driver. Converts it to HiveQL queries for the Hive Compiler
- <strong>Hive Compiler</strong> - parses queries and performs semantic analysis on the different query blocks and expressions. It converts HiveQL statements into [[MapReduce (MR)]] or Spark jobs.
- <strong>Hive Execution Engine</strong> - optimizer generates the logical plan in the form of [[Graph Theory - Terminology|DAG]] of [[MapReduce (MR)]] tasks and [[Hadoop Distributed File System (HDFS)|HDFS]] tasks. In the end, the execution engine executes the incoming tasks in the order of their dependencies

# Subpages

![[Hive/hive-architecture.png|400]]

[[hive architecture.drawio]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
