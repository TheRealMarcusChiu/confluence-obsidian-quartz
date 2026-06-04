---
title: "Pointwise Functions／Operations／Operators"
created: 2023-07-03T17:09:57.095-05:00
modified: 2023-07-03T17:24:13.347-05:00
parent: "[[Transformations - Properties／Types]]"
children: []
---
###### Pointwise Functions/Operations/Operators
````excerpt
- a [[Binary／Dyadic Operations／Operators|binary operation]] 𝑜: 𝑌 × 𝑌 → 𝑌 on a set 𝑌 can be lifted pointwise to an operation 𝑂: (𝑋→𝑌) × (𝑋→𝑌) → (𝑋→𝑌) on the set 𝑋→𝑌 of all functions from 𝑋 to 𝑌 as follows: Given two functions from 𝑓<sub>1</sub>: 𝑋 → 𝑌 and 𝑓<sub>2</sub>: 𝑋 → 𝑌, define the function 𝑂(𝑓<sub>1</sub>,𝑓<sub>2</sub>): 𝑋 → 𝑌 by (𝑂(𝑓<sub>1</sub>,𝑓<sub>2</sub>))(𝑥) = 𝑜(𝑓<sub>1</sub>(𝑥),𝑓<sub>2</sub>(𝑥)) for all 𝑥∊𝑋
````
^excerpt

# Pointwise Functions - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "pointwise addition",
        "header": true,
        "bg": "#F4F5F7"
      },
      "(𝑓 + 𝑔)(𝑥) = 𝑓(𝑥) + 𝑔(𝑥)"
    ],
    [
      {
        "content": "pointwise multiplication",
        "header": true,
        "bg": "#F4F5F7"
      },
      "(𝑓 · 𝑔)(𝑥) = 𝑓(𝑥) · 𝑔(𝑥)"
    ],
    [
      {
        "content": "pointwise multiplication by a scalar",
        "header": true,
        "bg": "#F4F5F7"
      },
      "(𝛼 · 𝑓)(𝑥) = 𝛼 · 𝑓(𝑥)"
    ]
  ]
}
```
# Pointwise Functions - Properties

<em>Pointwise functions</em> inherit such properties as [[Associativity／Associative|associativity]], [[Commutativity／Commutative|commutativity]], and [[Distributivity／Distributive|distributivity]] from corresponding operations on the [[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]]
