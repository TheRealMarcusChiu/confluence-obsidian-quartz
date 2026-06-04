---
title: "Graph Theory - Terminology"
created: 2021-09-13T05:25:23.092-05:00
modified: 2022-04-21T22:26:45.893-05:00
parent: "[[Graph Theory]]"
children:
  - "[[Degree Sequences]]"
  - "[[Graph Clusters]]"
  - "[[Graphical Models]]"
  - "[[Pseudo Tree - Extended Graph]]"
  - "[[Spanning Tree]]"
  - "[[Tree Properties]]"
---
# Graph Terminology
- <strong>vertex/node </strong>- is usually represented by a circle with a label
> [!expand]- Click here to expand...
> - <strong>labeled vertex</strong> - is a vertex that is associated with extra information that enables it to be distinguished from other labeled vertices
> - <strong>unlabeled vertex</strong> - is a vertex
> - <strong>vertex degree 𝛿(v)</strong> - is the number of edges incident to said vertex
> 	- <strong>isolated vertex</strong> - is a vertex of 0 degree
> 	- <strong>leaf vertex</strong> or <strong>pendant vertex </strong>- is a vertex of 1 degree
> 	- <strong>source vertex</strong> - is a vertex with in-degree zero
> 	- <strong>sink vertex</strong> - is a vertex with out-degree zero
> - <strong>simplicial vertex</strong> - is a vertex whose neighbors form a clique: every two vertex in clique are adjacent
> - <strong>universal vertex</strong> - is a vertex that is adjacent to every other vertex in the graph
> - <strong>cut vertex</strong> - is a vertex the removal of which would disconnect the remaining graph
- <strong>edge </strong>- is represented by a line or arrow extending from one vertex/node to another
> [!expand]- Click here to expand...
> - <strong>undirected edge</strong> - unordered pair of vertices
> - <strong>directed edge</strong> - ordered pair of vertices
> - <strong>bi-directed edge</strong> - an edge that is given an independent orientation (or direction, or arrow) at each end. there are three kinds of bi-directed edges:
> 	- <strong>extraverted </strong>- those where the arrows point outward, towards the vertices, at both ends
> 	- <strong>introverted </strong>- those where both arrows point inward, away from the vertices
> 	- <strong>directed</strong> (same as ordinary directed edges) - those in which one arrow points away from its vertex and towards the opposite end, while the other arrow points in the same direction as the first, away from the opposite end and towards its own vertex
> 	- <strong>half-edges </strong>- an edge with only one arrow
> 	- <strong>loose edge</strong> - an edge with no arrows
> 	- <strong>ordinary edges </strong>- an edge that is neither half edge nor loose edge
> - <strong>loop</strong> or <strong>edge loop</strong> or <strong>self loops </strong>- an edge where both ends connects to the same vertex
> - <strong>parallel edge</strong> - an edge where there is another edge connecting to the same vertices u and v
>
> ###### Bi-Directed Edges
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Graph Theory - Terminology/bidirected-edges.png|500x250]]
- <strong>graph</strong> - consists of 2 sets: a set of vertices/nodes and a set of edges
> [!expand]- Click here to expand...
> - <strong>undirected graph</strong> - a graph whose set of edges are all undirected edges
> 	- <strong>tree</strong> (singly connected acyclic undirected graph) - an undirected graph in which any two vertices are connected by exactly one path
> 		- <strong>balanced tree</strong> - a tree where every leaf node is "not more than a certain distance" away from the root than any other leaf node
> 		- <strong>full binary tree</strong> - is a tree in which every node other than the leaves has 2 children
> 		- <strong>complete binary tree</strong> - a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible
> 		- <strong><strong>undirected tree</strong></strong> - same as a tree (graph with no cycles)
> 		- <strong>binary tree</strong> - a tree in which each node has at most two children
> 			- <strong>binary search tree</strong> - a type of ordered tree
> 				- <strong>AVL tree</strong> - a self-balancing binary search tree
> 		- <strong>heap</strong> - a specialized tree which is essentially an almost complete tree that satisfies the heap property (e.g. min or max)
> - <strong>directed graph</strong> (digraph) - a graph whose set of edges are all directed edges [https://www.youtube.com/watch?v=1SxH02CjCDQ](https://www.youtube.com/watch?v=1SxH02CjCDQ)
> 	- <strong>directed acyclic graph (DAG)</strong> - a directed graph without directed cycles
> 		- <strong>polytree </strong>(singly connected acyclic directed graph) - a directed acyclic graph whose underlying undirected graph is a tree. has one or more root nodes (nodes without parents), and for each node, there is exactly one path from it to the root
> 		- <strong>directed tree</strong> - a polytree with only 1 root node (node with no parents)
> - <strong>stump</strong> - a tree where its root node has only leaves
> - <strong>simple graph</strong> - a graph without loops and without parallel edges
> - <strong>complex graph</strong> - a graph with loops and/or parallel edges
> - <strong>bipartite graph</strong> - a graph with no odd cycles
> 	- <strong>complete bipartite graph</strong> - a graph where vertices from one set
> - <strong>homomorphic graph</strong> - 2 graphs are equal if their vertex-set and edge-set are equal
> - <strong>isomorphic graph</strong> - 2 graphs are isomorphic if you can make them homomorphic by relabelling their vertices
> - <strong>forest</strong> - is a graph containing only trees
> - <strong>poly forest</strong> - is a directed acyclic graph whose underlying undirected graph is a forest
> - <strong>subgraph</strong> - is formed from a subset of the vertices of the graph and a SUBSET of edges connecting pairs of vertices in that subset
> - <strong>induced subgraph</strong> of a graph is another graph, formed from a subset of the vertices of the graph and ALL of the edges connecting pairs of vertices in that subset
> - <strong>spanning subgraph</strong> - is a subgraph without cycles that contains all the vertices of the original graph. resulting in either:
> 	- <strong>[[Spanning Tree|spanning tree]]</strong> - an acyclic component
> 	- <strong>spanning forest</strong> - a set of spanning trees
> - <strong>clique</strong> - a subgraph where its set of vertices form a complete graph
> - <strong>connected component</strong> - an undirected graph where there is a path between every 2 nodes
> - <strong>strongly connected component</strong> - a directed graph where there is a path between every 2 nodes
> - <strong>connected graph</strong> - an undirected graph where every pair of vertices 𝑥,𝑦 ∊ 𝑉(𝐺), there exists a path with endpoints 𝑥 and 𝑦
> - <strong>2-connected graph</strong> - a connected graph where for every vertex 𝑥∊𝑉(𝐺), 𝐺-𝑥 is a connected graph
> - <strong>k-connected graph</strong> - a connected graph where for every vertex-set of size 𝑘, 𝑣𝑒𝑟𝑡𝑒𝑥-𝑠𝑒𝑡 ∊ 𝑉(𝐺), 𝐺 - 𝑣𝑒𝑟𝑡𝑒𝑥-𝑠𝑒𝑡 is a connected graph
> - <strong>complete graph</strong> - an undirected graph where every vertex is adjacent to every other vertex (this graph has 𝑛(𝑛-1)/2 or [[Combination Without Replacement (Binomial Coefficient - n Choose k)|[𝑛 choose 2]]] edges)

# Other Terminology
- <strong>walk </strong>- a walk between nodes 𝑢 and 𝑣 is a node sequence
	- starting with 𝑢 and ending with 𝑣
	- where each node in the sequence is adjacent to the next node in the sequence
	- edge and node repetitions allowed
- <strong>trail</strong> - a walk between 2 nodes WITHOUT edge repetitions
- <strong>path </strong>- a walk between 2 nodes WITHOUT node repetitions
- <strong>geodesic</strong> - the shortest <em>path</em> between 2 nodes
- <strong>circuit</strong> - a <em>trail</em> that starts and ends on the same vertex
- <strong>cycle</strong> - a <em>path</em> that starts and ends on the same vertex
- <strong>distance</strong> - the distance between nodes 𝑢 and 𝑣 is the length of the shortest path between nodes 𝑢 and 𝑣
- <strong>eccentricity</strong> - the eccentricity of a vertex 𝑣 is the maximum of all <em>distances</em> between vertex 𝑣 and every other vertex
- <strong>diameter</strong> - the diameter of a graph is the maximum of all <em>eccentricities</em> in the graph
- <strong>radius</strong> - the radius of a graph is the minimum of all <em>eccentricities</em> in the graph
- <strong>peripheral</strong> - is a vertex whose <em>eccentricity</em> is equal to the <em>diameter</em> of the graph
- <strong>periphery</strong> - is the set of <em>peripherals</em> in a graph
- <strong>central</strong> - is a vertex whose <em>eccentricity</em> is equal to the <em>radius</em> of the graph
- <strong>centre</strong> - is the set of <em>centrals</em> in a graph

# Resources
- [Graph Theory for Educators](https://www.youtube.com/channel/UCeD8su6StFduMDOXmdJn8SA/videos)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
