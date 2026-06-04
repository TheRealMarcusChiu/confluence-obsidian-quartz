---
title: "Data Preparation - Handling Missing Values"
created: 2020-05-28T23:25:27.426-05:00
modified: 2020-05-28T23:37:42.386-05:00
parent: "[[Data Preparation／Scrubbing]]"
children: []
---
based on: [http://r-statistics.co/Missing-Value-Treatment-With-R.html](http://r-statistics.co/Missing-Value-Treatment-With-R.html)
### Methods in Handling Missing Values
- deleting the observations
- deleting the variable
- imputation/replace with:
	- constants:
		- [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]
		- [[Median (2-Quantile - 50th Percentile)|median]]
		- [[Mode|mode]]
	- prediction:
		- [[k-Nearest Neighbors (k-NN) Regression]]
		- rpart
		- Multivariate Imputation by Chained Equations (MICE)
