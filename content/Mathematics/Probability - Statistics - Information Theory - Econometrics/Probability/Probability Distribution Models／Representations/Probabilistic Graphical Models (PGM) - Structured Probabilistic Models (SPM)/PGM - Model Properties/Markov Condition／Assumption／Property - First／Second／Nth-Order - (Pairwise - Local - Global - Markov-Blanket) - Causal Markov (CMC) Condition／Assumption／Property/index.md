---
title: "Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property"
created: 2021-09-13T05:26:37.798-05:00
modified: 2022-05-07T19:26:43.017-05:00
parent: "[[PGM - Model Properties]]"
children: []
---
# Markov Property in Stochastic Processes
- <strong>Markov Property</strong> refers to the memory-less property of a [[Stochastic／Random／Markov Models／Process|stochastic process]]
	- <strong>First-Order Markov Property</strong> - probability of an observation at time 𝑡 only depends on the observation at time 𝑡-1
	- <strong>Second-Order Markov Property</strong> - probability of an observation at time 𝑡 depend on both 𝑡-1 and 𝑡-2
	- <strong>N<sup>th</sup>-Order Markov Property</strong> - probability of an observation at time 𝑡 depend on all {𝑡-1, ..., 𝑡-𝑛}

# Markov Property in Bayesian Networks
- <strong>Markov Condition/Assumption</strong> that every node in a [[Bayesian Networks (BN)|Bayesian Network]] is [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] of its non-descendents, given its parents
- <strong>Causal Markov Condition (CMC) </strong>states that, conditional on the set of all its direct causes, a node is independent of all variables which are not direct causes or direct effects of that node

The 2 conditions are equivalent, iff the structure of a Bayesian Network accurately depicts [[Causality (Necessary - Sufficient - Contributory)|causality]]. However, a network may accurately embody the Markov Condition without depicting causality, in which case it should not be assumed to embody the Causal Markov Condition

see: [[Causality／Causation vs Dependence vs Correlation vs Relationships vs Association vs Laws|Causality/Causation vs Dependence vs Correlation vs Relationships vs Association vs Laws]]
# Markov Property in Markov Networks

Given an undirected graph 𝐆=(𝑉,𝐸), a set of random variables 𝐗<strong>=(𝑋<sub>𝑣</sub>)</strong><sub>𝑣∈𝑉</sub> indexed by 𝑉:

```merge-table
{
  "rows": [
    [
      {
        "content": "Variant",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Strongness",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Pairwise Markov Property\n\nPairwise Markovianity",
        "bg": "#F4F5F7"
      },
      "Any two non-adjacent variables are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given all other variables:\n\n<strong>𝑋</strong><sub>𝓊</sub>⫫ <strong>𝑋</strong><sub>𝓋</sub> | <strong>𝑋</strong><sub>𝑉 \\\\{𝓊,𝓋}</sub>",
      {
        "content": "WEAKER\n|\n|\n|\n|\n|\n|\n|\nv\nSTRONGER",
        "rowspan": 4
      }
    ],
    [
      {
        "content": "Local Markov Property\n\nLocal Markovianity",
        "bg": "#F4F5F7"
      },
      "A variable is [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] of all other variables given its neighbors\n\n<strong>𝑋</strong><sub>𝓋</sub>⫫ <strong>𝑋</strong><sub>𝑉 \\\\neighbors-of(𝓋)</sub> | <strong>𝑋</strong><sub>neighbors-of(𝓋)</sub>"
    ],
    [
      {
        "content": "Markov Blanket",
        "bg": "#F4F5F7"
      },
      "Markov Blanket for a node in a [[Graphical Models|graphical model]] contains all the variables that shield the node from the rest of the network"
    ],
    [
      {
        "content": "Global Markov Property\n\nGlobal Markovianity",
        "bg": "#F4F5F7"
      },
      "Any two subsets of variables are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given a separating subset\n\n<strong>𝑋</strong><sub>𝐴</sub>⫫ <strong>𝑋</strong><sub>𝐵</sub> | <strong>𝑋</strong><sub>𝑆</sub>\n\nwhere every path from a node in 𝐴 to a node in 𝐵 passes through 𝑆"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

The Global Markov Property is stronger than the Local Markov Property, which in turn is stronger than the Pairwise Markov Property. However, the above three Markov Properties are equivalent for a positive probability
