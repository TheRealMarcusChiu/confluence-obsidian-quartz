---
title: "Word Similarity／Distance"
created: 2020-11-21T02:01:54.271-06:00
modified: 2020-11-21T02:20:32.811-06:00
parent: "[[NLP - Disambiguating Ambiguity]]"
children: []
---
###### Word Similarity/Distance
- measuring the similarity/differences between 2 words based on their definition/sense
- useful in [[Information Retrieval (IR) - Information Extraction (IE)|Information Retrieval (IR)]], Question/Answering, Machine Translation, etc

### Word Similarity/Distance - Measures

```merge-table
{
  "rows": [
    [
      {
        "content": "Measure",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Path Similarity",
        "header": true,
        "bg": "#F4F5F7"
      },
      "-𝑙𝑜𝑔(𝑝𝑎𝑡ℎ𝑙𝑒𝑛(𝑐<sub>1</sub>,𝑐<sub>2</sub>)) <font style=\"color: rgb(128,128,128);\">\\# 𝑝𝑎𝑡ℎ𝑙𝑒𝑛(𝑐<sub>1</sub>,𝑐<sub>2</sub>) is the number of edges the shortest path in thesaurus graph between synsets 𝑐<sub>1</sub> and 𝑐<sub>2</sub></font>"
    ],
    [
      {
        "content": "Resnik Similarity",
        "header": true,
        "bg": "#F4F5F7"
      },
      "-𝑙𝑜𝑔𝐏(𝐿𝐶𝑆(𝑐<sub>1</sub>,𝑐<sub>2</sub>))"
    ],
    [
      {
        "content": "Lin Similarity",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[2·𝑙𝑜𝑔𝐏(𝐿𝐶𝑆(𝑐<sub>1</sub>,𝑐<sub>2</sub>))\\] / \\[𝑙𝑜𝑔𝐏(𝑐<sub>1</sub>) + 𝑙𝑜𝑔𝐏(𝑐<sub>2</sub>)\\]"
    ],
    [
      {
        "content": "Jiang-Conrath Similarity",
        "header": true,
        "bg": "#F4F5F7"
      },
      "1 / [2·𝑙𝑜𝑔𝐏(𝐿𝐶𝑆(𝑐<sub>1</sub>,𝑐<sub>2</sub>)) - (𝑙𝑜𝑔𝐏(𝑐<sub>1</sub>) + 𝑙𝑜𝑔𝐏(𝑐<sub>2</sub>))]"
    ],
    [
      {
        "content": "Lesk Similarity",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝛴<sub>𝑟,𝑞∊𝑅𝐸𝐿𝑆</sub> [𝑜𝑣𝑒𝑟𝑙𝑎𝑝(𝑔𝑙𝑜𝑠𝑠(𝑟(𝑐<sub>1</sub>)), 𝑔𝑙𝑜𝑠𝑠(𝑞(𝑐<sub>2</sub>)))]"
    ]
  ]
}
```
###### <strong>𝐿𝐶𝑆</strong>
- lowest common subsumer of 2 concepts
- 𝐿𝐶𝑆(𝑐<sub>1</sub>,𝑐<sub>2</sub>) = lowest node in the hierarchy that subsumes both 𝑐<sub>1</sub> and 𝑐<sub>2</sub>

###### Example Thesaurus Tree

<sub>![[Word Similarity／Distance/word-similarity-thesaurus-tree-example.png|350]]</sub>

<sub></sub>
