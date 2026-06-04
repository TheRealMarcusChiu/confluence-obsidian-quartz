---
title: "Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)"
created: 2019-05-02T12:41:49.117-05:00
modified: 2023-07-12T23:37:51.189-05:00
parent: "[[Data／Variable Types (Statistics／Programming)]]"
children: []
---
# 4 Measurement Scales

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Nominal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Ordinal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Interval",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Ratio",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "if ✓, then the following can be computed",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Values are Labeled",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      "[[Mode|mode]], counts (frequency of distribution)"
    ],
    [
      {
        "content": "Values are Ordered",
        "bg": "#F4F5F7"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      "[[Median (2-Quantile - 50th Percentile)|median]]"
    ],
    [
      {
        "content": "Values Exact Difference Are Known",
        "bg": "#F4F5F7"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      "[[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]], can add or subtract values"
    ],
    [
      {
        "content": "Values Contain a True Zero",
        "bg": "#F4F5F7"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✓</font>",
        "bg": "green",
        "align": "center"
      },
      "can multiply and divide values"
    ],
    [
      {
        "content": "Qualitative or Quantitative",
        "bg": "#F4F5F7"
      },
      {
        "content": "Qualitative",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "Qualitative",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "Quantitative",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "content": "Quantitative",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "bg": "#f4f5f7"
      }
    ],
    [
      {
        "content": "Examples",
        "bg": "blue"
      },
      {
        "content": "> [!expand]- expand\n> - blood type\n> - gender\n> - political party",
        "bg": "blue"
      },
      {
        "content": "> [!expand]- expand\n> - socio economic status (“low income”,”middle income”,”high income”)\n> - education level (“high school”,”BS”,”MS”,”PhD”), income level (“less than 50K”, “50K-100K”, “over 100K”)\n> - satisfaction rating (“extremely dislike”, “dislike”, “neutral”, “like”, “extremely like”)",
        "bg": "blue"
      },
      {
        "content": "> [!expand]- expand\n> - temperature (Fahrenheit / Celsius)\n> - pH\n> - SAT score (200-800)",
        "bg": "blue"
      },
      {
        "content": "> [!expand]- expand\n> - enzyme activity\n> - length\n> - temperature in Kelvin (0.0 Kelvin really does mean “no heat”)",
        "bg": "blue"
      },
      {
        "bg": "blue"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Interval vs Ratio

When working with ratio variables, but not interval variables, the ratio of two measurements has a meaningful interpretation. For example, because weight is a ratio variable, a weight of 4 grams is twice as heavy as a weight of 2 grams. However, a temperature of 10 degrees C should not be considered twice as hot as 5 degrees C. If it were, a conflict would be created because 10 degrees C is 50 degrees F and 5 degrees C is 41 degrees F. Clearly, 50 degrees is not twice 41 degrees. Another example, a pH of 3 is not twice as acidic as a pH of 6, because pH is not a ratio variable
# Diagram
![[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)/Ratio Interval Ordinal Nominal.png|500]]
