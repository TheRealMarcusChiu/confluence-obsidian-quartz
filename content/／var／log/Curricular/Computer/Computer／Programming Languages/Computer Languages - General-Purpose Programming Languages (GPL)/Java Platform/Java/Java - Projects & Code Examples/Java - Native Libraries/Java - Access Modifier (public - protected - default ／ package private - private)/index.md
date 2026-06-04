---
title: "Java - Access Modifier (public - protected - default ／ package private - private)"
created: 2021-01-26T08:55:07.532-06:00
modified: 2021-10-21T17:17:14.517-05:00
parent: "[[Java - Native Libraries]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "ACCESS MODIFIER",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "ASSESSABILITY RANGE",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 5
      },
      null,
      null,
      null,
      null,
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 6
      },
      {
        "content": "TARGET",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "class",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "package",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "subclass\n(same pkg)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "subclass\n(diff pkg)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "world",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "type\n(class, interface, enum)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "field",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "method",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "public",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "header": true,
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "protected",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "header": true,
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "no modifier / default / package private",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "header": true,
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "private",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "header": true,
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ]
  ]
}
```
