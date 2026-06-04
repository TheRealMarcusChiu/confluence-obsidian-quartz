---
title: "Kruskal's Algorithm"
created: 2021-09-13T05:25:33.426-05:00
modified: 2021-12-11T05:41:02.287-06:00
parent: "[[Minimum／Maximum Spanning Tree (MST)]]"
children: []
---
<strong>Kruskal's Algorithm</strong> is used to find the [[Minimum／Maximum Spanning Tree (MST)|Minimum/Maximum Spanning Tree (MST)]] of a graph
# General Algorithm
```
kruskals-algorithm(G(V,E)) {
	min-heap = sort all edges in E by weight
	edges-included = []
	while (edges-included.size == |V| - 1)
		edge = min-heap.extractMin()
		if (edge NOT forms a cycle) 
			edges-included.add(edge)
	return edges-included
}
```
# General Algorithm With Disjoint Sets Data Structure
```
kruskals-algorithm(G(V,E)) {
	for each vertex v in V do MAKE-SET(v)
	min-heap = sort all edges in E by weight
	edges-included = []
	while (edges-included.size == |V| - 1)
		edge = min-heap.extractMin()
		if (FIND(edge.v1) != FIND(edge.v2)) 
			edges-included.add(edge)
			UNION(edge.v1, edge.v2)
	return edges-included
}
```
