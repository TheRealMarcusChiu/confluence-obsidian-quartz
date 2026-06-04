---
title: "AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree"
created: 2021-09-13T05:25:38.274-05:00
modified: 2021-09-13T05:25:38.274-05:00
parent: "[[AND／OR Search Spaces - Other Stuff]]"
children: []
---
this article will go over the creation of
- [[AND／OR Search Trees (AOT)|AND/OR Search Trees (AOT)]]
- [[AND／OR Search Graphs (AOG)|AND/OR Search Graphs (AOG)]] - specifically Context Minimal AND/OR Search Graphs

while using a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] as the guiding [[Pseudo Tree - Extended Graph|pseudo tree]]
### Example
- we create a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] shown below
- to form a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] we will use <font style="color: rgb(204,153,255);">purple arrows</font> of the [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|bucket elimination algorithm]] (note: we don't actually have to execute the bucket elimination algorithm, we are just using intuition of buckets)
- the tree decomposition is a valid guiding [[Pseudo Tree - Extended Graph|pseudo tree]] for creating an AOT

![[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree/generating-pseudo-trees-from-tree-decompositions-from-bucket-trees-1.png|582x250]][[generating-pseudo-trees-from-tree-decompositions-from-bucket-trees 1.drawio|generating-pseudo-trees-from-tree-decompositions-from-bucket-trees-1.drawio]]
- the AOT is shown below (assume each variable A, ..., F has domain {0, 1})

![[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree/generating-pseudo-trees-from-tree-decompositions-from-bucket-trees-2.png]][[generating-pseudo-trees-from-tree-decompositions-from-bucket-trees -2.drawio|generating-pseudo-trees-from-tree-decompositions-from-bucket-trees-2.drawio]]
- to turn the [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] into a [[AND／OR Search Graphs (AOG)|Context Minimal AND/OR Search Graph]] we will need to know to contexts of each variable (A, ..., F)
- we do this by forming an [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced graph]] of the [[Pseudo Tree - Extended Graph|extended graph]] below
- the context of a node in an induced graph are its parents (assume all all edges are pointing down)
	- context of F = AEF
	- context of D = BED
	- context of E = ABE
	- context of C = ABC
	- context of B = AB
	- context of A = A
- merge all nodes in the [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] that have the same context

![[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree/generating-pseudo-trees-from-tree-decompositions-from-bucket-trees-3.png]][[generating-pseudo-trees-from-tree-decompositions-from-bucket-trees -3.drawio|generating-pseudo-trees-from-tree-decompositions-from-bucket-trees-3.drawio]]
