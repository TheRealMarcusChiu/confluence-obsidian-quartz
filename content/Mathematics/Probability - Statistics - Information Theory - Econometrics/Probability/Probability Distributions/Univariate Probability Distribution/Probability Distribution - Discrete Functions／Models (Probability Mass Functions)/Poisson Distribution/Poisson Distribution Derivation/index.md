---
title: "Poisson Distribution Derivation"
created: 2023-10-23T14:23:21.515-05:00
modified: 2023-10-23T14:37:39.404-05:00
parent: "[[Poisson Distribution]]"
children: []
---
# Poisson Distribution Derivations

> [!expand-ui]- Binomial Distribution
> The [[Poisson Distribution|Poisson distribution]] is a limiting case of the [[Binomial Distribution|binomial distribution]] when the number of trials 𝑛 increases indefinitely while the product, 𝜇=𝑛𝑝, which is the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expected value]] of the number of successes from the trials remains constant.
>
> Consider the [[Binomial Distribution|binomial probability mass function]]:$b(x;n,p) = \frac{n!}{(n-x)!x!}p^x(1-p)^{n-x}$
>
> This can be rewritten as$b(x;n,p) = \frac{𝜇^x}{x!} \frac{n!}{(n-x)!n^x}(1 - \frac{𝜇}{n})^n (1 - \frac{𝜇}{n})^{-x}$
>
> The expression may be disassembled for the purpose of taking limits in the component parts. The limits in question are
> - $lim_{n \to ∞} \frac{n!}{(n-x)!n^x} = lim_{n \to ∞} \frac{n(n-1) \dots (n-x+1)}{n^x}$
> - $lim_{n \to ∞} \frac{n!}{(n-x)!n^x} = 1$
> - $lim_{n \to ∞} (1 - \frac{𝜇}{n})^n = e^{-𝜇}$
> - $lim_{n \to ∞} (1 - \frac{𝜇}{n})^{-x} = 1$
>
> Reassembling the parts, the binomial function has a limiting form of$lim_{n \to ∞} b(x;n,p) = \frac{𝜇^x e^{-𝜇}}{x!}$
>
> This is the Poisson distribution

> [!expand-ui]- Emission Process
> see resources below
# Resources
- [[poisson-distribution-derivation.pdf]]
