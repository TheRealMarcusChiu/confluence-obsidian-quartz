---
title: "Vector Spaces - Linear Spaces"
created: 2021-09-13T05:26:07.388-05:00
modified: 2026-05-21T15:06:11.635-05:00
parent: "[[Mathematical Spaces - Types]]"
children:
  - "[[Fields vs Vector Spaces]]"
  - "[[Vector Space - Type Comparisons]]"
  - "[[Vector Space - Types]]"
---
###### Vector Spaces - Linear Spaces - (𝑉,𝐹)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a pair (𝑉,𝐹) where 𝑉 is a non-empty [[Set Theory|set]] and 𝐹 is a [[Algebraic Structures|field]] defined together with two [[Binary／Dyadic Operations／Operators|binary operations]] that satisfy 10 axioms
	- the elements of 𝑉 are commonly called [[Vectors|vectors]]
	- the elements of 𝐹  are commonly called [[Scalars|scalars]]
	- the first binary operation, called <em>vector addition</em>, assigns any two vectors to a third vector. defined as 𝑉 ⨯ 𝑉 → 𝑉
	- the second binary operation, called <em>scalar multiplication of a vector</em>, assigns any scalar and vector to another vector. defined as 𝐹 ⨯ 𝑉 → 𝑉
````
^excerpt

# Vector Spaces - 10 Axioms

A <em>vector space (𝑉,𝐹)</em> is subject to the 10 axioms (the axioms must hold for all vectors 𝑢̅, 𝑣̅, 𝑤̅ in 𝑉, for all scalars 𝑐 and 𝑑 in 𝐹, and zero vector o̅):

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "Left Input",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Right Input",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Output",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "[[Binary／Dyadic Operations／Operators|Binary Operation]] Properties",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 7
      },
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "[[Closed Property|Closed]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Associativity／Associative|Associativity]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Commutativity／Commutative|Commutativity]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Identity／Neutral Element - Right／Left Identity Element|Identity]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Invertibility／Invertible／Inverse Element - Right／Left Inverse Element|Invertibility]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 5
      },
      {
        "content": "[[Distributivity／Distributive|Distributive]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Vector Addition",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "vector",
        "align": "center"
      },
      {
        "content": "vector",
        "align": "center"
      },
      {
        "content": "vector",
        "align": "center"
      },
      {
        "content": "> [!expand]- required\n> 𝑢̅ + 𝑣̅ is in 𝑉",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> 𝑢̅ + (𝑣̅ + 𝑤̅) = (𝑢̅ + 𝑣̅) + 𝑤̅",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> 𝑢̅ + 𝑣̅ = 𝑣̅ + 𝑢̅",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> o̅ + 𝑢̅ = 𝑢̅\n>\n> the identity element is the zero vector",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> 𝑢̅ + (-𝑢̅) = o̅",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> Distributivity of scalar multiplication with respect to vector addition\n>\n> 𝑐(𝑢̅ + 𝑣̅) = 𝑐𝑢̅ + 𝑐𝑣̅",
        "bg": "#e3fcef",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "𝑉 ⨯ 𝑉 → 𝑉",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Scalar Multiplication of a Vector",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "scalar",
        "align": "center"
      },
      {
        "content": "vector",
        "align": "center"
      },
      {
        "content": "vector",
        "align": "center"
      },
      {
        "content": "> [!expand]- required\n> 𝑐𝑢̅ is in 𝑉",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> 𝑐(𝑑𝑢̅) = (𝑐𝑑)𝑢̅",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- undefined\n> 𝑉 ⨯ 𝐹 → 𝑉 is not defined",
        "bg": "#ffebe6",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> 1𝑢̅ = 𝑢̅\n>\n> the identity element is 1",
        "bg": "#e3fcef",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- undefined\n> ?𝑢̅ = 1 = identity\n> 𝑐? = 1 = identity\n>\n> Scalar multiplication over vectors has no sensible inverse because it doesn't output a scalar",
        "align": "left",
        "rowspan": 2
      },
      {
        "content": "> [!expand]- required\n> Distributivity of scalar multiplication with respect to field addition\n>\n> (𝑐 + 𝑑)𝑢̅ = 𝑐𝑢̅ + 𝑑𝑢̅",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "𝐹 ⨯ 𝑉 → 𝑉",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Vector Spaces - Types

```merge-table
{
  "rows": [
    [
      "- [[Topological Vector Spaces (TVS) - Linear Topological Spaces|Topological Vector Spaces (TVS)]] are <em>vector spaces</em> with a defined [[Topology|topology (𝜏)]]\n- [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|Algebraic Dual Space]]\n```dataview\nLIST\nFROM \"\"\nWHERE file.folder = [[Vector Space - Types]].file.folder + \"/\" + [[Vector Space - Types]].file.name\n```",
      "```dataview\nLIST\nFROM \"\"\nWHERE file.folder = [[Vector Space - Type Comparisons]].file.folder + \"/\" + [[Vector Space - Type Comparisons]].file.name\n```"
    ]
  ]
}
```
# Vector Spaces - Subspaces

See [[Linear Subspaces - Vector Subspaces|Linear/Vector Subspaces]]
# Vector Spaces - Other
- [[Fields vs Vector Spaces]]
- 
> [!expand]- basis and dimensions
> A subset of a vector space is a <strong>[[Basis Vectors|basis]]</strong> if its elements are linearly independent and span the vector space. Every vector space has at least one basis, generally many. Moreover, all basis of a vector space has the same cardinality, which is called the <strong>dimension</strong> of the vector space. This is a fundamental property of vector spaces
