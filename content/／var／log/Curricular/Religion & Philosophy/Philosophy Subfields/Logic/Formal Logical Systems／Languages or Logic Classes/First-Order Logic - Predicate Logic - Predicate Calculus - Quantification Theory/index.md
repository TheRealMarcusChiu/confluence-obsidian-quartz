---
title: "First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory"
created: 2021-09-13T04:44:26.539-05:00
modified: 2023-07-08T23:49:00.532-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children:
  - "[[Davidsonian Logic Forms]]"
  - "[[Logic Forms + Semantic Relations]]"
  - "[[Quantifiers (Universal Quantifier - For All - Existential Quantifier - There Exists)]]"
  - "[[Selective Linear Definite Clause Resolution (SLD Resolution)]]"
---
###### First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory
````excerpt
- the logic of predicate
- expands on [[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|propositional logic]], by using [[Subject - Predicate (Verb - Object)|predicates]], functions, quantifiers & variables, and objects
- allows the existence of <strong>objects</strong> and <strong>relations</strong>
- does not make an <em>[[Formal Logical Systems／Languages or Logic Classes|ontological commitment]]</em> to categories, time, and events
````
^excerpt

# First-Order Logic - Syntax & Semantics

```merge-table
{
  "rows": [
    [
      {
        "content": "Sentence",
        "bg": "#F4F5F7"
      },
      "is either:\n- AtomicSentence\n- ¬Sentence\n- Sentence BinaryLogicalConnective Sentence\n- Quantifier Variable, ... Sentence"
    ],
    [
      {
        "content": "AtomicSentence",
        "bg": "#F4F5F7"
      },
      "Predicate(Term, ...)"
    ],
    [
      {
        "content": "Term",
        "bg": "#F4F5F7"
      },
      "is either:\n- Function(Term, ...)\n- Constant\n- Variable"
    ],
    [
      {
        "content": "BinaryLogicalConnective",
        "bg": "#F4F5F7"
      },
      "is either: (↔ - iff), (→ - implies), (∧ - and), (v - or)"
    ],
    [
      {
        "content": "[[Quantifiers (Universal Quantifier - For All - Existential Quantifier - There Exists)|Quantifier]]",
        "bg": "#F4F5F7"
      },
      "∀𝑥 - universal quantifier\n- ∀𝑥Predicate(𝑥) means that Predicate holds for ALL values of 𝑥 in the domain associated with that variable\n- e.g. ∀𝑥 dolphin(𝑥) → mammal(𝑥)\n\n∃𝑥 - existential quantifier\n- ∃𝑥Predicate(𝑥) means that Predicate holds for SOME value of 𝑥 in the domain associated with that variable\n- e.g. ∃𝑥 mammal(𝑥) → lays-eggs(𝑥)"
    ],
    [
      {
        "content": "Constant",
        "bg": "#F4F5F7"
      },
      "represents objects in the world, such as: 𝐴, 𝑋<sub>1</sub>, 𝐽𝑜ℎ𝑛"
    ],
    [
      {
        "content": "Variable",
        "bg": "#F4F5F7"
      },
      "denoted as lowercase letters, such as: 𝑎, 𝑥, 𝑓𝑜𝑜"
    ],
    [
      {
        "content": "Predicate",
        "bg": "#F4F5F7"
      },
      "- maps objects to boolean values\n- is a Function that returns true or false, such as:\n\t- <span style=\"white-space: pre-wrap\"><code>President(Obama, America) \\# was true, now false</code></span>\n\t- <span style=\"white-space: pre-wrap\"><code>President(Marcus, America) \\# false</code></span>"
    ],
    [
      {
        "content": "Function",
        "bg": "#F4F5F7"
      },
      "- does not return a boolean value\n- specifies what a particular object is such as:\n\t- <span style=\"white-space: pre-wrap\"><code>Human(Obama)</code></span>\n\t- <span style=\"white-space: pre-wrap\"><code>Mother(Anna)</code></span>\n- maps objects to objects\n\t- <span style=\"white-space: pre-wrap\"><code>father-of(Mary) = John</code></span>\n\t- <span style=\"white-space: pre-wrap\"><code>color-of(Sky) = Blue</code></span>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
