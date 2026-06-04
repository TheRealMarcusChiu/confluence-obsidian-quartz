---
title: "Graph Connectivity (edge-connectivity - node connectivity)"
created: 2021-09-13T05:25:21.370-05:00
modified: 2021-09-13T05:25:21.370-05:00
parent: "[[Graph Theory]]"
children:
  - "[[Harary's Theorem]]"
  - "[[Menger's Theorem]]"
  - "[[Whitney's Theorem]]"
---
### <strong>Connectivity Types</strong>
- <strong>edge-connectivity (between 2 nodes): λ(x,y)</strong> - minimum number of edges that need to be deleted to disconnect nodes x and y
	- <strong>λ(x,y)</strong> - is the size of the minimum cut between x and y
- <strong>edge-connectivity (of graph): λ(G)</strong> - minimum number of edges that need to be deleted to disconnect G
	- <strong>λ(G)</strong> = min<sub>x≠y</sub> λ(x,y)
	- <strong>λ(G) </strong>- is the size of a minimum cut
- <strong>node-connectivity (of graph): κ(G)</strong> - minimum number of nodes/vertices that need to be deleted, such that the remaining graph is disconnected or has no edges at all
	- <strong>κ(G) </strong>- is size of minimum vertex-cut or node-cut

### Naming Conventions
- a graph that has λ(G) = k, is k-connected
- a graph that has k(G) = k, is k-node-connected

### Connectivity Theorems
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
