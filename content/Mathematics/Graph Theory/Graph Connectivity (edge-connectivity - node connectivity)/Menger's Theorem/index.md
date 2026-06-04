---
title: "Menger's Theorem"
created: 2021-09-13T05:25:21.683-05:00
modified: 2021-09-13T05:25:21.683-05:00
parent: "[[Graph Connectivity (edge-connectivity - node connectivity)]]"
children: []
---
## Edge Connectivity

The <strong>edge-connectivity</strong> version of Menger's theorem is as follows:

Let G be a finite graph and x and y two distinct vertices. Then the size of the minimum edge cut for x and y (the minimum number of edges whose removal disconnects x and y) is equal to the maximum number of pairwise edge-independent paths from x to y.

Extended to all pairs: a graph is k-edge-connected (it remains connected after removing fewer than k edges) if and only if every pair of vertices has k edge-disjoint paths in between.
## Vertex Connectivity

The <strong>vertex-connectivity</strong> statement of Menger's theorem is as follows:

Let G be a finite graph and x and y two nonadjacent vertices. Then the size of the minimum vertex cut for x and y (the minimum number of vertices, distinct from x and y, whose removal disconnects x and y) is equal to the maximum number of pairwise internally vertex-disjoint paths from x to y.

Extended to all pairs: a graph is k-vertex-connected (it has more than k vertices and it remains connected after removing fewer than k vertices) if and only if every pair of vertices has k internally vertex-disjoint paths in between.
