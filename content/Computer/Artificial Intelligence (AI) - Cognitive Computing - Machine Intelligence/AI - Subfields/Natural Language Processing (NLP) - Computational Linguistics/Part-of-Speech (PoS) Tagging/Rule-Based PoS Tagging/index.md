---
title: "Rule-Based PoS Tagging"
created: 2020-10-01T21:49:39.606-05:00
modified: 2020-10-01T22:16:55.605-05:00
parent: "[[Part-of-Speech (PoS) Tagging]]"
children: []
---
###### Rule-Based PoS Tagging
- a type of [[Part-of-Speech (PoS) Tagging]] utilizing rules
- rules cannot be auto-learned by feeding it training data (requires manual creation)

### Process

given:
- dictionary of words with their corresponding [[Part of Speech (PoS)|PoS Tags]] <font style="color: rgb(128,128,128);">(a single word may have multiple tags)</font>
- set of rules that selectively remove PoS Tags
- input sentence to be PoS Tagged

steps:
- according to the dictionary, assign each word of the input sentence all possible [[Part of Speech (PoS)|PoS Tags]]
- according to the set of rules, remove tags from word of the sentence, until each word has exactly one PoS Tag

### Example

given input sentence:
- <span style="white-space: pre-wrap"><code>She promised to back the bill</code></span>

according to the dictionary, we assign each word their PoS Tags:

```merge-table
{
  "rows": [
    [
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>She</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>promised</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>to</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>back</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>the</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>bill</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "PRP",
      "VBN\nVBD",
      "TO",
      "NN\nRB\nJJ\nVB",
      "DT",
      "VB\nNN"
    ]
  ]
}
```

according to the set of rules, we remove tags

say we come across a rule like below:
- <span style="white-space: pre-wrap"><code>Eliminate VBN if VBD is an option when VBN|VBD follows “\<start\> PRP”</code></span>

we then remove VBN from under the <strong><code>promised</code></strong> word like so:

```merge-table
{
  "rows": [
    [
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>She</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>promised</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>to</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>back</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>the</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<span style=\"white-space: pre-wrap\"><code>bill</code></span>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "PRP",
      "VBD",
      "TO",
      "NN\nRB\nJJ\nVB",
      "DT",
      "VB\nNN"
    ]
  ]
}
```

we continue until each word has exactly one PoS Tag
