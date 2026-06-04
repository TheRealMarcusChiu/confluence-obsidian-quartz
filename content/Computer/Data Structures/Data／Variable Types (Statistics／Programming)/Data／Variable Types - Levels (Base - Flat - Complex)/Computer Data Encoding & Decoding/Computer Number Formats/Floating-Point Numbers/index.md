---
title: "Floating-Point Numbers"
created: 2020-01-16T16:20:57.501-06:00
modified: 2023-03-10T18:59:57.381-06:00
parent: "[[Computer Number Formats]]"
children:
  - "[[Binary Floating-Point Numbers]]"
---
###### Floating-Point Numbers
````excerpt
- solves a number of [[Fixed-Point Numbers|fixed-point]] representation problems:
	- Fixed-Point has a fixed window of representation, which limits it from representing both very large and very small numbers
	- Fixed-Point is prone to a loss of precision when two large numbers are divided
- employs a sort of "sliding window" of precision appropriate to the scale of the number. This allows it to represent numbers from 1,000,000,000,000 to 0.0000000000000001 with ease, and while maximizing precision (the number of digits) at both ends of the scale
````
^excerpt

# FP - How It Works
floating point numbers use scientific notation to encode numbers, with 3 components:
- number-in-<font style="color: rgb(255,102,0);">base</font>-representation = <font style="color: rgb(128,0,0);">significand</font> \* <font style="color: rgb(255,102,0);">base-number</font><font style="color: rgb(153,204,0);"><sup>exponent</sup></font>
```merge-table
{
  "rows": [
    [
      {
        "content": "Component",
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
        "content": "<font style=\"color: rgb(128,0,0);\">significand</font>",
        "bg": "#F4F5F7"
      },
      "- contains the number's digits\n- negative significands represents negative numbers\n- limits the precision/accuracy of number"
    ],
    [
      {
        "content": "<font style=\"color: rgb(153,204,0);\">exponent</font>",
        "bg": "#F4F5F7"
      },
      "- determines where the \"base point\" is placed relative to the beginning of the significand\n- negative exponents represents numbers that are very small\n- limits the magnitude of number"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,102,0);\">base-number</font>",
        "bg": "#F4F5F7"
      },
      "- determines the number's [[Numeral／Numerical／Number Systems／Representations／Notations|base-representation]]\n- scientific notation is usually base-10 while computer's represent numbers in base-2\n- <font style=\"color: rgb(255,0,0);\">this number is always predetermined and remains the same!</font>"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "FP Base Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Form",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Hexadecimal FP",
        "bg": "#F4F5F7"
      },
      "hexadecimal = <font style=\"color: rgb(128,0,0);\">significand<sub>[[Numeral／Numerical／Number Systems／Representations／Notations|base-16]]</sub></font> × <font style=\"color: rgb(255,102,0);\">16</font><font style=\"color: rgb(153,204,0);\"><sup>exponent</sup></font>",
      "123.abc = <font style=\"color: rgb(128,0,0);\">1.23abc</font> × <font style=\"color: rgb(255,102,0);\">16</font><font style=\"color: rgb(153,204,0);\"><sup>2</sup><font style=\"color: rgb(51,51,51);\">a2.3abc = <font style=\"color: rgb(0,0,0);\"><font style=\"color: rgb(128,0,0);\">a.23abc</font> × <font style=\"color: rgb(255,102,0);\">16</font></font><font style=\"color: rgb(153,204,0);\"><sup>1</sup></font></font></font>"
    ],
    [
      {
        "content": "Decimal FP",
        "bg": "#F4F5F7"
      },
      "decimal = <font style=\"color: rgb(128,0,0);\">significand<sub>[[Numeral／Numerical／Number Systems／Representations／Notations|base-10]]</sub></font> × <font style=\"color: rgb(255,102,0);\">10</font><font style=\"color: rgb(153,204,0);\"><sup>exponent</sup></font>",
      "0.12345 = <font style=\"color: rgb(128,0,0);\">1.2345</font> \\* <font style=\"color: rgb(255,102,0);\">10</font><font style=\"color: rgb(153,204,0);\"><sup>-1</sup></font>823.45 = <font style=\"color: rgb(128,0,0);\">8.2345</font> \\* <font style=\"color: rgb(255,102,0);\">10</font><font style=\"color: rgb(153,204,0);\"><sup>2</sup></font>"
    ],
    [
      {
        "content": "[[Binary Floating-Point Numbers|Binary FP]]",
        "bg": "#F4F5F7"
      },
      "binary = <font style=\"color: rgb(128,0,0);\">significand<sub>[[Numeral／Numerical／Number Systems／Representations／Notations|base-2]]</sub></font> × <font style=\"color: rgb(255,102,0);\">2</font><font style=\"color: rgb(153,204,0);\"><sup>exponent</sup></font>",
      "<font style=\"color: rgb(128,128,128);\">note there is always a leading 1 in the significand</font> \n0.000011 = <font style=\"color: rgb(128,0,0);\">1.1</font> × <font style=\"color: rgb(255,102,0);\">2</font><font style=\"color: rgb(153,204,0);\"><sup>-5</sup></font>\n10100.11 = <font style=\"color: rgb(128,0,0);\">1.010011</font> × <font style=\"color: rgb(255,102,0);\">2</font><font style=\"color: rgb(153,204,0);\"><sup>4</sup></font>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# FP - Special Values

```merge-table
{
  "rows": [
    [
      {
        "content": "Special Values",
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
        "content": "Signed Zero",
        "bg": "#F4F5F7"
      },
      "TODO"
    ],
    [
      {
        "content": "Subnormal Numbers",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Infinities",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Not-a-Number (NaN)",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
