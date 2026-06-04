---
title: "String-Searching／Matching Algorithms"
created: 2023-03-02T20:55:11.634-06:00
modified: 2023-03-02T21:17:32.024-06:00
parent: "[[String Processing Algorithms (Stringology)]]"
children:
  - "[[Knuth–Morris–Pratt Algorithm (KMP)]]"
---
###### String-Searching/Matching Algorithms
````excerpt
- are an important class of string algorithms that try to find a place where one or several strings (also called patterns) are found within a larger string or text
````
^excerpt

# Algorithm - Types
###### Single-Pattern Algorithms
- 𝑚 is the length of the pattern
- 𝑛 the length of the searchable text
- 𝑘 = |𝛴| is the size of the alphabet
```merge-table
{
  "rows": [
    [
      {
        "content": "Algorithm",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Preprocessing Time",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Matching Time",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Space",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Naïve algorithm",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "none",
      "𝛩(𝑚𝑛)",
      "none"
    ],
    [
      {
        "content": "[Rabin–Karp](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "𝛩(𝑚)",
      "Θ(𝑛) in average,\n𝛰(𝑚𝑛) at worst",
      "𝛰(1)"
    ],
    [
      {
        "content": "[[Knuth–Morris–Pratt Algorithm (KMP)]]",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "𝛩(𝑚)",
      "𝛩(𝑛)",
      "𝛩(𝑚)"
    ],
    [
      {
        "content": "[Boyer–Moore](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "𝛩(𝑚 + 𝑘)",
      "𝛺(𝑛/𝑚) at best,\n𝑂(𝑚𝑛) at worst",
      "𝛩(𝑘)"
    ],
    [
      {
        "content": "[Two-way Algorithm](https://en.wikipedia.org/wiki/Two-way_string-matching_algorithm)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "𝛩(𝑚)",
      "𝛰(𝑛)",
      "𝛰(1)"
    ],
    [
      {
        "content": "Backward Non-Deterministic [DAWG](https://en.wikipedia.org/wiki/Suffix_automaton) Matching (BNDM)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "𝛰(𝑚)",
      "𝛺(𝑛/𝑚) at best,\n𝛰(𝑚𝑛) at worst",
      ""
    ],
    [
      {
        "content": "Backward Oracle Matching (BOM)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "𝛰(𝑚)",
      "𝛰(𝑚𝑛)",
      ""
    ]
  ]
}
```
