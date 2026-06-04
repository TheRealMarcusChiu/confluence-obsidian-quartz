---
title: "Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging"
created: 2021-09-13T05:27:49.649-05:00
modified: 2021-12-21T18:56:23.111-06:00
parent: "[[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value]]"
children: []
---
often used as a [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|performance measure]] between different classification-typed [[ML - Models|Machine Learning Algorithms]]
# Confusion Matrix / Contingency Tables
> [!tabs]
>
> === binary classification confusion matrix
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7",
>         "colspan": 2,
>         "rowspan": 2
>       },
>       null,
>       {
>         "content": "Actual",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       {
>         "content": "True",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "False",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "Predicted",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Positive",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "# of [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|True Positives]]",
>         "bg": "green",
>         "align": "center"
>       },
>       {
>         "content": "\\# of [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|False Positives]]Type I Error",
>         "bg": "red",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "Negative",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "\\# of [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|False Negatives]]Type II Error",
>         "bg": "red",
>         "align": "center"
>       },
>       {
>         "content": "# of [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|True Negatives]]",
>         "bg": "green",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```
>
> === n-nary classification confusion matrix
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7",
>         "colspan": 2,
>         "rowspan": 2
>       },
>       null,
>       {
>         "content": "Actual",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null
>     ],
>     [
>       {
>         "content": "Label 1",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "...",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Label N",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "Predicted",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 3
>       },
>       {
>         "content": "Label 1",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "green",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "red",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "red",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "...",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "red",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "green",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "red",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "Label N",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "red",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "red",
>         "align": "center"
>       },
>       {
>         "content": "# of ...",
>         "bg": "green",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```

# Micro-Averaging vs Macro-Averaging

used when combining multi-classification measures into one quantity
- <strong>macro-averaging</strong> - compute performance for each class, then average
- <strong>micro-averaging</strong> - collect decisions for all classes, compute contingency table, then evaluate

micro-averaging score is dominated by score on more common classes
# Micro-Averaging vs Macro-Averaging - Example

given 2 contingency tables, compute the performance measure [[True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value|precision]]

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Class 1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "Class 2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "Micro-Average",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "TRUE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "FALSE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "TRUE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "FALSE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "TRUE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "FALSE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Predicted TRUE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "10",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "10",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "90",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "10",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "10 + 90 = 100",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "10 + 10 = 20",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "Predicted False",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "10",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "970",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "10",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "890",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "10 + 10 = 20",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "970 + 890 = 1860",
        "bg": "green",
        "align": "center"
      }
    ]
  ]
}
```

precision = true positives / (true positives + false negatives)
- class 1 precision = 10 / (10 + 10) = 0.5
- class 2 precision = 90 / (90 + 10) = 0.9
- macro-average precision = (0.5 + 0.9) / 2 = 0.7
- micro-average precision = 100 / (100 + 20) = 0.83

# Resources

![](https://www.youtube.com/watch?v=Kdsp6soqA7o)
