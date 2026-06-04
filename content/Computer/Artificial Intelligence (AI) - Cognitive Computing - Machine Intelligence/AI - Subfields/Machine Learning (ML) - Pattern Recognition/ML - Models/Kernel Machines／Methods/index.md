---
title: "Kernel Machines／Methods"
created: 2020-08-17T13:06:03.226-05:00
modified: 2024-09-11T13:04:01.099-05:00
parent: "[[ML - Models]]"
children:
  - "[[Kernel Trick]]"
---
###### Kernel Machines/Methods
````excerpt
- are algorithms that utilize [[Kernel Functions (Similarity Functions)|kernel functions]]
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Kernel Machines - Drawbacks
- a major drawback to kernel machines is that the cost of evaluating the decision function is linear in the number of training examples (bc the 𝑖<sup>th</sup> example contributes a term 𝛼<sub>𝑖</sub> 𝑘(𝒙,𝒙<sub>𝑖</sub>) to the decision function). SVMs are able to mitigate this by learning an 𝛼 vector that contains mostly zeros, then classifying a new example then requires evaluating the kernel function ONLY for training examples that have non-zero 𝛼<sub>𝑖</sub> (these training examples are known as support vectors)
- kernel machines will still suffer from the high computational cost of training when the dataset is large
- kernel machines with generic kernel functions struggle to generalize well
- [[Deep Learning]] was designed to overcome these limitations of kernel machines (Hinton 2006 demonstrated that a [[Artificial Neural Networks (ANN)|neural network]] could outperform the [[Radial Basis "Kernel" Function (RBF)|RBF kernel]] [[Support Vector Machines (SVM)|SVM]] on the MNIST benchmark)
