---
title: "Fisher Information - Fisher Information Matrix"
created: 2021-09-13T05:26:25.836-05:00
modified: 2025-11-14T19:34:47.840-06:00
parent: "[[Information Theory - Mathematical Theory of Communication - Telecommunications]]"
children:
  - "[[Fisher Information - Exponential Distribution]]"
  - "[[Fisher Information - Poisson Distribution]]"
  - "[[Fisher Information Matrix - Asymptotic Distribution of the Maximum Likelihood Estimate (MLE)]]"
  - "[[Fisher Information Matrix - Normal Distribution]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Fisher Information",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is a way of measuring the amount of information an observation of a random variable𝑋 has about an unknown [[Statistics - Terminology|parameter 𝜃]] of a parametric-distribution 𝐏(𝑋|𝜃) that models 𝑋 <font style=\"color: rgb(122,134,154);\">(note: 𝐿(𝑋|𝜃) = 𝐏(𝑋|𝜃))</font>"
    ],
    [
      {
        "content": "Fisher Information Matrix",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- generalizes the Fisher Information to a vector parameter <strong>𝜽</strong>"
    ]
  ],
  "tableStyle": "width: 100.0%;letter-spacing: 0.0px;"
}
```
# Fisher Information - Formulas

Fisher Information 𝐼(𝜃) is the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of the [[Likelihood Function - Log-Likelihood Function - Score Function|score function 𝑠(𝜃)]] (i.e. 𝑠(𝜃) = (𝛿/𝛿𝜃) 𝑙𝑜𝑔𝐿(𝑋|𝜃) = \[1/𝐿(𝑋|𝜃)\] · (𝛿/𝛿𝜃)𝐿(𝑋|𝜃))
- 𝐼(𝜃) = 𝑉𝑎𝑟<sub>\~𝑋</sub>\[𝑠(𝜃)\]
- 𝐼(𝜃) = 𝐄<sub>\~𝑋</sub>\[𝑠(𝜃)<sup>2</sup>\] - (𝐄<sub>\~𝑋</sub>\[𝑠(𝜃)\])<sup>2</sup>
- 𝐼(𝜃) = 𝐄<sub>\~𝑋</sub>\[𝑠(𝜃)<sup>2</sup>\] - 0 <font style="color: rgb(122,134,154);">\# 𝐄<sub>\~𝑋</sub>\[𝑠(𝜃)\] = 0 see section in </font>[[Likelihood Function - Log-Likelihood Function - Score Function|Score Function]]
```merge-table
{
  "rows": [
    [
      {
        "content": "1<sup>st</sup> formula",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝐼(𝜃) = 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜃)<sup>2</sup>\\]\n- 𝐼(𝜃) = 𝐄<sub>\\~𝑋</sub>\\[<strong>(</strong>(𝛿/𝛿𝜃) 𝑙𝑜𝑔𝐏(𝑋|𝜃)<strong>)</strong><sup>2</sup>\\]\n- 𝐼(𝜃) = 𝐄<sub>\\~𝑋</sub>\\[<strong>(</strong>(𝛿/𝛿𝜃) 𝑙𝑜𝑔𝐿(𝑋|𝜃)<strong>)</strong><sup>2</sup>\\] <font style=\"color: rgb(122,134,154);\">\\# where 𝑙𝑜𝑔𝐿 is the </font>[[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood-function]]"
    ],
    [
      {
        "content": "2<sup>nd</sup> formula",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝐼(𝜃) = - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\]\n- 𝐼(𝜃) = - 𝐄<sub>\\~𝑋</sub>\\[(𝛿<sup>2</sup>/𝛿𝜃<sup>2</sup>) 𝑙𝑜𝑔𝐏(𝑋|𝜃)\\]\n- 𝐼(𝜃) = - 𝐄<sub>\\~𝑋</sub>\\[(𝛿<sup>2</sup>/𝛿𝜃<sup>2</sup>) 𝑙𝑜𝑔𝐿(𝑋|𝜃)\\] <font style=\"color: rgb(122,134,154);\">\\# where 𝑙𝑜𝑔𝐿 is the </font>[[Likelihood Function - Log-Likelihood Function - Score Function|log-likelihood-function]]\n- \n> [!expand]- Click here to expand...\n> - (𝛿/𝛿𝜃) 𝑠(𝜃) = (𝛿/𝛿𝜃) \\[1/𝐿(𝑋|𝜃)\\] · (𝛿/𝛿𝜃)𝐿(𝑋|𝜃)\n> - (𝛿/𝛿𝜃) 𝑠(𝜃) = (𝛿/𝛿𝜃) \\[1/𝐏(𝑋|𝜃)\\] · (𝛿/𝛿𝜃)𝐏(𝑋|𝜃)\n> - (𝛿/𝛿𝜃) 𝑠(𝜃) = <font style=\"color: rgb(255,0,0);\"><strong>\\[</strong>\\[𝐏(𝑋|𝜃) · (𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(255,0,0);\">𝐏(𝑋|𝜃)\\] - \\[(𝛿/𝛿𝜃)𝐏(𝑋|𝜃) · (𝛿/𝛿𝜃)𝐏(𝑋|𝜃)\\]<strong>\\]</strong></font> / <font style=\"color: rgb(51,204,204);\"><strong>\\[</strong>𝐏(𝑋|𝜃)<sup>2</sup><strong>\\]</strong></font>\n> - (𝛿/𝛿𝜃) 𝑠(𝜃) = <font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong> </font>- <font style=\"color: rgb(255,102,0);\"><strong>\\[</strong>(𝛿/𝛿𝜃)𝐏(𝑋|𝜃) · (𝛿/𝛿𝜃)𝐏(𝑋|𝜃)\\]<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃) · 𝐏(𝑋|𝜃)<strong>\\]</strong></font>\n> - (𝛿/𝛿𝜃) 𝑠(𝜃) = <font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong> </font>- <font style=\"color: rgb(255,102,0);\"><strong>\\[</strong>𝑠(𝜃) ·𝑠(𝜃)<strong>\\]</strong></font>\n> - (𝛿/𝛿𝜃) 𝑠(𝜃) = <font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong> </font>- <font style=\"color: rgb(255,102,0);\">𝑠(𝜃)<sup>2</sup></font>\n>\n> take the expected value of both sides:\n> - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\] = 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong> </font>- <font style=\"color: rgb(255,102,0);\">𝑠(𝜃)<sup>2</sup></font>\\]\n> - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\] = 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] - 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(255,102,0);\">𝑠(𝜃)<sup>2</sup></font>\\]\n> - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\] = 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] - 𝐼(𝜃)\n> \t- 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] = ∫\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] 𝐏(𝑋|𝜃)𝑑𝑥\n> \t- 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] = ∫<font style=\"color: rgb(0,128,0);\">(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)</font>𝑑𝑥 <font style=\"color: rgb(122,134,154);\">\\# via dominant convergence theorem</font>\n> \t- 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] = <font style=\"color: rgb(0,128,0);\">(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font>∫<font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)</font>𝑑𝑥\n> \t- 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] = <font style=\"color: rgb(0,128,0);\">(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font>\\[1\\] <font style=\"color: rgb(122,134,154);\">\\# </font><font style=\"color: rgb(122,134,154);\">∫𝐏(𝑋|𝜃)𝑑𝑥 = 1 via property of [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|PDF]]</font>\n> \t- 𝐄<sub>\\~𝑋</sub>\\[<font style=\"color: rgb(0,128,0);\"><strong>\\[</strong>(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃)</font><font style=\"color: rgb(0,128,0);\">𝐏(𝑋|𝜃)<strong>\\]</strong> / <strong>\\[</strong>𝐏(𝑋|𝜃)<strong>\\]</strong></font>\\] = 0\n> - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\] = 0 - 𝐼(𝜃)\n> - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\] = 0 - 𝐼(𝜃)\n> - 𝐼(𝜃) = - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) 𝑠(𝜃)\\]\n> - 𝐼(𝜃) = - 𝐄<sub>\\~𝑋</sub>\\[(𝛿/𝛿𝜃) (𝛿/𝛿𝜃) 𝑙𝑜𝑔𝐏(𝑋|𝜃)\\]\n> - 𝐼(𝜃) = - 𝐄<sub>\\~𝑋</sub>\\[(𝛿<sup>2</sup>/𝛿<sup>2</sup>𝜃) 𝑙𝑜𝑔𝐏(𝑋|𝜃)\\]"
    ]
  ]
}
```
# Fisher Information - Example Computations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Fisher Information - Resources
- [http://fisher-information.marcuschiu.com/](http://fisher-information.marcuschiu.com/)
- [https://www.youtube.com/watch?v=pneluWj-U-o](https://www.youtube.com/watch?v=pneluWj-U-o)
