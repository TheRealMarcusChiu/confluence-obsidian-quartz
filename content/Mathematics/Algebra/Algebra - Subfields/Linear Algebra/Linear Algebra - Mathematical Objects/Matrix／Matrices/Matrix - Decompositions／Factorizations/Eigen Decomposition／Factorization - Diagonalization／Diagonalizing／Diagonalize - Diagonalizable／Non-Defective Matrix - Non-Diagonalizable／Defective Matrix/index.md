---
title: "Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix"
created: 2021-09-13T05:25:49.480-05:00
modified: 2023-06-09T02:33:24.955-05:00
parent: "[[Matrix - Decompositions／Factorizations]]"
children:
  - "[[Diagonalizability vs Invertibility]]"
---
- <strong>Non-Diagonalizable/Defective Matrix</strong> - a matrix that is <font style="color: rgb(255,0,0);">not </font><strong>diagonalizable</strong>
- <strong>Diagonalizable/Non-Defective Matrix</strong> - a matrix that is <strong>diagonalizable</strong>

# Eigen Decomposition
- is the factorization of a [[Square Matrix|square matrix]] into a canonical form, whereby the matrix is represented in terms of its [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues and eigenvectors]])
- for the eigendecomposition of rectangular matrices see [[Singular Value Decomposition／Factorization (SVD) - Reduced SVD|Singular Value Decomposition]]
- only diagonalizable matrices can be factorized this way
- when the matrix being factorized is a normal or real symmetric matrix, the decomposition is called "[[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|spectral decomposition]]", derived from the spectral theorem
- diagonalizing a matrix 𝐴 is the same process as finding 𝐴's [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues and eigenvectors]]

A 𝑛✕𝑛 matrix 𝐴 is diagonalizable iff 𝐴 has 𝑛 linearly independent <strong>[[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvectors]]</strong>A 𝑛✕𝑛 matrix 𝐴 is diagonalizable iff 𝐴 can be decomposed into:
- 𝐴 = 𝑃𝐷𝑃<sup>-1</sup>

where:
- 𝐷 - [[Diagonal Matrix|diagonal 𝑛✕𝑛 matrix]] of 𝑛 eigenvalues as diagonal
- 𝑃 - nonsingular 𝑛✕𝑛 matrix of 𝑛 eigenvectors of 𝐴 as columns

# Eigen Decomposition - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Diagonalizable Over Reals",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Diagonalizable Over Complex",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Not Diagonalizable",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "> [!expand]- A non-invertible matrix 𝐴 can be eigendecomposed\n> ```\n> 𝐴 = [1 3]\n>     [2 6]\n>\n> 𝑃 = [-3 1]\n>     [ 1 2]\n>\n> 𝑃-𝑖𝑛𝑣𝑒𝑟𝑠𝑒 = [-2/7 1/7]\n>           [ 1/7 3/7]\n>\n> 𝐷 = [0 0]\n>     [0 7]\n> ```\n\n> [!expand]- A projection matrix 𝐴 can be eigendecomposed\n> ```\n> 𝐴 = [1 0]\n>     [0 0]\n>\n> 𝑃 = [1 0]\n>     [0 1]\n>\n> 𝑃-𝑖𝑛𝑣𝑒𝑟𝑠𝑒 = [1 0]\n>           [0 1]\n>\n> 𝐷 = [1 0]\n>     [0 0]\n> ```\n\n> [!expand]- A dilation matrix 𝐴 can be eigendecomposed\n> ```\n> 𝐴 = [3 0]\n>     [0 3]\n>\n> 𝑃 = [1 0]\n>     [0 1]\n>\n> 𝑃-𝑖𝑛𝑣𝑒𝑟𝑠𝑒 = [1 0]\n>           [0 1]\n>\n> 𝐷 = [3 0]\n>     [0 3]\n> ```",
      "> [!expand]- A rotation matrix 𝐴 be eigendecomposed\n> ```\n> 𝐴 = [0 -1]\n>     [1  0]\n>\n> 𝐴 has no real eigenvectors no real eigenvalues\n> But if we allow complex numbers then, TODO\n> ```",
      "> [!expand]- A shear matrix 𝐴 cannot be eigendecomposed\n> ```\n> 𝐴 = [1 1]\n>     [0 1]\n>\n> 𝐴 only has 1 eigenvector\n> ```"
    ]
  ]
}
```
# Eigen Decomposition - Computation
- compute the [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues (𝜆𝑠)]] of matrix 𝐴 (i.e. 0 = 𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼) = 𝑐ℎ𝑎𝑟𝑎𝑐𝑡𝑒𝑟𝑖𝑠𝑡𝑖𝑐-𝑝𝑜𝑙𝑦𝑛𝑜𝑚𝑖𝑎𝑙<sub>𝐴</sub>(𝜆))
- compute the [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvectors (𝑣𝑠)]] of matrix 𝐴 (i.e. solve (𝐴 - 𝜆𝐼)𝑣 = 0 for each eigenvalue 𝜆)
- assemble the eigenvectors as column vectors of matrix 𝑃
- assemble the eigenvalues as a diagonal of matrix 𝐷
- thus 𝐴 is diagonalized to 𝑃𝐷𝑃 <sup>-1</sup>

a property of eigenvalues is that multiplying a 𝑛✕𝑛 matrix 𝐴 by its [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvector 𝑣𝑖]] is the same as multiplying that eigenvector by its [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalue 𝜆𝑖]]. In both cases it scales the eigenvector:

> [!indent]
> 𝐴𝑣 = 𝜆𝑣

now combine all 𝑛 eigenvectors and eigenvalues of 𝐴 into a single equation:

> [!indent]
> ![[Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix/diagonalization.png|301]]
> 𝐴𝑃 = 𝑃𝐷
> 𝐴𝑃𝑃 <sup>-1</sup> = 𝑃𝐷𝑃 <sup>-1</sup>
> 𝐴𝐼 = 𝑃𝐷𝑃 <sup>-1</sup>
> 𝐴 = 𝑃𝐷𝑃 <sup>-1</sup>

# Eigen Decomposition - [[Change of Basis Matrix - Transition Matrix|Change of Basis]] Understanding

Transformations 𝐷 and 𝐴 are the same but expressed in different [[Basis Vectors|basis vectors]]:
- 𝐴 is expressed as the standard basis
- 𝐷 is expressed as the eigenbasis (i.e. the eigenvectors of 𝐴)

𝑃<sup>-1</sup>𝐴𝑃 = 𝐷
- 𝑃 is a [[Change of Basis Matrix - Transition Matrix|change of basis matrix]] that does a transformation from the eigenbasis to the standard basis
- 𝐴 does the transformation expressed in the standard basis
- 𝑃<sup>-1</sup> is a [[Change of Basis Matrix - Transition Matrix|change of basis matrix]] that does a transformation from the standard basis to the eigenbasis

𝐴 = 𝑃𝐷𝑃<sup>-1</sup>
- 𝑃<sup>-1</sup> is a change of basis matrix that does a transformation from the standard basis to the eigenbasis
- 𝐷 does the transformation expressed in the eigenbasis
- 𝑃 is a change of basis matrix that does a transformation from the eigenbasis to the standard basis

# Eigen Decomposition - Orthogonally Diagonalizable
- if matrix 𝐴 is [[Symmetric Matrix|symmetric]]/[[Positive／Negative Definite／Semi-Definite Indefinite Matrix|positive semi-definite]], then:
	- 𝐴 is [[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|orthogonally diagonalizable]].
	- the normalized eigenvectors of 𝐴 are mutually [[Orthogonal／Orthonormal Matrix|orthonormal]], thus: 𝑃 <sup>𝑇</sup>𝑃 = 𝑃𝑃 <sup>𝑇</sup>= 𝐼
- thus: 𝑃 <sup>-1</sup>= 𝑃 <sup>𝑇</sup>
- thus: 𝐴 = 𝑃𝐷𝑃 <sup>-1</sup><sup></sup>becomes 𝐴 = 𝑃𝐷𝑃 <sup>𝑇</sup>

see [[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|Orthogonal Eigen/Spectral Decomposition/Factorization - Diagonalization/Diagonalizing/Diagonalize - Orthogonally Diagonalizable/Non-Defective Matrix]]
# Eigen Decomposition - Uniqueness

If a matrix is diagonalized, its diagonal form is unique, up to a permutation of the diagonal entries. This is because the entries on the diagonal must be all the eigenvalues. For instance

> [!indent]
> ![[Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix/diagonalizing-a-matrix-uniqueness.png|301]]

are examples of 2 different ways to diagonalize the same matrix
# Eigen Decomposition - Ease of Other Computations

Diagonalizable matrices and maps are especially easy for computations, once their eigenvalues and eigenvectors are known
- 𝑘<sup>𝑡ℎ</sup> power of 𝐴 - one can raise a diagonal matrix 𝐷 to the 𝑘<sup>𝑡ℎ</sup> power by simply raising the diagonal entries to that power, then compute 𝑃𝐷<sup>𝑘</sup>𝑃<sup>-1</sup>
	- 𝐴<sup>𝑘</sup> = 𝑃𝐷<sup>𝑘</sup>𝑃<sup>-1</sup>
- [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]] of 𝐴 - same as determinant of a diagonal matrix 𝐷 which is simply the product of all diagonal entries
- given a diagonalizable matrix 𝐴 and a vector 𝑥̅, we could solve: 𝐴<sup>𝑘</sup>𝑥̅, by:
	- decomposing the vector 𝑥̅ as a linear combination of eigenvectors of 𝐴:
		- 𝑥̅ = 𝑐<sub>1</sub>𝑣̅<sub>1</sub> + ... + 𝑐<sub>𝑛</sub>𝑣̅<sub>𝑛</sub>
	- 𝐴<sup>𝑘</sup>𝑥̅ = 𝑐<sub>1</sub>(𝜆<sub>1</sub>)<sup>𝑘</sup>𝑣̅<sub>1</sub> + ... + 𝑐<sub>1</sub>(𝜆<sub>𝑛</sub>)<sup>𝑘</sup>𝑣̅<sub>𝑛</sub>

# Eigen Decomposition - Resources
- [Gilbert Strang](https://www.youtube.com/watch?v=13r9QY6cmjc&list=PLE7DDD91010BC51F8&index=23)
- [3Blue1Brown](https://www.youtube.com/watch?v=PFDu9oVAE-g&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=14)
