---
title: "Boosting (Additive Modeling)"
created: 2020-10-25T20:38:02.710-05:00
modified: 2024-01-26T19:54:01.150-06:00
parent: "[[Ensemble Methods／Techniques]]"
children:
  - "[[Adaptive Boost／Boosting (AdaBoosting)]]"
  - "[[Gradient Boost／Boosting - Multiple Additive Regression／Decision Trees - Stochastic Gradient Boosting Machines]]"
---
###### Boosting (Additive Modeling)
````excerpt
- boosting is an [[Ensemble Methods／Techniques|ensemble technique]] where a new model fits the residuals of pre-existing models, and then this new model is added to the pre-existing models. Models are added sequentially until no further improvements can be made
- boosting incrementally builds an ensemble by training each model with the same dataset but where the weights of each dataset instance are adjusted according to the error of the last prediction. The main idea is to force the models to focus on the "hard" instances.
- unlike bagging, boosting is a sequential method, so you can not use parallel operations here
- combining simple models (high bias) to form a complex model (lower bias)
````
^excerpt

# Boosting - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
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
        "content": "[[Adaptive Boost／Boosting (AdaBoosting)|Adaptive Boosting]]\n[[Adaptive Boost／Boosting (AdaBoosting)|(AdaBoosting)]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- a boosting technique that weights data points that are hard to predict"
    ],
    [
      {
        "content": "[[Gradient Boost／Boosting - Multiple Additive Regression／Decision Trees - Stochastic Gradient Boosting Machines|Gradient Boosting]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- TODO"
    ]
  ]
}
```
