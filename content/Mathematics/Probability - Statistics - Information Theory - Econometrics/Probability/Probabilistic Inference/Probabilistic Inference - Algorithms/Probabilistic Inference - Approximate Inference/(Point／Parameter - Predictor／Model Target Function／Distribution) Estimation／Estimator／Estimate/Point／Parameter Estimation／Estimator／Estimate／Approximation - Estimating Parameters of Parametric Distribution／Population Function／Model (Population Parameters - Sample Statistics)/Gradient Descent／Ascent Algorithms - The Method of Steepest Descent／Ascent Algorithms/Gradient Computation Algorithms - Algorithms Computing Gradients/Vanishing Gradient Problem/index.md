---
title: "Vanishing Gradient Problem"
created: 2023-07-15T11:16:45.174-05:00
modified: 2023-07-15T11:24:32.719-05:00
parent: "[[Gradient Computation Algorithms - Algorithms Computing Gradients]]"
children: []
---
###### Vanishing Gradient Problem
````excerpt
- it describes the situation where a deep multilayer feed-forward network or recurrent neural network is unable to propagate useful gradient information from the output end of the model back to the layers near the input end of the model
- the result is the general inability of models with many layers to learn on a given dataset, or for models with many layers to prematurely converge to a poor solution
````
^excerpt

# Solutions
- Use [[Rectified Linear Unit (ReLU) Activation Function|Rectified Linear Unit Activation Function (ReLU)]]
- Use an Alternative Weight Initialization Scheme
- Unsupervised Pre-Training
- Layer-Wise Training

# Resources
- [https://machinelearningmastery.com/how-to-fix-vanishing-gradients-using-the-rectified-linear-activation-function/](https://machinelearningmastery.com/how-to-fix-vanishing-gradients-using-the-rectified-linear-activation-function/)
