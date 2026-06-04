---
title: "Taylor Series Expansion of Sine Function"
created: 2023-09-12T17:09:14.299-05:00
modified: 2023-09-12T17:13:14.823-05:00
parent: "[[Taylor Series vs Taylor Polynomial]]"
children: []
---
The [[Sine Function|sine function]] 𝑠𝑖𝑛(𝑥) can be expanded into a [[Taylor Series vs Taylor Polynomial|Taylor series]]:
- $sin(x) = \frac{x^1}{1!} - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} \; ...$

This is also a [[Power Series Expansion of the Sine Function|power series expansion of the sine function]]
# Proof

We start with the definition of a [[Taylor Series vs Taylor Polynomial|Taylor series]]
- $f(x) = \frac{f(a)(x-a)^0}{0!} + \frac{f'(a)(x-a)^1}{1!} + \frac{f''(a)(x-a)^2}{2!} + \frac{f'''(a)(x-a)^3}{3!} + \frac{f''''(a)(x-a)^4}{4!} + \; ...$
- $f(x) = \frac{f(0)x^0}{0!} + \frac{f'(0)x^1}{1!} + \frac{f''(0)x^2}{2!} + \frac{f'''(0)x^3}{3!} + \frac{f''''(0)x^4}{4!} + \; ... \;\;\;\; \text{ let } a \text{ = 0}$
- $sin(x) = \frac{sin(0)x^0}{0!} + \frac{sin'(0)x^1}{1!} + \frac{sin''(0)x^2}{2!} + \frac{sin'''(0)x^3}{3!} + \frac{sin''''(0)x^4}{4!} + \; ... \;\;\;\; \text{ let } f(x) = sin(x)$
- $sin(x) = \frac{sin(0)x^0}{0!} + \frac{cos(0)x^1}{1!} + \frac{-sin(0)x^2}{2!} + \frac{-cos(0)x^3}{3!} + \frac{sin(0)x^4}{4!} + \; ... \;\;\;\; \text{ evaluate derivatives}$
- $sin(x) = \frac{0x^0}{0!} + \frac{1x^1}{1!} + \frac{0x^2}{2!} + \frac{-1x^3}{3!} + \frac{0x^4}{4!} + \; ...$
- $sin(x) = 0 + \frac{x^1}{1!} + 0 - \frac{x^3}{3!} + 0 + \; ...$
- $sin(x) = \frac{x^1}{1!} - \frac{x^3}{3!} + \; ...$
