---
title: "Simulated Annealing (SA)"
created: 2019-12-01T12:39:11.297-06:00
modified: 2026-05-21T13:05:20.859-05:00
parent: "[[Algorithm Types]]"
children: []
---
###### Simulated Annealing (SA)
````excerpt
- is a probabilistic technique for solving [[Decision Problems - Optimization Problems|optimization problems]]
- improves the [[Greedy／Local-Search Algorithms|greedy local search]]
````
^excerpt

# How Simulated Annealing Works
Assume the task is to minimize a function f(x).

```merge-table
{
  "rows": [
    [
      "At each iteration we choose a point randomly from the neighborhood of the current point. Let x denote the current point and let y be the randomly chosen neighbor."
    ],
    [
      "If f(y) \\< f(x), that is, a better point is found, then we accept it and y will be the next position."
    ],
    [
      "If y is not better or even worse than x, we still accept it with a certain probability. This probability is computed as follows. Define a quantity ∆E by\n\n∆E = f(y) − f(x).\n\nThis shows by how much y is worse than x. The notation is based on a physical analogy in which the function value represents the energy of a state in the state space and then ∆E is the energy difference. With this the acceptance probability is defined as\n\nProb<sub>accept</sub> = e<sup>−∆E/kT</sup>\n\nwhere k is a constant and T is a parameter called temperature (these come again from the physical analogy, where k is called the Boltzmann constant, but this plays no role in the optimization, here we can sim- ply take k = 1). Thus, the new point y is accepted with probability Prob<sub>accept</sub>or we stay in x with probability 1 − Prob<sub>accept</sub>."
    ],
    [
      "As the iteration proceeds the temperature is gradually decreased. Thus, instead of a constant T , we use a so called cooling schedule, which is a sequence T<sub>n</sub>, such that in the n<sup>th</sup>iteration T<sub>n</sub>is used as the temperature parameter. The cooling schedule is chosen such that T<sub>n</sub>→ 0 holds. A typical choice is the logarithmic cooling schedule:\n\nT<sub>n</sub>= a / (b + log n)\n\nwhere a, b are positive constants"
    ],
    [
      "As a stopping rule we can again say that if no improvement was obtained over a certain number of iterations than the algorithm stops. Or, we can continue the iterations until the temperature drops below a small ε \\> 0, that is, the system “freezes”"
    ]
  ]
}
```
