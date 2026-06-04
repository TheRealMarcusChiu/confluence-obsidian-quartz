---
title: "Linear Programming／Optimization (LP)"
created: 2021-09-13T05:26:15.770-05:00
modified: 2023-07-14T15:05:35.650-05:00
parent: "[[Mathematical Programming／Optimization - Problem Types]]"
children:
  - "[[LP - Algorithms Solving Problem]]"
  - "[[LP - Duality]]"
  - "[[LP - Network Flow Problems]]"
  - "[[LP - Ways Structuring Problem]]"
---
###### Linear Programming (LP) - Linear Optimization
````excerpt
- a type of [[Mathematical Programming／Optimization|mathematical optimization]] that achieves the best outcome (e.g. maximum profit or lowest cost) in a [[Mathematical Model|mathematical model]] whose requirements are represented by linear relationships
````
^excerpt

# LP - Example Problems
- 
> [!expand]- Toy Problem
> given:
> - a toy company make 2 toys: x<sub>1</sub> and x<sub>2</sub>
> - these toys are made of 2 materials: A and B
> - to make toy x<sub>1</sub>, it needs 5 units of A and 2 units of B
> - to make toy x<sub>2</sub>, it needs 3 units of A and 3 units of B
> - there is a maximum of 30 units of A
> - there is a maximum of 20 units of B
> - each toy x<sub>1</sub> can be sold for \$10
> - each toy x<sub>2</sub> can be sold for \$7
>
> what is the optimum product mix that maximizes the profit?
- [[LP - Network Flow Problems|Network Flow Problems]]

# LP - Ways to Structure an LP Problem

refer to: [[LP - Ways Structuring Problem|Ways Structuring Problem]]
# LP - Ways to Solve an LP Problem

refer to: [[LP - Algorithms Solving Problem|Algorithms Solving Problem]]
# LP - Theorems

> [!expand-ui]- Theorem #1
> If an LP has an optimal solution, then the optimal solution would be at the corner point of the feasible region

> [!expand-ui]- Theorem #2
> every LP either:
> - has a unique optimal solution
> - has multiple/infinite optimal solutions
> - infeasible - no feasible solution
> - unbounded - no feasible solution that is maximal
# LP - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
