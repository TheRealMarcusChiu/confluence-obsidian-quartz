---
title: "Linear／Normal Discriminant／Discriminative Analysis (LDA／NDA)"
created: 2020-08-10T10:56:39.534-05:00
modified: 2021-08-17T21:44:57.530-05:00
parent: "[[Two／Multi-Group Multiple Discriminant／Discriminative Analysis]]"
children: []
---
###### Linear/Normal Discriminant/Discriminative Analysis (LDA/NDA)
- LDA is both a classifier and a dimensionality reduction technique
- LDA is a generalization of <strong>Fisher's Linear Discriminant</strong>, a method used to find a linear combination of [features](https://en.wikipedia.org/wiki/Features_(pattern_recognition)) that separates two or more classes of objects or events. The resulting combination may be used as a [linear classifier](https://en.wikipedia.org/wiki/Linear_classifier), or, more commonly, for [[Feature Dimensional／Dimensionality Reduction|dimensionality reduction]] before later [classification](https://en.wikipedia.org/wiki/Statistical_classification)
- LDA is closely related to [[Analysis of Variance (ANOVA)|Analysis of Variance (ANOVA)]] and [[Regression Models／Analysis (Regressor／Predictor／Independent／Input／Feature-Function - Response／Dependent／Output／Outcome) Variable|regression analysis]], which also attempt to express one dependent variable as a linear combination of other features or measurements. However, ANOVA uses [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|categorical]] independent variables and a [continuous](https://en.wikipedia.org/wiki/Continuous_variable) dependent variable, whereas discriminant analysis has continuous independent variables and a categorical dependent variable (<em>i.e.</em> the class label)
- LDA is also closely related to [[Principal Component Analysis (PCA)|Principal Component Analysis (PCA)]] and [factor analysis](https://en.wikipedia.org/wiki/Factor_analysis) in that they both look for linear combinations of variables which best explain the data:
	- instead of finding axes of most variation like in PCA, LDA focuses on maximizing the separability among the known categories
	- factor analysis builds the feature combinations based on differences rather than similarities
- LDA works when the measurements made on independent variables for each observation are continuous quantities. When dealing with categorical independent variables, the equivalent technique is discriminant correspondence analysis

# LDA - Interpretations

LDA can be interpreted from two perspectives:

> [!expand-ui]- Probabilistic Interpretation -  - useful for understanding the assumptions of LDA
> Each class 𝑦∊𝑌 is assigned a [[Prior Probability Distribution - Posterior Probability Distribution|prior probability]] 𝐏(𝑌=𝑦) such that 𝛴<sub>𝑦∊𝑌</sub>𝐏(𝑌=𝑦) = 1
>
> According to [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Rule]], the posterior probability is:
> - 𝐏(𝑌=𝑦'|𝑋=𝑥') = 𝐏(𝑋=𝑥'|𝑌=𝑦')𝐏(𝑌=𝑦') / 𝛴<sub>𝑦∊𝑌</sub>\[𝐏(𝑋=𝑥'|𝑌=𝑦)𝐏(𝑌=𝑦)\]
>
> The [[Maximum a Posteriori (MAP)]] estimator simplifies to:
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑌=𝑦'|𝑋=𝑥')
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑋=𝑥'|𝑌=𝑦')𝐏(𝑌=𝑦') / 𝛴<sub>𝑦∊𝑌</sub>\[𝐏(𝑋=𝑥'|𝑌=𝑦)𝐏(𝑌=𝑦)\]
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑋=𝑥'|𝑌=𝑦')𝐏(𝑌=𝑦')
>
> LDA <strong>assumes</strong> that the density is Gaussian:
> - 𝐏(𝑋=𝑥'|𝑌=𝑦') = |2𝜋𝛴<sub>𝑦'</sub>|<sup>-(1/2)</sup>・𝑒𝑥𝑝\[ -(1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sub>𝑦'</sub><sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>) \]
>
> where:
> - 𝛴<sub>𝑦'</sub>is the [[Covariance & Correlation Matrix|covariance matrix]] of the samples with class 𝑌=𝑦'
> - 𝜇<sub>𝑦'</sub> is the mean of the samples with class 𝑌=𝑦'
> - || is the [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinant]]
>
> LDA <strong>assumes</strong> that all classes 𝑦∊𝑌 have the same covariance matrix:
> - 𝛴<sub>𝑦</sub>= 𝛴, ∀𝑦∊𝑌
>
> Thus:
> - 𝐏(𝑋=𝑥'|𝑌=𝑦') = |2𝜋𝛴|<sup>-(1/2)</sup>・𝑒𝑥𝑝\[ -(1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>) \]
>
> Now substitute back to the MAP estimator:
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑋=𝑥'|𝑌=𝑦')𝐏(𝑌=𝑦')
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑌=𝑦')・𝐏(𝑋=𝑥'|𝑌=𝑦')
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑌=𝑦')・<font style="color: rgb(255,0,0);">|2𝜋𝛴|<sup>-(1/2)</sup></font>・𝑒𝑥𝑝\[ -(1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>) \]
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝐏(𝑌=𝑦')・𝑒𝑥𝑝\[ -(1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>) \] <font style="color: rgb(128,128,128);">\# removed constants</font>
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝑙𝑜𝑔<strong> \[</strong> 𝐏(𝑌=𝑦')・𝑒𝑥𝑝\[ -(1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>) \] <strong>\]</strong>
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝑙𝑜𝑔<strong> \[</strong> 𝐏(𝑌=𝑦') <strong>\]</strong> - (1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>)
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝑙𝑜𝑔<strong> \[</strong> 𝐏(𝑌=𝑦') <strong>\]</strong> - (1/2)(𝑥-𝜇<sub>𝑦'</sub>)<sup>𝑇</sup>·𝛴<sup>-1</sup>·(𝑥-𝜇<sub>𝑦'</sub>)
> - ...
> - 𝑓<sub>𝑦ˆ</sub>(𝑥) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑦'</sub> 𝑙𝑜𝑔<strong> \[</strong> 𝐏(𝑌=𝑦') <strong>\]</strong> + 𝑥<sup>𝑇</sup>𝛴<sup>-1</sup>𝜇<sub>𝑦'</sub> - (1/2)𝜇<sub>𝑦'</sub><sup>𝑇</sup>𝛴<sup>-1</sup>𝜇<sub>𝑦'</sub>
>
> To estimate the covariance matrix 𝛴:
> - 𝛴ˆ = 𝛴<sub>𝑦∊𝑌</sub> 1/(𝑁-𝐾) 𝛴<sub>𝑦∊𝑌</sub> 1
>
> NOTE: the deviation from the means is divided by 𝑁-𝐾, the degrees of freedom, to obtain an unbiased estimator
>
> To estimate the means of the classes 𝜇<sub>𝑦'</sub>(aka centroids):
> - 𝜇<sub>𝑦'</sub>ˆ = 1/𝑁<sub>𝑦'</sub>・𝛴<sub>𝑥∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑤𝑖𝑡ℎ-𝑦'</sub>\[𝑥\]
>
> where:
> - 𝑁<sub>𝑦'</sub> - total number of observed samples with 𝑦'
>
> The priors 𝐏(𝑌=𝑦') are set to the prevalence ratio of the class-specific observations:
> - 𝐏ˆ(𝑌=𝑦') = 𝑁<sub>𝑦'</sub>/𝑁
>
> where:
> - 𝑁 - total number of observed samples
>
> With this, we have defined all parameters required for the classifier.
>
> The dimensionality reduction procedure of LDA involves both:
> - the within-class variance, 𝑊 = 𝛴ˆ
> - the between-class variance 𝐵
>
> The between-class variance indicates the deviation of centroids from the overall mean, 𝜇ˆ = 𝛴<sub>𝑦∊𝑌</sub> \[ 𝐏ˆ(𝑌=𝑦')・𝜇<sub>𝑦'</sub>ˆ \], and is defined as:
> - 𝐵 = 𝛴<sub>𝑦∊𝑌</sub> \[ 𝐏ˆ(𝑌=𝑦')・(𝜇<sub>𝑦'</sub>ˆ - 𝜇ˆ) (𝜇<sub>𝑦'</sub>ˆ - 𝜇ˆ)<sup>𝑇</sup> \]
>
> Finding a sequence of optimal substeps involves 3 steps:
> 1. compute the matrix 𝑀 containing the centroids 𝜇<sub>𝑦'</sub> and determine the common covariance matrix 𝑊
> 2. compute 𝑀\* = 𝑀𝑊<sup>-(1/2)</sup> using the [[Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix|eigen-decomposition]] of 𝑊
> 3. compute 𝐵\* (the between-class covariance) and its eigen-decomposition 𝐵\* = 𝑉\*𝐷<sub>𝐵</sub>𝑉\*<sup>𝑇</sup>. The columns 𝑣<sub>𝑖</sub>\* of 𝑉\* define the coordinates of the reduced subspace
>
> The 𝑖<sup>th</sup> discriminant variable is determined by 𝑍<sub>𝑖</sub> = 𝑣<sub>𝑖</sub><sup>𝑇</sup>𝑋 with 𝑣<sub>𝑖</sub> = 𝑊<sup>-(1/2)</sup>𝑣<sub>𝑖</sub>\*

> [!expand-ui]- Linear-Algebra Interpretation (due to Fisher) - useful for understanding how LDA performs dimensionality reduction
> TODO: [https://www.datascienceblog.net/post/machine-learning/linear-discriminant-analysis/](https://www.datascienceblog.net/post/machine-learning/linear-discriminant-analysis/)

TODO
# LDA - Subpages
- [[Logistic Regression (LR) vs Linear Discriminant Analysis (LDA)]]
- [[Linear Discriminant Analysis (LDA) vs Quadratic Discriminant Analysis (QDA)]]

# LDA - Resources
- [https://www.datascienceblog.net/post/machine-learning/linear-discriminant-analysis/](https://www.datascienceblog.net/post/machine-learning/linear-discriminant-analysis/)
- [http://uc-r.github.io/discriminant_analysis](http://uc-r.github.io/discriminant_analysis)

![](https://www.youtube.com/watch?v=azXCzI57Yfc)
