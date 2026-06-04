---
title: "ML - Performance Measure"
created: 2024-08-11T14:27:38.597-05:00
modified: 2024-08-11T14:30:12.463-05:00
parent: "[[Machine Learning (ML) - Pattern Recognition]]"
children: []
---
###### Performance Measure
````excerpt
- is specific to the [[ML - Tasks／Problems|task 𝑇]]
- are evaluated over a [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|test-set]] (separate from [[ML - Training／Validation／Test Data／Set - Training／Validation／Test Error|training-set]])
````
^excerpt

# Performance Measure - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "[[ML - Tasks／Problems|Task]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Corresponding Performance Measure",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "classification",
        "bg": "#F4F5F7"
      },
      "measure the accuracy/error-rate of the model:\n- accuracy - the proportion of examples for which the model produces the correct class label)\n- error-rate - the proportion of examples for which the model produces an incorrect class label"
    ],
    [
      {
        "content": "probability distribution estimation",
        "bg": "#F4F5F7"
      },
      "use a performance metric that gives the model a continuous-valued score for each example (e.g. average log-probability the model assigns to some examples)"
    ],
    [
      {
        "content": "transcription",
        "bg": "#F4F5F7"
      },
      "either:\n- accuracy of transcribing entire sequences\n- fine-grained measure that gives partial credit for getting some elements of sequence correct"
    ],
    [
      {
        "bg": "#F4F5F7"
      },
      "more [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|performance measures]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
