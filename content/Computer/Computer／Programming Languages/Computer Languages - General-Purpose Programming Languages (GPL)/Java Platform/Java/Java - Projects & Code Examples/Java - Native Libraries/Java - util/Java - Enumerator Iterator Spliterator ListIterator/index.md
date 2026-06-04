---
title: "Java - Enumerator Iterator Spliterator ListIterator"
created: 2021-01-08T17:25:24.559-06:00
modified: 2021-10-24T05:14:49.031-05:00
parent: "[[Java - util]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Property</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "<strong>Enumeration</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "<strong>Iterator</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Spliterator",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>ListIterator</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Applied to Where",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "applicable only for legacy classes like [Vector](https://www.geeksforgeeks.org/java-util-vector-class-java/), [HashTable](https://www.geeksforgeeks.org/hashtable-in-java/), [Stack](https://www.geeksforgeeks.org/stack-class-in-java/), etc",
        "align": "left"
      },
      {
        "content": "can be applied to any collection interface.",
        "align": "left"
      },
      "can be applied to any collection interface",
      {
        "content": "It can be applied to the only list interface like [ArrayList](https://www.geeksforgeeks.org/arraylist-in-java/), [LinkedList](https://www.geeksforgeeks.org/linked-list-in-java/), [Stack](https://www.geeksforgeeks.org/stack-class-in-java/), etc",
        "align": "left"
      }
    ],
    [
      {
        "content": "DEPRECATED?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Yes (introduced in 1.0)",
        "align": "left"
      },
      {
        "content": "No (introduced in 1.2)",
        "align": "left"
      },
      "No (introduced in 1.8)",
      {
        "content": "No (introduced in 1.2)",
        "align": "left"
      }
    ],
    [
      {
        "content": "Allowed Movement",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "forward direction only",
        "align": "left"
      },
      {
        "content": "forward direction only",
        "align": "left"
      },
      "forward direction only",
      {
        "content": "forward and backward direction",
        "align": "left"
      }
    ],
    [
      {
        "content": "Allowed Operation",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- read operation",
        "align": "left"
      },
      {
        "content": "- read operation\n- remove operation",
        "align": "left"
      },
      "- read operation\n- split",
      {
        "content": "- read operation\n- remove operation\n- add operation\n- replace operation",
        "align": "left"
      }
    ],
    [
      {
        "content": "How can we get it?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "```\nVector<Integer> v = new Vector<Integer>(); \nEnumeration e = v.elements(); \n```",
        "align": "left"
      },
      {
        "content": "```\nCollection<Integer> c = ...\nIterator<Integer> i = c.iterator(); \n```",
        "align": "left"
      },
      "```\nCollection<Integer> c = ...\nSpliterator<Integer> s = c.spliterator(); \n```",
      {
        "content": "```\nVector<Integer> v = ...\nListIterator<Integer> ltr = v.listIterator(); \n```",
        "align": "left"
      }
    ]
  ],
  "tableStyle": "text-align: justify;"
}
```
