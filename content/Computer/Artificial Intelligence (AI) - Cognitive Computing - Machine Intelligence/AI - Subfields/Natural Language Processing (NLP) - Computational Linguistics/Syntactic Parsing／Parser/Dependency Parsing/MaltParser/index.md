---
title: "MaltParser"
created: 2020-11-02T14:14:04.722-06:00
modified: 2020-11-02T17:51:15.094-06:00
parent: "[[Dependency Parsing]]"
children: []
---
###### MaltParser (Projective)
- very similar to shift-reduce parsing
- greedy choice of attachments/actions guided by good machine learning classifiers

### MaltParser - Actions
- SHIFT
- RIGHT\_ARC
- LEFT\_ARC
- REDUCE - optional

### MaltParser - Example

given input sentence, step through the parsing steps:
- <code><font style="color: rgb(128,128,128);">book me the morning flight</font></code>
```merge-table
{
  "rows": [
    [
      {
        "content": "Step",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Stack",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Word List",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Action",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Relation Added",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[book, me, the, morning, flight\\]</font></code>",
      "SHIFT",
      ""
    ],
    [
      "1",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[me, the, morning, flight\\]</font></code>",
      "SHIFT",
      ""
    ],
    [
      "2",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book, me\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[the, morning, flight\\]</font></code>",
      "RIGHT_ARC",
      "<code><font style=\"color: rgb(128,128,128);\">(book → me)</font></code>"
    ],
    [
      "3",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[the, morning, flight\\]</font></code>",
      "SHIFT",
      ""
    ],
    [
      "4",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book, the\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[morning, flight\\]</font></code>",
      "SHIFT",
      ""
    ],
    [
      "5",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book, the, morning\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[flight\\]</font></code>",
      "SHIFT",
      ""
    ],
    [
      "6",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book, the, morning, flight\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[\\]</font></code>",
      "LEFT_ARC",
      "<code><font style=\"color: rgb(128,128,128);\">(morning ← flight)</font></code>"
    ],
    [
      "7",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book, the, flight\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[\\]</font></code>",
      "LEFT\\_ARC",
      "<code><font style=\"color: rgb(128,128,128);\">(the ← flight)</font></code>"
    ],
    [
      "8",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book, flight\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[\\]</font></code>",
      "RIGHT_ARC",
      "<code><font style=\"color: rgb(128,128,128);\">(book → flight)</font></code>"
    ],
    [
      "9",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root, book\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[\\]</font></code>",
      "RIGHT\\_ARC",
      "<code><font style=\"color: rgb(128,128,128);\">(root → book)</font></code>"
    ],
    [
      "10",
      "<code><font style=\"color: rgb(128,128,128);\">\\[root\\]</font></code>",
      "<code><font style=\"color: rgb(128,128,128);\">\\[\\]</font></code>",
      "done",
      ""
    ]
  ]
}
```
### Resources

![](https://www.youtube.com/watch?v=egBq3gi_4No&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&index=73&ab_channel=MausamJain)
