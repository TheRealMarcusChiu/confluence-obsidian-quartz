---
title: "Markov's Inequality／Theorem"
created: 2024-01-22T12:57:02.092-06:00
modified: 2024-01-22T13:08:26.584-06:00
parent: "[[Mathematical Formulas]]"
children: []
---
###### Markov's Inequality
````excerpt
- in [[Probability Theory|probability theory]], <strong>Markov's Inequality</strong> gives an upper bound on the probability that a non-negative random variable is greater than or equal to some positive constant
````
^excerpt

# Statement

If 𝑋 is a nonnegative random variable and 𝑎\>0, then the [[Probability|probability]] that 𝑋 is at least 𝑎 is at most the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation]] of 𝑋 divided by 𝑎:
- 𝐏⁡(𝑋≥𝑎) ≤ 𝐄\[𝑋\]/𝑎

Let 𝑎 = 𝑎̃⋅𝐄\[𝑋\] where 𝑎̃\>0; then we can rewrite the previous inequality as
- 𝐏⁡(𝑋 ≥ 𝑎̃⋅𝐄\[𝑋\]) ≤ 1/𝑎̃

In the language of [[Measure Theory|measure theory]], <strong>Markov's inequality</strong> states that if:
- (𝑋, 𝛴, 𝜇) is a [[Measure Spaces|measure space]]
- 𝑓 is a [measurable](https://en.wikipedia.org/wiki/Measurable_function) [extended real](https://en.wikipedia.org/wiki/Extended_real_number_line)-valued function
- 𝜀\>0

then:
- $𝜇({x∈X:|f(x)| ≥ 𝜀}) ≤ \frac{1}{𝜀} \int_X |f|d𝜇$

This measure-theoretic definition is sometimes referred to as [[Chebyshev's Inequality／Theorem|Chebyshev's inequality]].
