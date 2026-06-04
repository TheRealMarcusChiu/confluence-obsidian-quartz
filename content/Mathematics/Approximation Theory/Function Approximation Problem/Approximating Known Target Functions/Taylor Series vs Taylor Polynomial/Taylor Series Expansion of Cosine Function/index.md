---
title: "Taylor Series Expansion of Cosine Function"
created: 2023-09-12T16:51:07.733-05:00
modified: 2023-09-12T17:09:09.342-05:00
parent: "[[Taylor Series vs Taylor Polynomial]]"
children: []
---
The [[Cosine Function|cosine function]] 𝑐𝑜𝑠(𝑥) can be expanded into a [[Taylor Series vs Taylor Polynomial|Taylor series]]:
- $cos(x) = \frac{x^0}{0!} - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} \; ...$

This is also a [[Power Series Expansion of the Cosine Function|power series expansion of the cosine function]]
# Proof

We start with the definition of a [[Taylor Series vs Taylor Polynomial|Taylor series]]
- $f(x) = \frac{f(a)(x-a)^0}{0!} + \frac{f'(a)(x-a)^1}{1!} + \frac{f''(a)(x-a)^2}{2!} + \frac{f'''(a)(x-a)^3}{3!} + \frac{f''''(a)(x-a)^4}{4!} + \; ...$
- $f(x) = \frac{f(0)x^0}{0!} + \frac{f'(0)x^1}{1!} + \frac{f''(0)x^2}{2!} + \frac{f'''(0)x^3}{3!} + \frac{f''''(0)x^4}{4!} + \; ... \;\;\;\; \text{ let } a \text{ = 0}$
- $cos(x) = \frac{cos(0)x^0}{0!} + \frac{cos'(0)x^1}{1!} + \frac{cos''(0)x^2}{2!} + \frac{cos'''(0)x^3}{3!} + \frac{cos''''(0)x^4}{4!} + \; ... \;\;\;\; \text{ let } f(x) = cos(x)$
- $cos(x) = \frac{cos(0)x^0}{0!} + \frac{-sin(0)x^1}{1!} + \frac{-cos(0)x^2}{2!} + \frac{sin(0)x^3}{3!} + \frac{cos(0)x^4}{4!} + \; ... \;\;\;\; \text{ evaluate derivatives}$
- $cos(x) = \frac{1x^0}{0!} + \frac{0x^1}{1!} + \frac{-1x^2}{2!} + \frac{0x^3}{3!} + \frac{1x^4}{4!} + \; ...$
- $cos(x) = 1 + 0 - \frac{x^2}{2!} + 0 + \frac{x^4}{4!} + \; ...$
- $cos(x) = 1 + 0 - \frac{x^2}{2} + 0 + \frac{x^4}{24} + \; ...$
- $cos(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} + \; ...$
