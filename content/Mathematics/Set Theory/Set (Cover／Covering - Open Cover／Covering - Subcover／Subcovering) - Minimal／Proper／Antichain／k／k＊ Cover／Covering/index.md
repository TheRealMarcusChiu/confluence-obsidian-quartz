---
title: "Set (Cover／Covering - Open Cover／Covering - Subcover／Subcovering) - Minimal／Proper／Antichain／k／k＊ Cover／Covering"
created: 2021-09-13T05:29:22.158-05:00
modified: 2024-01-14T19:46:58.490-06:00
parent: "[[Set Theory]]"
children: []
---
###### Set (Cover/Covering - Open Cover/Covering - Subcover/Subcovering)
````excerpt
- see [[Mathematical Space (Cover／Covering - Open Cover／Covering - Subcover／Subcovering)|general definition]]
````
^excerpt

# Cover/Covering - Definition

A family 𝛾 of nonempty [subsets](https://mathworld.wolfram.com/Subset.html) of 𝑋 whose [union](https://mathworld.wolfram.com/Union.html) contains the given set 𝑋 (and which contains no duplicated subsets) is called a <strong>cover</strong> (or <strong>covering</strong>) of 𝑋. For example:
- there is only a single cover of {1}, namely <strong>{</strong>{1}<strong>}</strong>
- there are five covers of {1,2}, namely <strong>{</strong>{1},{2}<strong>}</strong>, <strong>{</strong>{1,2}<strong>}</strong>, <strong>{</strong>{1},{1,2}<strong>}</strong>, <strong>{</strong>{2},{1,2}<strong>}</strong>, and <strong>{</strong>{1},{2},{1,2}<strong>}</strong>

The number of possible covers for a set of 𝑁 elements are:
- 1, 5, 109, 32297, 2147321017, 9223372023970362989, ...

# Cover/Covering - Specialized Covers

```merge-table
{
  "rows": [
    [
      {
        "content": "Specialized Cover",
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
        "content": "[minimal cover](https://mathworld.wolfram.com/MinimalCover.html)",
        "bg": "#F4F5F7"
      },
      "is a cover for which the removal of one member destroys the covering property. For example:\n- of the five covers of {1,2}, only <strong>{</strong>{1},{2}<strong>}</strong> and <strong>{</strong>{1,2}<strong>}</strong> are minimal covers"
    ],
    [
      {
        "content": "[proper covers](https://mathworld.wolfram.com/ProperCover.html)",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "antichain covers",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "k-covers",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "k*-covers",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
