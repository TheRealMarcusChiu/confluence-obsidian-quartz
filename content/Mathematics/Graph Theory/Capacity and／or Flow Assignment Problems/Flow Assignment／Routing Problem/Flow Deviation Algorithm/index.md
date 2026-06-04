---
title: "Flow Deviation Algorithm"
created: 2021-09-13T05:25:20.624-05:00
modified: 2021-09-13T05:25:20.624-05:00
parent: "[[Flow Assignment／Routing Problem]]"
children: []
---
<strong>Flow Deviation Algorithm</strong> is used to solve the [[Flow Assignment／Routing Problem|Flow Assignment/Routing Problem]]
### Notations
- <strong>each link i is assigned a weight, computed as</strong>
  
  w<sub>i</sub>= ∂T/∂f<sub>i</sub>
  
  this is the partial derivative of the objective function with respect to the flow on link i, evaluated with the actual flow that we have in the current iteration (as the iteration algorithm proceeds, the flow values change, so the weights will change, too)<sub></sub>
- <strong>shortest path flow Φ </strong>
  
  this is the flow assignment that is obtained by routing all the flow between each source-destination pair along the minimum weight path, with respect to the current weights (=shortest path)
  
  (note: routing everything along the shortest paths may violate the capacity constraints. if this happens, then we route as much as possible along shortest paths and route the rest along the second shortest paths, etc)

### Flow Deviation Algorithm
1. compute an initial feasible flow <strong>f</strong><sup>(0)</sup>(note: this may require solving a [[LP - Multi-Commodity Flow Problem - 1|multi-commodity flow problem]])
2. compute the link weights: w<sub>i</sub>= ∂T/∂f<sub>i</sub>with the current flow
3. using these weights compute the shortest path flow for current iteration j
4. let us denote the resulting flow vector by <strong>Φ</strong><sup>(j)</sup>
5. update the flow vector f (i.e. compute the next iteration):
   <strong>f</strong><sup>(j+1)</sup> = (1 - α<sub>j</sub>)<strong>Φ</strong><sup>(j)</sup>+ α<sub>j</sub><strong>f</strong><sup>(j)</sup>
6. where α<sub>j</sub> is a parameter with 0 ≤ α<sub>j</sub>≤ 1. the value of α<sub>j</sub> is chosen as follows. compute the delay (objective function) with the flow vector <strong>f</strong><sub>α</sub> = (1 - α)<strong>Φ</strong><sup>(j)</sup>+ α<strong>f</strong><sup>(j)</sup>:
   T(<strong>f</strong><sub>α</sub>) = T \[(1 - α)<strong>Φ</strong><sup>(j)</sup>+ α<strong>f</strong><sup>(j)</sup>\]
7. since <strong>Φ</strong><sup>(j)</sup>and <strong>f</strong><sup>(j)</sup>are already known vectors, therefore, the resulting delay T depends only on the single variable α. Now choose α such that the delay is minimized, this will define α<sub>j</sub>
   α<sub>j</sub>= arg min<sub>0≤α≤1</sub>T \[(1 - α)<strong>Φ</strong><sup>(j)</sup>+ α<strong>f</strong><sup>(j)</sup>\]
   where arg min means the minimizing argument of the function
8. if <em>|T(<strong>f</strong><sup>(j+1)</sup>) − T(<strong>f</strong><sup>(j)</sup>)| \< ε </em>for a given error bound <em>ε </em>\> 0, then STOP. Otherwise, set j := j + 1 and repeat from step 1
