---
title: "Binary Floating-Point Numbers"
created: 2020-10-06T15:17:58.303-05:00
modified: 2025-01-28T14:40:38.169-06:00
parent: "[[Floating-Point Numbers]]"
children: []
---
###### Binary Floating-Point Numbers
````excerpt
- is a way of representing [[Floating-Point Numbers]] in binary
````
^excerpt

# Binary FP - Standards

Binary floating-point numbers can be represented with different numbers of bits. The table below shows the different standards

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Total Bits",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Sign",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Exponent",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Significand\nFraction",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 7
      },
      {
        "content": "Exponent bias",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bits precision",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "# of decimal digits",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[Half](https://en.wikipedia.org/wiki/Half_precision) ([IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_floating_point))",
        "bg": "#F4F5F7"
      },
      "16",
      "1",
      "5",
      "10",
      "15",
      "11",
      "~3.3"
    ],
    [
      {
        "content": "bfloat16",
        "bg": "#F4F5F7"
      },
      "16",
      "1",
      "8",
      "7",
      "",
      "",
      ""
    ],
    [
      {
        "content": "[Single](https://en.wikipedia.org/wiki/Single_precision)",
        "bg": "#F4F5F7"
      },
      "32",
      "1",
      "8",
      "23",
      "127",
      "24",
      "~7.2"
    ],
    [
      {
        "content": "[Double](https://en.wikipedia.org/wiki/Double_precision)",
        "bg": "#F4F5F7"
      },
      "64",
      "1",
      "11",
      "52",
      "1023",
      "53",
      "~15.9"
    ],
    [
      {
        "content": "[x86 extended precision](https://en.wikipedia.org/wiki/Extended_precision#x86_extended_precision_format)",
        "bg": "#F4F5F7"
      },
      "80",
      "1",
      "15",
      "64",
      "16383",
      "64",
      "~19.2"
    ],
    [
      {
        "content": "[Quad](https://en.wikipedia.org/wiki/Quad_precision)",
        "bg": "#F4F5F7"
      },
      "128",
      "1",
      "15",
      "112",
      "16383",
      "113",
      "~34.0"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Binary FP - Internal Layout

```merge-table
{
  "rows": [
    [
      {
        "content": "Half",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(0,0,255);\">S</font><font style=\"color: rgb(0,170,0);\">EEEEE</font><font style=\"color: rgb(224,0,0);\">FF FFFFFFFF</font></code></span>"
    ],
    [
      {
        "content": "bfloat16",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(0,0,255);\">S</font><font style=\"color: rgb(0,170,0);\">EEEEEEE</font><font style=\"color: rgb(224,0,0);\"> <font style=\"color: rgb(0,170,0);\">E</font>FFFFFFF</font></code></span>"
    ],
    [
      {
        "content": "Single",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(0,0,255);\">S</font><font style=\"color: rgb(51,153,102);\">EEEEEEE E</font><font style=\"color: rgb(255,0,0);\">FFFFFFF FFFFFFFF FFFFFFFF</font></code>\n\n> [!expand]- Click here to expand...\n> ![[Binary Floating-Point Numbers/Floating Point Example.png|600]]\n> - -1<sup>(<font style=\"color: rgb(153,204,255);\">sign</font>)</sup> \\* (1.<font style=\"color: rgb(128,0,0);\">significand</font>)<sub>[[Numeral／Numerical／Number Systems／Representations／Notations|base-2]]</sub> \\* 2<sup>(<font style=\"color: rgb(153,204,0);\">exponent</font> - exponent-bias)</sup>\n> - -1<sup>(<font style=\"color: rgb(153,204,255);\">sign</font>)</sup> \\* (1.<font style=\"color: rgb(128,0,0);\">𝑏<sub>22</sub>𝑏<sub>21</sub>...𝑏<sub>0</sub></font>)<sub>base-2</sub> \\* 2<sup>(<font style=\"color: rgb(153,204,0);\">exponent</font> - 127)</sup>\n> - -1<sup>(<font style=\"color: rgb(153,204,255);\">sign</font>)</sup> \\* (1 + <font style=\"color: rgb(128,0,0);\">𝛴<em><sub>0≤𝑖≤22</sub></em>\\[𝑏<sub>22-𝑖</sub> \\* 2<sup>-𝑖</sup>\\]</font>) \\* 2<sup>(<font style=\"color: rgb(153,204,0);\">exponent</font> - 127)</sup>"
    ],
    [
      {
        "content": "Double",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(0,0,255);\">S</font><font style=\"color: rgb(0,170,0);\">EEEEEEE EEEE</font><font style=\"color: rgb(224,0,0);\">FFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF</font></code></span>"
    ],
    [
      {
        "content": "Extended",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(0,0,255);\">S</font><font style=\"color: rgb(0,170,0);\">EEEEEEE EEEEEEEE</font><font style=\"color: rgb(224,0,0);\"> FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF</font></code></span>"
    ],
    [
      {
        "content": "Quad",
        "header": true,
        "bg": "#F4F5F7"
      },
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(0,0,255);\">S</font><font style=\"color: rgb(0,170,0);\">EEEEEEE EEEEEEEE</font> FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF</code><br><code>FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF</code></span>"
    ]
  ]
}
```
# Resources
- [https://steve.hollasch.net/cgindex/coding/ieeefloat.html](https://steve.hollasch.net/cgindex/coding/ieeefloat.html)
