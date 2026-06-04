---
title: "Instrumental Variable Estimate vs Ordinary Least Squares Estimate"
created: 2021-09-13T05:28:08.962-05:00
modified: 2021-09-13T05:28:08.962-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]]"
children: []
---
### Comparing [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|Bias/Unbiased]]
- IV Estimate is BIAS
- OLS Estimate is UNBIASED

### Comparing [[Estimator - Inductive Properties (Biasedness／Unbiasedness - Consistency／Consistent - Statistic Efficiency)|Consistency]]

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Instrumental Variables (IV) Estimator|IV Estimate]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Ordinary Least Squares (OLS)|OLS Estimate]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "assume we have a [[Univariate／Single-Variable／Simple Linear Regression Models|univariate linear model]] that accurately models the [[Population Distribution|population distribution]]:\n𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>",
        "colspan": 2
      },
      null
    ],
    [
      "IV Estimate Consistency definition:\n- 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = <font style=\"color: rgb(204,153,255);\">𝜃<sub>1</sub> + 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)\\]</font>\n\nproof\n\n> [!expand]- Click here to expand...\n> IV Estimate of 𝜃<sub>1</sub>definition (see [[Instrumental Variables (IV) Estimator|IV Estimator]]):\n> - 𝜃<sub>1</sub>ˆ<sub></sub>= 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n>\n> as 𝑛→∞ we have:\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>) / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n> \t- <font style=\"color: rgb(128,128,128);\">\\# because 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub></font>\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \\[𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝜃<sub>0</sub>) + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)\\] / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n> \t- <font style=\"color: rgb(128,128,128);\">\\# by</font> [properties of covariance](http://confluence.marcuschiu.com/display/NOT/Properties+of+Covariance)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \\[0 + 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)\\] / 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n> \t- <font style=\"color: rgb(128,128,128);\">\\# covariance with constant is 0</font>\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub>𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)/𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub> + 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub> + <font style=\"color: rgb(255,0,0);\">𝐶𝑜𝑟</font>(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/<font style=\"color: rgb(255,0,0);\">𝐶𝑜𝑟</font>(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)\\]\n> \t- <font style=\"color: rgb(128,128,128);\">\\# 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">) = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">) / \\[ 𝑆𝑡𝑑(𝑧<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">)·𝑆𝑡𝑑(</font><font style=\"color: rgb(128,128,128);\">𝑒</font><sub>𝑖</sub><font style=\"color: rgb(128,128,128);\">) \\]</font>\n> \t- <font style=\"color: rgb(128,128,128);\">\\# 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">)</font><font style=\"color: rgb(128,128,128);\"> \\[ 𝑆𝑡𝑑(𝑧<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">)·𝑆𝑡𝑑(</font><font style=\"color: rgb(128,128,128);\">𝑒<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">) \\]</font>\n> \t- <font style=\"color: rgb(128,128,128);\">\\# 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">) = 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">) / \\[ 𝑆𝑡𝑑(𝑧<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">)·𝑆𝑡𝑑(𝑥<sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">) \\]</font>\n> \t- <font style=\"color: rgb(128,128,128);\">\\# 𝐶𝑜𝑣(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) = 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) \\[ 𝑆𝑡𝑑(𝑧<sub>𝑖</sub>)·𝑆𝑡𝑑(𝑥<sub>𝑖</sub>) \\]</font>\n> - <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = <font style=\"color: rgb(204,153,255);\">𝜃<sub>1</sub> + 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)\\]</font></font></font>",
      "OLS Estimate Consistency definition:\n- 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = <font style=\"color: rgb(51,102,255);\">𝜃</font><sub>1</sub><font style=\"color: rgb(51,102,255);\"> + 𝐶𝑜𝑟(𝑥</font><sub>𝑖</sub><font style=\"color: rgb(51,102,255);\">,𝑒</font><sub>𝑖</sub><font style=\"color: rgb(51,102,255);\">)·\\[𝑆𝑡𝑑(𝑒</font><sub>𝑖</sub><font style=\"color: rgb(51,102,255);\">)/𝑆𝑡𝑑(𝑥</font><sub>𝑖</sub><font style=\"color: rgb(51,102,255);\">)\\]</font>\n\nproof\n\n> [!expand]- Click here to expand...\n> OLS Estimate of 𝜃<sub>1</sub> definition:\n> - 𝜃<sub>1</sub>ˆ<sub></sub>= 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝑆𝑎𝑚𝑝𝑙𝑒-𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n>\n> as 𝑛→∞ we have:\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>) / 𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n> \t- <font style=\"color: rgb(128,128,128);\">\\# because 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub></font>\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \\[𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝜃<sub>0</sub>) + 𝜃<sub>1</sub>𝑉𝑎𝑟(𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)\\] / 𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n> \t- <font style=\"color: rgb(128,128,128);\">\\# by </font>[properties of covariance](http://confluence.marcuschiu.com/display/NOT/Properties+of+Covariance)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = \\[0 + 𝜃<sub>1</sub>𝑉𝑎𝑟(𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)\\] / 𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n> \t- <font style=\"color: rgb(128,128,128);\">\\# covariance with constant is 0</font>\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub>𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)/𝑉𝑎𝑟(𝑥<sub>𝑖</sub>) + 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub> + 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝑉𝑎𝑟(𝑥<sub>𝑖</sub>)\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub> + 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)<sup>2</sup>\n> - 𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = 𝜃<sub>1</sub> + <font style=\"color: rgb(255,0,0);\">𝐶𝑜𝑟</font>(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)\\]\n> \t- <font style=\"color: rgb(128,128,128);\">\\# 𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) / \\[ 𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)·𝑆𝑡𝑑(𝑒<sub>𝑖</sub>) \\]</font>\n> \t- <font style=\"color: rgb(128,128,128);\">\\# 𝐶𝑜𝑣(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) \\[ 𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)·𝑆𝑡𝑑(𝑒<sub>𝑖</sub>) \\]</font>\n> - <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(51,51,51);\">𝑝𝑙𝑖𝑚<sub>𝑛→∞</sub>𝜃<sub>1</sub>ˆ = </font>𝜃<sub>1</sub> + 𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)\\]</font></font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(204,153,255);\">𝜃<sub>1</sub> + 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub></font><font style=\"color: rgb(204,153,255);\">)\\]</font> \\>=\\< 𝜃<sub>1</sub> + 𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)·\\[𝑆𝑡𝑑(𝑒<sub>𝑖</sub>)/𝑆𝑡𝑑(𝑥<sub>𝑖</sub>)\\]\n<font style=\"color: rgb(204,153,255);\">𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)/𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)</font> <font style=\"color: rgb(51,51,51);\">\\>=\\<</font> <font style=\"color: rgb(51,102,255);\">𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)</font>\n\n<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">if</font> 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub></font><font style=\"color: rgb(128,0,0);\">)</font>/<font style=\"color: rgb(255,102,0);\">𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub></font><font style=\"color: rgb(255,102,0);\">)</font> \\< <font style=\"color: rgb(0,128,0);\">𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>)</font> then CONSISTENCY of IV Estimate BETTER than OLS Estimate\n<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">if</font> 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub></font><font style=\"color: rgb(128,0,0);\">)</font>/<font style=\"color: rgb(255,102,0);\">𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub></font><font style=\"color: rgb(255,102,0);\">)</font> \\> <font style=\"color: rgb(0,128,0);\">𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) </font>then CONSISTENCY of OLS Estimate BETTER than IV Estimate\n\n<font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub></font></font><font style=\"color: rgb(51,51,51);\">(<font style=\"color: rgb(128,128,128);\">see section on instrumental variables at</font> [[Instrumental Variables (IV) Estimator|IV Estimator]])</font>\n𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub><font style=\"color: rgb(255,102,0);\">)<font style=\"color: rgb(51,51,51);\"> - how WEAK is the instrumental variable 𝑧<sub>𝑖</sub></font></font><font style=\"color: rgb(51,51,51);\">(</font><font style=\"color: rgb(128,128,128);\">see section on instrumental variables at</font> [[Instrumental Variables (IV) Estimator|IV Estimator]]<font style=\"color: rgb(51,51,51);\">)</font>𝐶𝑜𝑟(𝑥<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) - how strong [[Endogenous／Endogenic Variable - Exogenous／Exogenic Variable - Endogenous vs Exogeneity|endogeneity]] is",
        "align": "center",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### <strong>Resources</strong>

![](https://www.youtube.com/watch?v=7eNIeiRctEY&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=151&frags=wn&ab_channel=BenLambert)
