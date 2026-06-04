---
title: "Flow Assignment／Routing Problem"
created: 2021-09-13T05:25:20.112-05:00
modified: 2021-09-13T05:25:20.112-05:00
parent: "[[Capacity and／or Flow Assignment Problems]]"
children:
  - "[[Flow Deviation Algorithm]]"
---
<strong>Flow Assignment Problem</strong> or <strong>Flow Routing Problem</strong> is the reversed situation of the [[Capacity Assignment Problem]]

determine the optimal assignment of flow on each link, when given capacities of each link and the traffic demand between each pair of nodes

assign flows in such a way that the network performance is optimized in terms of minimizing the [[Network Wide Mean Delay|network wide mean delay]]
# <strong>Problem</strong>

input data:
- network topology
- traffic matrix R, where each entry R<sub>pq</sub> is the traffic demand from node p to q
- link capacities C = (C<sub>1</sub>, C<sub>2</sub>, ..., C<sub>l</sub>)

### Objective

find the flow assignment f = (f<sub>1</sub>, f<sub>2</sub>, ..., f<sub>l</sub>), such that the [[Network Wide Mean Delay|network wide mean delay]] is minimized

to make the delay formula more general, we can include the propagation delay (Pi) and processing delay (Ki) on each link i. Since these delays are incurred for each packet, the additional term will be proportional to the arrival rate: λi(Pi + Ki). Using that fi = λi/μi, the additional delay is equal to fiu(Pi + Ki). Thus, the more general mean delay formula is:

![[Flow Assignment／Routing Problem/general-mean-delay-formula.png|301]]
### Constraints
- <strong>the flow cannot exceed the capacity on any link:</strong>
  f ≤ C
- <strong>the flow is non-negative:</strong>
  f ≥ 0
- <strong>the flow should satisfy the demand:</strong>
  "f is a multi-commodity flow satisfy R" is expressible via a system of linear inequalities. Thus, there is a matrix A and a vector b, such that the condition is expressed as
  
  Af ≤ b
  
  since in the [[LP - Multi-Commodity Flow (MCF) Problems|multi-commodity flow formulation]] the flow cannot exceed the capacity and cannot be negative
  
  therefore, this includes the first 2 constraints (f ≤ C and f ≥ 0) as well

### LP Problem Formulation

```merge-table
{
  "rows": [
    [
      {
        "content": "LP Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function:</strong>\n> [!list-indent-undo]\n> > [!indent]\n> > ![[Flow Assignment／Routing Problem/flow-assignment-objective-function.png|301]]\n- <strong>linear constraints:</strong>\n  Af ≤ b"
    ]
  ]
}
```

How do we find out the entries of the A matrix and the b vector? similar to [[LP - Multi-Commodity Flow Problem - 1]]
# <strong>Solution</strong>
- [[Flow Deviation Algorithm]]
