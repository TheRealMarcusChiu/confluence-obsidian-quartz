---
title: "Morphological Parsing"
created: 2021-09-13T04:44:01.348-05:00
modified: 2021-09-13T04:44:01.348-05:00
parent: "[[Morphology (Word Forms／Inflexions)]]"
children:
  - "[[Morphological Parsing with Finite-State Machines／Automatas (FSM／FSA)]]"
---
###### Morphological Parsing
- takes a word as input and produces a structure that reveals its morphological features
```merge-table
{
  "rows": [
    [
      {
        "content": "English",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Input Word",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Morphological Parse",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "cats",
      "cat +N +PL"
    ],
    [
      "cat",
      "cat +N +Sg"
    ],
    [
      "cities",
      "city +N +P1"
    ],
    [
      "geese",
      "goose +N +P1"
    ],
    [
      "goose",
      "goose +N +Sg"
    ],
    [
      "goose",
      "goose +V"
    ],
    [
      "gooses",
      "goose +V +3P +Sg"
    ],
    [
      "merging",
      "merge +V +PastPart"
    ],
    [
      "caught",
      "catch +V +PastPart"
    ],
    [
      "caught",
      "catch +V +Past"
    ]
  ]
}
```
### Morphological Parsing - Methods
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
