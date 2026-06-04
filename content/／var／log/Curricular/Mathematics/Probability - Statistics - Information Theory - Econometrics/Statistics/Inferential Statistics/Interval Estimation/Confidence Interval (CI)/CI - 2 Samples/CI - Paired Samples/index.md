---
title: "CI - Paired Samples"
created: 2021-09-13T05:29:18.147-05:00
modified: 2021-09-13T05:29:18.147-05:00
parent: "[[CI - 2 Samples]]"
children: []
---
is a subtype of [[CI - 2 Samples|CI with 2 Samples]]

2-sample problems - inference on parameters involving two populations
- Population 1: 𝑋 ∼ f<sub>𝑋</sub>(𝑥), 𝐄(𝑋) = 𝜇<sub>𝑋</sub>
- Population 2: 𝑌 ∼ f<sub>𝑌</sub>(𝑦), 𝐄(𝑌) = 𝜇<sub>𝑌</sub>

<strong>CI with Paired Samples</strong> - both 𝑋 and 𝑌 samples come from SAME subject

sample size of 𝑋 and 𝑌 are the SAME

```merge-table
{
  "rows": [
    [
      {
        "content": "Subject \\#",
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
      "𝐷<sub>1</sub> = 𝑋<sub>1</sub> - 𝑌<sub>1</sub>"
    ],
    [
      "2",
      "(𝑋<sub>2</sub>, 𝑌<sub>2</sub>)",
      "𝐷<sub>2</sub> = 𝑋<sub>2</sub> - 𝑌<sub>2</sub>"
    ],
    [
      "...",
      "...",
      "..."
    ],
    [
      "n",
      "(𝑋<sub>n</sub>, 𝑌<sub>n</sub>)",
      "𝐷<sub>n</sub> = 𝑋<sub>n</sub> - 𝑌<sub>n</sub>"
    ]
  ]
}
```
### CI - General Formula

> [!expand]- Click here to expand...
> ![[CI - Formula For Unbiased Estimator With Normal Distribution#^excerpt]]
### CI - Formula

100(1 - 𝛼)% CI for 𝜇<sub>𝐷</sub>assuming {𝐷<sub>1</sub>, 𝐷<sub>2</sub>, ..., 𝐷<sub>n</sub>} are normal(𝜇<sub>𝐷</sub>, 𝜎<sub>𝐷</sub><sup>2</sup>) distributed

from the sample difference {𝐷<sub>1</sub>, 𝐷<sub>2</sub>, ..., 𝐷<sub>n</sub>} we can compute 𝐷̅ and 𝑠<sub>𝐷</sub><sup>2</sup>

CI when 𝜎 is KNOWN
- 𝐷̅ ± 𝑧\*·(𝜎<sub>𝐷</sub>/√𝑛)

CI when 𝜎 is UNKNOWN
- 𝐷̅ ± 𝑡\*·(𝑠<sub>𝐷</sub>/√𝑛)

where:
- 𝐷̅ is the [[Sample Mean|sample mean]] of differences (𝑋̅ - 𝑌̅)
- 𝑧\* is the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z distribution]]
- 𝑡\* is the [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t distribution]]
- 𝜎<sub>𝐷</sub>is the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|population standard deviation]]
- 𝑠 is the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]
- 𝑛 is size of sample
- (𝜎<sub>𝐷</sub>/√𝑛) is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of 𝐷̅
- (𝑠<sub>𝐷</sub>/√𝑛) is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|estimated standard error]] of 𝐷̅

###### approximate 100(1 - 𝛼)% CI for 𝜇<sub>𝐷</sub>if 𝑛 is large
- <font style="color: rgb(0,128,0);">𝐷̅ ± 𝑧\*·(𝜎<sub>𝐷</sub>/√𝑛)</font> <font style="color: rgb(255,0,0);"><strong>\~</strong></font> <font style="color: rgb(128,0,0);"><font style="color: rgb(0,128,0);">𝐷̅ ± 𝑡\*·(𝑠<sub>𝐷</sub>/√𝑛)</font> <font style="color: rgb(51,51,51);"><font style="color: rgb(255,0,0);"><strong>\~</strong></font> <font style="color: rgb(0,128,0);">𝐷̅ ± 𝑧\*·(𝑠<sub>𝐷</sub>/√𝑛)</font></font></font>

### CIs for Sample Mean

```merge-table
{
  "rows": [
    [
      {
        "content": "Large Sample Size (𝑛)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Normal Population",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝜎 / 𝑆𝐸(𝑋̅) Known",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Confidence Interval",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue",
        "align": "center"
      },
      "[[Bootstrap／Bootstrapping (Statistics)|Bootstrap Method]]"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red",
        "align": "center"
      },
      "𝐷̅ ± <font style=\"color: rgb(255,0,0);\">𝑡</font><sub>𝛼/2,𝑛-1</sub>·(𝑠<sub>𝐷</sub>/√𝑛)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green",
        "align": "center"
      },
      "𝐷̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝜎<sub>𝐷</sub>/√𝑛)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red",
        "align": "center"
      },
      "𝐷̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝑠<sub>𝐷</sub>/√𝑛)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green",
        "align": "center"
      },
      "𝐷̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝜎<sub>𝐷</sub>/√𝑛)"
    ]
  ],
  "tableStyle": "width: 742.143px;"
}
```
