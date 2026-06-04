---
title: "ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression"
created: 2020-04-17T15:28:38.073-05:00
modified: 2023-08-28T13:58:23.362-05:00
parent: "[[Machine Learning (ML) - Pattern Recognition]]"
children: []
---
# Bias/Underfit vs Variance/Overfit - Linear Regression

Let's say we are using [[Ordinary Least Squares (OLS) Regression]] as our learning algorithm

The data is given below

```merge-table
{
  "rows": [
    [
      {
        "content": "𝑥<sub>1</sub> = size",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑥<sub>2</sub> = # of rooms",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "...",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑦 = price",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "2104",
      "3",
      "...",
      "400"
    ],
    [
      "1600",
      "2",
      "...",
      "330"
    ],
    [
      "2400",
      "4",
      "...",
      "369"
    ],
    [
      "...",
      "...",
      "...",
      "..."
    ],
    [
      "1416",
      "2",
      "...",
      "232"
    ]
  ],
  "tableStyle": "width: 84.25%;"
}
```

We can always find a regression function 𝑓(𝑥) that passes through all the observed points without any error (i.e. 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑒<sub>𝑖</sub>\]<sup>2</sup> = 0). Though this may overfit

We want to find a line equation 𝑓(𝑥) that neither:
- underfits (i.e. high bias)
- overfits (i.e. high variance)

# Method 1 - Comparing Line Equations of Different Polynomial Degrees

> [!expand]- Click here to expand...
> we choose a set of candidate line equations (of increasing polynomial degree):
> - 𝑦<sup>(1)</sup> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>(𝑥)
> - 𝑦<sup>(2)</sup> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>(𝑥) + 𝜃<sub>2</sub>(𝑥)<sup>2</sup>
> - ...
> - 𝑦<sup>(𝑑)</sup> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>(𝑥) + 𝜃<sub>2</sub>(𝑥)<sup>2</sup> + ... + 𝜃<sub>𝑑</sub>(𝑥)<sup>𝑑</sup>
>
> we split the data into 2 sets:
> - training set
> - test set / cross-validation set
>
> we train each candidate line equation with the training set. For each candidate we have a model and we can test its performance by calculating its error over the 2 data sets. Then plot it!![[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression/bias-variance-polynomial-degree.png|450]]
> [bias-variance-polynomial-degree.drawio](http://confluence.marcuschiu.com/download/attachments/10949433/bias-variance-polynomial-degree.drawio?version=1&modificationDate=1587159386536&api=v2)
>
> we choose the model in the sweet spot region
# Method 2 - Comparing Different Regularization Values

> [!expand]- Click here to expand...
> - single model: 𝘩<sub>𝜃</sub>(𝑥) = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>(𝑥) + 𝜃<sub>2</sub>(𝑥)<sup>2</sup> + ... + 𝜃<sub>𝑑</sub>(𝑥)<sup>𝑑</sup>
> - cost/error function: 𝐽(𝜃) = (1/2𝑛)𝛴<sub>1≤𝑖≤𝑛</sub>(𝘩<sub>𝜃</sub>(𝑥<sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>)<sup>2</sup> + (𝜆/2𝑑)𝛴<sub>1≤𝑗≤𝑑</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>
>
> try different regularization values 𝜆:
> - 𝜆<sub>1</sub> = 0
> - 𝜆<sub>2</sub> = 0.01
> - 𝜆<sub>3</sub> = 0.02
> - 𝜆<sub>4</sub> = 0.04
> - 𝜆<sub>5</sub> = 0.08
> - ...
> - 𝜆<sub>12</sub> = 10.24
>
> we split the data into 2 sets:
> - training set
> - test set / cross-validation set
>
> we train each candidate line equation with the training set. For each candidate we have a model and we can test its performance by calculating its error over the 2 data sets. Then plot it!
>
> ![[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression/bias-variance-as-a-function-of-regularization-parameter.png]]
>
> [[bias-variance-as-a-function-of-regularization-parameter.drawio]]
>
> we choose the model in the sweet spot region
