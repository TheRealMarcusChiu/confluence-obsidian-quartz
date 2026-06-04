---
title: "Target Function／Distribution Predictor／Estimation／Estimator／Approximation／Approximators"
created: 2021-09-13T05:28:11.450-05:00
modified: 2024-08-24T14:53:05.774-05:00
parent: "[[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate]]"
children: []
---
###### Target Function/Distribution Predictor/Estimation/Estimator/Approximation/Approximators
````excerpt
- see: [[Machine Learning (ML) - Pattern Recognition|Machine Learning (ML)]]
- is the attempt to predict 𝑦 given an input vector 𝑥
- assumes there is a function 𝑓(𝑥) that approximates the relationship between 𝑦 and 𝑥
- is interested in approximating 𝑓(𝑥) with a model or estimate𝑓ˆ
- is essentially a [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|point estimation]] over function/distribution space (e.g. linear regression may be interpreted either as estimating parameter(s) 𝜃 or estimating a function 𝑓ˆ mapping 𝑥 to 𝑦)
````
^excerpt

# Function vs Distribution

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Deterministic Target</strong> or<strong> Target Function</strong> Estimation",
        "bg": "#F4F5F7"
      },
      "- assumes 𝑦 = 𝑓(𝑥)\n- 𝑓(𝑥) - a point 𝑥 outputs the same 𝑦 value"
    ],
    [
      {
        "content": "<strong>Non-Deterministic/Noisy Target</strong> or<strong> Target Distribution</strong> Estimation",
        "bg": "#F4F5F7"
      },
      "- assumes 𝑦 = 𝑓(𝑥) + 𝜖\n- 𝑓(𝑥) - is the target function, whose function also equals the conditional expectation 𝐄\\[𝑦|𝑥\\] (deterministic)\n- 𝜖 - is the noise, the part of 𝑦 that is not predictable from 𝑥 (random)\n- 𝐏(𝑦|𝑥) - a point 𝑥 may output different 𝑦 values"
    ]
  ]
}
```
# Methods in Estimating the Target Function/Distribution
- any [[ML - Models]]
