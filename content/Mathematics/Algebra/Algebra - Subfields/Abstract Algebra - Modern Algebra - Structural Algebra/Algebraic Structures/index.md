---
title: "Algebraic Structures"
created: 2021-09-13T05:24:54.530-05:00
modified: 2026-05-19T19:24:25.112-05:00
parent: "[[Abstract Algebra - Modern Algebra - Structural Algebra]]"
children:
  - "[[Abelian Groups (Algebraic Structure)]]"
  - "[[Algebraic Structures - Examples]]"
  - "[[Commutative Magma]]"
  - "[[Commutative Monoids (Algebraic Structures)]]"
  - "[[Fields (Algebraic Structure) - Field Theory]]"
  - "[[Groups (Algebraic Structure) - Group Theory]]"
  - "[[Inverse Semigroups - Associative Quasigroups (Algebraic Structures)]]"
  - "[[Loops (Algebraic Structures)]]"
  - "[[Magmas (Algebraic Structures)]]"
  - "[[Monoids (Algebraic Structures)]]"
  - "[[Partial Magmas (Algebraic Structures)]]"
  - "[[Quasigroups (Algebraic Structures)]]"
  - "[[Rings (Algebraic Structure) - Ring Theory]]"
  - "[[Semigroups (Algebraic Structures)]]"
  - "[[Semilattices／Semi-Lattices (Algebraic Structures)]]"
  - "[[Semirings／Semi-Rings (Algebraic Structures)]]"
  - "[[Unital Magmas (Algebraic Structures)]]"
  - "[[Unitary Rings (Algebraic Structures)]]"
---
###### Algebraic Structures
````excerpt
- In [[Abstract Algebra - Modern Algebra - Structural Algebra|abstract algebra]], an <strong>algebraic structure</strong> on a set 𝐴 (called <strong>carrier set</strong> or <strong>underlying set</strong>) is a collection of finitary operations on 𝐴. The set 𝐴 with this structure is also called an <strong>[[Algebra|algebra]]</strong>.
````
^excerpt

# Algebraic Structures - 1 Operator Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Algebraic Structure Type",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "[[Binary／Dyadic Operations／Operators|Binary Operation]] Properties",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 5
      },
      null,
      null,
      null,
      null,
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
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
        "content": "[[Partial Magmas (Algebraic Structures)|Partial Magma]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[Semigroupoid](https://en.wikipedia.org/wiki/Semigroupoid)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[Small Category](https://en.wikipedia.org/wiki/Category_(mathematics))",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[Groupoid](https://en.wikipedia.org/wiki/Groupoid)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "> [!expand]- Click here to expand...\n> groupoid can be seen as a:\n> - <em>[Group](https://en.wikipedia.org/wiki/Group_(mathematics))</em> with a [partial function](https://en.wikipedia.org/wiki/Partial_function) replacing the [binary operation](https://en.wikipedia.org/wiki/Binary_operation);\n> - <em>[Category](https://en.wikipedia.org/wiki/Category_theory)</em> in which every [morphism](https://en.wikipedia.org/wiki/Morphism) is invertible. A category of this sort can be viewed as augmented with a [unary operation](https://en.wikipedia.org/wiki/Unary_operation), called <em>inverse</em> by analogy with [group theory](https://en.wikipedia.org/wiki/Group_theory). Notice that a groupoid where there is only one object is a usual group"
    ],
    [
      {
        "content": "[[Magmas (Algebraic Structures)|Magma]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Commutative Magma]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Quasigroups (Algebraic Structures)|Quasigroup]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "is a magma whose elements are invertible"
    ],
    [
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Unital Magmas (Algebraic Structures)|Unital Magma]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Loops (Algebraic Structures)|Loop]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "is a quasigroup with an identity element"
    ],
    [
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Semigroups (Algebraic Structures)|Semigroup]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "is a magma whose binary operation is associative"
    ],
    [
      {
        "content": "[[Semilattices／Semi-Lattices (Algebraic Structures)|Semilattice]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      "is a semigroup whose binary operation is commutative and idempotent"
    ],
    [
      {
        "content": "[[Inverse Semigroups - Associative Quasigroups (Algebraic Structures)|Inverse Semigroup]]\n[[Inverse Semigroups - Associative Quasigroups (Algebraic Structures)|Associative Quasigroup]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "is a semigroup whose elements are invertible"
    ],
    [
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Monoids (Algebraic Structures)|Monoid]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "is a semigroup with an identity element"
    ],
    [
      {
        "content": "[[Commutative Monoids (Algebraic Structures)|Commutative Monoid]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      "is a monoid whose binary operation is also commutative"
    ],
    [
      {
        "content": "[[Groups (Algebraic Structure) - Group Theory|Group]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      "is a monoid whose elements are invertible\nis a loop whose binary operation is associative\nis an inverse group with an identity element"
    ],
    [
      {
        "content": "[[Abelian Groups (Algebraic Structure)|Abelian Group]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      "is a group where the binary operation is commutative"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Algebraic Structures - 2 Operator Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Algebraic Structure Type",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "[[Binary／Dyadic Operations／Operators|Binary Operation]] Properties",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 5
      },
      null,
      null,
      null,
      null,
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
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
        "content": "[[Semirings／Semi-Rings (Algebraic Structures)|Semiring]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      "",
      {
        "content": "is similar to a ring, but without the requirement that each element must have an additive inverse while a <font style=\"color: rgb(0,51,102);\">ring</font> is (algebra) an algebraic structure as above, but only ✅ to be a semigroup under the multiplicative operation, that is, there need not be a multiplicative identity element.",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Rings (Algebraic Structure) - Ring Theory|Ring]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "align": "left"
      },
      {
        "content": "is an abelian group (under addition, say) that happens to have a <strong>second</strong> closed, associative, binary operation as well. And these two operations satisfy a distribution law. (You may or may not require rings to have an identity with the second operation)",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">❌</font>",
        "align": "center"
      },
      {
        "align": "left"
      }
    ],
    [
      {
        "content": "[[Unitary Rings (Algebraic Structures)|Unitary Ring]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      "",
      {
        "content": "TODO",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "?",
        "align": "center"
      },
      {
        "content": "?",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Fields (Algebraic Structure) - Field Theory|Field]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "align": "left"
      },
      {
        "content": "is a ring where both operations are commutative, where every element has both an additive inverse (i.e. the first operation) and a multiplicative inverse (i.e. the second operation) (and thus there is a multiplicative identity), and the extra requirement that if xy=0 for some x≠0, then we must have y=0 (we call this having no zero-divisors)",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "align": "center"
      },
      {
        "align": "left"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Algebraic Structures - Complex Types
- [[Mathematical Spaces|mathematical spaces]]
	- [[Vector Spaces - Linear Spaces|vector spaces]]
- [modules](https://en.wikipedia.org/wiki/Module_(mathematics))
- [algebras](https://en.wikipedia.org/wiki/Algebra_(ring_theory))

# Algebraic Structures - Examples

see: [[Algebraic Structures - Examples]]
