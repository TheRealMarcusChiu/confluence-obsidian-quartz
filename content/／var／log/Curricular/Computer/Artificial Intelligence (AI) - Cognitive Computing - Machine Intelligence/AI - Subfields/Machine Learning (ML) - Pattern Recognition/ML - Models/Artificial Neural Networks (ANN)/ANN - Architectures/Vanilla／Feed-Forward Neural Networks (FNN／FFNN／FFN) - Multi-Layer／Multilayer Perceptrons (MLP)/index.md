---
title: "Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)"
created: 2020-08-04T11:57:25.666-05:00
modified: 2024-08-24T14:55:59.471-05:00
parent: "[[ANN - Architectures]]"
children:
  - "[[Feed-Forward Network - Python Implementation]]"
---
###### Vanilla/Feed-Forward Neural Networks (FNN/FFNN/FFN) - Multi-Layer/Multilayer Perceptrons (MLP)
````excerpt
- is the simplest type of [[ANN - Architectures|artificial neural network architecture]] wherein connections between the [[Perceptrons (Artificial Neurons)|perceptron]]s do not form a cycle
````
^excerpt

- those with cycles/feedbacks are [[Recurrent Neural Networks (RNN)|recurrent neural networks]]

# FNN - Prerequisite
- read: [[Binomial／Binary Logistic Regression (BLR)|Binomial/Binary Logistic Regression (BLR)]]

# FNN - Model Representation

> [!expand]- Click here to expand...
> given 𝑛 sample/training data:
> - (𝑦<sup>(1)</sup>, 𝒙<sup>(1)</sup>) = (𝑦<sup>(1)</sup>, 𝑥<sub>1</sub><sup>(1)</sup>, <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑥<sub>2</sub><sup>(1)</sup>, </font></font>..., 𝑥<sub>𝑘</sub><sup>(1)</sup>) <font style="color: rgb(128,128,128);">\# sample 1</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">(𝑦<sup>(2)</sup>, 𝒙<sup>(2)</sup>) = (𝑦<sup>(2)</sup>, 𝑥<sub>1</sub><sup>(2)</sup>, 𝑥<sub>2</sub><sup>(2)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(2)</sup>)</font> \# sample 2</font>
> - ...
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">(𝑦<sup>(𝑛)</sup>, 𝒙<sup>(𝑛)</sup>) = (𝑦<sup>(𝑛)</sup>, 𝑥<sub>1</sub><sup>(𝑛)</sup>, 𝑥<sub>2</sub><sup>(𝑛)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑛)</sup>)</font> \# sample 𝑛</font>
>
> we define:
> - 𝐿 - total number of layers in the network
> - 𝑠<sub>𝑙</sub> - number of perceptrons (not counting the bias unit) in layer 𝑙
> - 𝑠<sub>𝐿</sub>- number of output units
>
> ###### Binomial Classification (2 classes)
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑦 </font></font>= 0 or 1
> - 𝑠<sub>𝐿</sub>= 1 <font style="color: rgb(128,128,128);">(e.g. 1 output unit)</font>
> - ℎ<sub>𝜃</sub>(𝒙) outputs a scalar value between 0 and 1 inclusive <font style="color: rgb(128,128,128);">(e.g. 0.99 or 0.45 is a possible output)</font>
>
> ###### Multinomial Classification (𝑐 classes)
> - 𝑦<sub></sub>∊ ℝ<sup>𝑐</sup> <font style="color: rgb(128,128,128);">(e.g. when 𝑐=3 then 𝑦<sub>𝑖</sub>∊ {\[1,0,0\]<sup>𝑇</sup>, \[0,1,0\]<sup>𝑇</sup>, \[0,0,1\]<sup>𝑇</sup></font><font style="color: rgb(128,128,128);">})</font>
> - 𝑠<sub>𝐿</sub>= 𝑐 <font style="color: rgb(128,128,128);">(e.g. 𝑐 output units)</font>
> - ℎ<sub>𝜃</sub>(𝒙) outputs a 𝑐-dimensional vector where each entry is a scalar value between 0 and 1 inclusive <font style="color: rgb(128,128,128);">(e.g. </font><font style="color: rgb(128,128,128);">when 𝑐</font><font style="color: rgb(128,128,128);">=3 then \[0.99,0.02,0.45\]<sup>𝑇</sup>is a possible output)</font>
# FNN - Cost Function

> [!expand]- Click here to expand...
> ###### Neural Network's Cost Function (binomial classification)
> - 𝐽(𝜃) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(255,102,0);">(𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(153,204,0);">(1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>))</font><strong>\]</strong>\] <font style="color: rgb(122,134,154);">\# same as [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]]</font>
>
> ###### Neural Network's Cost Function (multinomial classification)
> - 𝐽(𝜃) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>𝛴<sub>1≤𝑗≤𝑐</sub>\[<font style="color: rgb(255,102,0);">(𝑦<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font> + <font style="color: rgb(153,204,0);">(1-𝑦<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(1-ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font>\]<strong>\]</strong>\] <font style="color: rgb(122,134,154);">\# same as [[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]]</font>
>
> where:
> - 𝑦\[𝑗\] - is the 𝑗<sup>𝑡ℎ</sup> entry of the vector
> - ℎ<sub>𝜃</sub>(𝒙)\[𝑗\] - is the 𝑗<sup>𝑡ℎ</sup> entry of the vector
# FNN - Cost Function With Regularization of 𝜃s

> [!expand]- Click here to expand...
> ###### Neural Network's Cost Function <font style="color: rgb(128,128,128);"><font style="color: rgb(51,204,204);">with regularization of 𝜃s</font> <font style="color: rgb(51,51,51);">(binomial classification)</font></font>
> - 𝐽(𝜃) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>𝛴<sub>1≤𝑗≤𝑐</sub>\[<font style="color: rgb(255,102,0);">(𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(153,204,0);">(1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>))</font>\]<strong>\]</strong>\] + <font style="color: rgb(51,204,204);">(𝜆/2𝑛)·\[𝛴<sub>1≤𝑙≤𝐿</sub>𝛴<sub>1≤𝑖≤𝑠𝑙</sub>𝛴<sub>1≤𝑗≤𝑠𝑙+1</sub>(𝜃<sub>𝑙</sub>\[𝑖,𝑗\])<sup>2</sup></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,204,204);">\]</font> \# similar to <font style="color: rgb(122,134,154);">[[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]]</font>i</font>
>
> ###### Neural Network's Cost Function <font style="color: rgb(128,128,128);">with regularization of 𝜃s <font style="color: rgb(51,51,51);">(multinomial classification)</font></font>
> - 𝐽(𝜃) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>𝛴<sub>1≤𝑗≤𝑐</sub>\[<font style="color: rgb(255,102,0);">(𝑦<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font> + <font style="color: rgb(153,204,0);">(1-𝑦<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(1-ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font>\]<strong>\]</strong>\] +<font style="color: rgb(51,204,204);"> (𝜆/2𝑛)·\[𝛴<sub>1≤𝑙≤𝐿</sub>𝛴<sub>1≤𝑖≤𝑠<sub>𝑙</sub></sub>𝛴<sub>1≤𝑗≤𝑠<sub>𝑙+1</sub></sub>(𝜃<sub>𝑙</sub>\[𝑖,𝑗\])<sup>2</sup></font><font style="color: rgb(128,128,128);"><font style="color: rgb(51,204,204);">\]</font> \# similar to <font style="color: rgb(122,134,154);">[[Multinomial／N-nary Logistic Regression (MLR)|multinomial logistic regression]]</font></font>
>
> where:
> - 𝜃<sub>𝑙</sub>\[𝑖,𝑗\] - the coefficient 𝜃 connecting (perceptron 𝑖 at layer 𝑙) to (perceptron 𝑗 at layer 𝑙+1)
# FNN - Learning 𝜃s With [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]] & [[Back Propagation (BP)|Backpropagation]]

> [!expand]- Click here to expand...
> need to compute (𝛿/𝛿𝜃<sub>𝑙</sub>\[𝑖,𝑗\]) 𝐽(𝜃) wrt to every 𝜃<sub>𝑙</sub>\[𝑖,𝑗\]
> ###### Given 1 Training Data (𝑦, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)
>
> forward propagation:
> - 𝑎<sub>1</sub>= \[𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\]<sup>𝑇</sup>
> - 𝑧<sub>2</sub> = 𝜃<sub>1</sub>𝑎<sub>1</sub>
> - 𝑎<sub>2</sub>= 𝑔(𝑧<sub>2</sub>)
> - 𝑧<sub>3</sub> = 𝜃<sub>2</sub>𝑎<sub>2</sub>
> - 𝑎<sub>3</sub>= 𝑔(𝑧<sub>3</sub>)
> - ...
> - 𝑧<sub>𝐿</sub> = 𝜃<sub>𝐿-1</sub>𝑎<sub>𝐿-1</sub>
> - 𝑎<sub>𝐿</sub>= 𝑔(𝑧<sub>𝐿</sub>)
> - ℎ<sub>𝜃</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑎<sub>𝐿</sub>
>
> 𝛿<sub>𝑙</sub>\[𝑗\]= error of node 𝑗 at layer 𝑙
>
> for each output unit 𝑗 at the last layer 𝐿:
> - 𝛿<sub>𝐿</sub>\[𝑗\] = ℎ<sub>𝜃</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)\[𝑗\] - 𝑦\[𝑗\]
> - 𝛿<sub>𝐿</sub>\[𝑗\] = 𝑎<sub>𝐿</sub>\[𝑗\] - 𝑦\[𝑗\]
>
> in vector format
> - 𝛿<sub>𝐿</sub>= ℎ<sub>𝜃</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) - 𝑦
> - 𝛿<sub>𝐿</sub>= 𝑎<sub>𝐿</sub> - 𝑦
>
> for previous layers (𝐿-1 to 1):
> - 𝛿<sub>𝐿-1</sub>= (𝜃<sub>𝐿-1</sub>)<sup>𝑇</sup>𝛿<sub>𝐿</sub> · 𝑔'(𝑧<sub>𝐿-1</sub>) = (𝜃<sub>𝐿-1</sub>)<sup>𝑇</sup>𝛿<sub>𝐿</sub> · 𝑎<sub>𝐿-1</sub> · (1 - 𝑎<sub>𝐿-1</sub>)
> - 𝛿<sub>𝐿-2</sub>= (𝜃<sub>𝐿-2</sub>)<sup>𝑇</sup>𝛿<sub>𝐿-1</sub> · 𝑔'(𝑧<sub>𝐿-2</sub>) = (𝜃<sub>𝐿-2</sub>)<sup>𝑇</sup>𝛿<sub>𝐿-1</sub> · 𝑎<sub>𝐿-2</sub> · (1 - 𝑎<sub>𝐿-2</sub>)
> - ...
> - 𝛿<sub>2</sub>= (𝜃<sub>2</sub>)<sup>𝑇</sup>𝛿<sub>3</sub> · 𝑔'(𝑧<sub>2</sub>) = (𝜃<sub>2</sub>)<sup>𝑇</sup>𝛿<sub>3</sub> · 𝑎<sub>2</sub> · (1 - 𝑎<sub>2</sub>)
> - no need for 𝛿<sub>1</sub>
>
> ###### Given Training Set {(𝑦<sup>(1)</sup>, 𝑥<sub>1</sub><sup>(1)</sup>, <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑥<sub>2</sub><sup>(1)</sup>, </font></font>..., 𝑥<sub>𝑘</sub><sup>(1)</sup>), ..., (𝑦<sup>(𝑛)</sup>, 𝑥<sub>1</sub><sup>(𝑛)</sup>, <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑥<sub>2</sub><sup>(𝑛)</sup>, </font></font>..., 𝑥<sub>𝑘</sub><sup>(𝑛)</sup>)}
> - set 𝛥<sub>𝑙</sub>\[𝑖,𝑗\] = 0 for all 𝑙𝑖𝑗
> - for 𝑖 = 1 to 𝑛
> 	- set 𝑎<sub>1</sub>= \[𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>\]<sup>𝑇</sup>
> 	- perform forward propagation to compute 𝑎<sub>𝑙</sub> for 𝑙 = 2 to 𝐿
> 	- using 𝑦<sub>𝑖</sub>, compute 𝛿<sub>𝐿</sub>= 𝑎<sub>𝐿</sub> - 𝑦<sub>𝑖</sub>
> 	- compute 𝛿<sub>𝐿-1</sub>, ..., 𝛿<sub>2</sub>
> 	- 𝛥<sub>𝑙</sub>\[𝑖,𝑗\] ← 𝛥<sub>𝑙</sub>\[𝑖,𝑗\]<sub></sub>+ 𝑎<sub>𝑙</sub>\[𝑗\]·𝛿<sub>𝑙+1</sub>\[𝑖\] <font style="color: rgb(128,128,128);">\# vectorized form 𝛥<sub>𝑙</sub> ← 𝛥<sub>𝑙</sub> + (𝛿<sub>𝑙+1</sub>)·(𝑎<sub>𝑙</sub>)<sup>𝑇</sup></font>
> - (𝛿/𝛿𝜃<sub>𝑙</sub>\[𝑖,𝑗\])𝐽(𝜃) = (1/𝑚)·𝛥<sub>𝑙</sub>\[𝑖,𝑗\] + 𝜆·𝜃<sub>𝑙</sub>\[𝑖,𝑗\] <font style="color: rgb(128,128,128);">\# 𝑗 ≠ 0</font>
> - (𝛿/𝛿𝜃<sub>𝑙</sub>\[𝑖,𝑗\])𝐽(𝜃) = (1/𝑚)·𝛥<sub>𝑙</sub>\[𝑖,𝑗\] <font style="color: rgb(128,128,128);">\# 𝑗 = 0</font>
# Resources
- [https://glassboxmedicine.com/2019/01/17/introduction-to-neural-networks/](https://glassboxmedicine.com/2019/01/17/introduction-to-neural-networks/)
