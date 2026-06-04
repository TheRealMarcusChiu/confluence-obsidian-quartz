---
title: "AND／OR Search Trees (AOT)"
created: 2021-09-13T05:25:38.985-05:00
modified: 2021-09-13T05:25:38.985-05:00
parent: "[[AND／OR Search Spaces]]"
children: []
---
### AND/OR Search Tree - Definition

given:
- [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- primal graph 𝐺 of 𝒢
- guiding [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇 of 𝐺

the associated <strong>AND/OR Search Tree</strong> 𝑆<sub>𝑇</sub>(𝒢):
- has alternating levels of AND and OR nodes:
- its structure is based on the underlying [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇:
	- its root is an OR node labeled by the root of 𝑇
	- its parent-child relationship between nodes in the search space are defined as follows:
		- an OR node 𝑂 has a child AND node 𝐴, iff it is consistent with the assignment from root node to node 𝐴 (consistency is defined relative to the constraints when we have a constraint problem)
		- an AND node 𝐴 has a child OR node 𝑂, iff 𝑂 is a child of 𝐴 in the guiding [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇

### AND/OR Search Tree - Examples

> [!expand]- Click here to expand...
> - (a) is a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]]
> - (b) is a [[Pseudo Tree - Extended Graph|pseudo tree]]
> - (c) is a [[Pseudo Tree - Extended Graph|pseudo tree]]
> - (d) is a chain [[Pseudo Tree - Extended Graph|pseudo tree]]
>
> ![[AND／OR Search Trees (AOT)/AND-OR-Search-Tree-primal-graph-pseudo-tree.png|500]]
>
> assume each variable {1, 2, 3, 4, 5, 6, 7} has domain {a, b, c} the graphs below shows the resulting AND/OR Search Trees based on its guiding pseudo tree
> - (top) is guided by pseudo tree (b)
> - (bot) is guided by pseudo tree (c)
>
> the size of AND/OR Search Tree is determined by the height of the guiding pseudo tree:
> - smaller pseudo tree height → smaller AND/OR tree size
> - larger pseudo tree height → larger AND/OR tree size
>
> an AND/OR search tree becomes an OR search tree when its pseudo tree is a chain
>
> ![[AND／OR Search Trees (AOT)/AND-OR-search-tree-examples.png|600]]
### AND/OR Search Tree - Complexity

> [!expand]- Click here to expand...
> given:
> - [[AND／OR Search Trees (AOT)|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩ with domain sizes of each variable bounded by 𝑘
> - [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 of 𝒢
> - guiding [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇 of 𝐺 whose [[Tree - Depth & Height|height]] is 𝘩 and having 𝑙 leaves
>
> memory-space complexity is:
> - memory-space complexity = 𝑂(𝑛) <font style="color: rgb(128,128,128);">\# a solution of an AND/OR Search Tree is its subtree where each of the 𝑛 variables has been assigned a value</font>
>
> search-space-size/time complexity is:
> - search-space-size/time complexity = 𝑂(𝑙·𝑘<sup>𝘩</sup>) <font style="color: rgb(128,128,128);">\# start at bottom with 𝑙 leaves, it scales by a factor of 𝑘 each time we traverse up the pseudo tree </font>
> - search-space-size/time complexity = 𝑂(𝑛·𝑘<sup>𝘩</sup>) <font style="color: rgb(128,128,128);">\# number of leaves </font><font style="color: rgb(128,128,128);">𝑙 in 𝑇 is always less than total number of variables </font><font style="color: rgb(128,128,128);">𝑛</font>
> - search-space-size/time complexity = 𝑂((𝑏𝑘)<sup>𝘩</sup>) <font style="color: rgb(128,128,128);">\# when </font><font style="color: rgb(128,128,128);">𝑏 bounds the [[Tree - Branching Degree／Factor|branching degree]] of </font><font style="color: rgb(128,128,128);">𝑇 and </font><font style="color: rgb(128,128,128);">𝑛 bounds the number of nodes</font>
>
> ###### using tree-decomposition as guiding pseudo tree:
>
> a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 can be used as a guiding [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇
>
> given:
> - [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]] 𝑤, then the height 𝘩 satisfies 𝘩 ≤ 𝑤·𝑙𝑜𝑔(𝑛)
>
> search-space-size/time complexity is:
> - search-space-size/time complexity = 𝑂(𝑛·𝑘<sup>𝑤·𝑙𝑜𝑔(𝑛</sup><sup>)</sup>)
### AND/OR Search Tree - Other Stuff
```dataview
LIST
FROM ""
WHERE file.folder = [[AND／OR Search Spaces - Other Stuff]].file.folder + "/" + [[AND／OR Search Spaces - Other Stuff]].file.name
```

### AND/OR Search Tree - To AND/OR Search Graph

It is often the case that a search space that is a tree can become a graph if nodes that root identical search subspaces, or correspond to identical subproblems, are identified. Any two such nodes can be merged, yielding a graph and thus reducing the size of the search space

see: [[AND／OR Search Graphs (AOG)|AND/OR Search Graphs (AOG)]]
