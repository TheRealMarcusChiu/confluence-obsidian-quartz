---
title: "Log-Probability vs Log-Odds"
created: 2021-09-13T05:26:33.186-05:00
modified: 2021-11-05T19:04:17.420-05:00
parent: "[[Probability vs Odds]]"
children: []
---
<strong>log-odds</strong> puts odds onto the same scale
# For Example

with just odds:
- if the odds are against 1 to 6, then the odds is <font style="color: rgb(255,0,0);">1/6</font>
- if the odds are in favor 6 to 1, then the odds is <font style="color: rgb(255,0,0);">6</font>

now with log-odds:
- if the odds are against 1 to 6, then the 𝑙𝑜𝑔(odds) is 𝑙𝑜𝑔(1/6) = <font style="color: rgb(0,128,0);">-1.79</font>
- if the odds are in favor 6 to 1, then the 𝑙𝑜𝑔(odds) is 𝑙𝑜𝑔(6/1) = <font style="color: rgb(0,128,0);">1.79</font>

# Details
- 𝑙𝑜𝑔(odds) = 𝑙𝑜𝑔\[probability / (1 - probability)\]

this log of the ratio of probabilities is called the [[Logistic Function - Sigmoid Function (Standard Logistic Function)|logit function]] and forms the basis for [[Logistic (Logit) Regression Model|logistic regression]]
