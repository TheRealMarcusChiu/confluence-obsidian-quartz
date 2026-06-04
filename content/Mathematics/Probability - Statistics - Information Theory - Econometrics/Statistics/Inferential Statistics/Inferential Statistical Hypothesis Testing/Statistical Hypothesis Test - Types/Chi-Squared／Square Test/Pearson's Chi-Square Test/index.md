---
title: "Pearson's Chi-Square Test"
created: 2021-09-13T05:29:08.570-05:00
modified: 2023-09-13T20:50:35.228-05:00
parent: "[[Chi-Squared／Square Test]]"
children:
  - "[[Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test]]"
  - "[[Pearson's Chi-Square Test - Goodness of Fit Test]]"
  - "[[Pearson's Chi-Square Test - Homogeneity Test]]"
  - "[[Pearson's Chi-Square Test - Homogeneity Test vs Independence Test]]"
---
###### Pearson's Chi-Square Test
````excerpt
- is a [[Inferential Statistical Hypothesis Testing|statistical hypothesis test]] applied to sets of categorical data to evaluate how likely it is that any observed difference between the sets arose by chance
- is the most widely used of many [[Chi-Squared／Square Test|chi-squared tests]]
- uses the [[Chi-Square Distribution|chi-square distribution]]
````
^excerpt

# Test Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Test Type",
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
        "content": "[[Pearson's Chi-Square Test - Goodness of Fit Test|Goodness of Fit Test]]",
        "bg": "#F4F5F7"
      },
      "![[Pearson's Chi-Square Test - Goodness of Fit Test#^excerpt]]"
    ],
    [
      {
        "content": "[[Pearson's Chi-Square Test - Homogeneity Test|Homogeneity Test]]",
        "bg": "#F4F5F7"
      },
      "![[Pearson's Chi-Square Test - Homogeneity Test#^excerpt]]"
    ],
    [
      {
        "content": "[[Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test|Contingency Table Test]]\n[[Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test|Statistical Independence Test]]",
        "bg": "#F4F5F7"
      },
      "![[Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

[[Pearson's Chi-Square Test - Homogeneity Test vs Independence Test|Homogeneity Test vs. Independence Test]]
# Test Procedure Outline

All three tests follow the same procedure:
1. calculate the chi-squared test [statistic](https://en.wikipedia.org/wiki/Statistic), <em>𝜒</em>²
2. determine the [degrees of freedom](https://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics))(𝑑𝑓) of that statistic:
	1. goodness of fit test: 𝑑𝑓 = 𝑐𝑎𝑡𝑒𝑔𝑜𝑟𝑖𝑒𝑠 − 𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟𝑠, number of 𝑐𝑎𝑡𝑒𝑔𝑜𝑟𝑖𝑒𝑠 reduced by the number of fitted 𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟𝑠 in the distribution:
		1. 𝑐𝑎𝑡𝑒𝑔𝑜𝑟𝑖𝑒𝑠 is the number of observation categories recognized by the model
		2. 𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟𝑠 is the number of parameters in the model adjusted to make the model best fit the observations
	2. homogeneity test: 𝑑𝑓 = (𝑟𝑜𝑤𝑠 − 1)×(𝑐𝑜𝑙𝑠 − 1), where:
		1. 𝑟𝑜𝑤𝑠 corresponds to the number of categories (i.e. rows in the associated contingency table)
		2. 𝑐𝑜𝑙𝑠 corresponds the number of independent groups (i.e. columns in the associated contingency table)
	3. independence test: 𝑑𝑓 = (𝑟𝑜𝑤𝑠 − 1)×(𝑐𝑜𝑙𝑠 − 1), where:
		1. <em>𝑟𝑜𝑤𝑠</em> corresponds to number of categories in one variable
		2. 𝑐𝑜𝑙𝑠 corresponds to number of categories in the second variable
3. select a desired level of confidence ([[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level]], [[Inferential Statistical Hypothesis Testing|p-value]] or the corresponding [alpha level](https://en.wikipedia.org/wiki/Alpha_level)) for the result of the test
4. sustain or reject the null hypothesis
	1. If the test statistic exceeds the critical value of <em>𝜒</em>², the null hypothesis 𝐻<sub>0</sub> = there is <em>no</em> difference between the distributions) can be rejected, and the alternative hypothesis 𝐻<sub>1</sub> = there <em>is</em> a difference between the distributions) can be accepted, both with the selected level of confidence
	2. If the test statistic falls below the threshold <em>𝜒</em>² value, then no clear conclusion can be reached, and the null hypothesis is sustained (we failed to reject the null hypothesis), but not necessarily accepted
