---
title: "Inferential Statistical Hypothesis Testing"
created: 2021-09-13T05:29:03.481-05:00
modified: 2023-09-13T20:39:43.036-05:00
parent: "[[Inferential Statistics]]"
children:
  - "[[Statistical Hypothesis Test - 1-Tailed & 2-Tailed]]"
  - "[[Statistical Hypothesis Test - Effect (Statistics)]]"
  - "[[Statistical Hypothesis Test - Null Distribution]]"
  - "[[Statistical Hypothesis Test - Type I／II／One／Two Error]]"
  - "[[Statistical Hypothesis Test - Types]]"
---
###### Hypothesis Test
````excerpt
- evaluates two mutually exclusive statements about a population to determine which statement is best supported by the sample data. These two statements are called the null hypothesis and the alternative hypothesis.
- When you perform a hypothesis test, there are two types of errors related to drawing an incorrect conclusion:
	- [[Statistical Hypothesis Test - Type I／II／One／Two Error|Type I Error]] / [[Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging|False Positive]] - the test rejects the null hypothesis that is actually true
	- [[Statistical Hypothesis Test - Type I／II／One／Two Error|Type II Error]] / [[Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging|False Negative]] - the test fails to reject the null hypothesis that is actually false
- A test result is statistically significant when the sample statistic is unusual enough relative to the null hypothesis that you can reject the null hypothesis for the entire population. “Unusual enough” in a hypothesis test is defined by how unlikely the effect observed in your sample is if the null hypothesis is true
- A test result is not 100% accurate because they use a random sample to draw conclusions about the entire population
- If your sample data provide sufficient evidence, you can reject the null hypothesis for the entire population. Your data favor the alternative hypothesis
````
^excerpt

# Statistical Hypothesis Test - Steps

Begin with a claim about the value of the [[Statistics - Terminology|population parameter]] (we will call the null hypothesis), then check whether or not the [[Statistics - Terminology|sample]] data provide evidence AGAINST this claim.
1. Formulate 2 hypotheses (two mutually exclusive statements about [[Statistics - Terminology|population parameter]] 𝜃)
	- <strong>Null Hypothesis (𝐻<sub>0</sub>)</strong> - the value of 𝜃 corresponding to “status quo”, “common belief”, “no change”, etc. Often, 𝐻<sub>0</sub>: 𝜃 = 𝜃<sub>0</sub>(a given value)
	- <strong>Alternative Hypothesis (𝐻<sub>𝑎</sub>)</strong> - the claim the researcher is hoping to prove
2. Compute the [[Statistical Hypothesis Test - Null Distribution|null distribution]] of 𝐻<sub>0</sub>
3. Compute 𝑡𝑒𝑠𝑡-𝑠𝑡𝑎𝑡𝑖𝑠𝑡𝑖𝑐 of [[Statistics - Terminology|sample data]] using the [[Statistical Hypothesis Test - Null Distribution|null distribution]]
4. Determine whether to reject the 𝐻<sub>0</sub> in either 2 ways:
	1. ###### Critical Value Method
		- Choose a [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level (𝛼)]] such as 0.05
		- Compute 𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙-𝑣𝑎𝑙𝑢𝑒 by using the [[Statistical Hypothesis Test - Null Distribution|null distribution]] and [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]]
		- Compare 𝑡𝑒𝑠𝑡-𝑠𝑡𝑎𝑡𝑖𝑠𝑡𝑖𝑐 with the 𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙-𝑣𝑎𝑙𝑢𝑒(𝑠):
			- <strong>[[Statistical Hypothesis Test - 1-Tailed & 2-Tailed|2-Sided Hypothesis Test]]</strong> - if 𝑡𝑒𝑠𝑡-𝑠𝑡𝑎𝑡𝑖𝑠𝑡𝑖𝑐 is outside the [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] of \[𝑙𝑜𝑤𝑒𝑟-𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙-𝑝𝑜𝑖𝑛𝑡, 𝑢𝑝𝑝𝑒𝑟-𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙-𝑝𝑜𝑖𝑛𝑡\] the 𝐻<sub>0</sub>is rejected
			- <strong>[[Statistical Hypothesis Test - 1-Tailed & 2-Tailed|1-Sided Upper Hypothesis Test]]</strong> - if 𝑡𝑒𝑠𝑡-𝑠𝑡𝑎𝑡𝑖𝑠𝑡𝑖𝑐 is GREATER than 𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙-𝑣𝑎𝑙𝑢𝑒, then the 𝐻<sub>0</sub>is rejected
			- <strong>[[Statistical Hypothesis Test - 1-Tailed & 2-Tailed|1-Sided Lower Hypothesis Test]]</strong> - if 𝑡𝑒𝑠𝑡-𝑠𝑡𝑎𝑡𝑖𝑠𝑡𝑖𝑐 is LESS than 𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙-𝑣𝑎𝑙𝑢𝑒, then the 𝐻<sub>0</sub>is rejected
	2. ###### P-Value Method
		- Compute the probability of 𝑡𝑒𝑠𝑡-𝑠𝑡𝑎𝑡𝑖𝑠𝑡𝑖𝑐 (i.e. probability of seeing [[Statistics - Terminology|sample data]]) under the assumption that 𝐻<sub>0</sub>is true

> [!info]
> - [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level (𝛼)]] - is the [[Probability|probability]] of REJECTING the 𝐻<sub>0</sub> when it is true (i.e. the probability of [[Statistical Hypothesis Test - Type I／II／One／Two Error|Type I Error]])
> - <strong>[[Confidence Multipliers - Critical Values|critical value]]</strong> - is a point (or points) on the scale of the test statistic beyond which we reject the null hypothesis, and, is derived from the [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|level of significance (𝛼)]] of the test
> - <strong>p-value</strong> - is the probability of seeing [[Statistics - Terminology|sample data]] when null-hypothesis 𝐻<sub>0</sub> is true
# Statistical Hypothesis Test - Reject or Fail to Reject Null Hypothesis

> [!expand]- Click here to expand...
> Either:
> - reject 𝐻<sub>0</sub>
> - fail to reject 𝐻<sub>0</sub>
>
> We do not know the truth about the population. (If we knew, there was no point in collecting data)
>
> 𝐻<sub>0</sub> is rejected only if there is strong evidence against it, otherwise, 𝐻<sub>0</sub> is failed to be rejected
> - if 𝐻<sub>0</sub> is rejected, it doesn’t mean that 𝐻<sub>𝑎</sub> is true. It simply means that the data strongly favors 𝐻<sub>𝑎</sub>
> - if 𝐻<sub>0</sub> is failed to be rejected, it doesn’t mean that 𝐻<sub>0</sub> is true. It just means that there is not enough evidence in the data to reject it
>
> The interesting part is to interpret our results correctly. Notice that conclusions like “My level 𝛼 test accepted the hypothesis. Therefore, the hypothesis is true with probability (1 − 𝛼)” are wrong! Statements 𝐻<sub>0</sub> and 𝐻<sub>𝑎</sub> are about a non-random population, and thus, the hypothesis can either be true with probability 1 or false with probability 1
> - If the test REJECTS the hypothesis, all we can state is that the data provides sufficient evidence against 𝐻<sub>0</sub> and in favor of 𝐻<sub>𝑎</sub>. This happens only because EITHER:
> 	- 𝐻<sub>0</sub> is not true
> 	- 𝐻<sub>0</sub> is true, and the sample is too extreme (this can only happen with probability 𝛼)
> - If the test ACCEPTS the hypothesis, it only means that the evidence obtained from the data is not sufficient to reject it. In the absence of sufficient evidence, by default, we accept the null hypothesis
# Statistical Hypothesis Test - Type I Error & Type II Error

> [!expand]- Click here to expand...
> ![[Statistical Hypothesis Test - Type I／II／One／Two Error#^excerpt]]
# Statistical Hypothesis Test - Types
- [[Statistical Hypothesis Test - Types]]

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://bolt.mph.ufl.edu/6050-6052/unit-4/module](https://bolt.mph.ufl.edu/6050-6052/unit-4/module-12/)
