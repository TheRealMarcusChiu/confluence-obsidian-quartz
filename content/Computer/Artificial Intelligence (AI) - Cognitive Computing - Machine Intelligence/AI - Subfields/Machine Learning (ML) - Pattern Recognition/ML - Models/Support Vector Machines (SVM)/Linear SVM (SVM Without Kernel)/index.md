---
title: "Linear SVM (SVM Without Kernel)"
created: 2020-08-16T22:31:50.837-05:00
modified: 2023-12-24T14:48:13.828-06:00
parent: "[[Support Vector Machines (SVM)]]"
children: []
---
###### Linear SVM (SVM Without Kernel)
````excerpt
- [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|capacity]] limited to only [[ML - Linear Models vs Non-Linear Models|linear models]] (for [[ML - Linear Models vs Non-Linear Models|non-linear models]] see [[Non-Linear SVM (SVM With Kernels)|Non-Linear SVM]])
- like [[Logistic (Logit) Regression Model|logistic regression]] in that it is driven by a linear function 𝜽<sup>𝑇</sup>𝒙
- unlike logistic regression in that it does not provide probabilities, only outputs a class identity
````
^excerpt

# Linear SVM - Representation

same as [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]]
- 𝒙 - input attribute values vector (i.e. 𝒙 = \[𝑥<sub>0</sub>, ..., 𝑥<sub>𝑘</sub>\]) <font style="color: rgb(128,128,128);">\# 𝑥<sub>0</sub>is the bias</font>
- 𝜽 - weight/parameter vector (i.e. 𝜽 = \[𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>\])
- 𝑦 - binary output value

# Linear SVM - Cost Function With Regularization

here is the [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]]'s regularized cost function:
- 𝐽(𝜽) = -(1/𝑛)·<strong>\[ </strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)) + (1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))\] + (𝜆/2)·\[𝛴<sub>1≤𝑗≤𝑘</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>\] <strong>\]</strong>

let's represent it differently:
- 𝐽(𝜽) = <font style="color: rgb(255,0,0);">-</font>(1/𝑛)·<strong>\[ </strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)) + (1-𝑦<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))\] + (𝜆/2)·\[𝛴<sub>1≤𝑗≤𝑘</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>\] <strong>\]</strong>
- 𝐽(𝜽) = (1/𝑛)·<strong>\[ </strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·<font style="color: rgb(255,0,0);">-𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> + (1-𝑦<sup>(𝑖)</sup>)·<font style="color: rgb(255,0,0);">-𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font>\] + (𝜆/2)·\[𝛴<sub>1≤𝑗≤𝑘</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>\] <strong>\]</strong>
- 𝐽(𝜽) = (1/𝑛)·<strong>\[ </strong>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·<font style="color: rgb(255,0,0);">𝑐𝑜𝑠𝑡<sub>1</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)</font> + (1-𝑦<sup>(𝑖)</sup>)·<font style="color: rgb(255,0,0);">𝑐𝑜𝑠𝑡<sub>0</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)</font>\] + (𝜆/2)·\[𝛴<sub>1≤𝑗≤𝑘</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>\] <strong>\]</strong>
- 𝐽(𝜽) = <strong>\[ </strong><font style="color: rgb(128,128,128);">𝐶</font>·𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·<font style="color: rgb(255,0,0);">𝑐𝑜𝑠𝑡<sub>1</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)</font> + (1-𝑦<sup>(𝑖)</sup>)·<font style="color: rgb(255,0,0);">𝑐𝑜𝑠𝑡<sub>0</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)</font>\] + (1/2)·\[𝛴<sub>1≤𝑗≤𝑘</sub>(𝜃<sub>𝑗</sub>)<sup>2</sup>\] <strong>\] </strong><font style="color: rgb(128,128,128);">\# 𝐶 = (1/𝜆) and remove constant (1/𝑛)</font>
- 𝐽(𝜽) = <strong>\[ </strong><font style="color: rgb(128,128,128);">𝐶</font>·𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑦<sup>(𝑖)</sup>·<font style="color: rgb(255,0,0);">𝑐𝑜𝑠𝑡<sub>1</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)</font> + (1-𝑦<sup>(𝑖)</sup>)·<font style="color: rgb(255,0,0);">𝑐𝑜𝑠𝑡<sub>0</sub>(𝜽<sup>𝑇</sup>𝒙<sup>(𝑖)</sup>)</font>\] + (1/2)·(𝜽<sup>𝑇</sup>𝜽) <strong>\]</strong>

where:
- 𝐶 - [[Regularization - Parameter Weight Decay|regularization parameter]]
	- large 𝐶: high variance & low bias <font style="color: rgb(128,128,128);">\# when VERY large it behaves like [[Support Vector Machines (SVM)|Hard-Margin Classifier]]</font>
	- small 𝐶: low variance & high bias <font style="color: rgb(128,128,128);">\# when small it behaves like </font>[[Support Vector Machines (SVM)|Soft-Margin Classifier]]

# Linear SVM - Learning 𝜽s

goal: optimize values of 𝜽 wrt cost function 𝐽(𝜽)
# Linear SVM - Hypothesis

given 𝒙 and the optimized values of 𝜽, the assigned output value is defined as (i.e. hypothesis):
- ℎ<sub>𝜽</sub>(𝒙) = 1, if 𝜽<sup>𝑇</sup>𝒙 ≥ 0
- ℎ<sub>𝜽</sub>(𝒙) = 0, otherwise
