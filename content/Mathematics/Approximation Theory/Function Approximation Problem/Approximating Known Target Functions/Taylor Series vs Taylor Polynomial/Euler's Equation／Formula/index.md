---
title: "Euler's Equation／Formula"
created: 2021-09-13T05:29:25.360-05:00
modified: 2023-09-12T17:39:36.787-05:00
parent: "[[Taylor Series vs Taylor Polynomial]]"
children:
  - "[[Euler Identity]]"
---
###### Euler's Equation/Formula
````excerpt
- 𝑒<sup>𝑖</sup><sup>𝑥</sup> = 𝑐𝑜𝑠(𝑥) + 𝑖·𝑠𝑖𝑛(𝑥)
- establishes the fundamental relationship between [[Trigonometric／Circular／Angle／Goniometric Functions (sine - cosine - tangent - cosecant - secant - cotangent)|trigonometric functions]] and [[Exponential Function|exponential functions]]
````
^excerpt

# Euler's Equation - Formal Definitions

```merge-table
{
  "rows": [
    [
      {
        "content": "𝑒<sup>𝑖</sup><sup>𝑥</sup> = 𝑐𝑜𝑠(𝑥) + 𝑖·𝑠𝑖𝑛(𝑥)",
        "bg": "#F4F5F7"
      },
      "> [!expand]- derivations\n> > [!expand]- Derivation #0 - via Power/Taylor/MacLaurin Series Expansion\n> > Let's consider the [[Taylor Series Expansion of Euler's Equation／Formula|Taylor series expansion of 𝑒𝑖𝑥]]:\n> > - $e^{ix} = \\frac{x^0}{0!} + \\frac{ix^1}{1!} - \\frac{x^2}{2!} - \\frac{ix^3}{3!} + \\frac{x^4}{4!} + \\frac{ix^5}{5!} - \\frac{x^6}{6!} ...$\n> >\n> > Grouping the real and imaginary terms together yields:\n> > - $e^{ix} = (\\frac{x^0}{0!} - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + ...) + i(\\frac{x^1}{1!} - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...)$\n> >\n> > Let's consider the [[Taylor Series Expansion of Sine Function|Taylor series of sine]] and the [[Taylor Series Expansion of Cosine Function|Taylor series of cosine]]:\n> > - $sin(x) = \\frac{x^1}{1!} - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} ...$\n> > - $cos(x) = \\frac{x^0}{0!} - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\frac{x^8}{8!} ...$\n> >\n> > Thus:\n> > - $e^{ix} = cos(x) + i·sin(x)$\n>\n> > [!expand]- Derivation #2 - via trigonometry and complex numbers\n> > see: [[Euler's Formula - Intuition via Trigonometry & Complex Numbers|Making Sense of Euler's Formula with Trigonometry & Complex Numbers]]\n>\n> > [!expand]- Derivation #3 - via Group Theory\n> > see: [[Euler's Formula - Intuition via Group Theory]]"
    ],
    [
      {
        "content": "𝑒<sup>±𝑖𝑘𝑥</sup>= 𝑐𝑜𝑠(𝑘𝑥) ± 𝑖·𝑠𝑖𝑛(𝑘𝑥)",
        "bg": "#F4F5F7"
      },
      "where 𝑥=𝑘𝑥"
    ],
    [
      {
        "content": "𝑒<sup>𝑖</sup><sup>𝜋</sup> = −1",
        "bg": "#F4F5F7"
      },
      "where 𝑥=𝜋 (i.e. [[Euler Identity|Euler's identity]])"
    ]
  ]
}
```
# Euler's Equation - Intuition

A key to understanding Euler’s formula lies in rewriting the formula as follows:
- $(e^i)^x = cos(x) + i·sin(x)$

where:
- the right-hand expression can be thought of as the unit complex number with an angle
- the left-hand expression can be thought of as the 1-radian unit complex number raised to

# Resources
- [https://xaktly.com/EulersEquation.html](https://xaktly.com/EulersEquation.html#:~:text=Nobel%20Prize%2Dwinning%20physicist%20Richard,more%20useful%20in%20higher%20math)
- [https://mathvault.ca/euler-formula/](https://mathvault.ca/euler-formula/)
