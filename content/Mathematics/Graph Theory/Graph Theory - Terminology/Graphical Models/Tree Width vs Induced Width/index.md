---
title: "Tree Width vs Induced Width"
created: 2021-09-13T05:25:30.565-05:00
modified: 2021-09-13T05:25:30.565-05:00
parent: "[[Graphical Models]]"
children: []
---
TODO - induced width weird example

does [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree-width]] = [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]]?

tree-width
- is based on a tree decomposition
- its value is equal to the size of its maximum node-set minus 1

induced-width
- is based on an induced-graph relative to a node ordering
- its value is equal to the node with the maximum number of parents

a primal graph with no cycles it has:
- tree-width = 1 = induced-width

the question is, given an arbitrary primal graph does the following hold:
- tree-width = induced-width

### Instructor Response

Induced width is the same as tree width. Here are some important terms:
1. The treewidth (or width or induced width) of an order equals the maximum cluster size minus 1. (Recall that the clusters are obtained by running bucket elimination schematically.)
2. The treewidth (or induced width) of a graph is the minimum treewidth over all possible orderings.

In many research papers, the authors will use the term "width" for an order and treewidth or induced width for the graph
### Minimal Tree-Width = Minimal Induced-Width
The minimal tree-width is identical to the minimal induced-width of a graph
### Experiment

based on some experiments, I believe tree-width = induced-width

given the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] below and its chosen node ordering (A B C E D F):
- the [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] has [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree-width]] = 2
- the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced graph]] has [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] = 2

the [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] was formed the <font style="color: rgb(204,153,255);">purple arrows</font> in the [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|bucket elimination algorithm]]

the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced graph]] was formed with [[Pseudo Tree - Extended Graph|extended graph]] as input:
- the [[Pseudo Tree - Extended Graph|extended graph]] was a combination of [[Pseudo Tree - Extended Graph|pseudo tree]] and [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]]
- the [[Pseudo Tree - Extended Graph|pseudo tree]] was formed with the structure of the [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]]

![[Tree Width vs Induced Width/tree-width-vs-induced-width.png|850]]

[[tree-width-vs-induced-width.drawio]]
