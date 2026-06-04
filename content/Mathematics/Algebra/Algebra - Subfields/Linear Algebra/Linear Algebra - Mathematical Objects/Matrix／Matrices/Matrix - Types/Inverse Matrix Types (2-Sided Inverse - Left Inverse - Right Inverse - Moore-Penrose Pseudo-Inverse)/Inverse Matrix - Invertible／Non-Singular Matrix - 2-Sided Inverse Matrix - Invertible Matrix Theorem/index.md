---
title: "Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem"
created: 2021-09-13T05:26:01.396-05:00
modified: 2024-01-11T19:51:26.569-06:00
parent: "[[Inverse Matrix Types (2-Sided Inverse - Left Inverse - Right Inverse - Moore-Penrose Pseudo-Inverse)]]"
children:
  - "[[If AB = I, then BA = I]]"
---
A [[Square Matrix|square matrix]] 𝐴 is <strong>invertible/non-singular</strong> if there exists a square matrix 𝐴<sup><font style="color: rgb(0,51,102);">-1</font></sup> such that:
- 𝐴𝐴<sup><font style="color: rgb(0,51,102);">-1</font></sup> = 𝐴<sup><font style="color: rgb(0,51,102);">-1</font></sup>𝐴 = 𝐼

If the equation above is satisfied then:
- 𝐴<sup><font style="color: rgb(0,51,102);">-1</font></sup> is the <strong>inverse matrix</strong> of 𝐴
- 𝐴 is the <strong>inverse matrix</strong> of 𝐴<sup><font style="color: rgb(0,51,102);">-1</font></sup>

# Inverse Matrix - Finding It

The inverse of 𝐴 is defined as:
- 𝐴<sup>-1</sup> = (1/𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴)) · 𝐶𝑜𝑓𝑎𝑐𝑡𝑜𝑟-𝑚𝑎𝑡𝑟𝑖𝑥(𝐴)<sup>𝑇</sup>

# Inverse Matrix - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Inverse Matrix - Invertible Matrix Theorem

Let 𝐴 be an 𝑛✕𝑛 square matrix, and let 𝑇:ℝ<sup>𝑛</sup>→ℝ<sup>𝑛</sup> be the matrix transformation 𝑇(𝑥)=𝐴𝑥. The following statements are equivalent:
- 𝐴 is invertible
- 𝐴 has 𝑛 pivots
- 𝐴 has a non-zero [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]]
- 𝐴 does not contains an eigenvalue equal to 0
- 𝐴 has full [[Matrix Rank|matrix rank]] = 𝑛 (i.e. 𝑛 = [[Matrix Rank|column rank]] = [[Matrix Rank|row rank]])
- 𝑁𝑢𝑙(𝐴) = {0}
- 𝐶𝑜𝑙(𝐴) = ℝ<sup>𝑛</sup>
- 𝐴's columns are linearly independent
- 𝐴's columns form a basis for ℝ<sup>𝑛</sup>
- 𝐴's columns span ℝ<sup>𝑛</sup>
- 𝐴𝑥=0 has no solutions other than the trivial one (i.e. 𝑥=0)
- 𝐴𝑥=𝑏 has a unique solution for each 𝑏 in ℝ<sup>𝑛</sup>
- 𝑇 is invertible
- 𝑇 is [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|one-to-one]]
