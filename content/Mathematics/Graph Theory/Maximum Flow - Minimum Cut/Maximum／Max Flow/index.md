---
title: "Maximum／Max Flow"
created: 2021-09-13T05:25:43.180-05:00
modified: 2021-09-13T05:25:43.180-05:00
parent: "[[Maximum Flow - Minimum Cut]]"
children:
  - "[[Edmonds-Karp Algorithm]]"
  - "[[Ford Fulkerson Algorithm]]"
  - "[[Maximum Bipartite Matching Problem]]"
  - "[[Maximum Independent／Disjoint Paths Problem]]"
---
given:
- a graph which represents a flow network where every edge has a capacity
- two vertices source ‘s’ and sink ‘t’ in the graph

find the <strong>maximum flow</strong> from s to t with following constraints:
1. flow on an edge doesn’t exceed the given capacity of the edge
2. incoming flow is equal to outgoing flow for every vertex except s and t

### Algorithms That Solves The Maximum Flow Problem

```merge-table
{
  "rows": [
    [
      {
        "content": "Algorithm",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Time Complexity]] (Asymptotic Time)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Any Linear Programming",
      {
        "content": "[[LP - Max Flow Problem|Linear Programming]]",
        "align": "center"
      },
      "not practical"
    ],
    [
      "[[Ford Fulkerson Algorithm|Ford-Fulkerson Algorithm]]",
      {
        "content": "Augmenting Path",
        "align": "center"
      },
      "O(Ef) where f is max-flow value"
    ],
    [
      "[[Edmonds-Karp Algorithm]]",
      {
        "content": "Shortest Path",
        "align": "center"
      },
      "O(VE²)"
    ],
    [
      "Dinic's Algorithm",
      {
        "content": "Improved Shortest Path",
        "align": "center"
      },
      "O(V²E)"
    ],
    [
      "Karzanov's Algorithm",
      {
        "content": "Preflow-Push",
        "align": "center"
      },
      "O(V<sup>3</sup>)"
    ],
    [
      "Sleator-Tarjan",
      {
        "content": "Dynamic Trees",
        "align": "center"
      },
      "O(EV logV)"
    ],
    [
      "Goldbreg-Tarjan",
      {
        "content": "FIFO Preflow-Push",
        "align": "center"
      },
      "O(EV log(V<sup>2</sup>/E))"
    ]
  ]
}
```
### Applications of Maximum Flows to Solve Other Optimization Problems
- [[Maximum Independent／Disjoint Paths Problem|maximum disjoint paths problem]] -
- [[Maximum Bipartite Matching Problem|maximum bipartite matching problem]] -
