---
title: "Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)"
created: 2021-09-13T05:24:53.432-05:00
modified: 2022-04-21T19:29:03.122-05:00
parent: "[[Computational Complexity Theory]]"
children:
  - "[[(Big O - Little o - Omega - Theta) Bounds Notation]]"
  - "[[Rule of Products]]"
  - "[[Rule of Sums]]"
  - "[[log(n!) = Θ(nlogn)]]"
---
an [[Problems & Algorithms|algorithm]] can be categorized by 2 variants of <strong>resource growth complexities</strong>:
- <strong>time complexity</strong> - how fast the algorithm runs in terms of input size
- <strong>space/memory complexity</strong> - how much space/memory the algorithm needs in terms of input size

# Growth Complexity Types (increasing order)

```merge-table
{
  "rows": [
    [
      {
        "content": "Growth (𝑛)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "1",
      "constant"
    ],
    [
      "<em>𝛼</em>(𝑛)",
      "inverse Ackermann"
    ],
    [
      "𝑙𝑜𝑔*(𝑛) ≈ 𝑠𝑙𝑜𝑔(𝑛)",
      "iterated/super logarithmic"
    ],
    [
      "𝑙𝑜𝑔(𝑙𝑜𝑔(𝑛))",
      "log-logarithmic"
    ],
    [
      "𝑙𝑜𝑔(𝑛)",
      "logarithmic"
    ],
    [
      "𝑙𝑜𝑔(𝑛)<sup>𝑘</sup> where 𝑘 > 1",
      "poly-logarithmic"
    ],
    [
      "<em>𝑛</em><sup>𝑘</sup> where 0 \\< 𝑘 \\< 1",
      "fractional power"
    ],
    [
      "𝑛",
      "linear"
    ],
    [
      "𝑛 𝑙𝑜𝑔\\*(𝑛)",
      "n log-star n"
    ],
    [
      "[[log(n!) = Θ(nlogn)|𝑛 𝑙𝑜𝑔(𝑛) ≈ 𝑙𝑜𝑔(𝑛!)]]",
      "linearithmic"
    ],
    [
      "𝑛 𝑙𝑜𝑔(𝑛)<sup>𝑘</sup>where 𝑘 \\> 1",
      "quasi-linear"
    ],
    [
      "𝑛<sup>𝑘</sup> where 𝑘 \\> 1\n\n𝑘<sup>𝑙𝑜𝑔(𝑛)</sup>where 𝑘 \\> 1",
      "polynomial\n- sub-polynomial = anything above\n- super-polynomial = anything below\n- quadratic = 𝑛<sup>2</sup>\n- cubic = 𝑛<sup>3</sup>"
    ],
    [
      "𝑘<sup>𝑙𝑜𝑔(𝑛)<sup>𝑐</sup></sup> where 𝑐 \\> 1 and 𝑘 \\> 1",
      "quasi-polynomial or pseudo-polynomial"
    ],
    [
      "𝑂(2<sup>𝑛<sup>𝑒</sup></sup>) for all 𝑒 \\> 0",
      "sub-exponential (1<sup>st</sup> definition)"
    ],
    [
      "2<sup><em>𝑜</em>(𝑛)</sup>",
      "sub-exponential (2<sup>nd</sup> definition)"
    ],
    [
      "𝑘<sup>𝑛</sup> where 𝑘 > 1",
      "exponential"
    ],
    [
      "𝑛!",
      "factorial"
    ],
    [
      "𝑛<sup>𝑛</sup>",
      "super exponential"
    ],
    [
      "𝑐<sup>(𝑘<sup>𝑝𝑜𝑙𝑦(𝑛)</sup>)</sup>",
      "double exponential time"
    ]
  ],
  "tableStyle": "width: 99.2447%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
