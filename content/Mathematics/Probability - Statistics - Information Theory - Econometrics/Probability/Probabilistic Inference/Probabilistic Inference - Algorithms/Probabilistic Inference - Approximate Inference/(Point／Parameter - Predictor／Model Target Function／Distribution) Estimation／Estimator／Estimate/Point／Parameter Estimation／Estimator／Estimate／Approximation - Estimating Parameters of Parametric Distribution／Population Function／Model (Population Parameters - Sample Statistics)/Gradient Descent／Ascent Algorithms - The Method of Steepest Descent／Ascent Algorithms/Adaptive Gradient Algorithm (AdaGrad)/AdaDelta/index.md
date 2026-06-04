---
title: "AdaDelta"
created: 2023-07-14T22:31:54.945-05:00
modified: 2023-07-14T23:35:16.297-05:00
parent: "[[Adaptive Gradient Algorithm (AdaGrad)]]"
children: []
---
###### AdaDelta
````excerpt
- is an algorithm based on both [[Adaptive Gradient Algorithm (AdaGrad)|AdaGrad]] and [[Root Mean Square Propagation (RMSP)|RMSP]] that tackles its disadvantages
````
^excerpt

# Algorithm
###### <font style="color: rgb(255,0,0);">See the algorithm section under</font> [[Adaptive Gradient Algorithm (AdaGrad)]]

There are two changes to the AdaGrad algorithm in the AdaDelta algorithm:

> [!expand-ui]- Change #1 - 𝐺𝑡 calculation - 𝐺𝑡 will not overgrow
> In AdaGrad 𝐺<sub>𝑡</sub> is the accumulation of gradients 𝑔<sub>𝑖</sub>the entire time:
> - 𝐺<sub>𝑡</sub>(𝜃) = 𝛴<sub>1≤𝑖≤𝑡</sub>\[𝑔<sub>𝑖</sub>(𝜃)<sup>2</sup>\]
>
> In AdaDelta 𝐺<sub>𝑡</sub> takes an exponentially weighted average of the following form:
> - 𝐺<sub>𝑡</sub>(𝜃) = 𝜌·𝐺<sub>𝑡</sub>(𝜃) + (1-𝜌)·𝑔<sub>𝑡</sub>(𝜃)<sup>2</sup>
>
> where:
> - 𝜌 is a hyperparameter known as the decay-rate (typically 0.95 or 0.90)

> [!expand-ui]- Change #2 - Update Rule - no longer requires an initial learning rate hyperparameter
> The <font style="color: rgb(0,204,255);">change to the parameter 𝛥𝜃<sub>𝑡+1</sub></font> is defined as:
> - <font style="color: rgb(0,204,255);">𝛥𝜃<sub>𝑡+1</sub></font> = \[<font style="color: rgb(255,204,0);">√(</font><font style="color: rgb(165,173,186);">𝑑𝑒𝑙𝑡𝑎<sub>𝑡</sub></font><font style="color: rgb(255,204,0);">)</font>+ 𝜀\] / \[<font style="color: rgb(153,204,0);">√𝐺<sub>𝑡</sub></font> + 𝜀\] · \[<font style="color: rgb(204,153,255);">𝑔<sub>𝑡</sub></font>\]
>
> where:
> - <font style="color: rgb(255,204,0);">√(</font><font style="color: rgb(165,173,186);">𝑑𝑒𝑙𝑡𝑎<sub>𝑡</sub></font><font style="color: rgb(255,204,0);">) - </font><font style="color: rgb(255,204,0);">square root of the decaying moving average of the change in the delta</font>
> - <font style="color: rgb(255,204,0);"><font style="color: rgb(153,204,0);">√𝐺<sub>𝑡</sub></font><font style="color: rgb(153,204,0);"> - square root of the decaying moving average of the squared partial derivatives</font></font>
> - <font style="color: rgb(255,204,0);"><font style="color: rgb(153,204,0);"><font style="color: rgb(204,153,255);">𝑔<sub>𝑡</sub></font><font style="color: rgb(204,153,255);"> - partial derivative</font></font></font>
> - 𝜀 is a hyperparameter set to some small value to avoid divide-by-zero error
>
> Next, the <font style="color: rgb(0,128,0);">decaying average 𝜌</font> of the <font style="color: rgb(255,0,0);">squared change to the parameter (<font style="color: rgb(0,204,255);">𝛥𝜃<sub>𝑡+1</sub></font>)</font><sup><font style="color: rgb(255,0,0);">2</font></sup>is updated:
> - <font style="color: rgb(165,173,186);">𝑑𝑒𝑙𝑡𝑎</font><sub><font style="color: rgb(165,173,186);">𝑡+1</font></sub>= <font style="color: rgb(0,128,0);">𝜌</font>·<font style="color: rgb(165,173,186);">𝑑𝑒𝑙𝑡𝑎</font><sub><font style="color: rgb(165,173,186);">𝑡</font></sub>+ <font style="color: rgb(0,128,0);">(1-𝜌)</font><font style="color: rgb(255,0,0);">(</font><font style="color: rgb(0,204,255);">𝛥𝜃<sub>𝑡+1</sub></font><font style="color: rgb(255,0,0);">)<sup>2</sup></font>
>
> So the update rule in AdaDelta is given by:
> - 𝜃<sub>𝑡+1</sub> := 𝜃<sub>𝑡</sub>- <font style="color: rgb(0,204,255);">𝛥𝜃<sub>𝑡+1</sub></font>
>
> In the original AdaGrad algorithm the update rule is as follows:
> - 𝜃<sub>𝑡+1</sub> := 𝜃<sub>𝑡</sub> - 𝛼·𝐺<sub>𝑡</sub>(𝜃)<sup>1/2</sup>·𝑔<sub>𝑡</sub>
> [!info]
> When considering only Change \#1 it is called the [[Root Mean Square Propagation (RMSP)]] algorithm
# Resources
- [https://machinelearningmastery.com/gradient-descent-with-adadelta-from-scratch/](https://machinelearningmastery.com/gradient-descent-with-adadelta-from-scratch/)
