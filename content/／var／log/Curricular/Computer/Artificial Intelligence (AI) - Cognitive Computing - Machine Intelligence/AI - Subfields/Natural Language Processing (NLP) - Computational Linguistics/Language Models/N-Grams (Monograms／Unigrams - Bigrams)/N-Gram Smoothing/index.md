---
title: "N-Gram Smoothing"
created: 2020-10-14T00:20:54.687-05:00
modified: 2020-10-14T00:45:00.205-05:00
parent: "[[N-Grams (Monograms／Unigrams - Bigrams)]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "N-Gram Smoothing Techniques",
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
      "Add-One Smoothing",
      "𝐏(𝑤<sub>2</sub>|𝑤<sub>1</sub>) = \\[𝐶(𝑤<sub>1</sub>𝑤<sub>2</sub>)+1\\] / \\[𝐶(𝑤<sub>1</sub>)+𝑉\\]\n\nwhere:\n- 𝐶(𝑤<sub>1</sub>𝑤<sub>2</sub>) - counts of 𝑤<sub>1</sub>𝑤<sub>2</sub> occuring in corpus\n- 𝐶(𝑤<sub>1</sub>) - counts of 𝑤<sub>1</sub>occuring in corpus\n- 𝑉 - vocabulary size"
    ],
    [
      "Add-𝑎 Smoothing",
      "𝐏(𝑤<sub>2</sub>|𝑤<sub>1</sub>) = \\[𝐶(𝑤<sub>1</sub>𝑤<sub>2</sub>)+𝑎\\] / \\[𝐶(𝑤<sub>1</sub>)+𝑎𝑉\\]"
    ],
    [
      "Good-Turing Discounting",
      "𝐏(𝑤<sub>2</sub>|𝑤<sub>1</sub>) = 𝐏\\*(𝑤<sub>1</sub>𝑤<sub>2</sub>) / 𝐏\\*(𝑤<sub>1</sub>)\n\nwhere:\n- 𝐏\\*(𝑤<sub>1</sub>𝑤<sub>2</sub>) = ((𝑐<sub>12</sub>+1)·𝑁<sub>𝑐<sub>12</sub>+1</sub>) / (𝑁<sub>𝑐<sub>12</sub></sub>·𝑁)\n- 𝐏\\*(𝑤<sub>1</sub>) = ((𝑐<sub>1</sub>+1)·𝑁<sub>𝑐<sub>1</sub>+1</sub>) / (𝑁<sub>𝑐<sub>1</sub></sub>·𝑁)\n\nwhere:\n- 𝑐<sub>12</sub> = 𝐶(𝑤<sub>1</sub>𝑤<sub>2</sub>) - counts of 𝑤<sub>1</sub>𝑤<sub>2</sub> occuring in corpus\n- 𝑐<sub>1</sub> = 𝐶(𝑤<sub>1</sub>) - counts of 𝑤<sub>1</sub>occuring in corpus\n- 𝑁<sub>𝑐</sub> = the number of N-Grams that occur 𝑐 times\n- 𝑁 = total number of N-Gram𝑠"
    ],
    [
      "Backoff",
      ""
    ]
  ]
}
```
