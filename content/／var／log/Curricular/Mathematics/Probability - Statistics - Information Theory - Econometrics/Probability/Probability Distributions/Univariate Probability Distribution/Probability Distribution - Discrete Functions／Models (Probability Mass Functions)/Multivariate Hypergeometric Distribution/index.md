---
title: "Multivariate Hypergeometric Distribution"
created: 2023-08-31T17:30:18.094-05:00
modified: 2023-08-31T17:41:50.117-05:00
parent: "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
children: []
---
###### Multivariate Hypergeometric Distribution
````excerpt
- is a type of [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|discrete probability distribution]]
- is a generalization of the [[Hypergeometric Distribution|hypergeometric distribution]]
````
^excerpt

# Distribution$P(Y_1=y_1,Y_2=y_2,...,Y_k=y_k) = \frac{\binom{m_1}{y_1}\binom{m_2}{y_2}...\binom{n_k}{y_k}}{\binom{N}{n}}$

where:
- 𝑁 is the total number of ALL elements in the population dataset
- 𝑛 is the total number of ALL elements in the sample dataset
- 𝑚<sub>𝑖</sub> is the number of element 𝑖 in the population dataset
	- $\sum_{i=0}^k m_i = N$
- 𝑦<sub>𝑖</sub> is the number of element 𝑖 in the sample dataset
	- $\sum_{i=0}^k y_i = n$
- () is [combinations without replacement](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023326)
