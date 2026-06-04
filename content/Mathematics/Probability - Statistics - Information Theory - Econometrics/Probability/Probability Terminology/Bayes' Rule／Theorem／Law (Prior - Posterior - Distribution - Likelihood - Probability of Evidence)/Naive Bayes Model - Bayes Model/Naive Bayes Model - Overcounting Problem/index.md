---
title: "Naive Bayes Model - Overcounting Problem"
created: 2021-09-13T05:28:36.057-05:00
modified: 2021-09-13T05:28:36.057-05:00
parent: "[[Naive Bayes Model - Bayes Model]]"
children: []
---
[[Naive Bayes Model - Bayes Model|Naive Bayes Model]] is based the assumption that the variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝑌
- 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝐏(𝑋<sub>1</sub>|𝑌) ... 𝐏(𝑋<sub>𝑛</sub>|𝑌) 𝐏(𝑌) / 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)
- 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ 𝐏(𝑋<sub>1</sub>|𝑌) ... 𝐏(𝑋<sub>𝑛</sub>|𝑌) 𝐏(𝑌)

if the variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} happen to NOT be conditionally independent given 𝑌, this would cause an Overcounting Problem

In other words, correlated variables in {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} which breaks conditional independence

![](https://www.youtube.com/watch?v=_Niy2f-M9KA&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&index=42&ab_channel=MausamJain&t=21s)
