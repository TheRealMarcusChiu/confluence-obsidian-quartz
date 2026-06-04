---
title: "MN／MRF - Variants (Gibbs Distribution)"
created: 2021-09-13T05:26:50.159-05:00
modified: 2021-12-11T05:08:06.514-06:00
parent: "[[Markov Networks／Nets - Markov Random Fields (MRF)]]"
children:
  - "[[Conditional／Discriminative Random Fields (CRF)]]"
  - "[[Log-Linear Model - Log-Level Model - Structured Logistic Regression]]"
---
# Types - Based on Types of Potential Function Used

see: [[MN／MRF - Potential Functions (𝜙)|potential function]]

```merge-table
{
  "rows": [
    [
      {
        "content": "MN/MRF Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Factorization (𝚽<strong>) </strong>Given a Markov Network Structure",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Pairwise Markov Networks",
        "bg": "#F4F5F7"
      },
      "- a specific type of Gibbs Distribution where every factor has exactly 2 nodes\n- represents a [[Probability Distributions|probability distribution]] as a product of pair-wise factors/potential functions\n- only contains two-node (pairwise) potential functions (no multi-node potential functions)\n- max number of parameters equals:\n\t- = ((𝑛=num-variables) [[Combination Without Replacement (Binomial Coefficient - n Choose k)|Choose]] 2) \\* (𝑘=size-of-variable-domain)<sup>2</sup>\n\t- ≈ 𝑂(𝑛<sup>2</sup>𝑘<sup>2</sup>)\n- with that said, not every probability distribution can be represented as a pairwise markov network, because the number of free parameters equals 𝑂(𝑘<sup>𝑛</sup>) which is much bigger than 𝑂(𝑛<sup>2</sup>𝑘<sup>2</sup>)\n- [Daphne Koller - YouTube](https://www.youtube.com/watch?v=KWNtPHVf2VQ&t=55s)",
      "there is only 1 unique factorization (𝚽)\n- 𝚽 = <strong>{</strong>𝜙<sub>𝑐</sub>(𝐴, 𝐵), 𝜙<sub>𝑐</sub>(𝐴, 𝐷), 𝜙<sub>𝑐</sub>(𝐵, 𝐷), 𝜙<sub>𝑐</sub>(𝐷, 𝐸), 𝜙<sub>𝑐</sub>(𝐶, 𝐷)<strong>}</strong>"
    ],
    [
      {
        "content": "General Gibbs Distribution",
        "bg": "#F4F5F7"
      },
      "- represents a [[Probability Distributions|probability distribution]] as a product of multi-node factors/potential functions\n- a generalization of Pairwise Markov Networks, consisting of multi-node potential functions\n- max number of parameters equals:\n\t- = (𝑘=size-of-variable-domain)<sup>(𝑛=num-variables)</sup>\n\t- ≈ 𝑂(𝑘<sup>𝑛</sup>)\n- thus, able to capture more probability distributions than Pairwise Markov Networks\n- [Daphne Koller - YouTube](https://www.youtube.com/watch?v=IzlYOX0wrz0&t=4s)",
      "there can be multiple factorizations (𝚽)\n- 𝚽 = <strong>{</strong>𝜙<sub>𝑐</sub>(𝐴, 𝐵, 𝐷), 𝜙<sub>𝑐</sub>(𝐷, 𝐸), 𝜙<sub>𝑐</sub>(𝐶, 𝐷)<strong>}</strong>\n- 𝚽 = <strong>{</strong>𝜙<sub>𝑐</sub>(𝐴, 𝐵), 𝜙<sub>𝑐</sub>(𝐴, 𝐷), 𝜙<sub>𝑐</sub>(𝐵, 𝐷), 𝜙<sub>𝑐</sub>(𝐷, 𝐸), 𝜙<sub>𝑐</sub>(𝐶, 𝐷)<strong>} </strong>same as pairwise"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Representing MN/MRF in a Different Way
- [[Log-Linear Model - Log-Level Model - Structured Logistic Regression]]

# MN/MRF - As Discriminative Model
- [[Conditional／Discriminative Random Fields (CRF)|Conditional/Discriminative Random Fields (CRF)]]
