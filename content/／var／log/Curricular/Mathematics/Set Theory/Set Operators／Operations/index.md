---
title: "Set Operators／Operations"
created: 2021-09-13T05:29:36.377-05:00
modified: 2024-01-11T13:36:15.971-06:00
parent: "[[Set Theory]]"
children:
  - "[[Cartesian Product]]"
---
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Symbol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Meaning",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<em>In the examples 𝐶 = {1,2,3,4} and 𝐷 = {3,4,5}</em>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      "{ }",
      "Set: a collection of elements",
      "{1,2,3,4}"
    ],
    [
      "𝐴 ⋃ 𝐵",
      "Union: in 𝐴 or 𝐵 (or both)",
      "𝐶 ⋃ 𝐷 = {1,2,3,4,5}"
    ],
    [
      "𝐴 ⋂ 𝐵",
      "Intersection: in both 𝐴 and 𝐵",
      "𝐶 ⋂ 𝐷 = {3,4}"
    ],
    [
      "𝐴 ⊆ 𝐵",
      "Subset: 𝐴 has some (or all) elements of 𝐵",
      "{3,4,5} ⊆ 𝐷"
    ],
    [
      "𝐴 ⊂ 𝐵",
      "Proper Subset: 𝐴 has some elements of 𝐵",
      "{3,5} ⊂ 𝐷"
    ],
    [
      "𝐴 ⊄ 𝐵",
      "Not a Subset: 𝐴 is not a subset of 𝐵",
      "{1,6} ⊄ 𝐶"
    ],
    [
      "𝐴 ⊇ 𝐵",
      "Superset: 𝐴 has same elements as 𝐵, or more",
      "{1,2,3} ⊇ {1,2,3}"
    ],
    [
      "𝐴 ⊃ 𝐵",
      "Proper Superset: 𝐴 has 𝐵's elements and more",
      "{1,2,3,4} ⊃ {1,2,3}"
    ],
    [
      "𝐴 ⊅ 𝐵",
      "Not a Superset: 𝐴 is not a superset of 𝐵",
      "{1,2,6} ⊅ {1,9}"
    ],
    [
      "𝐴<sup>𝑐</sup>",
      "Complement: elements not in 𝐴",
      "𝐷<sup>𝑐</sup> = {1,2,6,7}\nWhen 𝕌 = {1,2,3,4,5,6,7}"
    ],
    [
      "𝐴 − 𝐵 or 𝐴\\𝐵",
      "Set Difference (Relative Complement): in 𝐴 but not in 𝐵",
      "{1,2,3,4} − {3,4} = {1,2}"
    ],
    [
      "",
      "Symmetric Difference",
      ""
    ],
    [
      "<em>a </em>∈ 𝐴",
      "Element of: <em>𝑎</em> is in 𝐴",
      "3 ∈ {1,2,3,4}"
    ],
    [
      "<em>b </em>∉ 𝐴",
      "Not element of: <em>𝑏</em> is not in 𝐴",
      "6 ∉ {1,2,3,4}"
    ],
    [
      "∅",
      "Empty set = {}",
      "{1,2} ∩ {3,4} = Ø"
    ],
    [
      "𝕌",
      "Universal Set: set of all possible values\n(in the area of interest)",
      ""
    ],
    [
      "",
      "",
      ""
    ],
    [
      "<strong>P</strong>(𝐴)",
      "Power Set: all subsets of 𝐴",
      "P({1,2}) = { {}, {1}, {2}, {1,2} }"
    ],
    [
      "𝐴 = 𝐵",
      "Equality: both sets have the same members",
      "{3,4,5} = {5,3,4}"
    ],
    [
      "𝐴×𝐵",
      "[[Cartesian Product]]\n(set of ordered pairs from 𝐴 and 𝐵)",
      "{1,2} × {3,4}\n= {(1,3), (1,4), (2,3), (2,4)}"
    ],
    [
      "|𝐴|",
      "Cardinality: the number of elements of set 𝐴",
      "|{3,4}| = 2"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "|",
      "Such that",
      "{ <em>n</em> | <em>n</em> > 0 } = {1,2,3,...}"
    ],
    [
      ":",
      "Such that",
      "{ <em>n</em> : <em>n</em> > 0 } = {1,2,3,...}"
    ],
    [
      "∀",
      "For 𝐴ll",
      "∀𝑥>1, 𝑥<sup>2</sup>>𝑥"
    ],
    [
      "∃",
      "There Exists",
      "∃𝑥 | 𝑥<sup>2</sup>>𝑥"
    ],
    [
      "∴",
      "Therefore",
      "<em>𝑎=𝑏 ∴ 𝑏=𝑎</em>"
    ]
  ],
  "tableStyle": "width: 53.3088%;"
}
```
