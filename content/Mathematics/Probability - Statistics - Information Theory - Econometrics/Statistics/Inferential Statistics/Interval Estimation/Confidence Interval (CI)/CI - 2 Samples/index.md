---
title: "CI - 2 Samples"
created: 2021-09-13T05:29:16.219-05:00
modified: 2021-09-13T05:29:16.219-05:00
parent: "[[Confidence Interval (CI)]]"
children:
  - "[[CI - 2 Independent Samples]]"
  - "[[CI - Paired Samples]]"
---
2-sample problems - inference on parameters involving two populations
- Population 1: 𝑋 ∼ 𝑓<sub>𝑋</sub>(𝑥)
- Population 2: 𝑌 ∼ 𝑓<sub>𝑌</sub>(𝑦)

### CI - Independent or Paired Samples
- [[CI - 2 Independent Samples|CI with 2 Independent Samples]] - nor 1-to-1 related
- [[CI - Paired Samples|CI with Paired Samples]] - 1-to-1 related

###### 2 Independent Samples

sample size of 𝑋 and 𝑌 may be different

```merge-table
{
  "rows": [
    [
      {
        "content": "𝑋",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑌",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝑋<sub>1</sub>",
      "𝑌<sub>1</sub>"
    ],
    [
      "𝑋<sub>2</sub>",
      "𝑌<sub>2</sub>"
    ],
    [
      "...",
      "..."
    ],
    [
      "𝑋<font style=\"color: rgb(51,153,102);\"><sub>n</sub></font>",
      "𝑌<font style=\"color: rgb(255,0,0);\"><sub>m</sub></font>"
    ]
  ]
}
```
###### Paired Samples

sample size of 𝑋 and 𝑌 are the SAME

```merge-table
{
  "rows": [
    [
      {
        "content": "Subject #",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "(𝑋, 𝑌)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐷 = 𝑋 - 𝑌",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "1",
      "(𝑋<sub>1</sub>, 𝑌<sub>1</sub>)",
      "𝐷<sub>1</sub> = 𝑋<sub>1</sub> - 𝑌<sub>1</sub>"
    ],
    [
      "2",
      "(𝑋<sub>2</sub>, 𝑌<sub>2</sub>)",
      "𝐷<sub>2</sub> = 𝑋<sub>2</sub> - 𝑌<sub>2</sub>"
    ],
    [
      "...",
      "...",
      "..."
    ],
    [
      "n",
      "(𝑋<sub>n</sub>, 𝑌<sub>n</sub>)",
      "𝐷<sub>n</sub> = 𝑋<sub>n</sub> - 𝑌<sub>n</sub>"
    ]
  ]
}
```
