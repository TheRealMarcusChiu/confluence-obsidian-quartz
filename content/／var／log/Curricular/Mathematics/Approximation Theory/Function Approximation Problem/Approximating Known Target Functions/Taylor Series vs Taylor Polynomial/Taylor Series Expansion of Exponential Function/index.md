---
title: "Taylor Series Expansion of Exponential Function"
created: 2023-09-12T17:18:41.918-05:00
modified: 2023-09-12T17:21:24.245-05:00
parent: "[[Taylor Series vs Taylor Polynomial]]"
children: []
---
The [[Exponential Function|exponential function]] 𝑒𝑥𝑝(𝑥) can be expanded into a [[Taylor Series vs Taylor Polynomial|Taylor series]]:
- $exp(x) = \frac{x^0}{0!} + \frac{x^1}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \; ...$

This is also a [[Power Series Expansion of the Exponential Function|power series expansion of the exponential function]]
# Proof

We start with the definition of a [[Taylor Series vs Taylor Polynomial|Taylor series]]
- $f(x) = \frac{f(a)(x-a)^0}{0!} + \frac{f'(a)(x-a)^1}{1!} + \frac{f''(a)(x-a)^2}{2!} + \frac{f'''(a)(x-a)^3}{3!} + \frac{f''''(a)(x-a)^4}{4!} + \; ...$
- $f(x) = \frac{f(0)x^0}{0!} + \frac{f'(0)x^1}{1!} + \frac{f''(0)x^2}{2!} + \frac{f'''(0)x^3}{3!} + \frac{f''''(0)x^4}{4!} + \; ... \;\;\;\; \text{ let } a \text{ = 0}$
- $exp(x) = \frac{exp(0)x^0}{0!} + \frac{exp'(0)x^1}{1!} + \frac{exp''(0)x^2}{2!} + \frac{exp'''(0)x^3}{3!} + \frac{exp''''(0)x^4}{4!} + \; ... \;\;\;\; \text{ let } f(x) = exp(x)$
- $exp(x) = \frac{exp(0)x^0}{0!} + \frac{exp(0)x^1}{1!} + \frac{exp(0)x^2}{2!} + \frac{exp(0)x^3}{3!} + \frac{exp(0)x^4}{4!} + \; ... \;\;\;\; \text{ evaluate derivatives}$
- $exp(x) = \frac{1x^0}{0!} + \frac{1x^1}{1!} + \frac{1x^2}{2!} + \frac{1x^3}{3!} + \frac{1x^4}{4!} + \; ...$
- $exp(x) = \frac{x^0}{0!} + \frac{x^1}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \; ...$
