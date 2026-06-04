---
title: "Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces"
created: 2023-06-11T20:17:35.384-05:00
modified: 2024-01-12T17:15:18.336-06:00
parent: "[[Dual Spaces]]"
children:
  - "[[Finite-Dimensional Algebraic Dual Spaces - Finite-Dimensional Vector Dual Spaces]]"
  - "[[Infinite-Dimensional Algebraic Dual Spaces - Infinite-Dimensional Vector Dual Spaces]]"
---
###### Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces (𝑉\*, 𝑉<sup>∨</sup>, 𝑉', 𝑉<sup>\#</sup>, 𝐻𝑜𝑚(𝑉,𝐹))
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a [[Dual Spaces|dual space]]
- if 𝑉 is a [[Vector Spaces - Linear Spaces|vector space]] over a [[Algebraic Structures|field]] 𝐹, the set of all [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear functionals]] from 𝑉 to 𝐹 is itself a vector space over 𝐹. This space is called the <em>algebraic dual space</em> of 𝑉
- any [[Vector Spaces - Linear Spaces|vector space (𝑉,𝐹)]] over a [[Fields (Algebraic Structure) - Field Theory|field (𝐹)]] has a corresponding <em>dual space (𝑉\*)</em> defined as the set of all [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear functionals]] (𝜑 : 𝑉 → 𝐹). The <em>dual space (𝑉\*)</em> itself becomes a vector space over 𝐹 when equipped with addition and scalar multiplication satisfying, for all 𝜑,𝛾∊𝑉\*, 𝑥∊𝑉, and 𝑎∊𝐹:
	- (𝜑 + 𝛾)(𝑥) = 𝜑(𝑥) + 𝛾(𝑥)
	- (𝑎𝜑)(𝑥) = 𝑎(𝜑(𝑥))
- the elements of the <em>algebraic dual space (𝑉\*)</em> are sometimes called [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear functionals, linear forms, covectors, and one-forms]]
- the pairing of an element 𝑣∊𝑉 and a linear functional 𝜑∊𝑉\*:
	- defines a [[Non-Degenerate Bilinear Functionals - Non-Degenerate Bilinear Forms|non-degenerate bilinear functional]] ⟨·,·⟩ : 𝑉 ⨯ 𝑉\* → 𝐹 called the [natural pairing](https://en.wikipedia.org/wiki/Dual_system)
	- is sometimes denoted by: 𝜑(𝑣) = \[𝑣,𝜑\] = ⟨𝑣,𝜑⟩
- when defined for [[Topological Vector Spaces (TVS) - Linear Topological Spaces|topological vector spaces]] see [[Dual Spaces - Continuous Dual Spaces|Continuous Dual Spaces]]
````
^excerpt

# Dual Spaces - Intuition
[[Dual Space - Intuition and Understanding]]
# Dual Spaces - Finite vs Infinite

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Finite-Dimensional Algebraic Dual Spaces - Finite-Dimensional Vector Dual Spaces|Finite-Dimensional Algebraic Dual Spaces]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Finite-Dimensional Algebraic Dual Spaces - Finite-Dimensional Vector Dual Spaces#^excerpt]]"
    ],
    [
      {
        "content": "[[Infinite-Dimensional Algebraic Dual Spaces - Infinite-Dimensional Vector Dual Spaces|Infinite-Dimensional Algebraic Dual Spaces]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Infinite-Dimensional Algebraic Dual Spaces - Infinite-Dimensional Vector Dual Spaces#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Dual Spaces - Applications

Dual vector spaces find application in many branches of mathematics that use vector spaces, such as:
- Used in [[Tensor Calculus - Tensor Analysis - Ricci Calculus|tensor analysis]] with [[Finite-Dimensional Vector Spaces|finite-dimensional vector spaces]]
- Used in [[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation|Transpose of a Linear Transformation]]
- When applied to vector spaces of functions (which are typically infinite-dimensional), <em>dual spaces</em> are used to describe [[Measure／Measures|measures]], distributions, and [[Mathematical Spaces|Hilbert spaces]]. Consequently, <em>dual space</em> is an important concept in [[Functional Analysis|functional analysis]]
