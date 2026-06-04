---
title: "Taylor Series Expansion of Euler's Equation／Formula"
created: 2023-09-12T17:23:19.294-05:00
modified: 2023-09-12T17:32:56.349-05:00
parent: "[[Taylor Series vs Taylor Polynomial]]"
children: []
---
The [[Euler's Equation／Formula|Euler's Formula]] 𝑒<sup>𝑖𝑥</sup> can be expanded into a [[Taylor Series vs Taylor Polynomial|Taylor series]]:
- $e^{ix} = \frac{x^0}{0!} + \frac{ix^1}{1!} - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \frac{ix^5}{5!} - \frac{x^6}{6!} ...$

This is also a power series expansion of the Euler's equation
# Proof

Let's consider the [[Exponential Function|exponential function]]:
- 𝑒<sup>𝑧</sup>

The [[Power Series Expansion of the Exponential Function|power series expansion of 𝑒𝑧]] is:
- $e^z = \frac{z^0}{0!} + \frac{z^1}{1!} + \frac{z^2}{2!} + \frac{z^3}{3!} + ...$

Let 𝑧 = 𝑖𝑥:
- $e^{ix} = \frac{(ix)^0}{0!} + \frac{(ix)^1}{1!} + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + ...$

Extracting the powers of 𝑖, we get:
- $e^{ix} = \frac{x^0}{0!} + \frac{ix^1}{1!} - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \frac{ix^5}{5!} - \frac{x^6}{6!} ...$
