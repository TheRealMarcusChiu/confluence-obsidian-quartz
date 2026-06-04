---
title: "Cook's Distance"
created: 2024-01-24T21:56:10.803-06:00
modified: 2026-05-21T00:09:23.034-05:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
###### Cook's Distance
````excerpt
- is used to determine the influence of a data point and highlight particular points worth investigating for validity
- it can also be used to highlight regions of the 𝑋 space that need further investigating with more data
````
^excerpt

# Formula

The distance 𝐷<sub>𝑖</sub> for data point 𝑖 is defined as:
- $D_i = \frac{\sum_{j=1}^n (\hat{y}_j - \hat{y}_{j(i)})^2}{p \hat{𝜎}^2}$

where:
- 𝑦̂<sub>𝑗(𝑖)</sub> - is the fitted value for data point 𝑗 with the 𝑖<sup>th</sup> observation removed
