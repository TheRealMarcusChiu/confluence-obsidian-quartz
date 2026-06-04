---
title: "Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width"
created: 2021-09-13T05:25:29.761-05:00
modified: 2026-05-24T20:05:42.065-05:00
parent: "[[Cluster／Clique／Join／Junction Graphs - Graph Decompositions]]"
children: []
---
###### Cluster Trees are also called Tree Decompositions, Junction Trees, Clique Trees, or Join Trees
````excerpt
- is a mapping of a [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) into a [tree](https://en.wikipedia.org/wiki/Tree_(graph_theory)) that can be used to define the <strong>treewidth</strong> of the graph and speed up solving certain computational problems on the graph
- is a [[Cluster／Clique／Join／Junction Graphs - Graph Decompositions|cluster graph]] with no cycles
- they play an important role in problems like [[Probabilistic Inference|probabilistic inference]], [constraint satisfaction](https://en.wikipedia.org/wiki/Constraint_satisfaction), [query optimization](https://en.wikipedia.org/wiki/Query_optimization), and [matrix decomposition](https://en.wikipedia.org/wiki/Matrix_decomposition)
````
^excerpt

# Tree Decompositiongiven a graph 𝐆=(𝐕<sup>𝑔</sup>,𝐄<sup>𝑔</sup>) where:
- 𝐕<sup>𝑔</sup>= {𝑣<sub>1</sub>, ..., 𝑣<sub>𝑟</sub>} are vertices of 𝐆
- 𝐄<sup>𝑔</sup>= {...} are edges of 𝐆

a tree decomposition of 𝐆 is a tree 𝐓=(𝐕<sup>𝑡𝑑</sup>,𝐄<sup>𝑡𝑑</sup>) where:
- 𝐕<sup>𝑡𝑑</sup> = {𝑉<sup>𝑡𝑑</sup><sub>1</sub>, ..., 𝑉<sup>𝑡𝑑</sup><sub>𝑛</sub>} are nodes of 𝐓, where each node 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub><sup></sup>is a subset of 𝐕<sup>𝑔</sup>
- 𝐄<sup>𝑡𝑑</sup>= {𝐸<sup>𝑡𝑑</sup><sub>1</sub>, ..., 𝐸<sup>𝑡𝑑</sup><sub>𝑚</sub>} are edges of 𝐓

and 𝐓=(𝐕<sup>𝑡𝑑</sup>,𝐄<sup>𝑡𝑑</sup>) must satisfying the following properties:
1. the union of all 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub>'s = 𝐕<sup>𝑔</sup>
2. if 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub>and 𝑉<sup>𝑡𝑑</sup><sub>𝑗</sub>both contain a vertex 𝑣, then all nodes in the path between 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub>and 𝑉<sup>𝑡𝑑</sup><sub>𝑗</sub><sub></sub>also contains 𝑣. Equivalently, the tree nodes containing vertex 𝑣 form a connected subtree of 𝐓
3. for every edge (𝑢,𝑣) in graph 𝐆, there exist a node 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub> in 𝐓 that contains both 𝑢 and 𝑣

# Tree-Width
- treewidth of a tree decomposition 𝐓 is the size of its largest node 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub> minus 1
- treewidth of a graph 𝐆 is:
	- the minimum treewidth among all possible tree decompositions of 𝐆
	- 1 less than the size of the largest clique in the [[Chordal Graphs|chordal graph]] containing 𝐆 with the smallest clique number
- [[Tree Width vs Induced Width]]

# Example Tree Decomposition & Tree-Width

```merge-table
{
  "rows": [
    [
      "![[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width/Tree_decomposition.png|301]]",
      "###### Tree Decomposition\nA graph with eight vertices, and a tree decomposition of it onto a tree with six nodes.\n\ndoes the tree decomposition have the 3 properties? YES!\n1. clearly the union of all 𝑉<sup>𝑡𝑑</sup><sub>𝑖</sub>'s = 𝐕<sup>𝑔</sup>\n2. each graph vertex is listed at the nodes of a contiguous subtree of the tree\n3. each graph edge connects two vertices that are listed together at some tree node\n\n###### Tree-Width\n- each tree node lists at most three vertices, so the tree-width of this decomposition is 2"
    ]
  ]
}
```
