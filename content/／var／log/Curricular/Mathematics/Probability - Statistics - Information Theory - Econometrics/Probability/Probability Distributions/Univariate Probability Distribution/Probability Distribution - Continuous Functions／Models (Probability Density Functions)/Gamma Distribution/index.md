---
title: "Gamma Distribution"
created: 2021-09-13T05:27:25.992-05:00
modified: 2023-09-18T00:03:33.757-05:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
given the mean number of events per unit time (𝜆):
- the total time of 𝛼 events has <strong>Gamma Distribution</strong>
- the number of events occurring within that unit time has [[Poisson Distribution]]
- the time between events has [[Exponential Distribution]]

# Probability Density Function \#1
- 𝑓(𝑥) = (𝜆<sup>𝛼</sup>/𝛤(𝛼))·𝑥<sup>𝛼-1</sup>·𝑒<sup>-𝜆𝑥</sup><font style="color: rgb(128,128,128);">\# for 𝑥 \> 0</font>

where:
- 𝛼 - number of events
- 𝜆 - number of events per unit time
- 𝛤(𝛼) = [[Gamma Function|gamma function]] = (𝛼 - 1)!

special cases of a Gamma Distribution:
- Gamma(𝛼=1, 𝜆) = [[Exponential Distribution|Exponential]](𝜆)
- Gamma(𝛼\>0, 𝜆=1/2) = [[Chi-Square Distribution|Chi-Square]](2𝛼)

# Probability Density Function \#2
- 𝑓(𝑥) = \[1/(𝛤(𝛼)𝜆<sup>𝛼</sup>)\]·𝑥<sup>𝛼-1</sup>·𝑒<sup>-𝑥/𝜆</sup><font style="letter-spacing: 0.0px;color: rgb(128,128,128);">\# for 𝑥 \> 0</font>

# Expectation

𝐄\[𝑋\] = 𝛼/𝜆

> [!expand]- proof
> > [!expand]- via exponential distribution
> > representing a Gamma variable 𝑋 as a sum of independent [[Exponential Distribution|Exponential(𝜆)]] variables 𝑋<sub>1</sub>, ..., 𝑋<sub>𝛼</sub>
> >
> > 𝑋 = 𝑋<sub>1</sub> + ... + 𝑋<sub>𝛼</sub>
> > - 𝐄\[𝑋\] = 𝐄\[𝑋<sub>1</sub> + ... + 𝑋<sub>𝛼</sub>\]
> > - 𝐄\[𝑋\] = 𝐄\[𝑋<sub>1</sub>\] + ... + 𝐄\[𝑋<sub>𝛼</sub>\]
> > - 𝐄\[𝑋\] = 1/𝜆 + ... + 1/𝜆
> > - 𝐄\[𝑋\] =<em> 𝛼/𝜆</em>
>
> > [!expand]- way 2
> > First, note that ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥 = 1 for Gamma and all the other densities
> > - 1 = ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥
> > - 1 = ₀∫<sup>∞</sup>(𝜆<sup>𝛼</sup>/𝛤(𝛼)) (𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> > - 1 = (𝜆<sup>𝛼</sup>/𝛤(𝛼)) ₀∫<sup>∞</sup>(𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> > - 𝛤(𝛼)/𝜆<sup>𝛼</sup> = ₀∫<sup>∞</sup>(𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> > - 𝛤(𝛼+1)/𝜆<sup>𝛼+1</sup> = ₀∫<sup>∞</sup>(𝑥<sup>𝛼</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> >
> > now compute expectation:
> > - 𝐄\[𝑋\] = ₀∫<sup>∞</sup>𝑥 𝑓(𝑥)𝑑𝑥
> > - 𝐄\[𝑋\] = ₀∫<sup>∞</sup>𝑥 (𝜆<sup>𝛼</sup>/𝛤(𝛼)) (𝑥<sup>𝛼-1</sup>𝑒<sup>-λ𝑥</sup>) 𝑑𝑥
> > - 𝐄\[𝑋\] = (𝜆<sup>𝛼</sup>/𝛤(𝛼)) ₀∫<sup>∞</sup>𝑥(𝑥<sup>𝛼-1</sup>𝑒<sup>-λ𝑥</sup>) 𝑑𝑥
> > - 𝐄\[𝑋\] = (𝜆<sup>𝛼</sup>/𝛤(𝛼)) ₀∫<sup>∞</sup>𝑥<sup>𝛼</sup>𝑒<sup>-λ𝑥</sup> 𝑑𝑥
> > - 𝐄\[𝑋\] = (𝜆<sup>𝛼</sup>/𝛤(𝛼)) \* (𝛤(𝛼+1)/𝜆<sup>𝛼+1</sup>)
> > - 𝐄\[𝑋\] = (𝛤(𝛼+1)/𝛤(𝛼)) \* (𝜆<sup>𝛼</sup>/𝜆<sup>𝛼+1</sup>)
> > - 𝐄\[𝑋\] = \[(𝛼)! / (𝛼-1)!\] \* (1/𝜆)
> > - 𝐄\[𝑋\] = (𝛼) \* (1/𝜆)
> > - 𝐄\[𝑋\] = 𝛼/𝜆
# Variance

<strong>𝑉𝑎𝑟</strong>(𝑋) = 𝛼/𝜆<sup>2</sup>

> [!expand]- proof
> > [!expand]- via exponential distribution
> > representing a Gamma variable 𝑋 as a sum of INDEPENDENT [[Exponential Distribution|Exponential(λ)]] variables 𝑋<sub>1</sub>, ..., 𝑋<sub>𝛼</sub>
> >
> > 𝑋 = 𝑋<sub>1</sub> + ... + 𝑋<sub>𝛼</sub>
> > - 𝑉𝑎𝑟(𝑋) = 𝑉𝑎𝑟(𝑋<sub>1</sub> + ... + 𝑋<sub>𝛼</sub>)
> > - 𝑉𝑎𝑟(𝑋) = 𝑉𝑎𝑟(𝑋<sub>1</sub>) + ... + 𝑉𝑎𝑟(𝑋<sub>𝛼</sub>) \# because of independence
> > - 𝑉𝑎𝑟(𝑋) = 1/<em>𝜆<sup>2</sup></em> + ... + 1/<em>𝜆<sup>2</sup></em>
> > - 𝑉𝑎𝑟(𝑋) =<em> 𝛼/𝜆<em><sup>2</sup></em></em>
>
> > [!expand]- way 2
> > First, note that ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥 = 1 for Gamma and all the other densities
> > - 1 = ₀∫<sup>∞</sup>𝑓(𝑥)𝑑𝑥
> > - 1 = ₀∫<sup>∞</sup>(𝜆<sup>𝛼</sup>/𝛤(𝛼)) (𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> > - 1 = (𝜆<sup>𝛼</sup>/𝛤(𝛼)) ₀∫<sup>∞</sup>(𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> > - 𝛤(𝛼)/𝜆<sup>𝛼</sup> = ₀∫<sup>∞</sup>(𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> > - 𝛤(𝛼+2)/𝜆<sup>𝛼+2</sup> = ₀∫<sup>∞</sup>(𝑥<sup>𝛼+1</sup>𝑒<sup>-𝜆𝑥</sup>) 𝑑𝑥
> >
> > now compute expectation:
> > - 𝑉𝑎𝑟(𝑋) = \[₀∫<sup>∞</sup>𝑥<sup>2</sup>𝑓(𝑥)𝑑𝑥\] - <em>𝜇</em><sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[₀∫<sup>∞</sup>𝑥<sup>2</sup>(𝜆<sup>𝛼</sup>/𝛤(𝛼)) (𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>)𝑑𝑥\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[(𝜆<sup>𝛼</sup>/𝛤(𝛼)) ₀∫<sup>∞</sup>𝑥<sup>2</sup>(𝑥<sup>𝛼-1</sup>𝑒<sup>-𝜆𝑥</sup>)𝑑𝑥\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[(𝜆<sup>𝛼</sup>/𝛤(𝛼)) ₀∫<sup>∞</sup>𝑥<sup>𝛼+1</sup>𝑒<sup>-𝜆𝑥</sup>𝑑𝑥\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[(𝜆<sup>𝛼</sup>/𝛤(𝛼)) (𝛤(𝛼+2)/𝜆<sup>𝛼+2</sup>)\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[(𝛤(𝛼+2)/𝛤(𝛼)) \* (𝜆<sup>𝛼</sup>/𝜆<sup>𝛼+2</sup>)\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[((𝛼+1)! / (𝛼-1)!) \* (1/𝜆<sup>2</sup>)\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[(𝛼(𝛼+1)) \* (1/𝜆<sup>2</sup>)\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = \[(𝛼<sup>2</sup>+ 𝛼) \* (1/𝜆<sup>2</sup>)\] - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = 𝛼<sup>2</sup>/𝜆<sup>2</sup>+ 𝛼/𝜆<sup>2</sup> - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = (𝛼/<em>𝜆</em>)<sup>2</sup>+ 𝛼/𝜆<sup>2</sup> - (𝛼/<em>𝜆</em>)<sup>2</sup>
> > - 𝑉𝑎𝑟(𝑋) = 𝛼/𝜆<sup>2</sup>
# Cumulative Distribution Function (CDF)
![[Gamma Distribution/gamma-distribution-cumulative-distribution-function.png|330]]
# Moment-Generating Function

When the PDF of gamma variable 𝑋 is:
- 𝑓(𝑥) = \[1/(𝛤(𝛼)𝜆<sup>𝛼</sup>)\]·𝑥<sup>𝛼-1</sup>·𝑒<sup>-𝑥/𝜆</sup><font style="color: rgb(128,128,128);">\# for 𝑥 \> 0</font>

Then the moment-generating function of 𝑋 is:
- $M_X(t) = (1 - 𝜆t)^{-𝛼}$

See: [[Moment-Generating Function - Gamma Distribution]]
# Example 1

Users visit a certain internet site at the average rate of 12 hits per minute. Every sixth visitor receives some promotion that comes in a form of a flashing banner. Then the time between consecutive promotions has Gamma distribution with parameters 𝛼 = 6 and 𝜆 = 12
# Example 2

Compilation of a computer program consists of 3 blocks that are processed sequentially, one after another. Each block takes Exponential time with the mean of 5 minutes, independently of other blocks
- 𝛼 = 3
- <em>𝜆 </em>= 1/5

Compute the expectation and variance of the total compilation time

> [!expand]- solution
> - 𝐄\[𝑋\] = 𝛼/<em>𝜆</em>
> - 𝐄\[𝑋\] = 3/(1/5)
> - 𝐄\[𝑋\] = 15
>
> - 𝑉𝑎𝑟(𝑋) = 𝛼/𝜆<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 3/(1/5)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 75

Compute the probability for the entire program to be compiled in less than 12 minutes

> [!expand]- solution
> - 𝑷 {𝑋 \< 12} = 𝐶𝐷𝐹(𝑥=12)
> - 𝑷 {𝑋 \< 12} = 𝐶𝐷𝐹(𝑥=12)
> - 𝑷 {𝑋 \< 12} = ₀∫<sup>12</sup>((1/5)<sup>3</sup>/𝛤(3)) (𝑥<sup>3-1</sup>𝑒<sup>-(1/5)𝑥</sup>)𝑑𝑥
> - 𝑷 {𝑋 \< 12} = (1/5)<sup>3</sup>/𝛤(3) ₀∫<sup>12</sup>𝑥<sup>2</sup>𝑒<sup>-𝑥/5</sup>𝑑𝑥
> - 𝑷 {𝑋 \< 12} = (1/5)<sup>3</sup>/𝛤(3) ... requires 2 rounds of [[Integration by Parts|integration by parts]]
# Subpages
- [[Gamma Distribution vs Poisson Distribution]]
