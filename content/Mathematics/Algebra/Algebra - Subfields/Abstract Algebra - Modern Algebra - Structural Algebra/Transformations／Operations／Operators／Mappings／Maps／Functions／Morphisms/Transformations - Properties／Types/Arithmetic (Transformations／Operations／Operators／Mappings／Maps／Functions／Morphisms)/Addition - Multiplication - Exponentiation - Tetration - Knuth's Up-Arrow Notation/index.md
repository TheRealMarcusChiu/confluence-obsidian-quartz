---
title: "Addition - Multiplication - Exponentiation - Tetration - Knuth's Up-Arrow Notation"
created: 2021-09-13T05:24:55.207-05:00
modified: 2022-05-14T17:27:29.258-05:00
parent: "[[Arithmetic (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)]]"
children:
  - "[[Time Complexity of Addition & Multiplication]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Binary Operator",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Iteration",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Knuth's Up-Arrow Notation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "addition",
        "bg": "#F4F5F7"
      },
      "N/A",
      "N/A",
      "a + b"
    ],
    [
      {
        "content": "multiplication",
        "bg": "#F4F5F7"
      },
      "iterated addition",
      "N/A",
      "a * b = a + a + ... + a <font style=\"color: rgb(128,128,128);\">\\# b times</font>"
    ],
    [
      {
        "content": "exponentiation",
        "bg": "#F4F5F7"
      },
      "iterated multiplication",
      "a↑b = a<sup>b</sup>",
      "a<sup>b</sup> = a * a * ... * a <font style=\"color: rgb(128,128,128);\">\\# b times</font>"
    ],
    [
      {
        "content": "tetration",
        "bg": "#F4F5F7"
      },
      "iterated exponentiation",
      "a↑↑b = <sup>b</sup>a = a<sub>b</sub> = a↑a↑ ... ↑a <font style=\"color: rgb(128,128,128);\">\\# b times</font>",
      "<sup>b</sup>a = a<sub>b</sub> = (a<sup>(a<sup>(...<sup>a</sup>)</sup>)</sup>) <font style=\"color: rgb(128,128,128);\">\\# b times</font>"
    ],
    [
      {
        "content": "pentation",
        "bg": "#F4F5F7"
      },
      "iterated tetration",
      "a↑↑↑b = a↑↑a↑↑ ... ↑↑a <font style=\"color: rgb(128,128,128);\">\\# b times</font>",
      ""
    ],
    [
      {
        "content": "hexation",
        "bg": "#F4F5F7"
      },
      "iterated pentation",
      "a↑↑↑↑b",
      ""
    ],
    [
      {
        "content": "septation",
        "bg": "#F4F5F7"
      },
      "iterated hexation",
      "a↑↑↑↑↑b",
      ""
    ],
    [
      {
        "content": "octation",
        "bg": "#F4F5F7"
      },
      "iterated septation",
      "a↑↑↑↑↑↑b",
      ""
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
