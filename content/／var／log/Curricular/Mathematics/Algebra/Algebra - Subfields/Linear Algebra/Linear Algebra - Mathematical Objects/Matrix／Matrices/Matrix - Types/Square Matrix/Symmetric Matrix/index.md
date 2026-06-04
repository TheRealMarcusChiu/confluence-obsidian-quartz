---
title: "Symmetric Matrix"
created: 2021-09-13T05:26:01.834-05:00
modified: 2021-12-05T03:02:34.176-06:00
parent: "[[Square Matrix]]"
children:
  - "[[Positive／Negative Definite／Semi-Definite Indefinite Matrix]]"
  - "[[Projection／Idempotent Matrix (Projections onto Subspaces)]]"
---
###### Symmetric Matrix
- is a [[Square Matrix|square matrix]] where its transpose is equal to itself (i.e. 𝐴 = 𝐴<sup>𝑇</sup>)

# Tutorial
- [Gilbert Strang's Video Lecture](https://www.youtube.com/watch?v=UCc9q_cAhho&list=PLE7DDD91010BC51F8&index=28&t=0s)

# Symmetric Matrix - Properties

an 𝑛✕𝑛 symmetric matrix 𝐴 has the following properties:
- 𝐴 has 𝑛 real [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]], counting multiplicities (i.e. multiple of the same eigenvalue)
- the dimension of the eigenspace for each eigenvalue 𝜆 equals the multiplicity of 𝜆 as a root of the [[Characteristic Polynomial|characteristic equation]]
- the eigenspaces are mutually orthogonal, in the sense that eigenvectors corresponding to different eigenvalues are orthogonal
- 𝐴 is [[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|orthogonally diagonalizable]] (see proof here [[Spectral Theorem - 𝐴 is Orthogonally Diagonalizable ⟺ 𝐴 is Symmetric]])

# Symmetric Matrix - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
