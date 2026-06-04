---
title: "Dijkstra's Algorithm"
created: 2021-09-13T05:25:46.185-05:00
modified: 2022-04-28T04:01:23.020-05:00
parent: "[[Single-Source Shortest Paths Problem]]"
children:
  - "[[Dijkstra's Algorithm - Negative Weights Attempt]]"
---
###### Dijkstra's Algorithm
- similar to [[Prim's Algorithm|Prim's MST]], we generate an SPT (shortest path tree) with a given source as a root
- does NOT work for graphs with negative weight edges
- works for both undirected and directed graphs

# Implementation Algorithm
```
spt-set = []
non-spt-set = [all vertices]
for each v in non-spt-set
	v.key-value = infinity
first-vertex.key-value = 0
while non-spt-set != empty O(V)
	u = non-spt-set.extractMin() // by key-value - removes u from min-queue O(lgV)
	spt-set.add(u)
	for each v adjacent to u Θ(E) or O(E) how graph is represented
		if [(u,v).edge-weight + u.key-value] < v.key-value
			v.key-value = (u,v).edge-weight + u.key-value
```
# Time Complexity
- If the input graph is represented with an adjacency matrix, then O(V<sup>2</sup>)
- If the input graph is represented with an adjacency list, then the time complexity of Prim’s algorithm can be reduced to O(ElogV) with the help of a binary heap
