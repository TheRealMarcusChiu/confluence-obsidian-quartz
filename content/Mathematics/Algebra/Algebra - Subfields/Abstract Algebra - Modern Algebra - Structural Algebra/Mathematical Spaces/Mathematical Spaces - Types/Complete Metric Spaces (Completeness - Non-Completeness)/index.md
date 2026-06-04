---
title: "Complete Metric Spaces (Completeness - Non-Completeness)"
created: 2023-06-16T10:45:44.131-05:00
modified: 2023-06-22T23:57:16.290-05:00
parent: "[[Mathematical Spaces - Types]]"
children: []
---
###### Completeness - Non-Completeness
- a [[Metric Spaces|metric space (𝑋,𝑑)]] in which every [[Mathematical Space (Cauchy Sequences)|Cauchy sequence]] [[Metric Spaces (Sequences - Convergent／Convergence／Converges - Bounded - Cauchy Sequences)|converges]] to an element that exists in 𝑋 is called <strong><em>complete</em></strong>
- all other metric spaces are called <strong><em>non-</em><em>complete</em></strong>

###### Complete Metric Space
- is a type of [[Mathematical Spaces|mathematical space]]
- is a [[Metric Spaces|metric space (𝑋,𝑑)]] with <em>[[Complete Metric Spaces (Completeness - Non-Completeness)|completeness]]</em>

# Completeness Examples

> [!expand]- Real Numbers
> The [[Real Numbers System|real numbers]] are complete under the metric induced by the usual absolute value, and one of the standard [constructions of the real numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers) involves Cauchy sequences of [[Numbers Classes／Classification of Numbers|rational numbers]]. In this construction, each equivalence class of Cauchy sequences of rational numbers with a certain tail behavior—that is, each class of sequences that get arbitrarily close to one another— is a real number.

> [!expand]- Discrete Metric Space
> A [[Metric Spaces|metric space (𝑋,𝑑)]] where 𝑑 is defined as the [[Discrete Distance Metric - Discrete Metric|discrete distance metric]] (where any two distinct points are at a distance 1 from each other). Any [[Mathematical Space (Cauchy Sequences)|Cauchy sequence]] of elements of 𝑋 must be constant beyond some fixed point and converges to the eventually repeating term.

> [!expand]- Closed Intervals
> The closed interval 𝑋 = \[0,2\] is complete
# Non-Completeness Examples

> [!expand]- Rational Numbers
> The [rational numbers](https://en.wikipedia.org/wiki/Rational_number) ℚ are not complete (for the usual distance):
>
> There are sequences of rationals that converge to [irrational numbers](https://en.wikipedia.org/wiki/Irrational_number); these are Cauchy sequences having no limit in ℚ. In fact, if a real number 𝑥 is irrational, then the sequence (𝑥<sub>𝑛</sub>), whose 𝑛<sup>th</sup> term is the truncation to 𝑛 decimal places of the decimal expansion of 𝑥, gives a Cauchy sequence of rational numbers with irrational limit 𝑥. Irrational numbers certainly exist in ℝ, for example:
> - The sequence defined by
> 	- $x_0 = 1, x_{n+1} = \frac{x_n + 2/x_n}{2}$
> - consists of rational numbers (1, 3/2, 17/12, ...), which is clear from the definition; however it converges to the irrational square root of 2 which does not exist in ℚ.
> - The sequence 𝑥<sub>𝑛</sub> = 𝐹<sub>𝑛</sub>/𝐹<sub>𝑛−1</sub> of ratios of consecutive [Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number) which, if it converges at all, converges to a limit 𝜑 satisfying 𝜑<sup>2</sup>= 𝜑 + 1, and no rational number has this property. If one considers this as a sequence of real numbers, however, it converges to the real number 𝜑 = (1+√5)/2, the [Golden ratio](https://en.wikipedia.org/wiki/Golden_ratio), which is irrational.
> - The values of 𝑒𝑥𝑝(𝑥), 𝑠𝑖𝑛(𝑥), and 𝑐𝑜𝑠(𝑥), are known to be irrational for any rational value of 𝑥 ≠ 0, but each can be defined as the limit of a rational Cauchy sequence, using, for instance, the [Maclaurin series](https://en.wikipedia.org/wiki/Maclaurin_series).

> [!expand]- Open Intervals
> The open interval 𝑋 = (0,2) in the set of real numbers with an ordinary distance is not a complete space: there is a sequence 𝑥<sub>𝑛</sub> = 1/𝑛 in it, which is Cauchy (<em><font style="color: rgb(122,134,154);">for arbitrarily small distance bound 𝑑 \> 0 all terms 𝑥<sub>𝑛</sub> of 𝑛 \> 1/𝑑 fit in the (0,𝑑) interval</font></em>), however, does not converge in 𝑋 — its 'limit', number 0, does not belong to the space 𝑋.
