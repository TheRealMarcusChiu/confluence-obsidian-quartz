---
title: "Spectral Theorem - 𝐴 is Orthogonally Diagonalizable ⟺ 𝐴 is Symmetric"
created: 2021-12-05T02:58:09.604-06:00
modified: 2023-06-19T14:35:01.739-05:00
parent: "[[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix]]"
children: []
---
# Spectral Theorem

The [[Spectral Theorem／Theory|Spectral Theorem]] states:
- 𝐴 is orthogonally diagonalizable ↔ 𝐴 is symmetric

In other words:
- a square matrix is [[Symmetric Matrix|symmetric]] if and only if it has an orthonormal eigenbasis
- equivalently, a square matrix is symmetric if and only if there exists an [[Orthogonal／Orthonormal Matrix|orthogonal matrix]] 𝑆 such that 𝑆<sup>𝑇</sup>𝐴𝑆 is diagonal
- that is, a matrix is orthogonally diagonalizable if and only if it is symmetric

# Proof

> [!expand-ui]- 𝐴 is orthogonally diagonalizable ⟹ 𝐴 is symmetric
> suppose 𝐴 is [[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|orthogonally diagonalizable]]:
> - 𝐴 = 𝑃𝐷𝑃<sup>𝑇</sup>
>
> then:
> - 𝐴<sup>𝑇</sup> = (𝑃𝐷𝑃<sup>𝑇</sup>)<sup>𝑇</sup>
> - 𝐴<sup>𝑇</sup> = 𝑃<sup>𝑇</sup><sup>𝑇</sup>𝐷<sup>𝑇</sup>𝑃<sup>𝑇</sup>
> - 𝐴<sup>𝑇</sup> = 𝑃𝐷𝑃<sup>𝑇</sup>
> - 𝐴<sup>𝑇</sup> = 𝐴

> [!expand-ui]- 𝐴 is symmetric ⟹ 𝐴 is orthogonally diagonalizable
> ###### If 𝐴 is symmetric, then any two distinct [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvectors]] 𝑣<sub>1</sub> & 𝑣<sub>2</sub> <font style="color: rgb(122,134,154);">(with corresponding eigenvalues 𝜆<sub>1</sub> & 𝜆<sub>2</sub>)</font> are orthogonal
> - 𝑣<sub>1</sub>·(𝐴𝑣<sub>2</sub>) = 𝑣<sub>1</sub><sup>𝑇</sup>(𝐴𝑣<sub>2</sub>)
> - 𝑣<sub>1</sub>·(𝐴𝑣<sub>2</sub>) = (𝐴<sup>𝑇</sup>𝑣<sub>1</sub>)<sup>𝑇</sup>𝑣<sub>2</sub>
> - 𝑣<sub>1</sub>·(𝐴𝑣<sub>2</sub>) = (𝐴<sup>𝑇</sup>𝑣<sub>1</sub>)·𝑣<sub>2</sub>
> - 𝑣<sub>1</sub>·(𝐴𝑣<sub>2</sub>) = (𝐴𝑣<sub>1</sub>)·𝑣<sub>2</sub>
> - 𝑣<sub>1</sub>·(𝜆<sub>2</sub>𝑣<sub>2</sub>) = (𝜆<sub>1</sub>𝑣<sub>1</sub>)·𝑣<sub>2</sub>
> - 𝜆<sub>2</sub>(𝑣<sub>1</sub>·𝑣<sub>2</sub>) = 𝜆<sub>1</sub>(𝑣<sub>1</sub>·𝑣<sub>2</sub>)
> - 𝜆<sub>2</sub>(𝑣<sub>1</sub>·𝑣<sub>2</sub>) - 𝜆<sub>1</sub>(𝑣<sub>1</sub>·𝑣<sub>2</sub>) = 0
> - (𝜆<sub>2</sub>-𝜆<sub>1</sub>)(𝑣<sub>1</sub>·𝑣<sub>2</sub>) = 0
>
> Since 𝜆<sub>1</sub>and 𝜆<sub>2</sub>are distinct → 𝜆<sub>2</sub>-𝜆<sub>1</sub> is never 0:
> - Thus 𝑣<sub>1</sub>·𝑣<sub>2</sub>= 0
> - Thus 𝑣<sub>1</sub>& 𝑣<sub>2</sub>are orthogonal
>
> ###### If 𝐴 is symmetric and is diagonalizable, then it is orthogonally diagonalizable
> - Let {<strong>𝜆</strong><sub>1</sub>, ..., 𝜆<sub>𝑛</sub>} be distinct eigenvalues of 𝐴
> - Let {𝐸<sub>1</sub>, ..., 𝐸<sub>𝑛</sub>} be the associated eigenspaces
>
> We know the eigenspaces add up to 𝑛 (where 𝐴 is 𝑛𝗑𝑛). Each 𝐸<sub>𝑖</sub> has a basis, which we can assume is orthonormal by Gram Schmidt. Also, the vectors in 𝐸<sub>𝑖</sub> and 𝐸<sub>𝑗</sub>are always orthogonal.
> - Thus {𝐸<sub>1</sub>, ..., 𝐸<sub>𝑛</sub>} is an orthonormal set
> - Thus {𝐸<sub>1</sub>, ..., 𝐸<sub>𝑛</sub>} forms the orthonormal eigenbasis
