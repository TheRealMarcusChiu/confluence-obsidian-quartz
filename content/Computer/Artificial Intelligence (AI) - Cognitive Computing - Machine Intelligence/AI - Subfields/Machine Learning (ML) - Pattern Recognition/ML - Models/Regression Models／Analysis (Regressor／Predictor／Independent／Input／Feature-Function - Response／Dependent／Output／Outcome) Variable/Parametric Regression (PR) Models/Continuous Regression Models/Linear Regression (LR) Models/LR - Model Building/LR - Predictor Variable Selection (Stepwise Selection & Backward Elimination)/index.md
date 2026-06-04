---
title: "LR - Predictor Variable Selection (Stepwise Selection & Backward Elimination)"
created: 2020-04-24T15:18:10.957-05:00
modified: 2020-11-01T18:58:08.998-06:00
parent: "[[LR - Model Building]]"
children: []
---
read: [[Multivariate／Multiple Linear Regression Models|Multivariate/Multiple Linear Regression Models]]
# <strong>Predictor Variable Selection</strong>

Let us look at two algorithms that are based on the partial F-test

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>stepwise selection</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- starts with an empty model with no predictor variables\n- predictors enter the model sequentially, one by one, starting with the most significant predictor, until all the remaining predictors are not statistically significant"
    ],
    [
      {
        "content": "<strong>backward elimination</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- starts with a full model containing all possible predictor variables\n- predictors are removed from the model sequentially, one by one, starting with the least significant predictor, until all the remaining predictors are statistically significant"
    ]
  ]
}
```
### Stepwise Selection

> [!expand]- Click here to expand...
> The stepwise selection algorithm starts with the simplest regression model that excludes all the predictors:
> - 𝐺(𝒙) = 𝜷<sub>0</sub>
>
> Then, predictors enter the model sequentially, one by one. Every new predictor should make the most significant contribution, among all the predictors that have not been included yet. According to this rule, the first predictor 𝑋<sub>𝑠</sub> to enter the model is the one that has the most significant univariate ANOVA F-statistic
> - 𝐹<sub>1</sub> = 𝑀𝑆<sub>𝑅𝐸𝐺</sub>(𝑋<sub>𝑠</sub>) / 𝑀𝑆<sub>𝐸𝑅𝑅</sub>(𝑋<sub>𝑠</sub>)
>
> All F-tests considered at this step refer to the same F-distribution with 1 and (𝑛−2) d.f. Therefore, the largest F-statistic implies the lowest p-value and the most significant slope 𝜷<sub>𝑠</sub>
>
> the model is now:
> - 𝐺(𝒙) = 𝜷<sub>0</sub>+ 𝜷<sub>𝑠</sub>𝑥<sub>𝑠</sub>
>
> The next predictor 𝑋<sub>𝑡</sub> to be selected is the one that makes the most significant contribution, in addition to 𝑋<sub>𝑠</sub>. Among all the remaining predictors, it should maximize the Partial F-statistic
> - 𝐹<sub>2</sub> = \[ 𝑆𝑆<sub>𝐸𝑅𝑅</sub>(𝑜𝑙𝑑-𝑠𝑚𝑎𝑙𝑙𝑒𝑟-𝑚𝑜𝑑𝑒𝑙) - 𝑆𝑆<sub>𝐸𝑅𝑅</sub>(𝑛𝑒𝑤-𝑙𝑎𝑟𝑔𝑒𝑟-𝑚𝑜𝑑𝑒𝑙) \]/ 𝑀𝑆<sub>𝐸𝑅𝑅</sub>(𝑛𝑒𝑤-𝑙𝑎𝑟𝑔𝑒𝑟-𝑚𝑜𝑑𝑒𝑙)
>
> designed to test significance of the slope 𝜷<sub>𝑡</sub> when the first predictor 𝑋<sub>𝑠</sub> is already included. At this step, we compare the “new model” 𝐺(𝒙) = 𝜷<sub>0</sub>+ 𝜷<sub>𝑠</sub>𝑥<sub>𝑠</sub> + 𝜷<sub>𝑡</sub>𝑥<sub>𝑡</sub> against the “old model” 𝐺(𝒙) = 𝜷<sub>0</sub>+ 𝜷<sub>𝑠</sub>𝑥<sub>𝑠</sub>. Such a Partial F-statistic is also called F-to-enter.
>
> All F-statistics at this step are compared against the same F-distribution with 1 and (𝑛−3) d.f., and again, the largest F-statistic points to the most significant slope 𝜷<sub>𝑡</sub>. If the second predictor is included, the model becomes
> - 𝐺(𝒙) = 𝜷<sub>0</sub>+ 𝜷<sub>𝑠</sub>𝑥<sub>𝑠</sub> + 𝜷<sub>𝑡</sub>𝑥<sub>𝑡</sub>
>
> The algorithm continues until the F-to-enter statistic is not significant for all the remaining predictors, according to a pre-selected significance level 𝛼. The final model will have all predictors significant at this level
### Backward Elimination

> [!expand]- Click here to expand...
> starts with the full model that contains all possible predictors:
> - 𝐺(𝒙) = 𝛽<sub>0</sub>+ 𝛽<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛽<sub>𝑘</sub>𝑥<sub>𝑘</sub>
>
> Predictors are removed from the model sequentially, one by one, starting with the least significant predictor, until all the remaining predictors are statistically significant
>
> The first predictor to be removed is the one that minimizes the F-to-remove statistic:
> - 𝐹<sub>-1</sub> = \[ 𝑆𝑆<sub>𝐸𝑅𝑅</sub>(𝑛𝑒𝑤-𝑠𝑚𝑎𝑙𝑙𝑒𝑟-𝑚𝑜𝑑𝑒𝑙) - 𝑆𝑆<sub>𝐸𝑅𝑅</sub>(𝑜𝑙𝑑-𝑙𝑎𝑟𝑔𝑒𝑟-𝑚𝑜𝑑𝑒𝑙) \]/ 𝑀𝑆<sub>𝐸𝑅𝑅</sub>(𝑜𝑙𝑑-𝑙𝑎𝑟𝑔𝑒𝑟-𝑚𝑜𝑑𝑒𝑙)
>
> the test with the lowest value of 𝐹<sub>-1</sub> has the highest P-value indicating the least significance
>
> Suppose the slope 𝛽<sub>𝑢</sub> is found the least significant. Predictor 𝑋<sub>𝑢</sub> is removed, and the model becomes:
> - 𝐺(𝒙) = 𝛽<sub>0</sub>+ 𝛽<sub>1</sub>𝑥<sub>1</sub> + ... + 𝛽<sub>𝑢-1</sub> + 𝛽<sub>𝑢+1</sub> + ... + 𝛽<sub>𝑘</sub>𝑥<sub>𝑘</sub>
>
> Then we choose the next predictor to be removed by comparing all 𝐹<sub>-2</sub> statistics, then go to 𝐹<sub>-3</sub>, etc. The algorithm stops at the stage when all F-to-remove tests reject the corresponding null hypotheses. It means that in the final resulting model, all the remaining slopes are significant

Both sequential model selection schemes, stepwise and backward elimination, involve fitting at most K models. This requires much less computing power than the [[Adjusted R²／R-Square (Adjusted Coefficient of Determination)|adjusted R2 method]], where all 2<sup>𝑘</sup> models are considered
