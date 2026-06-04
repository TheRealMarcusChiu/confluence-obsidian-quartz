---
title: "Tabu Search (TS)"
created: 2019-12-01T12:11:24.445-06:00
modified: 2023-01-21T15:47:25.567-06:00
parent: "[[Algorithm Types]]"
children: []
---
###### Tabu Search (TS)
- is a [meta-heuristic](https://en.wikipedia.org/wiki/Metaheuristic) search method employing [local search](https://en.wikipedia.org/wiki/Local_search_(optimization)) methods used for [[Mathematical Programming／Optimization|mathematical optimization]]
- is similar to ([[Greedy／Local-Search Algorithms|greedy-local-search]] and gradient-descent) but utilizes a tabu list that contains disallowed moves

# Tabu Search - Advantages
- Improves greedy-local-search by avoiding getting trapped in a local optimum too early.
- Offers flexibility by the possibility of adjusting the tabu list structure and rules to the specific problem. If this is done well, good results can be achieved

# Tabu Search - Disadvantages
- Offers only heuristic improvement, but does not guarantee anything in a strict sense: there is no guaranteed convergence to a global optimum (as opposed to simulated annealing).
- Usually requires heavy problem-specific adjustment and there are no general rules that would tell how to do it, much is left to intuition. Therefore, it often involves a significant algorithm design challenge.

# Tabu Search - Designing a Good Search Space

the search space consists of:
- domain - is the set of all possible objects in which we search for an optimal one
- neighborhood definition - a subset of a domain that is "local" to a specified object in the domain

for example:
- domain D is the set of n-dimensional binary vectors
- neighborhood definition is N(x) = {y | y differs from x in at most 2 bits}.

the domain is usually given, but the neighborhood structure is up to us to choose
