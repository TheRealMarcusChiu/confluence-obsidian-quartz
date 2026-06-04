---
title: "PGM - Model Types"
created: 2021-09-13T05:26:38.564-05:00
modified: 2023-12-25T12:39:27.701-06:00
parent: "[[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)]]"
children:
  - "[[Bayesian Networks (BN)]]"
  - "[[Boltzmann Machines (BM)]]"
  - "[[Deep Belief Networks (DBN)]]"
  - "[[Gaussian Network Models (GNM)]]"
  - "[[Markov Networks／Nets - Markov Random Fields (MRF)]]"
  - "[[PGM - Model Comparisons]]"
  - "[[PGM - Template Models]]"
  - "[[Random Fields]]"
  - "[[Stochastic／Random／Markov Models／Process]]"
---
````excerpt
Here's a list of [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|Probabilistic Graphical Models]] which are a type of [[Probability Distribution Models／Representations|Probability Distribution Models/Representations]] using [[Graphical Models|graphical models]]
# PGM - Other
- [[PGM - Template Models]]
- [[PGM - Model Comparisons]]

# PGM - Model Types
![[PGM - Model Types/graphical-models.png|500]]

```merge-table
{
  "rows": [
    [
      {
        "content": "PGM Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "DIRECTED UNDIRECTED",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "ACYCLIC CYCLIC",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "GENERATIVE\nDISCRIMINATIVE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description / Formula",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Naive Bayes Model - Bayes Model|Bayes Model]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DIRECTED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "ACYCLIC",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "GENERATIVE",
        "bg": "blue",
        "align": "center"
      },
      "- 𝐏(𝑌,𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝐏(𝑌) 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝑌)"
    ],
    [
      {
        "content": "[[Naive Bayes Model - Bayes Model|Naive Bayes Model]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DIRECTED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "ACYCLIC",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "GENERATIVE",
        "bg": "blue",
        "align": "center"
      },
      "- 𝐏(𝑌,𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ≈ 𝐏(𝑌) 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(<strong>𝑋<sub>𝑖</sub></strong>|𝑌)"
    ],
    [
      {
        "content": "[[Binomial／Binary Logistic Regression (BLR)|Binomial Logistic Regression]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNDIRECTED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "ACYCLIC",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "DISCRIMINATIVE",
        "bg": "yellow",
        "align": "center"
      },
      "- 𝐏(𝑌=1|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = 𝑒<sup>𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝜃<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\\]</sup> / \\[1 + 𝑒<sup>𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝜃<sub>𝑖</sub>·𝑋<sub>𝑖</sub>\\]</sup>\\]"
    ],
    [
      {
        "content": "[[Bayesian Networks (BN)|Bayesian Networks]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DIRECTED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "ACYCLIC",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "GENERATIVE",
        "bg": "blue",
        "align": "center"
      },
      "- 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = (1/𝑍) \\* 𝛱<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \\]\n- 𝑍 = 1"
    ],
    [
      {
        "content": "[[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNDIRECTED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "EITHER",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "GENERATIVE",
        "bg": "blue",
        "align": "center"
      },
      "- 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = (1/𝑍) \\* 𝛱<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \\]\n- 𝑍 = 𝛴<sub>𝒙<sub>1</sub>∊𝑋<sub>1</sub></sub> ... 𝛴<sub>𝒙<sub>𝑛</sub>∊𝑋<sub>𝑛</sub></sub>𝛱<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \\]"
    ],
    [
      {
        "content": "[[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNDIRECTED",
        "bg": "blue"
      },
      {
        "content": "ACYCLIC",
        "bg": "yellow"
      },
      {
        "content": "DISCRIMINATIVE",
        "bg": "yellow",
        "align": "center"
      },
      "- 𝐏(𝒀=𝒚|𝑿=𝒙) = \\[1/𝑍(𝒙)\\] · 𝛱<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\\[ 𝜙<sub>𝑐</sub>(𝒚,𝒙) \\]\n- 𝑍(𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝑘</sub>∊𝑌<sub>𝑘</sub></sub> <strong>\\[</strong> 𝛱<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\\[ 𝜙<sub>𝑐</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑘</sub>, 𝒙) \\] <strong>\\]</strong>"
    ],
    [
      {
        "content": "[[Stochastic／Random／Markov Models／Process|Stochastic Model]]\n[[Stochastic／Random／Markov Models／Process|Markov Model]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DIRECTED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "EITHER",
        "bg": "blue",
        "align": "center"
      },
      {
        "align": "center"
      },
      "NA"
    ],
    [
      {
        "content": "[[Gaussian Network Models (GNM)|Gaussian Network Model]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNDIRECTED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "EITHER",
        "bg": "blue",
        "align": "center"
      },
      {
        "align": "center"
      },
      "TODO"
    ],
    [
      {
        "content": "[[Random Fields]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "",
      "TODO"
    ],
    [
      {
        "content": "[[Boltzmann Machines (BM)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNDIRECTED",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "EITHER",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "align": "center"
      },
      "TODO"
    ],
    [
      {
        "content": "[[Deep Belief Networks (DBN)]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "content": "GENERATIVE",
        "bg": "#deebff",
        "align": "center"
      },
      "TODO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt
