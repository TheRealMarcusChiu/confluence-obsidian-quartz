---
title: "Complex Fourier Series"
created: 2023-12-13T14:35:20.452-06:00
modified: 2023-12-13T20:41:15.214-06:00
parent: "[[Fourier Series]]"
children: []
---
###### Complex Fourier Series
````excerpt
- is a [[Complex Numbers System|complex]] form of the [[Fourier Series]]
````
^excerpt

# Definition

The complex Fourier Series of a periodic function 𝑓(𝑥) of period 𝑃:
- $f(x) = \sum_{n=-∞}^∞ C_n e^{i2\pi \frac{n}{P}x}$
- $f(x) = \sum_{n=-∞}^∞ (𝛼_n + i𝛽_n) (cos(2\pi \frac{n}{P} x) + i \; sin(2\pi \frac{n}{P} x))$

where:
- 𝐶<sub>𝑛</sub> is defined by the [[Inner Product of Functions|inner product of functions]]:
	- $C_n = ⟨f(x),e^{i2\pi \frac{n}{P}x}⟩$
- 𝑒<sup>𝑖𝑥</sup> is [[Euler's Equation／Formula|Euler's Formula]]

Note that:
- $⟨e^{i2\pi \frac{a_1}{P}x}, e^{i2\pi \frac{a_2}{P}x}⟩ = \int_0^P e^{i2\pi \frac{a_1}{P}x} e^{-i2\pi \frac{a_2}{P}x} dx$
- $⟨e^{i2\pi \frac{a_1}{P}x}, e^{i2\pi \frac{a_2}{P}x}⟩ = \int_0^P e^{i2\pi \frac{1}{P}x (a_1 - a_2)} dx$
- $⟨e^{i2\pi \frac{a_1}{P}x}, e^{i2\pi \frac{a_2}{P}x}⟩ = \int_0^P e^{\frac{i2\pi (a_1 - a_2)}{P}x} dx$
- $⟨e^{i2\pi \frac{a_1}{P}x}, e^{i2\pi \frac{a_2}{P}x}⟩ = \frac{P}{i 2\pi (a_1 - a_2)} [e^{\frac{i 2\pi (a_1 - a_2)}{P} x}]_0^P$
- $⟨e^{i2\pi \frac{a_1}{P}x}, e^{i2\pi \frac{a_2}{P}x}⟩ = \begin{cases} 0 & \text{if } a_1 ≠ a_2 \\ 1 & \text{if } a_1 = a_2 \\ \end{cases}$

# Resources
- [Steve Brunton's Complex Fourier Series](https://www.youtube.com/watch?v=4cfctnaHyFM&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=5)
