---
title: "Posterior Predictive Distribution vs Posterior Distribution"
created: 2021-09-13T05:27:20.944-05:00
modified: 2021-09-13T05:27:20.944-05:00
parent: "[[Prior Predictive Distribution - Posterior Predictive Distribution]]"
children: []
---
- <strong>posterior distribution </strong>𝐏(𝜃|𝑋) refers to the distribution of <strong>parameter(s)</strong> 𝜃 given observed data 𝑋
- <strong>predictive posterior distribution </strong>𝐏(𝑋ˆ|𝑋) refers to the distribution of<strong> new data </strong>𝑋ˆ given observed data 𝑋

For example in Bayesian [[Ordinary Least Squares (OLS) Regression|linear regression]], you learn a posterior distribution over the 𝑤 parameter of the model 𝑦=𝑤𝑋 given some observed data 𝑋. Then when a new unseen data point 𝑥\* comes in, you want to find the distribution over possible predictions 𝑦\* given the posterior distribution for 𝑤 that you just learned. This distribution over possible 𝑦\*'s given the posterior for 𝑤 is the prediction distribution
- <strong>predictive posterior distribution </strong>
	- is used to predict the label of new data values
	- distribution for future predicted data based on the data you have already seen
