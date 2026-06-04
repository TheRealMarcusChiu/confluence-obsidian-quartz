---
title: "Multinomial／N-nary Logistic Regression (MLR)"
created: 2020-06-02T00:26:32.209-05:00
modified: 2023-07-13T19:28:25.024-05:00
parent: "[[Logistic (Logit) Regression Model]]"
children: []
---
###### Multinomial/N-nary Logistic Regression (MLR)
- generalizes [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]] whose dependent variable is a multi-class [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]]

# One-vs-All Algorithm

Given 𝑦 ∊ {0, 1, ... , 𝑐} we divide our problem to 𝑐 [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]] problems

Each one we predict the probability that 𝑦 is a member of one of our classes
- 𝑦 ∊ {0, 1, ..., 𝑐}
- 𝒚 - output class values unit vector <font style="color: rgb(128,128,128);">(e.g. when 𝑐=3 then 𝒚<sub>𝑖</sub>∊ {\[1,0,0\]<sup>𝑇</sup>, \[0,1,0\]<sup>𝑇</sup>, \[0,0,1\]<sup>𝑇</sup></font><font style="color: rgb(128,128,128);">})</font>
- 𝒙 - input attribute values vector (i.e. 𝒙 = \[𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>\])
- 𝜽 - weight/parameter vector (i.e. 𝜽 = \[𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>\])

given 𝑛 sample/training data:
- (𝒚<sup>(1)</sup>, 𝒙<sup>(1)</sup>) = (𝒚<sup>(1)</sup>, 𝑥<sub>1</sub><sup>(1)</sup>, <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑥<sub>2</sub><sup>(1)</sup>, </font></font>..., 𝑥<sub>𝑘</sub><sup>(1)</sup>) <font style="color: rgb(128,128,128);">\# sample 1</font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">(𝒚<sup>(2)</sup>, 𝒙<sup>(2)</sup>) = (??<sup>(2)</sup>, 𝑥<sub>1</sub><sup>(2)</sup>, 𝑥<sub>2</sub><sup>(2)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(2)</sup>)</font> \# sample 2</font>
- ...
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">(𝒚<sup>(𝑛)</sup>, 𝒙<sup>(𝑛)</sup>) = (𝒚<sup>(𝑛)</sup>, 𝑥<sub>1</sub><sup>(𝑛)</sup>, 𝑥<sub>2</sub><sup>(𝑛)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑛)</sup>)</font> \# sample 𝑛</font>

ℎ<sub>𝜽</sub>(𝒙) outputs a 𝑐-dimensional vector where each entry is a scalar value between 0 and 1 inclusive <font style="color: rgb(128,128,128);">(e.g. </font><font style="color: rgb(128,128,128);">when 𝑐</font><font style="color: rgb(128,128,128);">=3 then \[0.99,0.02,0.45\]<sup>𝑇</sup>is a possible output)</font>

Compute each hypothesis:
- ℎ<sub>𝜽</sub>(𝒙)\[0\] = 𝐏(𝑌=0|𝒙;𝜽)
- ℎ<sub>𝜽</sub>(𝒙)\[1\] = 𝐏(𝑌=1|𝒙;𝜽)
- ...
- ℎ<sub>𝜽</sub>(𝒙)\[𝑐\] = 𝐏(𝑌=𝑐|𝒙;𝜽)

𝑦 = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑖</sub> ℎ<sub>𝜽</sub>(𝒙)\[𝑖\]
# MLR - Cost Function

![[Multinomial／N-nary Logistic Regression (MLR)/multinomial-logistic-regression.png|301]]

> [!expand]- Click here to expand...
> the cost function of a neural network would be a <strong>generalization</strong> of the cost function used for a [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]]
> ###### Binomial Logistic Regression's Cost Function
> - 𝐽(𝜽) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(255,102,0);">(𝒚<sup>(𝑖)</sup>)·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(153,204,0);">(1-𝒚<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font>\]<strong>\]</strong>
>
> ###### Multinomial Logistic Regression's Cost Function
> - 𝐽(𝜽) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>𝛴<sub>1≤𝑗≤𝑐</sub>\[<font style="color: rgb(255,102,0);">(𝒚<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font> + <font style="color: rgb(153,204,0);">(1-𝒚<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font>\]<strong>\]</strong>\]
>
> where:
> - 𝒚\[𝑗\] - is the 𝑗<sup>𝑡ℎ</sup> entry of the vector
> - ℎ<sub>𝜽</sub>(𝒙)\[𝑗\] - is the 𝑗<sup>𝑡ℎ</sup> entry of the vector
# MLR - Cost Function With Regularization

> [!expand]- Click here to expand...
> ###### Binomial Logistic Regression's Cost Function <font style="color: rgb(128,128,128);">with regularization of 𝜃s</font>
> - 𝐽(𝜽) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong><font style="color: rgb(255,102,0);">(𝒚<sup>(𝑖)</sup>)·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font> + <font style="color: rgb(153,204,0);">(1-𝒚<sup>(𝑖)</sup>)·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>))</font>\]<strong>\]</strong> <font style="color: rgb(128,128,128);letter-spacing: 0.0px;">+ (𝜆/2𝑛)·\[𝛴<sub>1≤𝑖≤𝑘</sub>(𝜃<sub>𝑖</sub>)<sup>2</sup>\]</font>
>
> ###### Multinomial Logistic Regression's Cost Function <font style="color: rgb(128,128,128);">with regularization of 𝜃s</font>
> - 𝐽(𝜽) = -(1/𝑚)·\[𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>𝛴<sub>1≤𝑗≤𝑐</sub>\[<font style="color: rgb(255,102,0);">(𝒚<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font> + <font style="color: rgb(153,204,0);">(1-𝒚<sup>(𝑖)</sup>\[𝑗\])·𝑙𝑜𝑔(1-ℎ<sub>𝜽</sub>(𝒙<sup>(𝑖)</sup>)\[𝑗\])</font>\]<strong>\]</strong>\]<font style="color: rgb(122,134,154);"> + </font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">(𝜆/2</font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">𝑛</font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">)</font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">·\[𝛴<sub>1≤𝑖≤𝑘</sub></font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">𝛴<sub>1≤𝑗≤𝑐</sub></font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">(𝜽\[𝑖,𝑗\])</font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;"><sup>2</sup></font><font style="color: rgb(128,128,128);letter-spacing: 0.0px;">\]</font>
>
> where:
> - 𝜽\[𝑖,𝑗\] - the coefficient 𝜃 connecting (input 𝒙<sub>𝑖</sub>) to (𝑗<sup>𝑡ℎ</sup> [[Binomial／Binary Logistic Regression (BLR)|binomial logistic regression]] unit)
# MLR - Learning 𝜃s With [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent]]

to minimize cost function 𝐽(𝜽), we take its partial derivative with respect to each 𝜃<sub>𝑗</sub>:
- TODO

# Resources
- [Andrew Ng's Video Lecture](https://www.coursera.org/lecture/machine-learning/multiclass-classification-one-vs-all-68Pol)
