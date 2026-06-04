---
title: "Sorted String Tables (SSTables)"
created: 2026-01-12T15:04:11.584-06:00
modified: 2026-01-12T15:06:24.151-06:00
parent: "[[Data Structures]]"
children: []
---
###### Sorted String Tables (SSTables)
````excerpt
- are a key concept in [[Distributed／Decentralized Storage System (DSS)|distributed databases and storage systems]] (i.e. [[Apache - Cassandra|Cassandra]] and [[RocksDB]])
- is an immutable, [[Hard Disk Drives (HDD) - Fixed Disk|disk]]-based [[Data Structures|data structure]] used to store key-value pairs in sorted order by key. Once written to disk, it cannot be modified, only read or deleted
````
^excerpt

# Use Cases
- [[Log-Structured Merge Tree (LSM-Tree)]]
