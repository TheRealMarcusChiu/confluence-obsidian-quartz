---
title: "Bayesian Network (BN) vs Markov Random Field (MRF)"
created: 2021-09-13T05:26:53.169-05:00
modified: 2021-09-13T05:26:53.169-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
````excerpt
A [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network (MN)]] is similar to a [[Bayesian Networks (BN)|Bayesian Network (BN)]] in its representation of independences and dependencies; the differences being that Bayesian networks are directed and acyclic, whereas Markov networks are undirected and may be cyclic. Thus, a Markov network can represent certain independencies and dependencies that a Bayesian network cannot (such as cyclic dependencies); on the other hand, it can't represent certain dependencies that a Bayesian network can (such as induced dependencies)

more difference described here: [[Bayesian Network (BN) vs Markov Random Field (MRF)]]
````
^excerpt

### Bayesian Networks vs Markov Networks

```merge-table
{
  "rows": [
    [
      {
        "content": "Property",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bayesian Networks",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Markov Random Fields",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Factorization",
      "[[Conditional Probability Distribution (CPD)|conditional probability distributions]]",
      "[[MN／MRF - Potential Functions (𝜙)|potential functions]]"
    ],
    [
      "Distribution",
      "product of conditional probability distributions",
      "normalized product of potentials"
    ],
    [
      "Cycles",
      "not allowed",
      "allowed"
    ],
    [
      "Partition Function",
      "1",
      "potentially [[Complexity Classes|NP-Hard]] to compute"
    ],
    [
      "Independence Test",
      "[[BN - (D-Separation ｜ D-Connection)|d-separation]]",
      "graph separation"
    ]
  ],
  "tableStyle": "width: 682.667px;"
}
```
### Converting Between BN & MN

When converting a BN to a MN, the MN dependencies MUST be a superset of the BN dependencies:

> [!indent]
> I(Bayes) ⊆ I(Markov)

When converting a MN to a BN, the BN dependencies MUST be a superset of the MN dependencies:

> [!indent]
> I(Markov) ⊆ I(Bayes)

where:

> [!indent]
> I(..) are [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Maps]]

conversions:
- [[BN - To Markov Network]]
- [[MN／MRF - To Bayesian Network|MN/MRF - To Bayesian Network]]
