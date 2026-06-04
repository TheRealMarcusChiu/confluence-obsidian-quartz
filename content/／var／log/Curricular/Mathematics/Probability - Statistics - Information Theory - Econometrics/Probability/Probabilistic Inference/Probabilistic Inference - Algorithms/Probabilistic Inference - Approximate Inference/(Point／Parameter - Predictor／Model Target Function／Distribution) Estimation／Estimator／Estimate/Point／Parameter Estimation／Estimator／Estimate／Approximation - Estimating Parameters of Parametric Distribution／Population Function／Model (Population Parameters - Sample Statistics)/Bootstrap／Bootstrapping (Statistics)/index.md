---
title: "Bootstrap／Bootstrapping (Statistics)"
created: 2021-09-13T05:27:51.609-05:00
modified: 2023-09-18T13:13:12.043-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[Bootstrap Confidence Intervals]]"
  - "[[Nonparametric Bootstrap]]"
---
###### Bootstrap/Bootstrapping
````excerpt
- is used to estimate a parameter <em>η</em> of the distribution of a sample statistic 𝜃ˆ, via [[Monte Carlo (MC) Methods／Experiments／Simulations|Monte Carlo simulations]] when it is too difficult to do it analytically
- is a statistical procedure that resamples a single dataset to create many simulated samples. This process allows for the calculation of standard errors, confidence intervals, and hypothesis testing
````
^excerpt

# Why Use Bootstrap

> [!expand]- Example - Computing Standard Error of Statistic
> For example, we have analytical formulas for deriving [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard errors]] of statistics: [[Sample Mean|sample mean]] & [[Sample Proportion|sample proportion]]:
> - 𝑆𝐸(𝑋̅) = 𝑠𝑞𝑟𝑡(𝜎<sup>2</sup>/𝑛) <font style="color: rgb(128,128,128);">\# standard error</font>
> - 𝑆𝐸ˆ(𝑋̅) = 𝑠𝑞𝑟𝑡(𝑠<sup>2</sup>/𝑛) <font style="color: rgb(128,128,128);">\# estimated standard error</font>
> - 𝑆𝐸(𝑝̅) = 𝑠𝑞𝑟𝑡\[𝑝(1-𝑝)/𝑛\] <font style="color: rgb(128,128,128);">\# standard error</font>
> - 𝑆𝐸ˆ(𝑝̅) = 𝑠𝑞𝑟𝑡\[𝑝̅(1-𝑝̅)/𝑛\] <font style="color: rgb(128,128,128);">\# estimated standard error</font>
>
> However, computing standard errors of other statistics (e.g. sample median, sample variance, sample interquartile range, etc) is almost always impossible!
>
> For example, to compute the variance of a sample median 𝑉𝑎𝑟(𝑀̅):
> - take all possible samples of size 𝑛 from the population
> - for each sample compute the sample median 𝑀̅
> - then calculate their variance: 𝑉𝑎𝑟(𝑀̅) = 𝐄\[(𝑀̅ - 𝐄\[𝑀̅\])<sup>2</sup>\]
>
> Typically we cannot observe all possible samples, so how can we estimate 𝑉𝑎𝑟(𝑀̅) based on just one sample? We use bootstrap!
# Bootstrap Terminology
- <strong>bootstrap sample</strong> - is a random sample drawn with replacement from the observed sample 𝑆 of the same size as 𝑆
- <strong>bootstrap distribution</strong> - is the distribution of a statistic across a set of bootstrap samples
- <strong>bootstrap estimator</strong> - is an estimator that is computed on basis of bootstrap samples

# Bootstrap Algorithm

to estimate parameter <em>η</em> of the distribution of 𝜃ˆ:
- first obtain a set of 𝑏 bootstrap samples {𝐵<sub>1</sub>, ..., 𝐵<sub>𝑏</sub>}. There are 2 ways, either:
	- consider all possible bootstrap samples drawn with replacement from the given sample 𝑆 (often intractable)
	- generate a large number 𝑏 of random bootstrap samples drawn with replacement from the given sample 𝑆
- for each bootstrap sample 𝐵<sub>𝑖</sub> compute statistic 𝜃ˆ\*<sub>𝑖</sub> the same way 𝜃ˆ was computed from the original sample 𝑆
- estimate the parameter <em>η</em> of this bootstrap distribution {𝜃ˆ\*<sub>𝑖</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}

![[Bootstrap／Bootstrapping (Statistics)/sample-from-sample-bootstrap.png|500]]
# Parametric Bootstrap vs Nonparametric Bootstrap

> [!expand]- Click here to expand...
> the approximated population can be done in 2 ways:
> - <strong>nonparametric bootstrap</strong> - the approximated population is that one sample of size 𝑛 taken from the original population 𝑃. This works because 𝑃ˆ close to true 𝑃  when sample size 𝑛 is large
> - <strong>parametric bootstrap</strong> - we know the population distribution type (e.g. [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]], [[Poisson Distribution|poisson]], etc), but the distribution parameters 𝜃 are unknown. the approximated population is the population distribution form but with 𝜃 replaced by [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimates]] 𝜃ˆ
>
> given a sample of size 𝑛 {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} where each 𝑋<sub>𝑖</sub> is i.i.d. drawn from a population with [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|𝑐𝑑𝑓]] 𝐹
> ###### Parametric Bootstrap
>
> use parametric bootstrap when [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|𝑐𝑑𝑓]] 𝐹 distribution type (e.g. [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]], [[Poisson Distribution|poisson]], etc) of population is <strong><font style="color: rgb(0,128,0);">KNOWN</font></strong>, but the distribution parameters 𝜃 is unknown
>
> estimated distribution 𝐹ˆ is the same as 𝐹 but with 𝜃 replaced by [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimates]] 𝜃ˆ
> - e.g. if 𝐹=𝑁(μ,𝜎<sup>2</sup>) then 𝐹ˆ=𝑁(𝑋̅,𝑠<sup>2</sup>)
> 	- 𝑋̅ is computed from sample {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
> 	- 𝑠<sup>2</sup>is computed from sample {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
>
> simulate i.i.d. draws {𝑋<sub>1</sub>\*, ..., 𝑋<sub>𝑛</sub>\*} from 𝐹ˆ
> ###### Nonparametric Bootstrap
>
> use non-parametric bootstrap when [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|𝑐𝑑𝑓]] 𝐹 distribution type (e.g. [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal]], [[Poisson Distribution|poisson]], etc) of population is <strong><font style="color: rgb(255,0,0);">UNKNOWN</font></strong>
>
> estimated distribution 𝐹ˆ is [[Empirical／Sample Distribution|empirical distribution (cdf)]], where:
> - 𝐹ˆ(𝑥) = (1/𝑛) ∑<sub>1≤𝑖≤𝑛</sub>𝐼(𝑋<sub>𝑖</sub>≤𝑥)
> - where:
> 	- 𝐼(𝑋<sub>𝑖</sub>≤𝑥) - is the [[Indicator Function - Characteristic Function|indicator function]], that equals:
> 		- 1 when sample 𝑋<sub>𝑖</sub>is less than or equal to 𝑥
> 		- 0 otherwise
> 	- 𝑋<sub>𝑖</sub>'s are from the given sample {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
>
> simulate i.i.d. draws {𝑋<sub>1</sub>\*, ..., 𝑋<sub>𝑛</sub>\*} from 𝐹ˆ
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [[bootstrap.pdf]]
