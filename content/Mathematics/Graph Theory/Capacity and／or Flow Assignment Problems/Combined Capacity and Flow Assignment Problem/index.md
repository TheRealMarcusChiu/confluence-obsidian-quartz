---
title: "Combined Capacity and Flow Assignment Problem"
created: 2021-09-13T05:25:19.290-05:00
modified: 2021-09-13T05:25:19.290-05:00
parent: "[[Capacity and／or Flow Assignment Problems]]"
children: []
---
In [[Capacity Assignment Problem]] and [[Flow Assignment／Routing Problem|Flow Assignment Problem]] we have learned how to find capacities or flows if one of them is known and we want to dimension the other.

<strong>Combined Capacity and Flow Assignment Problem</strong> determine the optimal capacities of each link and the optimal assignment of flow on each link, when given the traffic demand between every pair of nodes
# <strong>Problem</strong>

input:
- network topology
- traffic matrix R, where each entry R<sub>pq</sub> is the traffic demand from node p to q
- an upper limit T<sub>max</sub>on the [[Network Wide Mean Delay|network-wide mean delay]]
- a cost function d<sub>i</sub>(C<sub>i</sub>) for each link, similarly to the [[Capacity Assignment Problem|capacity assignment problem]]
  where d<sub>i</sub> and d<sub>i0</sub> are constants
> [!list-indent-undo]
> > [!indent]
> > ![[Combined Capacity and Flow Assignment Problem/Screen Shot 2019-12-01 at 5.54.47 PM.png|150]]

### Objective

find both:
- link capacities C = (C<sub>1</sub>, C<sub>2</sub>, ..., C<sub>l</sub>)
- flow assignment f = (f<sub>1</sub>, f<sub>2</sub>, ..., f<sub>l</sub>)

such that the total cost

![[Combined Capacity and Flow Assignment Problem/Screen Shot 2019-12-01 at 5.54.31 PM.png|130]]

is minimized
### Constraints
- The flow <strong>f </strong>is a [[LP - Multi-Commodity Flow Problem - 1|multi-commodity flow]] satisfying <strong>R</strong>, as in the [[Flow Assignment／Routing Problem|flow assignment problem]]. Again, this can be expressed by a system of linear inequalities, but now the capacities are also variables, so we may put it in the form
  
  <strong>Af </strong>+ <strong>BC </strong>≤ <strong>b</strong>
  
  with an appropriate choice of the matrices <strong>A</strong>, <strong>B </strong>and the vector <strong>b</strong>. For simplicity, we assume that it includes the obvious constraints <strong>f </strong>≤ <strong>C</strong>, <strong>C</strong> ≥ 0 and <strong>f</strong> ≥ 0
- The network-wide mean delay cannot exceed T<sub>max</sub>. Using our earlier derived formula for T this can be expressed as
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[Combined Capacity and Flow Assignment Problem/max-network-wide-mean-delay.png|301]]
  
  where γ = Σ<sub>p,q</sub>\[R<sub>pq</sub>\]. The notation T(<strong>f,C</strong>) emphasizes that now both <strong>f</strong> and <strong>C </strong>are variables to be optimized

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
      "- <strong>objective function:</strong>\n  minimize\n> [!list-indent-undo]\n> > [!indent]\n> > ![[Combined Capacity and Flow Assignment Problem/Screen Shot 2019-12-01 at 5.54.31 PM.png|100]]\n- <strong>linear constraints:</strong>\n> [!list-indent-undo]\n> > [!indent]\n> > ![[Combined Capacity and Flow Assignment Problem/combined-capacity-and-flow-linear-constraints.png|150]]"
    ]
  ]
}
```
# <strong>Solution</strong>

Even though the task looks complicated, there is a relatively simple iterative procedure to find at least a local optimum. This makes use of the fact that for the capacity assignment problem we already have an explicit formula for the optimal assignment (in case of linear cost function). If the capacities are assigned according to that formula, then the resulting cost will depend on the flow variables only, as it is already optimized with respect for the capacities:

![[Combined Capacity and Flow Assignment Problem/combined-capacity-and-flow-assignment-solution.png|301]]

Now we can try to optimize D(f) with respect to f, which can be done by a heuristic iterative algorithm, as sketched below:
1. find an initial feasible flow f(0) (can be done by solving the multi-commodity flow problem via linear programming)
2. compute link weights according to
   
   > [!list-indent-undo]
   > > [!indent]
   > > ![[Combined Capacity and Flow Assignment Problem/combined-capacity-and-flow-assignment-solution-compute-weights.png|150]]
   
   where j is the iteration index
   
   solve the minimum cost multi-commodity flow problem (via [[Linear Programming／Optimization (LP)|linear programming]]) using the w<sub>i</sub><sup>(j)</sup>values as link costs. The solution is the next iteration <strong>f</strong><sup>(j+1)</sup>
3. if D(f<sup>(j+1)</sup>) ≥ D(f<sup>(j)</sup>), then STOP, f(j) is a local optimum. Otherwise set j := j + 1 and repeat from Step 2
4. once the algorithm has found a (locally) optimum flow, the corresponding capacities can be directly computed from the optimal capacity assignment solution:
   
   > [!list-indent-undo]
   > > [!indent]
   > > ![[Combined Capacity and Flow Assignment Problem/combined-capacity-and-flow-assignment-solution-compute-capacities.png|220]]
