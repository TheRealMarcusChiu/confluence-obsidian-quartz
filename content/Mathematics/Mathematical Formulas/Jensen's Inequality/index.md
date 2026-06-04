---
title: "Jensen's Inequality"
created: 2021-11-05T18:43:29.566-05:00
modified: 2024-01-24T00:30:26.515-06:00
parent: "[[Mathematical Formulas]]"
children: []
---
###### Jensen's Inequality
- relates the value of a [[Convex Function - Concave Function|convex function]] of an integral to the [[Integral／Integration／Integrable Calculus|integral]] of the convex function

# Statement

Given a [[Convex Function - Concave Function|convex function]] 𝑓 and a [[Random Variables (RV)|random variable]] 𝑋, then:
- 𝑓(𝐄\[𝑋\]) ≤ 𝐄\[𝑓(𝑋)\]

as the number of samples of 𝑋 approaches infinity
# Visualization

```merge-table
{
  "rows": [
    [
      {
        "content": "When 𝑓 is a Straight Line",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "When 𝑓 is a Convex Function",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- 𝑓(𝐄\\[𝑋\\]) = 𝐄\\[𝑓(𝑋)\\]\n\n![[Jensen's Inequality/jensens-inequality-1.png]]",
      "- 𝑓(𝐄\\[𝑋\\]) \\< 𝐄\\[𝑓(𝑋)\\]\n\n![[Jensen's Inequality/jensens-inequality-2.png]]"
    ]
  ]
}
```
# Resources

![](https://www.youtube.com/watch?v=u0_X2hX6DWE)
