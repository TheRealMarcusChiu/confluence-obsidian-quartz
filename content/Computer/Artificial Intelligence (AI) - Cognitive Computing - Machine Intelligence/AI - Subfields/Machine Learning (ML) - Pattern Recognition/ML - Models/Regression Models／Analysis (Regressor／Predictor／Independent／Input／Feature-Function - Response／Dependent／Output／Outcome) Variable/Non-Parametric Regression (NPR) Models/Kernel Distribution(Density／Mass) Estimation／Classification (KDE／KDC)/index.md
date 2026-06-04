---
title: "Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)"
created: 2020-06-01T12:49:45.503-05:00
modified: 2021-12-26T16:20:46.196-06:00
parent: "[[Non-Parametric Regression (NPR) Models]]"
children:
  - "[[Gaussian Process Regression (GPR) - Kriging]]"
  - "[[KDE／KDC - Comparisons]]"
  - "[[Kernel Regression]]"
---
In [[Statistics|statistics]], <strong>KDE/KDC</strong> is a type of [[Non-Parametric Regression (NPR) Models|non-parametric regression]] to estimate the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass/density function]] of a random variable(s)
# KDE/KDC - How it Works & Compared to Histogram
<strong><font style="color: rgb(255,0,0);">Must See:</font> [[Histogram vs KDE]]</strong>
- 𝐏ˆ(𝑋=𝑥) = 1/\[ℎ·𝑛\]・𝛴<sub>𝑥<sub>𝑖</sub>∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>𝑘(𝑥<sub>𝑖</sub>,𝑥)
- 𝐏ˆ(𝑋=𝑥|𝑌=𝑦) = 1/\[ℎ·𝑐𝑜𝑢𝑛𝑡(𝑌=𝑦)\]・𝛴<sub>(</sub><sub>𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>)∊𝑎𝑙𝑙-𝑠𝑎𝑚𝑝𝑙𝑒𝑠</sub>𝑘\[(𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>),(𝑥,𝑦)\]

where:
- ℎ \> 0 - bandwidth
- 𝑘() - the [kernel function](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=15600863)
```merge-table
{
  "rows": [
    [
      {
        "content": "### Bandwidth (ℎ)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Kernel Function (𝑘)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)/Comparison_of_1D_bandwidth_selectors.png|301]]",
      "![[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)/kernels.png|400]]"
    ],
    [
      "<strong>Kernel Density Estimate (KDE)</strong> with different bandwidths of a random sample of 100 points from a [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal distribution]]:\n- <font style=\"color: rgb(128,128,128);\">grey: true density (standard normal)</font>\n- <font style=\"color: rgb(255,0,0);\">red: KDE with ℎ=0.05</font>\n- black: KDE with ℎ=0.337\n- <font style=\"color: rgb(51,153,102);\">green: KDE with ℎ=2</font>",
      "see [[Kernel Functions (Similarity Functions)]]"
    ]
  ],
  "tableStyle": "width: 60.6343%;"
}
```
# KDE/KDC - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Histogram]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- KDE with a [[Dirac Delta Distribution Function - Unit Impluse|Dirac Delta]] kernel with bandwidth = 0"
    ],
    [
      {
        "content": "[[k-Nearest Neighbors (k-NN) Regression|k-Nearest Neighbors]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- KDE with a [[Uniform Distribution|uniform]] kernel with variable bandwidth to encompass 𝑘 nearest neighbors"
    ],
    [
      {
        "content": "[[Gaussian Process Regression (GPR) - Kriging]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- KDE with [[Radial Basis \"Kernel\" Function (RBF)|Gaussian kernel]] (can use other [[Kernel Functions (Similarity Functions)|kernel types]])"
    ],
    [
      {
        "content": "[[Kernel Regression]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a non-parametric regression technique in statistics to estimate the conditional expectation of a random variable"
    ]
  ]
}
```
# KDE/KDC - Resources
- [Justin Esarey - Kernel Density Estimation & Kernel Regression](https://www.youtube.com/watch?v=QSNN0no4dSI)
