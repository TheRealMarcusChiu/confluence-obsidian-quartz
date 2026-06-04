---
title: "Sampling Distribution - Finite-Sample Distribution"
created: 2021-09-13T05:28:10.119-05:00
modified: 2023-08-07T18:14:51.499-05:00
parent: "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
children:
  - "[[Effective Sample Size (ESS)]]"
  - "[[Standard Error (SE) - Estimated Standard Error (SEˆ)]]"
---
###### Sampling Distribution - Finite-Sample Distribution
````excerpt
- the sampling distribution of a statistic 𝜃ˆ is the distribution of that statistic for <em>all possible samples from the same population</em> of a fixed sample size 𝑛. (some statistics include: [[Sample Mean|sample mean]], [[Sample Proportion|sample proportion]], etc)
- for example, assume we repeatedly take samples of a fixed size from a population and calculate the [[Sample Mean|sample mean]]𝑋̅ for each sample. The distribution of these [[Sample Mean|sample means]] is called the "sampling distribution of the sample mean"
````
^excerpt

# Sampling Distribution Depends On
- 𝑓(𝑋=𝑥|𝜃) - the underlying [distribution](https://en.wikipedia.org/wiki/Probability_distribution) of the population
- 𝜃ˆ - the statistic being considered (e.g. [[Sample Mean|sample mean]], [[Sample Proportion|sample proportion]], etc)
- 𝑛 - the size of the sample
- the sampling procedure employed (biased or unbiased)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# Sampling Distributions of Specific Statistics 𝜃ˆ
the sampling distributions of statistics 𝜃ˆ can be of any distribution, for example:
- [[Sampling Distribution of Sample Mean - Sample Mean Distribution|Sampling Distribution of Sample Mean]] is normally distributed
- Sampling Distribution of Sample Proportion is normally distributed
- Sampling Distribution of Sample Median is not normally distributed

if a sampling distribution is a:
- [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] then use ([[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimation]] methods: [[Method of Moments Estimation (MOME)|MOME]] and [[Maximum Likelihood Estimation (MLE)|MLE]]) to estimate 𝜃
- non-normal distribution then use [[Bootstrap／Bootstrapping (Statistics)|Bootstrap/Bootstrapping (Statistics)]] to estimate 𝜃
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "Sampling Distribution",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "Variable",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Parameter",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Statistic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mean",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Standard Error",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Shape",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "Qualitative\n\n(e.g. left-handed or not)",
      "𝑝 = population proportion",
      "𝑝̂ = sample proportion",
      {
        "content": "𝑝",
        "align": "center"
      },
      {
        "content": "𝑟𝑜𝑜𝑡([𝑝(1-𝑝)\\] / 𝑛)",
        "align": "center"
      },
      "approximately Normally Distributed if BOTH:\n- 𝑛𝑝 ≥ 5\n- 𝑛(1-𝑝) ≥ 5"
    ],
    [
      "Quantitative\n\n(e.g. age)",
      "𝜇 = population mean\n\n𝜎 = population standard deviation",
      "𝑋̅ = sample mean",
      {
        "content": "𝜇",
        "align": "center"
      },
      {
        "content": "𝜎/√𝑛",
        "align": "center"
      },
      "approximately Normally Distributed if EITHER:\n- underlying distribution is Normal\n- 𝑛 ≥ 30"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
