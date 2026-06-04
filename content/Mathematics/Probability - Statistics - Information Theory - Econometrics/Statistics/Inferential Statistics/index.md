---
title: "Inferential Statistics"
created: 2021-09-13T05:28:59.983-05:00
modified: 2023-09-01T14:40:22.003-05:00
parent: "[[Statistics]]"
children:
  - "[[(Parametric vs Non-Parametric) Statistical Methods／Procedures]]"
  - "[[Inferential Statistical Hypothesis Testing]]"
  - "[[Inferential Statistics - Paradigms]]"
  - "[[Interval Estimation]]"
---
````excerpt
<strong>[[Inferential Statistics]] </strong>or<strong> Inductive Statistics </strong>or <strong>Statistical Inference</strong> is the process of inferring something about the population based on what is measured in the sample. Inferential statistics are used to determine if observed data we obtain from a sample (i.e., data we collect) are different from what one would expect by chance alone
````
^excerpt

# Statistics - Introduction & Terminology

![[Statistics - Terminology#^excerpt]]
# Inferential Statistics - Paradigms

![[Inferential Statistics - Paradigms#^excerpt]]
# Inferential Statistics - Forms/Methods
Each form/method represents a different way of using the information obtained in the [[Statistics - Terminology|sample]] to draw conclusions about the [[Statistics - Terminology|population]]
- <strong>Estimation</strong>
	- <strong>[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Point/Parameter Estimation]]</strong> - given [[Statistics - Terminology|sample]] data, estimate the value of the unknown [[Statistics - Terminology|population parameter]]
	- <strong>[[Interval Estimation]]</strong> - given [[Statistics - Terminology|sample]] data, estimate the value of an unknown [[Statistics - Terminology|population parameter]] using an interval of values that is likely to contain the true value of that parameter (and state how confident we are that this interval indeed captures the true value of the parameter)
- <strong>[[Inferential Statistical Hypothesis Testing]]</strong> - begin with a claim about the population (we will call the null hypothesis), and we check whether or not the given [[Statistics - Terminology|sample]] data provide evidence AGAINST this claim

Inferential statistics uses [[Probabilistic Inference - Approximate Inference|probabilistic approximate inference algorithms]] to infer probabilities of the global population
# Inferential Statistics - Process
1. A random <strong>[[Statistics - Terminology|sample]]</strong> is taken from the <strong>[[Statistics - Terminology|population]]</strong>
2. In order to estimate a <strong>[[Statistics - Terminology|population parameter]]</strong>, a <strong>[[Statistics - Terminology|sample statistic]]</strong> is calculated from the [[Statistics - Terminology|sample]] (e.g. [[Inferential Statistics|sample mean]], [[Inferential Statistics|sample proportion]], etc.)
	- This is where [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimation]] is used
3. We then learn about the [[Statistics - Terminology|sample statistic]]'s <strong>[[Sampling Distribution - Finite-Sample Distribution|sampling distribution]]</strong>
	- This is where [[Interval Estimation|interval estimation]] is used
4. Using this <strong>[[Sampling Distribution - Finite-Sample Distribution|sampling distribution]]</strong> we can make inferences about our <strong>[[Statistics - Terminology|population parameter]] </strong>based on our [[Statistics - Terminology|sample statistic]]
	- This is where [[Inferential Statistical Hypothesis Testing|hypothesis testing]] is used

# Inferential Statistics - Goals
- <strong>[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Parameter Estimation]] / [[Interval Estimation]] / [[Inferential Statistical Hypothesis Testing|Hypothesis Testing]]</strong>
	- the parameters/properties of a [[Statistics - Terminology|population]] distribution are called [[Statistics - Terminology|population parameters]] and they are often an unknown constant. These parameters need to be estimated in such a way that the resulting<em> distribution model</em> best explains the observed data
	- e.g. the parameters of a [[Inferential Statistics|normal distribution]] are its <em>mean</em> and <em>standard deviation</em>. So, if you know that the data resembles the model of a normal distribution, parameter estimation would amount to trying to learn the true values of its mean and standard deviation
- <strong>[[Structure Learning|Structure Estimation]] - Distribution Model Comparison</strong>
	- the distribution of a [[Statistics - Terminology|population]] is often unknown
	- we propose a set of possible distribution models, have each model parameter estimated, and then use model comparison to select the model that best explains the observed data
- <strong>Data Prediction</strong>
	- for this goal, you usually have a distribution model produced from the first 2. Then you use them to predict future data.
	- e.g. after measuring the heights of females in a sample, you can estimate the mean and standard deviation of the distribution for all adult females. Then you can use these values to predict the probability of a randomly chosen female having a height within a certain range of values
