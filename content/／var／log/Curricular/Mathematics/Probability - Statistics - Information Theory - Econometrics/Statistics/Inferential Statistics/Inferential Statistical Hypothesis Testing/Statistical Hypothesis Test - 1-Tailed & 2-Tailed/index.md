---
title: "Statistical Hypothesis Test - 1-Tailed & 2-Tailed"
created: 2021-09-13T05:29:03.745-05:00
modified: 2023-09-13T20:33:39.466-05:00
parent: "[[Inferential Statistical Hypothesis Testing]]"
children: []
---
> [!expand]- Click here to expand...
> [[Statistical Hypothesis Test - 1-Tailed & 2-Tailed|Hypothesis Test 1-Tailed & 2-Tailed]] are dual to [[Confidence Interval (CI)|Confidence Interval - 1-Tailed & 2-Tailed]]
> - <strong>Two-Sided Hypothesis</strong> - 𝐻<sub>0</sub>: 𝜃 = 𝜃<sub>0</sub> against 𝐻<sub>𝑎</sub>: 𝜃 ≠ 𝜃<sub>0</sub>
> - <strong>One-Sided, Right-Tailed</strong> - 𝐻<sub>0</sub>: (𝜃 = 𝜃<sub>0</sub>) or (𝜃 ≤ 𝜃<sub>0</sub>) against 𝐻<sub>𝑎</sub>: 𝜃 \> 𝜃<sub>0</sub>
> - <strong>One-Sided, Left-Tailed</strong> - 𝐻<sub>0</sub>: (𝜃 = 𝜃<sub>0</sub>) or (𝜃 ≥ 𝜃<sub>0</sub>) against 𝐻<sub>𝑎</sub>: 𝜃 \< 𝜃<sub>0</sub>
>
> pick the null hypothesis (𝐻<sub>0</sub>) and alternative hypotheses (𝐻<sub>𝑎</sub>) based on your goals. For example:
> - <strong>two-tail hypothesis</strong>:
> 	- 𝐻<sub>0</sub> : Average Grade = 80%
> 	- 𝐻<sub>𝑎</sub> : Average Grade ≠ 80%
> - <strong>one-tail (right-tail) hypothesis</strong>:
> 	- 𝐻<sub>0</sub> : Average Grade = 80%
> 	- 𝐻<sub>𝑎</sub> : Average Grade \> 80%
> - <strong>one-tail (left-tail) hypothesis</strong>:
> 	- 𝐻<sub>0</sub> : Average Grade = 80%
> 	- 𝐻<sub>𝑎</sub> : Average Grade \< 80%

When you conduct a test of statistical significance (e.g. correlation, analysis of variance (ANOVA), regression, etc) you are given a [[Inferential Statistical Hypothesis Testing|p-value]] somewhere in the output

If your test statistic is symmetrically distributed, you can select 1 of 3 alternative hypotheses:
- 1 corresponds to a two-tailed test
- 2 of these correspond to one-tailed tests

The [[Inferential Statistical Hypothesis Testing|p-value]] presented is (almost always) for a two-tailed test.
- but how do you choose which test?
- is the p-value appropriate for your test?
- and, if it is not, how can you calculate the correct p-value for your test given the p-value in your output?

# 2-Tailed Test

If you are using a [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]] of 𝛼=0.05, a two-tailed test allots:
- HALF of your 𝛼 to testing the statistical significance in one direction
- HALF of your 𝛼 to testing the statistical significance in the other direction

This means that .025 is in each tail of the distribution of your test statistic.
###### For Example
- we may wish to compare the mean of a sample to a given value <em>x</em> using a t-test
- our [[Statistical Hypothesis Test - Null Distribution|null hypothesis]] is that the mean is equal to <em>x</em>
- a two-tailed test will test <strong>BOTH</strong>:
	- if the mean is significantly greater than <em>x</em>
	- if the mean is significantly less than <em>x</em>
- the mean is considered significantly different from <em>x </em>if the test statistic is in the top 2.5% or bottom 2.5% of its [[Probability Distributions|probability distribution]], resulting in a [[Inferential Statistical Hypothesis Testing|p-value]] less than 0.05
- we reject the null-hypothesis if the p-value is less than 0.05

two-tailed hypothesis test / [[CI - 1-Tailed & 2-Tailed|two-tailed CI]]

![[Statistical Hypothesis Test - 1-Tailed & 2-Tailed/1.png|358]]
# 1-Tailed Test

If you are using a [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]] of 𝛼=0.05, a one-tailed test allots:
- ALL of your 𝛼 to testing the statistical significance in the one direction of interest

This means that 0.05 is in one tail of the distribution of your test statistic.
###### For Example
- let’s return to our example comparing the mean of a sample to a given value <em>x</em> using a t-test
- our [[Statistical Hypothesis Test - Null Distribution|null hypothesis]] is that the mean is equal to <em>x</em>
- a one-tailed test will test <strong>EITHER</strong> (not both):
	- if the mean is significantly greater than <em>x </em>(upper/right-tailed test / [[CI - 1-Tailed & 2-Tailed|lower CI]])
	- if the mean is significantly less than <em>x </em>(lower/left-tailed test / [[CI - 1-Tailed & 2-Tailed|upper CI]])
- the mean is significantly greater than or less than <em>x </em>if the test statistic is in the top 5% of its [[Probability Distributions|probability distribution]] or bottom 5% of its probability distribution, resulting in a [[Inferential Statistical Hypothesis Testing|p-value]] less than 0.05
- we reject the null-hypothesis if the p-value is less than 0.05

(upper/right)-tailed hypothesis test / [[CI - 1-Tailed & 2-Tailed|lower CI]]?

![[Statistical Hypothesis Test - 1-Tailed & 2-Tailed/3.png]]

(lower/left)-tailed hypothesis test / [[CI - 1-Tailed & 2-Tailed|upper CI]]?

![[Statistical Hypothesis Test - 1-Tailed & 2-Tailed/2.png]]
# When is a 1-Tailed Test Appropriate?

Because the one-tailed test provides more power to detect an effect, you may be tempted to use a one-tailed test whenever you have a hypothesis about the direction of an effect. Before doing so, consider the consequences of missing an effect in the other direction. Imagine you have developed a new drug that you believe is an improvement over an existing drug. You wish to maximize your ability to detect the improvement, so you opt for a one-tailed test. In doing so, you fail to test for the possibility that the new drug is less effective than the existing drug. The consequences in this example are extreme, but they illustrate a danger of inappropriate use of a one-tailed test.

So when is a one-tailed test appropriate? If you consider the consequences of missing an effect in the untested direction and conclude that they are negligible and in no way irresponsible or unethical, then you can proceed with a one-tailed test. For example, imagine again that you have developed a new drug. It is cheaper than the existing drug and, you believe, no less effective. In testing this drug, you are only interested in testing if it less effective than the existing drug.  You do not care if it is significantly more effective. You only wish to show that it is not less effective. In this scenario, a one-tailed test would be appropriate.
# When is a 1-Tailed Test NOT Appropriate?

Choosing a one-tailed test for the sole purpose of attaining significance is not appropriate. Choosing a one-tailed test after running a two-tailed test that failed to reject the [[Statistical Hypothesis Test - Null Distribution|null hypothesis]] is not appropriate, no matter how "close" to significant the two-tailed test was. Using statistical tests inappropriately can lead to invalid results that are not replicable and highly questionable–a steep price to pay for a significance star in your results table!
