---
title: "CI - Variance & Standard Deviation"
created: 2021-09-13T05:29:15.026-05:00
modified: 2026-05-21T15:23:41.898-05:00
parent: "[[CI - 1 Sample]]"
children: []
---
read: [[Sampling Distribution of Sample Variance／Standard Deviation - Sample Variance／Standard-Deviation Distribution﻿|Sampling Distribution of Sample Variance/Standard Deviation]]

for comparisons of 2 [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variances]], see: [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-distribution]]
# Confidence Interval for Population Variance

```merge-table
{
  "rows": [
    [
      "A rescaled sample variance \\[(𝑛-1)𝑠<sup>2</sup>\\] / \\[𝜎<sup>2</sup>\\] has [[Chi-Square Distribution|Chi-Square]] density (example on the right)\n\n![[CI - Variance & Standard Deviation/confidence-interval-variance-1.png|301]]\n\nSolving the inequality for the unknown parameter 𝜎<sup>2</sup>, we get\n\n![[CI - Variance & Standard Deviation/confidence-interval-variance-2.png|301]]\n\nA (1 − 𝛼)100% confidence interval for the population variance is obtained\n\n![[CI - Variance & Standard Deviation/variance-confidence-interval.png|301]]",
      "![[CI - Variance & Standard Deviation/example-chi-squared-density-function.png|450]]"
    ]
  ]
}
```
# Confidence Interval for Population Standard Deviation
A confidence interval for the population standard deviation 𝜎 = √𝜎<sup>2</sup> is just one step away 

![[CI - Variance & Standard Deviation/standard-deviation-confidence-interval.png|301]]
