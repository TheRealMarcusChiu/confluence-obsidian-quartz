---
title: "True／False Positive／Negative Sensitivity Recall Hit／Miss／False-Discovery／False-Omission Rate Fall-Out Threat／F1 Score Critical Success Index Accuracy Specificity Precision Predictive-Value"
created: 2021-09-13T05:27:49.410-05:00
modified: 2026-05-14T13:58:42.130-05:00
parent: "[[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis]]"
children:
  - "[[Accuracy vs Precision]]"
  - "[[Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging]]"
  - "[[F1 Score - F Score - F Measure]]"
  - "[[Informedness - Bookmaker Informedness (BM)]]"
  - "[[Markedness (MK)]]"
  - "[[Matthew's Correlation Coefficient (MCC)]]"
  - "[[Sensitivity vs Specificity]]"
---
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Terminology

```merge-table
{
  "rows": [
    [
      {
        "content": "Terminology",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging|Confusion Matrix]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "True Positive (<font style=\"color: rgb(0,128,0);\">TP</font>)",
        "bg": "#F4F5F7"
      },
      "a correctness in which a test result properly indicates presence of a condition",
      {
        "content": {
          "rows": [
            [
              {
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "TRUE",
                "header": true,
                "bg": "#F4F5F7"
              },
              {
                "content": "FALSE",
                "header": true,
                "bg": "#F4F5F7"
              }
            ],
            [
              {
                "content": "Predicted True",
                "header": true,
                "bg": "#F4F5F7"
              },
              "<font style=\"color: rgb(0,128,0);\">TP</font>",
              "<font style=\"color: rgb(153,204,255);\">FP</font>"
            ],
            [
              {
                "content": "Predicted False",
                "header": true,
                "bg": "#F4F5F7"
              },
              "<font style=\"color: rgb(255,153,204);\">FN</font>",
              "<font style=\"color: rgb(0,255,0);\">TN</font>"
            ]
          ]
        },
        "rowspan": 4
      }
    ],
    [
      {
        "content": "True Negative (<font style=\"color: rgb(0,255,0);\">TN</font>)",
        "bg": "#F4F5F7"
      },
      "a correctness in which a test result properly indicates NO presence of a condition"
    ],
    [
      {
        "content": "False Positive (<font style=\"color: rgb(153,204,255);\">FP</font>)",
        "bg": "#F4F5F7"
      },
      "an error in which a test result improperly indicates presence of a condition"
    ],
    [
      {
        "content": "False Negative (<font style=\"color: rgb(255,153,204);\">FN</font>)",
        "bg": "#F4F5F7"
      },
      "an error in which a test result improperly indicates NO presence of a condition"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Terminology",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Formula",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Positive (<font style=\"color: rgb(128,128,0);\">P</font>)",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(128,128,0);\">P</font> = <font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(255,153,204);\">FN</font>"
    ],
    [
      {
        "content": "Negative (<font style=\"color: rgb(255,102,0);\">N</font>)",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(255,102,0);\">N</font> = <font style=\"color: rgb(0,255,0);\">TN</font> + <font style=\"color: rgb(153,204,255);\">FP</font>"
    ],
    [
      {
        "content": "Sensitivity - Recall - Hit Rate - True Positive Rate (TPR)",
        "bg": "#F4F5F7"
      },
      "TPR = <font style=\"color: rgb(0,128,0);\">TP </font>/ (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(255,153,204);\">FN</font>) = <font style=\"color: rgb(0,128,0);\">TP</font> / <font style=\"color: rgb(128,128,0);\">P</font> = 1 - FNR"
    ],
    [
      {
        "content": "Specificity - Selectivity - True Negative Rate (TNR)",
        "bg": "#F4F5F7"
      },
      "TNR = <font style=\"color: rgb(0,255,0);\">TN</font> / (<font style=\"color: rgb(0,255,0);\">TN</font> + <font style=\"color: rgb(153,204,255);\">FP</font>) = <font style=\"color: rgb(0,255,0);\">TN</font> / <font style=\"color: rgb(255,102,0);\">N</font> = 1 - FPR"
    ],
    [
      {
        "content": "Precision - Positive Predictive Value (PPV)",
        "bg": "#F4F5F7"
      },
      "PPV = <font style=\"color: rgb(0,128,0);\">TP</font> / (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(153,204,255);\">FP</font>) = 1 - FDR"
    ],
    [
      {
        "content": "Negative Predictive Value (NPV)",
        "bg": "#F4F5F7"
      },
      "NPV = <font style=\"color: rgb(0,255,0);\">TN</font> / (<font style=\"color: rgb(0,255,0);\">TN</font> + <font style=\"color: rgb(255,153,204);\">FN</font>) = 1 - FOR"
    ],
    [
      {
        "content": "Miss Rate - False Negative Rate (FNR)",
        "bg": "#F4F5F7"
      },
      "FNR = <font style=\"color: rgb(255,153,204);\">FN</font> / (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(255,153,204);\">FN</font>) = <font style=\"color: rgb(255,153,204);\">FN</font> / <font style=\"color: rgb(128,128,0);\">P</font> = 1 - TPR"
    ],
    [
      {
        "content": "Fall-Out - False Positive Rate (FPR)",
        "bg": "#F4F5F7"
      },
      "FPR = <font style=\"color: rgb(153,204,255);\">FP</font> / (<font style=\"color: rgb(0,255,0);\">TN</font> + <font style=\"color: rgb(153,204,255);\">FP</font>) = <font style=\"color: rgb(153,204,255);\">FP</font> / <font style=\"color: rgb(255,102,0);\">N</font> = 1 - TNR"
    ],
    [
      {
        "content": "False Discovery Rate (FDR)",
        "bg": "#F4F5F7"
      },
      "FDR = <font style=\"color: rgb(153,204,255);\">FP</font> / (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(153,204,255);\">FP</font>) = 1 - PPV"
    ],
    [
      {
        "content": "False Omission Rate (FOR)",
        "bg": "#F4F5F7"
      },
      "FOR = <font style=\"color: rgb(255,153,204);\">FN</font> / (<font style=\"color: rgb(0,255,0);\">TN</font> + <font style=\"color: rgb(255,153,204);\">FN</font>) = 1 - NPV"
    ],
    [
      {
        "content": "Threat Score (TS) - Critical Success Index (CSI)",
        "bg": "#F4F5F7"
      },
      "TS = <font style=\"color: rgb(0,128,0);\">TP</font> / (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(255,153,204);\">FN</font> + <font style=\"color: rgb(153,204,255);\">FP</font>)"
    ],
    [
      {
        "content": "Accuracy (ACC)",
        "bg": "#F4F5F7"
      },
      "ACC = (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(0,255,0);\">TN</font>) / (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(255,153,204);\">FN</font> + <font style=\"color: rgb(0,255,0);\">TN</font> + <font style=\"color: rgb(153,204,255);\">FP</font>) = (<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(0,255,0);\">TN</font>) / (<font style=\"color: rgb(128,128,0);\">P</font> + <font style=\"color: rgb(255,102,0);\">N</font>)"
    ],
    [
      {
        "content": "[[F1 Score - F Score - F Measure|F/F1 Score/Measure]]",
        "bg": "#F4F5F7"
      },
      "- F1 = 2 \\* (PPV \\* TPR) / (PPV + TPR)\n- F1 = 2<font style=\"color: rgb(0,128,0);\">TP</font> / (2<font style=\"color: rgb(0,128,0);\">TP</font> + <font style=\"color: rgb(153,204,255);\">FP</font> + <font style=\"color: rgb(255,153,204);\">FN</font>)"
    ],
    [
      {
        "content": "[[Matthew's Correlation Coefficient (MCC)]]",
        "bg": "#F4F5F7"
      },
      "MCC = (<font style=\"color: rgb(0,128,0);\">TP</font>\\*<font style=\"color: rgb(0,255,0);\">TN</font> - <font style=\"color: rgb(0,128,0);\">FP</font>\\*<font style=\"color: rgb(255,153,204);\">FN</font>) / √\\[(<font style=\"color: rgb(153,204,255);\">TP</font>+<font style=\"color: rgb(153,204,255);\">FP</font>)(<font style=\"color: rgb(0,128,0);\">TP</font>+<font style=\"color: rgb(255,153,204);\">FN</font>)(<font style=\"color: rgb(0,255,0);\">TN</font>+<font style=\"color: rgb(153,204,255);\">FP</font>)(<font style=\"color: rgb(0,255,0);\">TN</font>+<font style=\"color: rgb(255,153,204);\">FN</font>)\\]"
    ],
    [
      {
        "content": "[[Informedness - Bookmaker Informedness (BM)]]",
        "bg": "#F4F5F7"
      },
      "BM = TPR + TNR - 1"
    ],
    [
      {
        "content": "[[Markedness (MK)]]",
        "bg": "#F4F5F7"
      },
      "MK = PPV + NPV - 1"
    ]
  ]
}
```
