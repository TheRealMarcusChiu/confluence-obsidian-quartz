---
title: "Matrix Exponentiation／Exponentials"
created: 2022-04-21T19:19:41.424-05:00
modified: 2022-04-21T19:55:30.118-05:00
parent: "[[Algorithm Types]]"
children: []
---
The <strong>matrix exponential</strong> is a matrix function on [[Square Matrix|square matrices]] analogous to the ordinary exponential function
# Matrix Exponentiation - Formula

Let 𝑋 be an 𝑛×𝑛 [real](https://en.wikipedia.org/wiki/Real_number) or [complex](https://en.wikipedia.org/wiki/Complex_number) [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)). The exponential of 𝑋, denoted by <em>𝑒</em><sup><em>𝑋</em></sup> or 𝑒𝑥𝑝(𝑋), is the 𝑛×<em>𝑛</em> matrix given by the [[Power Series／Expansion|power series]]

> [!indent]
> 𝑒<sup>𝑋</sup> = 𝛴<sub>0≤𝑘≤∞</sub> \[1/𝑘! · 𝑋<sup>𝑘</sup>\]

Where 𝑋<sup>0</sup> is defined to be the [[Identity Matrix|identity matrix]] 𝐼

The above series always converges, so the exponential of 𝑋 is well-defined. If 𝑋 is a 1×1 matrix the matrix exponential of 𝑋 is a 1×1 matrix whose single element is the ordinary exponential of the single element of 𝑋
