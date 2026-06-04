---
title: "(Parametric vs Non-Parametric) Statistical Methods／Procedures"
created: 2021-09-13T05:29:00.264-05:00
modified: 2021-09-13T05:29:00.264-05:00
parent: "[[Inferential Statistics]]"
children: []
---
# 2 Broad Classifications of Statistical Methods/Procedures
- <strong>Parametric Statistical Procedures</strong> rely on assumptions about the shape of the distribution (i.e., assume a normal distribution) in the underlying population and about the form or parameters (i.e., means and standard deviations) of the assumed distribution
- <strong>Nonparametric Statistical Procedures</strong> rely on no or few assumptions about the shape or parameters of the population distribution from which the sample was drawn

# Parametric & Analogous Non-Parametric Procedures

```merge-table
{
  "rows": [
    [
      {
        "content": "Analysis Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Parametric Procedure",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Non-Parametric Procedure",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Compare means between two distinct/independent groups",
      "Is the mean systolic blood pressure (at baseline) for patients assigned to placebo different from the mean for patients assigned to the treatment group?",
      "Two-sample t-test",
      "Wilcoxon rank-sum test"
    ],
    [
      "Compare two quantitative measurements taken from the same individual",
      "Was there a significant change in systolic blood pressure between baseline and the six-month followup measurement in the treatment group?",
      "Paired t-test",
      "Wilcoxon signed-rank test"
    ],
    [
      "Compare means between three or more distinct/independent groups",
      "If our experiment had three groups (e.g., placebo, new drug \\#1, new drug \\#2), we might want to know whether the mean systolic blood pressure at baseline differed among the three groups?",
      "Analysis of Variance (ANOVA)",
      "Kruskal-Wallis test"
    ],
    [
      "Estimate the degree of association between two quantitative variables",
      "Is systolic blood pressure associated with the patient’s age?",
      "Pearson coefficient of correlation",
      "Spearman's rank correlation"
    ],
    [
      "etc",
      "etc",
      "etc",
      "etc"
    ]
  ]
}
```
# Choosing Between Parametric vs Non-Parametric Procedures
- If you determine that the assumptions of the parametric procedure are not valid, use an analogous nonparametric procedure instead.
- The parametric assumption of normality is particularly worrisome for small sample sizes (n \< 30). Nonparametric tests are often a good option for these data

# Why Don’t We Always Use Non-Parametric Tests?

Although nonparametric tests have the very desirable property of making fewer assumptions about the distribution of measurements in the population from which we drew our sample, they have two main drawbacks.

The first is that they generally are less statistically powerful than the analogous parametric procedure when the data truly are approximately normal. “Less powerful” means that there is a smaller probability that the procedure will tell us that two variables are associated with each other when they in fact truly are associated. If you are planning a study and trying to determine how many patients to include, a nonparametric test will require a slightly larger sample size to have the same power as the corresponding parametric test.

The second drawback associated with nonparametric tests is that their results are often less easy to interpret than the results of parametric tests. Many nonparametric tests use rankings of the values in the data rather than using the actual data. Knowing that the difference in mean ranks between two groups is five does not really help our intuitive understanding of the data. On the other hand, knowing that the mean systolic blood pressure of patients taking the new drug was five mmHg lower than the mean systolic blood pressure of patients on the standard treatment is both intuitive and useful.
