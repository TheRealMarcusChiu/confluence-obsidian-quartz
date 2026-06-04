---
title: "Padé Approximants"
created: 2023-12-20T17:51:17.972-06:00
modified: 2023-12-20T17:56:11.873-06:00
parent: "[[Approximating Known Target Functions]]"
children: []
---
###### Padé Approximants
````excerpt
- is the "best" approximation of a function near a specific point by a rational function of a given order
````
^excerpt

# Definition

Given a function 𝑓 and two integers 𝑚≥0 and 𝑛≥1, the <em>Padé approximant</em> of order \[𝑚/𝑛\] is the rational function:
- $R(x) = \frac{\sum_{j=0}^m p_j x^j}{1 + \sum_{k=1}^n q_k x^k} = \frac{p_0 + p_1 x + p_2 x^2 + \cdots + p_m x^m}{1 + q_1 x + q_2 x^2 + \cdots + q_n x^n}$

which agrees with 𝑓(𝑥) to the highest possible order, which amounts to
- $\begin{align} f(0) &= R(0), \\ f'(0) &= R'(0), \\ f''(0) &= R''(0), \\ &\mathrel{\;\vdots} \\ f^{(m+n)}(0) &= R^{(m+n)}(0). \end{align}$

# Introduction

![](https://www.youtube.com/watch?v=szMaPkJEMrw)
