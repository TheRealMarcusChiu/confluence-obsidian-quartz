---
title: "Permutations - Combinations - Total Combination"
created: 2021-09-13T05:26:09.262-05:00
modified: 2025-10-03T10:06:14.791-05:00
parent: "[[Combinatorics]]"
children:
  - "[[Combination With Replacement]]"
  - "[[Combination Without Replacement (Binomial Coefficient - n Choose k)]]"
---
- <strong>permutation</strong> - refers to the different ways of arranging items from a set of objects, in a sequential order
- <strong>combination</strong> - refers to the different ways of choosing items from a set of objects, such that their order does not matter
```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Ordered?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Replacement?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description & Formula",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Permutation WITH Replacement\n\n(𝑛𝑃<sub>𝑟</sub>𝑘)",
        "bg": "#F4F5F7"
      },
      {
        "content": "ORDERED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "REPLACEMENT",
        "bg": "blue",
        "align": "center"
      },
      "the number of ways 𝑘 items can be selected from 𝑛 possible items WITH replacement after each selection (ORDERED)\n\n![[Permutations - Combinations - Total Combination/permutation-with-replacement.png|301]]"
    ],
    [
      {
        "content": "Permutation WITHOUT Replacement\n\n(𝑛𝑃𝑘)",
        "bg": "#F4F5F7"
      },
      {
        "content": "ORDERED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "WITHOUT REPLACEMENT",
        "bg": "yellow",
        "align": "center"
      },
      "the number of ways 𝑘 items can be selected from 𝑛 possible items WITHOUT replacement after each selection (ORDERED)\n\n![[Permutations - Combinations - Total Combination/permutation-without-replacement.png|301]]"
    ],
    [
      {
        "content": "[[Combination Without Replacement (Binomial Coefficient - n Choose k)|Combination WITHOUT Replacement]]\n\n(𝑛𝐶𝑘)\n\nBinomial Coefficient (for [[Binomial Distribution]])",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNORDERED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "WITHOUT REPLACEMENT",
        "bg": "yellow",
        "align": "center"
      },
      "the number of ways 𝑘 items can be selected from 𝑛 possible items WITHOUT replacement after each selection (UNORDERED)\n\n![[Permutations - Combinations - Total Combination/combinations-n-choose-k.png|301]]"
    ],
    [
      {
        "content": "[[Combination With Replacement|Combination WITH Replacement]]\n\n(𝑛𝐶<sub>𝑟</sub>𝑘) or ((𝑛𝐶𝑘))",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNORDERED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "REPLACEMENT",
        "bg": "blue",
        "align": "center"
      },
      "the number of ways 𝑘 items can be selected from 𝑛 possible items WITH replacement after each selection (UNORDERED)\n\n![[Permutations - Combinations - Total Combination/combination-with-replacement.png|301]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Totality

```merge-table
{
  "rows": [
    [
      {
        "content": "Totality Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Ordered?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Replacement?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description & Formula",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Total Permutation (WITH Replacement)",
        "bg": "#F4F5F7"
      },
      {
        "content": "ORDERED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "WITH REPLACEMENT",
        "bg": "blue",
        "align": "center"
      },
      "the number of ways 0 to 𝑛 items can be selected from 𝑛 possible items WITH replacement after each selection (ORDERED)\n\n𝛴<sub>0≤𝑖≤𝑛</sub>\\[𝑃<sub>𝑟</sub>(𝑛,𝑖)\\] = 𝛴<sub>0≤𝑖≤𝑘</sub>\\[𝑛<sup>𝑖</sup>\\] = 𝑛<sup>0</sup> + 𝑛<sup>1</sup> + 𝑛<sup>2</sup> + ... + 𝑛<sup>𝑛</sup> = (𝑛<sup>𝑛+1</sup>-1)/(𝑛-1)"
    ],
    [
      {
        "content": "Total Permutation (WITHOUT Replacement)",
        "bg": "#F4F5F7"
      },
      {
        "content": "ORDERED",
        "bg": "blue",
        "align": "center"
      },
      {
        "content": "WITHOUT REPLACEMENT",
        "bg": "yellow",
        "align": "center"
      },
      "the number of ways 0 to 𝑛 items can be selected from 𝑛 possible items WITHOUT replacement after each selection (ORDERED)\n\n𝛴<sub>0≤𝑖≤𝑛</sub>\\[𝑃(𝑛,𝑖)\\] = 𝛴<sub>0≤𝑖≤𝑛</sub>\\[𝑛!/(𝑛-𝑖)!\\] = ?"
    ],
    [
      {
        "content": "Total Combination (WITHOUT Replacement)",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNORDERED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "WITHOUT REPLACEMENT",
        "bg": "yellow",
        "align": "center"
      },
      "the number of ways 0 to 𝑛 items can be selected from 𝑛 possible items WITHOUT replacement after each selection (UNORDERED)\n\n𝛴<sub>0≤𝑖≤𝑛</sub>\\[𝐶(𝑛,𝑖)\\] = 2<sup>𝑛</sup>"
    ],
    [
      {
        "content": "Total Combination (WITH Replacement)",
        "bg": "#F4F5F7"
      },
      {
        "content": "UNORDERED",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "WITH REPLACEMENT",
        "bg": "blue",
        "align": "center"
      },
      "the number of ways 0 to 𝑛 items can be selected from 𝑛 possible items WITH replacement after each selection (UNORDERED)\n\n𝛴<sub>0≤𝑖≤𝑛</sub>\\[𝐶<sub>𝑟</sub>(𝑛,𝑖)\\] = ?"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
