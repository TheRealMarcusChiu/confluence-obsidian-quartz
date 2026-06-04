---
title: "Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test"
created: 2021-09-13T05:29:08.869-05:00
modified: 2023-09-13T20:52:08.491-05:00
parent: "[[Pearson's Chi-Square Test]]"
children: []
---
###### Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test
- a type of [[Pearson's Chi-Square Test]] for independence
````excerpt
- tests whether 2 categorical variables are statistically independent
````
^excerpt

# Setup
count observations on two categorical variables 𝐴 and 𝐵 obtained from a sample of 𝑛 subjects. Suppose:
- the categories of 𝐴 are 𝑖 = 1, ..., 𝑎
- the categories of 𝐵 are 𝑗 = 1, ..., 𝑏

The data are arranged in a 𝑎×𝑏[[Confusion Matrix - Contingency Table (True／False Positives／Negatives - Type I／II／One／Two Error) - Micro／Macro Averaging|contingency table]]. Let 𝑂<sub>𝑖𝑗</sub> = observed count in (𝑖,𝑗)<sup>th</sup> cell

```merge-table
{
  "rows": [
    [
      {
        "content": "total=𝑛",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2,
        "rowspan": 2
      },
      null,
      {
        "content": "𝐵",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "...",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑏",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝐴",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 4
      },
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑂<sub>11</sub>",
      "𝑂<sub>12</sub>",
      "...",
      "𝑂<sub>1𝑏</sub>"
    ],
    [
      {
        "content": "2",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑂<sub>21</sub>",
      "𝑂<sub>22</sub>",
      "...",
      "𝑂<sub>2𝑏</sub>"
    ],
    [
      {
        "content": "...",
        "header": true,
        "bg": "#F4F5F7"
      },
      "...",
      "...",
      "𝑂<sub>𝑖𝑗</sub>",
      "..."
    ],
    [
      {
        "content": "𝑎",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑂<sub>𝑎1</sub>",
      "𝑂<sub>𝑎2</sub>",
      "...",
      "𝑂<sub>𝑎𝑏</sub>"
    ]
  ]
}
```
# Chi-Square Test Statistic For Independence

our hypothesis:
- <strong>null hypothesis</strong> 𝐻<sub>0</sub>:
	- variables 𝐴 and 𝐵 are statistically independent
- <strong>alternative hypothesis</strong> 𝐻<sub>1</sub>:
	- variables 𝐴 and 𝐵 are NOT statistically independent

To do a chi-square independence test, we compute:
- <em>𝜒</em>² = 𝛴<sub>1≤𝑖≤𝑎</sub>𝛴<sub>1≤𝑗≤𝑏</sub> \[(𝑂<sub>𝑖𝑗</sub> - 𝐸<sub>𝑖𝑗</sub>)<sup>2</sup> / 𝐸<sub>𝑖𝑗</sub>\]

now we need the expected counts 𝐸<sub>𝑖𝑗</sub> assuming that 𝐻<sub>0</sub> is true:
> [!tabs]
>
> === known 𝑝's
>
> 𝐸<sub>𝑖𝑗</sub>= 𝑝<sub>𝑖</sub>𝑝<sub>𝑗</sub>𝑛
>
> === unknown 𝑝's
>
> 𝐸<sub>𝑖𝑗</sub>= 𝑝<sub>𝑖,𝑜𝑏𝑠</sub>𝑝<sub>𝑗,𝑜𝑏𝑠</sub>𝑛
>
> where:
> - 𝑝<sub>𝑖,𝑜𝑏𝑠</sub> = (sum of row 𝑖) / 𝑛 = 𝛴<sub>1≤𝑗≤𝑏</sub>\[𝑂<sub>𝑖,𝑗</sub>/𝑛\] - fraction of observations of type 𝑖
> - 𝑝<sub>𝑗,𝑜𝑏𝑠</sub> = (sum of column 𝑗) / 𝑛 𝛴<sub>1≤𝑖≤𝑎</sub>\[𝑂<sub>𝑖,𝑗</sub>/𝑛\] - fraction of observations of type 𝑗

# Degrees of Freedom

Fitting the model of "independence" reduces the number of degrees of freedom by 𝑝:

> [!indent]
> 𝑝 = 𝑎 + 𝑏 − 1

The number of [[Degrees of Freedom (DoF - df)|degrees of freedom (𝑑𝑓)]] is equal to the number of cells <em>𝑎𝑏</em>, minus the reduction in degrees of freedom 𝑝, thus:

> [!indent]
> 𝑑𝑓 = 𝑎𝑏 − 𝑝
> 𝑑𝑓 = 𝑎𝑏 − (<em>𝑎</em> + <em>𝑏</em> − 1)
> 𝑑𝑓 = 𝑎𝑏 − <em>𝑎</em> − <em>𝑏</em> + 1
> 𝑑𝑓 = (<em>𝑎</em> − 1)(<em>𝑏</em> − 1)

# Example With R Code

> [!expand]- Click here to expand...
> The table below shows 695 children under 15 years of age are cross-classified according to ethnic group and hemoglobin level. Is hemoglobin level associated (related) to ethnicity?
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Observed Counts\n𝑂<sub>𝑖𝑗</sub>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2,
>         "rowspan": 2
>       },
>       null,
>       {
>         "content": "Hemoglobin Level (g/100ml)",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 5
>       },
>       null,
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "<9.0",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "9.0-9.9",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "≥10",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "total",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "proportion",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Ethnic Group",
>         "header": true,
>         "bg": "#F4F5F7",
>         "rowspan": 5
>       },
>       {
>         "content": "𝐴",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "20",
>         "bg": "blue"
>       },
>       {
>         "content": "100",
>         "bg": "blue"
>       },
>       {
>         "content": "80",
>         "bg": "blue"
>       },
>       {
>         "content": "200",
>         "bg": "yellow"
>       },
>       "200/695"
>     ],
>     [
>       {
>         "content": "𝐵",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "96",
>         "bg": "blue"
>       },
>       {
>         "content": "190",
>         "bg": "blue"
>       },
>       {
>         "content": "99",
>         "bg": "blue"
>       },
>       {
>         "content": "385",
>         "bg": "yellow"
>       },
>       "385/695"
>     ],
>     [
>       {
>         "content": "𝐶",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "10",
>         "bg": "blue"
>       },
>       {
>         "content": "30",
>         "bg": "blue"
>       },
>       {
>         "content": "70",
>         "bg": "blue"
>       },
>       {
>         "content": "110",
>         "bg": "yellow"
>       },
>       "110/695"
>     ],
>     [
>       {
>         "content": "total",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "126",
>         "bg": "yellow"
>       },
>       {
>         "content": "320",
>         "bg": "yellow"
>       },
>       {
>         "content": "249",
>         "bg": "yellow"
>       },
>       {
>         "content": "695",
>         "bg": "green"
>       },
>       ""
>     ],
>     [
>       {
>         "content": "proportion",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "126/695",
>       "320/695",
>       "249/695",
>       "",
>       ""
>     ]
>   ]
> }
> ```
>
> the expected counts for all cells
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Expected Counts\n𝐸<sub>𝑖𝑗</sub>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "<9.0",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "9.0-9.9",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "≥10",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "𝐴",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "36.26",
>         "bg": "blue"
>       },
>       {
>         "content": "92.09",
>         "bg": "blue"
>       },
>       {
>         "content": "71.65",
>         "bg": "blue"
>       }
>     ],
>     [
>       {
>         "content": "𝐵",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "69.80",
>         "bg": "blue"
>       },
>       {
>         "content": "177.27",
>         "bg": "blue"
>       },
>       {
>         "content": "137.94",
>         "bg": "blue"
>       }
>     ],
>     [
>       {
>         "content": "𝐶",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "19.94",
>         "bg": "blue"
>       },
>       {
>         "content": "50.56",
>         "bg": "blue"
>       },
>       {
>         "content": "39.41",
>         "bg": "blue"
>       }
>     ]
>   ]
> }
> ```
>
> next compute:
> - <em>𝜒</em>² = 𝛴<sub>1≤𝑖≤𝑎</sub>𝛴<sub>1≤𝑗≤𝑏</sub> \[(𝑂<sub>𝑖𝑗</sub> - 𝐸<sub>𝑖𝑗</sub>)<sup>2</sup> / 𝐸<sub>𝑖𝑗</sub>\]
>
> with degrees of freedom:
> - 𝑑𝑓 = (<em>𝑎</em> − 1)(<em>𝑏</em> − 1)
> - 𝑑𝑓 = (3 − 1)(3 − 1)
> - 𝑑𝑓 = 4
>
> ###### R Code
> ```
> x <- c(80, 100, 20, 99, 190, 96, 70, 30, 10)
> xmat <- matrix(x, byrow=T, ncol=3)
> xmat
>      [,1] [,2] [,3]
> [1,]   80  100   20
> [2,]   99  190   96
> [3,]   70   30   10
>
> chisq.test(xmat)
> 	Pearson's Chi-squared test
> data: xmat
> X-squared = 67.8015, df = 4, p-value = 6.606e-14
> ```
# Resources

![](https://www.youtube.com/watch?v=hpWdDmgsIRE&list=PL1328115D3D8A2566&index=63)
