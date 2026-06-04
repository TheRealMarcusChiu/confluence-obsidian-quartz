---
title: "Instrumental Variables (IV) Estimator"
created: 2021-09-13T05:27:56.475-05:00
modified: 2021-09-13T05:27:56.475-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[IV Estimator - Inference]]"
---
###### Instrumental Variables (IV) Estimator
- deals with the problem of [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogeneity]]/[[Correlation - Correlation Coefficient|correlation]] between a [[Regression Models／Analysis (Regressor／Predictor／Independent／Input／Feature-Function - Response／Dependent／Output／Outcome) Variable|regressor]] and another regressor or [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|error]] (which breaks one of the [[Gauss-Markov Assumptions - OLS Assumptions|Gauss-Markov/OLS Assumptions]])
- can be interpreted as a [[Two-Stage Least Squares (2SLS)|Two-Stage Least Squares (2SLS) Estimator]]
- is a [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|biased estimator]]
- is a [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|consistent estimator]] as long as the instrument variable is good

### IV Estimator - Resources
- [Ben Lambert's Video Lectures](https://www.youtube.com/watch?v=NLgB2WGGKUw&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=136&ab_channel=BenLambert)
- [https://www.statisticshowto.com/instrumental-variable/#:~:text=An%20instrumental%20variable%20](https://www.statisticshowto.com/instrumental-variable/#:~:text=An%20instrumental%20variable%20)

### IV Estimator - Other
- [[Least Squares Estimate vs Instrumental Variables Estimate]]
- [[Instrumental Variable Estimate vs 2 Stage Least Squares Estimate]]
- [[Instrumental Variable Estimate vs Ordinary Least Squares Estimate]]

### IV Estimator - Intuition & Derivation

assume we have:
- a [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear model]]:
	- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>
- [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogeneity]]/[[Correlation - Correlation Coefficient|correlation]] between 𝑒<sub>𝑖</sub> and 𝑥<sub>𝑖</sub> exists:
	- 𝐶𝑜𝑟(𝑒<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0

the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|least squares estimate]] 𝜃<sub>1</sub>ˆ of true [[Statistics - Terminology|population parameter]] 𝜃<sub>1</sub> is defined as:
- 𝜃<sub>1</sub>ˆ<sub></sub>= 𝛥𝑦/𝛥𝑥
- 𝜃<sub>1</sub>ˆ<sub></sub>= (𝛥𝑦<sub>𝑥</sub> + 𝛥𝑦<sub>𝑒</sub>)/𝛥𝑥 <font style="color: rgb(128,128,128);">\# because of endogeneity</font>
- 𝜃<sub>1</sub>ˆ<sub></sub>= (𝛥𝑦<sub>𝑥</sub>/𝛥𝑥) + (𝛥𝑦<sub>𝑒</sub>/𝛥𝑥)
- 𝜃<sub>1</sub>ˆ<sub></sub>= 𝜃<sub>1</sub> + (𝛥𝑦<sub>𝑒</sub>/𝛥𝑥) <font style="color: rgb(128,128,128);">\# population parameter 𝜃<sub>1</sub>= (𝛥𝑦<sub>𝑥</sub>/𝛥𝑥) by definition</font>

PROBLEM: therefore, the [[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|least squares estimate]] 𝜃<sub>1</sub>ˆ is a BIASED estimate of the true population parameter 𝜃<sub>1</sub>because of endogeneity

SOLUTION: introduce a third variable (instrumental variable) 𝑧<sub>𝑖</sub> such that:
- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0
- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0

next we define:
- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>)
- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝜃<sub>0</sub>) + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) <font style="color: rgb(128,128,128);">\# by [[Properties of Covariance|properties of covariance]]</font>
- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) = 0 + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) <font style="color: rgb(128,128,128);">\# covariance with constant equals 0</font>
- 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) = 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 0 <font style="color: rgb(128,128,128);">\# by above statement 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0</font>

therefore:
- 𝜃<sub>1</sub>= 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)

therefore, the IV Estimate 𝜃<sub>1</sub>ˆ of the true population parameter 𝜃<sub>1</sub> is defined as:
- 𝜃<sub>1</sub>ˆ<sub></sub>= 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)

###### Resource Videos

> [!expand]- Click here to expand...
> ![](https://www.youtube.com/watch?v=OWHCbEP56ms&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=138&frags=wn&ab_channel=BenLambert)
>
> ![](https://www.youtube.com/watch?v=cX5q_dKt6iU&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=139&frags=wn&ab_channel=BenLambert)
### IV Estimator - Examples

> [!expand]- Click here to expand...
> ![](https://www.youtube.com/watch?v=pI9YGSJ2qPk&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=140&ab_channel=BenLambert)
>
> ![](https://www.youtube.com/watch?v=41gFMpOu0Is&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=141&ab_channel=BenLambert)
>
> ![](https://www.youtube.com/watch?v=q_hh_SOCzIs&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=142&ab_channel=BenLambert)
### IV Estimator - Bad/Weak/Good Instrument Variables

```merge-table
{
  "rows": [
    [
      {
        "content": "IV Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Conditions of IV Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "IV Estimate is [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|Unbiased]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "IV Estimate is [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|Consistent]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Good Instrument Variables",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <font style=\"color: rgb(0,128,0);\">𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0</font>\n- <font style=\"color: rgb(0,128,0);\">𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0</font>",
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "Bad Instrument Variables",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <font style=\"color: rgb(255,153,0);\">𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) <font style=\"color: rgb(0,128,0);\">≠</font>/<font style=\"color: rgb(255,0,0);\">=</font> 0</font>\n- <font style=\"color: rgb(255,0,0);\">𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) ≠ 0</font>",
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "Weak Instrument Variables",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <font style=\"color: rgb(255,0,0);\">𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≈ 0</font>\n- <font style=\"color: rgb(0,128,0);\">𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0</font>",
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,153,0);\"><strong>?</strong></font>",
        "bg": "yellow",
        "align": "center"
      }
    ]
  ]
}
```

<strong>Resource Videos</strong>

> [!expand]- Click here to expand...
> ![](https://www.youtube.com/watch?v=-x2yrtL4qV8&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=145&ab_channel=BenLambert)
>
> ![](https://www.youtube.com/watch?v=MSVTJedpBME&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=146&frags=wn&ab_channel=BenLambert)
>
> ![](https://www.youtube.com/watch?v=0V7trG99nbc&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=147&frags=wn&ab_channel=BenLambert)
### IV Estimator - Biasness & Consistency

> [!expand]- bias
> an explanation on why the IV Estimate 𝜃<sub>1</sub>ˆ<sub></sub>of population parameter 𝜃<sub>1</sub> is biased
>
> assume we have:
> - a [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear model]] that accurately models the [[Population Distribution|population distribution]]:
> 	- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>
> - [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogeneity]]/[[Correlation - Correlation Coefficient|correlation]] exists between 𝑒<sub>𝑖</sub> and 𝑥<sub>𝑖</sub>:
> 	- 𝐶𝑜𝑟(𝑒<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0
>
> then the IV Estimate 𝜃<sub>1</sub>ˆ<sub></sub>of population parameter 𝜃<sub>1</sub> is biased, in other words:
> - 𝐄\[𝜃<sub>1</sub>ˆ\] ≠ 𝜃<sub>1</sub>
>
> from [[Instrumental Variable Estimate vs 2 Stage Least Squares Estimate]] we see that IV Estimate is similar to 2SLS Estimate. In 2SLS we have 2 stages of LS regression:
> 1. 𝑥<sub>𝑖</sub>= 𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑧<sub>𝑖</sub> + 𝜀<sub>𝑖</sub>
> 2. 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub><font style="color: rgb(128,128,128);">\# original regression model</font>
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "KNOWN {𝛿<sub>0</sub>, 𝛿<sub>1</sub>}",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "UNKNOWN {𝛿<sub>0</sub>, 𝛿<sub>1</sub>}",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "Assume we KNOW the values of {𝛿<sub>0</sub>, 𝛿<sub>1</sub>}. Thus:\n- 𝑥<sub>𝑖</sub><sup>𝑡𝑟𝑢𝑒</sup>= 𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑧<sub>𝑖</sub>\n\nplug this into the original regression model:\n- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub><sup>𝑡𝑟𝑢𝑒</sup> + 𝑒<sub>𝑖</sub>\n\nbecause the values of {𝛿<sub>0</sub>, 𝛿<sub>1</sub>} are KNOWN, 𝑥<sub>𝑖</sub><sup>𝑡𝑟𝑢𝑒</sup>contains none of 𝜀<sub>𝑖</sub>, thus 𝜀<sub>𝑖</sub> is completely uncorrelated with 𝑧<sub>𝑖</sub>. Thus there is no correlation between 𝑒<sub>𝑖</sub> and 𝑥<sub>𝑖</sub><sup>𝑡𝑟𝑢𝑒</sup>",
>       "In reality, the values of {𝛿<sub>0</sub>, 𝛿<sub>1</sub>} are UNKNOWN and are estimated with {𝛿<sub>0</sub>ˆ, 𝛿<sub>1</sub>ˆ}. Thus:\n- 𝑥̂<sub>𝑖</sub>= 𝛿<sub>0</sub>ˆ + 𝛿<sub>1</sub>ˆ𝑧<sub>𝑖</sub>+ 𝜀<sub>𝑖</sub>\n\nplugging into the original regression model:\n- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥̂<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>\n\nbecause the values of {𝛿<sub>0</sub>, 𝛿<sub>1</sub>} are UNKNOWN, 𝑥̂<sub>𝑖</sub>contains 𝜀<sub>𝑖</sub>, because of sampling error {𝛿<sub>0</sub>, 𝛿<sub>1</sub>} ≠ {𝛿<sub>0</sub>ˆ, 𝛿<sub>1</sub>ˆ} and 𝑥̂<sub>𝑖</sub> ≠ 𝑥<sub>𝑖</sub><sup>𝑡𝑟𝑢𝑒</sup>. Thus there is some correlation between 𝜀<sub>𝑖</sub> and 𝑧<sub>𝑖</sub>. Thus there is some correlation between 𝑒<sub>𝑖</sub> and 𝑥<sub>𝑖</sub><sup>𝑡𝑟𝑢𝑒</sup>"
>     ]
>   ]
> }
> ```
>
> <strong>Resource Video</strong>![](https://www.youtube.com/watch?v=lr0NYwwG6T4&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=149&frags=wn&ab_channel=BenLambert)

> [!expand]- consitency
> an explanation on why the IV Estimate 𝜃<sub>1</sub>ˆ<sub></sub>of population parameter 𝜃<sub>1</sub> is consistent
>
> assume we have:
> - a [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear model]] that accurately models the [[Population Distribution|population distribution]]:
> 	- 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>
> - [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogeneity]]/[[Correlation - Correlation Coefficient|correlation]] exists 𝑒<sub>𝑖</sub> and 𝑥<sub>𝑖</sub>:
> 	- 𝐶𝑜𝑟(𝑒<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0
>
> then the IV Estimate 𝜃<sub>1</sub>ˆ<sub></sub>of population parameter 𝜃<sub>1</sub> is consistent, in other words:
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub>
>
> <strong>PROOF</strong>
>
> first let's take the definition an IV Estimate:
> - 𝜃<sub>1</sub>ˆ<sub></sub>= 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)
>
> as 𝑛→∞ we have:
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>) / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) <font style="color: rgb(128,128,128);">\# because 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub></font>
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \[𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝜃<sub>0</sub>) + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)\] / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) <font style="color: rgb(128,128,128);">\# by</font> [[Properties of Covariance|properties of covariance]]
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \[0 + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)\] / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) <font style="color: rgb(128,128,128);">\# covariance with a constant is 0</font>
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \[0 + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 0\] / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)<font style="color: rgb(128,128,128);"> \# 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0 by condition of good instrumental variable</font>
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)
> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub>
>
> hence, proved
>
> <strong>Resource Video</strong>
>
> ![](https://www.youtube.com/watch?v=R84P0I0T3-o&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=150&frags=wn&ab_channel=BenLambert)
