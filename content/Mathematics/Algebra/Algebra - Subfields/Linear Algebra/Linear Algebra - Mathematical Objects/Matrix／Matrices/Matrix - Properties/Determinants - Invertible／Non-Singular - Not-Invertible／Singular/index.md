---
title: "Determinants - Invertible／Non-Singular - Not-Invertible／Singular"
created: 2021-09-13T05:25:53.986-05:00
modified: 2023-12-15T14:53:37.592-06:00
parent: "[[Matrix - Properties]]"
children:
  - "[[Determinant - Applications (Cramer's Rule, Inverse Matrix, and Volume)]]"
  - "[[Determinant - Formulas & Cofactors]]"
---
###### Determinants
````excerpt
- is the scaling factor that a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]]/[[Matrix／Matrices|matrix]] has on volume
- if the <strong>determinant</strong> of a [[Square Matrix|square matrix]] 𝐴 is:
	- non-zero - then the matrix is <strong>invertible</strong>/<strong>non-singular</strong> <font style="color: rgb(122,134,154);">(thus, there exists an</font> [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|inverse matrix]]<font style="color: rgb(122,134,154);"> 𝐴<sup>-1</sup> such that 𝐴𝐴<sup>-1</sup>=𝐼)</font>
	- zero - then the matrix is <strong>not-invertible</strong>/<strong>singular</strong>
- non-square matrices do not have determinants
````
^excerpt

# Determinant - Introduction

![](https://www.youtube.com/watch?v=Ip3X9LOh2dk&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=6)
# Determinant - Properties

```merge-table
{
  "rows": [
    [
      "![](https://www.youtube.com/watch?v=srxexLishgY&list=PLE7DDD91010BC51F8&index=19)",
      "- 𝐷𝑒𝑡(𝐴) = 𝐷𝑒𝑡(𝐴<sup>𝑇</sup>)\n- 𝐷𝑒𝑡(𝐴𝐵) = 𝐷𝑒𝑡(𝐴)𝐷𝑒𝑡(𝐵)\n- 𝐷𝑒𝑡(𝐴<sup>𝑛</sup>) = 𝐷𝑒𝑡(𝐴)<sup>𝑛</sup>\n- 𝐷𝑒𝑡(𝐴<sup>-1</sup>) = 1/𝐷𝑒𝑡(𝐴)\n- The determinant of an upper or lower triangular matrix is the product of the diagonal entries"
    ]
  ]
}
```
# Determinant - Volume

Let 𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑛</sub> be vectors in ℝ<sup>𝑛</sup>, let 𝑃 be the parallelepiped determined by these vectors, and let 𝐴 be the matrix with rows or columns 𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑛</sub>. Then the absolute value of the determinant of 𝐴 is the volume of 𝑃:
- |𝐷𝑒𝑡(𝐴)| = volume of 𝑃

For proof expand below

> [!expand]- proof
> TODO: text-ify the image below
>
> ![[Determinants - Invertible／Non-Singular - Not-Invertible／Singular/proove-determinent-volume.png|600]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
