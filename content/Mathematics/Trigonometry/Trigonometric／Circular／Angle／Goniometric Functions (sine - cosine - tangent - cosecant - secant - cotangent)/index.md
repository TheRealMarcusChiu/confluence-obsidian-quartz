---
title: "Trigonometric／Circular／Angle／Goniometric Functions (sine - cosine - tangent - cosecant - secant - cotangent)"
created: 2023-07-08T14:21:16.010-05:00
modified: 2023-08-24T17:52:31.299-05:00
parent: "[[Trigonometry]]"
children:
  - "[[Cosine Function]]"
  - "[[Sine Function]]"
---
###### Trigonometric/Circular/Angle/Goniometric Functions
- are real functions which relate an angle of a right-angled triangle to ratios of two side lengths
- an analog to [[Hyperbolic Functions (hyperbolic sine／cosine／tangent／cosecant／secant／cotangent)|hyperbolic functions]]

# Trigonometric Functions - Geometric View
````excerpt
Geometric view of [[Trigonometric／Circular／Angle／Goniometric Functions (sine - cosine - tangent - cosecant - secant - cotangent)|trigonometric functions]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Function",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2,
        "rowspan": 2
      },
      null,
      {
        "content": "Relationship",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Relationships",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Using Radians",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Using Degrees",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Sine Function|sine]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑠𝑖𝑛(𝜃)",
        "bg": "#F4F5F7"
      },
      "opposite / hypotenuse",
      "SOH",
      "if <font style=\"color: rgb(51,102,255);\">hypotenuse = 1</font>, then it's just <font style=\"color: rgb(255,0,0);\">opposite</font>",
      "$sin(𝜃) = cos(\\frac{𝜋}{2} - 𝜃) = \\frac{1}{csc(𝜃)}$",
      "$sin(x) = cos(90° - x) = \\frac{1}{csc(x)}$"
    ],
    [
      {
        "content": "[[Cosine Function|cosine]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑐𝑜𝑠(𝜃)",
        "bg": "#F4F5F7"
      },
      "adjacent / hypotenuse",
      "CAH",
      "if <font style=\"color: rgb(51,102,255);\">hypotenuse = 1</font>, then it's just <font style=\"color: rgb(153,204,0);\">adjacent</font>",
      "$cos(𝜃) = sin(\\frac{𝜋}{2} - 𝜃) = \\frac{1}{sec(𝜃)}$",
      "$cos(x) = sin(90° - x) = \\frac{1}{sec(x)}$"
    ],
    [
      {
        "content": "tangent",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑡𝑎𝑛(𝜃)",
        "bg": "#F4F5F7"
      },
      "opposite / adjacent",
      "TOA",
      "if <font style=\"color: rgb(51,102,255);\">adjacent = 1</font>, then it's just <font style=\"color: rgb(0,255,255);\">opposite</font>",
      "$tan(𝜃) = \\frac{sin(𝜃)}{cos(𝜃)} = cot(\\frac{𝜋}{2} - 𝜃) = \\frac{1}{cot(𝜃)}$",
      "$tan(x) = \\frac{sin(x)}{cos(x)} = cot(90° - x) = \\frac{1}{cot(x)}$"
    ],
    [
      {
        "content": "cosecant",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑐𝑠𝑐(𝜃)",
        "bg": "#F4F5F7"
      },
      "hypotenuse / opposite",
      "CO SEC HO",
      "if <font style=\"color: rgb(51,102,255);\">opposite = 1</font>, then it's just <font style=\"color: rgb(255,255,0);\">hypotenuse</font>",
      "$csc(𝜃) = sec(\\frac{𝜋}{2} - 𝜃) = \\frac{1}{sin(𝜃)}$",
      "$csc(x) = sec(90° - x) = \\frac{1}{sin(x)}$"
    ],
    [
      {
        "content": "secant",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑠𝑒𝑐(𝜃)",
        "bg": "#F4F5F7"
      },
      "hypotenuse / adjacent",
      "SEC HA",
      "if <font style=\"color: rgb(51,102,255);\">adjacent = 1</font>, then it's just <font style=\"color: rgb(255,0,255);\">hypotenuse</font>",
      "$sec(𝜃) = csc(\\frac{𝜋}{2} - 𝜃) = \\frac{1}{cos(𝜃)}$",
      "$sec(x) = csc(90° - x) = \\frac{1}{cos(x)}$"
    ],
    [
      {
        "content": "cotangent",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑐𝑜𝑡(𝜃)",
        "bg": "#F4F5F7"
      },
      "adjacent / opposite",
      "CO TAO",
      "if <font style=\"color: rgb(51,102,255);\">opposite = 1,</font> then it's just <font style=\"color: rgb(153,51,102);\">adjacent</font>",
      "$cot(𝜃) = \\frac{cos(𝜃)}{sin(𝜃)} = tan(\\frac{𝜋}{2} - 𝜃) = \\frac{1}{tan(𝜃)}$",
      "$cot(x) = \\frac{cos(x)}{sin(x)} = tan(90° - x) = \\frac{1}{tan(x)}$"
    ],
    [
      {
        "content": "cosine squared",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑐𝑜𝑠<sup>2</sup>(𝜃)",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑐𝑜𝑠<sup>2</sup>(𝜃) is running 𝑐𝑜𝑠(𝜃) twice. For example:\n- 𝑐𝑜𝑠(𝜃) = adjacent / hypotenuse\n- if hypotenuse = 𝑐𝑜𝑠(𝜃), then: 𝑐𝑜𝑠(𝜃) = adjacent / 𝑐𝑜𝑠(𝜃)\n- thus, <strong><font style=\"color: rgb(128,0,0);\">𝑐𝑜𝑠<sup>2</sup>(𝜃) = adjacent</font></strong>",
        "colspan": 2
      },
      null,
      "𝑐𝑜𝑠<sup>2</sup>(𝜃) is the area of the square with side 𝑐𝑜𝑠(𝜃)",
      {
        "content": "1 = 𝑠𝑖𝑛<sup>2</sup>(𝜃) + 𝑐𝑜𝑠<sup>2</sup>(𝜃)",
        "rowspan": 2
      },
      {
        "content": "![[Trigonometric／Circular／Angle／Goniometric Functions (sine - cosine - tangent - cosecant - secant - cotangent)/trigonometry-geometric-visualization.png|301]]\n[[trigonometry-geometric-view.drawio]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "sine squared",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑠𝑖𝑛<sup>2</sup>(𝜃)",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑠𝑖𝑛<sup>2</sup>(𝜃) is running 𝑠𝑖𝑛(𝜃) twice. For example:\n- 𝑠𝑖𝑛(𝜃) = opposite / hypotenuse\n- if hypotenuse = 𝑠𝑖𝑛(𝜃), then: 𝑠𝑖𝑛(𝜃) = opposite / 𝑠𝑖𝑛(𝜃)\n- thus, <strong><font style=\"color: rgb(51,153,102);\">𝑠𝑖𝑛<sup>2</sup>(𝜃) = opposite</font></strong>",
        "colspan": 2
      },
      null,
      "𝑠𝑖𝑛<sup>2</sup>(𝜃) is the area of the square with side 𝑠𝑖𝑛(𝜃)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
````
^excerpt
