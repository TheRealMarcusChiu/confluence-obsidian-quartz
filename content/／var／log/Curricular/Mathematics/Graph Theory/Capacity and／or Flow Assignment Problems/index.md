---
title: "Capacity and／or Flow Assignment Problems"
created: 2021-09-13T05:25:18.387-05:00
modified: 2021-09-13T05:25:18.387-05:00
parent: "[[Graph Theory]]"
children:
  - "[[Capacity Assignment Problem]]"
  - "[[Combined Capacity and Flow Assignment Problem]]"
  - "[[Flow Assignment／Routing Problem]]"
  - "[[Network Wide Mean Delay]]"
---
consider network design problems in which the link capacities are also to be dimensioned and the flows of traffic are to be routed
### Variants of The Problem

```merge-table
{
  "rows": [
    [
      {
        "content": "Variants",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<strong>[[Capacity Assignment Problem|capacity assignment problem]]</strong>",
      "<strong>given:</strong>\n- assigned flow value of each link\n- traffic demand between each pair of nodes\n\n<strong>objective:</strong>\n- determine the optimal capacities of each link"
    ],
    [
      "<strong>[[Flow Assignment／Routing Problem|flow assignment problem]]</strong>",
      "<strong>given:</strong>\n- capacities of each link\n- traffic demand between each pair of nodes\n\n<strong>objective:</strong>\n- determine the optimal assignment of flow on each link"
    ],
    [
      "<strong>[[Combined Capacity and Flow Assignment Problem|combined capacity and flow assignment problem]]</strong>",
      "<strong>given:</strong>\n- traffic demand between each pair of nodes\n\n<strong>objective:</strong>\n- determine the optimal capacities of each link\n- determine the optimal assignment of flow on each link"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Heuristic Algorithms For Capacity and/or Flow Assignment
- branch exchange algorithm
- cut saturation algorithm
- routing with economies of scale
