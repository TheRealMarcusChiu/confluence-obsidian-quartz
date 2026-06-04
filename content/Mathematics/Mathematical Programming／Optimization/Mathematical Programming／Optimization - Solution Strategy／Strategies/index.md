---
title: "Mathematical Programming／Optimization - Solution Strategy／Strategies"
created: 2021-09-13T05:26:20.308-05:00
modified: 2023-06-08T16:36:46.277-05:00
parent: "[[Mathematical Programming／Optimization]]"
children:
  - "[[Bayesian Optimization]]"
---
# Mathematical Optimization Strategies

strategies for solving the [[Mathematical Programming／Optimization|mathematical optimization problem]]:
- <strong>Grid Search</strong> or <strong>Brute Force Approach </strong>- TODO
- <strong>Random Search </strong>- TODO
- <strong>Hill Climbing</strong> - assumes you optimize discrete problems (e.g. [[Traveling Salesman Problem (TSP)|traveling salesman problem]]) and can evaluate a cost function for a given state
- <strong>[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent/Ascent]] </strong>- assumes you optimize a continuous function and can compute its gradient/slope in a given state
- <strong>[[Bayesian Optimization]] </strong>- TODO

# Mathematical Optimization Strategies - Comparison

given a simple 1 [[ML - Model Parameters & Hyperparameters|parameter/hyperparameter]] and the corresponding function:
- whiter points correspond to parameter/hyperparameter values generated earlier in the process
- redder points correspond to parameter/hyperparameter values generated later on in the process
```merge-table
{
  "rows": [
    [
      {
        "content": "###### Grid Search / Brute Force\n![[Mathematical Programming／Optimization - Solution Strategy／Strategies/optimization-brute-force.png|333x250]]",
        "align": "center"
      },
      {
        "content": "###### Random Search\n![[Mathematical Programming／Optimization - Solution Strategy／Strategies/optimization-random-search.png|333x250]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "###### Hill Climbing / Gradient Ascent\n![[Mathematical Programming／Optimization - Solution Strategy／Strategies/optimization-hill-climbing.png|333x250]]",
        "align": "center"
      },
      {
        "content": "###### Bayesian Optimization\n![[Mathematical Programming／Optimization - Solution Strategy／Strategies/optimization-bayesian.png|333x246]]",
        "align": "center"
      }
    ]
  ]
}
```
# Resources
- [https://thenextweb.com/podium/2019/11/11/machine-learning-algorithms-and-the-art-of-hyperparameter-selection/amp/](https://thenextweb.com/podium/2019/11/11/machine-learning-algorithms-and-the-art-of-hyperparameter-selection/amp/)
