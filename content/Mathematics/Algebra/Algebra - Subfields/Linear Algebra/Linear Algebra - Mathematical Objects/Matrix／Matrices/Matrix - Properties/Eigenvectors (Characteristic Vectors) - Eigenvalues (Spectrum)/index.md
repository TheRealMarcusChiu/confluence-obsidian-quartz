---
title: "Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)"
created: 2021-09-13T05:25:55.197-05:00
modified: 2026-05-21T14:57:57.066-05:00
parent: "[[Matrix - Properties]]"
children:
  - "[[A matrix and its transpose have the same characteristic polynomial and eigenvalues]]"
  - "[[Complex Eigenvalues - Complex Eigenvectors]]"
  - "[[Eigenvalues are the roots of the Characteristic Polynomial]]"
  - "[[Eigenvectors with Distinct Eigenvalues are Linearly Independent]]"
---
- <strong>eigenvector or characteristic vector (𝑥)</strong> of a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation (𝐴𝑥)]] is a nonzero vector 𝑥 that changes at most by a scalar factor (𝑖.𝑒. 𝐴𝑥=𝜆𝑥) when that linear transformation is applied to it
- <strong>eigenvalue (𝜆)</strong> is the factor by which the eigenvector is scaled
- <strong>spectrum ({𝜆<sub>1</sub>, ..., 𝜆<sub>𝑟</sub>})</strong> - the set of eigenvalues of a matrix 𝐴

# Eigenvalues & Eigenvectors of a Linear Transformation Matrix 𝐴

```merge-table
{
  "rows": [
    [
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Computations",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Given a linear transformation [[Square Matrix|square matrix]] 𝐴 find all of its eigenvectors and eigenvalues\n###### 1 - Solve for eigenvalues 𝜆<sub>𝑖</sub>:\n- 𝐴𝑣 = 𝜆𝑣\n- 𝐴𝑣 = 𝜆𝐼𝑣\n- 𝐴𝑣 - 𝜆𝐼𝑣 = 0\n- (𝐴 - 𝜆𝐼)𝑣 = 0\n- [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡]](𝐴 - 𝜆𝐼) = 0\n\t- <font style=\"color: rgb(128,128,128);\">𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼) - is the </font>[[Characteristic Polynomial]] <font style=\"color: rgb(128,128,128);\">of matrix 𝐴</font>\n\t- <font style=\"color: rgb(128,128,128);\">𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼) = 0 - is the Characteristic Equation</font>\n\n###### 2 - For each eigenvalue 𝜆<sub>𝑖</sub> solve for its corresponding eigenvector 𝑣<sub>𝑖</sub>:\n- (𝐴 - 𝜆<sub>𝑖</sub>𝐼)𝑣<sub>𝑖</sub> = 0 <font style=\"color: rgb(128,128,128);\">\\# we are finding the [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|null-space]] of (𝐴 - 𝜆<sub>𝑖</sub>𝐼)</font>",
      "![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvector-eigenvalue.png|301]]\n\n> [!expand]- Example 1\n> ###### 1 - Solve for eigenvalues 𝜆<sub>𝑖</sub>:\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvalue-computation2.png|301]]\n>\n> ###### 2 - Solve for eigenvectors 𝑣<sub>𝑖</sub>:\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvector-computation-2.png|301]]\n\n> [!expand]- Example 2\n> ###### 1 - Solve for eigenvalues 𝜆<sub>𝑖</sub>:\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvalue-computation.png|301]]\n>\n> ###### 2 - Solve for eigenvectors 𝑣<sub>𝑖</sub>:\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvector-computation.png|301]]\n\n> [!expand]- Example 3\n> ###### 1 - Solve for eigenvalues 𝜆<sub>𝑖</sub>:\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvalue-computation-0.png|301]]\n>\n> ###### 2 - Solve for eigenvectors 𝑣<sub>𝑖</sub>:\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvector-computation-0a.png]]\n>\n> > [!indent]\n> and\n>\n> > [!indent]\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/eigenvector-computation-0b.png]]"
    ]
  ],
  "tableStyle": "width: 68.3659%;"
}
```
# Eigenvalues & Eigenvectors - Complex Numbers

```merge-table
{
  "rows": [
    [
      "Every 𝑛×𝑛 matrix has exactly 𝑛 [[Complex Numbers System|complex]] eigenvalues, counted with multiplicity.\n> [!info]\n> Let 𝐴 be a matrix with real entries. If 𝜆 is a complex eigenvalue with eigenvector 𝑣, then 𝜆̅ is a complex eigenvalue with eigenvector 𝑣̅.\n>\n> In other words, both eigenvalues and eigenvectors come in [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|conjugate]] pairs",
      "> [!expand]- Example #1\n> 1 - Solve for eigenvalues 𝜆<sub>𝑖</sub>:\n>\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/complex-eigenvalue-computation-#1.png|301]]\n>\n> 2 - Solve for eigenvectors 𝑣<sub>𝑖</sub>:\n>\n> ![[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)/complex-eigenvector-computation-#1.png|200]]"
    ]
  ],
  "tableStyle": "width: 66.3408%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://brilliant.org/wiki/eigenvalues-and-eigenvectors/](https://brilliant.org/wiki/eigenvalues-and-eigenvectors/)

![](https://www.youtube.com/watch?v=PFDu9oVAE-g&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=15&t=0s)![](https://www.youtube.com/watch?v=i8FukKfMKCI)![](https://www.youtube.com/watch?v=cdZnhQjJu4I&list=PLE7DDD91010BC51F8&index=22)
