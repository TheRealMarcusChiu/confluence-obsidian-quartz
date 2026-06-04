---
title: "Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function"
created: 2021-09-13T05:27:10.825-05:00
modified: 2021-11-02T02:15:59.915-05:00
parent: "[[Stochastic Process - Auto／Cross／Partial Correlation／Covariance]]"
children:
  - "[[Auto／Serial Correlation - Analysis／Test]]"
  - "[[Auto／Serial Correlation as a Symptom of Omitted Variable Bias]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "###### Autocorrelation\nSerial Correlation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "the autocorrelation of a real or complex [[Stochastic／Random／Markov Models／Process|random process]] is the [[Pearson's Correlation Coefficient (R)|Pearson Correlation]] between values of the process at different times, as a function of the 2 times or of the time lag"
    ],
    [
      {
        "content": "Autocovariance\nSerial Covariance",
        "header": true,
        "bg": "#F4F5F7"
      },
      "the autocorrelation of a real or complex [[Stochastic／Random／Markov Models／Process|random process]] is the [[Covariation - Covariance]] between values of the process at different times, as a function of the 2 times or of the time lag"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

<font style="color: rgb(255,0,0);">NOTE: autocovariance is not well-defined for all-time series or processes, because the mean may not exist, or the variance may be zero (for a constant process) or infinite (for processes with distribution lacking well-behaved moments, such as certain types of power-law)</font>
# Auto-Correlation/Covariance - Functions/Formulas
> [!tabs]
>
> === General Stochastic Process
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "###### Autocorrelation",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Autocovariance",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "suppose we have a [[Stochastic／Random／Markov Models／Process|stochastic process]] {𝑋(𝑡), 𝑡∈𝐽} such that for <strong>EACH</strong> 𝑡∈𝐽 we have:\n𝑋(𝑡) a random variable at time 𝑡\n𝜇(𝑡) a mean of random variable 𝑋(𝑡) <font style=\"color: rgb(128,128,128);\">\\# expectation/mean function</font>",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       "the <strong>auto-correlation function</strong> between times 𝑖 and 𝑗 is:\n- 𝑅<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[𝑋(𝑖)·𝑋̅(𝑗)\\]\n\nwhere:\n- 𝑋̅(𝑗) is the complex conjugation",
>       "the <strong>auto-covariance function</strong> between times 𝑖 and 𝑗 is:\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐶𝑜𝑣(𝑋(𝑖),𝑋(𝑗))\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[(𝑋(𝑖)-𝜇(𝑖))(𝑋(𝑗)-𝜇(𝑗))\\]\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[𝑋(𝑖)·𝑋̅(𝑗)\\] - 𝜇(𝑖)·𝜇̅(𝑗)"
>     ],
>     [
>       "the <strong>auto-correlation function</strong> for 𝑖 = 𝑗 is:\n- 𝑅<sub>𝑋𝑋</sub>(𝑖,𝑖) = 𝐄\\[𝑋(𝑖)·𝑋̅(𝑖)\\]\n- 𝑅<sub>𝑋𝑋</sub>(𝑖,𝑖) = 𝐄\\[𝑋(𝑖)<sup>2</sup>\\]",
>       "the <strong>auto-covariance function</strong> for 𝑖 = 𝑗 is:\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑖) = 𝐶𝑜𝑣(𝑋(𝑖),𝑋(𝑖))\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑖) = 𝑉𝑎𝑟(𝑋(𝑖))"
>     ],
>     [
>       {
>         "content": "[ProbabilityCourse Examples](https://www.probabilitycourse.com/chapter10/10_1_2_mean_and_correlation_functions.php)",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
>
> === Wide-Sense Stationary Stochastic Process
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "###### Autocorrelation",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Autocovariance",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "suppose we have a [[Stochastic Process - (Joint／Jointly - Strict-Sense／Strictly／Strong-Sense／Strongly - Trend - Cyclo - Wide／Weak-Sense - Nth-Order) Stationary Process|wide-sense stationary]] (WSS) [[Stochastic／Random／Markov Models／Process|stochastic process]] {𝑋(𝑡), 𝑡∈𝐽} such that for <strong>ALL</strong> 𝑡∈𝐽 we have:\n𝑋(𝑡) has mean 𝜇 <font style=\"color: rgb(128,128,128);\">\\#</font> <font style=\"color: rgb(128,128,128);\">i.e. time-independent mean</font>𝑋(𝑡) has variance 𝜎<sup>2</sup><font style=\"color: rgb(128,128,128);\">\\# time-independent variance</font>",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       "the <strong>auto-correlation function</strong> between times 𝑖 and 𝑗 depends on the time-distance between the pair of values but not on their position in time. in other words 𝑖-𝑗=𝜏:\n- 𝑅<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝑅<sub>𝑋𝑋</sub>(𝑖-𝑗) = 𝑅<sub>𝑋𝑋</sub>(𝜏)\n- 𝑅<sub>𝑋𝑋</sub>(𝜏) = 𝐄\\[𝑋(𝑡)𝑋(𝑡+𝜏)\\] = 𝐄\\[𝑋(𝑡-𝜏)𝑋(𝑡)\\]\n\nwhere:\n- 𝜏 - time lag between 2 points in time\n\nthus 𝑅<sub>𝑋𝑋</sub>must be a function of 𝜏 in order for {𝑋(𝑡), 𝑡∈𝐽} to be a WSS process\n- 𝑅<sub>𝑋𝑋</sub>(-𝜏) = 𝐄\\[𝑋(𝑡)𝑋(𝑡+𝜏)\\]\n- 𝑅<sub>𝑋𝑋</sub>(-𝜏) = 𝐄\\[𝑋(𝑡+𝜏)𝑋(𝑡)\\]\n- 𝑅<sub>𝑋𝑋</sub>(-𝜏) = 𝑅<sub>𝑋𝑋</sub>(𝜏)",
>       "the <strong>auto-covariance function</strong> between times 𝑖 and 𝑗:\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐶<sub>𝑋𝑋</sub>(𝑖-𝑗) = 𝐶<sub>𝑋𝑋</sub>(𝜏)\n- 𝐶<sub>𝑋𝑋</sub>(𝜏) = 𝐄\\[(𝑋(𝑡)-𝜇)(𝑋(𝑡+𝜏)-𝜇)\\] = 𝐄\\[𝑋(𝑡)𝑋(𝑡+𝜏)\\] - 𝜇𝜇\n- 𝐶<sub>𝑋𝑋</sub>(𝜏) = 𝐄\\[(𝑋(𝑡-𝜏)-𝜇)(𝑋(𝑡)-𝜇)\\] = 𝐄\\[𝑋(𝑡-𝜏)𝑋(𝑡)\\] - 𝜇𝜇\n\nthus 𝐶<sub>𝑋𝑋</sub> must be a function of 𝜏 in order for {𝑋(𝑡), 𝑡∈𝐽} to be a WSS process"
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```

# Auto-Correlation/Covariance - Analysis/Tests
- [[Auto／Serial Correlation - Analysis／Test|Auto/Serial Correlation - Analysis/Test]]

# False Auto-Correlation (Auto-Correlation not caused by Population Auto-Correlation)

finding a non-zero Auto-Correlation does not mean it is true population Auto-Correlation, it could mean your model is missing an important input variable. A variable that correlates with one of the model independent variables
- [[Auto／Serial Correlation as a Symptom of Omitted Variable Bias|Auto/Serial Correlation as a Symptom of Omitted Variable Bias]]

# Dealing with Serial Correlation in Least Squares Estimators

serial correlation breaks one of the [[Gauss-Markov Assumptions - OLS Assumptions]] and also causes [[Ordinary Least Squares (OLS)|OLS]] to no longer become the best linear estimator [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|BLUE]]
- [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)]]
