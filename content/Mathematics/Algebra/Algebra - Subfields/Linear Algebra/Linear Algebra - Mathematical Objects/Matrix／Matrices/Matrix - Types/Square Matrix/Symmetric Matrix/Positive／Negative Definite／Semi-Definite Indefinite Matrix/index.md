---
title: "Positive／Negative Definite／Semi-Definite Indefinite Matrix"
created: 2021-09-13T05:26:02.034-05:00
modified: 2023-12-29T17:18:58.299-06:00
parent: "[[Symmetric Matrix]]"
children:
  - "[[Indefinite Matrix]]"
  - "[[Negative Definite Matrix]]"
  - "[[Negative Semi-Definite Matrix]]"
  - "[[Positive Definite Matrix]]"
  - "[[Positive Semi-Definite Matrix]]"
---
- see [[Quadratic Forms]] for its duality

> [!warning]
> <em>positive/negative definite/semi-definite</em> should NOT be a term that applies to matrices. It should only apply to <em>[[Quadratic Forms|quadratic forms]]</em>, which are naturally described by [[Symmetric Matrix|symmetric matrices]] only
# Positive/Negative Definite/Semi-Definite Indefinite Matrix - Definition

A [[Symmetric Matrix|symmetric matrix]] 𝐴 is:

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Positive Definite Matrix|positive definite]]",
        "bg": "#F4F5F7"
      },
      "if the eigenvalues of 𝐴 are all",
      "positive",
      {
        "content": "⟺",
        "bg": "#F4F5F7",
        "rowspan": 5
      },
      "𝑥<sup>T</sup>𝐴𝑥 > 0 for all 𝑥∊ℝ<sup>𝑛</sup>\\{0}"
    ],
    [
      {
        "content": "[[Negative Definite Matrix|negative definite]]",
        "bg": "#F4F5F7"
      },
      "if the eigenvalues of 𝐴 are all",
      "negative",
      "𝑥<sup>T</sup>𝐴𝑥 < 0 for all 𝑥∊ℝ<sup>𝑛</sup>\\{0}"
    ],
    [
      {
        "content": "[[Indefinite Matrix|indefinite]]",
        "bg": "#F4F5F7"
      },
      "if the eigenvalues of 𝐴 are all",
      "positive and negative",
      "𝑥<sup>T</sup>𝐴𝑥 > 0 for all 𝑥∊ℝ<sup>𝑛</sup>\\{0}"
    ],
    [
      {
        "content": "[[Positive Semi-Definite Matrix|positive semi-definite]]",
        "bg": "#F4F5F7"
      },
      "if the eigenvalues of 𝐴 are all",
      "positive or zero",
      "𝑥<sup>T</sup>𝐴𝑥 ≥ 0 for all 𝑥∊ℝ<sup>𝑛</sup>\\{0}"
    ],
    [
      {
        "content": "[[Negative Semi-Definite Matrix|negative semi-definite]]",
        "bg": "#F4F5F7"
      },
      "if the eigenvalues of 𝐴 are all",
      "negative or zero",
      "𝑥<sup>T</sup>𝐴𝑥 ≤ 0 for all 𝑥∊ℝ<sup>𝑛</sup>\\{0}"
    ]
  ]
}
```
# Positive/Negative Definite/Semi-Definite Indefinite Matrix - Symmetric - Eigen Decomposition

A <strong>symmetric</strong> matrix 𝐴 can ALWAYS be [[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|orthogonally eigen-diagonalized]]:
- 𝐴 = 𝑃𝐷𝑃<sup>-1</sup>= 𝑃𝐷𝑃<sup>𝑇</sup>

where:
- 𝐷 - a [[Diagonal Matrix|diagonal matrix]] with [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]] of 𝐴
- 𝑃 - an [[Orthogonal／Orthonormal Matrix|orthonormal matrix]] whose columns are the orthogonal [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvectors]] of 𝐴
- 𝑃<sup>-1</sup>- the [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|inverse]] of 𝑃
- 𝑃<sup>𝑇</sup>- the [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|transpose]] of 𝑃
