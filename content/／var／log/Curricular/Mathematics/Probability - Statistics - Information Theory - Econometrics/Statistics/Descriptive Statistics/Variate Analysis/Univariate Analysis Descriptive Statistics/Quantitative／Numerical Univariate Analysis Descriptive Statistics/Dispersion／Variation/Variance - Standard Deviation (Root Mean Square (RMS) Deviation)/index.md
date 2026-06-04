---
title: "Variance - Standard Deviation (Root Mean Square (RMS) Deviation)"
created: 2021-09-13T05:28:53.743-05:00
modified: 2023-09-16T23:43:23.466-05:00
parent: "[[Dispersion／Variation]]"
children:
  - "[[Properties of Variance]]"
  - "[[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)]]"
  - "[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation]]"
---
- ###### Variance (spread) ([[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|Second Central Moment]])
	- is a type of [[Dispersion／Variation|Dispersion/Variation]]
	- measures how far a set of numbers is spread out from their [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] value
- ###### Standard Deviation (Root Mean Square (RMS) Deviation)
	- is the square-root of the variance
	- is also the [[Root Mean Square (RMS) - Quadratic Mean (QM)﻿|root mean square (RMS)]] deviation from the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]
	- is a type of [[Mean Deviation|mean deviation]] statistic

# Variance vs. Standard Deviation
- <strong>Variance</strong> = \[𝛴(value(𝑖) - mean)<sup>2</sup>\] / \[(𝑛 - 1) or 𝑛\] = 𝐄\[(value(𝑖) - mean)<sup>2</sup>\]
- <strong>Standard Deviation</strong> = variance<sup>1/2</sup>

Because of this squaring, the variance is no longer in the same unit of measurement as the original data. Taking the root of the variance means the standard deviation is restored to the original unit of measure and therefore much easier to measure
# Variation - Population vs. Sample

You have only one sample and want to infer about the unknown mean and variance in the population. In other words, you want estimates. You take your sample mean for the estimate of the population mean (because your sample is representative), OK. To obtain an estimate of population variance, you have to pretend that that mean is really the population mean and therefore it is not dependent on your sample anymore since when you computed it. To "show" that you now take it as fixed you reserve one (any) observation from your sample to "support" the mean's value: whatever your sample might have happened, one reserved observation could always bring the mean to the value that you've got and which believe is insensitive to sampling contingencies. One reserved observation is "-1" and so you have N-1 in computing variance estimate
# Formula
- <strong>population variance</strong> = \[𝛴<sub>1≤𝑖≤𝑛</sub>(value(𝑖) - [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|population-mean]])<sup>2</sup>\] / \[𝑛\]
	- used in calculating variance when given data from the entire population
- <strong>[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]]</strong> = \[𝛴<sub>1≤𝑖≤𝑛</sub>(value(𝑖) - [[Sample Mean|sample-mean]])<sup>2</sup>\] / \[𝑛-1\]
	- used in calculating variance when given a sample of the population

# Subpages
- [[Standard Error (SE) vs Standard Deviation (SD)]]
- [[Mean Absolute Deviation vs. Root Mean Square Deviation (Standard Deviation)]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
