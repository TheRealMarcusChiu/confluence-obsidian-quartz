---
title: "Proof by Contrapositive／Contraposition"
created: 2023-05-20T17:42:20.649-05:00
modified: 2023-06-16T10:09:14.335-05:00
parent: "[[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)]]"
children: []
---
###### Proof by Contrapositive - Proof by Contraposition
````excerpt
- you assume that the conclusion is false and prove that the hypothesis is also false
- for example, the contrapositive of "If it is raining then the grass is wet" is "If the grass is not wet then it is not raining"
````
^excerpt

# Proof by Contrapositive - Why it Works

[[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)|conditional statements]] and [[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)|contrapositive statements]] are tautological

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
        "bg": "#F4F5F7"
      },
      {
        "content": "¬𝑄",
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "𝑃 → 𝑄",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "¬𝑄 → ¬𝑃\n¬𝑃 ← ¬𝑄",
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
      }
    ]
  ],
  "tableStyle": "width: 38.9706%;"
}
```
# Proof by Contrapositive - Example \#1

the contrapositive of "If it is raining then the grass is wet" is "If the grass is not wet then it is not raining"
# Proof by Contrapositive - Example \#2

exp

Let 𝑥 be an integer.

To prove: If 𝑥<sup>2</sup> is even, then 𝑥 is even.

Although direct proof can be given, we choose to prove this statement by contraposition. The contrapositive of the above statement is:

If 𝑥 is not even, then 𝑥<sup>2</sup> is not even.

This latter statement can be proven as follows: suppose that 𝑥 is not even, then 𝑥 is odd. The product of two odd numbers is odd, hence 𝑥<sup>2</sup>=𝑥⋅𝑥 is odd. Thus 𝑥<sup>2</sup> is not even.

Having proved the contrapositive, we can then infer that the original statement is true
