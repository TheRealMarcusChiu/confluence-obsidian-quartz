---
title: "MOME - Gamma Distribution"
created: 2021-09-13T05:28:07.655-05:00
modified: 2021-09-13T05:28:07.655-05:00
parent: "[[Method of Moments Estimation (MOME)]]"
children: []
---
###### [[Method of Moments Estimation (MOME)|MOME]] for Gamma Distribution

Let {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} be a sample from an [[Gamma Distribution|Gamma(𝛼,𝜆) Distribution]]

How to estimate 𝛼 and 𝜆?

from data we have computed:
- 𝑚<sub>1</sub>= (1/n) ∑<sub>1≤𝑖≤𝑛</sub>\[ 𝑋<sub>𝑖</sub><sup>1</sup> \] = X̄ = 48.2333 <font style="color: rgb(128,128,128);">\# where X̄ is the</font> [[Sample Mean|sample mean]]
- 𝑚<sub>2</sub>' = (1/𝑛) ∑<sub>1≤𝑖≤𝑛</sub>\[ 𝑋<sub>𝑖</sub> - 𝑋̅ \]<sup>2</sup>= 𝑆<sup>2</sup> = 679.7122

write 2 equations:
- μ<sub>1</sub> = 𝐄(𝑋) = 𝛼/𝜆 = 𝑚<sub>1</sub>
- μ<sub>2</sub>' = 𝑉𝑎𝑟(𝑋) = 𝛼/𝜆<sup>2</sup> = 𝑚<sub>2</sub>'

solve this system of equations in terms of 𝛼 and 𝜆, we get the method of moment estimates

solve for 𝛼:
- 𝛼/𝑚<sub>1</sub> = 𝜆
- 𝛼/𝑚<sub>2</sub>' = 𝜆<sup>2</sup>

- 𝛼<sup>2</sup>/𝑚<sub>1</sub><sup>2</sup>= 𝜆<sup>2</sup>
- 𝛼/𝑚<sub>2</sub>' = 𝜆<sup>2</sup>

- 𝛼<sup>2</sup>/𝑚<sub>1</sub><sup>2</sup>= 𝛼/𝑚<sub>2</sub>'
- 𝛼<sup>2</sup>/𝛼<sup></sup>= 𝑚<sub>1</sub><sup>2</sup>/𝑚<sub>2</sub>'
- 𝛼<sup></sup>= 𝑚<sub>1</sub><sup>2</sup>/𝑚<sub>2</sub>'

- 𝛼<sub>𝑚𝑜𝑚𝑒𝑛𝑡</sub>= 𝑚<sub>1</sub><sup>2</sup>/𝑚<sub>2</sub>' = 3.4227

solve for 𝜆:
- 𝛼 = 𝑚<sub>1</sub>𝜆
- 𝛼 = 𝑚<sub>2</sub>'𝜆<sup>2</sup>

- 𝑚<sub>2</sub>'𝜆<sup>2</sup>= 𝑚<sub>1</sub>𝜆
- 𝜆<sup>2</sup>/𝜆<sup></sup>= 𝑚<sub>1</sub>/𝑚<sub>2</sub>'
- 𝜆<sup></sup>= 𝑚<sub>1</sub>/𝑚<sub>2</sub>'

- 𝜆<sub>𝑚𝑜𝑚𝑒𝑛𝑡</sub> = 𝑚<sub>1</sub>/𝑚<sub>2</sub>' = 0.0710
