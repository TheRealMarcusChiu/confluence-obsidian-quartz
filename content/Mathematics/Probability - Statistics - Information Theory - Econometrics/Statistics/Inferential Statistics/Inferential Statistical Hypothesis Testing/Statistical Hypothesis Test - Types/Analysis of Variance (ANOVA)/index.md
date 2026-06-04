---
title: "Analysis of Variance (ANOVA)"
created: 2021-09-13T05:29:05.254-05:00
modified: 2023-09-05T15:02:34.624-05:00
parent: "[[Statistical Hypothesis Test - Types]]"
children:
  - "[[ANOVA Assumptions]]"
  - "[[Factorial ANOVA]]"
  - "[[One-Way ANOVA]]"
  - "[[Repeated Measure ANOVA]]"
---
###### Analysis of Variance
````excerpt
- is a collection of models and procedures used to compare 2 or more groups with a single test
- used in [[Univariate／Single-Variable／Simple Linear Regression Models|Univariate/Single-Variable/Simple Linear Regression Models]], [[Multivariate／Multiple Linear Regression Models|Multivariate/Multiple Linear Regression Models]], etc
````
^excerpt

# ANOVA - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "ANOVA Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[One-Way ANOVA]]",
        "bg": "#F4F5F7"
      },
      "- 1 factor with at least 2 levels\n- levels are INDEPENDENT\n- hypothesis:\n\t- null hypothesis: all means of each level are equal\n\t- alternative hypothesis: not all means of each level are equal",
      "```merge-table\n{\n  \"rows\": [\n    [\n      {\n        \"content\": \"0mg\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"50mg\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"100mg\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      }\n    ],\n    [\n      \"9\",\n      \"7\",\n      \"4\"\n    ],\n    [\n      \"7\",\n      \"6\",\n      \"3\"\n    ],\n    [\n      \"8\",\n      \"6\",\n      \"2\"\n    ]\n  ]\n}\n```\n- 1 factor: dosage\n- 3 levels: 0mg, 50mg, 100mg"
    ],
    [
      {
        "content": "[[Repeated Measure ANOVA]]",
        "bg": "#F4F5F7"
      },
      "- 1 factor with at least 2 levels\n- levels are DEPENDENT\n- hypothesis:\n\t- null hypothesis: all means of each level are equal\n\t- alternative hypothesis: not all means of each level are equal",
      "```merge-table\n{\n  \"rows\": [\n    [\n      {\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"Day 1\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"Day 2\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"Day 3\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      }\n    ],\n    [\n      \"subject 1\",\n      \"9\",\n      \"6\",\n      \"4\"\n    ],\n    [\n      \"subject 2\",\n      \"8\",\n      \"6\",\n      \"3\"\n    ],\n    [\n      \"subject 3\",\n      \"7\",\n      \"7\",\n      \"2\"\n    ]\n  ]\n}\n```\n- 1 factor: day\n- 3 levels: 1, 2, 3"
    ],
    [
      {
        "content": "[[Factorial ANOVA]]",
        "bg": "#F4F5F7"
      },
      "- 2 or more factors (each with at least 2 levels)\n- levels can be either:\n\t- INDEPENDENT - [[Factorial ANOVA - Two Independent Factors]]\n\t- DEPENDENT - [[Factorial ANOVA - Two Dependent Factors]]\n\t- MIXED - [[Factorial ANOVA - Two Mixed Factors]]\n- hypothesis 1:\n\t- null hypothesis: all means of each level of factor 1 are equal\n\t- alternative hypothesis: not all means of each level of factor 1 are equal\n- hypothesis 2:\n\t- null hypothesis: all means of each level of factor 2 are equal\n\t- alternative hypothesis: not all means of each level of factor 2 are equal\n- hypothesis 3:\n\t- null hypothesis: interaction between factors absent\n\t- alternative hypothesis: interaction between factors present",
      "```merge-table\n{\n  \"rows\": [\n    [\n      {\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"Day 1\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"Day 2\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      },\n      {\n        \"content\": \"Day 3\",\n        \"header\": true,\n        \"bg\": \"#F4F5F7\"\n      }\n    ],\n    [\n      {\n        \"content\": \"Men\",\n        \"rowspan\": 2\n      },\n      \"9\",\n      \"7\",\n      \"4\"\n    ],\n    [\n      \"8\",\n      \"6\",\n      \"3\"\n    ],\n    [\n      {\n        \"content\": \"Women\",\n        \"rowspan\": 2\n      },\n      \"7\",\n      \"6\",\n      \"2\"\n    ],\n    [\n      \"8\",\n      \"8\",\n      \"3\"\n    ]\n  ]\n}\n```\n- 2 factors: gender & day\n- 2 levels gender: male & female\n- 3 levels day: 1, 2, 3"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources

![](https://www.youtube.com/watch?v=qV-WoquC4dA)
