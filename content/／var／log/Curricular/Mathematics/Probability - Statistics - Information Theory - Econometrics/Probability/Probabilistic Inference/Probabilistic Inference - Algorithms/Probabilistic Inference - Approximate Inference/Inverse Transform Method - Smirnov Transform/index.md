---
title: "Inverse Transform Method - Smirnov Transform"
created: 2021-09-13T05:28:18.099-05:00
modified: 2024-03-22T13:57:29.331-05:00
parent: "[[Probabilistic Inference - Approximate Inference]]"
children:
  - "[[Inverse Transform Method - Exponential Distribution]]"
---
###### Inverse Transform Method - Smirnov Transform
````excerpt
- is one of the several ways to [[Probability - Generating Random Variable(s) that Simulates a Distribution|simulate a random variable]] 𝑋 of a particular [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|continuous distribution]]
- requires the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function 𝐶𝐷𝐹]] of 𝑋 to be known AND is [[Inverse Function - Anti-Function|invertible]]
````
^excerpt

# Theorem

Let 𝑋 be a continuous random variable with any [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|𝐶𝐷𝐹]]<sub>𝑋</sub>(𝑥). Substitute random variable 𝑋 into its own 𝐶𝐷𝐹: 𝐶𝐷𝐹<sub>𝑋</sub>(𝑋). Let random variable 𝑈 =  𝐶𝐷𝐹<sub>𝑋</sub>(𝑋). The distribution of 𝑈 is[[Uniform Distribution|Uniform(0,1)]]

> [!expand]- proof
> First, we notice that 0 ≤ 𝐶𝐷𝐹<sub>𝑋</sub>(𝑥) ≤ 1 for all 𝑥, therefore, values of 𝐔 lie in \[0, 1\]
>
> Second, for any 𝑢 ∈ \[0, 1\], find the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|𝐶𝐷𝐹]] of 𝑈:
> - 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝐏(𝑈 ≤ 𝑢) <font style="color: rgb(128,128,128);">\# by definition of 𝐶𝐷𝐹</font>
> - 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝐏(𝐶𝐷𝐹<sub>𝑋</sub>(𝑋) ≤ 𝑢) <font style="color: rgb(128,128,128);">\# substitute 𝑈 with 𝐶𝐷𝐹 of 𝑋</font>
> - 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝐏(𝑋 ≤ 𝐶𝐷𝐹<sub>𝑋</sub><sup>-1</sup>(𝑢)) <font style="color: rgb(128,128,128);">\# solve the inequality for 𝑋</font>
> - 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝐶𝐷𝐹<sub>𝑋</sub>(𝐶𝐷𝐹<sub>𝑋</sub><sup>-1</sup>(𝑢)) <font style="color: rgb(128,128,128);">\# by definition of 𝐶𝐷𝐹</font>
> - 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝑢 <font style="color: rgb(128,128,128);">\# 𝐶𝐷𝐹<sub>𝑋</sub> and 𝐶𝐷𝐹<sub>𝑋</sub><sup>-1</sup>cancel</font>
>
> We see that 𝑈 has:
> - 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝑢
> - probability density function 𝐶𝐷𝐹<sub>𝑈</sub>(𝑢) = 𝐶𝐷𝐹<sub>𝑈</sub>'(𝑢) = 1 for 0 ≤ 𝑢 ≤ 1
>
> Therefore 𝑈 has [[Uniform Distribution|Uniform(0,1)]] Distribution
>
> Regardless of the initial distribution of 𝑋, it becomes Uniform(0,1), once 𝑋 is substituted into its own [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function]]
# Arbitrary Continuous Distribution

In order to simulate a continuous random variable 𝑋 with known 𝐶𝐷𝐹
- invert 𝑈 = 𝐶𝐷𝐹(𝑋)
- 𝑋 = 𝐹<sup>-1</sup>(𝑈)

Then 𝑋 can be obtained from a generated [[Uniform Distribution|Standard Uniform]] variable 𝑈 as 𝑋 = 𝐶𝐷𝐹<sup>-1</sup>(𝑈)
# Generating Continuous Random Variables
1. Obtain a Standard [[Uniform Distribution|Uniform]] random variable from a [[Pseudo-Random Number Generator (PRNG) - Deterministic Random Bit Generator (DRBG)|random number generator]]
2. Compute 𝑋 = 𝐶𝐷𝐹<sup>-1</sup>(𝑈). In other words, solve the equation 𝐶𝐷𝐹(𝑋) = 𝑈 for 𝑋

# Subpages

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# Resources

![](https://www.youtube.com/watch?v=irheiVXJRm8&list=PL56AB5BB89EE1866A&index=8)
