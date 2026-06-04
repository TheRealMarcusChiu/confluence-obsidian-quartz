---
title: "Time Complexity of Addition & Multiplication"
created: 2022-05-14T17:27:36.113-05:00
modified: 2022-05-14T18:25:55.092-05:00
parent: "[[Addition - Multiplication - Exponentiation - Tetration - Knuth's Up-Arrow Notation]]"
children: []
---
# What is the Time-Complexity of Addition and Multiplication?

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Operation</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Time Complexity]]</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Practical Time Complexity</strong>\n- if the operation is NOT done directly on 𝑛 but on some [[Numeral／Numerical／Number Systems／Representations／Notations|numerical representation]] of 𝑛\n- In this case, the numerical representation of 𝑛 is usually stored in 𝑙𝑜𝑔(𝑛) space\n\t- for example, the number 127 in:\n\t\t- base-10 representation takes up 3 digits of space (which is the same as ⌈𝑙𝑜𝑔<sub>10</sub>(127)⌉)\n\t\t- base-2 representation takes up 7 digits of space (e.g. 127 in binary representation is 1111111)",
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Addition - Multiplication - Exponentiation - Tetration - Knuth's Up-Arrow Notation|addition]]",
        "bg": "#F4F5F7"
      },
      "𝑂(𝑛)",
      "grade-school addition",
      "𝑂(𝑙𝑜𝑔(𝑛))\n\n> [!expand]- example\n> for example, given 𝑛<sub>1</sub> = <code><font style=\"color: rgb(122,134,154);\">123</font></code> and 𝑛<sub>2</sub> = <code><font style=\"color: rgb(122,134,154);\">111</font></code> calculating 𝑛<sub>1</sub>+ 𝑛<sub>2</sub> in [[Numeral／Numerical／Number Systems／Representations／Notations|base-10]] takes 3 addition operations:\n> - <code>operation \\#1: <font style=\"color: rgb(122,134,154);\">3 + 1 = 4</font></code>\n> - <code>operation \\#2: <font style=\"color: rgb(122,134,154);\">2 + 1 = 3</font></code>\n> - <code>operation \\#3: <font style=\"color: rgb(122,134,154);\">1 + 1 = 2</font></code>\n> - Thus: 𝑛<sub>1</sub>+ 𝑛<sub>2</sub>= <code><font style=\"color: rgb(122,134,154);\">234</font></code>"
    ],
    [
      {
        "content": "[[Addition - Multiplication - Exponentiation - Tetration - Knuth's Up-Arrow Notation|multiplication]]",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "𝑂(𝑛<sup>2</sup>)",
        "rowspan": 2
      },
      "long multiplication\nnaive multiplication\nstandard multiplication\ngrade-school multiplication",
      "𝑂(𝑙𝑜𝑔(𝑛)<sup>2</sup>)\n\n> [!expand]- example\n> for example, given 𝑛<sub>1</sub> = <code><font style=\"color: rgb(122,134,154);\">123</font></code> and 𝑛<sub>2</sub> = <font style=\"color: rgb(122,134,154);\">321</font> calculating 𝑛<sub>1</sub>\\* 𝑛<sub>2</sub> in [[Numeral／Numerical／Number Systems／Representations／Notations|base-10]] takes 9 multiplication operations:\n> - <code>sub-problem A (123 \\* 1)</code>\n> \t- <code>operation \\#1: <font style=\"color: rgb(122,134,154);\">3 \\* 1 = 3</font></code>\n> \t- <code>operation \\#2: <font style=\"color: rgb(122,134,154);\">2 \\* 1 = 2</font></code>\n> \t- <code>operation \\#3: <font style=\"color: rgb(122,134,154);\">1 \\* 1 = 1</font></code>\n> \t- <code>Thus: 123 \\* 1 = <font style=\"color: rgb(122,134,154);\">123</font></code>\n> - <code>sub-problem B (123 \\* 2)</code>\n> \t- <code>operation \\#1: <font style=\"color: rgb(122,134,154);\">3 \\* 2 = 6</font></code>\n> \t- <code>operation \\#2: <font style=\"color: rgb(122,134,154);\">2 \\* 2 = 4</font></code>\n> \t- <code>operation \\#3: <font style=\"color: rgb(122,134,154);\">1 \\* 2 = 2</font></code>\n> \t- <code>Thus: 123 \\* 1 = <font style=\"color: rgb(122,134,154);\">246</font></code>\n> - <code>sub-problem C (123 \\* 3)</code>\n> \t- <code>operation \\#1: <font style=\"color: rgb(122,134,154);\">3 \\* 3 = 9</font></code>\n> \t- <code>operation \\#2: <font style=\"color: rgb(122,134,154);\">2 \\* 3 = 6</font></code>\n> \t- <code>operation \\#3: <font style=\"color: rgb(122,134,154);\">1 \\* 3 = 3</font></code>\n> \t- <code>Thus: 123 \\* 3 =<font style=\"color: rgb(122,134,154);\"> 369</font></code>\n> - <code>Thus:</code>𝑛<sub>1</sub>\\* 𝑛<sub>2</sub>= <code><font style=\"color: rgb(122,134,154);\">123 + 2460 + 36900 = 39483</font></code>\n> \t- <code>NOTE:</code>\n> \t\t- <code><font style=\"color: rgb(122,134,154);\">2460</font> is not multiplied by 10 but shifted 1 digit</code>\n> \t\t- <code><font style=\"color: rgb(122,134,154);\">36900</font></code><code><font style=\"color: rgb(122,134,154);\"> <font style=\"color: rgb(51,51,51);\">is not multiplied by 100 but shifted 2 digits</font></font></code>"
    ],
    [
      "TODO other algorithms",
      "TODO"
    ]
  ]
}
```
