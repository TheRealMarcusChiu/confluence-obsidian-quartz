---
title: "Single-Source Shortest Paths Problem"
created: 2021-09-13T05:25:45.968-05:00
modified: 2023-05-07T16:14:56.503-05:00
parent: "[[Shortest Path(s) Problems]]"
children:
  - "[[Bellman-Ford Algorithm]]"
  - "[[Dijkstra's Algorithm]]"
---
###### Single-Source Shortest Paths Problem
````excerpt
- is a type of [[Shortest Path(s) Problems|shortest-path problem]] where given a vertex v we need to find the shortest path TO every other node
````
^excerpt

# Algorithms

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
        "content": "Time Complexities",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Dijkstra's Algorithm]]",
        "bg": "#F4F5F7"
      },
      "- a [[Greedy／Local-Search Algorithms|greedy algorithm]]\n- fails on negative weight",
      "O(V<sup>2</sup>)"
    ],
    [
      {
        "content": "[[Bellman-Ford Algorithm]]",
        "bg": "#F4F5F7"
      },
      "- not greedy\n- fails on negative weight cycles because there is no shortest path on graphs with negative weight cycles",
      "O(VE)"
    ]
  ]
}
```
