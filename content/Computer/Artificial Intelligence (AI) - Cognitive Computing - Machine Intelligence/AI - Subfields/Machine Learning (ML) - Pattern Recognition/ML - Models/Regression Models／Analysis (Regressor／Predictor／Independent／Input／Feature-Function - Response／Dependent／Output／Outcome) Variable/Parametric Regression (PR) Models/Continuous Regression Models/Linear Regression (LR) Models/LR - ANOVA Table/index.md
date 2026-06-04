---
title: "LR - ANOVA Table"
created: 2020-04-23T16:19:26.271-05:00
modified: 2026-05-20T00:32:12.217-05:00
parent: "[[Linear Regression (LR) Models]]"
children: []
---
````excerpt
This table is a modification of [[One-Way ANOVA]] and can be used for both [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear regression]] and [[Multivariate／Multiple Linear Regression Models|multivariate linear regression]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Source",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Sum of Squares",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Degrees of Freedom",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mean Squares",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹 Statistic (ALL)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Total",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">Sum of Squares Total (TSS)</font>\nSum of Squares Restricted\nSum of Squares Around Mean\n- <font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑦<sub>𝑖</sub> - 𝑦̅\\]<sup>2</sup></font>\n- <font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑇𝑂𝑇</sub>= <font style=\"color: rgb(0,128,0);\">𝑆𝑆<sub>𝑅𝐸𝐺</sub></font> + <font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝐸𝑅𝑅</sub></font></font>",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 𝑛 - 1</font>",
        "bg": "#deebff"
      },
      {
        "content": "![[LR - ANOVA Table/error-variance-model.png|301]]",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Error",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">Sum of Squares Error (ESS)</font>\n<font style=\"color: rgb(255,0,0);\">Sum of Squares Residual (RSS)</font>\nSum of Squares UnRestricted\nSum of Squares Around Model\n- <font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝐸𝑅𝑅</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑦<sub>𝑖</sub> - 𝑦̂<sub>𝑖</sub>\\]<sup>2</sup> = 𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑒<sub>𝑖</sub>\\]<sup>2</sup></font>",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">𝑑𝑓<sub>𝐸𝑅𝑅</sub>= 𝑛 - \\# of model params including</font> 𝜃<sub>0</sub>\n𝑑𝑓<sub>𝐸𝑅𝑅</sub>= 𝑛 - (𝑘 + 1)\n𝑑𝑓<sub>𝐸𝑅𝑅</sub>= 𝑛 - 𝑘 - 1",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">𝑀𝑆<sub>𝐸𝑅𝑅</sub> = 𝑆𝑆<sub>𝐸𝑅𝑅</sub> / 𝑑𝑓<sub>𝐸𝑅𝑅</sub></font>\n\n[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Mean Square Error (MSE)]]\n[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Regression Variance]]",
        "bg": "#ffebe6"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">𝑀𝑆<sub>𝑅𝐸𝐺</sub></font>/ <font style=\"color: rgb(255,0,0);\">𝑀𝑆<sub>𝐸𝑅𝑅</sub></font>\n\n<font style=\"color: rgb(128,128,128);\">this 𝐹 formula is used to test significance of the <strong>ENTIRE</strong> regression model</font>\n\n<font style=\"color: rgb(128,128,128);\">for other <font style=\"color: rgb(128,128,128);\">𝐹 formulas used to</font> test <strong>PARTIAL</strong> significance of regression model consult table below</font>",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "Model",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">Sum of Squares Regression (RSS)</font>\n<font style=\"color: rgb(0,128,0);\">Sum of Squares Explained (ESS)</font>\n- <font style=\"color: rgb(0,128,0);\">𝑆𝑆<sub>𝑅𝐸𝐺</sub> = <font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑇𝑂𝑇</sub></font> - <font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝐸𝑅𝑅</sub></font> </font>\n- <font style=\"color: rgb(0,128,0);\">𝑆𝑆<sub>𝑅𝐸𝐺</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>\\[𝑦̂<sub>𝑖</sub> - 𝑦̅\\]<sup>2</sup></font>",
        "bg": "#e3fcef"
      },
      {
        "content": "𝑑𝑓<sub>𝑅𝐸𝐺</sub> = <font style=\"color: rgb(51,102,255);\">𝑑𝑓<sub>𝑇𝑂𝑇</sub></font> - <font style=\"color: rgb(255,0,0);\">𝑑𝑓<sub>𝐸𝑅𝑅</sub></font>\n𝑑𝑓<sub>𝑅𝐸𝐺</sub> = (𝑛 - 1) - (𝑛 - \\# of model params)\n𝑑𝑓<sub>𝑅𝐸𝐺</sub> = (\\# of model params) - 1\n𝑑𝑓<sub>𝑅𝐸𝐺</sub> = 𝑘 = <font style=\"color: rgb(0,128,0);\">number of predictor variables 𝜃<sub>𝑖</sub>'s excluding 𝜃<sub>0</sub></font>",
        "bg": "#e3fcef"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">𝑀𝑆<sub>𝑅𝐸𝐺</sub> = 𝑆𝑆<sub>𝑅𝐸𝐺</sub> / 𝑑𝑓<sub>𝑅𝐸𝐺</sub></font>",
        "bg": "#e3fcef"
      }
    ]
  ],
  "tableStyle": "width: 99.9848%;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "𝐹 statistic for testing the null hypothesis that <strong>ALL</strong> variables are insignificant (e.g. 𝐻<sub>0</sub>: 𝜃<sub>1</sub>= ... 𝜃<sub>𝑘</sub> = 0)",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹 statistic for testing the null hypothesis that <strong>SOME</strong> variables are insignificant (e.g. 𝐻<sub>0</sub>: 𝜃<sub>𝑖</sub>= 0, ∀𝜃<sub>𝑖</sub>∊𝑆 where 𝑆⊆{𝜃<sub>1</sub>, ... 𝜃<sub>𝑘</sub>})",
        "bg": "#F4F5F7"
      }
    ],
    [
      "unrestricted model\n- 𝑦̂<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub> = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>\n\nrestricted model\n- 𝑦̂<sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub> = 𝜃<sub>0</sub>+ 0·𝑥<sub>1</sub> + ... + 0·𝑥<sub>𝑘</sub>= 𝜃<sub>0</sub> = 𝑦̅\n\n𝐹 sum of squares form\n- 𝐹 = <font style=\"color: rgb(0,128,0);\">𝑀𝑆<sub>𝑅𝐸𝐺</sub></font>/ <font style=\"color: rgb(255,0,0);\">𝑀𝑆<sub>𝐸𝑅𝑅</sub></font>\n- 𝐹 = <font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(0,128,0);\"><strong>\\[(</strong></font>𝑆𝑆<sub>𝑇𝑂𝑇</sub><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(51,102,255);\"><sub></sub></font></font><font style=\"color: rgb(0,128,0);\">- </font><font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝐸𝑅𝑅</sub></font><font style=\"color: rgb(0,128,0);\"><strong>)/(</strong><font style=\"color: rgb(51,102,255);\">(𝑛 - 1)</font>-</font><font style=\"color: rgb(255,0,0);\">(𝑛 - 𝑘 - 1)</font><font style=\"color: rgb(0,128,0);\"><strong>)\\]</strong></font></font> / <font style=\"color: rgb(255,0,0);\">\\[(𝑆𝑆<sub>𝐸𝑅𝑅</sub>)/(𝑛 - 𝑘 - 1)\\]</font>\n- 𝐹 = <font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(0,128,0);\"><strong>\\[(</strong><font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑇𝑂𝑇</sub></font></font><font style=\"color: rgb(0,128,0);\">- </font><font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝐸𝑅𝑅</sub></font><font style=\"color: rgb(0,128,0);\"><strong>)/(</strong></font><font style=\"color: rgb(128,128,0);\"><font style=\"color: rgb(255,0,0);\">𝑘</font><font style=\"color: rgb(0,128,0);\"><strong>)\\]</strong></font></font></font> / <font style=\"color: rgb(255,0,0);\">\\[(𝑆𝑆<sub>𝐸𝑅𝑅</sub>)/(𝑛 - 𝑘 - 1)\\]</font>\n- 𝐹 = <font style=\"color: rgb(0,128,0);\"><strong>\\[(</strong></font><font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub><font style=\"color: rgb(0,128,0);\">-</font> <font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub></font><font style=\"color: rgb(0,128,0);\"><strong>)/(</strong></font><font style=\"color: rgb(128,128,0);\"><font style=\"color: rgb(255,0,0);\">𝑘</font><font style=\"color: rgb(0,128,0);\"><strong>)\\]</strong></font></font></font> / <font style=\"color: rgb(255,0,0);\">\\[(𝑆𝑆<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>)/(𝑛 - 𝑘 - 1)\\]</font>\n\n𝐹 𝑅<sup>2</sup> form\n- 𝐹 = <font style=\"color: rgb(153,204,0);\">\\[𝑅<sup>2</sup><sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>/𝑘\\]</font> /<font style=\"color: rgb(255,102,0);\"> <font style=\"color: rgb(153,204,0);\">\\[(1 - 𝑅<sup>2</sup><sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>)/(𝑛 - 𝑘 - 1)\\]</font></font>",
      "unrestricted model\n- 𝑦̂<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub> = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>𝑥<sub>𝑘</sub>\n\nrestricted model\n- 𝑦̂<sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub> = 𝜃<sub>0</sub> + (linear combination of 0·𝑥<sub>𝑖</sub> for 𝜃<sub>𝑖</sub>∊𝑆) + (linear combination of 𝜃<sub>𝑗</sub>𝑥<sub>𝑗</sub> for 𝜃<sub>𝑗</sub>∉𝑆)\n- 𝑦̂<sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub> = 𝜃<sub>0</sub> + (linear combination of 𝜃<sub>𝑗</sub>𝑥<sub>𝑗</sub> for 𝜃<sub>𝑗</sub>∉𝑆)\n\n𝐹 sum of squares form\n- 𝐹 = <font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(0,128,0);\"><strong>\\[(</strong><font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub></font></font><font style=\"color: rgb(0,128,0);\"> -</font> <font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub></font><font style=\"color: rgb(0,128,0);\"><strong>)/(</strong><font style=\"color: rgb(51,102,255);\">(𝑛 - (𝑘-<font style=\"color: rgb(0,128,0);\">|𝑆|</font>) - 1)-</font></font><font style=\"color: rgb(255,0,0);\">(𝑛 - 𝑘 - 1)</font><font style=\"color: rgb(0,128,0);\"><strong>)\\]</strong></font></font> / <font style=\"color: rgb(255,0,0);\">\\[(𝑆𝑆<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>)/(𝑛 - 𝑘 - 1)\\]</font>\n- 𝐹 = <font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(0,128,0);\"><strong>\\[(</strong><font style=\"color: rgb(51,102,255);\">𝑆𝑆<sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub></font></font><font style=\"color: rgb(0,128,0);\"> -</font> <font style=\"color: rgb(255,0,0);\">𝑆𝑆<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub></font><font style=\"color: rgb(0,128,0);\"><strong>)/(</strong>|𝑆|<strong>)\\]</strong></font></font> / <font style=\"color: rgb(255,0,0);\">\\[(𝑆𝑆<sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>)/(𝑛 - 𝑘 - 1)\\]</font>\n\n𝐹 𝑅<sup>2</sup> form\n- 𝐹 = <font style=\"color: rgb(153,204,0);\">\\[(𝑅<sup>2</sup><sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>- 𝑅<sup>2</sup><sub>𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>)/(|𝑆|)\\]</font> / <font style=\"color: rgb(153,204,0);\">\\[(1 - 𝑅<sup>2</sup><sub>𝑢𝑛𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡𝑒𝑑</sub>)/(𝑛 - 𝑘 - 1)\\]</font>"
    ],
    [
      {
        "content": "𝐹 has [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-distribution]] with parameters (𝑘, (𝑛 - 𝑘 - 1))",
        "align": "center"
      },
      {
        "content": "𝐹 has [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-distribution]] with parameters (|𝑆|, (𝑛 - 𝑘 - 1))",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;letter-spacing: 0.0px;"
}
```
````
^excerpt
