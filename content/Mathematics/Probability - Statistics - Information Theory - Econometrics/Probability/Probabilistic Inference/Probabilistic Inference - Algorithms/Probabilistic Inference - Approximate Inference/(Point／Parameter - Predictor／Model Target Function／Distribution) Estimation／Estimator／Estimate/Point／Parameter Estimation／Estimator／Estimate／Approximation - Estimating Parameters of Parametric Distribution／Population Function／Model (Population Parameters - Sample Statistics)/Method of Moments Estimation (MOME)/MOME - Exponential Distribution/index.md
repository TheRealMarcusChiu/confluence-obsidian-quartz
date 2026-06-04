---
title: "MOME - Exponential Distribution"
created: 2021-09-13T05:28:08.075-05:00
modified: 2021-09-13T05:28:08.075-05:00
parent: "[[Method of Moments Estimation (MOME)]]"
children: []
---
###### [[Method of Moments Estimation (MOME)|MOME]] for Exponential Distribution

Let {𝑋<sub>1</sub>, ..., 𝑋<sub>n</sub>} be a sample from an [[Exponential Distribution|Exponential(𝜆) Distribution]]

How to estimate 𝜆?

The number of unknown parameters is 𝑘 = 1. So, we need only one equation

note that:
- 𝑚<sub>1</sub> = (1/n) ∑<sub>1≤𝑖≤n</sub>\[ 𝑋<sub>𝑖</sub><sup>1</sup> \] = X̄ <font style="color: rgb(128,128,128);">\# where </font><font style="color: rgb(128,128,128);">X̄ is the</font> [[Sample Mean|sample mean]]
- μ<sub>1</sub>= 1/𝜆 <font style="color: rgb(128,128,128);">\# expected value of Exponential(𝜆)</font>

solve 𝑚<sub>1</sub> = μ<sub>1</sub>
- 𝑚<sub>1</sub> = μ<sub>1</sub>
- X̄ = 1/𝜆
- 𝜆<sub>𝑚𝑜𝑚𝑒𝑛𝑡</sub> = 1/X̄
