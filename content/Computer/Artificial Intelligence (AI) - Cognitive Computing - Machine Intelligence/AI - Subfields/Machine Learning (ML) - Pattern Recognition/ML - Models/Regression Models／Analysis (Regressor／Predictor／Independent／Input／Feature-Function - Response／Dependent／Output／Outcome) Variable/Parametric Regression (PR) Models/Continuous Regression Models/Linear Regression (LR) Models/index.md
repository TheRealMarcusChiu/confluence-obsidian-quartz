---
title: "Linear Regression (LR) Models"
created: 2020-09-30T20:26:33.855-05:00
modified: 2024-02-21T11:32:35.635-06:00
parent: "[[Continuous Regression Models]]"
children:
  - "[[Bayesian Linear Regression]]"
  - "[[Cook's Distance]]"
  - "[[Elastic Net Regression (Ridge & LASSO)]]"
  - "[[LASSO Regression (Least Absolute Shrinkage and Selection Operator)]]"
  - "[[LR - ANOVA Table]]"
  - "[[LR - Categorical Predictor Variables]]"
  - "[[LR - Methods Estimating Unknown Regression Coefficients]]"
  - "[[LR - Model Building]]"
  - "[[LR - Problems]]"
  - "[[LR - R Code Examples]]"
  - "[[LR - Standard Regression Assumptions]]"
  - "[[LR - Tests - Derivation of F-Statistic]]"
  - "[[LR - Tests - Derivation of Student T-Statistic]]"
  - "[[Linear Regression (LR) Models - Comparisons]]"
  - "[[Mallow's Cp Statistic]]"
  - "[[Multivariate／Multiple Linear Regression Models]]"
  - "[[Ordinary Least Squares (OLS) Regression]]"
  - "[[Ridge Regression]]"
  - "[[Univariate／Single-Variable／Simple Linear Regression Models]]"
---
###### Linear Regression (LR) Models
````excerpt
- is a type of [[Continuous Regression Models|continuous regression model]] whose function/estimator is linear with respect to the regression coefficients {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑝</sub>}:
- 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝒙) + ... + 𝜃<sub>𝑝</sub>𝑓<sub>𝑝</sub>(𝒙)
- models the relationship between:
	- 𝑌 - a single scalar response/dependent variable (for categorical use [[Logistic (Logit) Regression Model|logistic regression]])
	- {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>} - one or more regressors or explanatory/predictor/covariate/independent variables. predictor variable types:
		- continuous/scalar/numerical predictor
		- [[LR - Categorical Predictor Variables|discrete/categorical predictor]] - itself can be either [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal or ordinal]]
- models [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean/expected]] response as a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]]/conditional of regressors (where 𝑓<sub>𝑖</sub>(..) are [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature functions]])
	- 𝐄\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>\] = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑦̂ = <font style="color: rgb(153,204,0);">𝜃</font><sub><font style="color: rgb(153,204,0);">0</font></sub><font style="color: rgb(0,128,0);">+ 𝜃<sub>1</sub>𝑓<sub>1</sub></font><font style="color: rgb(0,128,0);">(𝑥</font><font style="color: rgb(0,128,0);"><sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) + ... + 𝜃<sub>𝑝</sub></font><font style="color: rgb(0,128,0);">𝑓<sub>𝑝</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)</font>
	- coefficient 𝜃<sub><font style="color: rgb(153,204,0);"><font style="color: rgb(51,51,51);">0</font> </font></sub><font style="color: rgb(0,51,102);">represents the</font>𝑦 intercept when all feature functions 𝑓<sub>𝑖</sub>(..) equate to 0
	- coefficient 𝜃<sub>𝑖</sub><font style="color: rgb(0,51,102);"> represents the mean change in the dependent variable </font>𝑦<font style="color: rgb(0,51,102);"> given a 1 unit change in the independent feature function </font>𝑓<sub>𝑖</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) <font style="color: rgb(128,128,128);">\# for 1≤𝑖≤𝑝</font>
- is a type of [[(Level／Linear／Log-Level／Linear／Log) Regression Model|level-level model]]<font style="color: rgb(128,128,128);">(or even a</font>[[(Level／Linear／Log-Level／Linear／Log) Regression Model|level-log model]]<font style="color: rgb(128,128,128);"> when 𝑓<sub>𝑖</sub>(..) are log functions)</font>
- the <font style="color: rgb(51,102,255);">dependent variable 𝑦</font><font style="color: rgb(0,51,102);"> is the combination of the regression model and </font><font style="color: rgb(128,0,0);">error</font>
	- <font style="color: rgb(51,102,255);">𝑦</font> = <font style="color: rgb(0,128,0);">𝑦̂</font> + <font style="color: rgb(128,0,0);">𝑒</font>
	- <font style="color: rgb(51,102,255);">dependent variable</font> = <font style="color: rgb(0,128,0);">(</font><font style="color: rgb(0,128,0);"><font style="color: rgb(153,204,0);">constant</font> + independent variables)</font> + <font style="color: rgb(128,0,0);">error</font>
	- <font style="color: rgb(51,102,255);">dependent variable</font> = <font style="color: rgb(0,128,0);">deterministic</font> + <font style="color: rgb(128,0,0);">stochastic</font>
	- <font style="color: rgb(0,128,0);">deterministic</font> component is the portion of the variation in the dependent variable that the independent variables explain. In other words, the mean of the dependent variable is a function of the independent variables. In a regression model, all of the explanatory power should reside here
	- <font style="color: rgb(128,0,0);">error</font> is the difference between the expected value 𝑦̂ and the observed value 𝑦. Let’s put these terms together—the gap between the expected and observed values must not be predictable. Or, no explanatory power should be in the error. If you can use the error to make predictions about the response, your model has a problem. This issue is where [[Residual Plot - Partial Residual Plot|residual plots]] play a role.
	- the theory here is that the deterministic component of a regression model does such a great job of explaining the dependent variable that it leaves only the intrinsically inexplicable portion of your study area for the error. If you can identify non-randomness in the error term, your independent variables are not explaining everything that they can
````
^excerpt

# LR - Steps
given sample/training data:
- (𝑦<sub>1</sub>, 𝑥<sub>11</sub>, ..., 𝑥<sub>1𝑘</sub>) <font style="color: rgb(128,128,128);">\# sample 1</font>
- (𝑦<sub>2</sub>, 𝑥<sub>21</sub>, ..., 𝑥<sub>2𝑘</sub>)<font style="color: rgb(128,128,128);"> \# sample 2</font>
- ...
- (𝑦<sub>𝑛</sub>, 𝑥<sub>𝑛1</sub>, ..., 𝑥<sub>𝑛𝑘</sub>)<font style="color: rgb(128,128,128);"> \# sample 𝑛</font>

the task of Linear Regression:
- choose line equation form, such as:
	- 𝐄\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>\] = 𝑦̂ = ℎ(𝑥<sub>1</sub>) = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub><font style="color: rgb(128,128,128);">\# univariate linear regression</font>
	- 𝐄\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, 𝑋<sub>2</sub>=𝑥<sub>2</sub>\] = 𝑦̂ = ℎ(𝑥<sub>1</sub>,𝑥<sub>2</sub>) = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + 𝜃<sub>2</sub>𝑥<sub>2</sub><font style="color: rgb(128,128,128);">\# multivariate linear regression</font>
	- 𝐄\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, 𝑋<sub>2</sub>=𝑥<sub>2</sub>\] = 𝑦̂ = ℎ(𝑥<sub>1</sub>,𝑥<sub>2</sub>) = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub>𝑥<sub>2</sub>+ 𝜃<sub>2</sub>𝑥<sub>1</sub><sup>2</sup> + 𝜃<sub>3</sub>𝑥<sub>2</sub><font style="color: rgb(128,128,128);">\# multiple linear regression</font>
- where:
	- 𝐄\[𝑌|..\] and 𝑦̂ and ℎ(..) - scalar response/dependent variable or hypothesis function conditional on 𝑥<sub>𝑖</sub>'s
	- 𝑥<sub>𝑖</sub> - regressors or explanatory/predictor/covariate/independent variables
	- 𝜃<sub>𝑖</sub> - regression coefficients/weights
- estimate/find the values of the regression coefficients 𝜃<sub>𝑖</sub>which best fit the line equation to the data
- determine whether its a [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|goodfit]]

# LR - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "LR Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Model Form",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Models",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Univariate／Single-Variable／Simple Linear Regression Models|Univariate Linear Regression]]",
        "bg": "#F4F5F7"
      },
      "𝐄\\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>\\] = ℎ(𝑥<sub>1</sub>) = 𝑦̂ = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>)",
      "- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub>\n- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub><sup>2</sup>"
    ],
    [
      {
        "content": "[[Multivariate／Multiple Linear Regression Models|Multivariate Linear Regression]]",
        "bg": "#F4F5F7"
      },
      "𝐄\\[𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>\\] = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑦̂ =:\n- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>) + ... + 𝜃<sub>𝑘</sub>𝑓<sub>𝑘</sub>(𝑥<sub>𝑘</sub>)\n- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) + ... + 𝜃<sub>𝑘</sub>𝑓<sub>𝑘</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)",
      "- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>\n- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub><sup>3</sup> + ... + 𝜃<sub>𝑘</sub>𝑠𝑖𝑛(𝑥<sub>𝑘</sub>)\n- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub>𝑥<sub>3</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>4</sub><sup>6</sup>𝑥<sub>𝑘</sub>\n- 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub>𝑥<sub>𝑘-2</sub>𝑥<sub>𝑘</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>"
    ]
  ]
}
```
# LR - Methods for Estimating Coefficients (𝜃<sub>𝑖</sub>)

![[LR - Methods Estimating Unknown Regression Coefficients#^excerpt]]
# LR - Model Types
````excerpt
[[Linear Regression (LR) Models|Linear Regression Models]] - takes an input vector 𝑥∊ℝ<sup>𝑛</sup> as input and predicts the value of a <strong>scalar </strong>𝑦∊ℝ as output (whose function/estimator is linear wrt the regression coefficients {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑝</sub>})

```merge-table
{
  "rows": [
    [
      {
        "content": "Linear Model Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Ordinary Least Squares (OLS) Regression|Ordinary Least Squares Regression]]",
        "bg": "#F4F5F7"
      },
      "- has several weaknesses, including sensitivity to both outliers and multicollinearity and it is prone to overfitting"
    ],
    [
      {
        "content": "[Stepwise Regression\nBest Subsets Regression](https://statisticsbyjim.com/regression/guide-stepwise-best-subsets-regression/)",
        "bg": "#F4F5F7"
      },
      "- these automated methods can help identify candidate regressors early in the [model specification process](https://statisticsbyjim.com/regression/model-specification-variable-selection/)"
    ],
    [
      {
        "content": "[Robust Regression](http://r-statistics.co/Robust-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- applicable in all cases where [[Ordinary Least Squares (OLS)]] Regression can be used\n- applies re-weighting to reduce outlier influence"
    ],
    [
      {
        "content": "[[Ridge Regression]]",
        "bg": "#F4F5F7"
      },
      "- address multicollinearity\n- allows you to analyze data even when severe multicollinearity is present and helps prevent overfitting. This type of model reduces the large, problematic variance that multicollinearity causes by introducing a slight bias in the estimates. The procedure trades away much of the variance in exchange for a little bias, which produces more useful coefficient estimates when multicollinearity is present"
    ],
    [
      {
        "content": "[[LASSO Regression (Least Absolute Shrinkage and Selection Operator)|Lasso Regression]]\n[[LASSO Regression (Least Absolute Shrinkage and Selection Operator)|(Least Absolute Shrinkage and Selection Operator)]]",
        "bg": "#F4F5F7"
      },
      "- performs variable selection that aims to increase prediction accuracy by identifying a simpler model. It is similar to Ridge regression but with variable selection"
    ],
    [
      {
        "content": "[[Elastic Net Regression (Ridge & LASSO)|Elastic Net Regression]]",
        "bg": "#F4F5F7"
      },
      "- is a combination of regularizers Ridge regression and LASSO regression"
    ],
    [
      {
        "content": "Partial Least Squares (PLS) Regression",
        "bg": "#F4F5F7"
      },
      "- is useful when you have very few observations compared to the number of independent variables or when your independent variables are highly correlated. PLS decreases the independent variables down to a smaller number of uncorrelated components, similar to [[Principal Component Analysis (PCA)|Principal Component Analysis]]. Then, the procedure performs linear regression on these components rather than the original data. PLS emphasizes developing predictive models and is not used for screening variables. Unlike OLS, you can include multiple continuous dependent variables. PLS uses the correlation structure to identify smaller effects and model multivariate patterns in the dependent variables"
    ],
    [
      {
        "content": "[Beta Regression](http://r-statistics.co/Beta-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- models variables within (0, 1) range"
    ],
    [
      {
        "content": "[Dirichlet Regression](http://r-statistics.co/Dirichlet-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- models compositional data"
    ],
    [
      {
        "content": "[Loess Regression](http://r-statistics.co/Loess-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- smoothing time series"
    ],
    [
      {
        "content": "[Isotonic Regression](http://r-statistics.co/Isotonic-Regression-With-R.html)",
        "bg": "#F4F5F7"
      },
      "- for approximation of data that can only increase (typically cumulative data)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt

# LR - Methods for Determining How Well The Fitted Line Describes the Data
- [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|Model - Performance/Accuracy/Evaluation/Goodness-of-Fit Measures/Metrics/Analysis]]

# LR - Methods for Diagnosing Bias Variance
- [[ML - Diagnosing Model Bias／Underfit vs Variance／Overfit - Linear Regression|ML - Diagnosing Model Bias/Underfit vs Variance/Overfit - Linear Regression]]
- [[LR - Model Building]]

# LR - Subpages
- [[Linear Regression vs Gaussian Regression]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
# LR - Resources
- [Zed Statistics Regression Playlist](https://www.youtube.com/watch?v=aq8VU5KLmkY&list=PLTNMv857s9WUI1Nz4SssXDKAELESXz-bi)
- StatQuest Linear Models: [Part 1](https://www.youtube.com/watch?v=nk2CQITm_eo) & [Part 2](https://www.youtube.com/watch?v=NF5_btOaCig)
