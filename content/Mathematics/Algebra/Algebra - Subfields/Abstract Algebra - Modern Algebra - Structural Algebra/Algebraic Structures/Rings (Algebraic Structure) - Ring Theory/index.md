---
title: "Rings (Algebraic Structure) - Ring Theory"
created: 2023-06-25T14:32:11.996-05:00
modified: 2023-06-29T19:01:03.852-05:00
parent: "[[Algebraic Structures]]"
children: []
---
###### Rings (Algebraic Structure)
````excerpt
- is an [[Algebraic Structures|algebraic structure]] that generalizes [[Fields (Algebraic Structure) - Field Theory|fields]]: multiplication need not be commutative and multiplicative inverses need not exist
````
^excerpt

# Rings - Definition & Field Axioms

A <em>ring</em> is a set 𝐹 with two [[Binary／Dyadic Operations／Operators|binary operations]] on 𝐹 called:
- addition
- multiplication

A binary operation on 𝐹 is a mapping 𝐹×𝐹 → 𝐹, that is, a [[Binary Relation (Correspondence ／ Dyadic Relation ／ 2-Place Relation)|correspondence]] that associates with each ordered pair of elements of 𝐹 a uniquely determined element of 𝐹.

Both of these operations must satisfy the ring axioms (𝑎, 𝑏, 𝑐 are arbitrary elements of the field 𝐹):

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
        "content": "Binary Operation Properties - Field Axioms",
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
        "content": "[[Commutativity／Commutative|Commutativity]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 3
      },
      {
        "content": "[[Distributivity／Distributive|Distributivity]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Binary Operation 1\nAddition",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> (𝑎 + 𝑏) ∊ 𝐹",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + (𝑏 + 𝑐) = (𝑎 + 𝑏) + 𝑐",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + 0 = 𝑎",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + (-𝑎) = 0",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + 𝑏 = 𝑏 + 𝑎",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> Distributivity of multiplication over addition\n>\n> 𝑎 · (𝑏 + 𝑐) = (𝑎 · 𝑏) + (𝑎 · 𝑐)",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "Binary Operation 2\nMultiplication",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> (𝑎 · 𝑏) ∊ 𝐹",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 · (𝑏 · 𝑐) = (𝑎 · 𝑏) · 𝑐",
        "bg": "green",
        "align": "left"
      },
      {
        "content": "> [!expand]- DEBATED\n> 𝑎 · 1 = 𝑎",
        "bg": "#fffae6",
        "align": "left"
      },
      {
        "content": "> [!expand]- Unneeded\n> 𝑎 · 𝑎<sup>-1</sup> = 1",
        "bg": "#ffebe6",
        "align": "left"
      },
      {
        "content": "> [!expand]- Unneeded\n> 𝑎 · 𝑏 = 𝑏 · 𝑎",
        "bg": "#ffebe6",
        "align": "left"
      },
      {
        "content": "> [!expand]- Unneeded\n> Distributivity of addition over multiplication\n>\n> N/A",
        "bg": "#ffebe6",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Rings - Examples
- The set of all [[Numbers Classes／Classification of Numbers|integers (ℤ)]]
- All [[Fields (Algebraic Structure) - Field Theory|fields]] are rings
