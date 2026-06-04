---
title: "Binomial／Binary Logistic Regression (BLR)"
created: 2020-06-02T00:21:36.706-05:00
modified: 2023-07-13T19:30:01.194-05:00
parent: "[[Logistic (Logit) Regression Model]]"
children: []
---
###### Binomial/Binary Logistic Regression (BLR)
- is a type of [[Logistic (Logit) Regression Model|logistic regression]] where the dependent variable is [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] binary
- similar to [[Perceptrons (Artificial Neurons)|perceptron]] when the perceptron's [[Activation Functions (AF)|activation function]] is the [[Logistic Function - Sigmoid Function (Standard Logistic Function)|sigmoid function]]
- similar to [[Linear SVM (SVM Without Kernel)]]

# BLR - Model Representation (without Features)

Given input attribute values 𝒙 find probability of 𝑦=1
- 𝑦 - binary output value
- 𝒙 - input attribute values vector (i.e. 𝒙 = \[𝑥<sub>0</sub>, ..., 𝑥<sub>𝑘</sub>\]) <font style="color: rgb(128,128,128);">\# 𝑥<sub>0</sub>=1 always, 𝑥<sub>0</sub>is the bias</font>
- 𝜽 - weight/parameter vector (i.e. 𝜽 = \[𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>\])

ℎ<sub>𝜽</sub>(𝒙) = 1 / (1 + 𝑒<sup>-𝜽ᵀ𝒙</sup>)
ℎ<sub>𝜽</sub>(𝒙) = 𝐏(𝑦=1|𝒙;𝜽)

> [!expand]- Click here to expand...
> - ℎ<sub><strong>𝜽</strong></sub>(𝒙) = 𝑔(𝜽<sup>𝑇</sup>𝒙)
> - 𝑔(𝑧) = 1 / (1 + 𝑒<sup>-𝑧</sup>)
> - 𝑔(𝑧) = (𝑒<sup>𝑧</sup>/𝑒<sup>𝑧</sup>) \[1 / (1 + 𝑒<sup>-𝑧</sup>)\]
> - 𝑔(𝑧) = (𝑒<sup>𝑧</sup> \* 1) / \[𝑒<sup>𝑧</sup>\* (1 + 𝑒<sup>-𝑧</sup>)\]
> - 𝑔(𝑧) = 𝑒<sup>𝑧</sup> / (𝑒<sup>𝑧</sup> + 𝑒<sup>𝑧</sup>𝑒<sup>-𝑧</sup>)
> - 𝑔(𝑧) = 𝑒<sup>𝑧</sup> / (𝑒<sup>𝑧</sup> + 𝑒<sup>0</sup>)
> - 𝑔(𝑧) = 𝑒<sup>𝑧</sup> / (𝑒<sup>𝑧</sup> + 1)
> - 𝑔(𝑧) = 𝑒<sup>𝑧</sup> / 𝛴<sub>0≤𝑖≤1</sub>\[𝑒<sup>𝐹(𝑧)</sup>\]
> - 𝑔(𝑧) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑙</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦=1,𝒙)\]</sup> / 𝛴<sub>0≤𝑖≤1</sub>\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑙</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦=𝑖,𝒙)\]</sup>\]
>
> where:
> - 𝑔(..) - is the [[Logistic Function - Sigmoid Function (Standard Logistic Function)|Sigmoid Function]] that has a range of (0, 1)
>
> therefore:
> - ℎ<sub>𝜽</sub>(𝒙) = 1 / (1 + 𝑒<sup>-𝜽𝑇𝒙</sup>)
>
> ℎ<sub>𝜽</sub>(𝒙) is the estimated [[Probability|probability]] that 𝑦 = 1
> - ℎ<sub>𝜽</sub>(𝒙) = 𝐏(𝑦=1|𝒙;𝜽)

𝑙𝑜𝑔\[ 𝐏(𝑦=1|𝒙;𝜽) / 𝐏(𝑦=0|𝒙;𝜽) \] = 𝜽<sup>𝑇</sup>𝒙
# BLR - Model Representation (with Features)

Given input attribute values 𝒙 find probability of 𝑦=1
- 𝑦 - binary output value
- 𝒙 - input attribute values vector (i.e. 𝒙 = \[𝑥<sub>0</sub>, ..., 𝑥<sub>𝑘</sub>\]) <font style="color: rgb(128,128,128);">\# 𝑥<sub>0</sub>=1 always, 𝑥<sub>0</sub>is the bias</font>
- 𝐹(𝑦=𝑖,𝒙) - set of 𝑙 features extracted from 𝒙 (i.e. \[𝑓<sub>0</sub>(𝑦=𝑖,𝒙), ..., 𝑓<sub>𝑙</sub>(𝑦=𝑖,𝒙)\]) <font style="color: rgb(122,134,154);">\# this will act as 𝒙 in the case of model representation without features</font>
- 𝜽 - weight/parameter vector (i.e. 𝜽 = \[𝜃<sub>0</sub>, ..., 𝜃<sub>𝑙</sub>\]) <font style="letter-spacing: 0.0px;color: rgb(122,134,154);">\# where 𝑙 is the number of features extracted from 𝒙</font>

ℎ<sub>𝜽</sub>(𝒙) = 1 / (1 + 𝑒<sup>-𝜽<sup>𝑇</sup>𝐹(𝑦=𝑖,𝒙)</sup>)
ℎ<sub>𝜽</sub>(𝒙) = 𝐏(𝑦=1|𝒙;𝜽)
ℎ<sub>𝜽</sub>(𝒙) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑙</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦=1,𝒙)\]</sup> / 𝛴<sub>0≤𝑖≤1</sub>\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑙</sub>\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦=𝑖,𝒙)\]</sup>\] <font style="color: rgb(122,134,154);">\# ?</font>
> [!info]
> Instead of coming up with 𝑙 features manually, consider "automating" it with [[Artificial Neural Networks (ANN)|neural networks]] (see [[Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)|Feed-Forward Network]])
# BLR - Cost Function (Using Squared Error) - DO NOT USE
- 𝑐𝑜𝑠𝑡(ℎ<sub>𝜃</sub>(𝑥), 𝑦) = (1/2) \* \[ℎ<sub>𝜃</sub>(𝑥) - 𝑦\]<sup>2</sup>

<font style="color: rgb(255,0,0);">This cost function is not convex with respect to 𝜃</font> because ℎ<sub>𝜃</sub>(𝑥) is a sigmoid function and is not linear like in [[Linear Regression (LR) Models|Linear Regression]]
# BLR - Cost Function (Using [[Cross-Entropy Loss Function - Log Loss Function - Negative Log Likelihood Loss Function|Log Loss Function]])
###### Cost Function of Single Sample (𝒙,𝑦) - Pairwise
###### ![[Binomial／Binary Logistic Regression (BLR)/binomial-logistic-regression-cost-function.png|350]]
###### Cost Function of Single Sample (𝒙,𝑦) - Combined

> [!indent]
> ![[Binomial／Binary Logistic Regression (BLR)/binomial-logistic-regression-cost-function-combined.png|330]]

###### Cost Function of Multiple Samples {(𝒙<sub>1</sub>,𝑦<sub>1</sub>), ..., (𝒙<sub>𝑛</sub>,𝑦<sub>𝑛</sub>)}

> [!indent]
> ![[Binomial／Binary Logistic Regression (BLR)/binomial-logistic-regression-cost-function-of-multiple-samples.png|330]]

# BLR - Learning 𝜃s With [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]]

![[Binomial／Binary Logistic Regression (BLR)/binomial-logitic-regression-cost-function-graph.png|301]]

to minimize 𝐽(𝜽) we its derivative with respect to each 𝜃<sub>𝑗</sub>:

> [!indent]
> ![[Binomial／Binary Logistic Regression (BLR)/binomial-logistic-regression-learning-thetas-gradient-descent.png|330]]

> [!expand]- derivative of 𝐽(𝜃) with respect to 𝜃𝑗
> - 𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(255,0,0);">𝑦<sup>(𝑖)</sup>·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(153,204,0);">(1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font><strong>\]</strong>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub></font><font style="color: rgb(122,134,154);">)</font> <font style="color: rgb(0,255,255);"><strong>\[</strong></font> -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(255,0,0);letter-spacing: 0.0px;">𝑦<sup>(𝑖)</sup>·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(153,204,0);letter-spacing: 0.0px;">(1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font><strong>\]</strong> <font style="color: rgb(0,255,255);"><strong>\]</strong></font>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">𝑦<sup>(𝑖)</sup>·</font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(255,0,0);">𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(0,128,0);">(1-𝑦<sup>(𝑖)</sup>)·</font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font><strong>\]</strong>
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(255,0,0);">𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> = <font style="color: rgb(128,0,0);">(1/ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))·</font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub></font><font style="color: rgb(122,134,154);">)</font><font style="color: rgb(255,0,0);">ℎ</font><font style="color: rgb(255,0,0);"><sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font>
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> = <font style="color: rgb(0,128,0);">(1/(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖</sup><sup>)</sup></font><font style="color: rgb(0,128,0);">))·</font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃</font><font style="color: rgb(122,134,154);"><sub>𝑗</sub></font><font style="color: rgb(122,134,154);">)</font><font style="color: rgb(153,204,0);">ℎ</font><font style="color: rgb(153,204,0);"><sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">(𝑦<sup>(𝑖)</sup>/ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))·</font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(255,0,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> - <font style="color: rgb(0,128,0);">(1-𝑦<sup>(𝑖)</sup>)/(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))·</font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font><strong>\]</strong>
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font>𝑔(𝜽·𝒙)
> 		- ℎ(𝒙) = 𝑔(𝜽·𝒙)
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font>𝑔(𝜽·𝒙)
> 		- 𝑔(𝑧) = 1/\[1 + 𝑒<sup>-𝑧</sup>\]
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = 𝑔(𝑧)' = <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font>\[1 + 𝑒<sup>-𝑧</sup>\]⁻¹
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = 𝑔(𝑧)' = -\[1 + 𝑒<sup>-𝑧</sup>\]⁻² 𝑒<sup>-𝑧</sup>
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = 𝑔(𝑧)' = 𝑒<sup>-𝑧</sup>/\[1 + 𝑒<sup>-𝑧</sup>\]²
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = 𝑔(𝑧)' = 1/\[1 + 𝑒<sup>-𝑧</sup>\] \* 𝑒<sup>-𝑧</sup>/\[1 + 𝑒<sup>-𝑧</sup>\]
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = 𝑔(𝑧)' = 𝑔(𝑧) \* \[1 - 𝑔(𝑧)\]
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> = <font style="color: rgb(0,128,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) \* \[1 - ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup></font><font style="color: rgb(0,128,0);">)\] \* </font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃</font><font style="color: rgb(122,134,154);"><sub>𝑗</sub></font><font style="color: rgb(122,134,154);">)</font><font style="color: rgb(153,204,0);">𝜽·𝒙</font><font style="color: rgb(153,204,0);"><sup>(𝑖)</sup></font>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">(𝑦<sup>(𝑖)</sup>/ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>)) \* ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) \* \[1 - ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\] \* </font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(255,0,0);">𝜽·𝒙<sup>(𝑖)</sup></font> - <font style="color: rgb(0,128,0);">((1-𝑦<sup>(𝑖)</sup>)/(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)) \* ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) \* \[1 - ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\] \*</font> <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">𝜽·𝒙<sup>(𝑖)</sup>)</font><strong>\]</strong>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">\[𝑦<sup>(𝑖)</sup> - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\] \* </font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(255,0,0);">𝜽·𝒙<sup>(𝑖)</sup></font> - <font style="color: rgb(0,128,0);">\[ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\]</font><font style="letter-spacing: 0.0px;color: rgb(0,128,0);"> \* </font><font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);letter-spacing: 0.0px;">𝜽·𝒙<sup>(𝑖)</sup></font><strong>\]</strong>
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">𝜽·𝒙<sup>(𝑖)</sup></font> = <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">𝛴<sub>0≤𝑙≤𝑘</sub>\[𝜃<sub>𝑙</sub>·𝑥<sub>𝑙</sub><sup>(𝑖)</sup>\]</font>
> 	- <font style="color: rgb(122,134,154);">(𝛿/𝛿𝜃<sub>𝑗</sub>)</font><font style="color: rgb(153,204,0);">𝜽·𝒙<sup>(𝑖)</sup></font> = <font style="color: rgb(0,128,0);">𝑥<sub>𝑗</sub><sup>(𝑖)</sup></font>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">\[𝑦<sup>(𝑖)</sup> - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\] \*</font> <font style="color: rgb(128,0,0);">𝑥<sub>𝑗</sub><sup>(𝑖)</sup></font> - <font style="color: rgb(0,128,0);">\[ℎ<sub>𝜃</sub>(𝒙<sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\] \* 𝑥<sub>𝑗</sub><sup>(𝑖)</sup></font><strong>\]</strong>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">\[𝑦<sup>(𝑖)</sup> - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\]</font> - <font style="color: rgb(0,128,0);">\[ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\]</font><strong>\]</strong> \* 𝑥<sub>𝑗</sub><sup>(𝑖)</sup>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">𝑦<sup>(𝑖)</sup> - 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> - <font style="color: rgb(0,128,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) + 𝑦<sup>(𝑖)</sup>ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font><strong>\]</strong> \* 𝑥<sub>𝑗</sub><sup>(𝑖)</sup>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(128,0,0);">𝑦<sup>(𝑖)</sup></font> - <font style="color: rgb(0,128,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font><strong>\]</strong> \* 𝑥<sub>𝑗</sub><sup>(𝑖)</sup>
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = -(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(0,128,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)<font style="color: rgb(51,51,51);"> - </font></font><font style="color: rgb(128,0,0);">𝑦<sup>(𝑖)</sup></font><strong>\]</strong> \* 𝑥<sub>𝑗</sub><sup>(𝑖)</sup> \* (-1)
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)𝐽(𝜽) = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(0,128,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)</font> - <font style="color: rgb(128,0,0);">𝑦<sup>(𝑖)</sup></font><strong>\]</strong> \* 𝑥<sub>𝑗</sub><sup>(𝑖)</sup>

similar to [[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)|gradient descent for linear regression]]
# BLR - Cost Function With Regularization

cost function after regularization of 𝑚 regression coefficients:
- 𝐽(𝜽) = -(1/𝑛)·<strong>\[ </strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)) + (1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))\] + (𝜆/2)·\[𝛴<sub>1≤𝑗≤𝑘</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>\] <strong>\]</strong>

therefore, the original gradient descent update:
- 𝜃<sub>𝑗</sub> ← 𝜃<sub>𝑗</sub> - (𝛼/𝑛) \* <strong>\[</strong> <font style="color: rgb(128,0,0);"><strong>(</strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\]𝑥<sub>𝑗</sub><sup>(𝑖)</sup></font><strong><font style="color: rgb(128,0,0);">)</font> \]</strong>

now becomes:
- 𝜃<sub>𝑗</sub> ← 𝜃<sub>𝑗</sub> - (𝛼/𝑛) \* <strong>\[</strong> <font style="color: rgb(128,0,0);"><strong>(</strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[</font><font style="color: rgb(128,0,0);">ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\]𝑥<sub>𝑗</sub><sup>(𝑖)</sup><strong>)</strong></font> + <font style="color: rgb(0,128,0);"><strong>(</strong>𝜆𝜃<sub>𝑗</sub><strong>)</strong></font> <strong>\]</strong>

# BLR - Hypothesis

given 𝒙 and the optimized values of 𝜽, the assigned output label is defined as (i.e. hypothesis):
- ℎ<sub>𝜽</sub>(𝒙) = 1, if 𝜽<sup>𝑇</sup>𝒙 ≥ 0
- ℎ<sub>𝜽</sub>(𝒙) = 0, otherwise

# Resources
- [Andrew Ng's Coursera](https://www.youtube.com/watch?v=-la3q9d7AKQ&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=32&ab_channel=ArtificialIntelligence-AllinOne)
