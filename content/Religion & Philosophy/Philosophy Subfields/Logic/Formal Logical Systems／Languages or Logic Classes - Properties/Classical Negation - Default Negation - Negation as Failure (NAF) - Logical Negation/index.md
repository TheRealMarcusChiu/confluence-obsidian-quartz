---
title: "Classical Negation - Default Negation - Negation as Failure (NAF) - Logical Negation"
created: 2021-09-13T04:44:31.186-05:00
modified: 2021-09-13T04:44:31.186-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes - Properties]]"
children: []
---
### Negation as Failure and Logical Negation
- <strong>Negation as Failure (NAF)</strong> - is a [[Monotonic／Admissible - Non-Monotonic／Defeasible|non-monotonic]] inference rule, used to derive <em>not p</em> (p is assumed not to hold) from failure to derive <em>p</em>
- <strong>Logical Negation</strong> - <strong><em>¬</em><em>p</em></strong> is the logical negation of <strong><em>p</em></strong>

### Negation as Failure and Logical Negation: Combined
- <strong><em>¬</em><em>p ← not p</em></strong> (<em><em>¬</em></em>p holds by default - [[Closed World Assumption (CWA) - Argument From Ignorance (AFI) - Open World Assumption (OWA)|closed world assumption]])
- <strong><em>p ← not ¬p</em> </strong>(p holds by default - [[Closed World Assumption (CWA) - Argument From Ignorance (AFI) - Open World Assumption (OWA)|argument from ignorance]])

### Classical Negation - Default Negation - Negation as Failure (NAF) - Logical Negation

```merge-table
{
  "rows": [
    [
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "syntax",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "semantics",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "",
      "p",
      "p is true"
    ],
    [
      "",
      "not ¬p",
      "p is maybe true"
    ],
    [
      "",
      "not ¬p ʌ not p",
      "p is unknown"
    ],
    [
      "",
      "not p",
      "p is maybe false"
    ],
    [
      "",
      "¬p",
      "p is false"
    ]
  ]
}
```
### Related Articles
- [[Chapter 5 - Representing Defaults]]
