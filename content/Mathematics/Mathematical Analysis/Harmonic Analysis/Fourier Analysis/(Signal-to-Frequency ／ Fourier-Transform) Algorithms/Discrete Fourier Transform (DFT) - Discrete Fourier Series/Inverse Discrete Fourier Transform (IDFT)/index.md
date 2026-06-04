---
title: "Inverse Discrete Fourier Transform (IDFT)"
created: 2023-12-11T21:06:16.075-06:00
modified: 2023-12-13T16:10:36.301-06:00
parent: "[[Discrete Fourier Transform (DFT) - Discrete Fourier Series]]"
children: []
---
###### Inverse Discrete Fourier Transform (IDFT)
````excerpt
- is the [[Inverse Function - Anti-Function|inverse]] of the [[Discrete Fourier Transform (DFT) - Discrete Fourier Series]]
- [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|transforms]] data in the frequency domain into the time or spatial domain
````
^excerpt

# IDFT - Definition

IDFT transforms a sequence of 𝑁 [[Complex Numbers System|complex numbers]] {𝑋<sub>0</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑁-1</sub>} into another sequence of complex numbers, {𝑥<sub>0</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑁-1</sub>}, which is defined by:
- $x_k = \frac{1}{N} \sum_{n=0}^{N-1} e^{\frac{i2\pi}{N}kn} · X_n$

- $\begin{bmatrix} x_{0} \\ x_{1} \\ x_{2} \\ \vdots \\ x_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & \dots  & 1\\ 1 & W^1 & W^2 & \dots  & W^{N-1} \\ 1 & W^2 & W^4 & \dots  & W^{2(N-1)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & W^{N-1} & W^{2(N-1)} & \dots  & W^{(N-1)^2} \\ \end{bmatrix} \begin{bmatrix} X_{0} \\ X_{1} \\ X_{2} \\ \vdots \\ X_{N-1} \end{bmatrix}$

where:
- $W = e^{\frac{i2\pi}{N}}$
