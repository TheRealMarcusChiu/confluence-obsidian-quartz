---
title: "Distance Covariance／Covariation - Properties"
created: 2021-11-12T02:07:43.661-06:00
modified: 2021-11-12T02:19:02.736-06:00
parent: "[[Distance Covariance／Covariation]]"
children: []
---
- 𝑑𝐶𝑜𝑣(𝑋,𝑌) = 𝑑𝐶𝑜𝑣(𝑌,𝑋)
- 𝑑𝐶𝑜𝑣(𝑎<sub>1</sub> + 𝑏<sub>1</sub>𝐶<sub>1</sub>𝑋, 𝑎<sub>2</sub> + 𝑏<sub>2</sub>𝐶<sub>2</sub>𝑌) = |𝑏<sub>1</sub>𝑏<sub>2</sub>| 𝑑𝐶𝑜𝑣(𝑋,𝑌) for all:
	- constant vectors 𝑎<sub>1</sub> and 𝑎<sub>2</sub>
	- scalars 𝑏<sub>1</sub> and 𝑏<sub>2</sub>
	- orthonormal matrices 𝐶<sub>1</sub> and 𝐶<sub>2</sub>
- 𝑑𝐶𝑜𝑣(𝑋<sub>1</sub> + 𝑋<sub>2</sub>, 𝑌<sub>1</sub> + 𝑌<sub>2</sub>) ≤ 𝑑𝐶𝑜𝑣(𝑋<sub>1</sub>, 𝑌<sub>1</sub>) + 𝑑𝐶𝑜𝑣(𝑋<sub>2</sub>, 𝑌<sub>2</sub>)
	- if the random vectors (𝑋<sub>1</sub>, 𝑌<sub>1</sub>) and (𝑋<sub>2</sub>, 𝑌<sub>2</sub>) are independent then:
- 𝑑𝐶𝑜𝑣(𝑋<sub>1</sub> + 𝑋<sub>2</sub>, 𝑌<sub>1</sub> + 𝑌<sub>2</sub>) = 𝑑𝐶𝑜𝑣(𝑋<sub>1</sub>, 𝑌<sub>1</sub>) + 𝑑𝐶𝑜𝑣(𝑋<sub>2</sub>, 𝑌<sub>2</sub>)
	- If either:
		- 𝑋<sub>1</sub>and 𝑌<sub>1</sub> are both constants
		- 𝑋<sub>2</sub> and 𝑌<sub>2</sub> are both constants
		- 𝑋<sub>1</sub>, 𝑌<sub>1</sub>, 𝑋<sub>2</sub>, 𝑌<sub>2</sub> are mutually independent
- 𝑑𝐶𝑜𝑣(𝑌,𝑋) = 0, iff 𝑋 and 𝑌 are mutually [[Probability Independence (Marginal Independence - Conditional Independence)|independent]]
