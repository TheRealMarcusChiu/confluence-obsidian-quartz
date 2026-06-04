---
title: "AlexNet"
created: 2024-08-14T12:36:52.668-05:00
modified: 2024-08-14T12:38:52.221-05:00
parent: "[[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN]]"
children: []
---
###### AlexNet
````excerpt
- contains eight layers: the first five are convolutional layers, some of them followed by max-pooling layers, and the last three are fully connected layers. The network, except the last layer, is split into two copies, each run on one GPU. The entire structure can be written as:
	- (CNN → RN → MP)<sup>2</sup> → (CNN<sup>3</sup> → MP) → (FC → DO)<sup>2</sup> → Linear → [[Softmax Activation Function|Softmax]]
- where:
	- CNN - convolutional layer (with [[Rectified Linear Unit (ReLU) Activation Function|ReLU]])
	- RN - local response normalization
	- MP - max pooling
	- FC - fully connected layer (with ReLU)
	- Linear - fully connected layer (without activation)
	- DO - [[Dropout - Dilution - DropConnect (ANN)|dropout]]
````
^excerpt
