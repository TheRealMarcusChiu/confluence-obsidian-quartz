---
title: "Naive Bayes Model - Bayes Model"
created: 2021-09-13T05:28:34.899-05:00
modified: 2021-09-13T05:28:34.899-05:00
parent: "[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)]]"
children:
  - "[[Bivariate／Boolean／Binary Multinoulli／Multinomial Naive Bayes]]"
  - "[[Naive Bayes Model - Learning]]"
  - "[[Naive Bayes Model - Overcounting Problem]]"
---
<strong>Naive Bayes Model</strong>
- is a type of [[PGM - Model Types|probabilistic graphical model]]
- is the simplest [[Bayesian Networks (BN)|Bayesian Network]] models
- is a [[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]]
- is a [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|high bias model]]
- is based on applying [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' theorem]] with strong (naïve) [[Probability Independence (Marginal Independence - Conditional Independence)|independence]] assumptions between the features

### Bayes Model vs Naive Bayes Model

```merge-table
{
  "rows": [
    [
      {
        "content": "###### Bayes Model",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "###### Naive Bayes Model",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>𝑿 </strong>= [𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>] are observed variables\n𝑌 is a hidden variable (to be predicted)",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "based on [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' theorem]]\n- 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝑌) 𝐏(𝑌) / 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)\n- 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝑌) 𝐏(𝑌)",
      "assumption that 𝑋<sub>1</sub> through 𝑋<sub>𝑛</sub> are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝑌\n- 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝐏(𝑋<sub>1</sub>|𝑌) ... 𝐏(𝑋<sub>𝑛</sub>|𝑌) 𝐏(𝑌) / 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)\n- 𝐏(𝑌|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ 𝐏(𝑋<sub>1</sub>|𝑌) ... 𝐏(𝑋<sub>𝑛</sub>|𝑌) 𝐏(𝑌)"
    ],
    [
      "directly estimates parameters for:\n- 𝐏(𝑌)\n- 𝐏(<strong>𝑿</strong>|𝑌)",
      "directly estimates parameters for:\n- 𝐏(𝑌)\n- approximate 𝐏(<strong>𝑿</strong>|𝑌) with 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(<strong>𝑋<sub>𝑖</sub></strong>|𝑌)"
    ],
    [
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|generative]] linear classifier - learns the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(<strong>𝑿</strong>,𝑌) = 𝐏(<strong>𝑿</strong>|𝑌)𝐏(𝑌)",
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|generative]] linear classifier - learns the APPROXIMATE [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] 𝐏(<strong>𝑿</strong>,𝑌) ≈ 𝐏(𝑌) 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(<strong>𝑋<sub>𝑖</sub></strong>|𝑌)"
    ],
    [
      {
        "content": "![[Naive Bayes Model - Bayes Model/logistic-regression-vs-naive-bayes-3.png|100]]",
        "align": "center"
      },
      {
        "content": "![[Naive Bayes Model - Bayes Model/logistic-regression-vs-naive-bayes-1.png|200]]",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Naive Bayes Model - Versions
- Gaussian Naive Bayes
- Multinomial Naive Bayes

### Subpages

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
- [[Hidden Markov Model (HMM) vs Naive Bayes Model]]
- [[Naive Bayes Model vs Bayes Model vs Logistic Regression Model]]
- [[Naive Bayes Model vs Bayes Model vs Bayesian Network]]
