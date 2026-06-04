---
title: "CI - 2 Independent Samples"
created: 2021-09-13T05:29:16.489-05:00
modified: 2021-09-13T05:29:16.489-05:00
parent: "[[CI - 2 Samples]]"
children:
  - "[[CI - 2 Independent Samples - Mean]]"
  - "[[CI - 2 Independent Samples - Variance & Standard Deviation]]"
  - "[[Satterthwaite's Approximation]]"
---
Is a subtype of [[CI - 2 Samples|CI with 2 Samples]]

2-sample problems - inference on parameters involving two populations
- Population 1: 𝑋 ∼ 𝑓<sub>𝑋</sub>(𝑥)
- Population 2: 𝑌 ∼ 𝑓<sub>𝑌</sub>(𝑦)

<strong>CI with 2 Independent Samples</strong> - both 𝑋 and 𝑌 samples come from 2 different subjects (i.e. independent observations)

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
      "𝑋<font style=\"color: rgb(51,153,102);\"><sub>𝑛</sub></font>",
      "𝑌<font style=\"color: rgb(255,0,0);\"><sub>𝑚</sub></font>"
    ]
  ]
}
```
### CI - General Formula

> [!expand]- Click here to expand...
> ![[CI - Formula For Unbiased Estimator With Normal Distribution#^excerpt]]
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
