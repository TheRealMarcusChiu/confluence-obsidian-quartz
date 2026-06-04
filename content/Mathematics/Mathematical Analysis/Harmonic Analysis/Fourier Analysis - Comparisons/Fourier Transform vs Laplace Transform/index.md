---
title: "Fourier Transform vs Laplace Transform"
created: 2023-12-13T13:00:09.674-06:00
modified: 2023-12-13T13:06:01.551-06:00
parent: "[[Fourier Analysis - Comparisons]]"
children: []
---
Say we have a function 𝑓(𝑡). With it let's create a new function 𝐹(𝑡) such that:
- $F(t) = f(t) e^{-st} H(t)$

where:
- $H(t) = \begin{cases} 0 & t < 0 \\ 1 & \text{otherwise} \\ \end{cases}$

Given the above functions: the [[Laplace Transform - Inverse Laplace Transform|Laplace transform]] of 𝑓(𝑡) is the [[Fourier Transform - Inverse Fourier Transform|Fourier transform]] of 𝐹(𝑡)
