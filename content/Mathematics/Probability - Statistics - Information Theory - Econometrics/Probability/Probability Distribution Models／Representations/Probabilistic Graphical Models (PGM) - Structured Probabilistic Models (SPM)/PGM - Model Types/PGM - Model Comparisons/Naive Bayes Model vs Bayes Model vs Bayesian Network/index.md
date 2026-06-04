---
title: "Naive Bayes Model vs Bayes Model vs Bayesian Network"
created: 2021-09-13T05:26:57.832-05:00
modified: 2021-09-13T05:26:57.832-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Bayesian Networks (BN)|Bayesian Network]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "###### [[Naive Bayes Model - Bayes Model|Naive Bayes Model]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "###### [[Naive Bayes Model - Bayes Model|Bayes Model]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "all three are [[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]]",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "<strong><strong>𝑿</strong></strong> = \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>\\] a set of variables",
        "align": "center"
      },
      {
        "content": "<strong><strong>𝑿</strong></strong> = [𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>] are observed variables\n𝑌 is a hidden variable (to be predicted)",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "learns the APPROXIMATE joint probability of 𝐏(<strong>𝑿</strong>) ≈ 𝛱<sub>𝑋<sub>𝑖</sub>∊<strong><strong>𝑿</strong></strong></sub>𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>))",
      "learns the APPROXIMATE [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(<strong>𝑿</strong>,𝑌) ≈ 𝐏(𝑌) 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(<strong>𝑋<sub>𝑖</sub></strong>|𝑌)",
      "learns the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(<strong>𝑿</strong>,𝑌) = 𝐏(<strong>𝑿</strong>|𝑌)𝐏(𝑌)"
    ],
    [
      "![[Naive Bayes Model vs Bayes Model vs Bayesian Network/bayesian-network-example.png|200]]\nexample bayesian network",
      "![[Naive Bayes Model vs Bayes Model vs Bayesian Network/logistic-regression-vs-naive-bayes-1.png|200]]",
      "![[Naive Bayes Model vs Bayes Model vs Bayesian Network/logistic-regression-vs-naive-bayes-3.png|100]]"
    ],
    [
      "bayesian networks is a generalization of Naive Bayes Models and Bayes Models",
      {
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
