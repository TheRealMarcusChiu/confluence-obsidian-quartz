---
title: "Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)"
created: 2021-09-13T04:44:24.610-05:00
modified: 2023-05-20T17:51:50.259-05:00
parent: "[[Logic]]"
children:
  - "[[Proof by Contradiction]]"
  - "[[Proof by Contrapositive／Contraposition]]"
---
A <strong>conditional statement</strong> (if-then statement) consists of two parts:
- “if” clause (hypothesis or antecedent)
- “then” clause (conclusion or conclusion)

In this context, <strong>conditional statements </strong>are often considered as <strong>z</strong><strong>ero conditional</strong>. Other types exist and are described in [[English Conditionals]].

Given a <strong>conditional statement</strong> "if 𝑃, then 𝑄", we can create other <strong>related statements</strong>:
- conditional
- converse
- inverse
- contrapositive
- biconditional

# Truth Table - Conditional Statements & Its Related Statements

```merge-table
{
  "rows": [
    [
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "antecedent (hypothesis)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "consequent\n(conclusion)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "bg": "#F4F5F7"
      },
      {
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "conditional",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "contrapositive",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "converse",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "inverse",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "biconditional",
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑃",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "¬𝑃",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "¬𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑃 → 𝑄\n𝑃 ⇒ 𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "¬𝑃 ← ¬𝑄\n¬𝑃 ⇐ ¬𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑃 ← 𝑄\n𝑃 ⇐ 𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "¬𝑃 → ¬𝑄\n¬𝑃 ⇒¬𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑃 ↔ 𝑄\n𝑃 ⇔ 𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Given",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "then",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 4
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      }
    ],
    [
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      }
    ],
    [
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      }
    ],
    [
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "0",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "1",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 69.2647%;"
}
```

<strong>conditional</strong> and <strong>contrapositive</strong> are tautologies
<strong>converse</strong> and <strong>inverse</strong> are tautologies
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
