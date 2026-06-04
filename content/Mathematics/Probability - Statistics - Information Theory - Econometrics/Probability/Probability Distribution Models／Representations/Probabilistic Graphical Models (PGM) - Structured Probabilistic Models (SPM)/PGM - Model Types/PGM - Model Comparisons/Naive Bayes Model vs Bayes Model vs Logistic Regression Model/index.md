---
title: "Naive Bayes Model vs Bayes Model vs Logistic Regression Model"
created: 2021-09-13T05:26:58.423-05:00
modified: 2021-09-13T05:26:58.423-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Logistic (Logit) Regression Model|Logistic Regression Model]]",
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
        "content": "<strong>𝑿 </strong>= [<strong>𝑋<sub>1</sub></strong><strong>, ..., 𝑋<sub>𝑛</sub></strong>] are observed variables\n𝑌 is a hidden variable (to be predicted)",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]\n\nlearns the [[Conditional Probability Distribution (CPD)|conditional probability distribution]] 𝐏(𝑌|<strong>𝑿</strong>)",
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]]\n\nlearns the APPROXIMATE [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(<strong>𝑿</strong>,𝑌) ≈ 𝐏(𝑌) 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(<strong>𝑋<sub>𝑖</sub></strong>|𝑌)",
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]]\n\nlearns the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(<strong>𝑿</strong>,𝑌) = 𝐏(<strong>𝑿</strong>|𝑌)𝐏(𝑌)"
    ],
    [
      "![[Naive Bayes Model vs Bayes Model vs Logistic Regression Model/logistic-regression-vs-naive-bayes-2.png|200]]",
      "![[Naive Bayes Model vs Bayes Model vs Logistic Regression Model/logistic-regression-vs-naive-bayes-1.png|200]]",
      "![[Naive Bayes Model vs Bayes Model vs Logistic Regression Model/logistic-regression-vs-naive-bayes-3.png|100]]"
    ],
    [
      {
        "content": "if <em>naive bayes assumption</em> holds, then as the number of training examples → infinity, logistic regression and naive bayes are identical\nif <em>naive bayes assumption</em> doesn't hold, then as the number of training examples → infinity, logistic regression is more accurate than naive bayes\nif <em>naive bayes assumption</em> holds and the number of training examples is scarce, naive bayes performs better than logistic regression",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "Bayes Model is rarely used because:\n- requires a unrealistic number of training examples (more than Naive Bayes Classifier)\n- use Naive Bayes where it assumes all attributes describing 𝑋 are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝑌",
        "align": "center",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "Naive Bayes has a higher [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|bias]] but lower [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|variance]] compared to Logistic Regression",
        "align": "center",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
