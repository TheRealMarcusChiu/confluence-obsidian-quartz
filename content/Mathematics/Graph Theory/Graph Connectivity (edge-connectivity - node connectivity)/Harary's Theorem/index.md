---
title: "Harary's Theorem"
created: 2021-09-13T05:25:21.852-05:00
modified: 2021-09-13T05:25:21.852-05:00
parent: "[[Graph Connectivity (edge-connectivity - node connectivity)]]"
children: []
---
the achievable maximum node-connectivity <font style="color: rgb(128,128,128);">(κ)</font> and maximum edge-connectivity <font style="color: rgb(128,128,128);">(λ)</font> that a simple graph <font style="color: rgb(128,128,128);">G</font> with <font style="color: rgb(128,128,128);">n</font> nodes with <font style="color: rgb(128,128,128);">m</font> edges can have are given by:
<span style="white-space: pre-wrap"><code>max κ(G) = max λ(G) = ⌊2m/n⌋</code></span>

assuming n-1 ≤ m ≤ n(n-1)/2, which is necessary for a connected graph to exist.

Then the optimal connectivity can be achieved by the following construction:
- if m = n - 1
	- then take any tree on n nodes
	- otherwise:
		- take a circle on n nodes
		- set δ = ⌊2m/n⌋
		- connect any 2 nodes that are within distance ⌊δ/2⌋ along the circle
		- if not all nodes have degree ≥ δ, then pick a node with degree \< δ, connect it to a node that is at distance ⌊n/2⌋ away along the circle. Repeat this until all nodes have degree δ, possibly with a single node that can have degree δ + 1
