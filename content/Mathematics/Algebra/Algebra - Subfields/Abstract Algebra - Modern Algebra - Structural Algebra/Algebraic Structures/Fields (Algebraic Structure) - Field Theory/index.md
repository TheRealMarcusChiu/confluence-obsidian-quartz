---
title: "Fields (Algebraic Structure) - Field Theory"
created: 2023-06-12T17:36:11.525-05:00
modified: 2026-05-21T01:31:10.547-05:00
parent: "[[Algebraic Structures]]"
children:
  - "[[Finite Fields - Galois Fields]]"
---
###### Fields (Algebraic Structure) - Field Theory
````excerpt
- is an [[Algebraic Structures|algebraic structure]]
- is a set on which addition, subtraction, multiplication, and division are defined and behave as the corresponding operations on rational and [[Real Numbers System|real numbers]] do
````
^excerpt

# Fields - Definition & Field Axioms

```merge-table
{
  "rows": [
    [
      "A field is a set 𝐹 with two [[Binary／Dyadic Operations／Operators|binary operations]] on 𝐹 called:\n- addition\n- multiplication\n\nBoth of these operations must satisfy the [field axioms](https://en.wikipedia.org/wiki/Axiom#Non-logical_axioms) (𝑎, 𝑏, 𝑐 are arbitrary elements of the field 𝐹):",
      "> [!info]\n> A binary operation on 𝐹 is a mapping 𝐹×𝐹 → 𝐹, that is, a [[Binary Relation (Correspondence ／ Dyadic Relation ／ 2-Place Relation)|correspondence]] that associates with each ordered pair of elements of 𝐹 a uniquely determined element of 𝐹."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
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
        "bg": "#F4F5F7"
      },
      {
        "content": "> [!expand]- Required\n> (𝑎 + 𝑏) ∊ 𝐹",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + (𝑏 + 𝑐) = (𝑎 + 𝑏) + 𝑐",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + 0 = 𝑎",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + (-𝑎) = 0",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 + 𝑏 = 𝑏 + 𝑎",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> Distributivity of multiplication over addition\n>\n> 𝑎 · (𝑏 + 𝑐) = (𝑎 · 𝑏) + (𝑎 · 𝑐)",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "Binary Operation 2\nMultiplication",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "> [!expand]- Required\n> (𝑎 · 𝑏) ∊ 𝐹",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 · (𝑏 · 𝑐) = (𝑎 · 𝑏) · 𝑐",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 · 1 = 𝑎",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 · 𝑎<sup>-1</sup> = 1",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Required\n> 𝑎 · 𝑏 = 𝑏 · 𝑎",
        "bg": "#e3fcef"
      },
      {
        "content": "> [!expand]- Unneeded\n> Distributivity of addition over multiplication\n>\n> N/A",
        "bg": "#ffebe6",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;width: 100.0%;"
}
```
# Fields - Examples
- rational numbers
- [[Real Numbers System|real numbers]]
- [[Complex Numbers System|complex numbers]]
- [fields of rational functions](https://en.wikipedia.org/wiki/Field_of_rational_functions)
- [algebraic function fields](https://en.wikipedia.org/wiki/Algebraic_function_field)
- [algebraic number fields](https://en.wikipedia.org/wiki/Algebraic_number_field)
- [p-adic fields](https://en.wikipedia.org/wiki/P-adic_number)
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
# Fields - Other
- any field can be used as [[Scalars|scalars]] in a [[Vector Spaces - Linear Spaces|vector space]]
- [[Fields vs Vector Spaces]]
