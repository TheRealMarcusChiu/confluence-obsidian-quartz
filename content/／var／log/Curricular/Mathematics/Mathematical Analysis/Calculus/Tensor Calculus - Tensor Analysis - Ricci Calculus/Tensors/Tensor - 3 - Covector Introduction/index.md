---
title: "Tensor - 3 - Covector Introduction"
created: 2023-08-01T22:59:41.712-05:00
modified: 2024-01-12T16:19:47.410-06:00
parent: "[[Tensors]]"
children: []
---
````excerpt
[[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|Covectors]] are functions 𝛼: 𝑉→ℝ that map a vector to a number and also obey the following rules:
- 𝛼(𝑣 + 𝑢) = 𝛼(𝑣) + 𝛼(𝑢)
- 𝛼(𝑛·𝑣) = 𝑛·𝛼(𝑣)

Covectors can also be viewed as elements of [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|dual vector space]] 𝑉\*:
- (𝑛·𝛼)(𝑣) = 𝑛·𝛼(𝑣)
- (𝛼+𝛽)(𝑣) = 𝛼(𝑣) + 𝛽(𝑣)

Covectors can be visualized as [[Level Sets (Level-Curve／Contour-Line／Isoline - Level-Surface／Isosurface - Level-Hypersurface)|level sets]]
###### What does a covector measure when we write \[2 1\]? like 2 of what and 1 of what?

Covectors don't live in the vector space 𝑉, thus we can't use basis vectors in 𝑉 like {𝑒<sub>1</sub>, 𝑒<sub>2</sub>} to measure covectors

```merge-table
{
  "rows": [
    [
      "epsilon covectors 𝜀<sup>𝑖</sup> are defined as:\n- 𝜀<sup>1</sup>(𝑒<sub>1</sub>) = 1\n- 𝜀<sup>1</sup>(𝑒<sub>2</sub>) = 0\n- 𝜀<sup>2</sup>(𝑒<sub>1</sub>) = 0\n- 𝜀<sup>2</sup>(𝑒<sub>2</sub>) = 1\n\nThus:\n- 𝜀<sup>𝑖</sup>(𝑒<sub>𝑗</sub>) = 𝛿<sub>𝑖𝑗</sub><font style=\"color: rgb(122,134,154);\"> \\# the </font>[[Kronecker Delta Function／Symbol|Kronecker delta function]]",
      "In other words, let:\n- 𝐸 = \\[𝑒<sub>1</sub>|𝑒<sub>2</sub>\\] a matrix whose columns are the basis vectors {𝑒<sub>1</sub>, 𝑒<sub>2</sub>}\n- 𝐸ˆ = \\[𝜀<sup>1</sup>|𝜀<sup>2</sup>\\] a matrix whose columns are the epsilon covectors {𝜀<sup>1</sup>, 𝜀<sup>2</sup>}\n\nThe system of equations can be expressed as:\n- $\\hat{E}^TE = I$\n- $\\left[ \\begin{array}{cc} 𝜀^1_1 & 𝜀^1_2 \\\\ \\hline 𝜀^2_1 & 𝜀^2_2 \\\\ \\end{array} \\right] \\left[ \\begin{array}{c|c} e_{11} & e_{21} \\\\ e_{12} & e_{22} \\\\ \\end{array} \\right] = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ \\end{bmatrix}$"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "epsilon covector 𝜀<sup>𝑖</sup> consumes arbitrary vector 𝑣:",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝜀<sup>1</sup>(𝑣) = 𝜀<sup>1</sup>(𝑣\\[1\\]·𝑒<sub>1</sub> + 𝑣\\[2\\]·𝑒<sub>2</sub>)\n- 𝜀<sup>1</sup>(𝑣) = 𝑣\\[1\\] · 𝜀<sup>1</sup>(𝑒<sub>1</sub>) + 𝑣\\[2\\] · 𝜀<sup>1</sup>(𝑒<sub>2</sub>)\n- 𝜀<sup>1</sup>(𝑣) = 𝑣\\[1\\]",
      "- 𝜀<sup>2</sup>(𝑣) = 𝜀<sup>2</sup>(𝑣\\[1\\]·𝑒<sub>1</sub> + 𝑣\\[2\\]·𝑒<sub>2</sub>)\n- 𝜀<sup>2</sup>(𝑣) = 𝑣\\[1\\] · 𝜀<sup>2</sup>(𝑒<sub>1</sub>) + 𝑣\\[2\\] · 𝜀<sup>2</sup>(𝑒<sub>2</sub>)\n- 𝜀<sup>2</sup>(𝑣) = 𝑣\\[2\\]"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      "arbitrary covector 𝛼 consumes arbitrary vector 𝑣:\n- 𝛼(𝑣) = 𝛼(𝑣\\[1\\]·𝑒<sub>1</sub> + 𝑣\\[2\\]·𝑒<sub>2</sub>)\n- 𝛼(𝑣) = 𝑣\\[1\\]·𝛼(𝑒<sub>1</sub>) + 𝑣\\[2\\]·𝛼(𝑒<sub>2</sub>)\n- 𝛼(𝑣) = 𝜀<sup>1</sup>(𝑣)·𝛼(𝑒<sub>1</sub>) + 𝜀<sup>2</sup>(𝑣)·𝛼(𝑒<sub>2</sub>)\n- 𝛼(𝑣) = 𝜀<sup>1</sup>(𝑣)·𝛼<sub>1</sub> + 𝜀<sup>2</sup>(𝑣)·𝛼<sub>2</sub>\n- 𝛼(𝑣) = 𝛼<sub>1</sub>·𝜀<sup>1</sup>(𝑣) + 𝛼<sub>2</sub>·𝜀<sup>2</sup>(𝑣)\n- 𝛼(𝑣) = (𝛼<sub>1</sub>·𝜀<sup>1</sup> + 𝛼<sub>2</sub>·𝜀<sup>2</sup>) (𝑣)\n\nThus\n- 𝛼 = 𝛼<sub>1</sub>·𝜀<sup>1</sup> + 𝛼<sub>2</sub>·𝜀<sup>2</sup>\n\nThus\n- any arbitrary covector 𝛼 can be expressed as a linear combination of basis epsilon covectors {𝜀<sup>1</sup>, 𝜀<sup>2</sup>}"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      "The epsilon covectors 𝜀<sup>1</sup> and 𝜀<sup>2</sup> form the [[Basis Vectors|basis vectors]] of the dual vector space 𝑉\\*:\n1. 𝜀<sup>1</sup> and 𝜀<sup>2</sup> are [[Linear Independence - Linearly Independent - Linear Dependence - Linearly Dependent|linearly independent]]\n\t1. \n> [!expand]- proof\n> A set of covectors {𝜀<sup>1</sup>, 𝜀<sup>2</sup>} from the dual vector space 𝑉\\* is <strong>linearly independent</strong> if:\n> - scalars {𝑎<sub>1</sub>, 𝑎<sub>2</sub>} must be ALL zero such that:\n> - 𝑎<sub>1</sub>𝜀<sup>1</sup> + 𝑎<sub>2</sub>𝜀<sup>2</sup> = 𝜀<sup>0</sup> <font style=\"color: rgb(122,134,154);\">\\# where 𝜀<sup>0</sup>is the [[Zero／Null Linear Functional|null functional]] (i.e. zero vector in 𝑉\\*)</font>\n>\n> We need to prove the above statement.\n>\n> The expression 𝑎<sub>1</sub>𝜀<sup>1</sup> + 𝑎<sub>2</sub>𝜀<sup>2</sup> = 𝜀<sup>0</sup> naturally leads to (𝑎<sub>1</sub>𝜀<sup>1</sup> + 𝑎<sub>2</sub>𝜀<sup>2</sup>)(𝑣) = 𝜀<sup>0</sup>(𝑣); for all 𝑣∊𝑉. Where we have both sides \"consume\" an arbitrary vector 𝑣∊𝑉:\n> - (𝑎<sub>1</sub>𝜀<sup>1</sup> + 𝑎<sub>2</sub>𝜀<sup>2</sup>)(𝑣) = 𝜀<sup>0</sup>(𝑣); for all 𝑣∊𝑉\n> - (𝑎<sub>1</sub>𝜀<sup>1</sup> + 𝑎<sub>2</sub>𝜀<sup>2</sup>)(𝑣) = 0; for all 𝑣∊𝑉 <font style=\"color: rgb(122,134,154);\">\\# by assumption that </font><font style=\"color: rgb(122,134,154);\">𝜀<sup>0</sup>(𝑣) = 0 for all 𝑣∊𝑉</font>\n> - 𝑎<sub>1</sub>𝜀<sup>1</sup>(𝑣) + 𝑎<sub>2</sub>𝜀<sup>2</sup>(𝑣) = 0; for all 𝑣∊𝑉 <font style=\"color: rgb(122,134,154);\">\\# because they are [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformations]]</font>\n>\n> Thus the original statement that we need to prove now becomes:\n> - scalars {𝑎<sub>1</sub>, 𝑎<sub>2</sub>} must be ALL zero such that:\n> - 𝑎<sub>1</sub>𝜀<sup>1</sup>(𝑣) + 𝑎<sub>2</sub>𝜀<sup>2</sup>(𝑣) = 0; for all 𝑣∊𝑉\n>\n> Since the new statement is true for every vector 𝑣∊𝑉, it must also be true for the basis vectors {𝑒<sub>1</sub>, 𝑒<sub>2</sub>}:\n> - that the scalars {𝑎<sub>1</sub>, 𝑎<sub>2</sub>} must be ALL zero such that:\n> - 𝑎<sub>1</sub>𝜀<sup>1</sup>(𝑒<sub>𝑖</sub>) + 𝑎<sub>2</sub>𝜀<sup>2</sup>(𝑒<sub>𝑖</sub>) = 0; for all 𝑒<sub>𝑖</sub>∊{𝑒<sub>1</sub>, 𝑒<sub>2</sub>}\n>\n> Evaluating the above statement for each basis vector yields:\n> - that the scalars {𝑎<sub>1</sub>, 𝑎<sub>2</sub>} must be ALL zero such that:\n> - for 𝑒<sub>𝑖</sub>=𝑒<sub>1</sub>:\n> \t- 𝑎<sub>1</sub>𝜀<sup>1</sup>(𝑒<sub>1</sub>) + 𝑎<sub>2</sub>𝜀<sup>2</sup>(𝑒<sub>1</sub>) = 0\n> \t- 𝑎<sub>1</sub>\\*1 + 𝑎<sub>2</sub>\\*0 = 0\n> \t- 𝑎<sub>1</sub> = 0\n> - for 𝑒<sub>𝑖</sub>=𝑒<sub>1</sub>:\n> \t- 𝑎<sub>1</sub>𝜀<sup>1</sup>(𝑒<sub>2</sub>) + 𝑎<sub>2</sub>𝜀<sup>2</sup>(𝑒<sub>2</sub>) = 0\n> \t- 𝑎<sub>1</sub>\\*0 + 𝑎<sub>2</sub>\\*1 = 0\n> \t- 𝑎<sub>2</sub> = 0\n>\n> Thus, 𝑎<sub>1</sub> and 𝑎<sub>2</sub> must equal to 0.\n2. every arbitrary covector 𝛼∊𝑉\\* can be expressed as a linear combination of {𝜀<sup>1</sup>, 𝜀<sup>2</sup>}\n\t1. see above"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      "The components of covector 𝛼 can be extracted as follows:\n- 𝛼 = 𝛼<sub>1</sub>·𝜀<sup>1</sup> + 𝛼<sub>2</sub>·𝜀<sup>2</sup>\n- 𝛼(𝑒<sub>1</sub>) = 𝛼<sub>1</sub>\n- 𝛼(𝑒<sub>2</sub>) = 𝛼<sub>2</sub>\n\nThus:\n- the components of an arbitrary covector (e.g. \\[2 1\\]) are measured by the number of covector/level-set lines that the basis vectors {𝑒<sub>1</sub>, 𝑒<sub>2</sub>} pierces",
      "![[Tensor - 3 - Covector Introduction/covectors-0.png|450]]"
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```

RECAP:
- starting with [[Basis Vectors|basis vectors]] 𝑒<sub>𝑖</sub> of a [[Vector Spaces - Linear Spaces|vector space]] 𝑉
- you can derive the epsilon covectors 𝜀<sup>𝑖</sup> as so: 𝜀<sup>𝑖</sup>(𝑒<sub>𝑗</sub>) = 𝛿<sub>𝑖𝑗</sub>
- in which the epsilon covectors form a [[Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis|dual basis]] of the [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|dual vector space]] 𝑉\*
````
^excerpt
