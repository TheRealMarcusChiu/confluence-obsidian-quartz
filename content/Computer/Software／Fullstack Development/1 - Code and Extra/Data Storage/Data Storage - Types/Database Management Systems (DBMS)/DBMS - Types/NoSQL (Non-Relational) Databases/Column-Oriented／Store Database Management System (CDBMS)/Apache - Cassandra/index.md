---
title: "Apache - Cassandra"
created: 2019-03-16T01:03:32.726-05:00
modified: 2026-01-12T12:14:47.147-06:00
parent: "[[Column-Oriented／Store Database Management System (CDBMS)]]"
children: []
---
###### Apache Cassandra ([cassandra.apache.org](http://cassandra.apache.org/))
````excerpt
- is a free and open-source, [[Distributed vs Decentralized - Algorithms／Computing／Programming／Systems|distributed/decentralized]], [[Wide-Column Store Database Management System|wide column store]], [[NoSQL (Non-Relational) Databases|NoSQL database management system]]
- created by Facebook in 2007
- a wide-column store is not the same thing as a column-store
- users include Apple, Netflix, Uber, Facebook and many others
- the largest Cassandra clusters have tens of thousands of nodes and store petabytes of data
- every node in the cluster be exactly the same. Any node can accept a write/read and the nodes communicate using a <code><font style="color: rgb(122,134,154);">Gossip Protocol</font></code> in a peer-to-peer way
````
^excerpt

# Other
- [[Cassandra Query Language (CQL)]]
