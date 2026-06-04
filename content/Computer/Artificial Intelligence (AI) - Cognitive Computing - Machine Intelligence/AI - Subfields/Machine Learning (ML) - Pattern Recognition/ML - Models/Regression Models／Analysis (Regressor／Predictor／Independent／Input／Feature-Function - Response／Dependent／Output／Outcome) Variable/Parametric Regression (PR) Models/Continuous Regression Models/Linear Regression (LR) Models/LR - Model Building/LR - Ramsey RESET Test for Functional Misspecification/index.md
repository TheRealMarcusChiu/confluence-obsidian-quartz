---
title: "LR - Ramsey RESET Test for Functional Misspecification"
created: 2020-09-22T22:31:24.373-05:00
modified: 2026-05-21T03:55:41.617-05:00
parent: "[[LR - Model Building]]"
children: []
---
###### Ramsey RESET Test for Functional Misspecification
````excerpt
- given a linear model: 𝑦̂ = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>, the Ramsey RESET efficiently tests whether we need higher order polynomial regressors (e.g. 𝜃𝑥<sub>𝑖</sub><sup>2</sup>, 𝜃𝑥<sub>𝑖</sub>𝑥<sub>𝑗</sub><sup>2</sup>, etc)
````
^excerpt

# Ramsey RESET Test - Process
- given a linear model:
	- <strong>𝑦̂</strong> = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>
- we want to test whether a second-order polynomial model is statistically significant:
	- 𝑦 = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub> + 𝛼<sub>1</sub>𝑥<sub>1</sub><sup>2</sup> + ... + 𝛼<sub>𝑘</sub>𝑥<sub>𝑘</sub><sup>2</sup> + 𝛽<sub>1</sub>𝑥<sub>1</sub>𝑥<sub>2</sub>+ 𝛽<sub>2</sub>𝑥<sub>1</sub>𝑥<sub>3</sub> + ... + 𝛽<sub>?</sub>𝑥<sub>𝑘</sub>𝑥<sub>𝑘-1</sub>
- the null-hypothesis is: 0 = 𝛼<sub>1</sub> = ... = 𝛼<sub>𝑘</sub>= 𝛽<sub>1</sub>= 𝛽<sub>2</sub> = ... = 𝛽<sub>?</sub>:
	- 𝑦 = <font style="color: rgb(128,0,0);">𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub></font> + <font style="color: rgb(0,128,0);">0𝑥<sub>1</sub><sup>2</sup> + ... + 0𝑥<sub>𝑘</sub><sup>2</sup> + 0𝑥<sub>1</sub>𝑥<sub>2</sub>+ 0𝑥<sub>1</sub>𝑥<sub>3</sub> + ... + 𝛽<sub>?</sub>𝑥<sub>𝑘</sub>𝑥<sub>𝑘-1</sub></font>
- then we do a f-test on the null-hypothesis
- PROBLEM: as you can see there are too many regressors which would eat up the degrees-of-freedom which would decrease the power of the statistical test. This is further exacerbated when we consider higher-order polynomials
- SOLUTION: reformulate above equation with:
	- 𝑦 = <font style="color: rgb(128,0,0);">𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥</font><sub><font style="color: rgb(128,0,0);">𝑘</font></sub>+ <font style="color: rgb(0,128,0);">𝛼<sub>2</sub><strong>𝑦̂</strong><sup>2</sup></font> +
- the null-hypothesis would then be: 0 = 𝛼<sub>2</sub>
	- 𝑦 = <font style="color: rgb(128,0,0);">𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥</font><sub><font style="color: rgb(128,0,0);">𝑘</font></sub>+ <font style="color: rgb(0,128,0);">0</font><font style="color: rgb(0,128,0);"><strong>𝑦̂</strong><sup>2</sup></font>
- then we do a t-test on the null-hypothesis
- this idea can be extended to higher-order polynomials, followed by an f-test on the null-hypothesis: 0 = 𝛼<sub>2</sub> = ... = 𝛼<sub>𝑑</sub>:
	- 𝑦 = <font style="color: rgb(128,0,0);">𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥</font><sub><font style="color: rgb(128,0,0);">𝑘</font></sub>+ <font style="color: rgb(0,128,0);">𝛼<sub>2</sub><strong>𝑦̂</strong><sup>2</sup></font> + ... + <font style="color: rgb(255,102,0);">𝛼<sub>𝑑</sub><strong>𝑦̂</strong><sup>𝑑</sup></font>
- the Ramsey RESET test effectively adds just 1 term for each order of functional misspecification

# Resources

![](https://www.youtube.com/watch?v=DC7dAI4D-EI&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=121&ab_channel=BenLambert)
