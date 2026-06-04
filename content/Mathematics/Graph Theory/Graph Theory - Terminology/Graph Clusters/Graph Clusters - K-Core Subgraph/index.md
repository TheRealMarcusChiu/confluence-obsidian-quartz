---
title: "Graph Clusters - K-Core Subgraph"
created: 2021-09-13T05:25:24.028-05:00
modified: 2021-09-13T05:25:24.028-05:00
parent: "[[Graph Clusters]]"
children: []
---
### K-Core Cluster

given an integer k \> 0, the k-core of a graph is the largest subgraph, such that each node in the subgraph has at least k neighbors within the subgraph

note: this subgraph maybe disconnected
### Example K-Cores

the k-cores of a graph, for various values of k, form a nested hierarchical system

![[Graph Clusters - K-Core Subgraph/graph-clusters-k-core-hierarchical-system.png|301]]
### Algorithm to Find the K-Core Subgraph
1. delete all nodes of degree \< k
2. if the remaining graph is empty, then output the message “the k-core is empty” and halt
3. if the remaining graph is non-empty, then
	- if every node in the remaining graph has degree ≥ k, then this is the k-core; output this graph and halt
	- else repeat from step 1
