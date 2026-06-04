---
title: "Tree Traversal (Depth／Breadth-First - Pre-Order, In-Order, Out-Order, Post-Order)"
created: 2021-09-13T05:25:41.874-05:00
modified: 2022-09-17T00:07:36.054-05:00
parent: "[[Graph Traversals／Search]]"
children: []
---
# Depth-First Traversals
- similar to [[Depth First Search (DFS)]]
- general recursive pattern for traversing a binary tree is this: At node N do the following in any order:
	- <strong>L</strong> - recursively traverse left subtree
	- <strong>R</strong> - recursively traverse right subtree
	- <strong>N</strong> - process N itself
- <em>left-to-right traversal - L</em> is done before <em>R</em>
- <em>right-to-left traversal - R</em> is done before <em>L</em>
- types of depth-first search traversals:
	- Pre-Order (NLR)
	- In-Order (LNR)
	- Out-Order (RNL)
	- Post-Order (LRN)

# Breadth-First Traversal
- similar to [[Breadth First Search (BFS)]]
- also called level-order traversal
