---
title: "R - Uniform Distribution"
created: 2020-02-04T18:22:46.843-06:00
modified: 2021-11-28T20:21:54.580-06:00
parent: "[[R - Probability Distributions]]"
children: []
---
These functions provide information about the [[Uniform Distribution|uniform distribution]] on the interval from <code>min</code> to <code>max</code>.
- <code>dunif</code> gives the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability density function]]
- <code>punif</code> gives the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|cumulative distribution function]] = integral of [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability density function]]
- <code>qunif</code> gives the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|quantile function]] = [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|inverse cumulative distribution function]]
- <code>runif</code> generates random deviates

# Usage
<span style="white-space: pre-wrap"><code>dunif(x, min = 0, max = 1, log = FALSE)</code><br><code>punif(q, min = 0, max = 1, lower.tail = TRUE, log.p = FALSE)</code><br><code>qunif(p, min = 0, max = 1, lower.tail = TRUE, log.p = FALSE)</code><br><code>runif(n, min = 0, max = 1)</code></span>

# Arguments

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>x, q</code>",
        "bg": "#F4F5F7"
      },
      "vector of quantiles."
    ],
    [
      {
        "content": "<code>p</code>",
        "bg": "#F4F5F7"
      },
      "vector of probabilities."
    ],
    [
      {
        "content": "<code>n</code>",
        "bg": "#F4F5F7"
      },
      "number of observations. If <code>length(n) \\> 1</code>, the length is taken to be the number required."
    ],
    [
      {
        "content": "<code>min, max</code>",
        "bg": "#F4F5F7"
      },
      "lower and upper limits of the distribution. Must be finite."
    ],
    [
      {
        "content": "<code>log, log.p</code>",
        "bg": "#F4F5F7"
      },
      "logical; if TRUE, probabilities p are given as log(p)."
    ],
    [
      {
        "content": "<code>lower.tail</code>",
        "bg": "#F4F5F7"
      },
      "logical; if TRUE (default), probabilities are <em>P\\[X ≤ x\\]</em>, otherwise, <em>P\\[X \\> x\\]</em>."
    ]
  ]
}
```
