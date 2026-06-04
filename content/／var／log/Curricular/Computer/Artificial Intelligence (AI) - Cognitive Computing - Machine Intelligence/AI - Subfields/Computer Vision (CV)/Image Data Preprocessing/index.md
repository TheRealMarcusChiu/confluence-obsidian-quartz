---
title: "Image Data Preprocessing"
created: 2023-07-16T19:09:26.566-05:00
modified: 2024-08-14T23:00:43.354-05:00
parent: "[[Computer Vision (CV)]]"
children: []
---
###### Image Data Preprocessing
````excerpt
- similar to [[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips|gradient descent data preprocessing]] for images
````
^excerpt

# Image Data Preprocessing - Types

Consider the CIFAR-10 example with \[32,32,3\] images:
- <strong>subtract the mean image</strong> - (mean image = \[32,32,3\] array)
- <strong>subtract per-channel mean</strong> - (mean along each channel = 3 numbers)

# Image Data Preprocessing - Use Cases
- used in [[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN|convolutional neural networks]]
