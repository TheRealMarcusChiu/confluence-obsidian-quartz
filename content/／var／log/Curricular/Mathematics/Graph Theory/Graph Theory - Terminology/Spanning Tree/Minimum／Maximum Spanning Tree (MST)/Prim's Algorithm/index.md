---
title: "Prim's Algorithm"
created: 2021-09-13T05:25:33.200-05:00
modified: 2021-12-11T05:41:17.978-06:00
parent: "[[Minimum／Maximum Spanning Tree (MST)]]"
children: []
---
<strong>Prim's Algorithm</strong> is used to find the [[Minimum／Maximum Spanning Tree (MST)|Minimum/Maximum Spanning Tree (MST)]] of a graph
# General Algorithm Pseudocode
```
maintain 2 disjoint sets of vertices:
- one containing vertices already included in MST
- other contains vertices not in MST (non-MST)
find all edges that cuts the 2 sets
choose minimum weight edge
move vertex from non-MST set to MST set
repeat 1-3 until non-MST set is empty
```
# Implementation Algorithm
```
mst-set = []
non-mst-set = [all vertices]
for each v in non-mst-set
	v.key-value = infinity
first-vertex.key-value = 0
while non-mst-set != empty
	u = non-mst-set.extractMin() // by key-value
	mst-set.add(u)
	non-mst-set.remove(u)
	for each v adjacent to u
		if (u,v).edge-weight > v.key-value
			v.key-value = (u,v).edge-weight
```
# Time Complexity
- If input graph is represented with a adjacency matrix, then O(V<sup>2</sup>)
- If input graph is represented with a adjacency list, then the time complexity of Prim’s algorithm can be reduced to O(ElogV) with the help of binary heap
