---
title: "(Prefix - Infix - Postfix) Notations"
created: 2019-03-16T03:17:30.360-05:00
modified: 2021-09-04T20:28:25.408-05:00
parent: "[[Expressions (Computer Science)]]"
children: []
---
###### (Prefix - Infix - Postfix) Notations
- are three different but equivalent ways of writing [[Expressions (Computer Science)|expressions]]

# Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Semantics",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Prefix Notation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Infix Notation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Postfix Notation",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "multiply A and B, divide C by D, add the results",
        "bg": "#F4F5F7"
      },
      "<code>+ \\* A B / C D</code>",
      "<code>A \\* B + C / D</code>",
      "<code>A B \\* C D / +</code>"
    ],
    [
      {
        "content": "add A and B, Subtract C by D, add the results",
        "bg": "#F4F5F7"
      },
      "<code>+ + A B - C D</code>",
      "<code>A + B + C - D</code>",
      "<code>A B + C D - +</code>"
    ]
  ],
  "tableStyle": "width: 72.5746%;"
}
```
