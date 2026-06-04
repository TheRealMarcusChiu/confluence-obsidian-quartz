---
title: "Decision Trees (DT)"
created: 2020-06-02T14:03:34.861-05:00
modified: 2024-01-16T09:15:21.982-06:00
parent: "[[ML - Models]]"
children:
  - "[[Classification and Regression Tree (CART) - Regression Tree]]"
  - "[[Iterative Dichotomiser 3 (ID3)]]"
---
###### Decision Trees (DT)
- breaks input space into regions and has separate parameters for each region
- is a boolean-valued function
- is a type of [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised learning algorithm]]
- can be either:
	- [[ML - Parametric vs Non-Parametric|parametric]] - if decision tree algorithm is regularized with size constraints
	- [[ML - Parametric vs Non-Parametric|non-parametric]] - if decision tree algorithm is allowed to learn a tree of arbitrary size

# Ways to Stop Over-Splitting
- maximum depth
- minimum records per node

# Look-Ahead
- DT algorithms uses greedy approach which may not always make the best splits down the tree
- look-ahead helps, but is computationally intensive

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://explained.ai/decision-tree-viz/index.html](https://explained.ai/decision-tree-viz/index.html)

![](https://www.youtube.com/watch?v=7VeUPuFGJHk&ab_channel=StatQuestwithJoshStarmer)
