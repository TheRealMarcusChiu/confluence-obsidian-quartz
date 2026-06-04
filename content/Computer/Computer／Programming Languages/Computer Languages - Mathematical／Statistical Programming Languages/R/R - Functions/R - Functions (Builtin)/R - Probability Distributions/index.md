---
title: "R - Probability Distributions"
created: 2021-08-21T13:01:07.945-05:00
modified: 2021-08-30T09:20:39.709-05:00
parent: "[[R - Functions (Builtin)]]"
children:
  - "[[R - Uniform Distribution]]"
---
# Probability Distributions
[[Univariate Probability Distribution|univariate probability distributions]]

```merge-table
{
  "rows": [
    [
      {
        "content": {
          "rows": [
            [
              {
                "content": "<strong>Distribution</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "<strong>R name</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "<strong>Distribution</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "<strong>R name</strong>",
                "header": true,
                "bg": "#F4F5F7"
              }
            ],
            [
              {
                "content": "<strong>[[Beta Distribution|Beta]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "beta",
              {
                "content": "<strong>Lognormal</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "lnorm"
            ],
            [
              {
                "content": "<strong>[[Binomial Distribution|Binomial]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "binom",
              {
                "content": "<strong>[[Negative Binomial (Pascal) Distribution|Negative Binomial]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "nbinom"
            ],
            [
              {
                "content": "<strong>Cauchy</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "cauchy",
              {
                "content": "<strong>[[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "norm"
            ],
            [
              {
                "content": "<strong>[[Chi-Square Distribution|Chi Square]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "chisq",
              {
                "content": "<strong>[[Poisson Distribution|Poisson]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "pois"
            ],
            [
              {
                "content": "<strong>[[Exponential Distribution|Exponential]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "exp",
              {
                "content": "<strong>[[t-distribution ｜ t-scores ｜ t-value ｜ t-table ｜ t-statistic ｜ student's t-distribution|Student t]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "t"
            ],
            [
              {
                "content": "<strong>[[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|F]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "f",
              {
                "content": "<strong>[[R - Uniform Distribution|Uniform]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "unif"
            ],
            [
              {
                "content": "<strong>[[Gamma Distribution|Gamma]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "gamma",
              {
                "content": "<strong>Tukey</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "tukey"
            ],
            [
              {
                "content": "<strong>[[Geometric Distribution|Geometric]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "geom",
              {
                "content": "<strong>Weibull</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "weib"
            ],
            [
              {
                "content": "<strong>[[Hypergeometric Distribution|Hypergeometric]]</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "hyper",
              {
                "content": "<strong>Wilcoxon</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "wilcox"
            ],
            [
              {
                "content": "<strong>Logistic</strong>",
                "header": true,
                "bg": "#F4F5F7"
              },
              "logis",
              {
                "header": true,
                "bg": "#F4F5F7"
              },
              ""
            ]
          ]
        }
      },
      {
        "content": [
          {
            "rows": [
              [
                {
                  "content": "<strong>name</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                },
                {
                  "content": "<strong>description</strong>",
                  "header": true,
                  "bg": "#F4F5F7"
                }
              ],
              [
                "<strong>d</strong><em>name</em>( )",
                "density or probability function"
              ],
              [
                "<strong>p</strong><em>name</em>( )",
                "cumulative density function"
              ],
              [
                "<strong>q</strong><em>name</em>( )",
                "quantile function"
              ],
              [
                "<strong>r</strong><em>name</em>( )",
                "random deviates"
              ]
            ]
          },
          "For example:\n- <strong>dnorm(0)</strong> = 0.3989423 (is the density at 0)\n- <strong>qnorm(0.5)</strong> = 0 (0 is the 50th percentile of the standard normal distribution)\n- <strong>rnorm(100) </strong>generates 100 random deviates from a standard normal distribution\n\nEach function has parameters specific to that distribution. For example, <strong>rnorm(100, m=50, sd=10)</strong> generates 100 random deviates from a normal distribution with mean 50 and standard deviation 10"
        ]
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
