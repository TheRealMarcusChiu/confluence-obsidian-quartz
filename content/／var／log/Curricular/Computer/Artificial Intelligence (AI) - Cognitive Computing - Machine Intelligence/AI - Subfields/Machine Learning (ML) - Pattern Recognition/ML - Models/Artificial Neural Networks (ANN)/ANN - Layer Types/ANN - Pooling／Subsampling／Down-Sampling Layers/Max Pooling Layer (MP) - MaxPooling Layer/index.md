---
title: "Max Pooling Layer (MP) - MaxPooling Layer"
created: 2024-08-14T12:41:13.515-05:00
modified: 2026-05-21T00:04:18.287-05:00
parent: "[[ANN - Pooling／Subsampling／Down-Sampling Layers]]"
children: []
---
###### Max Pooling Layer (MP) - MaxPooling Layer
````excerpt
- a type of [[ANN - Pooling／Subsampling／Down-Sampling Layers|pooling layer]]
- propagating the max of an input region and discarding the rest
````
^excerpt

# Max Pooling - Example
![[Max Pooling Layer (MP) - MaxPooling Layer/max-pooling.png|301]]

A very common form of max pooling is a layer with filters of size 2×2, applied with a stride of 2, which subsamples every depth slice in the input by 2 along both width and height, discarding 75% of the activations:
- $f_{X,Y}(S) = \max_{a,b=0}^1 S_{2X+a, 2Y+b}$

In this case, every max operation is over 4 numbers.
