---
title: "Identity／Neutral Element - Right／Left Identity Element"
created: 2023-06-13T11:45:46.968-05:00
modified: 2023-06-13T12:04:43.317-05:00
parent: "[[Transformations - Properties／Types]]"
children: []
---
###### Identity/Neutral Element - Right/Left Identity Element
````excerpt
- is an element that leaves unchanged every element when the operation is applied
````
^excerpt

# Identity Element - Definition

Given:
- [operation (∗)](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023111) over [set (𝑆)](http://confluence.marcuschiu.com/display/NOT/Set+Theory)

Then an element 𝑒 of 𝑆 is called:
- a left identity if 𝑒 ∗ 𝑠 = 𝑠 for all 𝑠 in 𝑆
- a right identity if 𝑠 ∗ 𝑒 = 𝑠 for all 𝑠 in 𝑆
- If 𝑒 is both a left identity and a right identity, then it is called a two-sided identity, or simply an identity

# Identity Element - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Set",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Operation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Identity",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Real Numbers System|Real numbers]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "+ ([addition](https://en.wikipedia.org/wiki/Addition))",
      "[0](https://en.wikipedia.org/wiki/0_(number))"
    ],
    [
      "· ([multiplication](https://en.wikipedia.org/wiki/Multiplication))",
      "[1](https://en.wikipedia.org/wiki/1_(number))"
    ],
    [
      {
        "content": "[[Complex Numbers System|Complex numbers]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "+ (addition)",
      "0"
    ],
    [
      "· (multiplication)",
      "1"
    ],
    [
      {
        "content": "[Positive integers](https://en.wikipedia.org/wiki/Positive_integer)",
        "bg": "#F4F5F7"
      },
      "[Least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple)",
      "1"
    ],
    [
      {
        "content": "[Non-negative integers](https://en.wikipedia.org/wiki/Non-negative_integer)",
        "bg": "#F4F5F7"
      },
      "[Greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)",
      "0 (under most definitions of GCD)"
    ],
    [
      {
        "content": "[[Vectors]]",
        "bg": "#F4F5F7"
      },
      "[Vector addition](https://en.wikipedia.org/wiki/Vector_addition)",
      "[Zero vector](https://en.wikipedia.org/wiki/Zero_vector)"
    ],
    [
      {
        "content": "m-by-n [[Matrix／Matrices|matrices]]",
        "bg": "#F4F5F7"
      },
      "[Matrix addition](https://en.wikipedia.org/wiki/Matrix_addition)",
      "[Zero matrix](https://en.wikipedia.org/wiki/Zero_matrix)"
    ],
    [
      {
        "content": "n-by-n [[Square Matrix|square matrices]]",
        "bg": "#F4F5F7"
      },
      "[Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication)",
      "<em>I</em><sub><em>n</em></sub> ([[Identity Matrix|identity matrix]])"
    ],
    [
      {
        "content": "m-by-n [[Matrix／Matrices|matrices]]",
        "bg": "#F4F5F7"
      },
      "○ ([Hadamard product](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)))",
      "<em>J</em><sub><em>m</em>, <em>n</em></sub> ([matrix of ones](https://en.wikipedia.org/wiki/Matrix_of_ones))"
    ],
    [
      {
        "content": "All [[Functions (Domain - Codomain - Preimage - Image - Range)|functions]] from a set, M, to itself",
        "bg": "#F4F5F7"
      },
      "∘ ([function composition](https://en.wikipedia.org/wiki/Function_composition))",
      "[Identity function](https://en.wikipedia.org/wiki/Identity_function)"
    ],
    [
      {
        "content": "All [distributions](https://en.wikipedia.org/wiki/Distribution_(mathematics)) on a [group](https://en.wikipedia.org/wiki/Group_(mathematics)), G",
        "bg": "#F4F5F7"
      },
      "∗ ([convolution](https://en.wikipedia.org/wiki/Convolution))",
      "<em>δ</em> ([Dirac delta](https://en.wikipedia.org/wiki/Dirac_delta))"
    ],
    [
      {
        "content": "[Extended real numbers](https://en.wikipedia.org/wiki/Extended_real_number)",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "[Minimum](https://en.wikipedia.org/wiki/Minimum)/infimum",
      "+∞"
    ],
    [
      "[Maximum](https://en.wikipedia.org/wiki/Maximum)/supremum",
      "−∞"
    ],
    [
      {
        "content": "Subsets of a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) M",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      "∩ ([intersection](https://en.wikipedia.org/wiki/Set_intersection))",
      "M"
    ],
    [
      "∪ ([union](https://en.wikipedia.org/wiki/Set_union))",
      "∅ ([empty set](https://en.wikipedia.org/wiki/Empty_set))"
    ],
    [
      {
        "content": "[Strings](https://en.wikipedia.org/wiki/String_(computer_science)), [lists](https://en.wikipedia.org/wiki/Tuple)",
        "bg": "#F4F5F7"
      },
      "[Concatenation](https://en.wikipedia.org/wiki/Concatenation)",
      "[Empty string](https://en.wikipedia.org/wiki/Empty_string), empty list"
    ],
    [
      {
        "content": "A [[Boolean Algebra]]",
        "bg": "#F4F5F7",
        "rowspan": 4
      },
      "∧ ([logical and](https://en.wikipedia.org/wiki/Logical_and))",
      "⊤ (truth)"
    ],
    [
      "↔ ([logical biconditional](https://en.wikipedia.org/wiki/Logical_biconditional))",
      "⊤ (truth)"
    ],
    [
      "∨ ([logical or](https://en.wikipedia.org/wiki/Logical_or))",
      "⊥ (falsity)"
    ],
    [
      "⊕ ([exclusive or](https://en.wikipedia.org/wiki/Exclusive_or))",
      "⊥ (falsity)"
    ],
    [
      {
        "content": "[Knots](https://en.wikipedia.org/wiki/Knot_(mathematics))",
        "bg": "#F4F5F7"
      },
      "[Knot sum](https://en.wikipedia.org/wiki/Knot_sum)",
      "[Unknot](https://en.wikipedia.org/wiki/Unknot)"
    ],
    [
      {
        "content": "[Compact Surfaces](https://en.wikipedia.org/wiki/Compact_surfaces)",
        "bg": "#F4F5F7"
      },
      "# ([connected sum](https://en.wikipedia.org/wiki/Connected_sum))",
      "[<em>S</em><sup>2</sup>](https://en.wikipedia.org/wiki/Sphere)"
    ],
    [
      {
        "content": "[Groups](https://en.wikipedia.org/wiki/Group_(mathematics))",
        "bg": "#F4F5F7"
      },
      "[Direct product](https://en.wikipedia.org/wiki/Direct_product)",
      "[Trivial group](https://en.wikipedia.org/wiki/Trivial_group)"
    ],
    [
      {
        "content": "Two elements, {<em>e</em>, <em>f</em>}",
        "bg": "#F4F5F7"
      },
      "∗ defined by\n<em>e</em> ∗ <em>e</em> = <em>f</em> ∗ <em>e</em> = <em>e</em> and\n<em>f</em> ∗ <em>f</em> = <em>e</em> ∗ <em>f</em> = <em>f</em>",
      "Both e and f are left identities,\nbut there is no right identity\nand no two-sided identity"
    ],
    [
      {
        "content": "[[Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)|Homogeneous Relations]] on a set <em>X</em>",
        "bg": "#F4F5F7"
      },
      "[Relative product](https://en.wikipedia.org/wiki/Relative_product)",
      "[Identity relation](https://en.wikipedia.org/wiki/Identity_relation)"
    ],
    [
      {
        "content": "[Relational Algebra](https://en.wikipedia.org/wiki/Relational_algebra)",
        "bg": "#F4F5F7"
      },
      "[Natural join](https://en.wikipedia.org/wiki/Natural_join) (⋈)",
      "The unique relation [degree zero](https://en.wikipedia.org/wiki/Relation_of_degree_zero) and cardinality one"
    ]
  ]
}
```
