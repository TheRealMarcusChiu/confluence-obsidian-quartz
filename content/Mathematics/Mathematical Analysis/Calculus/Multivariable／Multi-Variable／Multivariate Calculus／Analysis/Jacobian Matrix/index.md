---
title: "Jacobian Matrix"
created: 2021-09-13T05:25:57.552-05:00
modified: 2023-12-20T13:18:10.972-06:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children:
  - "[[Jacobian Determinant - Jacobian Scale Factor]]"
  - "[[Jacobian Matrix - Using Jacobian Determinant to Calculate How a \"Change of Basis／Variables\" Warps Volume]]"
---
###### Jacobian Matrix
````excerpt
- the <em>Jacobian Matrix</em> of a [[Multi-Variable／Multivariable Vector-Valued Functions|multivariable vector-valued function]] 𝑓 is the [[Matrix／Matrices|matrix]] of all its first-order [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivatives]]
- is the matrix representing the best [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]] approximation of 𝑓 near every point
- takes advantage of the fact that most multivariable functions are locally linear
````
^excerpt

# Jacobian Matrix - Definition
The Jacobian Matrix <strong>𝐉</strong> of a multivariable function <strong>𝒇</strong>: ℝ<sup>𝑛</sup> → ℝ<sup>𝑚</sup> is defined as an 𝑚×𝑛 matrix whose (𝑖,𝑗)<sup>𝑡𝘩</sup> entry is <strong>𝐉</strong><sub>𝑖𝑗</sub> = 𝛿𝑓<sub>𝑖</sub> / 𝛿𝑥<sub>𝑗</sub>

> [!indent]
> ![[Jacobian Matrix/jacobian-matrix.png|350]]

# Jacobian Matrix - Examples

> [!expand]- Example 1
> <strong>𝒇</strong>: ℝ<sup><em>2</em></sup> → ℝ<sup><em>3</em></sup>
>
> ![[Jacobian Matrix/jacobian-matrix-example.png|450]]
>
> since 𝐉 is not a square matrix, there is no Jacobian Determinant

> [!expand]- Example 2
> <strong>𝒇</strong>: ℝ<sup><em>2</em></sup> → ℝ<sup><em>2</em></sup>
>
> ![[Jacobian Matrix/jacobian-matrix-example-2.png|450]]
>
> since 𝐉 is a square matrix, the Jacobian Determinant is: 1 - 𝑠𝑖𝑛(𝑥)𝑠𝑖𝑛(𝑦)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/jacobian-prerequisite-knowledge](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/jacobian-prerequisite-knowledge)
- [What is Jacobian? | The right way of thinking derivatives and integrals](https://www.youtube.com/watch?v=wCZ1VEmVjVo)
