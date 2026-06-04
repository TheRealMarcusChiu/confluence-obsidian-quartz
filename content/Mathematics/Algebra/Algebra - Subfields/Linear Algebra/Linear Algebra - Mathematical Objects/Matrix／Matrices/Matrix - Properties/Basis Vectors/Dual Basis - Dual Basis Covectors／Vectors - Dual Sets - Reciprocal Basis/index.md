---
title: "Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis"
created: 2023-06-11T11:12:43.763-05:00
modified: 2026-05-23T11:28:12.452-05:00
parent: "[[Basis Vectors]]"
children: []
---
###### Dual Basis - Dual Basis Covectors/Vectors - Dual Sets - Reciprocal Basis - (𝐵\*)
````excerpt
- is a set of vectors that spans a [[Finite-Dimensional Algebraic Dual Spaces - Finite-Dimensional Vector Dual Spaces|finite-dimensional algebraic dual space]]
- given a [[Vector Spaces - Linear Spaces|vector space]] 𝑉 with a [[Basis Vectors|basis]] 𝐵 of vectors indexed by an [index set](https://en.wikipedia.org/wiki/Index_set) 𝐼 (the [cardinality](https://en.wikipedia.org/wiki/Cardinality) of 𝐼 is the dimension of 𝑉), the <strong>dual set</strong> of 𝐵 is a set 𝐵\* of vectors in the [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|dual space]] 𝑉\* with the same index set 𝐼 such that 𝐵 and 𝐵\* form a [biorthogonal system](https://en.wikipedia.org/wiki/Biorthogonal_system). The dual set is always [[Linear Independence - Linearly Independent - Linear Dependence - Linearly Dependent|linearly independent]] but does not necessarily [[Linear Span／Hull - Span／Spans - Spanning Set|span]] 𝑉\*. If it does span 𝑉\*, then 𝐵\* is called the <strong>dual basis</strong> or <strong>reciprocal basis</strong> for the basis 𝐵.
- is a (1,0)-[[Tensors|tensor]]
````
^excerpt

# Dual Basis - Intuition

See [[Tensor - 3 - Covector Introduction|Covector Introduction]]
# Dual Basis - Finite-Dimensional - One Possible Dual Basis Using Kronecker Delta Function

```merge-table
{
  "rows": [
    [
      "Given a [[Vector Spaces - Linear Spaces|vector space]] 𝑉 in ℝ<sup>𝑛</sup> and [[Basis Vectors|basis vectors]] {𝑒<sub>1</sub>, ..., 𝑒<sub>𝑛</sub>} that spans 𝑉, one possible <em>dual basis</em> {𝜀<sup>1</sup>, ..., 𝜀<sup>𝑛</sup>} that spans the [[Finite-Dimensional Algebraic Dual Spaces - Finite-Dimensional Vector Dual Spaces|dual space]] of 𝑉 can be defined as (where 𝛿 is the [[Kronecker Delta Function／Symbol|Kronecker delta function]]):\n- $𝜀^i·e_j = 𝜀^i(e_j) = 𝛿^i_j = \\begin{cases} 1 & if \\quad i = j \\\\ 0 & otherwise \\\\ \\end{cases}$\n\nIn other words, we find a set of linear functionals {𝜀<sup>1</sup>, ..., 𝜀<sup>𝑛</sup>} such that it \"consumes\" 𝑉's basis vectors {𝑒<sub>1</sub>, ..., 𝑒<sub>𝑛</sub>} in the following way:\n- $𝜀^i(e_j) = \\begin{cases} 1 & if \\quad i = j \\\\ 0 & otherwise \\\\ \\end{cases}$",
      "In other words, let:\n- 𝐸 = \\[𝑒<sub>1</sub>|𝑒<sub>2</sub>|...|𝑒<sub>𝑛</sub>\\] a matrix whose columns are the basis vectors {𝑒<sub>1</sub>, 𝑒<sub>2</sub>, ..., 𝑒<sub>𝑛</sub>}\n- 𝐸ˆ = \\[𝜀<sup>1</sup>|𝜀<sup>2</sup>|...|𝜀<sup>𝑛</sup>\\] a matrix whose columns are the epsilon covectors {𝜀<sup>1</sup>, 𝜀<sup>2</sup>, ..., 𝜀<sup>𝑛</sup>}\n\nThe system of equations on the LEFT can be expressed as:\n- $\\hat{E}^TE = I$\n- $\\left[ \\begin{array}{cccc} 𝜀^1_1 & 𝜀^1_2 & \\dots & 𝜀^1_n \\\\ \\hline 𝜀^2_1 & 𝜀^2_2 & \\dots & 𝜀^2_n \\\\ \\hline \\vdots & \\vdots & \\ddots & \\vdots \\\\ 𝜀^n_1 & 𝜀^n_2 & \\dots & 𝜀^n_n \\\\ \\end{array} \\right] \\left[ \\begin{array}{c|c|c|c} e_{11} & e_{21} & \\dots & e_{n1} \\\\ e_{12} & e_{22} & \\dots & e_{n2} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ e_{1n} & e_{2n} & \\dots & e_{nn} \\\\ \\end{array} \\right] = \\begin{bmatrix} 1 & 0 & \\dots & 0 \\\\ 0 & 1 & \\dots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\dots & 1 \\\\ \\end{bmatrix}$\n\nTL;DR\n1. Write your basis vectors as column vectors in a matrix\n2. Invert that matrix\n3. Your dual basis vectors are the row vectors of your inverted matrix\n\nIn other words, the dual basis which are the columns of 𝐸ˆ can be computed as:\n- 𝐸ˆ = (𝐸<sup>-1</sup>)<sup>T</sup>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Dual Basis - Infinite-Dimensional

TODO: [https://en.wikipedia.org/wiki/Dual_space#:~:text=Infinite%2Ddimensional%20case](https://en.wikipedia.org/wiki/Dual_space#:~:text=Infinite%2Ddimensional%20case)
# Resources
- [Dr Peyam - Dual basis](https://www.youtube.com/watch?v=tnVkVJpn-BE&list=PLJb1qAQIrmmCs0fJDQnXgeuyFR8iQDwLV&index=2)
