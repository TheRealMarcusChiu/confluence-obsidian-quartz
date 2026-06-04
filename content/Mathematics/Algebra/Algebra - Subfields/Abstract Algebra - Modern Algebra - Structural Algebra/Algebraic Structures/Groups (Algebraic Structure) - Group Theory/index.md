---
title: "Groups (Algebraic Structure) - Group Theory"
created: 2023-04-02T11:06:40.932-05:00
modified: 2024-01-12T21:47:08.930-06:00
parent: "[[Algebraic Structures]]"
children:
  - "[[Cosets]]"
  - "[[Euler's Formula - Intuition via Group Theory]]"
---
###### Groups (Algebraic Structure) - Group Theory
````excerpt
- in [[Abstract Algebra - Modern Algebra - Structural Algebra|abstract algebra]], <em>group theory</em> studies the [[Algebraic Structures|algebraic structures]] known as <em>groups</em>
- a group is a [[Set／Sets|set]] equipped with a [[Binary／Dyadic Operations／Operators|binary operation]]
- groups is an abstraction of symmetric-actions, as numbers are an abstraction of counts
- the concept of a group is central to abstract algebra: other well-known algebraic structures, such as [[Rings (Algebraic Structure) - Ring Theory|rings]], [[Fields (Algebraic Structure) - Field Theory|fields]], and [[Vector Spaces - Linear Spaces|vector spaces]], can all be seen as <em>groups</em> endowed with additional operations and axioms
````
^excerpt

# Groups - Definition

A <strong>group</strong><strong> (𝐺,·)</strong> is a [[Set／Sets|set]] 𝐺 equipped with a [binary operation <strong>·</strong>](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023131) that satisfies the following properties shown below:

A binary operation on 𝐺 is a mapping 𝐺×𝐺 → 𝐺, that is, a [[Binary Relation (Correspondence ／ Dyadic Relation ／ 2-Place Relation)|correspondence]] that associates with each ordered pair of elements of 𝐺 a uniquely determined element of 𝐺.

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
        "content": "<strong>[[Binary／Dyadic Operations／Operators|Binary Operation]] Properties</strong> (𝑎, 𝑏, 𝑐 are arbitrary elements of the <em>group</em> 𝐺)",
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 5
      },
      null,
      null,
      null,
      null,
      {
        "content": "<strong>Description</strong>",
        "bg": "#F4F5F7",
        "align": "left",
        "rowspan": 2
      }
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
      }
    ],
    [
      {
        "content": "Binary Operation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "> [!expand]- REQUIRED\n> (𝑎 + 𝑏) ∊ 𝐹\n>\n> (𝑎 · 𝑏) ∊ 𝐹",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "> [!expand]- REQUIRED\n> 𝑎 + (𝑏 + 𝑐) = (𝑎 + 𝑏) + 𝑐\n>\n> 𝑎 · (𝑏 · 𝑐) = (𝑎 · 𝑏) · 𝑐",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "> [!expand]- REQUIRED\n> 𝑎 + 0 = 𝑎\n>\n> 𝑎 · 1 = 𝑎",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "> [!expand]- REQUIRED\n> 𝑎 + (-𝑎) = 0\n>\n> 𝑎 · 𝑎-1 = 1",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "> [!expand]- UNNEEDED\n> 𝑎 + 𝑏 = 𝑏 + 𝑎\n>\n> 𝑎 · 𝑏 = 𝑏 · 𝑎",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "is a [[Algebraic Structures|monoid]] whose elements are invertible\nis a loop whose binary operation is associative\nis an inverse group with an identity element",
        "align": "left"
      }
    ]
  ],
  "tableStyle": "width: 1285.0px;"
}
```
# Periodic Table of Finite Simple Groups
![[Groups (Algebraic Structure) - Group Theory/period-table-of-finite-simple-groups.png|300]]
[[period-table-of-finite-simple-groups.webp]]
# Group - Examples
- [[Lie Groups]]

# Other
- [[Group Homomorphisms]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Resources
- [3Brown1Blue - Group Theory Introduction](https://www.youtube.com/watch?v=mH0oCDa74tE)
