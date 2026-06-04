---
title: "LU Decomposition／Factorization (Partial／Full Pivoting - LUP)"
created: 2021-09-13T05:25:50.219-05:00
modified: 2021-09-13T05:25:50.219-05:00
parent: "[[Matrix - Decompositions／Factorizations]]"
children: []
---
given matrix 𝐴 and vector 𝑦, find unknown vector 𝑥

> [!indent]
> 𝐴𝑥 = 𝑦

One way to do this is to compute 𝐴⁻¹

However, 𝐴⁻¹ may suffer rounding errors while <strong>𝐿𝑈 Decomposition</strong> does not

> [!indent]
> 𝐴 = 𝐿𝑈
> 𝐴𝑥 = 𝐿𝑈𝑦

where:
- 𝐿 is lower triangle matrix
- 𝑈 is upper triangle matrix

### LU Decomposition - Example

> [!expand]- Click here to expand...
> find 𝐿𝑈 decomposition of
>
> > [!indent]
> ![[LU Decomposition／Factorization (Partial／Full Pivoting - LUP)/lu-decomposition-1.png|600]]
>
> compute 𝑈 by row echelon reduction
>
> > [!indent]
> ![[LU Decomposition／Factorization (Partial／Full Pivoting - LUP)/lu-decomposition-2.png|600]]
>
> compute L from the highlighted columns
>
> > [!indent]
> ![[LU Decomposition／Factorization (Partial／Full Pivoting - LUP)/lu-decomposition-3.png|600]]
>
> Thus,
>
> > [!indent]
> ![[LU Decomposition／Factorization (Partial／Full Pivoting - LUP)/lu-decomposition-4.png|600]]
### LU Decomposition - Other Types

```merge-table
{
  "rows": [
    [
      {
        "content": "LU Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<strong>LU Decomposition With Partial Pivoting (LUP)</strong>",
      "LU factorization with row permutations only",
      "> [!indent]\n> 𝑃𝐴 = 𝐿𝑈\n\nwhere:\n- 𝐿 is lower triangle matrix\n- 𝑈 is upper triangle matrix\n- 𝑃 is [[Axis Permutation Matrix|permutation matrix]] that reorders the rows of matrix 𝐴"
    ],
    [
      "<strong>LU Decomposition With Full Pivoting</strong>",
      "LU factorization with both row & col permutations",
      "> [!indent]\n> 𝑃𝐴𝑄 = 𝐿𝑈\n\nwhere:\n- 𝐿 is lower triangle matrix\n- 𝑈 is upper triangle matrix\n- 𝑃 is [[Axis Permutation Matrix|permutation matrix]] that reorders the rows of matrix 𝐴\n- 𝑄 is [[Axis Permutation Matrix|permutation matrix]] that reorders the columns of matrix 𝐴"
    ],
    [
      "<strong>LDU Decomposition</strong>",
      "",
      ""
    ]
  ]
}
```
