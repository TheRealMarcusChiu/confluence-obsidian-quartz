---
title: "Exponential Distribution"
created: 2021-09-13T05:27:25.097-05:00
modified: 2023-08-30T12:24:52.599-05:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
given a [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] number of events that happen within unit time (𝜆):
- the time between events has <strong>Exponential Distribution</strong>
- the number of events occurring within a unit time has [[Poisson Distribution]]
- the total time of 𝛼 events has [[Gamma Distribution]]

# Probability Density Function
𝑓(𝑋=𝑥) = 𝜆𝑒<sup>−𝜆𝑥</sup><sup></sup>for 𝑥 \> 0

where:
- 𝜆 = number of events per unit time (i.e. inverse of average time between events)
- 𝑒 = 2.71828
- 𝑥 = is the time between events in question
- 𝑋 = is random variable with exponential distribution

see [[Poisson vs Exponential|Deriving Exponential Distribution from Poisson Distribution]]
# Expectation

𝐄\[𝑋\] = 1/𝜆

> [!expand]- proof
> - 𝐄\[𝑋\] = ₀∫<sup>∞</sup>𝑥𝑓(𝑥)𝑑𝑥
> - 𝐄\[𝑋\] = ₀∫<sup>∞</sup>𝑥𝜆𝑒<sup>−𝜆𝑥</sup>𝑑𝑥
> - 𝐄\[𝑋\] = 𝜆 ₀∫<sup>∞</sup>𝑥𝑒<sup>−𝜆𝑥</sup>𝑑𝑥
> - by [[Integration by Parts]]
> 	- 𝑢 = 𝑥
> 	- 𝑑𝑣 = 𝑒<sup>−𝜆𝑥</sup>
> 	- 𝑑𝑢 = 𝑑𝑥
> 	- 𝑣 = -(1/𝜆)𝑒<sup>−𝜆𝑥</sup>
> - 𝐄\[𝑋\] = 𝜆 \[𝑢𝑣₀|<sup>∞</sup>- ₀∫<sup>∞</sup>𝑣𝑑𝑢\]
> - 𝐄\[𝑋\] = 𝜆 \[-(𝑥/𝜆)𝑒<sup>−𝜆𝑥</sup>₀|<sup>∞</sup>- ₀∫<sup>∞</sup>-(1/𝜆)𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\]
> - 𝐄\[𝑋\] = 𝜆 \[0 - ₀∫<sup>∞</sup>-(1/𝜆)𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\]
> - 𝐄\[𝑋\] = 𝜆 \[0 + (1/𝜆) ₀∫<sup>∞</sup>𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\]
> - 𝐄\[𝑋\] = ₀∫<sup>∞</sup>𝑒<sup>−𝜆𝑥</sup>𝑑𝑥
> - 𝐄\[𝑋\] = -(1/𝜆)𝑒<sup>−𝜆𝑥</sup>₀|<sup>∞</sup>
> - 𝐄\[𝑋\] = -(1/𝜆)𝑒<sup>−𝜆∞</sup>- (-(1/𝜆)𝑒<sup>−𝜆0</sup>)<sup></sup>
> - 𝐄\[𝑋\] = -(1/𝜆)𝑒<sup>−𝜆∞</sup>+ (1/𝜆)
> - 𝐄\[𝑋\] = 0+ (1/𝜆)
> - 𝐄\[𝑋\] = 1/𝜆
# Variance

𝑉𝑎𝑟(𝑋) = 1/𝜆<sup>2</sup>

> [!expand]- proof
> - 𝑉𝑎𝑟(𝑋) = ₀∫<sup>∞</sup>𝑥<sup>2</sup>𝑓(𝑥)𝑑𝑥 - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = ₀∫<sup>∞</sup>𝑥<sup>2</sup>𝜆𝑒<sup>−𝜆𝑥</sup>𝑑𝑥 - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝜆 ₀∫<sup>∞</sup>𝑥<sup>2</sup>𝑒<sup>−𝜆𝑥</sup>𝑑𝑥 - (1/𝜆)<sup>2</sup>
> - by [[Integration by Parts]]
> 	- 𝑢 = 𝑥<sup>2</sup>
> 	- 𝑑𝑣 = 𝑒<sup>−𝜆𝑥</sup>
> 	- 𝑑𝑢 = 2𝑥𝑑𝑥
> 	- 𝑣 = -(1/𝜆)𝑒<sup>−𝜆𝑥</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝜆 \[𝑢𝑣₀|<sup>∞</sup>- ₀∫<sup>∞</sup>𝑣𝑑𝑢\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝜆 \[-(𝑥<sup>2</sup>/𝜆)𝑒<sup>−𝜆𝑥</sup>₀|<sup>∞</sup>- ₀∫<sup>∞</sup>-(2/𝜆)𝑥𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝜆 \[0 - ₀∫<sup>∞</sup>-(2/𝜆)𝑥𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝜆 \[(2/𝜆) ₀∫<sup>∞</sup>𝑥𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2₀∫<sup>∞</sup>𝑥𝑒<sup>−𝜆𝑥</sup>𝑑𝑥 - (1/𝜆)<sup>2</sup>
> - by [[Integration by Parts]]
> 	- 𝑢 = 𝑥
> 	- 𝑑𝑣 = 𝑒<sup>−𝜆𝑥</sup>
> 	- 𝑑𝑢 = 𝑑𝑥
> 	- 𝑣 = -(1/𝜆)𝑒<sup>−𝜆𝑥</sup>
>
> - 𝑉𝑎𝑟(𝑋) = 2 \[𝑢𝑣₀|<sup>∞</sup>- ₀∫<sup>∞</sup>𝑣𝑑𝑢\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2 \[-(𝑥/𝜆)𝑒<sup>−𝜆𝑥</sup>₀|<sup>∞</sup>- ₀∫<sup>∞</sup>-(1/𝜆)𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2 \[0 - ₀∫<sup>∞</sup>-(1/𝜆)𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2 \[0 + (1/𝜆) ₀∫<sup>∞</sup>𝑒<sup>−𝜆𝑥</sup>𝑑𝑥\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆₀∫<sup>∞</sup>𝑒<sup>−𝜆𝑥</sup>𝑑𝑥 - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆₀∫<sup>∞</sup>𝑒<sup>−𝜆𝑥</sup>𝑑𝑥 - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆 \[-(1/𝜆)𝑒<sup>−𝜆𝑥</sup>₀|<sup>∞</sup>\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆 \[-(1/𝜆)𝑒<sup>−𝜆∞</sup>- (-(1/𝜆)𝑒<sup>−𝜆0</sup>)\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆 \[-(1/𝜆)𝑒<sup>−𝜆∞</sup>+ (1/𝜆)\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆 \[0 + (1/𝜆)\] - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2/𝜆 (1/𝜆) - (1/𝜆)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = (2/𝜆<sup>2</sup>) - (1/𝜆<sup>2</sup>)
> - 𝑉𝑎𝑟(𝑋) = 1/𝜆<sup>2</sup>
# Cumulative Distribution Function (𝐶𝐷𝐹)

𝐶𝐷𝐹(𝑥) = 1 - 𝑒<sup>−𝜆𝑥</sup>

> [!expand]- proof
> definite integration from 0 to 𝑥
> - 𝐶𝐷𝐹(𝑥) = ₀∫<sup>ˣ</sup>𝑓(𝑥)𝑑𝑥
> - 𝐶𝐷𝐹(𝑥) = -𝑒<sup>−𝜆𝑥</sup>+ constant ₀|<sup>ˣ</sup>
> - 𝐶𝐷𝐹(𝑥) = (-𝑒<sup>−𝜆𝑥</sup>+ constant) - (-𝑒<sup>−𝜆0</sup>+ constant)
> - 𝐶𝐷𝐹(𝑥) = (-𝑒<sup>−𝜆𝑥</sup>+ constant) - (-1<sup></sup>+ constant)
> - 𝐶𝐷𝐹(𝑥) = -𝑒<sup>−𝜆𝑥</sup>+ constant + 1 - constant
> - 𝐶𝐷𝐹(𝑥) = 1 - 𝑒<sup>−𝜆𝑥</sup>
>
> definite integration from 0 to INF
> - ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥 = ₀∫<sup>∞</sup>𝜆𝑒<sup>−𝜆𝑥</sup>𝑑𝑥
> - ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥 = -𝑒<sup>−𝜆𝑥</sup>+ constant ₀|<sup>∞</sup>
> - ₀∫<sup>∞</sup>𝑓(𝑥)<strong>𝑑</strong>𝑥 = (-𝑒<sup>−𝜆∞</sup>+ constant) - (-𝑒<sup>−𝜆0</sup>+ constant)
> - ₀∫<sup>∞</sup>𝑓(𝑥)<strong>𝑑</strong>𝑥 = (0<sup></sup>+ constant) - (-1<sup></sup>+ constant)
> - ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥 = 0<sup></sup>+ constant + 1 - constant
> - ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥 = 1
>
> indefinite integration of probability density function
> - ∫𝑓(𝑥)𝑑𝑥 = ∫𝜆𝑒<sup>−𝜆𝑥</sup>𝑑𝑥
> - ∫𝑓(𝑥)𝑑𝑥 = -𝑒<sup>−𝜆𝑥</sup>+ constant
# Example 1
Let 𝑋 = amount number of minutes a postal clerk spends with his or her customer. The time is known to have an [[Exponential Distribution|exponential distribution]] with the average amount of time equal to 4 minutes

𝜆 = 0.25 customers per minute, therefore the probability density function is:

𝑓(𝑋=𝑥) = 0.25 𝑒<sup>−0.25𝑥</sup>for 𝑥 \> 0
###### ![[Exponential Distribution/exponential-distribution-plot.png|301]]
# Example 2

Jobs are sent to a printer at an average rate of 3 jobs per hour.

What is the expected time between jobs?
- 𝜆 = 3
- 𝐄\[𝑇\] = 1/𝜆 = 1/3 hours = 20 minutes

What is the probability that the next job is sent within 5 minutes?
- 𝑷 {𝑇 \< 5 minutes} = 𝑷 {𝑇 \< 1/12 hours}
- 𝑷 {𝑇 \< 5 minutes} = 𝐶𝐷𝐹(𝑇 = 1/12)
- 𝑷 {𝑇 \< 5 minutes} = 1 - 𝑒<sup>−3(1/12)</sup>
- 𝑷 {𝑇 \< 5 minutes} = 1 - 𝑒<sup>−1/4</sup>
- 𝑷 {𝑇 \< 5 minutes} = 0.221199..

# Subpages
- [[Poisson vs Exponential]]
- Exponential Distribution is the only Continuous Distribution with the [[Exponential Distribution|Memoryless Property]] (similar to its discrete counterpart [[Geometric Distribution]])
