---
title: "HBase"
created: 2020-05-20T14:10:59.053-05:00
modified: 2026-01-12T15:54:19.758-06:00
parent: "[[Hadoop Ecosystem - Services]]"
children:
  - "[[HBase - Installation]]"
---
###### HBase
````excerpt
- is an open-source [[NoSQL (Non-Relational) Databases|non-relational]] [[Column-Oriented／Store Database Management System (CDBMS)|column-oriented]] distributed [[Database Management Systems (DBMS)|database]]
- modeled after Google's BigTable
- written in [[Java]]
- is developed as part of Apache Software Foundation's Apache [[Apache Hadoop]] project and runs on top of [[Hadoop Distributed File System (HDFS)|HDFS]] or [[Alluxio (formerly known as Tachyon)|Alluxio]], providing Bigtable-like capabilities for Hadoop
- uses [[MapReduce (MR)]] to read and write data
````
^excerpt

# HBase - Use Case
- need Big Data TB/PB
- high throughput
- variable columns
- need random read and writes
- you read far more than write

# HBase - Daemons
![[HBase/HBase Daemons.png|600]]
# HBase - Table

> [!expand]- Click here to expand...
> ###### Table Architecture
> ![[HBase/hbase tabl architecture.png|500]]
> ###### Column Families
> ![[HBase/column-family.png|440]]
> ###### Data in Table
> ![[HBase/no-sql-data.png|480]]
> ###### Table Split into Regions
> ![[HBase/hbase table regions.png|565]]
# HBase - Accessing Data
- [[HBase]] [[Java]] [[Application Programming Interface (API) - Software Development Kit (SDK)|API]]
- [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] [[Representational State Transfer (REST) - RESTful|REST]] [[Application Programming Interface (API) - Software Development Kit (SDK)|API]]
- [[Apache Thrift]] Gateway allowing non-Java programmatic access
- non-native [[Structured Query Language (SQL)|SQL]] interfaces
	- Apache Phoenix
	- [[Impala]]
	- Presto
	- [[Hive]]

# HBase - Row Key
- you only have one [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|index/primary key]]
- don't just use an auto-incrementing number
- sometimes multiple pieces of data are often used in a row key (i.e. [[Database Key Types (Candidate - Primary - Alternate - Unique - Composite／Compound／Concatenated／Federated - Super - Foreign) Key|composite key]])

# HBase - Schema Design
- data access patterns should be known ahead of time
- general best practices:
	- fewer and bigger denormalized tables
	- use bulk loading for incremental or time-series data

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Apache HBase - Just the Basics](https://www.youtube.com/watch?v=2Ci_QxJ1kiE)
