---
title: "Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product"
created: 2021-09-13T05:25:48.022-05:00
modified: 2026-05-31T21:38:45.430-05:00
parent: "[[Linear Algebra - Operations／Operators]]"
children:
  - "[[Dot Product - Intuition]]"
  - "[[Dot Product vs Cosine Similarity]]"
  - "[[Why Dot Product of 2 Orthogonal Vectors Equals Zero？ (Cosine Similarity)]]"
---
###### Dot Product - Scalar Product - Canonical/Euclidean/Standard Inner Product (𝑣·𝑢)
````excerpt
- is a type of [[Inner Products|inner product (⟨·,·⟩)]] that takes as input 2 equal length [[Vectors|vectors]]
- because it results in a single value, the operation is often referred to as the <em>scalar product</em>
````
^excerpt

the following are equivalent:
- 𝑣·𝑢
- 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑣<sub>𝑖</sub>𝑢<sub>𝑖</sub>)
- (length of projected 𝑣 onto 𝑢)·(length of 𝑢)
- (length of projected 𝑢 onto 𝑣)·(length of 𝑣)

for example
- \[1, 2, 3\]<sup>𝑇</sup>·\[4, 5, 6\]<sup>𝑇</sup> = (1\*4) + (2\*5) + (3\*6) = 32

# Intro

![](https://www.youtube.com/watch?v=LyGKycYT2v0)
# Orthogonality

If the dot product of 2 vectors equals 0 then these vectors are orthogonal

see proof: [[Why Dot Product of 2 Orthogonal Vectors Equals Zero？ (Cosine Similarity)|Why Dot Product of 2 Orthogonal Vectors Equals Zero? (Cosine Similarity)]]
# Similarity with Cosine Similarity

see: [[Dot Product vs Cosine Similarity]]
# Similarity with Linear Transformations of Multi-Dimensional Vectors to 1-Dimensional Vector

the dot product has close ties with the<strong> (linear transformation 1×N matrix</strong> or <strong>[[Projection／Idempotent Matrix (Projections onto Subspaces)|projection matrix]]) </strong>that transforms a multi-dimensional vector into a one-dimensional vector (i.e. scalar value)
###### Consider the 2 Dimensional Case

say the linear transformation 1×2 matrix = \[5, 6\]

use the matrix to transform the basis vectors 𝑖 and 𝑗 of the 2D vector space:
- \[5, 6\]𝑖 = \[5, 6\]\[1, 0\]<sup>𝑇</sup>= \[5\] <font style="color: rgb(128,128,128);">\# </font><font style="color: rgb(128,128,128);">basis vector 𝑖 \[1, 0\] is transformed to \[5\]</font>
- \[5, 6\]𝑗 = \[5, 6\]\[0, 1\]<sup>𝑇</sup>= \[6\] <font style="color: rgb(128,128,128);">\# basis vector 𝑗 \[0, 1\] is transformed to \[6\]</font>

therefore any vector (represented in basis vector notation) can be transformed by multiplying its 𝑖 component by 5 and its 𝑗 component by 6. and finally summing the products
# Dot Product Induces The Following

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Concept</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Mathematical Expression</strong>",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Length",
        "bg": "#F4F5F7"
      },
      "- $\\|\\mathbf{a}\\| := \\sqrt{a_1^2 + \\dots + a_n^2}$"
    ],
    [
      {
        "content": "Orthogonality",
        "bg": "#F4F5F7"
      },
      "- $\\mathbf{a} \\perp \\mathbf{b} \\iff \\mathbf{a} \\cdot \\mathbf{b} = 0$"
    ],
    [
      {
        "content": "Angle Between Vectors",
        "bg": "#F4F5F7"
      },
      "- $\\cos \\theta := \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\|\\mathbf{b}\\|}, \\quad \\theta \\in [0,  \\theta ]$"
    ],
    [
      {
        "content": "(Vectorial) Projections & Perpendiculars",
        "bg": "#F4F5F7"
      },
      "- $\\text{proj}_{\\mathbf{b}} \\mathbf{a} := \\|\\mathbf{a}\\| \\cos \\theta \\frac{\\mathbf{b}}{\\|\\mathbf{b}\\|} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2} \\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}} \\mathbf{b}$\n- $\\text{perp}_{\\mathbf{b}} \\mathbf{a} := \\mathbf{a} - \\text{proj}_{\\mathbf{b}} \\mathbf{a}$"
    ],
    [
      {
        "content": "Perpendicular",
        "bg": "#F4F5F7"
      },
      "- $\\text{perp}_{\\mathbf{b}} \\mathbf{a} := \\mathbf{a} - \\text{proj}_{\\mathbf{b}} \\mathbf{a}$"
    ],
    [
      {
        "content": "Orthonormal Set",
        "bg": "#F4F5F7"
      },
      "- $\\mathbf{e}_i \\cdot \\mathbf{e}_j = \\delta_{ij} := \\begin{cases} 1, & i = j, \\\\ 0, & i \\neq j \\end{cases}$"
    ],
    [
      {
        "content": "Orthonormal Expansion",
        "bg": "#F4F5F7"
      },
      "- > [!list-indent-undo]\n  > > [!indent]\n  > > ![[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product/dot-product-induces-orthonormal-expansion.jpg|500]]"
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```
