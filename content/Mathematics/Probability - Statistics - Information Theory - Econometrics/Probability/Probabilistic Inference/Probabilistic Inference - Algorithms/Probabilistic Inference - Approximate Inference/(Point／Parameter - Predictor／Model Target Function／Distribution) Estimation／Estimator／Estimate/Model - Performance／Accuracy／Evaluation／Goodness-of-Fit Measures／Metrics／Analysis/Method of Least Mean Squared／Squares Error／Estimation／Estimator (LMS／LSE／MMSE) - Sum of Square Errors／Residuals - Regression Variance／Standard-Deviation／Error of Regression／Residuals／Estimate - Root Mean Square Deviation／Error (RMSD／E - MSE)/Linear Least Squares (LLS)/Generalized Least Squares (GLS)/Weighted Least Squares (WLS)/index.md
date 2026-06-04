---
title: "Weighted Least Squares (WLS)"
created: 2021-09-13T05:27:48.532-05:00
modified: 2021-12-20T15:04:29.148-06:00
parent: "[[Generalized Least Squares (GLS)]]"
children: []
---
###### Weighted Least Squares (WLS)
- a type of [[Generalized Least Squares (GLS)]]
- for using WLS in practice see: [[Feasible Generalized Least Squares (fGLS) - For Correcting Heteroscedasticity]]

# Algorithm
given 𝑛 training examples:
- (𝒙<sup>(1)</sup>, 𝑦<sup>(1)</sup>, 𝑤<sup>(1)</sup>)
- ...
- (𝒙<sup>(𝑛)</sup>, 𝑦<sup>(𝑛)</sup>, 𝑤<sup>(𝑛)</sup>)

where:
- 𝒙<sup>(𝑖)</sup>- input values of training example 𝑖
- 𝑦<sup>(𝑖)</sup>- target value of training example 𝑖
- 𝑤<sup>(𝑖)</sup>- the corresponding weight of training example 𝑖

and given linear function:
- 𝑦̂ = 𝑓(𝒙) = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>

ordinary least squares is defined as:
- <strong>𝜽</strong>ˆ = 𝑎𝑟𝑔𝑚𝑖𝑛<sub><strong>𝜽</strong></sub> 𝛴<sub>1≤𝑖≤𝑛</sub>\[ 𝑤<sup>(𝑖)</sup>·(𝑦̂<sup>(𝑖)</sup>-𝑦<sup>(𝑖)</sup>)² \]

where:
- 𝑦̂<sup>(𝑖)</sup>- is the predicted target value of a linear function 𝑓(𝒙<sup>(𝑖)</sup>)

# Resources
- [Ben Lambert's Video Lectures](https://www.youtube.com/watch?v=wCJ8I-MtJdQ&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=128&ab_channel=BenLambert)
