---
title: "LP - Algorithms Solving Problem"
created: 2021-09-13T05:26:16.163-05:00
modified: 2026-05-21T15:08:30.210-05:00
parent: "[[Linear Programming／Optimization (LP)]]"
children:
  - "[[LP - Graphical Method]]"
---
# LP Solvers
<strong>LP solvers </strong>are general [[Algorithms|algorithms]] in solving [[Linear Programming／Optimization (LP)|Linear Programming]] [[Problems|problems]]

```merge-table
{
  "rows": [
    [
      {
        "content": "LP Solvers",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Running Times (i.e. [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Growth/Asymptotic Complexity/Analysis (Resource - Time/Space/Memory Complexity)]])",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[LP - Graphical Method|Graphical Method]]",
        "bg": "#F4F5F7"
      },
      "- visually or manually check optimum",
      "N/A"
    ],
    [
      {
        "content": "Simplex Method",
        "bg": "#F4F5F7"
      },
      "- key idea is to explore the vertices of the [[Polytope (Polygon - Polyhedron／Polyhedra)|polytope]], moving along the edges, until an optimal vertex is reached\n- many variants of the Simplex Method",
      "exponential time bounded (average case is much faster) in terms of how large the values occur in the variables and constraints"
    ],
    [
      {
        "content": "Interior-Point Method",
        "bg": "#F4F5F7"
      },
      "- starts from a point in the polytope and proceeds towards the optimum in a step-by-step descent fashion\n- many variants of the Interior-Point Method",
      "weakly polynomial bounded in terms of how large the values occur in the variables and constraints"
    ]
  ]
}
```

both the Simplex Method and Interior-Point Method are not strongly polynomial time bounded.
- <strong>weakly bounded</strong> - where the worst-case running time is bounded in terms of the value of variables and constraints only
- <strong>strongly bounded</strong> - where the worst-case running time is bounded in number of variables and constraints only (i.e. independently from values of variables and constraints)

no LP Solver is found to be strongly polynomial time bounded
