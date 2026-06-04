---
title: "Cluster／Clique／Join／Junction Graphs - Graph Decompositions"
created: 2021-09-13T05:25:28.115-05:00
modified: 2021-09-13T05:25:28.115-05:00
parent: "[[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs]]"
children:
  - "[[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width]]"
  - "[[Mini-Cluster Graphs／Trees]]"
---
> [!expand]- grahpical model syntax
> ![[Graphical Models#^excerpt]]

a <strong>cluster graph</strong> of a [[Graphical Models|graphical model]] ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩ is an [[Graph Theory - Terminology|undirected graph]] where:
- each 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒 is a subset of <strong>𝐗</strong>
- each edge (𝑖,𝑗) connecting 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑖</sub> and 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑗</sub>, is associated with a 𝑠𝑒𝑝𝑠𝑒𝑡 ⊆ {𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑖</sub>  ∩ 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑗</sub>}
- each factor 𝐹<sub>𝑖</sub> in <strong>𝐅</strong> is assigned to some 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒 𝑗 such that: 𝑆<sub>𝑖</sub> ⊆ 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑗</sub>
- existence property & uniqueness property:
	- for each pair of 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒𝑠 𝑖 & 𝑗:
		- for each variable 𝑋 ∊ {𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑖</sub>  ∩ 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒<sub>𝑗</sub>}
			- there EXITS a UNIQUE path between 𝑖 & 𝑗 for which all 𝑐𝑙𝑢𝑠𝑡𝑒𝑟-𝑛𝑜𝑑𝑒𝑠 and 𝑠𝑒𝑝𝑠𝑒𝑡𝑠 contain 𝑋

### Cluster Graph - Examples (Existence-Property & Uniqueness-Property)

> [!expand]- Click here to expand...
> ### Illegal Cluster Graphs
>
> violates existence-property
>
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/illegal-cluster-graph-violates-existence.png|301]]
>
> violates uniqueness-property
>
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/illegal-cluster-graph-violates-uniqueness.png|301]]
> ### Good Cluster Graph
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/good-cluster-graph.png|301]]
### Cluster Graph - Construction

> [!expand]- Click here to expand...
> ###### Bayesian Network → Join Graph
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/1.png|400]]
> ###### Arc Minimal Join Graph
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/2-arc-minimal-join-graph.png|400]]
> ###### Minimal Arc-Label Join Graph
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/3-minimal-arc-label-join-graph.png|400]]
> ###### Join Graph Decomposition
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/4-join-graph-decompositions.png|400]]
> ###### Tree Decomposition
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/5-tree-decomposition.png|400]]
> ###### Join Graphs Comparisons
> ![[Cluster／Clique／Join／Junction Graphs - Graph Decompositions/6-join-graph-comparisons.png|600]]
### Cluster Graph - Variants
- [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|Cluster Tree]] - a cluster graph has no cycles
- [[Mini-Cluster Graphs／Trees|Mini-Cluster Graphs/Trees]] - relaxes the existence-property and uniqueness-property
