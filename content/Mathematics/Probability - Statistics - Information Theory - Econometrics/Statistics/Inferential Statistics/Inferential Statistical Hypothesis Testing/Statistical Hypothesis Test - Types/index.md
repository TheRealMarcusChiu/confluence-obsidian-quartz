---
title: "Statistical Hypothesis Test - Types"
created: 2021-09-13T05:29:04.984-05:00
modified: 2026-05-17T03:21:52.048-05:00
parent: "[[Inferential Statistical Hypothesis Testing]]"
children:
  - "[[Analysis of Variance (ANOVA)]]"
  - "[[Chi-Squared／Square Test]]"
  - "[[Correlation Test]]"
  - "[[F-Test]]"
  - "[[Normality Tests]]"
  - "[[Z-Test & T-Test]]"
---
# Prerequisite
- [[Inferential Statistical Hypothesis Testing]]

# Statistical Hypothesis Test - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Z-Test & T-Test|Z-Test]]",
        "bg": "#F4F5F7"
      },
      "- assumes [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|sample statistic]] has [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-distributed]] [[Statistical Hypothesis Test - Null Distribution|null distribution]]\n- used when the [[Standard Error (SE) - Estimated Standard Error (SEˆ)|standard error]] of sample statistic is calculated with KNOWN [[Statistics - Terminology|population parameters]]\n- [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|z-score]] is calculated with KNOWN [[Statistics - Terminology|population parameters]]\n- test-statistic is called z-statistic",
      {
        "content": "There are 3 versions of the z-test / t-test:\n\n- one-sample test - tests the [[Statistics - Terminology|sample statistic]] of a single sample against a known [[Statistics - Terminology|population parameter]]\n- two-sample test:\n\t- independent samples test - compares the sample statistics between 2 different samples\n\t- paired sample test - given 2 different calculations/methods of sample statistic of the SAME sample, this test compares the 2 sample statistics",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[Z-Test & T-Test|T-Test]]",
        "bg": "#F4F5F7"
      },
      "- assumes [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|sample statistic]] has [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-distributed]] [[Statistical Hypothesis Test - Null Distribution|null distribution]]\n- used when the standard error of sample statistic is ESTIMATED with ESTIMATED [[Statistics - Terminology|population parameters]]\n- [[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|t-score]] is calculated with ESTIMATED values of [[Statistics - Terminology|population parameters]]\n- test-statistic is called t-statistic"
    ],
    [
      {
        "content": "[[F-Test]]\n\n[[Analysis of Variance (ANOVA)|ANOVA]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "- used to compare multiple (three or more) samples with a single test\n- 2 major flavors:\n\t- [[One-Way ANOVA]] - used to compare the difference between the 3 or more samples of a single independent variable\n\t- MANOVA - used to test the effect of one or more independent variables on 2 or more dependent variables. can also detect the difference in correlation between dependent variables given the groups of independent variables\n- hypothesis:\n\t- null hypothesis - all pairs of samples are the same (i.e. all sample means are equal)\n\t- alternative hypothesis - at least one pair of samples is significantly different\n- the test-statistic is called the f-statistic",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Chi-Squared／Square Test|Chi-Square Test]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "- used to:\n\t- test on categorical/[[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] variables\n\t- create confidence intervals for sample variance statistic from a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normally distributed]] population\n- types:\n\t- [[Pearson's Chi-Square Test - Goodness of Fit Test|goodness of fit test]] - determines whether an observed frequency [discrete distribution](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=10945726) differs from a theoretical [discrete distribution](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=10945726) (e.g. whether an ordinary six-sided die is \"fair\")\n\t\t- null hypothesis - the population has said discrete distribution\n\t\t- alternative hypothesis - the population does not have said discrete distribution\n\t- [[Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test|statistical independence test]] - used to compare 2 variables in a contingency table to check if the data fits\n\t- \n\t\t- null hypothesis - variable A and variable B are independent\n\t\t- alternative hypothesis - variable A and variable B are not independent\n\t- [[Pearson's Chi-Square Test - Homogeneity Test|homogeneity test]] - comparing different populations with respect to a variable of interest\n\t\t- null hypothesis - TODO\n\t\t- alternative hypothesis - TODO\n- the test statistic is called the chi-square statistic",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 99.9067%;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Statistical Test",
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
        "content": "One Sample t-Test",
        "bg": "#F4F5F7"
      },
      "a parametric test used to test if the mean of a sample from a normal distribution could reasonably be a specific value\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>set.seed(<font style=\"color: rgb(64,160,112);\">100</font>)</code><br><code>x \\<-rnorm(<font style=\"color: rgb(64,160,112);\">50</font>, <font style=\"color: rgb(144,32,0);\">mean =</font> <font style=\"color: rgb(64,160,112);\">10</font>, <font style=\"color: rgb(144,32,0);\">sd =</font> <font style=\"color: rgb(221,17,68);\">0.5</font>)</code><br><code>t.test(x, <font style=\"color: rgb(144,32,0);\">mu=</font><font style=\"color: rgb(64,160,112);\">10</font>) <font style=\"color: rgb(136,136,136);\">\\# testing if mean of x could be</font><font style=\"color: rgb(136,136,136);\">\\#=\\> One Sample t-test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> </font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: x</font><font style=\"color: rgb(136,136,136);\">\\#=\\> t = 0.70372, df = 49, p-value = 0.4849</font><font style=\"color: rgb(136,136,136);\">\\#=\\> alternative hypothesis: true mean is not equal to 10</font><font style=\"color: rgb(136,136,136);\">\\#=\\> 95 percent confidence interval:</font><font style=\"color: rgb(136,136,136);\">\\#=\\> 9.924374 10.157135</font><font style=\"color: rgb(136,136,136);\">\\#=\\> sample estimates:</font><font style=\"color: rgb(136,136,136);\">\\#=\\> mean of x </font><font style=\"color: rgb(136,136,136);\">\\#=\\> 10.04075 </font></code></span>"
    ],
    [
      {
        "content": "Wilcoxon Signed Rank Test",
        "bg": "#F4F5F7"
      },
      "test the mean of a sample when normal distribution is not assumed. Wilcoxon signed rank test can be an alternative to t-test, especially when the data sample is not assumed to follow a normal distribution. It is a non-parametric method used to test if an estimate is different from its true value\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>numeric\\_vector \\<-c(<font style=\"color: rgb(64,160,112);\">20</font>, <font style=\"color: rgb(64,160,112);\">29</font>, <font style=\"color: rgb(64,160,112);\">24</font>, <font style=\"color: rgb(64,160,112);\">19</font>, <font style=\"color: rgb(64,160,112);\">20</font>, <font style=\"color: rgb(64,160,112);\">22</font>, <font style=\"color: rgb(64,160,112);\">28</font>, <font style=\"color: rgb(64,160,112);\">23</font>, <font style=\"color: rgb(64,160,112);\">19</font>, <font style=\"color: rgb(64,160,112);\">19</font>)</code><br><code>wilcox.test(numeric\\_vector, <font style=\"color: rgb(144,32,0);\">mu=</font><font style=\"color: rgb(64,160,112);\">20</font>, <font style=\"color: rgb(144,32,0);\">conf.int =</font> <font style=\"color: rgb(0,112,32);\">TRUE</font>)</code><br><code><font style=\"color: rgb(136,136,136);\">\\#\\> Wilcoxon signed rank test with continuity correction</font><font style=\"color: rgb(136,136,136);\">\\#\\></font><font style=\"color: rgb(136,136,136);\">\\#\\> data: numeric\\_vector</font><font style=\"color: rgb(136,136,136);\">\\#\\> V = 30, p-value = 0.1056</font><font style=\"color: rgb(136,136,136);\">\\#\\> alternative hypothesis: true location is not equal to 20</font><font style=\"color: rgb(136,136,136);\">\\#\\> 90 percent confidence interval:</font><font style=\"color: rgb(136,136,136);\">\\#\\> 19.00006 25.99999</font><font style=\"color: rgb(136,136,136);\">\\#\\> sample estimates:</font><font style=\"color: rgb(136,136,136);\">\\#\\> (pseudo)median </font><font style=\"color: rgb(136,136,136);\">\\#\\> 23.00002</font></code></span>"
    ],
    [
      {
        "content": "Two Sample t-Test and Wilcoxon Rank Sum Test",
        "bg": "#F4F5F7"
      },
      "Both t.Test and Wilcoxon rank test can be used to compare the mean of 2 samples. The difference is t-test assumes the samples being tested is drawn from a normal distribution, while, Wilcoxon’s rank sum test does not\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>x \\<-c(<font style=\"color: rgb(221,17,68);\">0.80</font>, <font style=\"color: rgb(221,17,68);\">0.83</font>, <font style=\"color: rgb(221,17,68);\">1.89</font>, <font style=\"color: rgb(221,17,68);\">1.04</font>, <font style=\"color: rgb(221,17,68);\">1.45</font>, <font style=\"color: rgb(221,17,68);\">1.38</font>, <font style=\"color: rgb(221,17,68);\">1.91</font>, <font style=\"color: rgb(221,17,68);\">1.64</font>, <font style=\"color: rgb(221,17,68);\">0.73</font>, <font style=\"color: rgb(221,17,68);\">1.46</font>)</code><br><code>y \\<-c(<font style=\"color: rgb(221,17,68);\">1.15</font>, <font style=\"color: rgb(221,17,68);\">0.88</font>, <font style=\"color: rgb(221,17,68);\">0.90</font>, <font style=\"color: rgb(221,17,68);\">0.74</font>, <font style=\"color: rgb(221,17,68);\">1.21</font>)</code><br><code>wilcox.test(x, y, <font style=\"color: rgb(144,32,0);\">alternative =</font> <font style=\"color: rgb(221,17,68);\">\"g\"</font>)  <font style=\"color: rgb(136,136,136);\">\\# g for greater</font><font style=\"color: rgb(136,136,136);\">\\#=\\> Wilcoxon rank sum test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> </font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: x and y</font><font style=\"color: rgb(136,136,136);\">\\#=\\> W = 35, p-value = 0.1272</font><font style=\"color: rgb(136,136,136);\">\\#=\\> alternative hypothesis: true location shift is greater than 0</font></code></span>\n>\n> <span style=\"white-space: pre-wrap\"><code>t.test(<font style=\"color: rgb(64,160,112);\">1</font>:<font style=\"color: rgb(64,160,112);\">10</font>, <font style=\"color: rgb(144,32,0);\">y =</font> c(<font style=\"color: rgb(64,160,112);\">7</font>:<font style=\"color: rgb(64,160,112);\">20</font>))      <font style=\"color: rgb(136,136,136);\">\\# P = .00001855</font><font style=\"color: rgb(136,136,136);\">\\#=\\> Welch Two Sample t-test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> </font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: 1:10 and c(7:20)</font><font style=\"color: rgb(136,136,136);\">\\#=\\> t = -5.4349, df = 21.982, p-value = 1.855e-05</font><font style=\"color: rgb(136,136,136);\">\\#=\\> alternative hypothesis: true difference in means is not equal to 0</font><font style=\"color: rgb(136,136,136);\">\\#=\\> 95 percent confidence interval:</font><font style=\"color: rgb(136,136,136);\">\\#=\\> -11.052802 -4.947198</font><font style=\"color: rgb(136,136,136);\">\\#=\\> sample estimates:</font><font style=\"color: rgb(136,136,136);\">\\#=\\> mean of x mean of y </font><font style=\"color: rgb(136,136,136);\">\\#=\\> 5.5 13.5</font></code></span>\n\nWhat if we want to do a 1-to-1 comparison of means for values of x and y?\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\# Use paired = TRUE for 1-to-1 comparison of observations.</font>t.test(x, y, <font style=\"color: rgb(144,32,0);\">paired =</font> <font style=\"color: rgb(0,112,32);\">TRUE</font>) <font style=\"color: rgb(136,136,136);\">\\# when observations are paired, use 'paired' argument.</font>wilcox.test(x, y, <font style=\"color: rgb(144,32,0);\">paired =</font> <font style=\"color: rgb(0,112,32);\">TRUE</font>) <font style=\"color: rgb(136,136,136);\">\\# both x and y are assumed to have similar shapes</font></code></span>"
    ],
    [
      {
        "content": "Shapiro Test",
        "bg": "#F4F5F7"
      },
      "tests if a sample follows a <em>normal distribution</em>\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\# Example: Test a normal distribution</font>set.seed(<font style=\"color: rgb(64,160,112);\">100</font>)</code><br><code>normaly\\_disb \\<-rnorm(<font style=\"color: rgb(64,160,112);\">100</font>, <font style=\"color: rgb(144,32,0);\">mean=</font><font style=\"color: rgb(64,160,112);\">5</font>, <font style=\"color: rgb(144,32,0);\">sd=</font><font style=\"color: rgb(64,160,112);\">1</font>) <font style=\"color: rgb(136,136,136);\">\\# generate a normal distribution</font>shapiro.test(normaly\\_disb)  <font style=\"color: rgb(136,136,136);\">\\# the shapiro test.</font><font style=\"color: rgb(136,136,136);\">\\#=\\> Shapiro-Wilk normality test</font><font style=\"color: rgb(136,136,136);\">\\#=\\></font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: normaly\\_disb</font><font style=\"color: rgb(136,136,136);\">\\#=\\> W = 0.98836, p-value = 0.535</font></code></span>\n>\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\# Example: Test a uniform distribution</font>set.seed(<font style=\"color: rgb(64,160,112);\">100</font>)</code><br><code>not\\_normaly\\_disb \\<-runif(<font style=\"color: rgb(64,160,112);\">100</font>)  <font style=\"color: rgb(136,136,136);\">\\# uniform distribution.</font>shapiro.test(not\\_normaly\\_disb)</code><br><code><font style=\"color: rgb(136,136,136);\">\\#=\\> Shapiro-Wilk normality test</font></code></span>\n>\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\#=\\></font></code></span>\n>\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\#=\\> data: not\\_normaly\\_disb</font><font style=\"color: rgb(136,136,136);\">\\#=\\> W = 0.96509, p-value = 0.009436</font></code></span>"
    ],
    [
      {
        "content": "Kolmogorov And Smirnov Test",
        "bg": "#F4F5F7"
      },
      "used to check whether 2 samples follow the same distribution\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\# From different distributions</font></code><br><code>x \\<-rnorm(<font style=\"color: rgb(64,160,112);\">50</font>)</code><br><code>y \\<-runif(<font style=\"color: rgb(64,160,112);\">50</font>)</code><br><code>ks.test(x, y)  <font style=\"color: rgb(136,136,136);\">\\# perform ks test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> Two-sample Kolmogorov-Smirnov test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> </font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: x and y</font><font style=\"color: rgb(136,136,136);\">\\#=\\> D = 0.58, p-value = 4.048e-08</font><font style=\"color: rgb(136,136,136);\">\\#=\\> alternative hypothesis: two-sided</font></code></span>\n>\n> <span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,136,136);\">\\# Both from normal distribution</font></code><br><code>x \\<-rnorm(<font style=\"color: rgb(64,160,112);\">50</font>)</code><br><code>y \\<-rnorm(<font style=\"color: rgb(64,160,112);\">50</font>)</code><br><code>ks.test(x, y)  <font style=\"color: rgb(136,136,136);\">\\# perform ks test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> Two-sample Kolmogorov-Smirnov test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> </font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: x and y</font><font style=\"color: rgb(136,136,136);\">\\#=\\> D = 0.18, p-value = .3959</font><font style=\"color: rgb(136,136,136);\">\\#=\\> alternative hypothesis: two-sided</font></code></span>"
    ],
    [
      {
        "content": "Fisher's F-Test",
        "bg": "#F4F5F7"
      },
      "used to check if two samples have the same variance\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>var.test(x, y)  <font style=\"color: rgb(136,136,136);\">\\# Do x and y have the same variance?</font></code></span>"
    ],
    [
      {
        "content": "Fligner Test",
        "bg": "#F4F5F7"
      },
      "used to check if two samples have the same variance\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>fligner.test(x, y)  <font style=\"color: rgb(136,136,136);\">\\# Do x and y have the same variance?</font></code></span>"
    ],
    [
      {
        "content": "Bartlett Test",
        "bg": "#F4F5F7"
      },
      "used to check if two samples have the same variance\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>bartlett.test(x, y)  <font style=\"color: rgb(136,136,136);\">\\# Do x and y have the same variance?</font></code></span>"
    ],
    [
      {
        "content": "Chi-Squared Test",
        "bg": "#F4F5F7"
      },
      "test the correlation between two [[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|categorical variables]]\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>chisq.test(table(categorical\\_X, categorical\\_Y), <font style=\"color: rgb(144,32,0);\">correct =</font> <font style=\"color: rgb(0,112,32);\">FALSE</font>)  <font style=\"color: rgb(136,136,136);\">\\# Yates continuity correction not applied</font><font style=\"color: rgb(136,136,136);\">\\#or</font>summary(table(categorical\\_X, categorical\\_Y)) <font style=\"color: rgb(136,136,136);\">\\# performs a chi-squared test.</font><font style=\"color: rgb(136,136,136);\">\\# Sample results</font><font style=\"color: rgb(136,136,136);\">\\#=\\> Pearson's Chi-squared test</font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: M</font><font style=\"color: rgb(136,136,136);\">\\#=\\> X-squared = 30.0701, df = 2, p-value = 2.954e-07</font></code></span>"
    ],
    [
      {
        "content": "Correlation Test",
        "bg": "#F4F5F7"
      },
      "test the linear relationship of two continuous variables\n\n> [!expand]- Click here to expand...\n> <span style=\"white-space: pre-wrap\"><code>cor.test(cars\\$speed, cars\\$dist)</code><br><code><font style=\"color: rgb(136,136,136);\">\\#=\\> Pearson's product-moment correlation</font><font style=\"color: rgb(136,136,136);\">\\#=\\> </font><font style=\"color: rgb(136,136,136);\">\\#=\\> data: cars\\$speed and cars\\$dist</font><font style=\"color: rgb(136,136,136);\">\\#=\\> t = 9.464, df = 48, p-value = 1.49e-12</font><font style=\"color: rgb(136,136,136);\">\\#=\\> alternative hypothesis: true correlation is not equal to 0</font><font style=\"color: rgb(136,136,136);\">\\#=\\> 95 percent confidence interval:</font><font style=\"color: rgb(136,136,136);\">\\#=\\> 0.6816422 0.8862036</font><font style=\"color: rgb(136,136,136);\">\\#=\\> sample estimates:</font><font style=\"color: rgb(136,136,136);\">\\#=\\> cor </font><font style=\"color: rgb(136,136,136);\">\\#=\\> 0.8068949</font></code></span>"
    ]
  ]
}
```
# Statistical Hypothesis Test - Which to Use

```merge-table
{
  "rows": [
    [
      {
        "content": "Sample Data Type(s)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Hypothesis Test Type",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "one categorical variable",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[CI - Proportion|1 Sample - Proportion Test]]"
    ],
    [
      {
        "content": "two categorical variables",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Chi-Squared／Square Test|Chi-Square Test]]"
    ],
    [
      {
        "content": "one numerical variable",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Z-Test & T-Test|t-test & z-test]]"
    ],
    [
      {
        "content": "one numerical variable\n&\none categorical variable",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Z-Test & T-Test|t-test & z-test]]\n- [[Analysis of Variance (ANOVA)]] - used when we have a categorical variable with more than 2 categories"
    ],
    [
      {
        "content": "two numerical variables",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "- [[Correlation|correlation]] test"
    ]
  ]
}
```
# Resources
- [Greg Martin's Intro to Hypothesis Tests](https://www.youtube.com/watch?v=I10q6fjPxJ0)
