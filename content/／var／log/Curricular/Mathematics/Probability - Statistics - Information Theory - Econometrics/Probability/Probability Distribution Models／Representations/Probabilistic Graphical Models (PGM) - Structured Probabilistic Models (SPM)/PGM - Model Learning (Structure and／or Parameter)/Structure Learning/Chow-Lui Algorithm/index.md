---
title: "Chow-Lui Algorithm"
created: 2021-09-13T05:26:35.741-05:00
modified: 2021-09-13T05:26:35.741-05:00
parent: "[[Structure Learning]]"
children: []
---
###### Chow-Lui Algorithm
- learns the optimal tree given fully observed data (does not apply for graphs)
- idea
	- start with a fully connected graph with nodes as variables of data
	- the value of each edge is the [[Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)|Mutual Information]] between the variables it's connecting
	- then find the maximum spanning tree

### The Math

chow-lui proved that for trees:
- 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐺</sub>\[[[Likelihood Function - Log-Likelihood Function - Score Function|𝑙𝑜𝑔-𝑙𝑖𝑘𝑒𝑙𝑖ℎ𝑜𝑜𝑑]](𝐺|𝑑𝑎𝑡𝑎)\] = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐺</sub> \[∑<sub>𝑒∊𝐺.𝑒𝑑𝑔𝑒𝑠</sub>[[Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)|𝑚𝑢𝑡𝑢𝑎𝑙-𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛]](𝑒.𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒-𝑜𝑛𝑒, 𝑒.𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒-𝑡𝑤𝑜)\]

mutual information
- measures the dependence between 2 variables
- higher value → higher dependence between the 2 variables
- value 0 → the 2 variables are [[Probability Independence (Marginal Independence - Conditional Independence)|independent]]
