---
title: "LP - Multi-Commodity Flow Problem - 1"
created: 2021-09-13T05:26:17.847-05:00
modified: 2021-09-13T05:26:17.847-05:00
parent: "[[LP - Multi-Commodity Flow (MCF) Problems]]"
children: []
---
here we describe 1 type of [[LP - Multi-Commodity Flow (MCF) Problems|Multi-Commodity Flow Problem]]
# <strong>Multi-Commodity Flow Problem - 1</strong>
###### given:
- given N nodes
- b<sub>ij</sub>is the flow demand from node i to j
- a<sub>ij</sub>is the cost per unit capacity for i → j link
- a<sub>ii</sub> = 0, b<sub>ii</sub> = 0 for all i so we do not have to take care of the case when i = j in the formulas

###### constraints:
- <strong>capacity constraint:</strong> The flow on each link cannot exceed the capacity of the link
- <strong>flow conservation:</strong> The total outgoing flow of a node minus the total incoming flow of the node must be equal to the source rate of the node.

###### objective:
- design which links will be built and with how much capacity, so that the given demand can be satisfied and the overall cost is minimum

# <strong>Linear Programming Standard Formulation</strong>

introduction of new variables:
- let z<sub>ij</sub> be capacity we implement on link (i,j)
- let x<sub>ij</sub><sup>(kl)</sup> be the amount of traffic that link (i,j) carries from node k to l
- let d<sub>i</sub><sup>(kl)</sup> show whether node i is a source, sink or transshipment node for the k → l flow
> [!list-indent-undo]
> > [!indent]
> > ![[LP - Multi-Commodity Flow Problem - 1/multi-commodity.png|200]]

[[Linear Programming／Optimization (LP)|LP]] [[LP - Standard／Canonical Form|standard formulation]]:
- <strong>objective function:</strong>
  min Z = Σ<sub>ij</sub>\[a<sub>ij</sub>z<sub>ij</sub>\]
- <strong>linear constraints:</strong>
  Σ<sub>kl</sub>\[x<sub>ij</sub><sup>(kl)</sup>\] - z<sub>ij</sub>≤ 0 <font style="color: rgb(128,128,128);">\# capacity constraint</font>
  Σ<sub>s</sub> \[x<sub>is</sub><sup>(kl)</sup>\] - Σ<sub>r</sub> \[x<sub>ri</sub><sup>(kl)</sup>\] = d<sub>i</sub><sup>(kl)</sup><font style="color: rgb(128,128,128);"> \# flow conservation & flow demand constraint</font><sub></sub>
- <strong>non-negative variables:</strong>
  ∀<sub>ij</sub> \[x<sub>ij</sub> ≥ 0\]
  ∀<sub>ij</sub> \[z<sub>ij</sub> ≥ 0\]

# <strong>Faster Solution</strong>
the cheapest way of sending b<sub>ij</sub>amount of flow from node k to l is to send it all along a path for which the sum of the link costs is minimum

This suggests the following simple algorithm:
- find a minimum-cost-path between each pair k, l of nodes, with respect to edge weights a<sub>ij</sub>
- set the capacity of each link (i,j) to be equal to the sum of each b<sub>kl</sub>values whose k-l minimum-cost-path contains link (i,j)
- the optimum cost can be expressed explicitly. Let E<sub>kl</sub>be the set of edges that are on the min cost k → l path. Then, according to the above, the optimal cost is:
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[LP - Multi-Commodity Flow Problem - 1/multi-commodity-faster-solution-optimal-cost.png|200]]
