---
title: "Standard Error (SE) - Estimated Standard Error (SEˆ)"
created: 2021-09-13T05:28:10.625-05:00
modified: 2023-09-18T13:08:58.570-05:00
parent: "[[Sampling Distribution - Finite-Sample Distribution]]"
children:
  - "[[Standard Error (SE) vs Standard Deviation (SD)]]"
  - "[[Standard Error - MLE]]"
---
###### Standard Error (SE) - Estimated Standard Error (SEˆ)
````excerpt
- <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">is the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]<font style="color: rgb(34,34,34);"> of a [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimate]]/[[Statistics - Terminology|statistic]]'s </font>[[Sampling Distribution - Finite-Sample Distribution|sampling distribution]]</font></font>
- <font style="color: rgb(255,0,0);">measures the variation of a statistic calculated from a sample of a specified sample size (not the variation of the original population)</font>
- it is called an error because the standard deviation of the sampling distribution tells us how different a sample mean can be expected to be from the true mean. In other words, if we assume that the mean of our sample is always the true mean (even though it probably isn't) the standard deviation can tell us how likely we are to be wrong
- for example, if the [[Statistics - Terminology|sample-parameter/statistic]] is the mean (i.e. [[Sample Mean|sample mean]]), it is called the standard error of the mean
````
^excerpt

Standard Error - Syntax

The standard error of estimator 𝜃ˆ is denoted as:
- 𝐒𝐄(𝜃ˆ) = 𝜎(𝜃ˆ) = 𝐒𝐭𝐝(𝜃ˆ) = standard deviation of 𝜃ˆ

# Estimated Standard Error - Syntax
The estimated standard error of estimator 𝜃ˆ is denoted as:
- 𝐒𝐄<font style="color: rgb(255,0,0);">ˆ</font>(𝜃ˆ) = 𝑠(𝜃ˆ) = 𝜎ˆ(𝜃ˆ) = estimated standard deviation of 𝜃ˆ

# Standard Error - Formula
<strong>Standard Error</strong> itself involves true values of [[Statistics - Terminology|parameters]]:
- 𝐒𝐄(𝜃ˆ) = 𝜎/√𝑛

where:
- 𝑛 - size of data
- 𝜎 - [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]] of population

# Estimated Standard Error - Formula
<strong>Estimated Standard Error</strong> can be computed by replacing true values of parameters with estimates of those parameters
- 𝐒𝐄<font style="color: rgb(255,0,0);">ˆ</font>(𝜃ˆ) = 𝑠/√𝑛

where:
- 𝑛 - size of data
- 𝑠 - standard deviation of sample (i.e. the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation]] or estimated standard deviation of the population)

# Standard Error - Formula Examples
- if estimator 𝜃ˆ is [[Sample Mean|sample mean]] 𝑋̅, then 𝐒𝐄(𝑋̅) = 𝜎/√𝑛
- if estimator 𝜃ˆ is [[Sample Proportion|sample proportion]] 𝑝̂, then 𝐒𝐄(𝑝̂) = 𝜎/√𝑛 = √(𝑝(1−𝑝)) / √𝑛
- Not easy to find 𝐒𝐄 of estimators such as sample median, sample quantile, [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]], etc

# Estimated Standard Error - Formula Examples
- if estimator 𝜃ˆ is [[Sample Mean|sample mean]] 𝑋̅, then 𝐒𝐄<font style="color: rgb(255,0,0);">ˆ</font>(𝑋̅) = 𝜎<font style="color: rgb(255,0,0);">ˆ</font>/√𝑛
- if estimator 𝜃ˆ is [[Sample Proportion|sample proportion]] 𝑝̂, then 𝐒𝐄<font style="color: rgb(255,0,0);">ˆ</font>(𝑝̂) = 𝜎<font style="color: rgb(255,0,0);">ˆ</font>/√𝑛
- Not easy to find 𝐒𝐄 of estimators such as sample median, sample quantile, [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]], etc

# Standard Error vs Estimated Standard Error

Sometimes the calculation of 𝐒𝐄(𝜃 involves knowing true values of [[Statistics - Terminology|parameters]]. If we don't know their values we could use sample estimates in place of them

For example, in calculating the standard error of sample mean 𝑋̅, if we don't know the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|population std (𝜎)]] then use [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample std (𝑠)]]
- 𝐒𝐄(𝑋̅) = 𝜎/√𝑛 <font style="color: rgb(128,128,128);">\# this is original formula</font>
- 𝐒𝐄<font style="color: rgb(255,0,0);">ˆ</font>(𝑋̅) = 𝑠/√𝑛

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Estimated Standard Error - Other Formulas
- [[Bootstrap／Bootstrapping (Statistics)|Bootstrap/Bootstrapping (Statistics)]]
