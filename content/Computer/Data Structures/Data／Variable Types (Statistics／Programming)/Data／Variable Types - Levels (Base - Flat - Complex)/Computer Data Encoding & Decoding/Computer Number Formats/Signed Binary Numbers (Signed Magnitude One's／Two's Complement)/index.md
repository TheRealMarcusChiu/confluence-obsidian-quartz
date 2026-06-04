---
title: "Signed Binary Numbers (Signed Magnitude One's／Two's Complement)"
created: 2020-10-18T11:14:38.666-05:00
modified: 2023-03-07T00:08:45.948-06:00
parent: "[[Computer Number Formats]]"
children:
  - "[[Two's Complement - Intuition]]"
---
###### Signed Binary Numbers
````excerpt
- uses the Most Significant Bit (MSB) as a sign bit to display a range of either positive numbers or negative numbers
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Signed Binary Number - Formats

```merge-table
{
  "rows": [
    [
      {
        "content": "Signed Magnitude (SM)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "One's Complement",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "Two's Complement",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "the Most Significant Bit (MSB) is used as the sign bit:\n“0” means positive\n“1” means negative",
        "align": "center",
        "colspan": 7
      },
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "the remaining bits in the number are used to represent the magnitude of the binary number in the usual unsigned binary number format way",
        "align": "left",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "the remaining bits depend on whether the number is positive or negative:\n- positive - binary number is as usual\n- negative - binary number is inverted",
        "align": "left",
        "colspan": 2
      },
      null,
      {
        "content": "the remaining bits depend on whether the number is positive or negative:\n- positive - binary number is as usual\n- negative - binary number is inverted, then +1",
        "align": "left",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">01111111 = +127</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000001 = +1</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000000 = +0</font></code>",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">11111111 = -127</font></code>\n<code><font style=\"color: rgb(122,134,154);\">10000001 = -1</font></code>\n<code><font style=\"color: rgb(122,134,154);\">10000000 = -0</font></code>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">01111111 = +127</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000001 = +1</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000000 = +0</font></code>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">10000000 = -127</font></code>\n<code><font style=\"color: rgb(122,134,154);\">11111110 = -1</font></code>\n<code><font style=\"color: rgb(122,134,154);\">11111111 = -0</font></code>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">01111111 = +127</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000001 = +1</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000000 = 0</font></code>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(122,134,154);\">10000001 = -127</font></code>\n<code><font style=\"color: rgb(122,134,154);\">11111111 = -1</font></code>\n<code><font style=\"color: rgb(122,134,154);\">00000000 = 0</font></code>",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>PROS</strong>",
        "bg": "#F4F5F7"
      },
      {
        "bg": "green",
        "colspan": 2
      },
      null,
      {
        "content": "- mathematical operations are easy in this format",
        "bg": "green",
        "colspan": 2
      },
      null,
      {
        "content": "- mathematical operations are easy in this format\n- no double-zero problem",
        "bg": "green",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>CONS</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "- double zero problem",
        "bg": "red",
        "colspan": 2
      },
      null,
      {
        "content": "- double zero problem",
        "bg": "red",
        "colspan": 2
      },
      null,
      {
        "bg": "red",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Decimal",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Signed Magnitude",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Signed One’s Complement",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Signed Two’s Complement",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "+7",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0111",
        "align": "center"
      },
      {
        "content": "0111",
        "align": "center"
      },
      {
        "content": "0111",
        "align": "center"
      }
    ],
    [
      {
        "content": "+6",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0110",
        "align": "center"
      },
      {
        "content": "0110",
        "align": "center"
      },
      {
        "content": "0110",
        "align": "center"
      }
    ],
    [
      {
        "content": "+5",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0101",
        "align": "center"
      },
      {
        "content": "0101",
        "align": "center"
      },
      {
        "content": "0101",
        "align": "center"
      }
    ],
    [
      {
        "content": "+4",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0100",
        "align": "center"
      },
      {
        "content": "0100",
        "align": "center"
      },
      {
        "content": "0100",
        "align": "center"
      }
    ],
    [
      {
        "content": "+3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0011",
        "align": "center"
      },
      {
        "content": "0011",
        "align": "center"
      },
      {
        "content": "0011",
        "align": "center"
      }
    ],
    [
      {
        "content": "+2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0010",
        "align": "center"
      },
      {
        "content": "0010",
        "align": "center"
      },
      {
        "content": "0010",
        "align": "center"
      }
    ],
    [
      {
        "content": "+1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0001",
        "align": "center"
      },
      {
        "content": "0001",
        "align": "center"
      },
      {
        "content": "0001",
        "align": "center"
      }
    ],
    [
      {
        "content": "+0",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0000",
        "align": "center"
      },
      {
        "content": "0000",
        "align": "center"
      },
      {
        "content": "0000",
        "align": "center"
      }
    ],
    [
      {
        "content": "-0",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1000",
        "align": "center"
      },
      {
        "content": "1111",
        "align": "center"
      },
      {
        "content": "–",
        "align": "center"
      }
    ],
    [
      {
        "content": "-1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1001",
        "align": "center"
      },
      {
        "content": "1110",
        "align": "center"
      },
      {
        "content": "1111",
        "align": "center"
      }
    ],
    [
      {
        "content": "-2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1010",
        "align": "center"
      },
      {
        "content": "1101",
        "align": "center"
      },
      {
        "content": "1110",
        "align": "center"
      }
    ],
    [
      {
        "content": "-3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1011",
        "align": "center"
      },
      {
        "content": "1100",
        "align": "center"
      },
      {
        "content": "1101",
        "align": "center"
      }
    ],
    [
      {
        "content": "-4",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1100",
        "align": "center"
      },
      {
        "content": "1011",
        "align": "center"
      },
      {
        "content": "1100",
        "align": "center"
      }
    ],
    [
      {
        "content": "-5",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1101",
        "align": "center"
      },
      {
        "content": "1010",
        "align": "center"
      },
      {
        "content": "1011",
        "align": "center"
      }
    ],
    [
      {
        "content": "-6",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1110",
        "align": "center"
      },
      {
        "content": "1001",
        "align": "center"
      },
      {
        "content": "1010",
        "align": "center"
      }
    ],
    [
      {
        "content": "-7",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1111",
        "align": "center"
      },
      {
        "content": "1000",
        "align": "center"
      },
      {
        "content": "1001",
        "align": "center"
      }
    ]
  ]
}
```
