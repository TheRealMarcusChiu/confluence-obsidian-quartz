---
title: "Univariate Probability Distribution"
created: 2021-09-13T05:27:22.010-05:00
modified: 2023-08-31T16:30:55.764-05:00
parent: "[[Probability Distributions]]"
children:
  - "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
  - "[[Probability Distribution - Density vs Mass]]"
  - "[[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)]]"
  - "[[Probability Distribution - Families]]"
  - "[[Probability Distribution - Theorems & Properties]]"
  - "[[Probability Distribution - UPD Comparisons]]"
  - "[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions]]"
---
````excerpt
<strong>[[Univariate Probability Distribution|univariate probability distribution]]</strong> (sometimes just called<strong> probability distribution</strong>)
- is a model that describes the probability of a random variable
- is essentially a "list" of all possible outcomes (of the random variable) along with their corresponding [[Probability|probability]] value
- a variety of phenomena can be described by relatively few families of probability distribution models
````
^excerpt

# UPD - [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|Various Function Forms]]

![[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions#^excerpt]]
# UPD - Modeling a Random Variable (Discrete or Continuous)

The univariate probability distribution of a random variable is either discrete or continuous:

```merge-table
{
  "rows": [
    [
      {
        "content": "Random Variable Type",
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
        "content": "discrete probability distribution\n\naka\n\n[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability mass function]]",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      "![[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)#^excerpt]]"
    ],
    [
      "- list of [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|Discrete Models (Probability Mass Functions)]]"
    ],
    [
      {
        "content": "continuous probability distribution\n\naka\n\n[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability density function]]",
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      "![[Probability Distribution - Continuous Functions／Models (Probability Density Functions)#^excerpt]]"
    ],
    [
      "- list of [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|Continuous Models (Probability Density Functions)]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

why [[Probability Distribution - Density vs Mass]]?
# Distribution Comparisons

see: [[Probability Distribution - UPD Comparisons]]
# Distribution Properties/Theorems/ Computing Variate Analysis Characteristics
```dataview
LIST
FROM ""
WHERE file.folder = [[Probability Distribution - Theorems & Properties]].file.folder + "/" + [[Probability Distribution - Theorems & Properties]].file.name
```

- [[Variate Analysis - Compilation & Comparisons]]

# Combining Multiple UPDs

see: [[Multivariate Probability Distribution]]
