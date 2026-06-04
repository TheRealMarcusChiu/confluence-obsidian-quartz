---
title: "Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)"
created: 2021-09-13T05:29:22.984-05:00
modified: 2023-06-13T11:22:53.259-05:00
parent: "[[Binary Relation (Correspondence ／ Dyadic Relation ／ 2-Place Relation)]]"
children:
  - "[[Binary Ordered Relations - Types (Partial Order - Total Order - Quasi Order)]]"
  - "[[Equivalence Relations]]"
---
###### Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)
````excerpt
- is a type of [[Binary Relation (Correspondence ／ Dyadic Relation ／ 2-Place Relation)|binary relation]] 𝑅 on a single set 𝐴 such that 𝑅 is a subset of:
	- cartesian product 𝐴<sup>2</sup> = 𝐴×𝐴
	- ordered pairs of elements of 𝐴
````
^excerpt

# Ordered Binary Relation - Properties

an ordered binary relation 𝑅 on a single set 𝑆 can have any of the following properties:

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>𝑅 is</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Property</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>on set 𝑆 when</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>condition</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>elements</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝑅 is",
      {
        "content": "reflexive",
        "bg": "#F4F5F7"
      },
      "on set 𝑆 when",
      "⟨𝑥,𝑥⟩∊𝑅",
      "for ∀𝑥∊𝑆"
    ],
    [
      "𝑅 is",
      {
        "content": "irreflexive",
        "bg": "#F4F5F7"
      },
      "on set 𝑆 when",
      "⟨𝑥,𝑥⟩∉𝑅",
      "for ∀𝑥∊𝑆"
    ],
    [
      "𝑅 is",
      {
        "content": "symmetric",
        "bg": "#F4F5F7"
      },
      "on set 𝑆 when",
      "if ⟨𝑥,𝑦⟩∊𝑅 then ⟨𝑦,𝑥⟩∊𝑅",
      "for ∀𝑥,𝑦∊𝑆"
    ],
    [
      "𝑅 is",
      {
        "content": "antisymmetric",
        "bg": "#F4F5F7"
      },
      "on set 𝑆 when",
      "if ⟨𝑥,𝑦⟩,⟨𝑦,𝑥⟩∊𝑅 then 𝑥=𝑦",
      "for ∀𝑥,𝑦∊𝑆"
    ],
    [
      "𝑅 is",
      {
        "content": "connexity",
        "bg": "#F4F5F7"
      },
      "on set 𝑆 when",
      "⟨𝑥,𝑦⟩∊𝑅 OR ⟨𝑦,𝑥⟩∊𝑅",
      "for ∀𝑥,𝑦∊𝑆"
    ],
    [
      "𝑅 is",
      {
        "content": "transitive",
        "bg": "#F4F5F7"
      },
      "on set 𝑆 when",
      "if ⟨𝑥,𝑦⟩,⟨𝑦,𝑧⟩∊𝑅 then ⟨𝑥,𝑧⟩∊𝑅",
      "for ∀𝑥,𝑦,𝑧∊𝑆"
    ]
  ],
  "tableStyle": "width: 64.2724%;"
}
```

NOTE
- a binary relation cannot be both reflexive and irreflexive
- a binary relation can be both symmetric and antisymmetric (e.g. the = equality relation)

# Ordered Binary Relation - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
