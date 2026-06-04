---
title: "Knuth–Morris–Pratt Algorithm (KMP)"
created: 2023-03-02T21:10:47.722-06:00
modified: 2023-03-02T22:04:13.806-06:00
parent: "[[String-Searching／Matching Algorithms]]"
children: []
---
###### Knuth–Morris–Pratt Algorithm (KMP)
````excerpt
- is a type of [[String-Searching／Matching Algorithms|string-matching algorithm]]
````
^excerpt

# KMP - Algorithm
```
algorithm kmp_search:
    input:
        an array of characters, S (the text to be searched)
        an array of characters, W (the word sought)
    output:
        an array of integers, P (positions in S at which W is found)
        an integer, nP (number of positions)

    define variables:
        an integer, j ← 0 (the position of the current character in S)
        an integer, k ← 0 (the position of the current character in W)
        an array of integers, T (the table, computed elsewhere)

    let nP ← 0

    while j < length(S) do
        if W[k] = S[j] then
            let j ← j + 1
            let k ← k + 1
            if k = length(W) then
                (occurrence found, if only first occurrence is needed, m ← j - k  may be returned here)
                let P[nP] ← j - k, nP ← nP + 1
                let k ← T[k] (T[length(W)] can't be -1)
        else
            let k ← T[k]
            if k < 0 then
                let j ← j + 1
                let k ← k + 1
```
# Partial Match Table

Therefore, we compile the following table:

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>i</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    [
      {
        "content": "<code>W\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
      "D",
      ""
    ],
    [
      {
        "content": "<code>T\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "-1",
      "0",
      "0",
      "0",
      "-1",
      "0",
      "2",
      "0"
    ]
  ],
  "tableStyle": "text-align: right;"
}
```

Another example:

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>i</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    [
      {
        "content": "<code>W\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "A",
      "B",
      "A",
      "C",
      "A",
      "B",
      "A",
      "B",
      "C",
      ""
    ],
    [
      {
        "content": "<code>T\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "-1",
      "0",
      "-1",
      "1",
      "-1",
      "0",
      "-1",
      "3",
      "2",
      "0"
    ]
  ],
  "tableStyle": "text-align: right;"
}
```

Another example (slightly changed from the previous example):

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>i</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    [
      {
        "content": "<code>W\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "A",
      "B",
      "A",
      "C",
      "A",
      "B",
      "A",
      "B",
      "A",
      ""
    ],
    [
      {
        "content": "<code>T\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "-1",
      "0",
      "-1",
      "1",
      "-1",
      "0",
      "-1",
      "3",
      "-1",
      "3"
    ]
  ],
  "tableStyle": "text-align: right;"
}
```

Another more complicated example:

```merge-table
{
  "rows": [
    [
      {
        "content": "<code>i</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    [
      {
        "content": "<code>W\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "P",
      "A",
      "R",
      "T",
      "I",
      "C",
      "I",
      "P",
      "A",
      "T",
      "E",
      "",
      "I",
      "N",
      "",
      "P",
      "A",
      "R",
      "A",
      "C",
      "H",
      "U",
      "T",
      "E",
      ""
    ],
    [
      {
        "content": "<code>T\\[i\\]</code>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      "-1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "-1",
      "0",
      "2",
      "0",
      "0",
      "0",
      "0",
      "0",
      "-1",
      "0",
      "0",
      "3",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ]
  ],
  "tableStyle": "text-align: right;"
}
```
