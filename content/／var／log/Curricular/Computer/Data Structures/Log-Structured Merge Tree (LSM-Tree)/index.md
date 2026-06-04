---
title: "Log-Structured Merge Tree (LSM-Tree)"
created: 2026-01-12T14:59:37.413-06:00
modified: 2026-01-12T15:24:39.399-06:00
parent: "[[Data Structures]]"
children: []
---
###### Log-Structured Merge Tree (LSM-Tree)
````excerpt
- is a type of [[Data Structures|data structure]] optimized for write-heavy workloads, commonly used in modern databases like [[Apache - Cassandra|Cassandra]], [[RocksDB]], LevelDB, and [[HBase]]
- it’s designed to make [[API-DP - CRUDing Data|inserts, updates, and deletes]] efficient, especially when working with large datasets stored on [[Hard Disk Drives (HDD) - Fixed Disk|disk]]
````
^excerpt

# Basic Idea

An LSM-tree organizes data into <strong>multiple levels of storage</strong>:
- <strong>In-memory component (C0)</strong>: Fast, temporary storage (usually a sorted structure like a memtable)
- <strong>Disk components (C1, C2, …)</strong>: Larger, persistent storage on disk, often stored as sorted files (i.e. [[Sorted String Tables (SSTables)|SSTables]])

Instead of updating data directly on disk (which is slow due to random I/O), LSM-trees <strong>write changes sequentially to memory first</strong>, then <strong>periodically flush them to disk in bulk</strong>.
