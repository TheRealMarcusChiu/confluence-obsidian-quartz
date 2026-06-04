---
title: "Exploding Gradient Problem"
created: 2023-07-15T11:12:21.035-05:00
modified: 2023-07-15T11:18:56.330-05:00
parent: "[[Gradient Computation Algorithms - Algorithms Computing Gradients]]"
children: []
---
###### Exploding Gradient Problem
````excerpt
- gradients are used to update the weights. if the gradients are large, the multiplication of these gradients will become huge over time. This results in the model being unable to learn and its behavior becomes unstable.
````
^excerpt

# Solutions
- Use Gradient Clipping
- Use Weight Regularization

# Resources
- [https://machinelearningmastery.com/exploding-gradients-in-neural-networks/](https://machinelearningmastery.com/exploding-gradients-in-neural-networks/)
