---
title: "Bernoulli Distribution"
created: 2021-09-13T05:27:30.787-05:00
modified: 2023-10-23T16:16:17.531-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children: []
---
A random variable with two possible values, 0 and 1, is called a <strong>Bernoulli variable</strong>, its [[Univariate Probability Distribution|discrete probability distribution]] (i.e. [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function]]) is called a <strong>Bernoulli distribution</strong>, and any experiment with a binary outcome is called a <strong>Bernoulli trial</strong>
# Probability Mass Function

For 𝑥 = 0 or 1
- $P(X=x) = p^x * (1 - p)^(1 - x)$
- $P(X=x) = px + (1 - p)(1 - x)$

# Expectation

the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expected value]] of a Bernoulli Variable 𝑋 with a probability of success 𝑃(𝑋=1) = 𝑝:

𝐄(𝑋) = 𝑝

> [!expand]- proof
> - 𝐄(𝑋) = 𝛴<sub>𝑥∈𝑋</sub>\[𝑥𝑃(𝑋=𝑥)\]
> - 𝐄(𝑋) = (0)𝑃(𝑋=0) + (1)𝑃(𝑋=1)
> - 𝐄(𝑋) = (0)(1−𝑝) + (1)(𝑝)
> - 𝐄(𝑋) = 𝑝
# Variance

the [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|variance]] of a Bernoulli Variable 𝑋 with a probability of success 𝑃(𝑋=1) = 𝑝:

𝑉𝑎𝑟(𝑋) = 𝑝(1−𝑝)

> [!expand]- proof
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[(𝑋 − 𝜇)<sup>2</sup>\]
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[(𝑋 − 𝐄(𝑋))<sup>2</sup>\]
> - 𝑉𝑎𝑟(𝑋) = 𝛴<sub>𝑥∈𝑋</sub> \[(𝑥−𝐄(𝑋))<sup>2</sup>𝑃(𝑋=𝑥)\]
> - 𝑉𝑎𝑟(𝑋) = 𝛴<sub>x∈𝑋</sub>\[(𝑥−𝑝)<sup>2</sup>𝑃(𝑋=𝑥)\]
> - 𝑉𝑎𝑟(𝑋) = (0−𝑝)<sup>2</sup>𝑃(𝑋=0) + (1−𝑝)<sup>2</sup>𝑃(𝑋=1)
> - 𝑉𝑎𝑟(𝑋) = (0−𝑝)<sup>2</sup>(1−𝑝) + (1−𝑝)<sup>2</sup>𝑝
> - 𝑉𝑎𝑟(𝑋) = 𝑝<sup>2</sup>(1−𝑝) + (1−𝑝)<sup>2</sup>𝑝
> - 𝑉𝑎𝑟(𝑋) = (1−𝑝)(𝑝<sup>2</sup> + (1−𝑝)𝑝)
> - 𝑉𝑎𝑟(𝑋) = (1−𝑝)(𝑝<sup>2</sup> + 𝑝 − 𝑝<sup>2</sup>)
> - 𝑉𝑎𝑟(𝑋) = (1−𝑝)(𝑝)
> - 𝑉𝑎𝑟(𝑋) = 𝑝(1−𝑝)
# Moment-Generating Function
- 𝑀<sub>𝑋</sub>(𝑡) = 1 - 𝑝 + 𝑒<sup>𝑡</sup>𝑝

See: [[Moment-Generating Function - Bernoulli Distribution]]
# Other Distributions Using Bernoulli Distribution
The <strong>Bernoulli Distribution</strong> is the simplest [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete distribution]], and it is the building block for other more complicated discrete distributions

```merge-table
{
  "rows": [
    [
      {
        "content": "distribution",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "definition",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Binomial Distribution|binomial distribution]]",
        "bg": "#F4F5F7"
      },
      "number of successes in 𝑛 trials"
    ],
    [
      {
        "content": "[[Geometric Distribution|geometric distribution]]",
        "bg": "#F4F5F7"
      },
      "number of failures before the first success"
    ],
    [
      {
        "content": "[[Negative Binomial (Pascal) Distribution|negative binomial distribution]]",
        "bg": "#F4F5F7"
      },
      "number of failures before the 𝑥<sup>th</sup> success"
    ]
  ]
}
```
