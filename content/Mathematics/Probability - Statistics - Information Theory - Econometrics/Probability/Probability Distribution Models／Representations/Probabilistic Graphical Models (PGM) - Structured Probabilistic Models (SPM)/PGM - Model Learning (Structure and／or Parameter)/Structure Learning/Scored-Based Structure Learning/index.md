---
title: "Scored-Based Structure Learning"
created: 2021-09-13T05:26:35.960-05:00
modified: 2021-09-13T05:26:35.960-05:00
parent: "[[Structure Learning]]"
children: []
---
###### Scored-Based Structure Learning
- define a <strong>scoring function</strong> that evaluates how well a structure matches the given training/sample data
	- likelihood structure score
	- bayesian structure score
- search for a structure that maximizes the score

### Likelihood Structure Score

find (𝐺,𝜃) that maximizes the log-likelihood:
- 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐺</sub>\[[[Likelihood Function - Log-Likelihood Function - Score Function|𝑙𝑜𝑔-𝑙𝑖𝑘𝑒𝑙𝑖ℎ𝑜𝑜𝑑]](𝐺|𝑑𝑎𝑡𝑎)\]

using log-likelihood itself is problematic. because it favors graphs with more edges. therefore, add a penalty term that will prefer simpler models
- 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐺</sub>\[[[Likelihood Function - Log-Likelihood Function - Score Function|𝑙𝑜𝑔-𝑙𝑖𝑘𝑒𝑙𝑖ℎ𝑜𝑜𝑑]](𝐺|𝑑𝑎𝑡𝑎) + 𝑝𝑒𝑛𝑎𝑙𝑡𝑦\]

where:
- 𝑝𝑒𝑛𝑎𝑙𝑡𝑦 = -𝜙(𝑀) \* 𝐷𝑖𝑚(𝐺)

where:
- 𝜙(𝑀) - is a function of the number of data points. either:
	- [[Akaike's Information Criterion／Criteria (AIC)|Akaike Information Criteria]]: 𝜙(𝑀) = 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡
	- [[Bayesian Information Criterion／Criteria (BIC)|Bayesian Information Criteria]] (minimum description length): 𝜙(𝑀) = 𝑙𝑜𝑔<sub>2</sub>(𝑀) / 2
- 𝐷𝑖𝑚(𝐺) - is the number of parameters in 𝐺
