---
title: "Adam Optimizer"
created: 2023-07-14T20:56:38.911-05:00
modified: 2023-07-15T10:49:42.192-05:00
parent: "[[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms]]"
children: []
---
###### Adam Optimizer
````excerpt
- extension of [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]] that uses estimations of the [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|first and second moments]] of the gradient to adapt the learning rate 𝛼 for each parameter/variable/weight 𝜃
- introduced by Jimmy Ba in 2014
- is derived from adaptive moment estimation
````
^excerpt

# Adam - Hyperparameters
- <strong>alpha</strong> - also referred to as the learning rate or step size. The proportion that weights are updated (e.g. 0.001). Larger values (e.g. 0.3) result in faster initial learning before the rate is updated. Smaller values (e.g. 1.0E-5) slow learning right down during training
- <strong>beta1</strong> - the exponential decay rate for the first moment estimates (e.g. 0.9)
- <strong>beta2</strong> - the exponential decay rate for the second-moment estimates (e.g. 0.999). This value should be set close to 1.0 on problems with a sparse gradient (e.g. NLP and computer vision problems)
- <strong>epsilon</strong> - is a very small number to prevent any division by zero in the implementation (e.g. 10E-8)

# Resources
- [https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/](https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/)
- [https://arxiv.org/abs/1412.6980](https://arxiv.org/abs/1412.6980)
- [https://optimization.cbe.cornell.edu/index.php?title=Adam](https://optimization.cbe.cornell.edu/index.php?title=Adam)
