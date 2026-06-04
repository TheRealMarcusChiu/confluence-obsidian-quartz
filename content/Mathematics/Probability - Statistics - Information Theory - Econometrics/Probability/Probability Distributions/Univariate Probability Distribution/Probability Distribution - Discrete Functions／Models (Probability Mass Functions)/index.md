---
title: "Probability Distribution - Discrete Functions／Models (Probability Mass Functions)"
created: 2021-09-13T05:27:30.297-05:00
modified: 2023-08-31T17:42:59.328-05:00
parent: "[[Univariate Probability Distribution]]"
children:
  - "[[Bernoulli Distribution]]"
  - "[[Binomial Distribution]]"
  - "[[Discrete Probability Distribution - Calculating Statistics]]"
  - "[[Discrete Uniform Distribution]]"
  - "[[Geometric Distribution]]"
  - "[[Hypergeometric Distribution]]"
  - "[[Multinomial Distribution]]"
  - "[[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution]]"
  - "[[Multivariate Hypergeometric Distribution]]"
  - "[[Negative Binomial (Pascal) Distribution]]"
  - "[[Poisson Distribution]]"
---
###### Discrete Probability Distributions (Probability Mass Functions)
````excerpt
- used in scenarios where the set of possible outcomes are <strong>discrete</strong>, either:
	- a finite number of values (e.g. coin toss or dice roll)
	- an infinite sequence of values (e.g. [[Numbers Classes／Classification of Numbers|counting numbers]])
- encoding a discrete list of the probabilities of the outcomes
````
^excerpt

# Discrete Probability Distributions - Calculating Statistics

see: [[Discrete Probability Distribution - Calculating Statistics]]
# Discrete Probability Distributions - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Discrete Distributions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "\\# of Possible [[Probability Terminology|Outcomes]] Per Trial",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "# of Trails",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "\\# of Success",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Bernoulli Distribution]]",
        "bg": "#F4F5F7"
      },
      "=2",
      "=1",
      "Random",
      "- simplest discrete probability distribution"
    ],
    [
      {
        "content": "[[Binomial Distribution]]",
        "bg": "#F4F5F7"
      },
      "=2",
      "≥1",
      "Random",
      "- number of successes in 𝑛 trials\n- number of failures in 𝑛 trails\n- a Binomial variable = sum of independent Bernoulli variables"
    ],
    [
      {
        "content": "[[Geometric Distribution]]",
        "bg": "#F4F5F7"
      },
      "=2",
      "Random",
      "=1",
      "- number of failures before the first success\n- number of successes before the first failure"
    ],
    [
      {
        "content": "[[Negative Binomial (Pascal) Distribution]]",
        "bg": "#F4F5F7"
      },
      "=2",
      "Random",
      "≥1",
      "- number of failures before the 𝑥<sup>𝑡𝘩</sup> success\n- number of successes before the 𝑥<sup>𝑡𝘩</sup> failure\n- a generalization of the [[Geometric Distribution|geometric distribution]] to cases where the number of successes ≥1 instead of 1\n- a Negative Binomial variable = sum of independent Geometric variables"
    ],
    [
      {
        "content": "[[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli Distribution]]",
        "bg": "#F4F5F7"
      },
      "≥1",
      "=1",
      "Random",
      "- a generalization of the [[Bernoulli Distribution|bernoulli distribution]] to cases where the discrete random variable has ≥1 possible outcomes per trial instead of 2"
    ],
    [
      {
        "content": "[[Multinomial Distribution]]",
        "bg": "#F4F5F7"
      },
      "≥1",
      "≥1",
      "Random",
      "- a generalization of the [[Binomial Distribution|binomial distribution]] to cases where the discrete random variable has ≥1 possible outcomes per trial instead of 2"
    ],
    [
      {
        "content": "Negative Multinomial Distribution",
        "bg": "#F4F5F7"
      },
      "≥1",
      "Random",
      "≥1",
      "- a generalization of the [[Negative Binomial (Pascal) Distribution|negative binomial distribution]] to cases where the discrete random variable has ≥1 possible outcomes per trial instead of 2"
    ],
    [
      {
        "content": "[[Discrete Uniform Distribution]]",
        "bg": "#F4F5F7"
      },
      "≥1",
      "=1",
      "Random",
      "- a specific case of [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli distribution]] where every outcome has an equal probability"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Discrete Probability Distributions - Other Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Discrete Distributions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "\\# of Events\n\n(discrete)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Time Interval\n\n(continuous)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Poisson Distribution]]",
        "bg": "#F4F5F7"
      },
      "Random",
      "Fixed",
      "- given a [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] number of events that happen within a time period, the number of events occurring within a time period has Poisson Distribution\n- the time between events has an [[Exponential Distribution]]"
    ],
    [
      {
        "content": "[[Hypergeometric Distribution]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "- used to calculate probabilities of [[Combination Without Replacement (Binomial Coefficient - n Choose k)|combination without replacement]]"
    ],
    [
      {
        "content": "[[Multivariate Hypergeometric Distribution]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "- a generalization of the [[Hypergeometric Distribution|hypergeometric distribution]]"
    ]
  ],
  "tableStyle": "width: 99.9067%;"
}
```
