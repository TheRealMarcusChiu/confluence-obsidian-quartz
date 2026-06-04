---
title: "ML - Experience Type (Supervised／Unsupervised／Semi-Supervised／Self-Supervised／Multi-Instance／Reinforcement Learning)"
created: 2019-08-23T16:38:26.457-05:00
modified: 2026-01-01T01:14:17.455-06:00
parent: "[[ML - Model Types／Classifications／Categorizations]]"
children:
  - "[[Self-Supervised Learning (SSL) - Contrastive Non-Contrastive Self-Supervised Learning (SSL)]]"
  - "[[Semi-Supervised Learning]]"
  - "[[Unsupervised Learning]]"
---
most [[ML - Models|machine learning algorithms]] experience a dataset (i.e. [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training-set]])
# Experience Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Experience Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Supervised Learning",
        "bg": "#F4F5F7"
      },
      "- input/training data is called training data and has a known label or result\n- target label 𝑦 is provided\n- generally learns 𝐏(𝑌|𝑋) [[Conditional Probability Distribution (CPD)|conditional probability]]\n- usually [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative]] typed learning\n- learn to associate input 𝑥 to outputs 𝑦",
      "[[ML - Probabilistic vs Non-Probabilistic|probabilistic supervised learning]] (estimate 𝐏(𝑌|𝑋) via [[Maximum Likelihood Estimation (MLE)|MLE]] or [[Maximum a Posteriori (MAP)|MAP]])\n- [[Ordinary Least Squares (OLS) Regression|Linear Regression]] - 𝐏(𝑦|𝑥;𝜃) = 𝒩(𝑦;𝜃ᵀ𝑥,𝐼)\n- [[Logistic (Logit) Regression Model|Logistic Regression]] - 𝐏(𝑦=1|𝑥;𝜃) = 𝑠𝑖𝑔𝑚𝑜𝑖𝑑(𝜃ᵀ𝑥)\n- [[Support Vector Machines (SVM)|Support Vector Machine (SVM)]]\n\n[[ML - Probabilistic vs Non-Probabilistic|non-probabilistic supervised learning]]:\n- [[k-Nearest Neighbors (k-NN) Regression|k-Nearest Neighbors (k-NN)]]\n- [[Decision Trees (DT)]]"
    ],
    [
      {
        "content": "[[Unsupervised Learning]]",
        "bg": "#F4F5F7"
      },
      "- input/training data is not labeled and does not have a known result\n- no target label provided\n- generally learns 𝐏(𝑋) [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability]]\n- usually [[ML - Generative／Joint vs Discriminative／Conditional Models|generative]] typed learning",
      "- <strong>[[Clustering|clustering]]</strong> - discover the inherent groupings in the data, such as grouping customers by purchasing behavior (e.g. [[k-Means Clustering]])\n- <strong>association</strong> - discover rules that describe large portions of your data, such as people that buy 𝑋 also tend to buy 𝑌"
    ],
    [
      {
        "content": "[[Semi-Supervised Learning]]",
        "bg": "#F4F5F7"
      },
      "- input/training data uses a small amount of human-labeled data + lots of unlabeled data",
      ""
    ],
    [
      {
        "content": "[[Self-Supervised Learning (SSL) - Contrastive Non-Contrastive Self-Supervised Learning (SSL)|Self-Supervised Learning]]",
        "bg": "#F4F5F7"
      },
      "- input/training data uses no human labels at all; the data creates its own labels",
      ""
    ],
    [
      {
        "content": "[[Instance-Based Learning]]",
        "bg": "#F4F5F7"
      },
      "- an entire collection of examples is labeled as containing or not containing an example of a class",
      ""
    ],
    [
      {
        "content": "[[Reinforcement Learning (RL)|Reinforcement Learning]]",
        "bg": "#F4F5F7"
      },
      "- learns from a dynamic dataset",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Experience - Solving 1 Experience Type With Another
- by [[Probability (Product Rule - Chain Rule)|chain-rule]], we can solve the unsupervised problem of modeling 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) by splitting it into 𝑛 supervised learning problems
- by [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|bayes-rule]], we can solve the supervised learning problem of learning 𝐏(𝑌|𝑋) by using unsupervised learning to learn the joint distribution 𝐏(𝑋,𝑌)
