---
title: "LR - Standard Regression Assumptions"
created: 2020-04-23T16:12:17.863-05:00
modified: 2021-12-21T04:17:22.732-06:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
````excerpt
###### Standard Regression Assumptions
- each observed response 𝑦<sup>(𝑖)</sup> are independent [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]] random variables with:
	- expectation = 𝐄\[𝑌<sup>(𝑖)</sup>|𝑋<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑋<sub>𝑘</sub><sup>(𝑖)</sup>\] = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑋<sub>1</sub><sup>(𝑖)</sup>+ ... + 𝜃<sub>𝑘</sub>𝑋<sub>𝑘</sub><sup>(𝑖)</sup>
	- variance = 𝑉𝑎𝑟(𝑌<sup>(𝑖)</sup>|𝑋<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑋<sub>𝑘</sub><sup>(𝑖)</sup>) = 𝜎<sup>2</sup> <font style="color: rgb(128,128,128);">\# variance is same constant for all 𝑋<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑋<sub>𝑘</sub><sup>(𝑖)</sup></font>
- predictors {𝑋<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑋<sub>𝑘</sub><sup>(𝑖)</sup>} are considered non-random because they are observed
- as a consequence:
	- 𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>have [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]]
```merge-table
{
  "rows": [
    [
      {
        "content": "Desired Properties",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Required Assumptions",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- 𝜃ˆ<sub>𝑂𝐿𝑆</sub> is an unbiased estimate of 𝜃",
      "- 𝐄\\[𝜖<sup>(𝑖)</sup>\\] = 0, ∀𝑖"
    ],
    [
      "- 𝜃ˆ<sub>𝑂𝐿𝑆</sub> is an unbiased estimate of 𝜃\n- 𝜃ˆ<sub>𝑂𝐿𝑆</sub> is a [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|BLUE estimator]]",
      "- 𝐄\\[𝜖<sup>(𝑖)</sup>\\] = 0, ∀𝑖\n- 𝑉𝑎𝑟(𝜖<sup>(𝑖)</sup>) = constant \\< ∞, ∀𝑖\n- 𝐶𝑜𝑣(𝜖<sup>(𝑖)</sup>,𝜖<sup>(𝑗)</sup>) = 0, ∀𝑖≠𝑗"
    ],
    [
      "- 𝜃ˆ<sub>𝑂𝐿𝑆</sub> is an unbiased estimate of 𝜃\n- 𝜃ˆ<sub>𝑂𝐿𝑆</sub> is a BLUE estimator\n- 𝜃ˆ<sub>𝑂𝐿𝑆</sub> is mathematically equivalent to [[Maximum Likelihood Estimation (MLE)|MLE]]",
      "- 𝐄\\[𝜖<sup>(𝑖)</sup>\\] = 0, ∀𝑖\n- 𝑉𝑎𝑟(𝜖<sup>(𝑖)</sup>) = constant \\< ∞, ∀𝑖\n- 𝐶𝑜𝑣(𝜖<sup>(𝑖)</sup>,𝜖<sup>(𝑗)</sup>) = 0, ∀𝑖≠𝑗\n- All 𝜖 are [[Independent and Identically Distributed (IID)]] from the [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]"
    ]
  ]
}
```
###### Assumptions in ANOVA
- normality of sampling distribution of means - the distribution of sample means is [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]]
- errors 𝑒<sup>(𝑖)</sup>& 𝑒<sup>(𝑗)</sup> are independent of each other (where 𝑒<sup>(𝑖)</sup> = 𝑦̂<sup>(𝑖)</sup> - 𝑦<sup>(𝑖)</sup>)
- absence of outliers - outliers have been removed from the dataset
- homogeneity of variance - population variances at different levels of each independent variable {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} are equal
````
^excerpt
