---
title: "Adaptive Gradient Algorithm (AdaGrad)"
created: 2023-07-14T14:38:25.260-05:00
modified: 2023-12-27T16:56:26.528-06:00
parent: "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
children:
  - "[[AdaDelta]]"
  - "[[Root Mean Square Propagation (RMSP)]]"
---
###### Adaptive Gradient Algorithm (Adagrad)
````excerpt
- is an extension of the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent]] optimization algorithm, allowing the step-size/learning-rate 𝛼 to be different in each dimension and is automatically adapted based on the gradients seen for the variable
- the algorithm was described by John Duchi, et al. in their 2011 paper titled “Adaptive Subgradient Methods for Online Learning and Stochastic Optimization
````
^excerpt

# The Problem Adagrad Tries to Solve

> [!expand]- Click here to expand...
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Gradient Descent Algorithm",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "repeat until convergence:\n- 𝜃<sub>0</sub>← 𝜃<sub>0</sub><font style=\"color: rgb(255,102,0);\">-</font> 𝛼·(𝛿/𝛿𝜃<sub>0</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)\n- ...\n- 𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub><font style=\"color: rgb(255,102,0);\">-</font> 𝛼·(𝛿/𝛿𝜃<sub>𝑘</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)"
>     ]
>   ],
>   "tableStyle": "letter-spacing: 0.0px;"
> }
> ```
>
> A problem with the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]] is that the step-size/learning-rate 𝛼 is the same for each variable/parameter/dimension (𝜃<sub>𝑖</sub>) in the search space. It is possible that better performance can be achieved using a step size that is tailored to each variable, allowing larger movements in dimensions with a consistently steep gradient and smaller movements in dimensions with less steep gradients.
>
> AdaGrad is designed to specifically explore the idea of automatically tailoring the step size for each dimension in the search space
# Algorithm Explanation

> [!expand]- Click here to expand...
> An internal variable is maintained for each input variable that is the sum of the squared partial derivatives for the input variable observed during the search.
>
> The sum of the squared partial derivatives is then used to calculate the step size for the variable by dividing the initial step size 𝛼 value by the square root of the sum of the squared partial derivatives:
> - cust\_step\_size = 𝛼 / √(sum\_of\_squared\_partial\_derivatives)
>
> It is possible for the square root of the sum of squared partial derivatives to result in a value of 0.0, resulting in a divide-by-zero error. Therefore, a tiny value 𝜀 can be added to the denominator to avoid this possibility, such as 𝜀=1e-8.
> - cust\_step\_size = initial\_step\_size / √(𝜀 + sum\_of\_squared\_partial\_derivatives)
>
> The cust\_step\_size is then used to calculate the new value of the variable:
> - 𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub><font style="color: rgb(255,102,0);">-</font> (𝛼/√(𝜀 + sum\_of\_squared\_partial\_derivatives))·(𝛿/𝛿𝜃<sub>𝑘</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)
>
> Original gradient descent algorithm:
> - 𝜃<sub>0</sub>← 𝜃<sub>0</sub><font style="color: rgb(255,102,0);">-</font> 𝛼·(𝛿/𝛿𝜃<sub>0</sub>)𝑓<sub>𝑜𝑏𝑗</sub>(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)
# Algorithm
###### Definitions
- 𝑓(𝜃) - objective function with parameters 𝜃
- 𝑓<sub>𝑡</sub>(𝜃) - realization of the objective function at time step 𝑡
- 𝑔<sub>𝑡</sub>(𝜃) - the gradient of 𝑓<sub>𝑡</sub>(𝜃) with respect to 𝜃, formally 𝛻<sub>𝜃</sub>𝑓<sub>𝑡</sub>(𝜃)
- 𝐺<sub>𝑡</sub>(𝜃) - the sum of all previous gradients defined as 𝛴<sub>1≤𝑖≤𝑡</sub>\[𝑔<sub>𝑖</sub>(𝜃)<sup>2</sup>\]
- 𝜃<sub>𝑡</sub> - the parameters at time step 𝑡
- 𝛼 - global learning-rate/stepping-size

###### Standard Gradient Descent Algorithm
- 𝜃<sub>𝑡+1</sub> := 𝜃<sub>𝑡</sub> - 𝛼·𝑔<sub>𝑡</sub>

###### AdaGrad Algorithm
- 𝜃<sub>𝑡+1</sub> := 𝜃<sub>𝑡</sub> - 𝛼·𝐺<sub>𝑡</sub>(𝜃)<sup>1/2</sup>·𝑔<sub>𝑡</sub>

# Disadvantages
- one main disadvantage of AdaGrad is that it can be sensitive to the initial conditions of the parameters; for instance, if the initial gradients are large, the learning rates will be low for the remaining training
- additionally, the unweighted accumulation of gradients in 𝐺<sub>𝑡</sub> happens from the beginning of training, so after some training steps, the learning rate could approach zero without arriving at good local optima. Therefore, even with adaptative learning rates for each parameter, AdaGrad can be sensitive to the choice of global learning rate 𝛼

# Variants
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://machinelearningmastery.com/gradient-descent-with-adagrad-from-scratch/](https://machinelearningmastery.com/gradient-descent-with-adagrad-from-scratch/)
- [https://optimization.cbe.cornell.edu/index.php?title=AdaGrad#Definitions](https://optimization.cbe.cornell.edu/index.php?title=AdaGrad#Definitions)
