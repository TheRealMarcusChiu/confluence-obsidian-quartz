---
title: "Stochastic／Random／Markov Models／Process"
created: 2021-09-13T05:26:59.076-05:00
modified: 2025-09-02T16:25:52.688-05:00
parent: "[[PGM - Model Types]]"
children:
  - "[[Continuous-Valued Continuous-Time Stochastic Process]]"
  - "[[Hidden Markov Models (HMM)]]"
  - "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
  - "[[Markov Decision Process (MDP)]]"
  - "[[Markov Process - Continuous-Time Markov Chains (CTMC)]]"
  - "[[Markov Reward Process (MRP)]]"
  - "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)]]"
  - "[[Partially Observable Markov Decision Process (POMDP)]]"
  - "[[Random Walk]]"
  - "[[Stochastic Process - Analysis]]"
  - "[[Stochastic Process - Models]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Stochastic Process\nRandom Process",
        "bg": "#F4F5F7"
      },
      "- general rule: a variable is random. a process is stochastic.\n- a stochastic process is a family of random variables changing over time\n- examples: growth of a bacterial population, electrical current fluctuating due to thermal noise, or movement of a gas molecule"
    ],
    [
      {
        "content": "Markov Process",
        "bg": "#F4F5F7"
      },
      "- a Markov process is a <em>stochastic process</em> with[[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Markov assumption/property]] (i.e. the future is independent of the past given the present)\n- the <em>Markov property</em> enables TRACTABLE reasoning and computation on a model that would otherwise be INTRACTABLE"
    ],
    [
      {
        "content": "Stochastic Model",
        "bg": "#F4F5F7"
      },
      "- models a Stochastic Process"
    ],
    [
      {
        "content": "Markov Model",
        "bg": "#F4F5F7"
      },
      "- models a Markov Process"
    ]
  ],
  "tableStyle": "width: 100.0%;letter-spacing: 0.0px;"
}
```
# Stochastic Process - Other
- [[Stochastic Process - Analysis]]
- [[Stochastic Process - Models]]
- [[Random Walk]]

# Stochastic Process - Classifications

```merge-table
{
  "rows": [
    [
      {
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Discrete/Finite/Countable State Space",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Continuous/Infinite/General State Space",
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Discrete-Time",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Discrete-Time Markov Chain (DTMC) - Markov Chain]]",
      "- [Continuous-Space Markov Chain](https://en.wikipedia.org/wiki/Markov_chains_on_a_measurable_state_space)\n- [Harris Chain](https://en.wikipedia.org/wiki/Harris_chain)"
    ],
    [
      {
        "content": "Continuous-Time",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Markov Process - Continuous-Time Markov Chains (CTMC)|Continuous-Time Markov Chain (CTMC) - Markov Process]]\n- Markov Jump Process\n- Poisson Process",
      "[[Continuous-Valued Continuous-Time Stochastic Process]]\n- [Wiener Process](https://en.wikipedia.org/wiki/Wiener_process)"
    ]
  ],
  "tableStyle": "width: 90.7242%;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "bg": "#F4F5F7"
      },
      {
        "content": "Fully Observable States",
        "bg": "#F4F5F7"
      },
      {
        "content": "Partially Observable States (Hidden/Latent Variables)",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Autonomous",
        "bg": "#F4F5F7"
      },
      "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]]",
      "[[Hidden Markov Models (HMM)]]"
    ],
    [
      {
        "content": "Controlled",
        "bg": "#F4F5F7"
      },
      "[[Markov Decision Process (MDP)]]",
      "[[Partially Observable Markov Decision Process (POMDP)]]"
    ]
  ]
}
```

dimensions:
- state observability
	- fully observable - all variables are observed
	- partially observable - some variables are hidden/latent
- system type
	- autonomous - no actions/decisions can be made that would affect the future
	- controlled - actions/decisions can be made that would affect the future
