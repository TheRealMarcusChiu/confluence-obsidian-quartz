---
title: "K3 Algorithm"
created: 2021-09-13T05:26:36.186-05:00
modified: 2021-09-13T05:26:36.186-05:00
parent: "[[Structure Learning]]"
children: []
---
###### K3 Algorithm
- is a type of [[Greedy／Local-Search Algorithms|greedy algorithm]] for [[Structure Learning|structure learning]]

### Algorithm
```
foreach var in variables:
	var.parents = []
	successively add variables (as parents) until the score does not increase. at each step add the variable that increases the score the most
```
