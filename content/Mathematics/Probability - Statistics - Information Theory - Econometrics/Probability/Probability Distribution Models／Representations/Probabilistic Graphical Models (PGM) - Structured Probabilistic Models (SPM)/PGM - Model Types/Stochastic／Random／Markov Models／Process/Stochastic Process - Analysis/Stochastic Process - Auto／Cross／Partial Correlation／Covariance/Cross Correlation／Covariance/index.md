---
title: "Cross Correlation／Covariance"
created: 2021-09-13T05:27:11.702-05:00
modified: 2021-09-13T05:27:11.702-05:00
parent: "[[Stochastic Process - Auto／Cross／Partial Correlation／Covariance]]"
children: []
---
<strong>cross correlation/covariance</strong>

We often need to study more than one random process. For example, when investing in the stock market you consider several different stocks and you are interested in how they are related. In particular, you might be interested in finding out whether two stocks are positively or negatively correlated. A useful idea in these situations is to look at cross-correlation and cross-covariance functions

```merge-table
{
  "rows": [
    [
      {
        "content": "###### Cross Correlation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Cross Covariance",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "suppose we have 2 [stochastic processes](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=10945897) {𝑋(𝑡), 𝑡∈𝐽} and {𝑌(𝑡), 𝑡∈𝐽} such that for <strong>EACH</strong> 𝑡∈𝐽 we have:\n𝑋(𝑡) a random variable at time 𝑡\n𝜇(𝑡) a mean of random variable 𝑋(𝑡) <font style=\"color: rgb(128,128,128);\">\\# expectation/mean function</font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "the <strong>cross correlation function</strong> between times 𝑖 and 𝑗 is:\n- 𝑅<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[𝑋(𝑖)·𝑋̅(𝑗)\\]\n\nwhere:\n- 𝑋̅(𝑗) is the complex conjugation",
      "the <strong>cross covariance function</strong> between times 𝑖 and 𝑗 is:\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐶𝑜𝑣(𝑋(𝑖),𝑋(𝑗))\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[(𝑋(𝑖)-𝜇(𝑖))(𝑋(𝑗)-𝜇(𝑗))\\]\n- 𝐶<sub>𝑋𝑋</sub>(𝑖,𝑗) = 𝐄\\[𝑋(𝑖)·𝑋̅(𝑗)\\] - 𝜇(𝑖)·𝜇̅(𝑗)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
