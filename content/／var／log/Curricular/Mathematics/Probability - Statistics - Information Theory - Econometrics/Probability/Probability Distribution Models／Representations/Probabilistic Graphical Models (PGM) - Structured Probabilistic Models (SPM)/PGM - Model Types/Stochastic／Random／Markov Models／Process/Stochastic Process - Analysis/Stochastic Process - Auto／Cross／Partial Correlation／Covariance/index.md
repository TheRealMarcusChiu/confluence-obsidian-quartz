---
title: "Stochastic Process - Auto／Cross／Partial Correlation／Covariance"
created: 2021-09-13T05:27:10.592-05:00
modified: 2025-09-13T15:11:05.464-05:00
parent: "[[Stochastic Process - Analysis]]"
children:
  - "[[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function]]"
  - "[[Cross Correlation／Covariance]]"
  - "[[Partial Correlation／Covariance]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|auto correlation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "correlation between a variable 𝑋 at two different times 𝑖 and 𝑗 (e.g. correlation of 𝑋<sup>(𝑡=𝑖)</sup> and 𝑋<sup>(𝑡=𝑗)</sup>)\n- 𝑅<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[𝑋(𝑖)·𝑋(𝑗)\\]"
    ],
    [
      {
        "content": "[[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|auto covariance]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "covariance between a variable 𝑋 at two different times 𝑖 and 𝑗 (e.g. covariance of 𝑋<sup>(𝑡=𝑖)</sup> and 𝑋<sup>(𝑡=𝑗)</sup>)\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐶𝑜𝑣(𝑋(𝑖)·𝑋(𝑗)) = 𝐄\\[𝑋(𝑖)·𝑋(𝑗)\\] - 𝜇(𝑖)·𝜇(𝑗)"
    ],
    [
      {
        "content": "[[Cross Correlation／Covariance|cross correlation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "correlation between different time series\n- 𝑅<sub>𝑋𝑌</sub>(𝑖,𝑗) = 𝐄\\[𝑋(𝑖)·𝑌(𝑗)\\]"
    ],
    [
      {
        "content": "[[Cross Correlation／Covariance|cross covariance]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "covariance between different time series\n- 𝐶<sub>𝑋𝑌</sub>(𝑖,𝑗) = 𝐶𝑜𝑣(𝑋(𝑖)·𝑌(𝑗)) = 𝐄\\[𝑋(𝑖)·𝑌(𝑗)\\] - 𝜇<sub>𝑋</sub>(𝑖)·𝜇<sub>𝑌</sub>(𝑗)"
    ],
    [
      {
        "content": "[[Partial Correlation／Covariance|partial correlation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "correlation between the same or a different time series with the effect of lower order correlations removed"
    ],
    [
      {
        "content": "[[Partial Correlation／Covariance|partial covariance]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "covariance between the same or a different time series with the effect of lower order covariances removed"
    ]
  ],
  "tableStyle": "width: 97.1591%;"
}
```
