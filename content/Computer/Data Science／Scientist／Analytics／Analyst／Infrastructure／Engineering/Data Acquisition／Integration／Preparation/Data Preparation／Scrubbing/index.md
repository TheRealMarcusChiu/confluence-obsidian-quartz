---
title: "Data Preparation／Scrubbing"
created: 2020-04-22T01:07:24.553-05:00
modified: 2023-09-13T15:22:22.917-05:00
parent: "[[Data Acquisition／Integration／Preparation]]"
children:
  - "[[Data Preparation - Detecting Outliers]]"
  - "[[Data Preparation - Handling Missing Values]]"
  - "[[Data Preparation - Methods Transforming Data to Normal Distribution]]"
  - "[[Data Preparation - Standardization／Standardizing／Normalizing Data Variables ／ Min-Max／Mean／Z-Score Feature Normalization／Scaling]]"
---
###### Data Preparation/Scrubbing
````excerpt
- is the act of manipulating raw data into a form that can readily and accurately be analyzed
````
^excerpt

# Data Preparation - For Parametric Statistical Methods

[[(Parametric vs Non-Parametric) Statistical Methods／Procedures|Parametric Statistical Methods]] assume that the data has a known and specific distribution, often a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal/Gaussian Distribution]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Data Scrubbing Type",
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
        "content": "[[Normality Tests]]",
        "bg": "#F4F5F7"
      },
      "- testing whether sample-data has a normal distribution"
    ],
    [
      {
        "content": "[[Data Preparation - Methods Transforming Data to Normal Distribution|Transforming Data to Normal Distribution]]",
        "bg": "#F4F5F7"
      },
      "- transforming a data variable to take on a normal distribution"
    ]
  ]
}
```
# Data Preparation - Other

```merge-table
{
  "rows": [
    [
      {
        "content": "Data Scrubbing Type",
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
        "content": "[[Features - Feature Functions - Feature Engineering - Feature-Based Models|Feature Engineering]]",
        "bg": "#F4F5F7"
      },
      "is the process of using domain knowledge to extract features from raw data and creating feature functions"
    ],
    [
      {
        "content": "[[Data Preparation - Standardization／Standardizing／Normalizing Data Variables ／ Min-Max／Mean／Z-Score Feature Normalization／Scaling|Normalizing Data / Feature Scaling/Normalization]]",
        "bg": "#F4F5F7"
      },
      "given 𝒙 = {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>}\n- min-max normalization(𝑥ᵢ) = \\[𝑥ᵢ - 𝑚𝑖𝑛(𝒙)\\] / \\[𝑚𝑎𝑥(𝒙) - 𝑚𝑖𝑛(𝒙)\\]\n- mean normalization(𝑥ᵢ) = \\[𝑥ᵢ - 𝜇\\] / \\[𝑚𝑎𝑥(𝒙) - 𝑚𝑖𝑛(𝒙)\\]\n- z-score normalization(𝑥ᵢ) = \\[𝑥ᵢ - 𝜇\\] / 𝜎 <font style=\"color: rgb(128,128,128);\">\\# transform all variables to have same [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]</font>\n\nwhere:\n- 𝜇 - mean\n- 𝜎 - standard deviation"
    ],
    [
      {
        "content": "[[Data Preparation - Detecting Outliers|Detecting Outliers]]",
        "bg": "#F4F5F7"
      },
      "- removing and detecting outliers that skew the model"
    ],
    [
      {
        "content": "Discretization",
        "bg": "#F4F5F7"
      },
      "- divides the range of a continuous attribute into intervals\n- equal-width (distance) binning\n\t- 𝑏𝑖𝑛-𝑤𝑖𝑑𝑡ℎ = (𝑚𝑎𝑥 - 𝑚𝑖𝑛) / 𝐾\n- equal-depth (frequency) binning\n\t- divides the range intervals each containing the same number of data points\n- bottom-up binning\n\t- criteria such as entropy to characterize the purity of bins\n- clustering"
    ],
    [
      {
        "content": "[[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|Nominal & Ordinal]]",
        "bg": "#F4F5F7"
      },
      "sometimes we want to convert nominal and ordinal values to “continuous” values\n- nominal - values from an unordered set (colors, profession, etc.)\n- ordinal - values from an ordered set (rank, etc.)"
    ],
    [
      {
        "content": "Missing Data",
        "bg": "#F4F5F7"
      },
      "- Ignoring Instances with Unknown Feature Values\n- Most Common Feature Value\n- Mean substitution\n- Regression or Classification methods\n- Nearest-Neighbor Imputation\n- Treating Missing Feature Values as Special Values\n- Latent Variable Methods"
    ]
  ]
}
```
