---
title: "Floyd Warshall Algorithm"
created: 2021-09-13T05:25:45.584-05:00
modified: 2022-04-28T04:03:25.332-05:00
parent: "[[All-Pairs Shortest Paths Problem]]"
children: []
---
<strong>Floyd Warshall Algorithm</strong> solves the [[All-Pairs Shortest Paths Problem]]
# Algorithm Using Adjacency Matrix
```
floydWarshall(adjacency-matrix[][]) {
	// initialize
	dist[][] = adjacency-matrix[][]

	// Add all vertices one by one to the set of intermediate vertices
	// before start of an iteration k:
	// we have shortest distances between all pairs of 
	// vertices such that the shortest distances consider 
	// only the vertices in set {0, 1, 2, .. k-1} as 
	// intermediate vertices
	// after end of an iteration k: 
	// vertex number k is added to the set of intermediate 
	// vertices and the set becomes {0, 1, 2, .. k}
	for k = 0 to |V|
		// iterate each vertice as SOURCE
		for i = 0 to |V|
			// iterate each vertice as DESTINATION
			for j = 0 to |V|
				// if distance (i to k) + (k to j) < distance of (i to j)
				if (dist[i][k] + dist[k][j]) < dist[i][j]
					dist[i][j] = dist[i][k] + dist[k][j]
	return dist[][]
}
```
# Time Complexity
- O(V³)
- this is better than doing [[Bellman-Ford Algorithm]] V times as it would result in O(V²E) and |E| \>= |V| - 1
