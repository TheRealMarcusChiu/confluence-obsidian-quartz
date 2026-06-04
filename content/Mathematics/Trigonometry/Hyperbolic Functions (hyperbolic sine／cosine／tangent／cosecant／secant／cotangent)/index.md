---
title: "Hyperbolic Functions (hyperbolic sine／cosine／tangent／cosecant／secant／cotangent)"
created: 2023-07-08T14:57:42.551-05:00
modified: 2023-07-14T15:27:53.349-05:00
parent: "[[Trigonometry]]"
children: []
---
###### Hyperbolic Functions (hyperbolic sine/cosine/tangent/cosecant/secant/cotangent)
````excerpt
- are analogs of the ordinary [[Trigonometric／Circular／Angle／Goniometric Functions (sine - cosine - tangent - cosecant - secant - cotangent)|trigonometric functions]], but defined using the hyperbola rather than the circle
- just as the points (𝑐𝑜𝑠 𝑥, 𝑠𝑖𝑛 𝑥) form a circle with a unit radius, the points (𝑐𝑜𝑠ℎ 𝑥, 𝑠𝑖𝑛ℎ 𝑥) form the right half of the unit hyperbola
````
^excerpt

# Hyperbolic Functions - Definitions in Exponentials

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
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Complex Trigonometric Definitions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Derivative",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Hyperbolic Sine",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑠𝑖𝑛ℎ(𝑥)",
      "$sinh(x) = \\frac{e^x - e^{-x}}{2} = \\frac{e^{2x} - 1}{2e^x} = \\frac{1 - e^{-2x}}{2e^{-x}}$",
      "$sinh(x) = -i \\; sin(ix)$",
      "$sinh'(x) = cosh(x)$"
    ],
    [
      {
        "content": "Hyperbolic Cosine",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑐𝑜𝑠ℎ(𝑥)",
      "$cosh(x) = \\frac{e^x + e^{-x}}{2} = \\frac{e^{2x} + 1}{2e^x} = \\frac{1 + e^{-2x}}{2e^{-x}}$",
      "$cosh(x) = cos(ix)$",
      "$cosh'(x) = sinh(x)$"
    ],
    [
      {
        "content": "Hyperbolic Tangent",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑡𝑎𝑛ℎ(𝑥)",
      "$tanh(x) = \\frac{sinh(x)}{cosh(x)} = \\frac{e^x - e^{-x}}{e^x + e^{-x}} = \\frac{e^{2x} - 1}{e^{2x} + 1}$",
      "$tanh(x) = -i \\; tan(ix)$",
      "$tanh'(x) = 1 - tanh^2(x) = sech^2(x)$"
    ],
    [
      {
        "content": "Hyperbolic Cotangent",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑐𝑜𝑡ℎ(𝑥)",
      "$coth(x) = \\frac{cosh(x)}{sinh(x)} = \\frac{e^x + e^{-x}}{e^x - e^{-x}} = \\frac{e^{2x} + 1}{e^{2x} - 1} \\quad \\text{for x ≠ 0}$",
      "$coth(x) = i \\; cot(ix)$",
      "$coth'(x) = -csch^2(x)$"
    ],
    [
      {
        "content": "Hyperbolic Secant",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑠𝑒𝑐ℎ(𝑥)",
      "$sech(x) = \\frac{1}{cosh(x)} = \\frac{2}{e^x + e^{-x}} = \\frac{2e^x}{e^{2x} + 1}$",
      "$sech(x) = sec(ix)$",
      "$sech'(x) = -sech(x) \\; tanh(x)$"
    ],
    [
      {
        "content": "Hyperbolic Cosecant",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑐𝑠𝑐ℎ(𝑥)",
      "$csch(x) = \\frac{1}{sinh(x)} = \\frac{2}{e^x - e^{-x}} = \\frac{2e^x}{e^{2x} - 1} \\quad \\text{for x ≠ 0}$",
      "$csch(x) = i \\; csc(ix)$",
      "$csch'(x) = -csch(x) \\; coth(x)$"
    ]
  ]
}
```
