---
title: "Bayesian Inference vs Frequentist Inference"
created: 2021-09-13T05:29:11.890-05:00
modified: 2023-09-01T13:54:17.720-05:00
parent: "[[Inferential Statistics - Paradigms]]"
children: []
---
- <strong>frequentist statistics</strong> - makes predictions based on an estimate of 𝜃
- <strong>bayesian statistics</strong> - makes predictions based on all possible values of 𝜃
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Frequentist (Statistical Inference - Inferential Statistics)|Frequentist Inference]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Bayesian (Statistical Inference - Inferential Statistics)|Bayesian Inference]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Based On",
        "bg": "#F4F5F7"
      },
      "- [[Probability as Long-Term Frequency|Long-Term Frequencies]]",
      "- [[Probability as Degrees of Belief|Degrees of Belief]]\n- [[Probability as Degrees of Logical Support|Degrees of Logical Support]]"
    ],
    [
      {
        "content": "Perspective",
        "bg": "#F4F5F7"
      },
      "- true [[Statistics - Terminology|parameter]] value 𝜃 is fixed and unknown\n- point-estimate value 𝜃ˆ is a random variable (because point-estimator is a function of data that is randomly drawn)",
      "- true parameter value 𝜃 is unknown is represented with a prior distribution 𝐏(𝜃)\n- point-estimate value 𝜃ˆ is a posterior distribution 𝐏(𝜃|𝑛𝑒𝑤-𝑑𝑎𝑡𝑎) an update of prior distribution given new data"
    ],
    [
      {
        "content": "What's Computed",
        "bg": "#F4F5F7"
      },
      "- estimate best 𝜃ˆ",
      "- 𝐏(𝜃|𝑛𝑒𝑤-𝑑𝑎𝑡𝑎) posterior distribution"
    ],
    [
      {
        "content": "What is Needed",
        "bg": "#F4F5F7"
      },
      "- probability distribution model\n- data/observations/evidence",
      "- probability distribution model\n- data/observations/evidence\n- prior probability 𝐏(𝜃)"
    ],
    [
      {
        "content": "Methods",
        "bg": "#F4F5F7"
      },
      "- [[Maximum Likelihood Estimation (MLE)|Maximum Likelihood Estimate (MLE)]]\n- [[Ordinary Least Squares (OLS)]] (for regression)",
      "- [[Maximum a Posteriori (MAP)]]\n- [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes Box]]"
    ],
    [
      {
        "content": "What",
        "bg": "#F4F5F7"
      },
      "- only repeatable random events have probabilities",
      "- non-repeatable events can have probabilities"
    ],
    [
      {
        "content": "How Uncertainty is Handled",
        "bg": "#F4F5F7"
      },
      "addresses uncertainty of point-estimate 𝜃ˆ by evaluating its variance <font style=\"color: rgb(128,128,128);\">(the variance of the estimator is an assessment of how the estimate might change with alternative samplings of the observed data)</font>",
      "addresses uncertainty of point-estimator posterior-distribution 𝐏(𝜃|𝑛𝑒𝑤-𝑑𝑎𝑡𝑎) by simply integrating over it"
    ],
    [
      {
        "content": "Other",
        "bg": "#F4F5F7"
      },
      "[[Confidence Interval (CI)|Confidence Interval]]",
      "[[Credible／Credibility Interval|Credible/Credibility Interval]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Example [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Parameter Estimation]] (Frequentist vs Bayesian)

say we want to estimate the average height of adult females. assume that:
- height has a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]
- [[Univariate Analysis Descriptive Statistics|standard deviation]] is available and we don’t need to estimate it

Therefore, the only thing we need to estimate is the [mean of the normal distribution](https://www.probabilisticworld.com/mean-variance-probability-distributions/)

```merge-table
{
  "rows": [
    [
      {
        "content": "Frequentist Approach",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bayesian Approach",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "frequentist reasoning\n> I don’t know what the mean female height is. However, I know that its value is fixed (not a random one). Therefore, I cannot assign probabilities to the mean being equal to a certain value, or being less than/greater than some other value. The most I can do is collect data from a sample of the population and estimate its mean as the value which is most consistent with the data.\n\nThe value mentioned in the end is known as the [[Maximum Likelihood Estimation (MLE)|maximum likelihood estimate]]. It depends on the distribution of the data and I won’t go into details on its calculation. However, for normally distributed data, it’s quite straightforward: the maximum likelihood estimate of the population mean is equal to the sample mean",
      "bayesian reasoning\n> I agree that the mean is a fixed and unknown value, but I see no problem in representing the uncertainty probabilistically. I will do so by defining a probability distribution over the possible values of the mean and use sample data to update this distribution.\n\nIn a Bayesian setting, the newly collected data makes the probability distribution over the parameter narrower. More specifically, narrower around the parameter’s true (unknown) value. You do the updating process by applying [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' theorem]]\n\nThe way to update the entire probability distribution is by applying Bayes’ theorem to each possible value of the parameter"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

Frequentists’ main objection to the Bayesian approach is the use of prior probabilities. Their criticism is that there is always a subjective element in assigning them. Paradoxically, Bayesians consider not using prior probabilities one of the biggest weaknesses of the frequentist approach
