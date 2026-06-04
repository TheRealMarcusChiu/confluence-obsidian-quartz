---
title: "Bivariate／Multivariate Analysis Descriptive Statistics"
created: 2021-09-13T05:28:41.671-05:00
modified: 2021-11-12T02:34:11.045-06:00
parent: "[[Variate Analysis]]"
children:
  - "[[Adjusted R²／R-Square (Adjusted Coefficient of Determination)]]"
  - "[[Cokurtosis]]"
  - "[[Correlation]]"
  - "[[Coskewness]]"
  - "[[Covariance - Covariation]]"
  - "[[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square]]"
---
````excerpt
<strong>Bivariate Analysis</strong> is the simultaneous [[Variate Analysis|variate analysis]] of two variables (attributes). The main reason for differentiating univariate and bivariate analysis is that bivariate analysis is not only a simple descriptive analysis but also it describes the relationship between two different variables. It explores the concept of the relationship between two variables, whether there exists an association and the strength of this association, or whether there are differences between two variables and the significance of these differences. If the data seems to fit a line or curve then there is a relationship or correlation between the two variables

<strong>Multivariate Analysis</strong> is a [variate analysis](http://confluence.marcuschiu.com/display/NOT/Variate+Analysis) on 2 or more variables
````
^excerpt

# Statistics Terminology

![[Statistics - Terminology#^excerpt]]
# Bivariate Descriptive Statistics - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Bivariate Relation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Population Parameter",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Sample Statistic",
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
        "content": "[[Covariance - Covariation|Covariation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝜎<sub>𝑥𝑦</sub><sup>2</sup>",
      "𝜎̂<sub>𝑥𝑦</sub><sup>2</sup>or 𝑠<sub>𝑥𝑦</sub><sup>2</sup>",
      "- used to classify 3 types of relationships:\n\t- positive trends\n\t- negative trends\n\t- no relationship\n- sensitive to the scale of the data"
    ],
    [
      {
        "content": "[[Correlation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝜌",
      "𝜌̂ or 𝑟",
      "- correlation describes relationships and is not sensitive to the scale of the data\n- correlation value ranges from -1 to 1\n- correlation is strongest at -1 and 1\n- correlation is weakest at 0"
    ],
    [
      {
        "content": "[[R² - R-Squared - Coefficient of Determination - Coefficient of Multiple Determination - Multiple R-Square|R2]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝜌<sup>2</sup>",
      "𝜌̂<sup>2</sup> or 𝑟<sup>2</sup>",
      "- 𝑅<sup>2</sup>is very similar to 𝑅 Correlation\n- 𝑅<sup>2</sup>value is a percentage"
    ],
    [
      {
        "content": "[[Adjusted R²／R-Square (Adjusted Coefficient of Determination)|Adjusted R2]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝜌<sup>2</sup><sub>𝑎𝑑𝑗</sub>",
      "𝜌̂<sup>2</sup><sub>𝑎𝑑𝑗</sub>  or 𝑟<sup>2</sup><sub>𝑎𝑑𝑗</sub>",
      "- a modified version of 𝑅<sup>2</sup>"
    ],
    [
      {
        "content": "[[Univariate／Single-Variable／Simple Linear Regression Models|Univariate/Single-Variable/Simple Linear Regression Models]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝛽<sub>0</sub>\n- 𝛽<sub>1</sub>",
      "- 𝑏<sub>0</sub>or 𝛽<sub>0</sub>ˆ\n- 𝑏<sub>1</sub>or 𝛽<sub>1</sub>ˆ",
      "- fitting a line to data points"
    ],
    [
      {
        "content": "[[Multivariate／Multiple Linear Regression Models|Multivariate/Multiple Linear Regression Models]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝛽<sub>0</sub>\n- 𝛽<sub>1</sub>\n- ...\n- 𝛽<sub>𝑘</sub>",
      "- 𝑏<sub>0</sub>or 𝛽<sub>0</sub>ˆ\n- 𝑏<sub>1</sub>or 𝛽<sub>1</sub>ˆ\n- ...\n- 𝑏<sub>𝑘</sub>or 𝛽<sub>𝑘</sub>ˆ",
      "- MULTIVARIATE"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Multivariate Descriptive Statistics - Types
- Additive Tree
- Canonical Correlation Analysis
- Cluster Analysis
- Correspondence Analysis / Multiple Correspondence Analysis
- Factor Analysis
- Generalized Procrustean Analysis
- MANOVA
- Multidimensional Scaling
- Multiple Regression Analysis
- Partial Least Square Regression
- Regression / PARAFAC
- [[Feature Dimensional／Dimensionality Reduction|Feature Dimensional/Dimensionality Reduction]] (e.g. [[Principal Component Analysis (PCA)|Principal Component Analysis]])
- Redundancy Analysis

# Statistical Model Analysis
- see: [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|Model - Performance/Accuracy/Evaluation/Goodness-of-Fit Measures/Metrics/Analysis]]
