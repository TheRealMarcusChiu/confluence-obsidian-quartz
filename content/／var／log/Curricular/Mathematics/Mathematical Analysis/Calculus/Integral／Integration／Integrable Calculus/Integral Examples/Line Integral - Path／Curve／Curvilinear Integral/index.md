---
title: "Line Integral - Path／Curve／Curvilinear Integral"
created: 2023-12-18T11:28:20.080-06:00
modified: 2023-12-18T12:20:48.618-06:00
parent: "[[Integral Examples]]"
children: []
---
###### Line Integral - Path/Curve/Curvilinear Integral
````excerpt
- is an [[Integral／Integration／Integrable Calculus|integral]] where the [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|function]] to be integrated is evaluated along a curve
- the function to be integrated may be a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]] or a [[Vector-Valued Functions - Vector Fields|vector-valued function]]
````
^excerpt

# Line Integral of a Scalar-Valued Function

For some scalar-valued function 𝑓: ℝ<sup>𝑛</sup> → ℝ, the line integral along a [piecewise smooth](https://en.wikipedia.org/wiki/Piecewise_smooth)[curve](https://en.wikipedia.org/wiki/Curve) 𝐶⊂ℝ<sup>𝑛</sup> is defined as:
- $\int_C f(𝐫)ds = \int_a^b f(𝐫(t)) |𝐫'(t)| dt$

where:
- 𝐫: \[𝑎,𝑏\] → 𝐶 is an arbitrary [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|bijective]][parametrization](https://en.wikipedia.org/wiki/Parametric_equation) of the curve 𝐶 such that 𝐫(𝑎) and 𝐫(𝑏) give the endpoints of 𝐶 and 𝑎\<𝑏
- 𝑑𝑠 may be interpreted as an elementary arc length of curve 𝐶
```merge-table
{
  "rows": [
    [
      {
        "content": "2D",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\int_a^b f(x,y) \\sqrt{(\\frac{dx}{dt})^2 + (\\frac{dy}{dt})^2} dt$"
    ],
    [
      {
        "content": "3D",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- $\\int_a^b f(x,y,z) \\sqrt{(\\frac{dx}{dt})^2 + (\\frac{dy}{dt})^2 + (\\frac{dz}{dt})^2} dt$"
    ]
  ]
}
```

> [!expand-ui]- 2D Example
> ![[Line Integral - Path／Curve／Curvilinear Integral/Line_integral_of_scalar_field.gif]]
>
> The line integral over a scalar-valued function 𝑓 can be thought of as the area under the curve 𝐶 along a surface 𝑧 = 𝑓(𝑥,𝑦), described by the field
# Line Integral of a Vector-Valued Function

For some vector-valued function 𝑓: ℝ<sup>𝑛</sup> → ℝ<sup>𝑛</sup>, the line integral along a [piecewise smooth](https://en.wikipedia.org/wiki/Piecewise_smooth)[curve](https://en.wikipedia.org/wiki/Curve) 𝐶⊂ℝ<sup>𝑛</sup> in direction 𝑟 is defined as:
- $\int_C f(𝐫)d𝐫 = \int_a^b f(𝐫(t))·|𝐫'(t)| dt$

where:
- 𝑟 represents the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]]

# Resources
- [https://www.youtube.com/watch?v=Tz14rC0XvHI](https://www.youtube.com/watch?v=Tz14rC0XvHI)
