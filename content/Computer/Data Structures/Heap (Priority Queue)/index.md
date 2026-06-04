---
title: "Heap (Priority Queue)"
created: 2019-12-17T18:37:30.176-06:00
modified: 2026-01-13T14:01:38.435-06:00
parent: "[[Data Structures]]"
children: []
---
a <strong>heap</strong> is a specialized tree-based [[Heap (Priority Queue)|data structure]] which is essentially an almost complete tree that satisfies the <strong>heap property </strong>either:
- <strong>max heap</strong> - the value of every parent node is greater than its children
- <strong>min heap</strong> - the value of every parent node is lesser than its children

# Heap Implementations & Their Operation [[Heap (Priority Queue)|Time-Complexities]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Heap Implementation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "find-min",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "delete-min",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "insert",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "decrease-key",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "meld",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Binary](https://en.wikipedia.org/wiki/Binary_heap)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(<em>n</em>)",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Leftist](https://en.wikipedia.org/wiki/Leftist_tree)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Binomial](https://en.wikipedia.org/wiki/Binomial_heap)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_heap)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Pairing](https://en.wikipedia.org/wiki/Pairing_heap)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>o</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Brodal](https://en.wikipedia.org/wiki/Brodal_queue)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Rank-pairing](https://en.wikipedia.org/w/index.php?title=Rank-pairing_heap&action=edit&redlink=1)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[Strict Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_heap)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[2-3 heap](https://en.wikipedia.org/wiki/2-3_heap)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>O</em>(log <em>n</em>)",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "<em>Θ</em>(1)",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<em>? </em>",
        "bg": "blue",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 65.4851%;"
}
```
