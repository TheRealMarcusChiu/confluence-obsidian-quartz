---
title: "Fourier Transform - Inverse Fourier Transform"
created: 2021-09-13T05:25:10.368-05:00
modified: 2025-08-18T13:17:34.602-05:00
parent: "[[(Signal-to-Frequency ／ Fourier-Transform) Algorithms]]"
children: []
---
###### Fourier Transform
````excerpt
- takes CONTINUOUS time signal as input and outputs a CONTINUOUS frequency spectrum
- is a continuous transformation of a continuous function into its constituent frequencies
- cases:
	- periodic function → converts its Fourier series in the frequency domain
	- non-periodic function → converts it into a continuous frequency domain
- can ONLY transform nice well-behaved functions that go to 0 at ±∞; otherwise use [[Laplace Transform - Inverse Laplace Transform|Laplace Transform]]
````
^excerpt

# Fourier Transform - Definition
###### Fourier Transform Pair:
1. The Fourier Transform 𝐹{·} of a function 𝑓(𝑥) is defined as:
	- $\hat{f}(w) = F\{f(x)\}(w) = \int_{-∞}^∞ f(x) e^{-iwx}dx$
2. The Inverse Fourier Transform 𝐹<sup>-1</sup>{·} of a function 𝑓ˆ(𝑥) is defined as:
	- $f(x) = F^{-1}\{\hat{f}(w)\}(t) = \frac{1}{2\pi} \int_{-∞}^∞ \hat{f}(w) e^{iwx}dw$

# Other
- [[Fourier Transform vs Laplace Transform]]

# Tutorial
- [3Blue1Brown's Intro to Fourier Transform](https://www.youtube.com/watch?v=spUNpyF58BY)
- [Steve Brunton's The Fourier Transform](https://www.youtube.com/watch?v=jVYs-GTqm5U&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=10)
- [Brad Osgood's Video Lectures](https://www.youtube.com/view_play_list?p=B24BC7956EE040CD)
