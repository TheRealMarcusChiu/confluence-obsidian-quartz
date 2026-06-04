---
title: "Batch Gradient Estimation - Stochastic Gradient Estimation - Mini-Batch Gradient Estimation"
created: 2023-07-16T18:53:59.603-05:00
modified: 2024-09-12T12:02:00.078-05:00
parent: "[[Gradient Computation Algorithms - Algorithms Computing Gradients]]"
children: []
---
# Batch Gradient Estimation
- is a type of [[Gradient Computation Algorithms - Algorithms Computing Gradients|gradient computation algorithm]]
- approximates the true gradients using the <strong>ENTIRE</strong> training set
- the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]] using the approximated gradient is called [[Batch Gradient Descent]]

# Stochastic Gradient Estimation
- is a type of [[Gradient Computation Algorithms - Algorithms Computing Gradients|gradient computation algorithm]]
- approximates the true gradients using a <strong>SINGLE</strong> random element of the training data
- the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]] using the approximated gradient is called [[Stochastic Gradient Descent (SGD)]]

# Mini-Batch Gradient Estimation
- is a type of [[Gradient Computation Algorithms - Algorithms Computing Gradients|gradient computation algorithm]]
- approximates the true gradients using a <strong>SUBSET</strong> of the training data
- the [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent algorithm]] using the approximated gradient is called [[Mini-Batch Gradient Descent]]
