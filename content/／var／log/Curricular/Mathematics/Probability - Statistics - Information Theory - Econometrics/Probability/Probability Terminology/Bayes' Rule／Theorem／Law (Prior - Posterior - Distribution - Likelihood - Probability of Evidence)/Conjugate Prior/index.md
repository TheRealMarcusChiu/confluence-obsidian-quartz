---
title: "Conjugate Prior"
created: 2021-09-13T05:28:32.592-05:00
modified: 2024-02-13T11:56:51.281-06:00
parent: "[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)]]"
children:
  - "[[Conjugate Prior - of Bernoulli／Binomial Distribution]]"
  - "[[Conjugate Prior - of Multinoulli／Multinomial Distribution]]"
  - "[[Conjugate Prior - of Normal Distribution]]"
---
###### Conjugate Prior
````excerpt
- a <strong>conjugate prior</strong> is an algebraic convenience, giving a closed-form expression for the posterior; otherwise, numerical integration may be necessary
````
^excerpt

# Conjugate Prior - Definition
- 𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃) 𝐏(𝜃) <font style="color: rgb(128,128,128);">\# </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|bayes theorem]]

where:
- 𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub> - observed data
- 𝜃 - parameter(s) and its value(s) of a distribution model

Prior 𝐏(𝜃) is the <strong>CONJUGATE PRIOR</strong> of the likelihood function 𝐏(𝑋|𝜃), if the resulting posterior 𝐏(𝜃|𝑋) has the same distribution model as 𝐏(𝜃)
# Conjugate Prior - Why Use Them?
- helpful in computing [[Maximum a Posteriori (MAP)]]

# Conjugate Prior - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Likelihood Distribution",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Conjugate Prior Distribution",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Proof",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]]",
      "[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]]",
      "[[Conjugate Prior - of Normal Distribution]]"
    ],
    [
      "[[Bernoulli Distribution]]\n[[Binomial Distribution]]",
      "[[Beta Distribution]]",
      "[[Conjugate Prior - of Bernoulli／Binomial Distribution|Conjugate Prior - of Bernoulli/Binomial Distribution]]"
    ],
    [
      "[[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli Distribution]]\n[[Multinomial Distribution]]",
      "[[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Multivariate Beta Distribution]]\n[[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet Distribution]]",
      "[[Conjugate Prior - of Multinoulli／Multinomial Distribution|Conjugate Prior - of Multinoulli/Multinomial Distribution]]"
    ]
  ]
}
```

[table of conjugate priors](https://en.wikipedia.org/wiki/Conjugate_prior#Table_of_conjugate_distributions)
# Resources
![](https://www.youtube.com/watch?v=aPNrhR0dFi8&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG&index=30)
