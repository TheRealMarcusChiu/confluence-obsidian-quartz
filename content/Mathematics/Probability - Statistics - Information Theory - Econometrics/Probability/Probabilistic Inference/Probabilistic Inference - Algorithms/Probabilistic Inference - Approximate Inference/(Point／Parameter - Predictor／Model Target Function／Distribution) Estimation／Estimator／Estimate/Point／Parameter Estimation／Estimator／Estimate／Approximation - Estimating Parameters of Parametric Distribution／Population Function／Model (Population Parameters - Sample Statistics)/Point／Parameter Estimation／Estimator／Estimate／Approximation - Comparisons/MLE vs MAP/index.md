---
title: "MLE vs MAP"
created: 2021-09-13T05:28:09.629-05:00
modified: 2021-12-24T17:37:17.011-06:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]]"
children: []
---
# MLE vs MAP - Introduction

Consider the following 3 scenarios:
- a coin is tossed 10 times and comes out heads 7 out of 10 times
- a coin is tossed 100 times and comes out heads 70 out of 100 times
- a coin is tossed 1000 times and comes out heads 700 out of 1000 times

[[Maximum Likelihood Estimation (MLE)|Maximum Likelihood Estimate (MLE)]] can't distinguish between the 3 above
- treats parameters 𝜃 as random variables with some distribution
- bayesian prediction combines sufficient statistics from imaginary samples (i.e. prior beliefs) and real data (i.e. likelihood)
- asymptotically the same as Maximum Likelihood Estimate (MLE), but MAP allows prior beliefs and their strength/weakness over seen data

[[Maximum a Posteriori (MAP)]]
- is a Bayesian approach by allowing the prior to influence the choice of the point estimate
- has the advantage of leveraging information that is brought by the prior and cannot be found in the training data. This additional information helps to reduce the variance in the MAP point estimate (in comparison to the maximum likelihood estimate). However, it does so at the price of increased bias

# MLE vs MAP - Bayes Theorem

see [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Theorem]]

```merge-table
{
  "rows": [
    [
      "![[MLE vs MAP/bayes' theorem.jpg|301]]\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝜃|𝑋)</font> = <font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃</font><font style=\"color: rgb(0,128,0);\">)</font><font style=\"color: rgb(0,0,255);\">𝐏(𝜃</font><font style=\"color: rgb(0,0,255);\">)</font> / 𝐏(𝑋)\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝜃|𝑋)</font> ∝ <font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃</font><font style=\"color: rgb(0,128,0);\">)</font><font style=\"color: rgb(0,0,255);\">𝐏(𝜃)</font>\n- <font style=\"color: rgb(128,0,0);\">a posterior</font> ∝ <font style=\"color: rgb(0,128,0);\">likelihood</font> \\* <font style=\"color: rgb(0,0,255);\">prior</font>",
      "- [[Maximum Likelihood Estimation (MLE)|MLE]] - maximizes the likelihood\n- [[Maximum a Posteriori (MAP)|MAP]] - maximizes the a posterior\n\nMLE of 𝜃 given data 𝑋 is defined as:\n- <font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝑋</font><font style=\"color: rgb(128,128,128);\">|𝜃)</font>\n\nMAP of 𝜃 given data 𝑋 is defined as either:\n- <font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝜃|𝑋)</font>\n- <font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub>𝐏(𝑋|𝜃)𝐏(𝜃)</font>\n\nif 𝜃 is uniformly distributed over a finite interval, then the MLE and the MAP will be the same"
    ]
  ]
}
```
# MLE vs MAP - Computing Estimates of Specific Distributions

```merge-table
{
  "rows": [
    [
      {
        "content": "MLE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "MAP",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "```dataview\nLIST\nFROM \"\"\nWHERE file.folder = [[MLE - Computing MLE of Specific Distributions]].file.folder + \"/\" + [[MLE - Computing MLE of Specific Distributions]].file.name\n```",
      "```dataview\nLIST\nFROM \"\"\nWHERE file.folder = [[MAP - Computing MAP of Specific Distributions]].file.folder + \"/\" + [[MAP - Computing MAP of Specific Distributions]].file.name\n```"
    ]
  ]
}
```
