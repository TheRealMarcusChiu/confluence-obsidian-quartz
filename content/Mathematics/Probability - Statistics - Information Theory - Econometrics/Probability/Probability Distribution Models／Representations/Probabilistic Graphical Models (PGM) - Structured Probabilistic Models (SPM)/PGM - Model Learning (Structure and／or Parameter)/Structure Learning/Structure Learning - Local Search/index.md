---
title: "Structure Learning - Local Search"
created: 2021-09-13T05:26:36.446-05:00
modified: 2023-12-26T20:29:45.453-06:00
parent: "[[Structure Learning]]"
children: []
---
- start with a random structure and compute its score
- generate all local structures of current structure:
	- structures are local by doing 1 of the following to the current structure:
		- add edge
		- remove edge
		- reverse edge
- for each local structure compute its score
- choose structure with highest score
- repeat until convergence

# Example Diagram
![[Structure Learning - Local Search/structure-learning-local-search.png|550]]
