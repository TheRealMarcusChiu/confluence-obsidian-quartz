---
title: "Constrained Minimum Spanning Tree (CMST)"
created: 2021-09-13T05:25:32.111-05:00
modified: 2021-12-11T05:38:27.325-06:00
parent: "[[Spanning Tree]]"
children: []
---
<strong>Constrained Minimum Spanning Tree (CMST)</strong> is an MST that satisfies 1 or more constraints
# Example Constraints
- Any subtree rooted at a neighbor of the main root can have at most ν nodes. That is if a node A is directly connected to the main root in the tree, then the subtree (cluster) rooted at A can have altogether at most ν nodes (including A itself).
  Motivation: each outgoing link from the root carries data to the group of nodes in the subtree. The larger is such a cluster, the larger is the expected data rate. The speed of the link and of the corresponding output port of the root node may limit this.

# Algorithms in Computing CMST

Let us outline 3 heuristic algorithms for that last example constraint

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Algorithms|Algorithm]]",
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
        "content": "Modified Kruskal's Algorithm",
        "bg": "#F4F5F7"
      },
      "Run the original Kruskal algorithm on the nodes other than the root, but whenever a cluster arises pick its node nearest to the root and connect it directly to the root. After such a cluster is connected to the root, and there are still leftover nodes, then repeat the procedure with the leftover nodes (excluding those that already belong to a cluster)",
      ""
    ],
    [
      {
        "content": "Esau-William's Algorithm",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Sharma El-Bardai Algorithm",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
