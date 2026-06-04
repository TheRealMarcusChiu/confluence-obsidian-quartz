---
title: "Binary Ordered Relations - Types (Partial Order - Total Order - Quasi Order)"
created: 2021-09-13T05:29:23.189-05:00
modified: 2023-07-03T15:45:42.775-05:00
parent: "[[Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)]]"
children: []
---
# Prerequisite Reading
- [[Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)|Ordered Binary Relation]]

# Binary Ordered Relation - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "[[Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)|Binary Relation Property]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 6
      },
      null,
      null,
      null,
      null,
      null,
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "reflexive",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "irreflexive",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "symmetric",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "antisymmetric",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "connexity/totality",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "transitive",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Partial Order",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">OPTIONAL</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">OPTIONAL</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- subset ⊆"
    ],
    [
      {
        "content": "Total Order",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">OPTIONAL</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- less-than-equal ≤"
    ],
    [
      {
        "content": "Quasi Order",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">OPTIONAL</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">OPTIONAL</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">OPTIONAL</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- proper subset ⊂\n- less-than \\<"
    ]
  ],
  "tableStyle": "width: 93.097%;"
}
```

NOTE: every total order is also a partial order
# Binary Ordered Relation - Type Examples

> [!expand]- Partial Order Example
> ###### a binary relation '⊆' partially orders set 𝑆={𝑎,𝑏,𝑐}
> - <strong>reflexive</strong> - 𝑥⊆𝑥, for all 𝑥∊𝑆
> - <strong>antisymmetric</strong> - if 𝑥⊆𝑦 and 𝑦⊆𝑥, then 𝑥=𝑦, for all 𝑥,𝑦∊𝑆
> - <strong>transitive</strong> - if 𝑥⊆𝑦 and 𝑦⊆𝑧, then 𝑥⊆𝑧, for all 𝑥,𝑦,𝑧∊𝑆
> - <strong><strong>connexity</strong> </strong>- not every 2 distinct subsets of 𝑆 are relatable with the binary relation '⊆' (e.g. both: {𝑎}⊆{𝑏} and {𝑏}⊆{𝑎} are false)
>
> the binary relation '⊆' over 𝑆 is not a total order
>
> the figure below shows a directed graph of the example partial order (arrows represent '⊆')
>
> ![[Binary Ordered Relations - Types (Partial Order - Total Order - Quasi Order)/partial set.png|330x250]]
> - notice that there are pairs of nodes not connected by an arrow, therefore it does not have <strong>connexity</strong>
> - the figure above does not display an arrow from every node back to itself for<strong> reflexivity</strong>, pretend it's there

> [!expand]- Total Order Example
> ###### a binary relation '≤' totally orders set 𝑆 of all integers
> - <strong>reflexive</strong> - 𝑥≤𝑥, for all 𝑥∊𝑆
> - <strong>antisymmetric</strong> - if 𝑥≤𝑦 and 𝑦≤𝑥, then 𝑥=𝑦, for all 𝑥,𝑦∊𝑆
> - <strong>transitive</strong> - if 𝑥≤𝑦 and 𝑦≤𝑧, then 𝑥≤𝑧, for all 𝑥,𝑦,𝑧∊𝑆
> - <strong>connexity</strong> - 𝑥≤𝑦 or 𝑦≤𝑥, for all 𝑥,𝑦∈𝑆
>
> the figure below shows a directed graph of the example total order (arrows represent '≤')
>
> ![[Binary Ordered Relations - Types (Partial Order - Total Order - Quasi Order)/total order example (1).jpg|582x150]]
> - notice the <strong>connexity </strong>that every node is connected with every other node with a directed link
> - the figure above does not display an arrow from every node back to itself for<strong> reflexivity</strong>, pretend it's there
>
> the binary relation '≤' over S is also a partial order. In fact, every binary relation that is a total order is also a partial order
