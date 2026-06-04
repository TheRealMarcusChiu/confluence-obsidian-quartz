---
title: "ANN - Pooling／Subsampling／Down-Sampling Layers"
created: 2024-08-14T12:39:28.512-05:00
modified: 2024-08-21T13:53:39.837-05:00
parent: "[[ANN - Layer Types]]"
children:
  - "[[Average Pooling Layer]]"
  - "[[Channel Max Pooling Layer (CMP)]]"
  - "[[Global Pooling Layer]]"
  - "[[L2 Norm Pooling Layer]]"
  - "[[Max Pooling Layer (MP) - MaxPooling Layer]]"
  - "[[Region of Interest (RoI) Pooling Layer]]"
  - "[[Stochastic Pooling Layer]]"
---
###### Pooling/Subsampling/Down-Sampling Layers
````excerpt
- reverse of [[ANN - Up-Sampling Layers|up-sampling layer]]
- is a form of non-linear down-sampling
- it partitions the input image into a set of rectangles and, for each such sub-region, outputs the maximum
- in a [[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN|CNN]] architecture, it is common to periodically insert a pooling layer between successive [[ANN - Convolutional Layer|convolutional layers]] (each one typically followed by an [[Activation Functions (AF)|activation function]], such as a [[Rectified Linear Unit (ReLU) Activation Function|ReLU]] layer)
- reduces the size of [[Feature Maps - Activation Maps|feature maps]] (i.e. the output of a [[ANN - Convolutional Layer|convolution layer]])
- grants a degree of local translational invariance to the features contained therein, allowing the CNN to be more robust to variations in their positions
- while pooling layers contribute to local translation invariance, they do not provide global translation invariance in a CNN, unless a form of [[Global Pooling Layer|global pooling]] is used
````
^excerpt

# Pooling Layer - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://machinelearningmastery.com/pooling-layers-for-convolutional-neural-networks/](https://machinelearningmastery.com/pooling-layers-for-convolutional-neural-networks/)
