---
title: "Fourier Series"
created: 2021-09-13T05:25:10.547-05:00
modified: 2026-03-31T00:24:15.777-05:00
parent: "[[(Signal-to-Frequency ／ Fourier-Transform) Algorithms]]"
children:
  - "[[Complex Fourier Series]]"
---
###### Fourier Series
````excerpt
- is a way of representing a periodic function as a (possibly infinite) sum of [[Sine Function|sine]] and [[Cosine Function|cosine]] functions
	- for functions that are not periodic, the [[Fourier Transform - Inverse Fourier Transform|Fourier transform]] is used in place of the <em>Fourier series</em>
	- for functions of two variables that are periodic in both variables, the trigonometric basis in the Fourier series is replaced by the [[Spherical Harmonics|spherical harmonics]]
- is a continuous transformation of a continuous periodic signal
- is analogous to a [[Taylor Series vs Taylor Polynomial|Taylor series]], which represents functions as possibly infinite sums of monomial terms
- cases:
	- periodic function → converts into a discrete [[Exponential Function|exponential function]] or sine and cosine function
	- non-periodic function → not applicable
````
^excerpt

# Fourier Series - Definition

> [!expand-ui]- Cosine & Sine Form
> The Fourier series of a periodic function 𝑓(𝑥) of period 𝑃 is:
> - $f(x) = \frac{A_0}{2} + \sum_{n=1}^∞ [A_n cos(2\pi\frac{n}{P}x) + B_n sin(2\pi \frac{n}{P}x)]$
>
> where:
> - 𝑃 - is the interval length of the repeating period
> - $A_n = \frac{2}{P} \int_0^P f(x) cos(2\pi \frac{n}{P} x) dx \;\;\; \text{for } n ≥ 1$
> - $B_n = \frac{2}{P} \int_0^P f(x) sin(2\pi \frac{n}{P} x) dx \;\;\; \text{for } n ≥ 1$
>
> ###### Intuition of 𝐴<sub>𝑛</sub> and 𝐵<sub>𝑛</sub>
>
> > [!expand]- Click here to expand...
> > 𝐴<sub>𝑛</sub> and 𝐵<sub>𝑛</sub> act as [[Inner Product of Functions|inner product of functions]]:
> > - $A_n = \frac{2}{P} \int_0^P f(x) cos(2\pi \frac{n}{P} x) dx = \frac{1}{||cos(2\pi \frac{n}{P} x)||^2} ⟨f(x), cos(2\pi \frac{n}{P} x)⟩$
> > - $B_n = \frac{2}{P} \int_0^P f(x) sin(2\pi \frac{n}{P} x) dx = \frac{1}{||sin(2\pi \frac{n}{P} x)||^2} ⟨f(x), sin(2\pi \frac{n}{P} x)⟩$
> >
> > In other words how much of 𝑓(𝑥) is in 𝑐𝑜𝑠(2𝜋(𝑛/𝑃)𝑥) and 𝑠𝑖𝑛(2𝜋(𝑛/𝑃)𝑥) for each 𝑛 from 1 to 𝑃.
> >
> > Thus, the Fourier Series transforms a periodic function from the 𝑥 domain into the frequency domain.

> [!expand-ui]- Complex Form Fourier Series
> The complex Fourier Series of a periodic function 𝑓(𝑥) of period 𝑃 is:
> - $f(x) = \sum_{n=-∞}^∞ C_n e^{i2\pi \frac{n}{P}x}$
> - $f(x) = \sum_{n=-∞}^∞ (𝛼_n + i𝛽_n) (cos(2\pi \frac{n}{P} x) + i \; sin(2\pi \frac{n}{P} x))$
>
> where:
> - 𝐶<sub>𝑛</sub> is defined by the [[Inner Product of Functions|inner product of functions]]:
> 	- $C_n = ⟨f(x),e^{i2\pi \frac{n}{P}x}⟩$
> - 𝑒<sup>𝑖𝑥</sup> is [[Euler's Equation／Formula|Euler's Formula]]
>
> For more details, see: [[Complex Fourier Series]]
# Fourier Series - Derivation
- [Sal Khan's Series - Derivation of Fourier Series](https://www.khanacademy.org/science/electrical-engineering/ee-signals#ee-fourier-series)

# Fourier Series - Examples

> [!expand-ui]- Fourier Series of a Square Wave
> Find the Fourier series of the square wave, for which the function over one period is
>
> > [!indent]
> ![[Fourier Series/fourier-series-example-1.png|200]]
>
> > [!indent]
> ![[Fourier Series/fourier-series-example-graph.png]]
>
> The function is odd and has an average value of zero, with period 𝑇=1. Therefore, all 𝑎<sub>𝑘</sub> vanish; one must only compute the integrals to find the 𝑏<sub>𝑘</sub>
>
> > [!indent]
> ![[Fourier Series/fourier-series-example-2.png|301]]
>
> where in the last line the fact that 𝑘 is a positive integer was used. Therefore, the Fourier series for the square wave is
>
> > [!indent]
> ![[Fourier Series/fourier-series-example-solution.png|220]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Steve Brunton's Fourier Series](https://www.youtube.com/watch?v=MB6XGQWLV04&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=2)
