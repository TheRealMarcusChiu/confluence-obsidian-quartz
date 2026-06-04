---
title: "Mean Absolute Percentage Error (MAPE)"
created: 2021-09-13T05:27:43.630-05:00
modified: 2021-09-13T05:27:43.630-05:00
parent: "[[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis]]"
children: []
---
###### Mean Absolute Percentage Error (MAPE)
- a statistical measure of how accurate a statistical model is
- measures this accuracy as a percentage

### Formula

given:
- a dataset of 𝑛 tuples:
	- (𝑦<sub>1</sub>, 𝒙<sub>1</sub>)
	- (𝑦<sub>2</sub>, 𝒙<sub>2</sub>)
	- ...
	- (𝑦<sub>𝑛</sub>, 𝒙<sub>𝑛</sub>)
- a linear model 𝑓(𝒙) that estimates 𝑦

the<strong> Mean Absolute Percentage Error (MAPE)</strong> is defined as:
- MAPE = (1/𝑛) · 𝛴<sub>1≤𝑖≤𝑛</sub> \[ |𝑓(𝒙<sub>𝑖</sub>) - 𝑦<sub>𝑖</sub>| / 𝑦<sub>𝑖</sub>\]
