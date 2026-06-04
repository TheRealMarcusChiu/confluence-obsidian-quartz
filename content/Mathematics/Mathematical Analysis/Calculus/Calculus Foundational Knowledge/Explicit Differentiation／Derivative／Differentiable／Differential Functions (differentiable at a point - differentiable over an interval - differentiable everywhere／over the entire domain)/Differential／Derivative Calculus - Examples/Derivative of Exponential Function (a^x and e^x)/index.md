---
title: "Derivative of Exponential Function (a^x and e^x)"
created: 2021-11-19T06:25:20.494-06:00
modified: 2023-08-27T23:47:53.943-05:00
parent: "[[Differential／Derivative Calculus - Examples]]"
children: []
---
###### Derivative of [[Power／Exponential Function|Power/Exponential Function]]
- derivative of 𝑎<sup>𝑥</sup> is 𝑎<sup>𝑥</sup>·𝑙𝑛(𝑎), where 𝑎 is a constant
- derivative of 𝑒<sup>𝑥</sup> is 𝑒<sup>𝑥</sup>·𝑙𝑛(𝑒)=𝑒<sup>𝑥</sup>, where 𝑒 is [[number e (Euler's number)|Euler's number]]

# Intuition

```merge-table
{
  "rows": [
    [
      "- $f(x) = 2^x$\n- $f'(x) = lim_{dx\\to0} \\frac{f(x+dx) - f(x)}{dx}$\n- $f'(x) = lim_{dx\\to0} \\frac{2^{x+dx} - 2^x}{dx}$\n- $f'(x) = lim_{dx\\to0} \\frac{2^x2^{dx} - 2^x}{dx}$\n- $f'(x) = 2^x · lim_{dx\\to0} \\frac{2^{dx} - 1}{dx}$\n- $f'(x) = 2^x · 0.69314718$\n- $f'(x) = 2^x · ln(2)$",
      "![](https://www.youtube.com/watch?v=m2MIpDrF7Es&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=5)"
    ]
  ]
}
```
