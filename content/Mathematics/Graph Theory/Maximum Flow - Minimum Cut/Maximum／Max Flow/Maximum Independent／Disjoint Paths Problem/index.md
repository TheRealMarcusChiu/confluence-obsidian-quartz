---
title: "Maximum Independent／Disjoint Paths Problem"
created: 2021-09-13T05:25:44.212-05:00
modified: 2021-09-13T05:25:44.212-05:00
parent: "[[Maximum／Max Flow]]"
children: []
---
### Maximum Independent/Disjoint Paths Problem Types
- <strong>maximum edge-independent/disjoint paths problem</strong> - find max number of <strong>edge</strong>-disjoint s-t paths (2 paths are <strong>edge</strong>-independent/disjoint if they have no <strong>arc/edge</strong> in common)
- <strong>maximum node-independent/disjoint paths problem</strong> - find max number of <strong>node</strong>-disjoint s-t paths (2 paths are <strong>node</strong>-independent/disjoint if they have no <strong>vertex/node</strong> in common)

### Solving Maximum Edge-Independent/Disjoint Paths Problem With Maximum Flow
- assign each directed edge with a unit capacity
- then apply [[Maximum／Max Flow|MaxFlow]] algorithm

<strong>THEOREM:</strong> there are k edge-independent/disjoint paths from s to t if and only if the [[Maximum／Max Flow|max flow]] value is k

![[Maximum Independent／Disjoint Paths Problem/edge-disjoint-max-flow.png|500]]
### Solving ALL Independent/Disjoint Path Problems With Maximum Flow

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Edge-Independent/Disjoint Paths",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Node-Independent/Disjoint Paths",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Directed Graph",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- reduce to MaxFlow with unit capacities",
      "- node split\n- reduce to MaxFlow with unit capacities"
    ],
    [
      {
        "content": "Undirected Graph",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- use gadget\n- reduce to MaxFlow with unit capacities",
      "- edge split\n- node split\n- reduce to MaxFlow with unit capacities"
    ]
  ],
  "tableStyle": "width: 70.5323%;"
}
```
### Node Split
![[Maximum Independent／Disjoint Paths Problem/disjoint-path-decompositions-node-split.png|200]]
### Edge Split
![[Maximum Independent／Disjoint Paths Problem/disjoint-path-decompositions-edge-split.png|200]]
### Gadget
![[Maximum Independent／Disjoint Paths Problem/disjoint-path-decompositions-gadget.png|200]]
