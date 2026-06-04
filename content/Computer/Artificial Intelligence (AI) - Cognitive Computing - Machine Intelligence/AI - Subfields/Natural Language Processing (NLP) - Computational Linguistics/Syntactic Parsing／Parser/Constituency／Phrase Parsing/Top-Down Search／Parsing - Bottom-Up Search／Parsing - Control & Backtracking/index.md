---
title: "Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking"
created: 2020-11-02T14:02:11.972-06:00
modified: 2026-05-20T00:28:21.202-05:00
parent: "[[Constituency／Phrase Parsing]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Top-Down Search/Parsing",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Bottom-Up Search/Parsing",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking/NLP0.png|301]]",
        "colspan": 2
      },
      null
    ],
    [
      "since we're trying to find trees rooted with an <code>S</code>, why not start with the rules that give us an <code>S</code>, then work our way down to the terminal words",
      "we also want trees that cover the input word. So start with trees that link up words in the right way, then work our way up to form larger trees"
    ],
    [
      "only searches for trees that can be answers",
      "only forms trees consistent with the input words"
    ],
    [
      "suggests trees that are not consistent with any of the words",
      "suggest trees that make no sense globally"
    ],
    [
      "rules are applied from left to right",
      "rules are applied from right to left"
    ],
    [
      "- <code>S</code>\n- <code>NP VP</code>\n- <code>NAME VP</code>\n- <code>John VP</code>\n- <code>John V NP</code>\n- <code>John ate NP</code>\n- <code>John ate ART N</code>\n- <code>John ate the N</code>\n- <code>John ate the cat</code>",
      "- <code>John ate the cat</code>\n- <code>NAME ate the cat</code>\n- <code>NAME V the cat</code>\n- <code>NAME V ART cat</code>\n- <code>NAME V ART N</code>\n- <code>NP V ART N</code>\n- <code>NP V NP</code>\n- <code>NP VP</code>\n- <code>S</code>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Constituency Parsing - Control
- in both cases we left out how to keep track of the search space and how to make choices:
	- which node to try to expand next (DFS vs BFS)
	- which grammar rule to use to expand the node
- one approach is called <strong>back tracking</strong>: make a choice, if it doesn't work then back up and make a different choice

# Constituency Parsing - With Backtracking
- [[Depth First Search (DFS)|Depth-First Search]] - the states form a stack LIFO policy
- [[Breadth First Search (BFS)|Breadth-First Search]] - the states form a queue FIFO policy

example backtracking

```merge-table
{
  "rows": [
    [
      {
        "content": "Given",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Top-Down DFS Search",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "sentence:\n- 1 The 2 old 3 man 4 cried 5\n\nlexicon:\n- the: ART\n- old: ADJ, N\n- man: N, V\n- cried: V\n\ngrammar:\n- S → NP VP\n- NP → ART N\n- NP → ART ADJ N\n- VP → V\n- VP → V NP",
      "<span style=\"white-space: pre-wrap\"><code>    CURRENT-STATE   | BACKUP-STATES</code></span>\n\n<span style=\"white-space: pre-wrap\"><code> 1. S 1             |</code><br><code> 2. NP VP 1         |</code><br><code> 3. ART N VP 1      | ART ADJ N VP 1</code><br><code> 4. N VP 2          | ART ADJ N VP 1</code><br><code> 5. VP 3            | ART ADJ N VP 1</code><br><code> 6. V 3             | ART ADJ N VP 1 | V NP 3</code><br><code> 7. 4               | ART ADJ N VP 1 | V NP 3</code><br><code> 8. V NP 3          | ART ADJ N VP 1</code><br><code> 9. NP 4            | ART ADJ N VP 1</code><br><code>10. ART N 4         | ART ADJ N VP 1 | ART ADJ N 4</code><br><code>11. ART ADJ N 4     | ART ADJ N VP 1</code><br><code>12. ART ADJ N VP 1  |</code><br><code>13. ADJ N VP 2      |</code><br><code>14. N VP 3          |</code><br><code>15. VP 4            |</code><br><code>16. V 4             | V NP 4</code><br><code>17. 5               |</code></span>"
    ],
    [
      {
        "content": "Traversal Tree",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "![[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking/top-down-traversal-tree.png|301]]\n\n[[top-down-traversal-tree.drawio]]",
        "colspan": 2
      },
      null
    ]
  ]
}
```
# Problems

even with best filtering, backtracking methods are doomed because of two inter-related problems:
- ambiguity -
- shared sub-problems - no matter what kind of search (top-down or bottom-up or mixed):
	- we don't want to redo work we have already done
	- unfortunately, naive backtracking will lead to duplicated work

###### Ambiguity
![[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking/NLP9.png|400]]
