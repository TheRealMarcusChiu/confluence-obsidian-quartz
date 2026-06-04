---
title: "CI - 2 Independent Samples - Mean"
created: 2021-09-13T05:29:16.876-05:00
modified: 2026-05-21T03:20:44.003-05:00
parent: "[[CI - 2 Independent Samples]]"
children: []
---
2-sample problems - comparison of 2 samples, and making inferences of corresponding populations
- Population 1: 𝑋 ∼ 𝑓<sub>𝑋</sub>(𝑥), 𝐄(𝑋) = <em>𝜇</em><sub>𝑋</sub>
- Population 2: 𝑌 ∼ 𝑓<sub>𝑌</sub>(𝑦), 𝐄(𝑌) = <em>𝜇</em><sub>𝑌</sub>

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
# CI General Formula

> [!expand]- Click here to expand...
> ![[CI - Formula For Unbiased Estimator With Normal Distribution#^excerpt]]
# CI Formula For 2 Independent Samples of Sample Mean

the general formula states the confidence interval is:
- 𝜃ˆ ± <font style="color: rgb(0,51,102);">𝑧\*</font>·𝑆𝐸(𝜃ˆ)

computing CI for population mean, we substitute:
- 𝜃ˆ = 𝑋̅-𝑌̅
- 𝑆𝐸(𝜃ˆ) = 𝑆𝐸(𝑋̅-𝑌̅) = 𝑟𝑜𝑜𝑡\[(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub>) + (𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)\]

computation of 𝑆𝐸(𝑋̅-𝑌̅):

> [!expand]- Click here to expand...
> - 𝑉𝑎𝑟(𝑋̅-𝑌̅) = 𝑉𝑎𝑟(𝑋̅) + 𝑉𝑎𝑟(𝑌̅) = (𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub>) + (𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)
> - 𝑆𝑡𝑑(𝑋̅-𝑌̅) = 𝑆𝐸(𝑋̅-𝑌̅) = 𝑟𝑜𝑜𝑡((𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub>) + (𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>))

if population [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]] 𝜎<sub>𝑋</sub> and 𝜎<sub>𝑌</sub>are UNKNOWN and assumed to be:
- EQUAL (use pooled standard deviation)
> [!expand]- Click here to expand...
> how do we estimate 𝜎? we could use a [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|pooled standard deviation (𝑠𝑝)]]:
> - 𝑠<sub>𝑝</sub>= <strong>\[</strong> (𝑛<sub>𝑋</sub> - 1) 𝑠<sub>𝑋</sub><sup>2</sup> + (𝑛<sub>𝑌</sub> - 1) 𝑠<sub>𝑌</sub><sup>2</sup><strong>\] </strong><strong>/ </strong><strong>\[</strong> 𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2 <strong>\]</strong>
>
> therefore:
> - 𝑆𝐸ˆ(𝑋̅-𝑌̅) = 𝑠<sub>𝑝</sub>·𝑟𝑜𝑜𝑡(1/𝑛<sub>𝑋</sub> + 1/𝑛<sub>𝑌</sub>)
>
> the 100(1-𝛼)% CI for (<em>𝜇</em><sub>𝑋</sub>-<em>𝜇</em><sub>𝑌</sub>) when :
> - (𝑋̅-𝑌̅) ± 𝑡<sub>𝛼/2,𝑛<sub>𝑋</sub>+𝑛<sub>𝑌</sub>-2</sub>·𝑆𝐸ˆ(𝑋̅-𝑌̅)
>
> the 100(1-𝛼)% CI for (<em>𝜇</em><sub>𝑋</sub>-<em>𝜇</em><sub>𝑌</sub>) when either (sample sizes of 𝑛<sub>𝑋</sub>and 𝑛<sub>𝑌</sub>are large) or (𝑋̅ and 𝑌̅ are sampled from a population that has [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]):
> - (𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑆𝐸ˆ(𝑋̅-𝑌̅)
- NOT EQUAL (use Satterthwaite’s Approximation)
> [!expand]- Click here to expand...
> [[Satterthwaite's Approximation|Satterthwaite’s Approximation]]
> - 𝑣 = <strong>\[</strong>𝑠<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub><strong>\]</strong><sup>2</sup><strong>/</strong> <strong>\[</strong> 𝑠<sub>𝑋</sub><sup>4</sup>/(𝑛<sub>𝑋</sub><sup>2</sup>(𝑛<sub>𝑋</sub>-1)) + 𝑠<sub>𝑌</sub><sup>4</sup>/(𝑛<sub>𝑌</sub><sup>2</sup>(𝑛<sub>𝑌</sub> -1)) <strong>\]</strong>
>
> the 100(1-𝛼)% CI for (<em>𝜇</em><sub>𝑋</sub>-<em>𝜇</em><sub>𝑌</sub>) when
> - (𝑋̅-𝑌̅) ± 𝑡<sub>𝛼/2,𝑣</sub>·𝑟𝑜𝑜𝑡(𝑠<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)

# CI Formulas For 2 Independent Samples of Sample Mean

```merge-table
{
  "rows": [
    [
      {
        "content": "Large Sample Sizes\n(𝑛<sub>𝑋</sub>& 𝑛<sub>𝑌</sub>)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Normal Population\n(𝑋 and 𝑌)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "(𝜎<sub>𝑋</sub>and 𝜎<sub>𝑌</sub>)\nKnown",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝜎<sub>𝑋</sub> = 𝜎<sub>𝑌</sub>Assumed",
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
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,0,255);\">EITHER</font></font>",
        "bg": "#deebff"
      },
      "Bootstrap Method"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      "(𝑋̅-𝑌̅) ± 𝑡<sub>𝛼/2,𝑣</sub>·𝑟𝑜𝑜𝑡(𝑠<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      "(𝑋̅-𝑌̅) ± 𝑡<sub>𝛼/2,𝑛<sub>𝑋</sub>+𝑛<sub>𝑌</sub>-2</sub>·𝑟𝑜𝑜𝑡([[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑋</sub> + [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡(𝑠<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡([[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑋</sub> + [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "#deebff"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ]
  ]
}
```
