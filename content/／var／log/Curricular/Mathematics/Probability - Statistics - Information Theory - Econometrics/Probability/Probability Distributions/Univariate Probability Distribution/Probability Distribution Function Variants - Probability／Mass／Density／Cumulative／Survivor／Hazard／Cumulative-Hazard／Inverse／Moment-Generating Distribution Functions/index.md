---
title: "Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions"
created: 2021-09-13T05:27:38.710-05:00
modified: 2023-09-09T14:03:52.650-05:00
parent: "[[Univariate Probability Distribution]]"
children:
  - "[[Hazard Probability Function]]"
  - "[[Moment-Generating Functions (MGF)]]"
---
````excerpt
- <strong><strong>probability distribution function (PDF)</strong></strong> - is a function used to describe the [[Univariate Probability Distribution|probability distribution]] of a random variable
	- <strong>probability mass function (PMF)</strong> - is a probability distribution function that describes a DISCRETE random variable
	- <strong>probability density function (PDF)</strong> - is a probability distribution function that describes a CONTINUOUS random variable
- <strong>cumulative distribution function (CDF)</strong> - is the integral of the probability distribution function
- <strong>reverse cumulative distribution function (RCDF) </strong>or<strong> survivor distribution function (SDF)</strong> -
- <strong>hazard distribution function (HDF)</strong> -
- <strong>cumulative hazard distribution function (CHDF)</strong> -
- <strong>quantile function </strong>or<strong> inverse cumulative distribution function (ICDF)</strong> -
- <strong>moment generating function (MGF)</strong> of 𝑋 -
````
^excerpt

# <strong>Probability Function Types</strong>

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Discrete Random Variable",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Continuous Random Variable",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Probability Distribution Function\n\n(𝑃𝐷𝐹)\n\nProbability Mass Function\n\nProbability Density Function",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "𝑃𝐷𝐹(𝑥) = 𝑃(𝑋=𝑥)\n\nexpresses the probability that the system fails AT time 𝑡",
        "colspan": 2
      },
      null
    ],
    [
      "- a Probability Distribution Function of a <font style=\"color: rgb(128,0,0);\"><strong>DISCRETE</strong></font> random variable is a <strong>Probability <font style=\"color: rgb(128,0,0);\">MASS</font> Function</strong>\n- a <strong>Probability Mass Function</strong> 𝑃𝐷𝐹(𝑥) has the following properties:\n\t- 0 ≤ 𝑃𝐷𝐹(𝑥) ≤ 1 for all 𝑥∊𝑋\n\t- 𝛴<sub>𝑥∊𝑋</sub>𝑃𝐷𝐹(𝑥) = 1",
      "- a Probability Distribution Function of a <font style=\"color: rgb(128,0,0);\"><strong>CONTINUOUS</strong></font> random variable is a<strong> Probability <font style=\"color: rgb(128,0,0);\">DENSITY</font> Function</strong>\n- a <strong>Probability Density F</strong><strong>unction</strong> 𝑃𝐷𝐹(𝑥) has the following properties:\n\t- 𝑃𝐷𝐹(𝑥) ≥ 0, for 𝑠𝑡𝑎𝑟𝑡 \\< 𝑥 \\< 𝑒𝑛𝑑\n\t- <sub>𝑠𝑡𝑎𝑟𝑡</sub>∫<sup>𝑒𝑛𝑑</sup>𝑃𝐷𝐹(𝑥)𝑑𝑥 = 1"
    ],
    [
      {
        "content": "Cumulative Distribution Function (𝐶𝐷𝐹)\n\nFailure Function",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "𝐶𝐷𝐹(𝑥) = 𝑃(𝑋≤𝑥)\n\nexpresses the probability that the system fails before time 𝑡",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "𝐶𝐷𝐹(𝑎) = 𝛴<sub>𝑠𝑡𝑎𝑟𝑡≤𝑥≤𝑎</sub>𝑃𝐷𝐹(𝑥)",
        "align": "center"
      },
      {
        "content": "𝐶𝐷𝐹(𝑎) = <sub>𝑠𝑡𝑎𝑟𝑡</sub>∫<sup>𝑎</sup>𝑃𝐷𝐹(𝑥)𝑑𝑥",
        "align": "center"
      }
    ],
    [
      {
        "content": "Reverse Cumulative Distribution Function (𝑅𝐶𝐷𝐹)\n\nSurvivor Distribution Function (𝑆𝐷𝐹)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "𝑅𝐶𝐷𝐹(𝑥) = 𝑃(𝑋≥𝑥)\n\nexpresses the probability that the system is still operational at time 𝑡",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "𝑅𝐶𝐷𝐹(𝑎) = 𝛴<sub>𝑎≤𝑥≤𝑒𝑛𝑑</sub>𝑃𝐷𝐹(𝑥)",
        "align": "center"
      },
      {
        "content": "𝑅𝐶𝐷𝐹(𝑎) = <sub>𝑎</sub>∫<sup>𝑒𝑛𝑑</sup>𝑃𝐷𝐹(𝑥)𝑑𝑥",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Hazard Probability Function|Hazard Probability Function (𝐻𝑃𝐹)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "𝐻𝑃𝐹(𝑥) = 𝑃𝐷𝐹(𝑥) / 𝑅𝐶𝐷𝐹(𝑥)\n\nexpresses risk that the system fails AT time 𝑡\ni.e. given that the system is still operational at time 𝑡, what is the probability it fails at time 𝑡",
        "colspan": 2
      },
      null
    ],
    [
      {
        "align": "center"
      },
      {
        "content": "<strong>∆𝑡 Dependent Hazard Function</strong>\n\n𝐻𝑃𝐹(𝑡, ∆𝑡) = 𝑃(𝑡 ≤ 𝑇 ≤ 𝑡 + ∆𝑡 | 𝑇 ≥ 𝑡)\n\n<strong>∆𝑡 Independent Hazard Function</strong>\n\n𝐻𝑃𝐹(t) = 𝑙𝑖𝑚<sub>∆𝑡→0</sub> \\[ 𝑃(𝑡 ≤ 𝑇 ≤ 𝑡 + ∆𝑡 | 𝑇 ≥ 𝑡) / ∆𝑡 \\]\n\n𝐻𝑃𝐹(𝑡) = 𝑃𝐷𝐹(𝑡) / ∫<sub>𝑡</sub><sup>∞</sup>𝑃𝐷𝐹(𝑡)𝑑𝑡",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>Cumulative Hazard Distribution Function (𝐶𝐻𝐷𝐹)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝐶𝐻𝐷𝐹(𝑥) = - 𝑙𝑛(𝑅𝐶𝐷𝐹(𝑥))",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>Inverse Cumulative Distribution Function (𝐼𝐶𝐷𝐹)</strong>\n\n<strong>Quantile Function</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝐼𝐶𝐷𝐹(𝑥) = 𝐶𝐷𝐹<sup>-1</sup>(𝑥)",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>[[Moment-Generating Functions (MGF)|Moment Generating Function (𝑀𝐺𝐹)]]</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑀𝐺𝐹(𝑡) = 𝐄\\[𝑒<sup>𝑡𝑋</sup>\\]",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# <strong>Probability Functions Conversions (Continuous)</strong>

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Cumulative Distribution Function\n\n𝐹(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Probability Density Function\n\n𝑓(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Survivor Function\n\n𝑆(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Hazard Probability Function|Hazard Function]]\n\n𝘩(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Cumulative Distribution Function\n\n𝐹(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "content": "∫<sub>-∞</sub><sup>𝑥</sup>𝑓(𝑥)𝑑𝑥",
        "align": "center"
      },
      {
        "content": "1 - 𝑆(𝑥)",
        "align": "center"
      },
      {
        "content": "1 - 𝑒<sup>\\[ -∫<sub>-∞</sub><sup>𝑥</sup>𝘩(𝑥)𝑑𝑥 \\]</sup>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Probability Density Function\n\n𝑓(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝐹'(𝑥)",
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "content": "-𝑆'(𝑥)",
        "align": "center"
      },
      {
        "content": "𝘩(𝑥) 𝑒<sup>\\[ -∫<sub>-∞</sub><sup>𝑥</sup>𝘩(𝑥)𝑑𝑥 \\]</sup>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Survivor Function\n\n𝑆(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1 - 𝐹(𝑥)",
        "align": "center"
      },
      {
        "content": "∫<sub>𝑥</sub><sup>∞</sup>𝑓(𝑥)𝑑𝑥",
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "content": "e <sup>\\[ -∫<sub>-∞</sub><sup>𝑥</sup>𝘩(𝑥)𝑑𝑥 \\]</sup>",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Hazard Probability Function|Hazard Function]]\n\n𝘩(𝑥)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝐹'(𝑥) / [1 - 𝐹(𝑥)]",
        "align": "center"
      },
      {
        "content": "𝑓(𝑥) / ∫<sub>𝑥</sub><sup>∞</sup>𝑓(𝑥)𝑑𝑥",
        "align": "center"
      },
      {
        "content": "-𝑆'(𝑥) / 𝑆(𝑥)",
        "align": "center"
      },
      {
        "align": "center"
      }
    ]
  ]
}
```
