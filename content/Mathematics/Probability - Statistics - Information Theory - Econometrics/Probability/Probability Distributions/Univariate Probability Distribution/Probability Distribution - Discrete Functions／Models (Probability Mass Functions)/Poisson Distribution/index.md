---
title: "Poisson Distribution"
created: 2021-09-13T05:27:35.512-05:00
modified: 2023-10-23T16:19:47.168-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children:
  - "[[Poisson Distribution Derivation]]"
---
given a [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] number of events that happen within unit time (𝜆):
- the number of events occurring within that unit time has <strong>Poisson Distribution</strong>
- the time between events has [[Exponential Distribution]]
- the total time of 𝛼 events has [[Gamma Distribution]]

# Probability Mass Function

𝐏(𝑋=𝑥) = 𝑒<sup>−𝜆</sup>(𝜆<sup>𝑥</sup>/𝑥!) for 𝑥 = 0, 1, 2, ...

where:
- <em>𝜆</em> = frequency, [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] number of events to happen in unit time
- 𝑒 = 2.7183... see [[number e (Euler's number)]]
- 𝑥 = the number of "events" in question to happen in unit time

see: [[Binomial Distribution vs Poisson Distribution|Deriving Poisson Distribution from Binomial Distribution]]
# Expectation

𝐄\[𝑋\] = 𝜆

> [!expand]- proof
> - 𝐄\[𝑋\] = 𝛴<sub>0≤𝑥≤∞</sub>\[𝑥<strong>𝑓</strong>(𝑥)\]
> - 𝐄\[𝑋\] = 𝛴<sub>0≤𝑥≤∞</sub>\[𝑥𝑒<sup>-𝜆</sup>𝜆<sup>𝑥</sup>/𝑥!\]
> - 𝐄\[𝑋\] = 𝑒<sup>-𝜆</sup>𝛴<sub>0≤𝑥≤∞</sub>\[𝑥𝜆<sup>𝑥</sup>/𝑥!\]
> - 𝐄\[𝑋\] = 𝑒<sup>-𝜆</sup>𝛴<sub>0≤𝑥≤∞</sub>\[𝜆<sup>𝑥-1</sup>/(𝑥-1)!\]𝜆
> - 𝐄\[𝑋\] = 𝑒<sup>-𝜆</sup>𝑒<sup>𝜆</sup>𝜆 <font style="color: rgb(128,128,128);">\# via</font> [[Euler's Equation／Formula|e taylor series]]
> - 𝐄\[𝑋\] = 𝜆
# Variance

<strong>𝑉𝑎𝑟</strong>(𝑋) = 𝜆

> [!expand]- proof
> ![[Poisson Distribution/poisson-variance-calculation-1.png|500]]![[Poisson Distribution/poisson-variance-calculation-2.png|450]]
# Cumulative Distribution Function

𝐶𝐷𝐹(𝑋≤𝑥) = 𝛤(⌊𝑥+1⌋, 𝜆) / ⌊𝑥⌋!

where:
- 𝛤 - [upper incomplete gamma function](https://en.wikipedia.org/wiki/Upper_incomplete_gamma_function)

# Moment Generating Function$M_X(t) = e^{𝜆(e^t - 1)}$
# Example
Suppose you knew that the mean number of calls to a fire station on a weekday is 8. What is the probability that on a given weekday there would be 11 calls? This problem can be solved using the following formula based on the Poisson distribution

𝜆 = 8, therefore PMF is
- 𝐏(𝑋=𝑥) = 𝑒<sup>−8</sup>(8<sup>𝑥</sup>/𝑥!)

what's the probability that on a given weekday there would be 11 calls?
- 𝐏(𝑋=11) = 𝑒<sup>−8</sup>(8<sup>11</sup>/11!)
- 𝐏(𝑋=11) = 0.072

###### Plot PMF given 𝜆=8, for 0≤𝑥≤12
![[Poisson Distribution/poisson-plot.png|310x202]]
# Subpages
- [[Gamma Distribution vs Poisson Distribution]]
- [[Poisson vs Exponential]]
- [[Binomial Distribution vs Poisson Distribution]]
