---
title: "Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN"
created: 2020-01-25T10:37:02.021-06:00
modified: 2024-08-21T13:24:22.466-05:00
parent: "[[ANN - Architectures]]"
children:
  - "[[AlexNet]]"
  - "[[CCN - 1x1／1x1xD Convolutions]]"
  - "[[CNN - A Modular Perspective (Part 1)]]"
  - "[[CNN - Understanding Convolutions (Part 2)]]"
---
###### Convolutional Neural Networks (CNN) - Translational-Equivariant CNN
````excerpt
- is a class of [[Artificial Neural Networks (ANN)|artificial neural networks]], most commonly applied to analyzing images
- exploits the principle of [[Translational Invariance／Symmetry|Translation/Translational/Shift Equivariant/Equivariance/Invariant/Invariance]]
- used in [[Computer Vision (CV)|computer vision]]
- inspired by [[Neocognitron]]
````
^excerpt

# CNN - Intuition
- [[CNN - A Modular Perspective (Part 1)]]
- [[CNN - Understanding Convolutions (Part 2)]]
- [[Visualizing-and-Understanding-Convolutional-Networks-compressed.pdf]]

# CNN - Steps
1. [[Image Data Preprocessing|Input Image Preprocessing]] (optional)
2. multiple rounds of:
	1. [[ANN - Convolutional Layer|Convolutional Layer]] (kernel/filter) - which outputs [[Feature Maps - Activation Maps|Feature Maps]]
	2. [[Activation Functions (AF)|Non-Linear Activation Function]] (e.g. [[Rectified Linear Unit (ReLU) Activation Function|ReLU]])
	3. [[ANN - Pooling／Subsampling／Down-Sampling Layers|Pooling/Subsampling Layer]] (e.g. [[Max Pooling Layer (MP) - MaxPooling Layer|MaxPooling Layer]])
3. [[ANN - Linear／Fully-Connected Layer|Fully Connected Layer]]
4. [[Softmax Activation Function|Softmax Layer]] (for classification)

###### Applying Non-Linear Activation after Convolution
![[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN/cnn-non-linear-activation-function-after-convolution.png|435]]
###### Typical CNN architecture

NOT SHOWN but non-linear activation functions applied between convolutions and subsampling

![[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN/typical-convolutional-neural-network.png|500x154]]

𝑑 is the number of convolutions/filters/kernels, which will produce 𝑑 separate [[Feature Maps - Activation Maps|feature maps]]
###### ![[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN/cnn-spatial-arrangement-of-output-volume.png|500x196]]
###### After Training - Representation Learning of Convolutional Layers
![[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN/cnn-represention-learning-in-deep-cnns.png|500]]
# CNN - Tensorflow Code Example
```py
import tensorflow as tf

def generate_model():
   model = tf.keras.Sequential([
      # first convolutional layer
      tf.keras.layers.Conv2D(32, filter_size=3, activation='relu'), # 32 different feature maps
      tf.keras.layers.MaxPool2D(pool_size=2, strides=2),

      # second convolutional layer
      tf.keras.layers.Conv2D(64, filter_size=3, activation='relu'), # 64 different feature maps
      tf.keras.layers.MaxPool2D(pool_size=2, strides=2),

      # fully connect classifier
      tf.keras.layers.Flatten(),
      tf.keras.layers.Dense(1024, activation='relu'), # 1024 nuerons
      tf.keras.layers.Dense(10, activation='softmax') # 10 outputs
   ])
   return model
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://glassboxmedicine.com/2019/05/05/how-computers-see-intro-to-convolutional-neural-networks/](https://glassboxmedicine.com/2019/05/05/how-computers-see-intro-to-convolutional-neural-networks/)
