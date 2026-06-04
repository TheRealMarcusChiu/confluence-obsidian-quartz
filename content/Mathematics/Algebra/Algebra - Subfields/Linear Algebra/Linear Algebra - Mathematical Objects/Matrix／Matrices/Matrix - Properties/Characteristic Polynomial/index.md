---
title: "Characteristic Polynomial"
created: 2021-09-13T05:25:53.227-05:00
modified: 2023-06-26T19:28:30.782-05:00
parent: "[[Matrix - Properties]]"
children: []
---
# Characteristic Polynomial - Computation Example

Suppose we want to compute the <em>characteristic polynomial</em> of the matrix

> [!indent]
> ![[Characteristic Polynomial/characteristic-polynomials-1.png|301]]

first, subtract 𝜆𝐼 from 𝐴

> [!indent]
> ![[Characteristic Polynomial/characteristic-polynomials-2.png|301]]
> ![[Characteristic Polynomial/characteristic-polynomials-3.png|301]]

next compute its [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]]:

> [!indent]
> ![[Characteristic Polynomial/characteristic-polynomials-4.png|301]]
> ![[Characteristic Polynomial/characteristic-polynomials-5.png|301]]

thus, the <em>characteristic polynomial</em> of 𝐴 is:

> [!indent]
> 𝜆<sup>2</sup> - 2𝜆 + 1

# Characteristic Polynomial - Properties

properties of the <em>characteristic polynomial</em> of a 𝑛x𝑛 matrix 𝐴:
- its degree is 𝑛
- is monic (its leading coefficient is 1)
- its roots are the [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]] of matrix 𝐴 ([[Eigenvalues are the roots of the Characteristic Polynomial|proof]])

Both matrix 𝐴 and its [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|transpose]] 𝐴<sup>𝑇</sup> have the same <em>characteristic polynomial</em> ([[A matrix and its transpose have the same characteristic polynomial and eigenvalues|proof]])
