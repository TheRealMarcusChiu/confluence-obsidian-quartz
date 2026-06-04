---
title: "Multilinear Algebra"
created: 2021-09-13T05:24:48.487-05:00
modified: 2024-01-08T22:17:10.492-06:00
parent: "[[Algebra - Subfields]]"
children:
  - "[[Blades - k-Blades]]"
  - "[[Multi-Vectors／Multivectors／p-Vectors - Clifford Number - Multors]]"
  - "[[Multilinear Algebra - Operations／Operators]]"
  - "[[k-blades vs k-vectors vs multivectors]]"
  - "[[k-vectors (Multivector of Grade k)]]"
---
###### Multilinear Algebra
````excerpt
- extends the methods of [[Linear Algebra|linear algebra]]
- just as:
	- linear algebra builds on the concept of a [[Vectors|vector]] and develops the theory of [[Vector Spaces - Linear Spaces|vector spaces]]
	- multilinear algebra builds on the concepts of [[Multi-Vectors／Multivectors／p-Vectors - Clifford Number - Multors|multivectors]] with [[Exterior Algebra - Grassmann Algebra|Exterior Algebra]] / [[Geometric Algebra (GA) - Clifford Algebra|Geometric Algebra]]
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Other

```merge-table
{
  "rows": [
    [
      {
        "content": "2D Vanilla Geometric Algebra (VGA)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Old Interpretation",
        "bg": "#F4F5F7",
        "align": "right"
      },
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "New Interpretation",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "{𝑒<sub>1</sub>, 𝑒<sub>2</sub>}",
        "align": "right"
      },
      "⟺",
      "{𝑒<sub>1</sub>, 𝑒<sub>2</sub>} 2D Vector"
    ],
    [
      {
        "content": "\"Pseudoscalar\" {1}",
        "align": "right"
      },
      "⟺",
      "{𝑒<sub>1</sub>𝑒<sub>2</sub>} 2D Bivector"
    ],
    [
      {
        "content": "Complex Number {1, 𝑖}",
        "align": "right"
      },
      "⟺",
      "{1, 𝑒<sub>1</sub>𝑒<sub>2</sub>} 2D Rotor"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "3D Vanilla Geometric Algebra (VGA)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Old Interpretation",
        "bg": "#F4F5F7",
        "align": "right"
      },
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "New Interpretation",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "{𝑒<sub>1</sub>, 𝑒<sub>2</sub>, 𝑒<sub>3</sub>}",
        "align": "right"
      },
      "⟺",
      "{𝑒<sub>1</sub>, 𝑒<sub>2</sub>, 𝑒<sub>3</sub>} 3D Vector"
    ],
    [
      {
        "content": "\"Pseudovector\" {𝑒<sub>1</sub>, 𝑒<sub>2</sub>, 𝑒<sub>3</sub>}",
        "align": "right"
      },
      "⟺",
      "{𝑒<sub>1</sub>, 𝑒<sub>2</sub>, 𝑒<sub>3</sub>} 3D Bivector"
    ],
    [
      {
        "content": "quaternion {1, 𝑖, 𝑗, 𝑘}",
        "align": "right"
      },
      "⟺",
      "{1, 𝑒<sub>2</sub>𝑒<sub>3</sub>, 𝑒<sub>3</sub>𝑒<sub>1</sub>, 𝑒<sub>1</sub>𝑒<sub>2</sub>} 3D Rotor"
    ],
    [
      {
        "content": "\"Pseudoscalar\" {1}",
        "align": "right"
      },
      "⟺",
      "{𝑒<sub>1</sub>𝑒<sub>2</sub>𝑒<sub>2</sub>} 3D Trivector"
    ]
  ]
}
```
