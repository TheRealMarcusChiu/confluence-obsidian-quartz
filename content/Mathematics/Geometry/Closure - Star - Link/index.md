---
title: "Closure - Star - Link"
created: 2021-09-13T05:25:15.873-05:00
modified: 2021-09-13T05:25:15.873-05:00
parent: "[[Geometry]]"
children: []
---
Let 𝐾 be a [[Simplicial Complex|simplicial complex]] and let <em>𝑆</em> be a collection of [[Simplex - Simplices|simplices]] in <em>𝐾</em>
- <strong>closure</strong> of 𝑆 (denoted 𝐶𝑙( 𝑆)) is the smallest simplicial subcomplex of 𝐾 that contains each simplex in 𝑆. 𝐶𝑙(𝑆) is obtained by repeatedly adding to 𝑆 each face of every simplex in 𝑆
- <strong>star</strong> of 𝑆 (denoted 𝑆𝑡(𝑆)) is the union of the stars of each simplex in 𝑆. For a single simplex 𝑠, the star of 𝑠 is the set of simplices having 𝑠 as a face. (Note that the star of 𝑆 is generally not a simplicial complex itself)
- <strong>link</strong> of S (denoted 𝐿𝑘(𝑆)) equals 𝐶𝑙(𝑆𝑡( 𝑆)) − 𝑆𝑡( 𝐶𝑙( 𝑆)). It is the closed star of 𝑆 minus the stars of all faces of 𝑆
```merge-table
{
  "rows": [
    [
      {
        "content": "two <font style=\"color: rgb(255,204,51);\">simplices</font> and their <font style=\"color: rgb(0,153,51);\"><strong>closure</strong></font>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "a <font style=\"color: rgb(255,204,51);\">vertex</font> and its <font style=\"color: rgb(0,153,51);\"><strong>star</strong></font>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "a <font style=\"color: rgb(255,204,51);\">vertex</font> and its <font style=\"color: rgb(0,153,51);\"><strong>link</strong></font>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Closure - Star - Link/simplicial_complex_closure.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Closure - Star - Link/simplicial_complex_star.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Closure - Star - Link/simplicial_complex_link.png|301]]",
        "align": "center"
      }
    ]
  ]
}
```
