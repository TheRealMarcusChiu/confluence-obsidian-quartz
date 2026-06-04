---
title: "Dependency Parsing"
created: 2020-10-30T23:28:41.120-05:00
modified: 2020-11-02T16:29:53.159-06:00
parent: "[[Syntactic Parsing／Parser]]"
children:
  - "[[Dependency Grammar]]"
  - "[[MST Parser]]"
  - "[[MaltParser]]"
---
###### Dependency Parsing
- is the task of analyzing the grammatical dependency structure of a sentence and establishing the relationships between "head" words and the words which modify those heads

### Dependency Parsing - Grammar
- [[Dependency Grammar]]

### Dependency Parsing - Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Method Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Algorithms",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Translating from Constituency Structure",
        "header": true,
        "bg": "#F4F5F7"
      },
      "see: [[Translating From Constituency to Dependency Structures]]",
      ""
    ],
    [
      {
        "content": "Dynamic Programming",
        "header": true,
        "bg": "#F4F5F7"
      },
      "using divide and recombine approaches",
      "- CYK (Projective) - 𝑂(𝑛<sup>5</sup>)\n- Eisner (Projective) - 𝑂(𝑛<sup>3</sup>)"
    ],
    [
      {
        "content": "Graph Algorithms",
        "header": true,
        "bg": "#F4F5F7"
      },
      "creating a Minimum Spanning Tree for a sentence",
      "- [[MST Parser|MST]] (Non-Projective) - 𝑂(𝑛<sup>2</sup>)"
    ],
    [
      {
        "content": "Constraint Satisfaction",
        "header": true,
        "bg": "#F4F5F7"
      },
      "edges are eliminated that don't satisfy hard constraints",
      "- Karlsson"
    ],
    [
      {
        "content": "Transition-Based Parsing\nDeterministic Dependency Parsing",
        "header": true,
        "bg": "#F4F5F7"
      },
      "greedy choice of attachments guided by good machine learning classifiers",
      "- [[MaltParser]] (Projective) - 𝑂(𝑛)"
    ]
  ]
}
```
### Resources

![](https://www.youtube.com/watch?v=PVShkZgXznc&ab_channel=StanfordUniversitySchoolofEngineering&t=2s)
