---
title: "CI - Proportion"
created: 2021-09-13T05:29:14.796-05:00
modified: 2026-05-21T15:16:49.002-05:00
parent: "[[CI - 1 Sample]]"
children: []
---
# General Formula

> [!expand]- Click here to expand...
> ![[CI - Formula For Unbiased Estimator With Normal Distribution#^excerpt]]
# CI For Sample Proportion

> [!expand]- Click here to expand...
> the general formula states the confidence interval is:
> - 𝜃ˆ ± <font style="color: rgb(0,51,102);">𝑧\*</font>·𝑆𝐸(𝜃ˆ)
>
> computing CI for [[Proportion|population proportion]], we substitute:
> - 𝜃ˆ = 𝑝̂
> - 𝑆𝐸(𝜃ˆ) = √(<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font>/𝑛)
>
> therefore:
> - 𝑝̂ ± 𝑧\*·√(<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font>/𝑛)
>
> where:
> - 𝑝̂ - is the [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimate]]/[[Statistics - Terminology|statistic]]: [[Sample Proportion|sample proportion]]
> - √(<font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">𝑝</font><font style="color: rgb(0,0,0);">(1−𝑝)</font></font>/𝑛) - is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of [[Sample Proportion|sample proportion]]
# CIs For Sample Proportion

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
        "content": "𝑝 / 𝑆𝐸(𝑝̂) Known",
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
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff",
        "align": "center"
      },
      "[[Bootstrap／Bootstrapping (Statistics)|Bootstrap Method]]"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "𝑝̂ ± <font style=\"color: rgb(255,0,0);\">𝑡</font><sub>𝛼/2,𝑛-1</sub>·√(𝑝̂<font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(0,0,0);\">(1−<font style=\"color: rgb(34,34,34);\">𝑝̂</font>)</font></font>/𝑛)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "𝑝̂ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·√(<font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(0,0,0);\">𝑝</font><font style=\"color: rgb(0,0,0);\">(1−𝑝)</font></font>/𝑛)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "𝑝̂ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·√(𝑝̂<font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(0,0,0);\">(1−<font style=\"color: rgb(34,34,34);\">𝑝̂</font>)</font></font>/𝑛)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "𝑝̂ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·√(<font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(0,0,0);\">𝑝</font><font style=\"color: rgb(0,0,0);\">(1−𝑝)</font></font>/𝑛)"
    ]
  ],
  "tableStyle": "width: 742.143px;"
}
```
