---
title: "Orthogonal／Orthonormal Matrix"
created: 2021-09-13T05:25:58.827-05:00
modified: 2023-06-22T20:30:02.381-05:00
parent: "[[Unitary Matrix - Orthogonal／Orthonormal Matrix]]"
children:
  - "[[Axis Permutation Matrix]]"
  - "[[Identity Matrix]]"
  - "[[Orthonormal Matrix - Gram-Schmidt Process]]"
  - "[[Rotational Matrix]]"
---
<font style="color: rgb(255,0,0);">NOTE: by convention, an <strong>orthogonal matrix</strong> is a <strong>square orthonormal matrix</strong></font>

a <strong>column orthonormal matrix</strong> 𝑄 is a 𝑛✕𝑚 matrix whose <strong>columns</strong> are orthonormal vectors (i.e. orthogonal unit vectors)
- 𝑄<sup>𝑇</sup>𝑄 = 𝐼 <font style="color: rgb(128,128,128);">\# 𝑚✕𝑚 </font>[[Identity Matrix]]

a <strong>row orthonormal matrix</strong> 𝑄 is a 𝑛✕𝑚 matrix whose <strong>rows</strong> are orthonormal vectors
- 𝑄𝑄<sup>𝑇</sup> = 𝐼 <font style="color: rgb(128,128,128);">\# 𝑛✕𝑛 Identity Matrix</font>

a <strong>square orthonormal matrix</strong> 𝑄 is a 𝑛✕𝑛 matrix whose <strong>columns and rows</strong> are orthonormalvectors
- 𝑄<sup>𝑇</sup>𝑄 = 𝑄𝑄<sup>𝑇</sup> = 𝐼

# Square Orthonormal Matrix - Encodes Transformation

see: [[Orthogonal／Orthonormal／Unitary (Transformations／Operations／Operators／Mappings／Maps／Functions)|Orthogonal/Orthonormal/Unitary (Transformations/Operations/Operators/Mappings/Maps/Functions)]]
# Square Orthonormal Matrix - Orthonormalize a Matrix

Suppose the linearly independent basis/columns of matrix 𝑄 are not orthonormal, how do we turn it into an orthonormal matrix?
- [[Orthonormal Matrix - Gram-Schmidt Process]]

# Square Orthonormal Matrix - Properties

If 𝑄 is a square orthonormal matrix:
- [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|invertible]] (with its [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|transpose (𝑄𝑇)]] is equal to its [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|inverse (𝑄-1)]]: 𝑄<sup>-1</sup>= 𝑄<sup>𝑇</sup>)
- [[Unitary Matrix|unitary]] (𝑄<sup>-1</sup>= 𝑄\*) where 𝑄\* is the [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|conjugate transpose]] of 𝑄
- normal (𝑄\*𝑄 = 𝑄𝑄\*) over the real numbers
- [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]](𝑄) is either 1 or -1
- as [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] 𝑄 preserves the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|inner product]] of vectors (i.e. [[Orthogonal／Orthonormal／Unitary (Transformations／Operations／Operators／Mappings／Maps／Functions)|orthogonal/orthonormal/unitary transformation]]) and therefore acts as an isometry of [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]], such as a rotation, reflection or rotoreflection
- preserves [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]] (i.e. 𝑣̅·𝑤̅ = 𝑄𝑣̅·𝑄𝑤̅)

# Square Orthonormal Matrix - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "###### [[Identity Matrix|identity matrices]]",
        "bg": "#F4F5F7"
      },
      "![[Orthogonal／Orthonormal Matrix/orthogonal-matrices-examples-1.png|500]]"
    ],
    [
      {
        "content": "###### [[Rotational Matrix|rotational matrices]]",
        "bg": "#F4F5F7"
      },
      "![[Orthogonal／Orthonormal Matrix/orthogonal-matrices-examples-2.png|500]]"
    ],
    [
      {
        "content": "###### reflectional matrices",
        "bg": "#F4F5F7"
      },
      "![[Orthogonal／Orthonormal Matrix/orthogonal-matrices-examples-3.png|500]]"
    ],
    [
      {
        "content": "###### rotoreflection matrices",
        "bg": "#F4F5F7"
      },
      "![[Orthogonal／Orthonormal Matrix/orthogonal-matrices-examples-4.png|500]]"
    ],
    [
      {
        "content": "###### [[Axis Permutation Matrix|axis-permutation matrices]]",
        "bg": "#F4F5F7"
      },
      "![[Orthogonal／Orthonormal Matrix/orthogonal-matrices-examples-5.png|500]]"
    ]
  ]
}
```
# Resources

![](https://www.youtube.com/watch?v=0MtwqhIwdrI)
