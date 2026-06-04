---
title: "Margin of Error (ME)"
created: 2021-09-13T05:29:19.000-05:00
modified: 2023-09-01T12:13:33.185-05:00
parent: "[[CI - Formula For Unbiased Estimator With Normal Distribution]]"
children:
  - "[[Confidence Multipliers - Critical Values]]"
  - "[[ME - Proportion]]"
  - "[[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability]]"
---
###### Margin of Error (ME)
````excerpt
- is a statistic expressing the amount of random sampling error in a survey's results
- the larger the ME, the less confidence one should have that the poll's reported results are close to the "true" figures; that is, the figures for the whole population
````
^excerpt

# Margin of Error (ME) Formula
- 𝑀𝐸 = 𝑐<sub>𝛼</sub> \* 𝑆𝑡𝑑(𝜃ˆ)

where:
- 𝑐 - [[Confidence Multipliers - Critical Values|confidence multiplier / critical value]] (e.g. [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-score]], [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-score]], [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-score]], etc.)
	- 𝛼 - [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]], affects the value of <em>confidence multiplier</em>
- 𝑆𝑡𝑑(𝜃ˆ) - [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]] of the [[Statistics - Terminology|statistic]]'s [[Sampling Distribution - Finite-Sample Distribution|sample distribution]] (i.e. [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]])

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
