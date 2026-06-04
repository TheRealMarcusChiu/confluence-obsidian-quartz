---
title: "Limits - Limit of a Function"
created: 2023-08-08T15:43:20.535-05:00
modified: 2023-08-08T16:11:23.387-05:00
parent: "[[Calculus Foundational Knowledge]]"
children: []
---
###### Limits - Limit of a Function
````excerpt
- limits describe how a [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|function]] behaves near a point, instead of at that point
````
^excerpt

# Limits - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Function",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Graph",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Limits",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "$f(x) = \\begin{cases} \\frac{1}{x}        & x \\leq 2 \\\\ \\frac{1}{5(x-4)^2} & 2 < x \\\\ \\end{cases}$",
      "![[Limits - Limit of a Function/limits-0.png|301]]",
      "- $\\lim_{x \\to 1} f(x) = 1$\n- $\\lim_{x \\to 0} f(x) = \\text{undefined}$\n- $\\lim_{x \\to 4} f(x) = \\text{undefined or +∞}$\n- $\\lim_{x \\to 0^+} f(x) = \\text{undefined or +∞}$\n- $\\lim_{x \\to 0^-} f(x) = \\text{undefined or -∞}$\n- $\\lim_{x \\to 2} f(x) = \\text{undefined}$\n- $\\lim_{x \\to 2^-} f(x) = \\frac{1}{2}$\n- $\\lim_{x \\to 2^+} f(x) = \\frac{1}{20}$"
    ],
    [
      "$f(x) = \\frac{x - 1}{x - 1}$",
      "![[Limits - Limit of a Function/limits-1.png|301]]",
      "- $\\lim_{x \\to 1} f(x) = 1$\n- $f(1) = \\text{undefined}$"
    ]
  ]
}
```
# Limits - Properties
- $\lim_{x \to c}(f(x) + g(x)) = \lim_{x \to c}f(x) + \lim_{x \to c}g(x)$
- $\lim_{x \to c}(f(x) - g(x)) = \lim_{x \to c}f(x) - \lim_{x \to c}g(x)$
- $\lim_{x \to c}(f(x)·g(x)) = \lim_{x \to c}f(x) · \lim_{x \to c}g(x)$
- $\lim_{x \to c}(f(x)/g(x)) = \lim_{x \to c}f(x) / \lim_{x \to c}g(x)$
- $\lim_{x \to c}(f(x)^{p}) = (\lim_{x \to c}f(x))^p$
