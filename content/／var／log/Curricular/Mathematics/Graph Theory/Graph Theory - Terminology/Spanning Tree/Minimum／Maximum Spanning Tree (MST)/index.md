---
title: "Minimum／Maximum Spanning Tree (MST)"
created: 2021-09-13T05:25:32.940-05:00
modified: 2021-12-11T05:40:51.646-06:00
parent: "[[Spanning Tree]]"
children:
  - "[[Kruskal's Algorithm]]"
  - "[[Prim's Algorithm]]"
---
###### Minimum/Maximum Spanning Tree (MST)
- is a subset of edges that connects all vertices with the minimum/maximum sum edge-weight without any cycles
- every spanning tree has 𝑛-1 edges, given 𝑛 vertices in a graph

# MST - Algorithms

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
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Time Complexity]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Kruskal's Algorithm]]",
        "bg": "#F4F5F7"
      },
      "- a greedy algorithm\n- always add the next minimum/maximum link that does not form a circle (loop) with the already selected links\n- grows 1 tree until it spans the entire graph",
      "using binary heap and adjacency list\n\n𝑂(𝐸 𝑙𝑜𝑔 𝑉))\n- 𝐸 - num edges\n- 𝑉 - num nodes"
    ],
    [
      {
        "content": "[[Prim's Algorithm]]",
        "bg": "#F4F5F7"
      },
      "- a greedy algorithm\n- grow a spanning tree by adding in each step the minimum/maximum link between the existing tree and the rest of the graph (this automatically guarantees loop avoidance)\n- merges a forest of nodes until it becomes a tree",
      "using binary heap and adjacency list\n\n𝑂(𝐸 𝑙𝑜𝑔 𝑉))\n- 𝐸 - num edges\n- 𝑉 - num nodes"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
