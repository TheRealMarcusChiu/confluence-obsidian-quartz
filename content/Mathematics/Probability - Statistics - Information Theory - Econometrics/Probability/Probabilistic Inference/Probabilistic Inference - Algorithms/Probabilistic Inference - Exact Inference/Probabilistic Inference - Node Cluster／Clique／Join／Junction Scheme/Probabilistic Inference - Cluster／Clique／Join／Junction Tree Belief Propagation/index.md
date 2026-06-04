---
title: "Probabilistic Inference - Cluster／Clique／Join／Junction Tree Belief Propagation"
created: 2021-09-13T05:28:28.183-05:00
modified: 2021-12-11T05:24:27.327-06:00
parent: "[[Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme]]"
children: []
---
###### Cluster/Clique/Join/Junction Tree Belief Propagation
- a type of [[Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme|Node Clustering Scheme]]
- a type of [[Probabilistic Inference - Exact Inference|Exact Inference Algorithm]]
- similar to [[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation|Graph Belief Propagation]], however:
	- the generated cluster graph is without cycles (i.e. [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|cluster tree / tree decomposition]])
	- instead of loopy/iterative message updates, we:
		- choose a root node
		- sends messages up to the root starting with leaves

# Resources
- [Daphne Koller - Clique Tree Algorithm - Correctness](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/clique-tree-algorithm-correctness-pafFo)
- [Daphne Koller - Clique Tree Algorithm - Computation](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/clique-tree-algorithm-computation-Jm0AM)
- [Daphne Koller - Clique Tree Algorithm - Independence](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/clique-trees-and-independence-AEAdB)
- [Daphne Koller - Clique Tree Algorithm - VE/BE](https://www.coursera.org/lecture/probabilistic-graphical-models-2-inference/clique-trees-and-ve-kuQBI)
