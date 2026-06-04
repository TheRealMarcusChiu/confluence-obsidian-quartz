---
title: "Marginal Probability Distribution"
created: 2021-09-13T05:27:15.735-05:00
modified: 2021-09-13T05:27:15.735-05:00
parent: "[[Probability Distributions]]"
children: []
---
````excerpt
<strong>[[Marginal Probability Distribution|marginal probability distribution]]</strong>
- is a [[Probability Distributions|probability distribution]] of n-1 variables formed by calculating the subset of a [[Multivariate Probability Distribution|multivariate probability distribution]] of n variables, the resulting probability distribution of n-1 variables can be either:
	- [[Univariate Probability Distribution|univariate probability distribution]] (1-dimensional probability distribution)
	- [[Multivariate Probability Distribution|multivariate probability distribution]] (multi-dimensional probability distribution)
````
^excerpt

### Discrete Marginal Probability Distribution
- 𝐏(𝑋) = ∑<sub>𝑦∊𝑌</sub> \[ 𝐏(𝑋, 𝑌=𝑦) \]
- 𝐏(𝑋, 𝑌) = ∑<sub>𝑧∊𝑍</sub> \[ 𝐏(𝑋, 𝑌, 𝑍=𝑧) \]
- 𝐏(𝑋) = ∑<sub>𝑧∊𝑍</sub> ∑<sub>𝑦∊𝑌</sub>\[ 𝐏(𝑋, 𝑌=𝑦, 𝑍=𝑧) \]

### Continuous Marginal Probability Distribution
- 𝐏(𝑋) = <sub>-∞</sub>∫<sup>∞</sup> 𝐏(𝑋, 𝑌) 𝑑𝑦
- 𝐏(𝑋, 𝑌) = <sub>-∞</sub>∫<sup>∞</sup> 𝐏(𝑋, 𝑌, 𝑍) 𝑑𝑧
- 𝐏(𝑋) = <sub>-∞</sub>∫<sup>∞</sup><sub></sub>\[ <sub>-∞</sub>∫<sup>∞</sup> 𝐏(𝑋, 𝑌, 𝑍) 𝑑𝑧 \] 𝑑𝑦

### Discrete Example <font style="color: rgb(0,0,255);">Joint PMF</font> to <font style="color: rgb(255,204,0);">Marginal PMF</font>

```merge-table
{
  "rows": [
    [
      {
        "content": "𝐏(𝑋, 𝑌)",
        "bg": "blue",
        "align": "center",
        "colspan": 2,
        "rowspan": 2
      },
      null,
      {
        "content": "𝑌",
        "bg": "blue",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null,
      {
        "content": "𝐏(𝑋)",
        "bg": "yellow",
        "align": "center",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "𝑦=0",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "𝑦=1",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "𝑦=2",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "𝑦=3",
        "bg": "blue",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝑋",
        "bg": "blue",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "𝑥=0",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.20",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.20",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.05",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.05",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.50",
        "bg": "yellow",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝑥=1",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.20",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.10",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.10",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.10",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "0.50",
        "bg": "yellow",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝐏(𝑌)",
        "bg": "yellow",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "0.40",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "0.30",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "0.15",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "0.15",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "1.00",
        "align": "center"
      }
    ]
  ]
}
```
- adding row-wise [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probabilities]] we get the marginal [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function]] 𝐏(𝑋)
- adding column-wise [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probabilities]] we get the marginal [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function]] 𝐏(𝑌)
