---
title: "Maxout Unit Activation Function"
created: 2023-12-25T11:42:41.185-06:00
modified: 2023-12-25T11:45:56.499-06:00
parent: "[[Activation Functions (AF)]]"
children: []
---
###### Maxout Unit Activation Function
````excerpt
- is a generalization of the [[Rectified Linear Unit (ReLU) Activation Function|ReLU]] and the [[Leaky ReLU|leaky ReLU]] functions
- it is a piecewise linear function that returns the maximum of the inputs, designed to be used in conjunction with [[Dropout - Dilution - DropConnect (ANN)|dropout]]
	- $f(x) = max(w_1^Tx + b_1, w_2^Tx + b_2)$
- the main drawback of Maxout is that it is computationally expensive as it doubles the number of parameters for each neuron
````
^excerpt
