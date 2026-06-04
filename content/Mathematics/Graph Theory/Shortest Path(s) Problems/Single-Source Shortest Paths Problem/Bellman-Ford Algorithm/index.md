---
title: "Bellman-Ford Algorithm"
created: 2021-09-13T05:25:46.635-05:00
modified: 2022-04-28T04:01:59.595-05:00
parent: "[[Single-Source Shortest Paths Problem]]"
children: []
---
###### Bellman-Ford Algorithm
- works better than [[Dijkstra's Algorithm|dijkstra's algorithm]] in [[Distributed - Algorithms／Computing／Programming／Systems|distributed systems]]
- dijkstra's algorithm wouldn't work on negative weights, but bellman ford can
- however, if there is a negative weight cycle, then shortest distances are not calculated, negative weight cycle is reported

# Algorithm Steps
```
1 - for each v in V: dist[v] = infinity
2 - do for |V| - 1 times
		for each edge u-v in E
			if dist[v] > dist[u] + (u-v).edge-weight
				dist[v] = dist[u] + (u-v).edge-weight
3 - for each edge u-v in E
		if dist[v] > dist[u] + (u-v).edge-weight
			return "graph contains negative weight cycle"
```
- Step 1 - initializes
- Step 2 - guarantees shortest distances (no negative weight cycles)
- Step 3 - checks if there is a negative weight cycle

# Time Complexity
- O(VE), which is more than Dijkstra
