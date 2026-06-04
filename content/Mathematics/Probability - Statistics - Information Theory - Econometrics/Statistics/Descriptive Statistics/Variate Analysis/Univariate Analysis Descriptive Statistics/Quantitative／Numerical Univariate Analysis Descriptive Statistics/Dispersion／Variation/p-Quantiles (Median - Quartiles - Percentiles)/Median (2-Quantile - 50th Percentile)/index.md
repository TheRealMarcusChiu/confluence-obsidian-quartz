---
title: "Median (2-Quantile - 50th Percentile)"
created: 2021-09-13T05:28:51.568-05:00
modified: 2024-02-07T13:24:39.996-06:00
parent: "[[p-Quantiles (Median - Quartiles - Percentiles)]]"
children: []
---
###### Median (2-Quantile)
````excerpt
- is a type of [[Central Tendency]]
- is a type of [[p-Quantiles (Median - Quartiles - Percentiles)|p-quantile]] i.e.:
	- 2-quantile
	- 50th [[Percentiles (100-Quantile)|percentile]]
- is the middle value of a distribution, separating it into 2 equal areas
- the median of a random variable 𝑋 is a value 𝑚 such that:
	- $𝐏(X≤m) = 1/2$
	- $𝐏(X≥m) = 1/2$
````
^excerpt

# Median - Population vs Sample
- <strong><strong>population median (𝑀)</strong></strong> is a number that is exceeded with a probability no greater than 0.5 and is preceded with a probability no greater than 0.5
- <strong>sample median (𝑀̅)</strong> is a number that is exceeded by at most a half of observations and is preceded by at most a half of observations

# Computing Median

continuous
- 𝑀 = <strong>𝐶𝐷𝐹</strong><sup>-1</sup>(0.5)

discrete, 2 cases:
- interval of roots - often the middle of this interval is reported as the median
- no roots - smallest 𝑥 with <strong>𝐶𝐷𝐹</strong>(𝑥) ≥ 0.5 is the median

# Example Computation
###### Continuous Case

[[Exponential Distribution|exponential distribution]]
- <strong>𝐶𝐷𝐹</strong>(𝑥) = 1 - 𝑒<sup>−</sup><sup>𝜆𝑥</sup> for 𝑥 \> 0
- <strong>𝐶𝐷𝐹</strong><sup>-1</sup>(𝑥) = 𝑙𝑛(1/(1 - 𝑥)) / 𝜆
- <strong>𝐶𝐷𝐹</strong><sup>-1</sup>(0.5) = 𝑙𝑛(1/(1 - 0.5)) / 𝜆
- <strong>𝐶𝐷𝐹</strong><sup>-1</sup>(0.5) = 𝑙𝑛(2) / 𝜆
- 𝑀 = 𝑙𝑛(2) / 𝜆

###### Discrete Case
[[Binomial Distribution|binomial distribution]]

<strong>𝐶𝐷𝐹</strong>(𝑛, 𝑝, 𝑥) = 𝛴<sub>0≤𝑖≤𝑥</sub>\[(𝑛 Choose 𝑖)𝑝<sup>𝑖</sup>(1-𝑝)<sup>𝑛-𝑖</sup>\]

two cases for binomial distribution

![[Median (2-Quantile - 50th Percentile)/median-calculation-for-discrete-distributions.png]]
