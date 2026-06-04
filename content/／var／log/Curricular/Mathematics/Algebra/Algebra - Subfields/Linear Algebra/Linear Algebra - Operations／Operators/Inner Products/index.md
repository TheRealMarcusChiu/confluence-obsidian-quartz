---
title: "Inner Products"
created: 2021-09-13T05:25:48.561-05:00
modified: 2024-01-26T12:36:57.167-06:00
parent: "[[Linear Algebra - Operations／Operators]]"
children:
  - "[[Frobenius Inner Product]]"
  - "[[Inner Product of Functions]]"
  - "[[L2 Inner Product]]"
  - "[[Orthogonal／Orthogonality - Orthogonal Sets - Orthogonal Complement]]"
  - "[[Orthonormal／Orthonormality - Orthonormal Sets]]"
---
###### Inner Products (⟨·,·⟩ (·,·) ⟨·|·⟩ (·|·))
````excerpt
- an <em>inner product (⟨·,·⟩ : 𝑉×𝑉 → 𝐹)</em> on a [[Vector Spaces - Linear Spaces|vector space (𝑉,𝐹)]] is a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] that takes any pair vectors 𝑢,𝑣∊𝑉 and outputs a [[Real Numbers System|real number]] while satisfying 3 axioms
- a vector space (𝑉,𝐹) with an <em>inner product (⟨·,·⟩)</em> is called an [[Inner Product Spaces|inner product space (𝑉,𝐹,⟨·,·⟩)]]
- used to measure how much of one vector is pointing in the direction of another one
- an <em>inner product (⟨·,·⟩)</em> induces a [[Norms - Semi-Norms|norm (||·||⟨·,·⟩)]] defined as: ||·||<sub>⟨·,·⟩</sub> = √⟨·,·⟩
````
^excerpt

# Inner Product - Definition (3 Axioms)

```merge-table
{
  "rows": [
    [
      {
        "content": "Where Field (𝐹) is [[Real Numbers System|Real Numbers]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Where Field (𝐹) is [[Complex Numbers System|Complex Numbers]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "For all vectors 𝑢,𝑣,𝑤 in [[Vector Spaces - Linear Spaces|vector space (𝑉,𝐹)]] and all scalars 𝑐 in [[Fields (Algebraic Structure) - Field Theory|field (𝐹)]]",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "```merge-table\n{\n  \"rows\": [\n    [\n      {\n        \"content\": \"positive-definiteness\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      \"- ⟨𝑢,𝑢⟩ ≥ 0\\n- ⟨𝑢,𝑢⟩ = 0 if and only if 𝑢 = 0\"\n    ],\n    [\n      {\n        \"content\": \"symmetry\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      \"- $⟨𝑢,𝑣⟩ = ⟨𝑣,𝑢⟩$\"\n    ],\n    [\n      {\n        \"content\": \"linearity\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      \"- ⟨𝑢+𝑣,𝑤⟩ = ⟨𝑢,𝑤⟩ + ⟨𝑣,𝑤⟩\\n- ⟨𝑢,𝑣+𝑤⟩ = ⟨𝑢,𝑣⟩ + ⟨𝑢,𝑤⟩\\n- ⟨𝑐𝑢,𝑣⟩ = 𝑐⟨𝑢,𝑣⟩\\n- ⟨𝑢,𝑐𝑣⟩ = 𝑐⟨𝑢,𝑣⟩\"\n    ]\n  ]\n}\n```",
      "```merge-table\n{\n  \"rows\": [\n    [\n      {\n        \"content\": \"positive-definiteness\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      \"- ⟨𝑢,𝑢⟩ ≥ 0\\n- ⟨𝑢,𝑢⟩ = 0 if and only if 𝑢 = 0\"\n    ],\n    [\n      {\n        \"content\": \"conjugate symmetry\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      \"- $⟨𝑢,𝑣⟩ = \\\\overline{⟨𝑣,𝑢⟩}$\"\n    ],\n    [\n      {\n        \"content\": \"linearity OF THE FIRST ARGUMENT\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      \"- ⟨𝑢+𝑣,𝑤⟩ = ⟨𝑢,𝑤⟩ + ⟨𝑣,𝑤⟩\\n- ⟨𝑐𝑢,𝑣⟩ = 𝑐⟨𝑢,𝑣⟩\"\n    ]\n  ]\n}\n```"
    ]
  ]
}
```
# Inner Product - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Input",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|Dot Product]]\n[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|Standard Inner Product]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Vectors|vectors]]",
        "align": "center"
      },
      "- $⟨v,u⟩ = \\sum_{i}{v_{i}}u_{i}$"
    ],
    [
      {
        "content": "[[Frobenius Inner Product]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Matrix／Matrices|matrices]]",
        "align": "center"
      },
      "- $⟨A,B⟩_F = \\sum_{i,j}\\overline{A_{ij}}B_{ij} = Tr(\\overline{A^T}B) = Tr(A^{\\dagger}B)$\n- where the overline denotes the [[Complex Conjugate／Conjugation|complex conjugate]], and † denotes the [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|Hermitian conjugate]]"
    ],
    [
      {
        "content": "[[Inner Product of Functions]]",
        "bg": "#F4F5F7"
      },
      "functions",
      "- $⟨f(x),g(x)⟩_{a,b} = \\int_a^b f(x)g(x)dx \\;\\;\\;\\; \\text{on the interval of } [a,b]$"
    ],
    [
      {
        "content": "[[L2 Inner Product]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "functions",
        "align": "center"
      },
      "- $⟨f,g⟩_{L^2} = \\int_X f \\; g \\; d𝜇$"
    ]
  ]
}
```
# Inner Product - Properties
- [[Orthogonal／Orthogonality - Orthogonal Sets - Orthogonal Complement|Orthogonal/Orthogonality - Orthogonal Sets - Orthogonal Complement]]
- [[Orthonormal／Orthonormality - Orthonormal Sets|Orthonormal/Orthonormality - Orthonormal Sets]]
