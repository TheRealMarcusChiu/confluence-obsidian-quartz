---
title: "Batch Normalization／Norm (BN)"
created: 2022-12-11T17:00:44.512-06:00
modified: 2024-09-25T13:43:28.388-05:00
parent: "[[ANN - Normalization Methods]]"
children: []
---
###### Batch Normalization/Norm (BN)
````excerpt
- is a type of [[ANN - Normalization Methods|normalization method]]
- solves the [[Internal Covariate Shift Problem|"internal covariate shift" problem]]
- is a method used to make training of [[Artificial Neural Networks (ANN)|artificial neural networks]] faster and more stable through normalization of the layers' inputs by re-centering and re-scaling
- makes it possible to use saturating nonlinearities by preventing the network from getting stuck in the saturated modes
- it was proposed by Sergey Ioffe and Christian Szegedy in 2015
- almost always only used in [[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN|convolutional neural networks]]
- [[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips|Gradient Descent/Ascent Algorithm - Data Preprocessing Tips]]
````
^excerpt

# BN - Why Use It?
- improves gradient flow through the network
- allows higher learning rates
- speeds up training
- reduces strong dependence on weight initialization
- regularizes the model (a little bit)
- slightly reduces the need for [[Dropout - Dilution - DropConnect (ANN)|dropout]] (maybe)

# BN - Architecture

A batch-Norm layer is usually inserted after a [[ANN - Linear／Fully-Connected Layer|fully connected]] or [[ANN - Convolutional Layer|convolutional layer]] and before a [[ANN - Non-Linear Layer|non-linear layer]]

![[Batch Normalization／Norm (BN)/batch-norm-neural-network-architecture.png|400]]
# BN - Introduction

It has been long known (LeCun et al., 1998b; Wiesler & Ney, 2011) that the network training converges faster if its inputs are [[Gradient Descent／Ascent Algorithm - Data Preprocessing Tips|whitened]] – i.e., linearly transformed to have:
- zero means
- unit variances
- decorrelated

As each layer observes the inputs produced by the layers below, it would be advantageous to achieve the same whitening of the inputs of each layer. This will remove the ill effects of "internal covariate shift".

Full whitening (i.e. decorrelation) of each input of a layer is costly we will simply:
- normalize each scalar input/feature independently (i.e. having zero mean and unit variance)

For a layer with a 𝑑-dimensional input 𝚡 = {𝑥<sup>(1)</sup>, ..., 𝑥<sup>(𝑑)</sup>}, we will normalize each dimension:
- $\hat{x}^{(i)} = \frac{x^{(i)} - 𝐄[x^{(i)}]}{\sqrt{Var[x^{(i)}]}}$

Where expectation 𝐄 and variance 𝑉𝑎𝑟 are computed over the training data set. As shown in (LeCun et al., 1998b), such normalization speeds up convergence, even when the features are NOT decorrelated.

Note that simply normalizing each input of a layer may change what the layer can represent. For instance, normalizing the inputs of a sigmoid would constrain them to the linear regime of the nonlinearity. To address this, we make sure that <em>the transformation inserted in the network can represent the identity transform</em>. To accomplish this, we introduce, for each activation 𝑥<sup>(𝑖)</sup>, a pair of parameters 𝛾<sup>(𝑖)</sup> and 𝛽<sup>(𝑖)</sup>, which scale and shift the normalized value:
- $y^{(i)} = 𝛾^{(i)}\hat{x}^{(i)} + 𝛽^{(i)}$

These parameters are learned along with the original model parameters and restore the representational power of the network. Indeed by setting the following, we could recover the original activations if that were the optimal thing to do:
- $𝛾^{(i)} = \sqrt{Var[x^{(i)}]}$
- $𝛽^{(i)} = 𝐄[x^{(i)}]$

Consider a mini-batch 𝓑 of size 𝑚. Let's focus on a particular activation 𝑥<sup>(𝑖)</sup> and omit (𝑖) for clarity.

The Batch Normalizing Transform (𝐵𝑁<sub>𝛾,𝛽</sub> : 𝑥<sub>1...𝑚</sub> → 𝑦<sub>1...𝑚</sub>) is presented below:

![[Batch Normalization／Norm (BN)/batch-norm-equations.png|378x250]]

During training, we need to backpropagate the gradient of loss 𝓁. We use the [[Chain Rule (Calculus) - Multivariable Chain Rule|chain rule]], as follows:
- $\frac{∂𝓁}{∂\hat{x}_i} = \frac{∂𝓁}{∂y_i} · 𝛾$
- $\frac{∂𝓁}{∂𝜎_𝓑^2} = \sum_{i=1}^m \frac{∂𝓁}{∂\hat{x}_i} · (x_i - 𝜇_𝓑) · \frac{-1}{2}(𝜎_𝓑^2 + 𝜖)^{-3/2}$
- $\frac{∂𝓁}{∂𝜇_𝓑} = \left( \sum_{i=1}^m \frac{∂𝓁}{∂\hat{x}_i}· \frac{-1}{\sqrt{𝜎_𝓑^2 + 𝜖}} \right) + \frac{∂𝓁}{∂𝜎_𝓑^2} · \frac{\sum_{i=1}^m -2(x_i - 𝜇_𝓑)}{m}$
- $\frac{∂𝓁}{∂x_i} = \frac{∂𝓁}{∂\hat{x}_i} · \frac{1}{\sqrt{𝜎_𝓑^2 + 𝜖}} + \frac{∂𝓁}{∂𝜎_𝓑^2} · \frac{2(x_i - 𝜇_𝓑)}{m} + \frac{∂𝓁}{∂𝜇_𝓑} · \frac{1}{m}$
- $\frac{∂𝓁}{∂𝛾} = \sum_{i=1}^m \frac{∂𝓁}{∂y_i} · \hat{x}_i$
- $\frac{∂𝓁}{∂𝛽} = \sum_{i=1}^m \frac{∂𝓁}{∂y_i}$

A model employing Batch Normalization can be trained using batch gradient descent, or [[Stochastic Gradient Descent (SGD)|Stochastic Gradient Descent]] with a mini-batch size 𝑚\>1, or with any of its variants such as [[Adaptive Gradient Algorithm (AdaGrad)|Adagrad]].

Below is the procedure for training batch-normalized networks:

![[Batch Normalization／Norm (BN)/Training a Batch-Normalized Network.png|320x431]]
# Accelerating BN Networks

Simply adding Batch Normalization to a network does not take full advantage of accelerating the training process. To do so, consider making further changes to the network and its training parameters:
- <strong>Increase learning rate</strong>. In a batch-normalized model, we have been able to achieve a training speedup from higher learning rates, with no ill side effects (Sec. 3.3).
- <strong>Remove Dropout</strong>. As described in Sec. 3.4, Batch Normalization fulfills some of the same goals as Dropout. Removing Dropout from Modified BN-Inception speeds up training, without increasing overfitting.
- <strong>Reduce the L2 weight regularization</strong>. While in Inception an L2 loss on the model parameters controls overfitting, in Modified BN-Inception the weight of this loss is reduced by a factor of 5. We find that this improves the accuracy of the held-out validation data.
- <strong>Accelerate the learning rate decay</strong>. In training Inception, the learning rate decreased exponentially. Because our network trains faster than Inception, we lower the learning rate 6 times faster.
- <strong>Remove Local Response Normalization</strong> While Inception and other networks (Srivastava et al., 2014) benefit from it, we found that Batch Normalization is not necessary.
- <strong>Shuffle training examples more thoroughly</strong>. We enabled within-shard shuffling of the training data, which prevents the same examples from always appearing in a mini-batch together. This led to about 1% improvements in the validation accuracy, which is consistent with the view of Batch Normalization as a regularizer (Sec. 3.4): the randomization inherent in our method should be most beneficial when it affects an example differently each time it is seen.
- <strong>Reduce the photometric distortions</strong>. Because batch-normalized networks train faster and observe each training example fewer times, we let the trainer focus on more “real” images by distorting them less

# Resources
- [[Batch Normalization- Accelerating Deep Network Training b y Reducing Internal Covariate Shift.pdf|Batch Normalization - Accelerating Deep Network Training by Reducing Internal Covariate Shift.pdf]]
- [Normalizing Activations in a Network (C2W3L04)](https://www.youtube.com/watch?v=tNIpEZLv_eg&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=28)
- [https://machinelearningmastery.com/batch-normalization-for-training-of-deep-neural-networks/](https://machinelearningmastery.com/batch-normalization-for-training-of-deep-neural-networks/)
