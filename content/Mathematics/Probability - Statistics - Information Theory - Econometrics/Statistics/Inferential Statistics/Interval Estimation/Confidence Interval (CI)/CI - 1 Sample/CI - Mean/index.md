---
title: "CI - Mean"
created: 2021-09-13T05:29:14.325-05:00
modified: 2026-05-21T15:22:37.101-05:00
parent: "[[CI - 1 Sample]]"
children: []
---
# General Formula

> [!expand]- Click here to expand...
> ![[CI - Formula For Unbiased Estimator With Normal Distribution#^excerpt]]
# CI for Sample Mean - When is 𝜎 Known

> [!expand]- Click here to expand...
> the general formula states the confidence interval is:
> - 𝜃ˆ ± <font style="color: rgb(0,51,102);">𝑧\*</font>·𝑆𝐸(𝜃ˆ)
>
> computing CI for population mean, we substitute:
> - 𝜃ˆ = 𝑋̅
> - 𝑆𝐸(𝜃ˆ) = 𝜎/√𝑛
>
> therefore:
>
> ![[CI - Mean/confidence-interval-structure.png|301]]
>
> where:
> - 𝑋̅ is the [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimate]]/[[Statistics - Terminology|statistic]] (in this case, the [[Sample Mean|sample mean]] notation was used)
> - 𝑧\* is the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-score]] which is a type of [[Confidence Multipliers - Critical Values|confidence multiplier]] computed from the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distribution]]
> - 𝜎 is the true population [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]
> - 𝑛 is sample size
> - 𝜎/√𝑛 - is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of [[Sample Mean|sample mean]]
> - 𝑧\*·(𝜎/√𝑛) is called the [[Margin of Error (ME)|margin of error]]
>
> ![[CI - Mean/confidence-interval-structure-line.png|301]]
>
> The confidence interval is therefore centered at the estimate and its width is exactly (2 \* [[Margin of Error (ME)|margin of error]])
# CI for Sample Mean - When 𝜎 is Unknown & 𝑛 is Small

> [!expand]- Click here to expand...
> replace population standard deviation (𝜎) with [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]] (𝑠)
> - 𝑋̅ ± <font style="color: rgb(255,0,0);">𝑡\*</font>·(<font style="color: rgb(255,0,0);">𝑠</font>/√𝑛)
>
> where:
> - 𝑡\* - is the [[Confidence Multipliers - Critical Values|confidence multiplier]], [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-distribution]]
> - 𝑠 - is the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]]
> - 𝑠/√𝑛 - is the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|estimated standard error]] of [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimate]]
>
> The bad news is that once 𝜎 (sigma) has been replaced by 𝑠, we lose the [[Central Limit Theorem (CLT)]], together with the normality of 𝑋̅, and therefore the confidence multipliers 𝑧\* for the different levels of confidence (1.645, 1.96, 2.576) are (generally) not correct any more. The new multipliers come from a different distribution called the “[[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t distribution]]” and are therefore denoted by 𝑡\*
# CI for Sample Mean - When 𝜎 is Unknown & 𝑛 is Large

> [!expand]- Click here to expand...
> It turns out that for large values of 𝑛, the 𝑡\* multipliers are not that different from the 𝑧\* multipliers, and therefore using the interval formula
> - 𝑋̅ ± 𝑧\*·(𝑠/√𝑛)
>
> for 𝜇 (mu) when 𝜎 (sigma) is unknown provides a pretty good approximation
# CIs for Sample Mean

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
        "content": "𝜎 / 𝑆𝐸(𝑋̅) Known",
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
      "𝑋̅ ± <font style=\"color: rgb(255,0,0);\">𝑡</font><sub>𝛼/2,𝑛-1</sub>·(𝑠/√𝑛)"
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
      "𝑋̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝜎/√𝑛)"
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
      "𝑋̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝑠/√𝑛)"
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
      "𝑋̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝜎/√𝑛)"
    ]
  ],
  "tableStyle": "width: 742.143px;"
}
```
