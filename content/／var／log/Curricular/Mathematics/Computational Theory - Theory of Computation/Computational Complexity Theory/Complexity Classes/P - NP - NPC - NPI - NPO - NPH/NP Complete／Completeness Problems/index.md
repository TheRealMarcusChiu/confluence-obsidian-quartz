---
title: "NP Complete／Completeness Problems"
created: 2021-09-13T05:24:52.502-05:00
modified: 2023-12-07T14:09:51.344-06:00
parent: "[[P - NP - NPC - NPI - NPO - NPH]]"
children:
  - "[[Minimum Feedback Vertex Set (FVS) Problem]]"
---
- <strong>NP</strong> - non-deterministic polynomial
- <strong>NPC</strong> - NP-Complete

# NP Complete Problems

```merge-table
{
  "rows": [
    [
      "1. Circuit-SAT\n2. SAT\n3. CNF-SAT\n4. 3-CNF-SAT\n5. 3-Coloring\n6. Clique Problem\n7. Integer Programming\n8. Independent Set\n9. Vertex Cover\n10. Hamilton Cycle\n11. Subset Sum Problem\n12. Set Partition\n13. [[Minimum Feedback Vertex Set (FVS) Problem]]",
      "![[NP Complete／Completeness Problems/NPC Tree.png|301]]"
    ]
  ]
}
```
# Karp's 21 NP-Complete Problems
1. <strong>[Satisfiability](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem)</strong>: the boolean satisfiability problem for formulas in [conjunctive normal form](https://en.wikipedia.org/wiki/Conjunctive_normal_form) (often referred to as SAT)
	- <strong>[0–1 integer programming](https://en.wikipedia.org/wiki/Integer_linear_programming)</strong> (A variation in which only the restrictions must be satisfied, with no optimization)
	- <strong>[Clique](https://en.wikipedia.org/wiki/Clique_problem)</strong> (see also [independent set problem](https://en.wikipedia.org/wiki/Independent_set_problem))
		- <strong>[Set packing](https://en.wikipedia.org/wiki/Set_packing)</strong>
		- <strong>[Vertex cover](https://en.wikipedia.org/wiki/Vertex_cover_problem)</strong>
			- <strong>[Set covering](https://en.wikipedia.org/wiki/Set_cover_problem)</strong>
			- <strong>[Feedback node set](https://en.wikipedia.org/wiki/Feedback_vertex_set)</strong>
			- <strong>[Feedback arc set](https://en.wikipedia.org/wiki/Feedback_arc_set)</strong>
			- <strong>[Directed Hamilton circuit](https://en.wikipedia.org/wiki/Hamiltonian_path_problem)</strong> (Karp's name, now usually called <strong>Directed Hamiltonian cycle</strong>)
				- <strong>[Undirected Hamilton circuit](https://en.wikipedia.org/wiki/Hamiltonian_path_problem)</strong> (Karp's name, now usually called <strong>Undirected Hamiltonian cycle</strong>)
	- <strong>[Satisfiability with at most 3 literals per clause](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#3-satisfiability)</strong> (equivalent to 3-SAT)
		- <strong>[Chromatic number](https://en.wikipedia.org/wiki/Graph_coloring)</strong> (also called the [Graph Coloring Problem](https://en.wikipedia.org/wiki/Graph_coloring))
			- <strong>[Clique cover](https://en.wikipedia.org/wiki/Clique_cover)</strong>
			- <strong>[Exact cover](https://en.wikipedia.org/wiki/Exact_cover)</strong>
				- <strong>[Hitting set](https://en.wikipedia.org/wiki/Hitting_set)</strong>
				- <strong>[Steiner tree](https://en.wikipedia.org/wiki/Steiner_tree_problem)</strong>
				- <strong>[3-dimensional matching](https://en.wikipedia.org/wiki/3-dimensional_matching)</strong>
				- <strong>[Knapsack](https://en.wikipedia.org/wiki/Knapsack_problem)</strong> (Karp's definition of Knapsack is closer to [Subset sum](https://en.wikipedia.org/wiki/Subset_sum))
					- <strong>[Job sequencing](https://en.wikipedia.org/wiki/Job_shop_scheduling)</strong>
					- <strong>[Partition](https://en.wikipedia.org/wiki/Partition_problem)</strong>
						- <strong>[Max cut](https://en.wikipedia.org/wiki/Maximum_cut)</strong>
