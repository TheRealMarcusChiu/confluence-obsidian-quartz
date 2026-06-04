---
title: "Gaussian RBF Kernel Function"
created: 2024-09-11T12:57:39.412-05:00
modified: 2024-09-11T12:58:45.816-05:00
parent: "[[Radial Basis \"Kernel\" Function (RBF)]]"
children: []
---
###### Gaussian RBF Kernel Function
````excerpt
- is a type of [[Radial Basis "Kernel" Function (RBF)]]
- the gaussian kernel corresponds to a dot-product in an infinite-dimensional space
- the gaussian kernel can be thought of as performing a kind of template matching (a training example 𝑥 associated with training label 𝑦 becomes a template for class 𝑦. when test point 𝑥' is near 𝑥 according to Euclidean distance, the Gaussian kernel has a large response, indicating that 𝑥' is very similar to the 𝑥 template. the model then puts a large weight on the associated training label 𝑦. Overall the prediction will combine many such training labels weighted by the similarity of the corresponding training examples)
````
^excerpt
