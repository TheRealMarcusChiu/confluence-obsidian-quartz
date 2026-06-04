---
title: "Nonparametric Bootstrap"
created: 2021-09-13T05:27:53.685-05:00
modified: 2021-09-13T05:27:53.685-05:00
parent: "[[Bootstrap／Bootstrapping (Statistics)]]"
children: []
---
reading prerequisite: [[Nonparametric Bootstrap]]
### Nonparametric Bootstrap With Mathematical Syntax

given
- a sample {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} where each 𝑋<sub>𝑖</sub> is drawn i.i.d. from a population/distribution with [[Nonparametric Bootstrap|𝑐𝑑𝑓]] 𝐹 (which is not completely known)

parameters of interest
- 𝜃 = 𝑔(𝐹) where 𝑔 is a feature of interest (e.g. mean, variance, median, quantiles, etc) estimated by 𝜃ˆ

issue
- find [[Nonparametric Bootstrap|sampling distribution]] of 𝜃ˆ in order to compute:
	- [[Nonparametric Bootstrap|standard error]] of 𝜃ˆ
	- [[Nonparametric Bootstrap|confidence interval]] for 𝜃ˆ

solution
- approximate 𝐹 with 𝐹ˆ
- 𝐹ˆ is the [[Nonparametric Bootstrap|empirical distribution]] based on sample {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}
- 𝜃ˆ = 𝑔(𝐹ˆ)
- simulate a large number of samples from 𝐹ˆ
- for each sample calculate its statistic 𝜃ˆ and now we have a sample distribution of 𝜃ˆ

### Nonparametric Bootstrap Pseudocode

choose hyper-parameters
- choose a statistic 𝜃ˆ of interest
- choose a number of bootstrap samples to perform
- choose a sample size of each bootstrap sample

algorithm
- 𝜃ˆ-statistics = \[\]
- for each bootstrap sample
	- bootstrap-sample = sample from data-set with replacement until sample size is reached
	- 𝜃ˆ-statistics.add(calculate statistic 𝜃ˆ on bootstrap-sample)
- create histogram of 𝜃ˆ-statistics
- now we a [[Nonparametric Bootstrap|sampling distribution]] of 𝜃ˆ

### Nonparametric Bootstrap - Worked Example

> [!expand]- Click here to expand...
> We can make the bootstrap procedure concrete with a small worked example. We will work through one iteration of the procedure.
>
> Imagine we have a data-set with 6 observations:
> ```
> [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
> ```
>
> The first step is to choose the size of the sample. Here, we will use 4.
>
> Next, we must randomly choose the first observation from the dataset. Let’s choose 0.2.
> ```
> sample = [0.2]
> ```
>
> This observation is returned to the dataset and we repeat this step 3 more times.
> ```
> sample = [0.2, 0.1, 0.2, 0.6]
> ```
>
> We now have our data sample. The example purposefully demonstrates that the same value can appear zero, one or more times in the sample. Here the observation 0.2 appears twice.
>
> An estimate can then be calculated on the drawn sample.
> ```
> statistic = calculation([0.2, 0.1, 0.2, 0.6])
> ```
>
> Those observations not chosen for the sample may be used as out of sample observations.
> ```
> oob = [0.3, 0.4, 0.5]
> ```
>
> In the case of evaluating a machine learning model, the model is fit on the drawn sample and evaluated on the out-of-bag sample.
> ```
> train = [0.2, 0.1, 0.2, 0.6]
> test = [0.3, 0.4, 0.5]
> model = fit(train)
> statistic = evaluate(model, test)
> ```
>
> That concludes one repeat of the procedure. It can be repeated 30 or more times to give a sample of calculated statistics.
> ```
> statistics = [...]
> ```
>
> This sample of statistics can then be summarized by calculating a mean, standard deviation, or other summary values to give a final usable estimate of the statistic.
> ```
> estimate = mean(statistics)
> ```
