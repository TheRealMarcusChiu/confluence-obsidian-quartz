---
title: "Power Series／Expansion"
created: 2022-04-21T16:29:34.830-05:00
modified: 2023-09-12T17:16:49.959-05:00
parent: "[[Mathematical Series]]"
children:
  - "[[Power Series - Algebra (Addition／Subtraction／Multiplication／Division - Differentiation／Integration)]]"
  - "[[Power Series - Radius of Convergence]]"
  - "[[Power Series Expansion of Euler's Equation／Formula]]"
  - "[[Power Series Expansion of the Cosine Function]]"
  - "[[Power Series Expansion of the Exponential Function]]"
  - "[[Power Series Expansion of the Sine Function]]"
---
# Power Series - Definition

A <strong>power series</strong> (in one variable 𝑥) is an infinite series of the form:

> [!indent]
> ![[Power Series／Expansion/power-series-formula.png|350]]

where:
- 𝑥 is the input variable
- 𝑎<sub>𝑛</sub> represents the coefficient of the 𝑛<sup>th</sup> term
- 𝑐 is a constant

# Power Series - SubTypes

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Maclaurin Series vs Maclaurin Polynomial|Maclaurin Series]]",
        "bg": "#F4F5F7"
      },
      "When centered on zero (i.e. 𝑐 = 0) it is a [[Maclaurin Series vs Maclaurin Polynomial|Maclaurin Series]]:\n\n> [!indent]\n> ![[Power Series／Expansion/maclaurin-series-formula.png|325]]"
    ],
    [
      {
        "content": "[[Geometric Series／Succession|Geometric Series/Succession]]",
        "bg": "#F4F5F7"
      },
      "When all coefficients (𝑎<sub>0</sub>, 𝑎<sub>1</sub>, ..., 𝑎<sub>𝑛</sub>) equal the same value 𝑎, it is a [[Geometric Series／Succession|Geometric Series/Succession]]\n\n> [!indent]\n> ![[Power Series／Expansion/geometric-series-formula.png|325]]"
    ],
    [
      {
        "content": "[[Taylor Series vs Taylor Polynomial|Taylor Series]]",
        "bg": "#F4F5F7"
      },
      "When expanding a function as an infinite series of terms expressed as the function's derivatives at a single point, it is a [[Taylor Series vs Taylor Polynomial|Taylor Series]]:\n- $f(x) \\;\\;=\\;\\; \\sum_{n=0}^{∞}\\frac{f^{(n)}(a)}{n!}(x-a)^n \\;\\;=\\;\\; f(a) + \\frac{f'(a)}{1!}(x-a) + \\frac{f''(a)}{2~}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 \\; + \\; ...$"
    ]
  ]
}
```
# Power Series - Non-Examples

Power series does NOT permit:
- <strong>negative powers</strong> - for instance, 1 + 𝑥<sup>-1</sup> + 𝑥<sup>-2</sup> + ... is not a power series (it is a [[Laurent Series|Laurent series]])
- <strong>fractional powers</strong> - for instance, 1 + 𝑥<sup>1/2</sup> + 𝑥<sup>2/2</sup> + 𝑥<sup>3/2</sup>+ ... is not a power series (it is a [[Puiseux Series|Puiseux series]])
- <strong>coefficients dependent on 𝑥 </strong>- for an instance, 𝑠𝑖𝑛(𝑥)𝑥 + 𝑠𝑖𝑛(2𝑥)𝑥<sup>2</sup> + 𝑠𝑖𝑛(3𝑥)𝑥<sup>3</sup> +... is not a power series

# Power Series - Polynomial Example

Any polynomial can be easily expressed as a power series around any center 𝑐, although all but finitely many of the coefficients will be zero since a power series has infinitely many terms by definition.

For instance, the polynomial <font style="color: rgb(122,134,154);">𝑓(𝑥) = 𝑥<sup>2</sup> + 2𝑥 + 3</font> can be written as a power series around the center:
- (𝑐 = 0) as: 𝑓(𝑥) = 3 + 2𝑥 + 1𝑥<sup>2</sup> + 0𝑥<sup>3</sup> + 0𝑥<sup>4</sup> + ...
- (𝑐 = 1) as: 𝑓(𝑥) = 6 + 4(𝑥 - 1) + 1(𝑥 - 1)<sup>2</sup> + 0(𝑥 - 1)<sup>3</sup> + 0(𝑥 - 1)<sup>4</sup> + ...
- or indeed around any other center <em>c</em>

One can view power series as being like "polynomials of infinite degree," although power series are not polynomials
# Power Series - Use Cases & Applications
- occur in [[Combinatorics|combinatorics]] as generating functions (a kind of formal power series)
- occur in electronic engineering (under the name of the Z-transform)
- the familiar [[Base10 - Decimal Notation|decimal notation]] for real numbers can also be viewed as an example of a power series, with integer coefficients, but with the argument 𝑥 fixed at 1⁄10
- occur in [[Number Theory|number theory]], the concept of [[p-adic Numbers - prime-adic Numbers|p-adic numbers]] is also closely related to that of a power series

# Power Series - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
