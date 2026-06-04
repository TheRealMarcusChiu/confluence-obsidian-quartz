---
title: "F-Test"
created: 2021-09-13T05:29:10.743-05:00
modified: 2021-09-13T05:29:10.743-05:00
parent: "[[Statistical Hypothesis Test - Types]]"
children: []
---
### F-Tests - Ratio of Population Variances

```merge-table
{
  "rows": [
    [
      {
        "content": "𝐻<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐻<sub>𝑎</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "test (𝑓) statistic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Rejection Region",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "p-value (use [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-distribution]] with 𝑛-1,𝑚-1)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[(𝑠<sub>𝑋</sub>)<sup>2</sup>/(𝑠<sub>𝑌</sub>)<sup>2</sup>] = 𝜃<sub>0</sub>",
        "rowspan": 3
      },
      "[(𝑠<sub>𝑋</sub>)<sup>2</sup>/(𝑠<sub>𝑌</sub>)<sup>2</sup>] > 𝜃<sub>0</sub>",
      {
        "content": "𝑓<sub>𝑜𝑏𝑠</sub> = [(𝑠<sub>𝑋</sub>)<sup>2</sup>/(𝑠<sub>𝑌</sub>)<sup>2</sup>] / 𝜃<sub>0</sub>",
        "rowspan": 3
      },
      "𝑓<sub>𝑜𝑏𝑠</sub>≥ 𝐹<sub>𝛼</sub>(𝑛-1,𝑚-1)",
      "𝐏(𝑓 ≥ 𝑓<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)"
    ],
    [
      "[(𝑠<sub>𝑋</sub>)<sup>2</sup>/(𝑠<sub>𝑌</sub>)<sup>2</sup>] < 𝜃<sub>0</sub>",
      "𝑓<sub>𝑜𝑏𝑠</sub>≤ 𝐹<sub>𝛼</sub>(𝑛-1,𝑚-1)",
      "𝐏(𝑓 ≤ 𝑓<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)"
    ],
    [
      "[(𝑠<sub>𝑋</sub>)<sup>2</sup>/(𝑠<sub>𝑌</sub>)<sup>2</sup>] ≠ 𝜃<sub>0</sub>",
      "𝑓<sub>𝑜𝑏𝑠</sub>≥ 𝐹<sub>𝛼/2</sub>(𝑛-1,𝑚-1)\n\n𝑜𝑟\n\n𝑓<sub>𝑜𝑏𝑠</sub>\\< 1/𝐹<sub>𝛼/2</sub>(𝑛-1,𝑚-1)",
      "2 * 𝑚𝑖𝑛(𝐏(𝑓 ≥ 𝑓<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>), 𝐏(𝑓 ≤ 𝑓<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>))"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
