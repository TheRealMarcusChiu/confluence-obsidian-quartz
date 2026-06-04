---
title: "Binomial Distribution - Approximating with Poisson Distribution"
created: 2021-09-13T05:27:32.444-05:00
modified: 2021-11-11T19:19:51.212-06:00
parent: "[[Binomial Distribution Special Cases - (Poisson Distribution and Normal Distribution)]]"
children: []
---
see also: [[Binomial Distribution vs Poisson Distribution]]

<strong>Binomial Distribution Approximating with Poisson</strong> is 1 of 2 [[Binomial Distribution Special Cases - (Poisson Distribution and Normal Distribution)|Binomial Distribution's Special Cases]]
# Binomial ≈ Poisson

𝐵𝑖𝑛𝑜𝑚𝑖𝑎𝑙(𝑛,𝑝) ≈ 𝑃𝑜𝑖𝑠𝑠𝑜𝑛(<em>λ</em>)

where:
- 𝑛 ≥ 30
- 𝑝 ≤ 0.05
- 𝑛𝑝 = 𝜆

When 𝑝 is large (𝑝 ≥ 0.95), the 𝑃𝑜𝑖𝑠𝑠𝑜𝑛 approximation is applicable too. The probability of a failure (𝑞 = 1 − 𝑝) is small in this case. Then, we can approximate the number of failures, which is also Binomial, by a Poisson distribution

Mathematically, it means the closeness of Binomial and Poisson [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function]]:

![[Binomial Distribution - Approximating with Poisson Distribution/closeness-of-binomial-and-poisson-pmf.png|301]]
# Example

97% of electronic messages are transmitted with no error. What is the probability that out of 200 messages, at least 195 will be transmitted correctly?

Let 𝑋 be the number of correctly transmitted messages. It is the number of successes in 200 Bernoulli trials, thus 𝑋 is Binomial with 𝑛 = 200 and 𝑝 = 0.97. The Poisson approximation cannot be applied to 𝑋 because 𝑝 is too large. However, the number of failures 𝑌 is also Binomial, with parameters 𝑛 = 200 and 𝑞 = 0.03, and it is approximately Poisson with <em>𝜆</em> = 𝑛𝑞 = 6
- 𝑃 {𝑋 ≥ 195} = 𝑃 {𝑌 ≤ 5}
- 𝑃 {𝑌 ≤ 5} = 𝑃𝑜𝑖𝑠𝑠𝑜𝑛-𝐶𝐷𝐹<sub>𝑌</sub>(5)
- 𝑃 {𝑌 ≤ 5} = 𝛴(𝑒<sup>-6</sup>)(6<sup>𝑥</sup>/𝑥!)
- 𝑃 {𝑌 ≤ 5} = (𝑒<sup>-6</sup>)𝛴<sub>0≤𝑥≤5</sub>(6<sup>𝑥</sup>/𝑥!)
- 𝑃 {𝑌 ≤ 5} ≈ 0.445680
- 𝑃 {𝑋 ≥ 195} ≈ 0.445680

There is a great variety of applications involving a large number of trials with a small probability of success. If the trials are not independent, the number of successes is not Binomial, in general. However, if dependence is weak, the use of Poisson approximation in such problems can still produce remarkably accurate results
