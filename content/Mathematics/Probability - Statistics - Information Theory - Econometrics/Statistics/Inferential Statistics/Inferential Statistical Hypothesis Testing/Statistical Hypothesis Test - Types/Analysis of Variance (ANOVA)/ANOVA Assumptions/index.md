---
title: "ANOVA Assumptions"
created: 2021-09-13T05:29:05.868-05:00
modified: 2021-09-13T05:29:05.868-05:00
parent: "[[Analysis of Variance (ANOVA)]]"
children: []
---
To use the ANOVA test we made the following assumptions:
- each group sample is drawn from a normally distributed population
- all populations have a common variance
- all samples are drawn independently of each other
- within each sample, the observations are sampled randomly and independently of each other
- factor effects are additive

The presence of outliers can also cause problems. In addition, we need to make sure that the <em>F</em> statistic is well behaved. In particular, the <em>F</em> statistic is relatively robust to violations of normality provided:
- The populations are symmetrical and uni-modal.
- The sample sizes for the groups are equal and greater than 10

In general, as long as the sample sizes are equal (called a <strong>balanced model</strong>) and sufficiently large, the normality assumption can be violated provided the samples are symmetrical or at least similar in shape (e.g. all are negatively skewed).

The <em>F</em> statistic is not so robust to violations of homogeneity of variances. A rule of thumb for balanced models is that if the ratio of the largest variance to smallest variance is less than 3 or 4, the F-test will be valid. If the sample sizes are unequal then smaller differences in variances can invalidate the F-test. Much more attention needs to be paid to unequal variances than to non-normality of data.

We now look at how to test for violations of these assumptions and how to deal with any violations when they occur.
- Testing that the population is normally distributed (see [Testing for Normality and Symmetry](https://www.real-statistics.com/tests-normality-and-symmetry/))
- Testing for homogeneity of variances and dealing with violations (see [Homogeneity of Variances](https://www.real-statistics.com/homogeneity-variances/))
- Testing for and dealing with outliers (see [Outliers in ANOVA](https://www.real-statistics.com/outliers-anova/))
