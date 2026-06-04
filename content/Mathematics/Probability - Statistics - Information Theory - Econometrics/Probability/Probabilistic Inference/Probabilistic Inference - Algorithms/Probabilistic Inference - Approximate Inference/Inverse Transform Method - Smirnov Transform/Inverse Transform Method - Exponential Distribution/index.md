---
title: "Inverse Transform Method - Exponential Distribution"
created: 2021-09-13T05:28:18.392-05:00
modified: 2021-09-13T05:28:18.392-05:00
parent: "[[Inverse Transform Method - Smirnov Transform]]"
children: []
---
assume we have a random variable <em>𝑈</em> of [[Uniform Distribution|uniform distribution]] outputting a [[Classes of Numbers|real number]] between 0 and 1

to simulate a random variable 𝑋 with [[Exponential Distribution|exponential distribution]] given λ, where its [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|Probability Density Function (PDF)]] is

𝑃𝐷𝐹 (𝑋=𝑥) = λ𝑒<sup>−λ𝑥</sup>for 𝑥 \> 0

let us use the [[Inverse Transform Method - Smirnov Transform]]!

the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|Cumulative Distribution Function (CDF)]] of an [[Exponential Distribution|exponential distribution]] given λ is

𝐶𝐷𝐹 (0\<𝑋\<𝑥) = 1 - 𝑒<sup>-λ𝑥</sup>

compute [[Inverse Function - Anti-Function|inverse function]] of the 𝐶𝐷𝐹 (i.e. 𝐶𝐷𝐹 <sup>-1</sup>)
- 𝑈 = 𝐶𝐷𝐹 (0\<𝑋\<𝑥)
- 𝑈 = 1 - 𝑒<sup>-λ𝑥</sup>
- 𝑒<sup>-λ𝑥</sup>= 1 - 𝑈
- -λ𝑥<sup></sup>= 𝑙𝑛(1-𝑈)
- 𝑥 = -(1/λ) \* 𝑙𝑛(1-𝑈)

NOTE: <em>𝑥 = -(1/λ) \* 𝑙𝑛(1-𝑈)</em> is valid since both 𝑈 and 1-𝑈 follow the [[Uniform Distribution|uniform distribution]] Uniform(0,1)
