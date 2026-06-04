---
title: "Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function"
created: 2021-09-13T05:28:56.203-05:00
modified: 2026-05-21T15:11:37.933-05:00
parent: "[[Quantitative／Numerical Univariate Analysis Descriptive Statistics]]"
children: []
---
###### Raw Moments - Moments About the Origin/Zero - Central/Mean Moments - Moments About The Mean - (Zeroth/First/Second/Third/Fourth/kth/nth) -  of a Probability Density Function
````excerpt
- are specific types of [[Moments／Moment (Mathematics)|moments]] of a [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|probability density function]]
````
^excerpt

# Definitions

```merge-table
{
  "rows": [
    [
      {
        "content": "Moment",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Raw(R) Moment\n(Moment about the origin/zero)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Central(C)/Mean(M) Moment\n(Moment about the mean 𝜇)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝑀𝑘",
        "bg": "#F4F5F7"
      },
      {
        "content": "- <strong>𝑘<sup>𝑡ℎ</sup> Raw Moment</strong>\n- 𝜇<sub>𝑘</sub>' = 𝐄\\[𝑋<sup>𝑘</sup>\\]",
        "bg": "#F4F5F7"
      },
      {
        "content": "- <strong>𝑘<sup>𝑡ℎ</sup> Central Moment</strong>|\n- 𝜇<sub>𝑘</sub> = 𝐄\\[(𝑋 - 𝜇)<sup>𝑘</sup>\\]",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝑀0",
        "bg": "#F4F5F7"
      },
      "- <strong>Zeroth Raw Moment</strong>\n- 𝜇<sub>0</sub>' = 𝐄\\[𝑋<sup>0</sup>\\] = 1",
      "- <strong>Zeroth Central Moment</strong>\n- 𝜇<sub>0</sub> = 𝐄\\[(𝑋 - 𝜇)<sup>0</sup>\\] = 1"
    ],
    [
      {
        "content": "𝑀1",
        "bg": "#F4F5F7"
      },
      "- <strong>First Raw Moment ([[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|Mean]])</strong>\n- 𝜇<sub>1</sub>' = 𝜇 = 𝐄\\[𝑋<sup>1</sup>\\] = 𝐄\\[𝑋\\]",
      "- <strong>First Central Moment</strong>\n- 𝜇<sub>1</sub> = 𝐄\\[(𝑋 - 𝜇)<sup>1</sup>\\] = 0"
    ],
    [
      {
        "content": "𝑀2",
        "bg": "#F4F5F7"
      },
      "- <strong>Second Raw Moment</strong>\n- 𝜇<sub>2</sub>' = 𝐄\\[𝑋<sup>2</sup>\\]",
      "- <strong>Second Central Moment ([[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|Variance]])</strong>\n- \n> [!expand]- 𝜇₂ = 𝐄[(𝑋 - 𝜇)²] = 𝐄[𝑋²] - 𝜇²\n> - 𝜇<sub>2</sub> = 𝐄\\[(𝑋 - 𝜇)<sup>2</sup>\\]\n> - 𝜇<sub>2</sub>= 𝐄\\[𝑋<sup>2</sup> - 2𝜇𝑋 + 𝜇<sup>2</sup>\\]\n> - 𝜇<sub>2</sub> = 𝐄\\[𝑋<sup>2</sup>\\] - 𝐄\\[2𝜇𝑋\\] + 𝐄\\[𝜇<sup>2</sup>\\]\n> - 𝜇<sub>2</sub> = 𝐄\\[𝑋<sup>2</sup>\\] - 2𝜇𝐄\\[𝑋\\] + 𝜇<sup>2</sup>\n> - 𝜇<sub>2</sub> = 𝐄\\[𝑋<sup>2</sup>\\] - 2𝜇𝜇 + 𝜇<sup>2</sup>\n> - 𝜇<sub>2</sub> = 𝐄\\[𝑋<sup>2</sup>\\] - 𝜇<sup>2</sup>"
    ],
    [
      {
        "content": "𝑀3",
        "bg": "#F4F5F7"
      },
      "- <strong>Third Raw Moment</strong>\n- 𝜇<sub>3</sub>' = 𝐄\\[𝑋<sup>3</sup>\\]",
      "- <strong>Third Central Moment ([[Skewness]])</strong>\n- 𝜇<sub>3</sub> = 𝐄\\[(𝑋 - 𝜇)<sup>3</sup>\\]"
    ],
    [
      {
        "content": "𝑀4",
        "bg": "#F4F5F7"
      },
      "- <strong>Fourth Raw Moment</strong>\n- 𝜇<sub>4</sub>' = 𝐄\\[𝑋<sup>4</sup>\\]",
      "- <strong>Fourth Central Moment ([[Kurtosis]])</strong>\n- 𝜇<sub>4</sub> = 𝐄\\[(𝑋 - 𝜇)<sup>4</sup>\\]"
    ]
  ]
}
```
# Significance of moments (raw, central, normalized) and cumulants (raw, normalized), in connection with named properties of distributions

```merge-table
{
  "rows": [
    [
      {
        "content": "Moment\nordinal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Moment",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "[Cumulant](https://en.wikipedia.org/wiki/Cumulant)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Raw",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Central",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Standardized",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Raw",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Normalized",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "1",
      "Mean",
      "0",
      "0",
      "Mean",
      {
        "content": "—",
        "align": "center"
      }
    ],
    [
      "2",
      "–",
      "Variance",
      "1",
      "Variance",
      "1"
    ],
    [
      "3",
      "–",
      "–",
      "Skewness",
      "–",
      "Skewness"
    ],
    [
      "4",
      "–",
      "–",
      "(Non-excess or historical) kurtosis",
      "–",
      "[Excess kurtosis](https://en.wikipedia.org/wiki/Kurtosis#Excess_kurtosis)"
    ],
    [
      "5",
      "–",
      "–",
      "Hyperskewness",
      "–",
      "–"
    ],
    [
      "6",
      "–",
      "–",
      "Hypertailedness",
      "–",
      "–"
    ],
    [
      "7+",
      "–",
      "–",
      "–",
      "–",
      "–"
    ]
  ]
}
```
# Method of Estimating Moments

[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|Point Estimation]]:
- [[Method of Moments Estimation (MOME)]]

# Resources

![](https://www.youtube.com/watch?v=kqV3t2vwuRo)
