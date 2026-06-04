---
title: "CI - Formula For Unbiased Estimator With Normal Distribution"
created: 2021-09-13T05:29:18.408-05:00
modified: 2026-05-24T20:18:22.425-05:00
parent: "[[Confidence Interval (CI)]]"
children:
  - "[[Margin of Error (ME)]]"
---
````excerpt
# CI Definition

An interval \[𝐴, 𝐵\] is a (1 − 𝛼)100% confidence interval for the parameter 𝜃 if it contains the parameter with probability (1 − 𝛼):
- 𝐏{𝐴 ≤ 𝜃 ≤ 𝐵} = 1 − 𝛼

where:
- 𝛼 - [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]]
- (1 − 𝛼) - [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|confidence level or coverage probability]]

# CI Formula Intuition

> [!expand]- Click here to expand...
> Given a sample of data and a desired [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|confidence level (1 − 𝛼)]], how can we construct a confidence interval \[𝐴, 𝐵\] that will satisfy the coverage condition
> - 𝐏{𝐴 ≤ 𝜃 ≤ 𝐵} = 1 − 𝛼
>
> first we need to estimate 𝜃
>
> choose an unbiased estimator with [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] (e.g. [[Maximum Likelihood Estimation (MLE)|MLE]])
>
> use the estimator to take the sample data and estimate 𝜃 point estimate 𝜃ˆ
>
> next we [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standardize]] 𝜃ˆ to get a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] variable 𝑧:
> - 𝑧 = \[𝜃ˆ - 𝐄(𝜃ˆ)\] / 𝜎(𝜃ˆ)
>
> since 𝜃ˆ was estimated with an unbiased estimator: 𝐄(𝜃ˆ) = 𝜃
> - 𝑧 = (𝜃ˆ - 𝜃) / 𝜎(𝜃ˆ)
>
> this variable 𝑧 falls between the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] quantiles 𝑞<sub>𝛼/2</sub>and 𝑞<sub>1−𝛼/2</sub>, denoted by
> - -𝑧<sub>𝛼/2</sub>= 𝑞<sub>𝛼/2</sub>
> - 𝑧<sub>𝛼/</sub><sub>2</sub>= 𝑞<sub>1−𝛼/2</sub>
>
> with probability (1 - 𝛼), then:
> - 𝐏{-𝑧<sub>𝛼/2</sub> ≤ (𝜃ˆ - 𝜃) / 𝜎(𝜃ˆ) ≤ 𝑧<sub>𝛼/</sub><sub>2</sub>} = 1 - 𝛼
>
> now rearrange for 𝜃:
> - 𝐏{𝜃ˆ - 𝑧<sub>𝛼/2</sub>·𝜎(𝜃ˆ) ≤ 𝜃 ≤ 𝜃ˆ + 𝑧<sub>𝛼/</sub><sub>2</sub>·𝜎(𝜃ˆ)} = 1 - 𝛼
>
> we have obtained two numbers:
> - 𝐴 = 𝜃ˆ - 𝑧<sub>𝛼/</sub><sub>2</sub>·𝜎(𝜃ˆ)
> - 𝐵 = 𝜃ˆ + 𝑧<sub>𝛼/</sub><sub>2</sub>·𝜎(𝜃ˆ)
>
> such that
> - 𝐏{𝐴 ≤ 𝜃 ≤ 𝐵} = 1 − 𝛼
# CI Formulas

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
        "content": "𝑆𝐸(𝜃ˆ) Known",
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
      "𝜃ˆ ± <font style=\"color: rgb(255,0,0);\">𝑡</font><sub>𝛼/2</sub>·𝑆𝐸<font style=\"color: rgb(255,0,0);\">ˆ</font>(𝜃ˆ)"
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
      "𝜃ˆ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·𝑆𝐸(𝜃ˆ)"
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
      "𝜃ˆ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·𝑆𝐸<font style=\"color: rgb(255,0,0);\">ˆ</font>(𝜃ˆ)"
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
      "𝜃ˆ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·𝑆𝐸(𝜃ˆ)"
    ]
  ],
  "tableStyle": "width: 87.0499%;"
}
```

where:
- 𝜃ˆ - [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimate]]/[[Statistics - Terminology|statistic]] or center of the interval
- 𝑧 - [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-score]] a type of [[Confidence Multipliers - Critical Values|confidence multiplier]]
- 𝑡 - [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-score]] a type of [[Confidence Multipliers - Critical Values|confidence multiplier]]
- 𝑆𝐸(𝜃ˆ) or 𝜎(𝜃ˆ) or 𝑆𝑡𝑑(𝜃ˆ) - [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of the point estimator/statistic
- 𝑆𝐸<font style="color: rgb(255,0,0);">ˆ</font>(𝜃ˆ) or 𝑠(𝜃ˆ) or 𝑆𝑡𝑑ˆ(𝜃ˆ) - [[Standard Error (SE) - Estimated Standard Error (SEˆ)|estimated standard error]] of the point estimator/statistic

# CI Annotated

![[CI - Formula For Unbiased Estimator With Normal Distribution/confidence-interval-structure-general.png|301]]

# CI Diagram
![[CI - Formula For Unbiased Estimator With Normal Distribution/confidence-interval-structure-line.png|301]]
````
^excerpt
