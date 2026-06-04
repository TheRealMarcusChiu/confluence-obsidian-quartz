---
title: "Singular Value Decomposition／Factorization (SVD) - Reduced SVD"
created: 2021-09-13T05:25:51.031-05:00
modified: 2026-05-24T16:24:53.616-05:00
parent: "[[Matrix - Decompositions／Factorizations]]"
children:
  - "[[SVD - Image Compression (Python)]]"
---
###### Singular Value Decomposition (SVD)
````excerpt
- is a generalization of [[Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix|eigen-decomposition]], decomposing rectangular matrices
- related to [[Singular Values (s-numbers)|singular values]]
- is like a "data-driven" [[Fast Fourier Transform (FFT)]]
````
^excerpt

if 𝐴𝑥 = 𝜆𝑥 & ||𝑥|| = 1, then:
- ||𝐴𝑥|| = ||𝜆𝑥||
- ||𝐴𝑥|| = |𝜆| ||𝑥||
- ||𝐴𝑥|| = |𝜆|

# SVD - Definition (Real and/or Complex Matrix)
The SVD of an 𝑚✕𝑛 real and/or complex matrix 𝐴 with rank 𝑟 is:
- 𝐴 = 𝑈𝛴𝑉\*

where:
- 𝑈 - 𝑚✕𝑚 real or complex [[Unitary Matrix|unitary matrix]]
- 𝛴 - 𝑚✕𝑛rectangular matrix with diagonal entries of the first 𝑟 singular values of 𝐴 (𝜎<sub>1</sub> ≥ 𝜎<sub>2</sub> ≥ ... ≥ 𝜎<sub>𝑟</sub>)
- 𝑉 - 𝑛✕𝑛 real or complex [[Unitary Matrix|unitary matrix]] (𝑉\* - [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|complex conjugate]] of 𝑉)

# SVD - Definition (Real Matrix)
If 𝐴 is real, 𝑈 and 𝑉\*=𝑉<sup>𝑇</sup> are real [[Orthogonal／Orthonormal Matrix|orthogonal matrices]] (where 𝑉<sup>𝑇</sup> is the transpose)
- 𝐴 = 𝑈𝛴𝑉<sup>𝑇</sup>

where:
- 𝑈 - [[Orthogonal／Orthonormal Matrix|orthogonal]] 𝑚✕𝑚[[Unitary Matrix|unitary matrix]]. normalized eigenvectors of the symmetric matrix 𝐴𝐴<sup>𝑇</sup> (𝑖.𝑒. 𝑈<sup>𝑇</sup>𝑈=𝐼) columns of 𝑈 are called the <strong><font style="color: rgb(128,128,128);">left singular vectors</font></strong> of 𝐴
- 𝑉 - [[Orthogonal／Orthonormal Matrix|orthogonal]] 𝑛✕𝑛 [[Unitary Matrix|unitary matrix]]. normalized eigenvectors of the symmetric matrix 𝐴<sup>𝑇</sup>𝐴 (𝑖.𝑒. 𝑉<sup>𝑇</sup>𝑉=𝐼) columns of 𝑉 are called the <font style="color: rgb(128,128,128);"><strong>right singular vectors</strong></font> of 𝐴
- 𝛴 - [[Diagonal Matrix|diagonal matrix]] of [[Singular Values (s-numbers)|singular values]]
- 𝛴 = 𝐷<sup>(1/2)</sup> where 𝐷 is the [[Diagonal Matrix|diagonal matrix]] of the [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]] of matrix 𝐴𝐴<sup>𝑇</sup>and 𝐴<sup>𝑇</sup>𝐴

derivation:

> [!expand]- Click here to expand...
> - let {𝐴𝑣<sub>1</sub>, ..., 𝐴𝑣<sub>𝑟</sub>} be an [[Orthogonal Basis Vectors|orthogonal basis]] for [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column-space]] of 𝐴
> - normalize each 𝐴𝑣<sub>𝑖</sub> to obtain [[Orthonormal Basis Vectors|orthonormal basis]] {𝑢<sub>1</sub>, ..., 𝑢<sub>𝑟</sub>} for [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column-space]] of 𝐴
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">now extend <font style="color: rgb(32,33,34);">{</font><font style="color: rgb(32,33,34);">𝑢</font><sub>1</sub><font style="color: rgb(32,33,34);">, ..., </font><font style="color: rgb(32,33,34);">𝑢</font><sub>𝑟</sub><font style="color: rgb(32,33,34);">} to an orthonormal basis {𝑢<sub>1</sub>, ..., 𝑢<sub>𝑚</sub>} of ℝ<sup>𝑚</sup></font></font></font>
>
> > [!indent]
> ![[Singular Value Decomposition／Factorization (SVD) - Reduced SVD/svd.png|330]]SVD - 4 Fundamental Subspaces

![[Singular Value Decomposition／Factorization (SVD) - Reduced SVD/svd-visual.png|350]]
###### The Invertible Matrix Theorem

let 𝐴 be 𝑛✕𝑛 matrix. then the following statements are equivalent to the statement that 𝐴 is an invertible matrix:
- (𝐶𝑜𝑙𝐴)<sup>⟂</sup>= {0}
- (N𝑢𝑙𝑙𝐴)<sup>⟂</sup> = ℝ<sup>𝑛</sup>
- 𝑅𝑜𝑤𝐴 = ℝ<sup>𝑛</sup>
- 𝐴 has 𝑛 non-zero [[Singular Values (s-numbers)|singular values]]

# SVD - Reduced SVD & Pseudo Inverse (Moore-Penrose Inverse)

> [!indent]
> ![[Singular Value Decomposition／Factorization (SVD) - Reduced SVD/reduced-svd.png|330]]

𝑈<sub>𝑟</sub>𝐷𝑉<sub>𝑟</sub><sup>𝑇</sup>is called reduced SVD

[[Moore-Penrose Pseudo-Inverse Matrix|pseudoinverse (Moore-Penrose Inverse)]] of 𝐴:
- 𝐴<sup>†</sup>= 𝑉<sub>𝑟</sub>𝐷<sup>-1</sup>𝑈<sub>𝑟</sub><sup>𝑇</sup>

###### application to least-squares solution
given the equation 𝐴𝑥 = 𝑏, use pseudoinverse of 𝐴
- 𝑥̂ = 𝐴<sup>†</sup>𝑏
- 𝑥̂ = 𝑉<sub>𝑟</sub>𝐷<sup>-1</sup>𝑈<sub>𝑟</sub><sup>𝑇</sup>𝑏

then from SVD:
- 𝐴𝑥̂ = 𝑈<sub>𝑟</sub>𝐷𝑉<sub>𝑟</sub><sup>𝑇</sup>𝑉<sub>𝑟</sub>𝐷<sup>-1</sup>𝑈<sub>𝑟</sub><sup>𝑇</sup>𝑏
- 𝐴𝑥̂ = 𝑈<sub>𝑟</sub>𝑈<sub>𝑟</sub><sup>𝑇</sup>𝑏

# SVD - Intuition (As Linear Transformations)

```merge-table
{
  "rows": [
    [
      "![[Singular Value Decomposition／Factorization (SVD) - Reduced SVD/singular-value-decomposition.png]]",
      "###### When 𝐴 is a Square 𝑚✕𝑚 Real Matrix\n- 𝐴 is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] of space ℝ<sup>𝑚</sup>\n- SVD breaks down any invertible 𝑀 into 3 geometric transformations:\n\t- 𝑉\\* - rotation or reflection\n\t- 𝐷 - scaling\n\t- 𝑈 - rotation or reflection\n- 𝑈 & 𝑉\\* can be chosen as 𝑚✕𝑚 real matrices. Therefore, [[Unitary Matrix|unitary]] becomes [[Orthogonal／Orthonormal Matrix|orthogonal]] and therefore both 𝑈 & 𝑉\\* can be thought as rotations and/or reflections\n- if the [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]] of 𝐴 is:\n\t- positive - 𝑈 & 𝑉\\* is either both reflections or both rotations\n\t- negative - exactly one is reflection\n\t- zero - anything goes\n\n###### When 𝐴 is a Rectangular 𝑚✕𝑛 Real Matrix\n- 𝐴 is a linear transformation of space ℝ<sup>𝑛</sup>to ℝ<sup>𝑚</sup>\n- SVD breaks down any invertible 𝐴 into 3 geometric transformations:\n\t- 𝑉\\* - rotation or reflection in space ℝ<sup>𝑛</sup>\n\t- 𝐷 - scaling from ℝ<sup>𝑛</sup>to ℝ<sup>𝑚</sup>\n\t- 𝑈 - rotation or reflection in space ℝ<sup>𝑚</sup>"
    ]
  ]
}
```
# SVD - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# Resources
- [Brunton and Kutz: Video Lectures](https://www.youtube.com/playlist?list=PLMrJAkhIeNNSVjnsviglFoY2nXildDCcv)
