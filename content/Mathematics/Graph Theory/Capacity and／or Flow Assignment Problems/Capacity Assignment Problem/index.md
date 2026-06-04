---
title: "Capacity Assignment Problem"
created: 2021-09-13T05:25:18.591-05:00
modified: 2021-09-13T05:25:18.591-05:00
parent: "[[Capacity and／or Flow Assignment Problems]]"
children: []
---
<strong>Capacity Assignment Problem</strong> determine the optimal capacities of each link, when given assigned flow value of each link and traffic demand between each pair of nodes
# <strong>Problem</strong>

assuming that the following information is given as input:
- network topology
- traffic matrix R, where each entry R<sub>pq</sub> is the traffic demand from node p to q
- flow routing, in the form of a prescribed flow value f<sub>i</sub> on each link i. These values are collected in the flow vector f = (f<sub>1</sub>,<sub></sub>f<sub>2</sub>, ..., f<sub>l</sub>)
- an upper limit T<em><sub>max</sub></em> on the network-wide mean delay
- a cost function d<sub>i</sub>(C<sub>i</sub>) for each link. this means, if we allocate C<sub>i</sub> capacity to link i, then its cost will be d<sub>i</sub>(C<sub>i</sub>). A special case when the problem is well solvable is the linear cost with fixed charge. In thus case the cost function is of the form: 
  
  where d<sub>i</sub> and d<sub>i0</sub> are constants
> [!list-indent-undo]
> > [!indent]
> > ![[Capacity Assignment Problem/Screen Shot 2019-12-01 at 5.54.47 PM.png|150]]

### Objective
Find the link capacities C = (C<sub>1</sub>, C<sub>2</sub>, . . . , C<sub>l</sub>), such that the total cost:

![[Capacity Assignment Problem/Screen Shot 2019-12-01 at 5.54.31 PM.png|130]]

is minimized
### Constraints
- <strong>the flow cannot exceed the capacity on any link:</strong>
  f<sub>i</sub> ≤ C<sub>i</sub>(∀i)
  in vector form:
  f ≤ C
- <strong>the capacity is non-negative:</strong>
  C<sub>i</sub>≥ 0 (∀i)
  in vector form:
  C ≥ 0
- <strong>the network-wide mean delay cannot exceed T<sub>max</sub>:</strong>
  using the formula we derived for T (refer to: [[Network Wide Mean Delay]]) this can be expressed as
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[Capacity Assignment Problem/queueing-delay-as-a-penalty.png|150]]
  
  
  where γ is a constant that represents the total traffic rate within the network
  γ = Σ<sub>p,q</sub>\[R<sub>pq</sub>\]

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
      "- <strong>objective function:</strong>\n  minimize\n> [!list-indent-undo]\n> > [!indent]\n> > ![[Capacity Assignment Problem/Screen Shot 2019-12-01 at 5.54.31 PM.png|100]]\n- <strong>linear constraints:</strong>\n  f ≤ C\n  C ≥ 0\n> [!list-indent-undo]\n> > [!indent]\n> > ![[Capacity Assignment Problem/queueing-delay-as-a-penalty.png|150]]"
    ]
  ],
  "tableStyle": "width: 47.3438%;"
}
```
# <strong>Solution</strong>

if cost function d<sub>i</sub>(C<sub>i</sub>) is linear (i.e. d<sub>i</sub>(C<sub>i</sub>) = d<sub>i</sub>C<sub>i</sub> + d<sub>i0</sub>) there is an explicit formula for calculating the optimal capacity assignment:

![[Capacity Assignment Problem/optimal-capacity-assignment-when-cost-function-is-linear.png|301]]

once optimal capacity values are known, we substitute them into the cost function to obtain the optimal total cost

![[Capacity Assignment Problem/optimal-total-cost.png|250]]

after substituting the expression of C<sub>i,opt</sub> and rearranging we get

![[Capacity Assignment Problem/optimal-cost-rearranged.png|350]]
