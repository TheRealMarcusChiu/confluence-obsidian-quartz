---
title: "Part-of-Speech (PoS) Tagging"
created: 2020-10-01T21:44:38.517-05:00
modified: 2020-10-31T19:45:25.182-05:00
parent: "[[Natural Language Processing (NLP) - Computational Linguistics]]"
children:
  - "[[Rule-Based PoS Tagging]]"
  - "[[Statistical-Based PoS Tagging]]"
  - "[[Transformation-Based PoS Tagging]]"
---
###### <strong>Part-of-Speech (PoS) Tagging</strong>
- task of reading a body text and assigning [[Part of Speech (PoS)|parts of speech]] to each word

### PoS Tagging - Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Rule-Based PoS Tagging|Rule-Based Tagging]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given input sentence we assign each word ALL POSSIBLE PoS tags, according to dictionary\n- then we use rules to REMOVE tags, until each word has exactly one PoS Tag\n- rules a hand built (not auto-learned)"
    ],
    [
      {
        "content": "[[Transformation-Based PoS Tagging]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given input sentence we assign each word a SINGLE PoS tag, according to dictionary\n- then we use rules to TRANSFORM tags, until no more transformations are made\n- rules can be auto-learned by feeding it training corpus"
    ],
    [
      {
        "content": "[[Statistical-Based PoS Tagging|Statistical-Based Tagging]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- given input sentence we assign a PoS Tag to each word that maximizes the probability of being \"correct\"\n- probabilities can be auto-learned by feeding it training corpus"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
