---
title: "Statistical Hypothesis Test - Type I／II／One／Two Error"
created: 2021-09-13T05:29:04.763-05:00
modified: 2023-09-13T20:37:52.783-05:00
parent: "[[Inferential Statistical Hypothesis Testing]]"
children: []
---
````excerpt
- <strong>Type I Error </strong>occurs when we incorrectly REJECT the TRUE null hypothesis
- <strong>Type II Error </strong>occurs when we incorrectly ACCEPT the FALSE null hypothesis
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Accept 𝐻<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Reject 𝐻<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝐻<sub>0</sub>is true",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">correct</font>",
        "bg": "green"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">Type I Error</font>",
        "bg": "red"
      }
    ],
    [
      {
        "content": "𝐻<sub>0</sub>is false",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">Type II Error</font>",
        "bg": "red"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">correct</font>",
        "bg": "green"
      }
    ]
  ]
}
```

probability of rejecting a TRUE null-hypothesis is the <strong>[[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level (𝛼)]]</strong> of a test
- 𝛼 = 𝐏(reject 𝐻<sub>0</sub> | 𝐻<sub>0</sub> is true)

probability of rejecting a FALSE null-hypothesis is the <strong>power (𝑝)</strong> of the test
- 𝑝 = 𝐏(reject 𝐻<sub>0</sub> | 𝐻<sub>0</sub> is false)
````
^excerpt
