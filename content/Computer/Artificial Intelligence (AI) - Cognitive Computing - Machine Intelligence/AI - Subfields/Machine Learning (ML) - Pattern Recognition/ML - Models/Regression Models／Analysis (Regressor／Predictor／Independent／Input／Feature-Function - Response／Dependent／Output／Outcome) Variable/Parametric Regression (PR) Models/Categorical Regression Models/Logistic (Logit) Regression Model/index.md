---
title: "Logistic (Logit) Regression Model"
created: 2020-04-22T13:25:14.949-05:00
modified: 2022-10-01T20:05:02.523-05:00
parent: "[[Categorical Regression Models]]"
children:
  - "[[Binomial／Binary Logistic Regression (BLR)]]"
  - "[[Multinomial／N-nary Logistic Regression (MLR)]]"
  - "[[Ordinal Logistic Regression]]"
---
###### Logistic (Logit) Regression Model
- is a [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative]]-typed [[ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)|supervised]] classification algorithm that models the relationship between:
	- a single discrete/categorical response/dependent variable 𝑌 (for continuous/scalar use [[Ordinary Least Squares (OLS) Regression|linear regression]])
	- one or more explanatory/predictor/covariate/independent variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>}. predictor variable types:
		- continuous/scalar/numerical predictor
		- discrete/categorical predictor - itself can be either bi/multi-[nominal or ordinal](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=330786)
- unlike [[Ordinary Least Squares (OLS) Regression|linear regression]] which outputs continuous number values, logistic regression transforms its output using the [[Logistic Function - Sigmoid Function (Standard Logistic Function)|logistic sigmoid function]] to return a [[Probability|probability]] value which can then be mapped to two or more discrete classes

# Logistic Regression - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Binomial／Binary Logistic Regression (BLR)|Binomial/Binary Logistic Regression (BLR)]]",
        "bg": "#F4F5F7"
      },
      "- [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] target variable can have only 2 possible types: “0” or “1”\n- e.g. “win” vs “loss”, “pass” vs “fail”, “dead” vs “alive”, etc"
    ],
    [
      {
        "content": "[[Multinomial／N-nary Logistic Regression (MLR)|Multinomial/Nominal Logistic Regression (MLR)]]",
        "bg": "#F4F5F7"
      },
      "- [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] target variable can have 3 or more possible types which are not ordered (i.e. types have no quantitative significance)\n- e.g. “disease A” vs “disease B” vs “disease C”"
    ],
    [
      {
        "content": "[[Ordinal Logistic Regression]]",
        "bg": "#F4F5F7"
      },
      "- [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|ordinal]]/ordered target variable\n- e.g. a test score can be categorized as: “very poor”, “poor”, “good”, “very good”. Here, each category can be given a score like 0, 1, 2, 3"
    ]
  ]
}
```
# Logistic Regression - Other
- [[Conditional Random Field (CRF) vs Logistic Regression Model]]
- [[Naive Bayes Model vs Bayes Model vs Logistic Regression Model|Logistic Regression Model vs Naive Bayes Model vs Bayes Model]]
- [[Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)|Logistic Regression Model vs Maximum Entropy Markov Model]]
- [[Logistic Regression vs Linear SVM vs Non-Linear SVM]]
- [[Logistic Regression (LR) vs Linear Discriminant Analysis (LDA)]]
