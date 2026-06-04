---
title: "PoS & Syntax - Example"
created: 2021-09-13T04:44:05.728-05:00
modified: 2021-09-13T04:44:05.728-05:00
parent: "[[Grammar = Morphology + Part of Speech + Syntax]]"
children: []
---
````excerpt
let's see the difference between [[Part of Speech (PoS)|Part of Speech]] and [[Syntax (Sentence Structure)|Syntax]] with the following 2 examples

<strong>PoS Tagging Example</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "The",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "young",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "man",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "ate",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "his",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "hamburger",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "quickly",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "while",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "walking",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "article",
        "align": "center"
      },
      {
        "content": "adjective",
        "align": "center"
      },
      {
        "content": "noun",
        "align": "center"
      },
      {
        "content": "verb",
        "align": "center"
      },
      {
        "content": "possessive noun",
        "align": "center"
      },
      {
        "content": "noun",
        "align": "center"
      },
      {
        "content": "adverb",
        "align": "center"
      },
      {
        "content": "preposition",
        "align": "center"
      },
      {
        "content": "verb",
        "align": "center"
      }
    ]
  ]
}
```

<strong>PoS Tagging with Syntax Parsing</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "The",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "young",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "man",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "ate",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "his",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "hamburger",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "quickly",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "while",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "walking",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "article",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "adjective",
        "align": "center"
      },
      {
        "content": "noun",
        "align": "center"
      },
      {
        "content": "verb",
        "align": "center",
        "rowspan": 3
      },
      {
        "content": "possessive noun",
        "align": "center"
      },
      {
        "content": "noun",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "adverb",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "preposition",
        "align": "center"
      },
      {
        "content": "verb",
        "align": "center"
      }
    ],
    [
      {
        "content": "determiner + noun",
        "align": "center",
        "colspan": 2,
        "rowspan": 3
      },
      null,
      {
        "content": "determiner",
        "align": "center"
      },
      {
        "content": "prepositional phrase",
        "align": "center",
        "colspan": 2,
        "rowspan": 4
      },
      null
    ],
    [
      {
        "content": "noun phrase",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "verb + noun phrase",
        "align": "center",
        "colspan": 3
      },
      null,
      null
    ],
    [
      {
        "content": "noun phrase",
        "align": "center",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "verb phrase",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "sentence",
        "align": "center",
        "colspan": 9
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  ]
}
```
````
^excerpt
