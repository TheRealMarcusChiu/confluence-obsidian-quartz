---
title: "Data Structures"
created: 2019-03-16T03:17:14.984-05:00
modified: 2025-09-25T21:30:37.540-05:00
parent: "[[Computer]]"
children:
  - "[[Associative Array - Map - Symbol Table - Dictionary]]"
  - "[[Data Types (File Formats)]]"
  - "[[Data／Variable Types (Statistics／Programming)]]"
  - "[[Graph Structures & Algorithms]]"
  - "[[Hash Tables (Hash Map)]]"
  - "[[Hash Tree - Merkle Tree]]"
  - "[[Heap (Priority Queue)]]"
  - "[[List - Self Organizing]]"
  - "[[Log-Structured Merge Tree (LSM-Tree)]]"
  - "[[Octrees]]"
  - "[[Quadtrees]]"
  - "[[R-Trees]]"
  - "[[Search Trees]]"
  - "[[Set Structures & Algorithms]]"
  - "[[Sorted String Tables (SSTables)]]"
  - "[[String Processing Algorithms (Stringology)]]"
---
###### Data Structure
````excerpt
- is a data organization, management, and storage format that is usually chosen for efficient access to data
- a data structure is:
	- a collection of [[Data／Variable Types (Statistics／Programming)|data values]]
	- the relationships between the data values
	- the functions or operations that can be applied to the data structure itself (i.e. it is an [[Algebraic Structures|algebraic structure]] of [[Data／Variable Types (Statistics／Programming)|data]])
````
^excerpt

# Data Structures - Functional vs Implementational
- <strong>functional structure</strong> - defines the function of a structure (higher level)
- <strong>implementational structure</strong> - defines how a structure is put together (lower level)

Given a functional structure, there can be multiple implementational structures. For example:
- function structure - a data structure that represents node i and its adjacent nodes, for all nodes i
- implementational structure - adjacency matrix or adjacency list

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- Arrays
	- static vs dynamic
- Linked List
	- Singly Linked List
	- Doubly Linked List
- Stack - Last-In First-Out
- Queue - First-In First-Out
- Deque - both sides
