---
title: "P - NP - NPC - NPI - NPO - NPH"
created: 2021-09-13T05:24:51.791-05:00
modified: 2023-12-07T14:22:25.783-06:00
parent: "[[Complexity Classes]]"
children:
  - "[[NP Complete／Completeness Problems]]"
  - "[[P vs NP (P = NP or P ≠ NP)]]"
---
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# P - NP - NPC - NPI - NPO - NPH

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Explanation 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Explanation 2",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "P (Polynomial Time)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- P is a complexity class that represents the set of all decision problems that can be solved in polynomial time by a [[Deterministic Turing Machine (DTM)|deterministic Turing machine]].\n- That is, given an instance of the problem, the answer yes or no can be decided in polynomial time.\n- Since they can be solved in polynomial time, they can also be verified in polynomial time. Therefore P is a subset of NP.\n- Example\n\t- Given a connected graph G, can its vertices be colored using two colors so that no edge is monochromatic?\n\t- Algorithm: start with an arbitrary vertex, color it red and all of its neighbors blue, and continue. Stop when you run out of vertices or you are forced to make an edge have both of its endpoints be the same color.",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "NP (Non-Deterministic Polynomial Time)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- NP is a complexity class that represents the set of all decision problems for which the CORRECT answers can be VERIFIED in polynomial time by a [[Deterministic Turing Machine (DTM)|deterministic Turing machine]]\n- This means that if someone gives us an instance of the problem and a certificate (sometimes called a witness) to the answer is yes, we can check that it is correct in polynomial time.\n- Example\n\t- Integer factorization is in NP. This is the problem that given integers n and m, is there an integer f with 1 \\< f \\< m, such that f divides n (f is a small factor of n)?\n\t- This is a decision problem because the answers are yes or no. If someone hands us an instance of the problem (so they hand us integers n and m) and an integer f with 1 \\< f \\< m, and claims that f is a factor of n (the certificate), we can check the answer in polynomial time by performing the division n / f.",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "Co-NP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- Co-NP is a complexity class that represents the set of all decision problems for which the INCORRECT answers can be VERIFIED in polynomial time by a [[Deterministic Turing Machine (DTM)|deterministic Turing machine]]\n- may or may not be the same as NP",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>NP-Complete (NPC)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- NP-Complete is a complexity class that represents the set of all problems X in NP for which any other NP problem Y could be [[Polynomial-Time Bounded Reducibilities|polynomial-time reducible]] to X.\n- So, what makes NP-Complete so interesting is that if any one of the NP-Complete problems were to be solved quickly, then all NP problems could be solved quickly. This is why \"P = NP?\" is such a famous question.\n- Example\n\t- 3-SAT. This is the problem wherein we are given conjunction (ANDs) of 3-clause disjunctions (ORs), statements of the form\n\t\t- (x<sub>11</sub> OR x<sub>21</sub> OR x<sub>31</sub>) AND\n\t\t- (x<sub>12</sub> OR x<sub>22</sub> OR x<sub>32</sub>) AND\n\t\t- ... AND\n\t\t- (x<sub>1n</sub> OR x<sub>2n</sub> OR x<sub>3n</sub>)\n\t- where each x<sub>ij</sub> is a boolean variable or the negation of a variable from a finite predefined list (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>).\n\t- It can be shown that every NP problem can be reduced to 3-SAT. The proof of this is technical and requires the use of the technical definition of NP (based on non-deterministic Turing machines). This is known as Cook's theorem.",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>NP Intermediate (NPI)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "class of decision problems in NP that are neither P nor NP-Complete. [Ladner's theorem](http://en.wikipedia.org/wiki/Ladner%27s_theorem) asserts that, if [[P vs NP (P = NP or P ≠ NP)|P ≠ NP]], then NPI is not empty",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>NP Optimization (NPO)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "The complexity class of [[Decision Problems - Optimization Problems|optimization problems]] within NP that finds the <em>best</em> solution from all feasible solutions",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "NPH\nNP-Hard",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- NP-Hard are problems that are at LEAST as hard as the NP-Complete\n- The precise definition here is that a problem X is NP-hard if there is an NP-complete problem Y, such that Y is reducible to X in polynomial time.\n- Note that all NP-Complete problems are also NP-hard\n- However, not all NP-hard problems are NP (or even a decision problem), despite having NP as a prefix. That is the NP in NP-hard does not mean non-deterministic polynomial time. Yes, this is confusing, but its usage is entrenched and unlikely to change\n- since any NP-complete problem can be reduced to any other NP-complete problem in polynomial time, all NP-complete problems can be reduced to any NP-hard problem in polynomial time. Then, if there is a solution to one NP-hard problem in polynomial time, there is a solution to all NP problems in polynomial time\n- Example\n\t- The halting problem is an NP-hard problem. This is the problem that given a program P and input I, will it halt? This is a decision problem but it is not in NP. It is clear that any NP-complete problem can be reduced to this one. As another example, any NP-complete problem is NP-hard",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "NP-Easy",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- NP-Easy are problems that are at MOST as hard as the NP-Complete or NP?",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
