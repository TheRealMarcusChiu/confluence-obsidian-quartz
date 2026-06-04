---
title: "Inverse Matrix Types (2-Sided Inverse - Left Inverse - Right Inverse - Moore-Penrose Pseudo-Inverse)"
created: 2021-09-13T05:25:56.247-05:00
modified: 2021-12-10T18:45:23.644-06:00
parent: "[[Matrix - Types]]"
children:
  - "[[Generalized Inverse Matrix - G-Inverse Matrix]]"
  - "[[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem]]"
---
# Inverse Matrix Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Inverse Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description (𝑚✕𝑛 matrix 𝐴)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Formula",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|2-Sided Inverse]]",
        "bg": "#F4F5F7"
      },
      "- 𝐴 is a square matrix (𝑚 = 𝑛)\n- a rectangular matrix cannot have a 2-sided inverse, because 𝐴's [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|null-space]] and/or [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|left-nullspace]] contains some non-zero vector",
      "- 𝐴<sup>-1</sup> = (1/𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴)) · 𝐶𝑜𝑓𝑎𝑐𝑡𝑜𝑟-𝑚𝑎𝑡𝑟𝑖𝑥(𝐴)<sup>𝑇</sup>"
    ],
    [
      {
        "content": "Left Inverse",
        "bg": "#F4F5F7"
      },
      "- 𝐴 full column rank (𝑟 = 𝑛)\n- 𝐴's null-space = {0}\n- 𝐴's columns are linearly independent\n- 0 or 1 solution to 𝐴𝑥 = 𝑏",
      "- 𝐴<sup>𝑇</sup>𝐴 = 𝑛✕𝑛 [[Symmetric Matrix|symmetric matrix]] and is invertible because columns of 𝐴 are linearly independent\n- 𝐴<sup>𝑙𝑒𝑓𝑡-𝑖𝑛𝑣𝑒𝑟𝑠𝑒</sup> = (𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>\n- 𝐴<sup>𝑙𝑒𝑓𝑡-𝑖𝑛𝑣𝑒𝑟𝑠𝑒</sup>𝐴 = (𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>𝐴 = 𝐼 ( 𝑛✕𝑛 [[Identity Matrix|identity matrix]])\n- 𝐴𝐴<sup>𝑙𝑒𝑓𝑡-𝑖𝑛𝑣𝑒𝑟𝑠𝑒</sup> = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>= projection onto [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column-space]] of 𝐴"
    ],
    [
      {
        "content": "Right Inverse",
        "bg": "#F4F5F7"
      },
      "- 𝐴 full row rank (𝑟 = 𝑚)\n- 𝐴<sup>𝑇</sup>'s null-space = {0}\n- 𝐴's null-space = have (𝑛 - 𝑟) free variables\n- 𝐴's rows are linearly independent\n- infinite solutions to 𝐴𝑥 = 𝑏",
      "- 𝐴𝐴<sup>𝑇</sup> = 𝑚✕𝑚 [[Symmetric Matrix|symmetric matrix]] and is invertible because rows of 𝐴 are linearly independent\n- 𝐴<sup>𝑟𝑖𝑔ℎ𝑡-𝑖𝑛𝑣𝑒𝑟𝑠𝑒</sup> = 𝐴<sup>𝑇</sup>(𝐴𝐴<sup>𝑇</sup>)<sup>-1</sup>\n- 𝐴𝐴<sup>𝑟𝑖𝑔ℎ𝑡-𝑖𝑛𝑣𝑒𝑟𝑠𝑒</sup> = 𝐴𝐴<sup>𝑇</sup>(𝐴𝐴<sup>𝑇</sup>)<sup>-1</sup> = 𝐼 ( 𝑚✕𝑚 [[Identity Matrix|identity matrix]])\n- 𝐴<sup>𝑟𝑖𝑔ℎ𝑡-𝑖𝑛𝑣𝑒𝑟𝑠𝑒</sup>𝐴 = 𝐴<sup>𝑇</sup>(𝐴𝐴<sup>𝑇</sup>)<sup>-1</sup>𝐴= projection onto [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|row-space]] of 𝐴"
    ],
    [
      {
        "content": "[[Moore-Penrose Pseudo-Inverse Matrix]]",
        "bg": "#F4F5F7"
      },
      "- 𝐴 does not have full rank (𝑟 \\< 𝑚 & 𝑟 \\< 𝑛)",
      "- start with [[Singular Value Decomposition／Factorization (SVD) - Reduced SVD|SVD]]: 𝐴 = 𝑈𝛴𝑉<sup>𝑇</sup>\n\t- 𝛴 is a 𝑚✕𝑛 matrix with 𝑟 entries in diagonal (each entry = 𝜎<sub>𝑖</sub>)\n\t- 𝛴<sup>+</sup> is a 𝑛✕𝑚 matrix with 𝑟 entries in diagonal (each entry = 1/𝜎<sub>𝑖</sub>)\n\t- 𝛴𝛴<sup>+</sup>is a 𝑚✕𝑚 matrix with 𝑟 1's in diagonal\n\t- 𝛴<sup>+</sup>𝛴 is a 𝑛✕𝑛 matrix with 𝑟 1's in diagonal\n- 𝐴<sup>+</sup>= 𝑉𝛴<sup>+</sup>𝑈<sup>𝑇</sup>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources

![](https://www.youtube.com/watch?v=Go2aLo7ZOlU&list=PLE7DDD91010BC51F8&index=35)
