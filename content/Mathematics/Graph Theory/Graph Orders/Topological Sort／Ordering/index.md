---
title: "Topological Sort／Ordering"
created: 2021-09-13T05:25:22.185-05:00
modified: 2023-06-18T18:18:01.874-05:00
parent: "[[Graph Orders]]"
children: []
---
###### Topological Sort - Topological Ordering
````excerpt
- is a linear ordering of a directed graph's vertices such that for every directed edge <em>𝑢𝑣</em> from vertex <em>𝑢</em> to vertex <em>𝑣</em>, <em>𝑢</em> comes before <em>𝑣</em> in the ordering
````
^excerpt

# Examples

```merge-table
{
  "rows": [
    [
      "The graph shown to the left has many valid topological sorts, including:\n- 5, 7, 3, 11, 8, 2, 9, 10 (visual left-to-right, top-to-bottom)\n- 3, 5, 7, 8, 11, 2, 9, 10 (smallest-numbered available vertex first)\n- 5, 7, 3, 8, 11, 10, 9, 2 (fewest edges first)\n- 7, 5, 11, 3, 10, 8, 9, 2 (largest-numbered available vertex first)\n- 5, 7, 11, 2, 3, 8, 9, 10 (attempting top-to-bottom, left-to-right)\n- 3, 7, 8, 5, 11, 10, 2, 9 (arbitrary)",
      "![[Topological Sort／Ordering/directed-acyclic-graph.png|301]]"
    ]
  ]
}
```
