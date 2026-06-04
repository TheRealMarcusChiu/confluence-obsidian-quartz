---
title: "go - Operator Precedence"
created: 2020-10-06T17:13:25.670-05:00
modified: 2020-10-06T17:14:04.661-05:00
parent: "[[Go-lang]]"
children: []
---
Here, operators with the highest precedence appear at the top of the table, those with the lowest appear at the bottom. Within an expression, higher precedence operators will be evaluated first

```merge-table
{
  "rows": [
    [
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Operator",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Associativity",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Postfix",
      "() [] -> . ++ - -",
      "Left to right"
    ],
    [
      "Unary",
      "+ - ! ~ ++ - - (type)* & sizeof",
      "Right to left"
    ],
    [
      "Multiplicative",
      "* / %",
      "Left to right"
    ],
    [
      "Additive",
      "+ -",
      "Left to right"
    ],
    [
      "Shift",
      "<< >>",
      "Left to right"
    ],
    [
      "Relational",
      "< <= > >=",
      "Left to right"
    ],
    [
      "Equality",
      "== !=",
      "Left to right"
    ],
    [
      "Bitwise AND",
      "&",
      "Left to right"
    ],
    [
      "Bitwise XOR",
      "^",
      "Left to right"
    ],
    [
      "Bitwise OR",
      "|",
      "Left to right"
    ],
    [
      "Logical AND",
      "&&",
      "Left to right"
    ],
    [
      "Logical OR",
      "||",
      "Left to right"
    ],
    [
      "Assignment",
      "= += -= *= /= %=>>= <<= &= ^= |=",
      "Right to left"
    ],
    [
      "Comma",
      ",",
      "Left to right"
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
