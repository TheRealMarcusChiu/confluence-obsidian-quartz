---
title: "Dispersion／Variation"
created: 2021-09-13T05:28:50.256-05:00
modified: 2023-10-23T14:22:01.447-05:00
parent: "[[Quantitative／Numerical Univariate Analysis Descriptive Statistics]]"
children:
  - "[[Central Tendency of Deviation]]"
  - "[[Coefficient of Variation (CV) - Normalized Root-Mean-Square Deviation - Percent RMS - Relative Standard Deviation]]"
  - "[[Deviation／Dispersion／Variation of Distances]]"
  - "[[Maximum／Max - Minimum／Min]]"
  - "[[Range]]"
  - "[[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)]]"
  - "[[Upper Bound - Lower Bound]]"
  - "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)]]"
  - "[[p-Quantiles (Median - Quartiles - Percentiles)]]"
---
###### Dispersion/Variation
````excerpt
- is a type of [[Quantitative／Numerical Univariate Analysis Descriptive Statistics|Quantitative/Numerical Univariate Analysis Descriptive Statistics]]
- answers: how do the values vary?
````
^excerpt

# Dispersion/Variation - Types
````excerpt
```merge-table
{
  "rows": [
    [
      {
        "content": "Statistic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "population parameter notation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "sample statistic notation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|Variance]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜎<sup>2</sup>",
        "align": "center"
      },
      {
        "content": "𝜎̂<sup>2</sup>or 𝑠<sup>2</sup>",
        "align": "center"
      },
      "- measures how far a set of numbers are spread out from their average value\n- calculation of variance uses squares because it weights outliers more heavily than data very near the mean. This calculation also prevents differences above the mean from canceling out those below, which can sometimes result in a variance of zero"
    ],
    [
      {
        "content": "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|Standard Deviation]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜎",
        "align": "center"
      },
      {
        "content": "𝜎̂ or 𝑠",
        "align": "center"
      },
      "- measures how far a set of numbers are spread out from their average value\n- brings variance back to the original unit of data"
    ],
    [
      {
        "content": "[[p-Quantiles (Median - Quartiles - Percentiles)|p-Quantiles]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑞<sub>𝑝</sub>",
        "align": "center"
      },
      {
        "content": "𝑞̂<sub>𝑝</sub>",
        "align": "center"
      },
      "- generalizes [[Median (2-Quantile - 50th Percentile)|median]] from 0.5 to a range \\[0,1\\]\n- quantiles are cut points dividing the range of a [[Probability Distributions|probability distribution]] into continuous intervals with equal probabilities\n- variants: [[Median (2-Quantile - 50th Percentile)|median]], [[Quartiles (4-Quantile)|quartiles]], [[Percentiles (100-Quantile)|percentile]], etc"
    ],
    [
      {
        "content": "[[Coefficient of Variation (CV) - Normalized Root-Mean-Square Deviation - Percent RMS - Relative Standard Deviation|Coefficient of Variation]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      },
      "- TODO"
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
        "content": "[[Maximum／Max - Minimum／Min|Max]]\n[[Maximum／Max - Minimum／Min|Min]]",
        "bg": "#F4F5F7"
      },
      "- For a subset 𝑆 of [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], 𝑠̃∊𝑆 is called the <em>max</em> of 𝑆 if: ∀𝑠∊𝑆: 𝑠≤𝑠̃\n- For a subset 𝑆 of [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], 𝑠̃∊𝑆 is called the <em>min</em> of 𝑆 if: ∀𝑠∊𝑆: 𝑠≥𝑠̃",
      {
        "content": "![[Dispersion／Variation/supremum-infimum.png|463x250]]",
        "rowspan": 4
      }
    ],
    [
      {
        "content": "[[Upper Bound - Lower Bound|Upper Bound]]\n[[Upper Bound - Lower Bound|Lower Bound]]",
        "bg": "#F4F5F7"
      },
      "- For a subset 𝑆 of [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], 𝑠̃∊𝐹 is called an <em>upper bound</em> of 𝑆 if: ∀𝑠∊𝑆: 𝑠≤𝑠̃\n- For a subset 𝑆 of [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], 𝑠̃∊𝐹 is called a <em>lower bound</em> of 𝑆 if: ∀𝑠∊𝑆: 𝑠≥𝑠̃"
    ],
    [
      {
        "content": "[[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)|Supremum]]\n[[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)|Infimum]]",
        "bg": "#F4F5F7"
      },
      "- For a subset 𝑆 of [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], 𝑠̃∊𝐹 is called the <em>supremum</em> of 𝑆 if:\n\t- 𝑠̃ is an <em>upper bound</em> of 𝑆\n\t- 𝑠̃≤𝑠 for any other <em>upper bound</em> 𝑠∊𝑆\n- For a subset 𝑆 of [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], 𝑠̃∊𝐹 is called the <em>infimum</em> of 𝑆 if:\n\t- 𝑠̃ is a <em>lower bound</em> of 𝑆\n\t- 𝑠̃≥𝑠 for any other <em>lower bound</em> 𝑠∊𝑆"
    ],
    [
      {
        "content": "[[Range]]",
        "bg": "#F4F5F7"
      },
      "- range = <em>max</em> - <em>min</em>"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "### Statistics Involving Distances",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Central Tendency of Deviation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Mode Deviation]]",
        "bg": "#F4F5F7"
      },
      "- is the most occurring distance between each data point and the mean"
    ],
    [
      {
        "content": "[[Median Deviation]]",
        "bg": "#F4F5F7"
      },
      "- is the middle distance between each data point and the mean"
    ],
    [
      {
        "content": "[[Deviation／Dispersion／Variation of Distances|Variation of Distances]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Distance Variance／Variation|Distance Variance/Variation]]",
        "bg": "#F4F5F7"
      },
      "- is the variance of the distances between each data point"
    ]
  ]
}
```
````
^excerpt
