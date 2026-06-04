---
title: "Root Mean Square Propagation (RMSP)"
created: 2023-07-14T20:57:28.272-05:00
modified: 2023-07-14T23:36:18.519-05:00
parent: "[[Adaptive Gradient Algorithm (AdaGrad)]]"
children: []
---
###### Root Mean Square Propagation (RMSP)
````excerpt
- is an algorithm based on [[Adaptive Gradient Algorithm (AdaGrad)|AdaGrad]] that tackles its disadvantages
````
^excerpt

# Algorithm

See the algorithm section under [[Adaptive Gradient Algorithm (AdaGrad)]].

There is one change to the AdaGrad algorithm in the AdaDelta algorithm:

> [!expand-ui]- Change #1 - 𝐺𝑡 calculation - 𝐺𝑡 will not overgrow
> In AdaGrad 𝐺<sub>𝑡</sub> is the accumulation of gradients 𝑔<sub>𝑖</sub>the entire time:
> - 𝐺<sub>𝑡</sub>(𝜃) = 𝛴<sub>1≤𝑖≤𝑡</sub>\[𝑔<sub>𝑖</sub>(𝜃)<sup>2</sup>\]
>
> In AdaDelta 𝐺<sub>𝑡</sub> takes an exponentially weighted average of the following form:
> - 𝐺<sub>𝑡</sub>(𝜃) = 𝜌·𝐺<sub>𝑡</sub>(𝜃) + (1-𝜌)·𝑔<sub>𝑡</sub>(𝜃)<sup>2</sup>
>
> where:
> - 𝜌 is a hyperparameter known as the decay-rate (typically 0.95 or 0.90)
# Resources
- [https://optimization.cbe.cornell.edu/index.php?title=RMSProp#Introduction](https://optimization.cbe.cornell.edu/index.php?title=RMSProp#Introduction)
