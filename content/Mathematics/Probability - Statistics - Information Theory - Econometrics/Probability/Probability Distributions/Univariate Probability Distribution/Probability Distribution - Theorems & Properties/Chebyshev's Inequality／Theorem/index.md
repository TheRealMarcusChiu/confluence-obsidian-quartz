---
title: "Chebyshev's Inequality／Theorem"
created: 2021-09-13T05:27:38.444-05:00
modified: 2024-02-07T13:21:18.813-06:00
parent: "[[Probability Distribution - Theorems & Properties]]"
children: []
---
###### Chebyshev's Inequality/Theorem
````excerpt
- guarantees that, for a wide class of [[Probability Distributions|probability distributions]], no more than a certain fraction of values can be more than a certain distance from the mean. Specifically, no more than 1/𝑘<sup>2</sup> of the distribution's values can be more than 𝑘 standard deviations away from the mean (or equivalently, at least 1 − 1/𝑘<sup>2</sup> of the distribution's values are within k standard deviations of the mean)
- In practical usage, in contrast to the 68–95–99.7 rule, which applies to normal distributions, Chebyshev's inequality is weaker, stating that a minimum of just 75% of values must lie within two standard deviations of the mean and 89% within three standard deviations
````
^excerpt

# Theorem Statement \#1

Any random variable 𝑋 with expectation 𝜇 = 𝐄(𝑋) and variance 𝜎<sup>2</sup>= <strong>𝑉𝑎𝑟</strong>(𝑋) outputs a value OUTSIDE the interval \[𝜇−𝜀, 𝜇+𝜀\] with probability of at MOST (𝜎/𝜀)<sup>2</sup>, that is
- 𝑷(|𝑋 - 𝜇| \> 𝜀) ≤ (𝜎/𝜀)<sup>2</sup>
- 
> [!expand]- derivation
> - 𝑷(|𝑋 - 𝜇| \> 𝜀) = 𝑷((𝑋 - 𝜇)<sup>2</sup> \> 𝜀<sup>2</sup>)
> - 𝑷(|𝑋 - 𝜇| \> 𝜀) ≤ 𝐄\[(𝑋 - 𝜇)<sup>2</sup>\] / 𝜀<sup>2</sup><font style="color: rgb(122,134,154);"> \# Because of </font>[[Markov's Inequality／Theorem|Markov's Inequality]]
> - 𝑷(|𝑋 - 𝜇| \> 𝜀) ≤ 𝜎<sup>2</sup> / 𝜀<sup>2</sup>

Any random variable 𝑋 with expectation 𝜇 = 𝐄(𝑋) and variance 𝜎<sup>2</sup>= <strong>𝑉𝑎𝑟</strong>(𝑋) outputs a value WITHIN the interval \[𝜇−𝜀, 𝜇+𝜀\] with probability of at LEAST 1 − (𝜎/𝜀)<sup>2</sup>, that is
- 𝑷(|𝑋 - 𝜇| ≤ 𝜀) ≥ 1 - (𝜎/𝜀)<sup>2</sup>

# Theorem Statement \#2

Any random variable 𝑋 with expectation 𝜇 = 𝐄(𝑋) and variance 𝜎<sup>2</sup> = 𝑉𝑎𝑟(𝑋) outputs a value OUTSIDE the interval \[𝜇−𝜀𝜎, 𝜇+𝜀𝜎\] with probability of at MOST 1/𝜀<sup>2</sup>, that is
- 𝑷(|𝑋 - 𝜇| \> 𝜀𝜎) ≤ 1/𝜀<sup>2</sup>

Any random variable 𝑋 with expectation 𝜇 = 𝐄(𝑋) and variance 𝜎<sup>2</sup> = 𝑉𝑎𝑟(𝑋) outputs a value WITHIN the interval \[𝜇−𝜀𝜎, 𝜇+𝜀𝜎\] with probability of at LEAST 1 - 1/𝜀<sup>2</sup>, that is
- 𝑷(|𝑋 - 𝜇| ≤ 𝜀𝜎) ≥ 1 - 1/𝜀<sup>2</sup>

# Theorem Proof
- 𝜎<sup>2</sup>= <strong>𝑉𝑎𝑟</strong>(𝑋)
- 𝜎<sup>2</sup>= 𝛴<sub>all 𝑥</sub>(𝑥 − 𝜇)<sup>2</sup>𝐏(𝑥)
- 𝜎<sup>2</sup>≥ 𝛴<sub>only 𝑥:|𝑥-𝜇|\>𝜀</sub>(𝑥 − 𝜇)<sup>2</sup>𝐏(𝑥)
- 𝜎<sup>2</sup>≥ 𝛴<sub>only 𝑥:|𝑥-𝜇|\>𝜀</sub>(𝜀)<sup>2</sup>𝐏(𝑥)
- 𝜎<sup>2</sup>≥ (𝜀)<sup>2</sup>𝛴<sub>only 𝑥:|𝑥-𝜇|\>𝜀</sub>𝐏(𝑥)
- 𝜎<sup>2</sup>≥ (𝜀)<sup>2</sup>𝐏(|𝑋 - 𝜇| \> 𝜀)
- 𝜎<sup>2</sup>/𝜀<sup>2</sup>≥ 𝐏(|𝑋 - 𝜇| \> 𝜀)
- (𝜎/𝜀)<sup>2</sup>≥ 𝐏(|𝑋 - 𝜇| \> 𝜀)
