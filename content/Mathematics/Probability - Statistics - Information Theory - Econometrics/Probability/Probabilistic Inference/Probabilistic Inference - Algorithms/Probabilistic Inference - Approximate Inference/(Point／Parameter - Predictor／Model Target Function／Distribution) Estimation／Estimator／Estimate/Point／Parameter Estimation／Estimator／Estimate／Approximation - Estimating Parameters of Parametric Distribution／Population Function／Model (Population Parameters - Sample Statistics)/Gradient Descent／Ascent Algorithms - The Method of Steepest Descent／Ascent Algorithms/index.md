---
title: "Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms"
created: 2021-09-13T05:27:55.616-05:00
modified: 2024-09-12T11:45:58.919-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[Adam Optimizer]]"
  - "[[Adaptive Gradient Algorithm (AdaGrad)]]"
  - "[[Batch Gradient Descent]]"
  - "[[Broyden-Fletcher-Goldfarb-Shanno (BFGS)]]"
  - "[[Conjugate Gradient Method／Algorithm]]"
  - "[[Gradient Computation Algorithms - Algorithms Computing Gradients]]"
  - "[[Gradient Descent／Ascent Algorithm - Bayesian Networks]]"
  - "[[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips]]"
  - "[[Mini-Batch Gradient Descent]]"
  - "[[MomentUm Orthogonalized by Newton-Schulz (Muon) Optimizer]]"
  - "[[SGD+Nesterov Momentum]]"
  - "[[Stochastic Gradient Descent (SGD)]]"
---
###### Gradient Descent/Ascent Algorithms - The Method of Steepest Descent/Ascent Algorithms
````excerpt
- referred to as a first-order [[Mathematical Programming／Optimization - Solution Strategy／Strategies|optimization algorithm]] as it explicitly makes use of the first-order [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|derivative/gradient/slope]] of the target [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|objective function]]
- Note, the <em>gradient descent algorithm</em> does not actually compute the gradients but uses them. To learn how to compute gradients see: [[Gradient Computation Algorithms - Algorithms Computing Gradients|Gradient Computation Algorithms]]
````
^excerpt

# Gradient Descent/Ascent - Function Type

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Scalar Output",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Scalar Input",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>derivative</strong> of a [[Single-Variable／Univariate Functions|SINGLE variable/parameter function]] 𝑓(𝑥) is a scalar slope (denoted as (𝛿/𝛿𝑥)𝑓(𝑥))"
    ],
    [
      {
        "content": "Vector Input",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|gradient]] of a [[Multi-Variable／Multivariable／Multivariate Functions|MULTI variable/parameter function]] 𝑓(𝒙) (where 𝒙 = {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}) is a vector denoted as 𝛻𝑓(𝒙) where each element 𝑖 is the [[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|partial derivative (𝛿/𝛿𝑥𝑖)𝑓(𝒙)]]\n- <strong>[[Derivative of Scalar-Valued Function (Partial Derivative - Total Derivative - Gradient - Directional Directive - Second Order Partial Derivative)|directional derivative]]</strong> is the slope of the function 𝑓 at point 𝒙 in unit direction 𝒖"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Gradient Descent/Ascent - Algorithm for a Function With Vector Input & Scalar Output

```merge-table
{
  "rows": [
    [
      {
        "content": "Gradient Ascent Algorithm",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Gradient Descent Algorithm",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "repeat until convergence:\n- 𝜃<sub>0</sub>← 𝜃<sub>0</sub><font style=\"color: rgb(255,102,0);\">+</font> 𝛼·(𝛿/𝛿𝜃<sub>0</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)\n- ...\n- 𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub><font style=\"color: rgb(255,102,0);\">+</font> 𝛼·(𝛿/𝛿𝜃<sub>𝑘</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)",
      "repeat until convergence:\n- 𝜃<sub>0</sub>← 𝜃<sub>0</sub><font style=\"color: rgb(255,102,0);\">-</font> 𝛼·(𝛿/𝛿𝜃<sub>0</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)\n- ...\n- 𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub><font style=\"color: rgb(255,102,0);\">-</font> 𝛼·(𝛿/𝛿𝜃<sub>𝑘</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)"
    ]
  ]
}
```
- 𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>) - [[Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error|objective function]]
- 𝛼 - learning rate
- 𝜃 - parameter we are estimating

# Gradient Descent/Ascent - Steps
1. [[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips|Preprocess the data]] (optional)
2. Choose an [[Gradient Computation Algorithms - Algorithms Computing Gradients|algorithm to compute the gradients]]:
	1. [[Batch Gradient Descent]] - at each step of gradient descent it uses ALL the training examples
	2. [[Stochastic Gradient Descent (SGD)|Stochastic Gradient Descent]] - at each step of gradient descent it uses a SINGLE random training example
	3. [[Mini-Batch Gradient Descent]] - at each step of gradient descent it uses a SUBSET of the entire training set
	4. [[Back Propagation (BP)|Backpropagation]] - an algorithm to efficiently compute gradients of [[Composite Functions - Function Composition|composite functions]]
3. Choose a <em>gradient descent algorithm</em> (see below)

# Gradient Descent/Ascent - Variants
- <strong>[[Conjugate Gradient Method／Algorithm|Conjugate Gradient Method]]</strong> -
- <strong>[[Adaptive Gradient Algorithm (AdaGrad)|AdaGrad]]</strong> - the learning rate 𝛼 is adapted component-wise to the parameters by incorporating knowledge of past observations
	- <strong>[[Root Mean Square Propagation (RMSP)|RMSP]]</strong> -
	- <strong>[[AdaDelta]]</strong> -
- <strong>[[Adam Optimizer|Adam]]</strong> -
- <strong>[[Broyden-Fletcher-Goldfarb-Shanno (BFGS)|BFGS]]</strong> -
	- <strong>[[Limited-Memory BFGS (L-BFGS or LM-BFGS)|LM-BFGS]]</strong> -

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)|Gradient Descent/Ascent Algorithm - Linear Regression]]

# Resources
- [[Gradient Descent - Some Notes.pdf]]
