---
title: "RocksDB"
created: 2026-01-12T14:50:44.339-06:00
modified: 2026-01-12T15:25:01.501-06:00
parent: "[[Key-Value Database／Store]]"
children: []
---
###### RocksDB
````excerpt
- is a high-performance embedded persistent [[Key-Value Database／Store|key-value store]]
- is based on LevelDB but optimized for:
	- fast storage on [[Flash Memory|flash]]/[[Solid State Drives (SSD)|SSD]]
	- high write throughput
	- low-latency reads
	- compression and tunable performance
- uses [[Log-Structured Merge Tree (LSM-Tree)|log-structured merge tree (LSM-tree)]] instead of [[B-Tree B+Tree B＊Tree|B-tree]]
- created by Facebook
````
^excerpt
