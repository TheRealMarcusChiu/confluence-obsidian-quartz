---
title: "Conditional Random Field (CRF) vs Logistic Regression Model"
created: 2021-09-13T05:26:54.007-05:00
modified: 2021-09-13T05:26:54.007-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
[[Logistic (Logit) Regression Model|logistic model]] is a special case of [[Conditional／Discriminative Random Fields (CRF)|conditional random field]]
- [[Logistic (Logit) Regression Model|logistic model]] - is a [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative]] model
- [[Conditional／Discriminative Random Fields (CRF)|conditional random field]] - is a [[ML - Generative／Joint vs Discriminative／Conditional Models|generative]] model

### Conditional Random Field → Logistic Model

Let's see how we can go from a [[Conditional／Discriminative Random Fields (CRF)|conditional random field]] to a [[Logistic (Logit) Regression Model|logistic model]]

A logistic regression model is defined below and we want to derive that from a conditional random field:
- 𝐏<sub>𝜙</sub>(𝑌=1|𝑿) = 𝑒𝑥𝑝(𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\]) / \[1 + 𝑒𝑥𝑝(𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\])\]

Assume the following CRF Model

![[Conditional Random Field (CRF) vs Logistic Regression Model/conditional-random-field-vs-logistic-model.png|301]]

{𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>, 𝑌} - binary variables

{𝜙<sub>1</sub>, ..., 𝜙<sub>𝑛</sub>} - factors / [[MN／MRF - Potential Functions (𝜙)|potential functions]]

𝜙<sub>𝑖</sub>(𝑋<sub>𝑖</sub>,𝑌) = 𝑒𝑥𝑝(𝑤<sub>𝑖</sub>·𝟏(𝑋<sub>𝑖</sub>=1,𝑌=1)) <font style="color: rgb(128,128,128);">\# 𝟏() is an </font>[[Indicator Function - Characteristic Function|indicator function]]

```merge-table
{
  "rows": [
    [
      {
        "content": "𝑥",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑦",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜙<sub>𝑖</sub>(𝑋<sub>𝑖</sub>=𝑥,𝑌=𝑦)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0",
      "0",
      "1"
    ],
    [
      "0",
      "1",
      "1"
    ],
    [
      "1",
      "0",
      "1"
    ],
    [
      "1",
      "1",
      "𝑒𝑥𝑝(𝑤<sub>𝑖</sub>)"
    ]
  ]
}
```
- 𝜙<sub>𝑖</sub>(𝑋<sub>𝑖</sub>,𝑌=1) = 𝑒𝑥𝑝(𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>) <font style="color: rgb(128,128,128);">\# where 𝑋<sub>𝑖</sub> is either 0 or 1</font>
- 𝜙<sub>𝑖</sub>(𝑋<sub>𝑖</sub>,𝑌=0) = 1

By [[PGM - Gibbs Distribution|Gibbs Distribution]] we have the following unnormalized joint distributions 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=1) & 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=0) (let 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}):
- 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=1) = 𝛱<sub>1≤𝑖≤𝑛</sub>\[𝜙<sub>𝑖</sub>(𝑋<sub>𝑖</sub>,𝑌=1)\]
- 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=1) = 𝛱<sub>1≤𝑖≤𝑛</sub>\[𝑒𝑥𝑝(𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>)\]
- 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=1) = 𝑒𝑥𝑝(𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\])

and
- 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=0) = 𝛱<sub>1≤𝑖≤𝑛</sub>\[𝜙<sub>𝑖</sub>(𝑋<sub>𝑖</sub>,𝑌=0)\]
- 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=0) = 𝛱<sub>1≤𝑖≤𝑛</sub>\[1\]
- 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=0) = 1

Now we could compute the normalized conditional distribution 𝐏<sub>𝜙</sub>(𝑌=1|𝑿):
- 𝐏<sub>𝜙</sub>(𝑌=1|𝑿) = 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=1) / \[𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=0) + 𝐏˜<sub>𝜙</sub>(𝑿, 𝑌=1)\]
- 𝐏<sub>𝜙</sub>(𝑌=1|𝑿) = 𝑒𝑥𝑝(𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\]) / \[1 + 𝑒𝑥𝑝(𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\])\]

thus, we have derived the <strong>logistic regression model</strong>
