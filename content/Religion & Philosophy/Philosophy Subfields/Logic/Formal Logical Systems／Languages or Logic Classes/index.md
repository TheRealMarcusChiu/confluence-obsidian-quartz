---
title: "Formal Logical Systems／Languages or Logic Classes"
created: 2021-09-13T04:44:24.764-05:00
modified: 2022-03-06T15:29:37.487-06:00
parent: "[[Logic]]"
children:
  - "[[Descriptive／Description Logic (DL)]]"
  - "[[Event Logic／Calculus]]"
  - "[[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory]]"
  - "[[Fluent Calculus]]"
  - "[[Fuzzy Logic]]"
  - "[[Lambda Calculus (λ-calculus)]]"
  - "[[Modal Logic]]"
  - "[[Probability Theory]]"
  - "[[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic]]"
  - "[[Second-Order Logic]]"
  - "[[Semantic Logic／Calculus]]"
  - "[[Situational Logic／Calculus]]"
---
````excerpt
[[Formal Logical Systems／Languages or Logic Classes|Formal Logical Systems/Languages or Logic Classes]] are formulations of [[Logic|logic]] that represents <strong><em>[[Knowledge|knowledge]]</em></strong> and <em><strong>[[Reasoning (Argument)|reasoning]]</strong> </em>capabilities

components of a Formal Logical System:
- <strong>well-defined syntax</strong> - set of lexicons
- <strong>semantics</strong> - what syntax means
- <strong>proof theory</strong> (inference engine) - says what can be inferred. thus producing new knowledge

<strong>knowledge</strong> is represented with the components: syntax and semantics

<strong>reasoning</strong> capabilities are dependent on the inference engine component used
````
^excerpt

# Use Cases
- [[Computer Languages - Logic／Logical Programming Languages|Programming Languages - Logic]]
- [[Knowledge Representation & Reasoning (KRR - KR² - KR&R) - Machine Reasoning (MR)]]

# Properties of Formal Logic Systems/Languages
```dataview
LIST
FROM ""
WHERE file.folder = [[Formal Logical Systems／Languages or Logic Classes - Properties]].file.folder + "/" + [[Formal Logical Systems／Languages or Logic Classes - Properties]].file.name
```

# Formal Logical Systems/Languages or Logic Classes

```merge-table
{
  "rows": [
    [
      {
        "content": "Formal Language",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Ontology|Ontological]] Commitment <em>(what exists in the world - allowed types of propositions about the world)</em>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Epistemology|Epistemological]] Commitment <em>(what an agent believes about each <strong>[[Propositions|proposition]] - allowed </strong>[[Data／Variable Types (Statistics／Programming)|data type/value]] assigned to each proposition)</em>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Boolean Logic",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(255,0,0);\">is not really a Formal Logic System?</font>",
      "",
      ""
    ],
    [
      {
        "content": "[[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|Propositional Logic]]",
        "bg": "#F4F5F7"
      },
      "expands on Boolean Logic",
      "facts",
      "true/false/unknown"
    ],
    [
      {
        "content": "[[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|First-Order Logic]]",
        "bg": "#F4F5F7"
      },
      "",
      "facts, objects, relations",
      "true/false/unknown"
    ],
    [
      {
        "content": "[[Second-Order Logic]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      ""
    ],
    [
      {
        "content": "Higher Order Logic",
        "bg": "#F4F5F7"
      },
      "",
      "",
      ""
    ],
    [
      {
        "content": "Temporal Logic",
        "bg": "#F4F5F7"
      },
      "added dimension of time",
      "facts, objects, relations, times",
      "true/false/unknown"
    ],
    [
      {
        "content": "Probability Theory",
        "bg": "#F4F5F7"
      },
      "",
      "facts",
      "degree of belief [0,1]"
    ],
    [
      {
        "content": "[[Fuzzy Logic]]",
        "bg": "#F4F5F7"
      },
      "",
      "facts with degree of truth [0,1]",
      "known interval value"
    ],
    [
      {
        "content": "[[Situational Logic／Calculus|Situational Logic/Calculus]]",
        "bg": "#F4F5F7"
      },
      "works well for single agent performing instantaneous, discrete actions",
      "",
      ""
    ],
    [
      {
        "content": "[[Event Logic／Calculus|Event Logic/Calculus]]",
        "bg": "#F4F5F7"
      },
      "works well for actions that have duration and overlaps with each other",
      "",
      ""
    ],
    [
      {
        "content": "[[Fluent Calculus]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[Lambda Calculus (λ-calculus)|Lambda Calculus]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[Descriptive／Description Logic (DL)|Descriptive/Description Logic (DL)]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[Semantic Logic／Calculus|Semantic Logic/Calculus]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
