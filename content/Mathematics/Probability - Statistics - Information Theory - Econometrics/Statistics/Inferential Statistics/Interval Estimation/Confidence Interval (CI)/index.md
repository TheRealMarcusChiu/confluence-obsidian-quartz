---
title: "Confidence Interval (CI)"
created: 2021-09-13T05:29:13.381-05:00
modified: 2024-02-12T11:35:34.920-06:00
parent: "[[Interval Estimation]]"
children:
  - "[[CI - 1 Sample]]"
  - "[[CI - 1-Tailed & 2-Tailed]]"
  - "[[CI - 2 Samples]]"
  - "[[CI - Formula For Unbiased Estimator With Normal Distribution]]"
---
###### Confidence Interval (CI)
````excerpt
- is the confidence in how accurate an [[Statistics - Terminology|estimated statistic]] is within range of the [[Statistics - Terminology|true parameter]]. Given a sample of a population, we analyze the sample and compute its [[Statistics - Terminology|statistics]] (e.g. [[Sample Mean|sample mean]], [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]], etc). A statistic 𝜃ˆ is an estimate of the true [[Statistics - Terminology|parameter]] 𝜃 of the ENTIRE population. Since 𝜃ˆ are computed from a random sample they are not likely to be equal to the true parameter. This is the risk of sampling which is taking a sample and making generalizations of the larger population. Confidence Intervals allow us to measure that risk.
- A [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimate]]/[[Statistics - Terminology|sample statistic]] 𝜃ˆ is an estimate of the unknown [[Statistics - Terminology|parameter]] 𝜃 of the population. We know that it is likely <font style="color: rgb(255,0,0);">NOT</font> exactly
	- 𝜃ˆ = 𝜃 <font style="color: rgb(128,128,128);">\# This proposition is not likely to be true</font>
- How much trust can we then put into 𝜃ˆ? We can use <strong>Confidence I</strong><strong>ntervals (CI)</strong>
````
^excerpt

# CI - Definition

an interval \[𝐴, 𝐵\] is a (1 − 𝛼)100% confidence interval for the parameter 𝜃 if it contains the parameter with probability (1 − 𝛼):
- 𝐏{𝐴 ≤ 𝜃 ≤ 𝐵} = 1 − 𝛼

where:
- 𝛼 - [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]]
- (1 − 𝛼) - [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|confidence level or coverage probability]]

# CI - What is It?

> [!expand]- Click here to expand...
> the statement:
> > “There is a 95% <strong>CHANCE</strong> that the [[Sample Mean|sample mean]] 𝑋̅ falls within 3 units of [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|population mean]] <em>𝜇</em>”
>
> can be rephrased as:
> > “We are 95% <strong>CONFIDENT </strong>that the population mean <em>𝜇</em> falls within 3 units of the 𝑋̅ we found in our sample.”
>
> Note that the first phrasing is about 𝑋̅, which is a random variable; that’s why it makes sense to use probability language. But the second phrasing is about 𝜇, which is a parameter, and thus is a “fixed” value that does not change, and that’s why we should not use probability language to discuss it. In these problems, it is our 𝑋̅ that will change when we repeat the process, not 𝜇
> ###### Example
> We are 95% confident that the mean SAT-M score of all community college students in the researcher’s state is covered by the interval (467.3, 482.7). Note that the confidence interval was obtained by taking 475 ± 7.7. This means that we are 95% confident that by using the sample mean (𝑋̅ = 475) to estimate <em>𝜇</em>, our error is no more than 7.7 points
>
> <strong>There is a trade-off between the level of confidence and the precision with which the parameter is estimated</strong>
> > the <strong>wider</strong> 99% confidence interval (111, 119) gives us a <strong>less precise</strong> estimation about the value of <em>𝜇</em> than the narrower 90% confidence interval (112.5, 117.5), because the smaller interval ‘narrows-in’ on the plausible values of <em>𝜇</em>
# CI - Formula For Unbiased Estimator 𝜃ˆ With Normal Distribution
- see: [[CI - Formula For Unbiased Estimator With Normal Distribution]]

# CI - In Specific Problems
- [[CI - 1 Sample|Confidence Intervals in 1 Sample Problems]] - inference on the parameter(s) of a single population
- [[CI - 2 Samples|Confidence Intervals in 2 Sample Problems]] - inference on parameters involving two populations

# CI - Other
- [[CI - 1-Tailed & 2-Tailed|Confidence Interval (CI) - 1-Tailed & 2-Tailed]]
