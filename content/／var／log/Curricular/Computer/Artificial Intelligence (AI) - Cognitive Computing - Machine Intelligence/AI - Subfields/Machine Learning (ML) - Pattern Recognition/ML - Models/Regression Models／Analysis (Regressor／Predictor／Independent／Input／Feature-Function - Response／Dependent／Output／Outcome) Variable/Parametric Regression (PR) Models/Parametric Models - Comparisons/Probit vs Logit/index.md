---
title: "Probit vs Logit"
created: 2020-08-23T14:50:59.092-05:00
modified: 2020-09-26T12:40:12.634-05:00
parent: "[[Parametric Models - Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>[[Logistic (Logit) Regression Model|Logit Model]]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>[[Probit Regression Model|Probit Model]]</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "- both are types of [[General Linear Models vs Generalized Linear Models|generalized linear models]]\n- both can be used for modeling the relationship between:\n\t- one or more numerical or categorical predictor variables\n\t- categorical outcome",
        "colspan": 2
      },
      null
    ],
    [
      "uses something called the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function]] of the [[Logistic Distribution|logistic distribution]]\n\nuses the logistic function:\n- 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub> = 𝒛 = 𝑙𝑛(𝐏/(1-𝐏))",
      "uses something called the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function]] of the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal distribution]]\n\nuses the inverse standard normal distribution function:\n- 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub> = 𝒛 = 𝚽<sup>-1</sup>(𝐏)"
    ]
  ]
}
```
### Resources
- [The Analysis Factor](https://www.theanalysisfactor.com/the-difference-between-logistic-and-probit-regression/)
