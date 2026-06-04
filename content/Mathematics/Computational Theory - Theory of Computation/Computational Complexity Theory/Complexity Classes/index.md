---
title: "Complexity Classes"
created: 2021-09-13T05:24:50.647-05:00
modified: 2023-12-07T14:57:19.520-06:00
parent: "[[Computational Complexity Theory]]"
children:
  - "[[BPP (Bounded-Error Probabilistic Polynomial Time)]]"
  - "[[BQP (Bounded-Error Quantum Polynomial-Time)]]"
  - "[[EXPSPACE]]"
  - "[[EXPTIME - EXP - DEXPTIME]]"
  - "[[L (LSPACE - DLOGSPACE)]]"
  - "[[NEXPSPACE]]"
  - "[[NEXPTIME - NEXP]]"
  - "[[NL (Non-Deterministic Logarithmic-Space)]]"
  - "[[NP (Non-Deterministic Polynomial Time)]]"
  - "[[NPSPACE]]"
  - "[[P (Polynomial Time - PTIME)]]"
  - "[[P - NP - NPC - NPI - NPO - NPH]]"
  - "[[PSPACE]]"
  - "[[Polynomial-Time Bounded Reducibilities]]"
---
###### Complexity Classes
````excerpt
- a <strong>complexity class</strong> contains a set of [[Problems|problems]] that take a similar range of time and space to solve
- for example, a problem that belongs in the NP complexity class but not in the P complexity class CANNOT be solved with any [[Problems & Algorithms|algorithm]] whose [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time complexity]] is polynomial-time bounded
````
^excerpt

# Complexity Classes - Components

A <strong>complexity class</strong> is defined by the following components:
1. <strong>[[Computable／Computational Problems|Type of Computational Problem]]</strong> - e.g. [[Decision Problems - Optimization Problems|decision problems]], [[Decision Problems - Optimization Problems|optimization problems]], etc
2. <strong>[[Model of Computation - Computational Model|Model of Computation]]</strong> - e.g. [[Deterministic Turing Machine (DTM)|Deterministic Turing Machine]], [[Non-Deterministic Turing Machine (NTM)|Non-Deterministic Turing Machine]], etc
3. <strong>[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Bounded Resource Type(s)]]</strong> - either TIME or MEMORY/SPACE
4. <strong>[[(Big O - Little o - Omega - Theta) Bounds Notation|Bound(s)]]</strong> - a specified [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|asymptotic complexity]] (e.g. linear, polynomial, exponential, etc)

# Complexity Classes - Families and Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Complexity Class Family",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Computational Problem Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Automata (Sequential Model of Computation)|Model of Computation]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Resource]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[(Big O - Little o - Omega - Theta) Bounds Notation|Bound]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Complexity Class Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Diagram",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[DTIME](https://en.wikipedia.org/wiki/DTIME)(𝑓(𝑛))",
        "bg": "#F4F5F7"
      },
      "DECISION",
      {
        "content": "[[Deterministic Turing Machine (DTM)|Deterministic Turing Machine]]",
        "bg": "#e3fcef"
      },
      {
        "content": "Time / Search-Space",
        "bg": "#fffae6"
      },
      "𝑂(𝑓(𝑛))",
      "- [[P (Polynomial Time - PTIME)|P]] = DTIME(𝑝𝑜𝑙𝑦(𝑛))\n- [[EXPTIME - EXP - DEXPTIME|EXPTIME]] = DTIME(2<sup>𝑝𝑜𝑙𝑦(𝑛)</sup>)",
      {
        "content": "![[Complexity Classes/complexity-classes.png|301]]",
        "rowspan": 6
      }
    ],
    [
      {
        "content": "[NTIME](https://en.wikipedia.org/wiki/NTIME)(𝑓(𝑛))",
        "bg": "#F4F5F7"
      },
      "DECISION",
      {
        "content": "[[Non-Deterministic Turing Machine (NTM)|Non-Deterministic Turing Machine]]",
        "bg": "#ffebe6"
      },
      {
        "content": "Time / Search-Space",
        "bg": "#fffae6"
      },
      "𝑂(𝑓(𝑛))",
      "- [[NP (Non-Deterministic Polynomial Time)|NP]] = NTIME(𝑝𝑜𝑙𝑦(𝑛))\n- [[NEXPTIME - NEXP|NEXPTIME]] = NTIME(2<sup>𝑝𝑜𝑙𝑦(𝑛)</sup>)"
    ],
    [
      {
        "content": "[DSPACE](https://en.wikipedia.org/wiki/DSPACE)(<em>𝑓(𝑛)</em>)",
        "bg": "#F4F5F7"
      },
      "DECISION",
      {
        "content": "[[Deterministic Turing Machine (DTM)|Deterministic Turing Machine]]",
        "bg": "#e3fcef"
      },
      {
        "content": "Memory / Space",
        "bg": "#deebff"
      },
      "𝑂(𝑓(𝑛))",
      "- [[L (LSPACE - DLOGSPACE)|L]] = DSPACE(𝑙𝑜𝑔(𝑛))\n- [[PSPACE]] = DSPACE(𝑝𝑜𝑙𝑦(𝑛))\n- [[EXPSPACE]] = DSPACE(2<sup>𝑝𝑜𝑙𝑦(𝑛)</sup>)"
    ],
    [
      {
        "content": "[NSPACE](https://en.wikipedia.org/wiki/NSPACE)(𝑓(𝑛))",
        "bg": "#F4F5F7"
      },
      "DECISION",
      {
        "content": "[[Non-Deterministic Turing Machine (NTM)|Non-Deterministic Turing Machine]]",
        "bg": "#ffebe6"
      },
      {
        "content": "Memory / Space",
        "bg": "#deebff"
      },
      "𝑂(𝑓(𝑛))",
      "- [[NL (Non-Deterministic Logarithmic-Space)|NL]] = NSPACE(𝑙𝑜𝑔(𝑛))\n- [[NPSPACE]] = NSPACE(𝑝𝑜𝑙𝑦(𝑛))\n- [[NEXPSPACE]] = NSPACE(2<sup>𝑝𝑜𝑙𝑦(𝑛)</sup>)"
    ],
    [
      {
        "content": "PTIME(𝑓(𝑛))",
        "bg": "#F4F5F7"
      },
      "DECISION",
      "[[Probabilistic Turing Machine (PTM)|Probabilistic Turing Machine]]",
      "Time / Search-Space",
      "𝑂(𝑓(𝑛))",
      "- [[BPP (Bounded-Error Probabilistic Polynomial Time)|BPP]] = PTIME(𝑝𝑜𝑙𝑦(𝑛))"
    ],
    [
      {
        "content": "QTIME(𝑓(𝑛))",
        "bg": "#F4F5F7"
      },
      "DECISION",
      "[[Quantum Turing Machine (QTM)|Quantum Turing Machine]]",
      "Time / Search-Space",
      "𝑂(𝑓(𝑛))",
      "- [[BQP (Bounded-Error Quantum Polynomial-Time)|BQP]] = QTIME(𝑝𝑜𝑙𝑦(𝑛))"
    ]
  ],
  "tableStyle": "width: 97.8661%;"
}
```
# Other
- [[P - NP - NPC - NPI - NPO - NPH]]
- [[Polynomial-Time Bounded Reducibilities]]
