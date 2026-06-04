---
title: "Z-Test & T-Test"
created: 2021-09-13T05:29:10.991-05:00
modified: 2023-10-23T16:45:49.031-05:00
parent: "[[Statistical Hypothesis Test - Types]]"
children: []
---
###### Z-Test / T-Test
````excerpt
- [[Sample Mean|sample mean]]s are [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]] when the distribution of the population is normal
- sample means are APPROXIMATELY normal when they are computed from LARGE sample sizes (the distribution of population need not be normal)
- [[Sample Proportion|sample proportions]] are APPROXIMATELY normal when they are computed from LARGE sample sizes
````
^excerpt

# TODO (From UofH Fall 2023)

```merge-table
{
  "rows": [
    [
      {
        "content": "Parameter",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜇 given 𝜎",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜇 not given 𝜎",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑝 proportions",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Null Hypothesis (𝐻<sub>0</sub>)",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜇 = 𝜇<sub>0</sub>",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "𝑝 = 𝑝<sub>0</sub>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Alternative Hypothesis (𝐻<sub>𝑎</sub>)",
        "bg": "#F4F5F7"
      },
      {
        "content": "Choose either <, >, or ≠ in place of 𝐻<sub>0</sub>",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Rejection Region\nDepending on 𝐻<sub>𝑎</sub>",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑧<sub>𝛼/2</sub>",
        "align": "center"
      },
      {
        "content": "𝑡<sub>𝛼/2</sub>with df=𝑛-1",
        "align": "center"
      },
      {
        "content": "𝑧<sub>𝛼/2</sub>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Test Statistic",
        "bg": "#F4F5F7"
      },
      "$z = \\frac{\\overline{x} - 𝜇_0}{\\frac{𝜎}{\\sqrt{n}}}$",
      "$t = \\frac{\\overline{x} - 𝜇_0}{\\frac{s}{\\sqrt{n}}}$",
      "$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$"
    ],
    [
      {
        "content": "P-Value",
        "bg": "#F4F5F7"
      },
      "pnorm(z)",
      "pt(t,n-1)",
      "pnorm(z)"
    ],
    [
      {
        "content": "Decision",
        "bg": "#F4F5F7"
      },
      {
        "content": "- reject 𝐻<sub>0</sub> if p-value ≤ 𝛼\n- fail to reject 𝐻<sub>𝑎</sub> if p-value \\> 𝛼",
        "colspan": 3
      },
      null,
      null
    ]
  ]
}
```
# CI Formulas For Population Mean

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
        "content": "Test Statistic",
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
      "𝑋̅ ± <font style=\"color: rgb(255,0,0);\">𝑡</font><sub>𝛼/2,𝑛-1</sub>·(𝑠/√𝑛)"
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
      "𝑋̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝜎/√𝑛)"
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
      "𝑋̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝑠/√𝑛)"
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
      "𝑋̅ ± <font style=\"color: rgb(0,128,0);\">𝑧</font><sub>𝛼/2</sub>·(𝜎/√𝑛)"
    ]
  ],
  "tableStyle": "width: 742.143px;"
}
```
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
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(0,0,255);\">EITHER</font></font>",
        "bg": "blue"
      },
      "[[Bootstrap／Bootstrapping (Statistics)|Bootstrap Method]]"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      "(𝑋̅-𝑌̅) ± 𝑡<sub>𝛼/2,<strong>[[Satterthwaite's Approximation|𝑣]]</strong></sub>·𝑟𝑜𝑜𝑡(𝑠<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      "(𝑋̅-𝑌̅) ± 𝑡<sub>𝛼/2,𝑛<sub>𝑋</sub>+𝑛<sub>𝑌</sub>-2</sub>·𝑟𝑜𝑜𝑡([[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑋</sub> + [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡(𝑠<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">FALSE</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡([[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑋</sub> + [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">TRUE</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">EITHER</font>",
        "bg": "blue"
      },
      "(𝑋̅-𝑌̅) ± 𝑧<sub>𝛼/2</sub>·𝑟𝑜𝑜𝑡(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛<sub>𝑋</sub> + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑛<sub>𝑌</sub>)"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Null hypothesis\n\n𝐻<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Parameter\n\n𝜃",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Estimator\n\n𝜃ˆ",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "If 𝐻<sub>0</sub> is true:",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Test Statistic (𝑍-Statistic)\n\n𝑍 = (𝜃ˆ - 𝐄(𝜃ˆ)) / √𝑉𝑎𝑟(𝜃ˆ)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "𝐄(𝜃ˆ)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑉𝑎𝑟(𝜃ˆ)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "one-sample z-tests for means and proportions, based on a sample of size 𝑛",
        "colspan": 6
      },
      null,
      null,
      null,
      null,
      null
    ],
    [
      "𝜇 = 𝜇<sub>0</sub>",
      "𝜇",
      "𝑋̅",
      "𝜇<sub>0</sub>",
      "𝜎<sup>2</sup>/𝑛",
      "𝑍 = (𝑋̅ - 𝜇<sub>0</sub>) / √(𝜎<sup>2</sup>/𝑛)"
    ],
    [
      "𝑝 = 𝑝<sub>0</sub>",
      "𝑝",
      "𝑝̂",
      "𝑝<sub>0</sub>",
      "𝑝<sub>0</sub>(1 − 𝑝<sub>0</sub>)/𝑛",
      "𝑍 = (𝑝̂ - 𝑝<sub>0</sub>) / √(𝑝<sub>0</sub>(1 − 𝑝<sub>0</sub>)/𝑛)"
    ],
    [
      {
        "content": "two-sample z-tests comparing means and proportions of two populations, based on independent samples of size 𝑛 and 𝑚",
        "colspan": 6
      },
      null,
      null,
      null,
      null,
      null
    ],
    [
      "𝜇<sub>𝑋</sub>- 𝜇<sub>𝑌</sub> = 𝐷",
      "𝜇<sub>𝑋</sub>-𝜇<sub>𝑌</sub>",
      "𝑋̅-𝑌̅",
      "𝐷",
      "𝜎<sub>𝑋</sub><sup>2</sup>/𝑛 + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑚",
      "𝑍 = (𝑋̅-𝑌̅ - 𝐷) / √(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛 + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑚)"
    ],
    [
      "𝜇<sub>𝑋</sub>= 𝜇<sub>𝑌</sub>",
      "𝜇<sub>𝑋</sub>-𝜇<sub>𝑌</sub>",
      "𝑋̅-𝑌̅",
      "0",
      "𝜎<sub>𝑋</sub><sup>2</sup>/𝑛 + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑚",
      "𝑍 = (𝑋̅-𝑌̅) / √(𝜎<sub>𝑋</sub><sup>2</sup>/𝑛 + 𝜎<sub>𝑌</sub><sup>2</sup>/𝑚)"
    ],
    [
      "𝑝<sub>1</sub>- 𝑝<sub>2</sub>= 𝐷",
      "𝑝<sub>1</sub>-𝑝<sub>2</sub>",
      "𝑝̂<sub>1</sub>-𝑝̂<sub>2</sub>",
      "𝐷",
      "\\[𝑝<sub>1</sub>(1−𝑝<sub>1</sub>)/𝑛\\] + \\[𝑝<sub>2</sub>(1−𝑝<sub>2</sub>)/𝑚\\]",
      "𝑍 = (𝑝̂<sub>1</sub>-𝑝̂<sub>2</sub> - 𝐷) / √(\\[𝑝<sub>1</sub>(1-𝑝<sub>1</sub>)/𝑛\\] + \\[𝑝<sub>2</sub>(1-𝑝<sub>2</sub>)/𝑚\\])"
    ],
    [
      "𝑝<sub>1</sub>= 𝑝<sub>2</sub>",
      "𝑝<sub>1</sub>-𝑝<sub>2</sub>",
      "𝑝̂<sub>1</sub>-𝑝̂<sub>2</sub>",
      "0",
      "𝑝(1 − 𝑝)(1/𝑛 + 1/𝑚)\n\nwhere: 𝑝 = 𝑝<sub>1</sub>= 𝑝<sub>2</sub>",
      "𝑍 = (𝑝̂<sub>1</sub>-𝑝̂<sub>2</sub>) / √(𝑝(1 − 𝑝)(1/𝑛 + 1/𝑚))\n\nwhere: 𝑝ˆ = (𝑛𝑝ˆ<sub>1</sub>- 𝑚𝑝ˆ<sub>2</sub>) / (𝑛 + 𝑚)"
    ]
  ],
  "tableStyle": "width: 97.9478%;"
}
```
# T-Tests (Unknown 𝜎)

```merge-table
{
  "rows": [
    [
      {
        "content": "Null Hypothesis\n\n𝐻<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Parameter\n\n𝜃",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Estimator\n\n𝜃ˆ",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "If 𝐻<sub>0</sub> is true:",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null,
      {
        "content": "Conditions",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Degrees of Freedom",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Test Statistic (𝑇-Statistic)\n\n𝑇 = (𝜃ˆ - 𝐄(𝜃ˆ)) / √𝑉𝑎𝑟<font style=\"color: rgb(255,0,0);\">ˆ</font>(𝜃ˆ)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "𝐄(𝜃ˆ)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑉𝑎𝑟<font style=\"color: rgb(255,0,0);\">ˆ</font>(𝜃ˆ)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝜇 = 𝜇<sub>0</sub>",
      "𝜇",
      "𝑋̅",
      "𝜇<sub>0</sub>",
      "𝑠<sup>2</sup>/𝑛",
      "- sample size 𝑛\n- unknown 𝜎",
      "𝑛 − 1",
      "𝑇 = (𝑋̅ - 𝜇<sub>0</sub>) / √(𝑠<sup>2</sup>/𝑛)"
    ],
    [
      "𝜇<sub>𝑋</sub>- 𝜇<sub>𝑌</sub> = 𝐷",
      "𝜇<sub>𝑋</sub>- 𝜇<sub>𝑌</sub>",
      "𝑋̅-𝑌̅",
      "𝐷",
      "[[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]<sup>2</sup>(1/𝑛 + 1/𝑚)",
      "- sample sizes 𝑛, 𝑚\n- unknown 𝜎<sub>𝑋</sub> & 𝜎<sub>𝑌</sub>\n- 𝜎<sub>𝑋</sub> = 𝜎<sub>𝑌</sub>",
      "𝑛 + 𝑚 - 2",
      "𝑇 = (𝑋̅-𝑌̅ - 𝐷) / [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|𝑠𝑝]]√(1/𝑛 + 1/𝑚)"
    ],
    [
      "𝜇<sub>𝑋</sub>- 𝜇<sub>𝑌</sub> = 𝐷",
      "𝜇<sub>𝑋</sub>- 𝜇<sub>𝑌</sub>",
      "𝑋̅-𝑌̅",
      "𝐷",
      "𝑠<sub>𝑋</sub><sup>2</sup>/𝑛 + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑚",
      "- sample sizes 𝑛, 𝑚\n- unknown 𝜎<sub>𝑋</sub> & 𝜎<sub>𝑌</sub>\n- 𝜎<sub>𝑋</sub> ≠ 𝜎<sub>𝑌</sub>",
      "[[Satterthwaite's Approximation|Satterthwaite Approximation]]",
      "𝑇 = (𝑋̅-𝑌̅ - 𝐷) / √(𝑠<sub>𝑋</sub><sup>2</sup>/𝑛 + 𝑠<sub>𝑌</sub><sup>2</sup>/𝑚)"
    ]
  ],
  "tableStyle": "width: 92.7941%;"
}
```
# Z-Tests - Computing P-Value

𝐹 is the 𝐶𝐷𝐹 of [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|𝑧-distribution]]

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
        "content": "reject when",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "p-value",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "computing p-value",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝜇 = 𝜇<sub>0</sub>",
        "rowspan": 3
      },
      "𝜇 ≠ 𝜇<sub>0</sub>",
      "|𝑧<sub>𝑜𝑏𝑠</sub>| ≥ 𝑧<sub>𝛼/2</sub>",
      "𝐏(|𝑧| ≥ |𝑧<sub>𝑜𝑏𝑠</sub>| | 𝐻<sub>0</sub>)",
      "2(1 - 𝐹(|𝑧<sub>𝑜𝑏𝑠</sub>|))"
    ],
    [
      "𝜇 > 𝜇<sub>0</sub>",
      "𝑧<sub>𝑜𝑏𝑠</sub> ≥ 𝑧<sub>𝛼</sub>",
      "𝐏(𝑧 ≥ 𝑧<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)",
      "1 - 𝐹(𝑧<sub>𝑜𝑏𝑠</sub>)"
    ],
    [
      "𝜇 < 𝜇<sub>0</sub>",
      "𝑧<sub>𝑜𝑏𝑠</sub> ≤ -𝑧<sub>𝛼</sub>",
      "𝐏(𝑧 ≤ 𝑧<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)",
      "𝐹(𝑧<sub>𝑜𝑏𝑠</sub>)"
    ]
  ],
  "tableStyle": "width: 53.9179%;"
}
```
# T-Tests - Computing P-Value

𝐹 is the 𝐶𝐷𝐹 of [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|𝑡-distribution]] with 𝑛-1 degrees of freedom

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
        "content": "reject when",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "p-value",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "computing p-value",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "𝜇 = 𝜇<sub>0</sub>",
      "𝜇 ≠ 𝜇<sub>0</sub>",
      "|𝑡<sub>𝑜𝑏𝑠</sub>| ≥ 𝑡<sub>𝛼/2,𝑛-1</sub>",
      "𝐏(|𝑡| ≥ |𝑡<sub>𝑜𝑏𝑠</sub>| | 𝐻<sub>0</sub>)",
      "2(1 - 𝐹(|𝑡<sub>𝑜𝑏𝑠</sub>|))"
    ],
    [
      "𝜇 = 𝜇<sub>0</sub>",
      "𝜇 > 𝜇<sub>0</sub>",
      "𝑡<sub>𝑜𝑏𝑠</sub> ≥ 𝑡<sub>𝛼,𝑛-1</sub>",
      "𝐏(𝑡 ≥ 𝑡<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)",
      "1 - 𝐹(𝑡<sub>𝑜𝑏𝑠</sub>)"
    ],
    [
      "𝜇 = 𝜇<sub>0</sub>",
      "𝜇 < 𝜇<sub>0</sub>",
      "𝑡<sub>𝑜𝑏𝑠</sub> ≤ -𝑡<sub>𝛼,𝑛1</sub>",
      "𝐏(𝑡 ≤ 𝑡<sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)",
      "𝐹(𝑡<sub>𝑜𝑏𝑠</sub>)"
    ]
  ]
}
```
