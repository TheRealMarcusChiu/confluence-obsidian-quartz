---
title: "Dijkstra's Algorithm - Negative Weights Attempt"
created: 2021-09-13T05:25:46.457-05:00
modified: 2022-04-28T04:01:35.299-05:00
parent: "[[Dijkstra's Algorithm]]"
children: []
---
FAILURE
# Implementation Algorithm
```
dijkstra-negative-weights(G(E,V)) {
	// make every weight positive
	min-weight = E.getMinWeight()
	if min-weight < 0
		for each e in E
			e.weight -= min-weight

	// initialize 
	spt-set = []
	non-spt-set = [all v in V]
	for each v in non-spt-set
		v.value = infinity
		v.depth = infinity
	first-vertex.value = 0
	first-vertex.depth = 0

	// compute shortest path
	while non-spt-set != empty
		u = non-spt-set.extractMin() // by v.value
		spt-set.add(u)
		non-spt-set.remove(u)
		for each v adjacent to u
			if [(u,v).edge-weight + u.value] - [(u.depth + 1) * |min-weight|] < v.value
				v.value = (u,v).edge-weight + u.value
				v.depth = u.depth + 1
}
```
