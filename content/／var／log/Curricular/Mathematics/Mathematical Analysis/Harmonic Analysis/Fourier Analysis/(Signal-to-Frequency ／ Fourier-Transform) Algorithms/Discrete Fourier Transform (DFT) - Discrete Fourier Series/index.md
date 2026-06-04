---
title: "Discrete Fourier Transform (DFT) - Discrete Fourier Series"
created: 2022-11-03T22:55:57.868-05:00
modified: 2025-08-18T21:02:54.615-05:00
parent: "[[(Signal-to-Frequency ／ Fourier-Transform) Algorithms]]"
children:
  - "[[Fast Fourier Transform (FFT)]]"
  - "[[Inverse Discrete Fourier Transform (IDFT)]]"
---
###### Discrete Fourier Transform (DFT) - Discrete Fourier Series
````excerpt
- takes a DISCRETE signal as input and outputs a DISCRETE frequency spectrum
- [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|transforms]] data in the time or spatial domain into the frequency domain
- should technically be called a <strong><em>Discrete Fourier Series</em></strong>
- is like a [[Fourier Series]] on data instead of analytic functions
- converts a finite sequence of equally-spaced samples of a function 𝑓(𝑥) into a same-length sequence of equally-spaced samples of the discrete-time Fourier transform (DTFT), which is a complex-valued function of frequency
- is a [[Orthogonal／Orthonormal／Unitary (Transformations／Operations／Operators／Mappings／Maps／Functions)|unitary]], invertible, [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]]
$\mathcal{F}: ℂ^N \to ℂ^N$
- most often uses the [[Fast Fourier Transform (FFT)|FFT]] algorithm to compute the DFT
- is the [[Inverse Function - Anti-Function|inverse]] of the [[Inverse Discrete Fourier Transform (IDFT)]]
````
^excerpt

# DFT - Definition

DFT transforms a sequence of 𝑁 [[Complex Numbers System|complex numbers]] {𝑥<sub>0</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑁-1</sub>} into another sequence of complex numbers, {𝑋<sub>0</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑁-1</sub>}, which is defined by:
- $X_k = \sum_{n=0}^{N-1} e^{-\frac{i2\pi}{N}kn} · x_n$

- $\begin{bmatrix} X_{0} \\ X_{1} \\ X_{2} \\ \vdots \\ X_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & \dots  & 1\\ 1 & w^1 & w^2 & \dots  & w^{N-1} \\ 1 & w^2 & w^4 & \dots  & w^{2(N-1)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & w^{N-1} & w^{2(N-1)} & \dots  & w^{(N-1)^2} \\ \end{bmatrix} \begin{bmatrix} x_{0} \\ x_{1} \\ x_{2} \\ \vdots \\ x_{N-1} \end{bmatrix}$

where:
- $w = e^{-\frac{i2\pi}{N}}$

# IDFT - Definition

[[Inverse Discrete Fourier Transform (IDFT)|IDFT]] transforms a sequence of 𝑁 complex numbers {𝑋<sub>0</sub>, 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑁-1</sub>} into another sequence of complex numbers, {𝑥<sub>0</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑁-1</sub>}, which is defined by:
- $x_k = \frac{1}{N} \sum_{n=0}^{N-1} e^{\frac{i2\pi}{N}kn} · X_n$

- $\begin{bmatrix} x_{0} \\ x_{1} \\ x_{2} \\ \vdots \\ x_{N-1} \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 & \dots  & 1\\ 1 & W^1 & W^2 & \dots  & W^{N-1} \\ 1 & W^2 & W^4 & \dots  & W^{2(N-1)} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & W^{N-1} & W^{2(N-1)} & \dots  & W^{(N-1)^2} \\ \end{bmatrix} \begin{bmatrix} X_{0} \\ X_{1} \\ X_{2} \\ \vdots \\ X_{N-1} \end{bmatrix}$

where:
- $W = e^{\frac{i2\pi}{N}}$

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Steve Brunton's The Discrete Fourier Transform (DFT)](https://www.youtube.com/watch?v=nl9TZanwbBk&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=15)
