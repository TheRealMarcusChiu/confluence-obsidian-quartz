---
title: "Formal Grammars - Chomsky Hierarchy"
created: 2021-09-13T05:25:04.800-05:00
modified: 2022-01-16T16:02:57.063-06:00
parent: "[[Formal Grammar - Formal Language]]"
children:
  - "[[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)]]"
---
````excerpt
###### Chomsky Hierarchy
- is a containment hierarchy of classes of [[Formal Grammar - Formal Language|formal language/grammars]]
- used to understand the complexity of [[Languages (Human／Natural Languages)|Human Languages]]

syntax definitions:
- 𝐴,𝐵 - non-terminals
- 𝑎,𝑏,𝑐 - terminals
- 𝛼,𝛿,𝛽 - strings of terminals and/or nonterminals (MAYBE empty)
- 𝛾 - a string of terminals and/or nonterminals (MUST be nonempty)
- 𝜖 - an [empty string](https://en.wikipedia.org/wiki/Empty_string) (i.e. the string of length 0)
```merge-table
{
  "rows": [
    [
      {
        "content": "Chomsky Type\n- Formal Grammar\n- Formal Language/Expressions\n\nAutomaton Accepting Formal Grammar/Language",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Grammar Production Rules",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Languages",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "###### Type-4\n- Finite Enumerable Grammar (FEG)\n- Finite Enumerable Language (FEL)\n\nMemory Lookup",
        "bg": "#F4F5F7"
      },
      "are defined by rules of the forms:\n- 𝑆 → 𝑠𝑡𝑟𝑖𝑛𝑔-𝑜𝑓-𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑙𝑠",
      "grammar rules <em><strong>G</strong></em>:\n- 𝑆 → 𝑎𝑏𝑐\n- 𝑆 → 𝑎𝑏\n\nlanguage of <em><strong>G</strong></em>:\n- 𝐿 = {𝑎𝑏𝑐, 𝑎𝑏}"
    ],
    [
      {
        "content": "###### Type-3\n- Regular Grammar (RG)\n- Regular Language (RL)\n\n[[Finite-State Automaton／Machine (FSA／FSM)|Finite-State Automaton (FSA, FA)]]",
        "bg": "#F4F5F7"
      },
      "regular grammar is EITHER left or right regular grammar:\n- right regular grammar - is defined by rules of the forms:\n\t- 𝐴 → 𝑎\n\t- 𝐴 → 𝑎𝐵\n\t- 𝐴 → 𝜖\n- left regular grammar - is defined by rules of the forms:\n\t- 𝐴 → 𝑎\n\t- 𝐴 → 𝐵𝑎\n\t- 𝐴 → 𝜖",
      "grammar rules <em><strong>G</strong></em>:\n- 𝐴 → 𝑎𝐵\n- 𝐵 → 𝑏𝐵\n- 𝐵 → 𝑐\n\nlanguage of <em><strong>G</strong></em>:\n- 𝐿 = { 𝑎𝑏<sup>𝑛</sup>𝑐 | 𝑛 ≥ 0 }"
    ],
    [
      {
        "content": "###### Type-2\n- [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|Context Free Grammar (CFG)]]\n- Context Free Language (CFL)\n\n[[Push-Down／Pushdown Automata (PDA)|Push-Down/Pushdown Automata (PDA)]]\n[[Finite-State Transducer (FST)]]",
        "bg": "#F4F5F7"
      },
      "defined by rules of the form:\n- 𝐴 → 𝛼",
      "grammar rules <em><strong>G</strong></em>:\n- 𝐴 → 𝑎𝐴𝑏\n- 𝐴 → 𝜖\n\nlanguage of <em><strong>G</strong></em>:\n- 𝐿 = { 𝑎<sup>𝑛</sup>𝑏<sup>𝑛</sup>| 𝑛 \\> 0 }"
    ],
    [
      {
        "content": "###### Type-1\n- Context Sensitive Grammar (CSG)\n- Context Sensitive Language (CSL)\n\n[[Linear-Bounded Automaton (LBA)]]",
        "bg": "#F4F5F7"
      },
      "defined by rules of the form:\n- 𝛼𝐴𝛽 → 𝛼𝛾𝛽\n- 𝐴 → 𝜖\n\nthe rule 𝐴 → 𝜖 is allowed if 𝐴 does not appear on the right side of any rule",
      "grammar rules <em><strong>G</strong></em>:\n- 𝑆 → 𝑎𝐵𝑆𝑐\n- 𝑆 → 𝑎𝑏𝑐\n- 𝐵𝑎 → 𝑎𝐵\n- 𝐵𝑏 → 𝑏𝑏\n\nlanguage of <em><strong>G</strong></em>:\n- <em><strong>L</strong></em>(<em><strong>G</strong></em>) = { 𝑎<sup>𝑛</sup>𝑏<sup>𝑛</sup>𝑐<sup>𝑛</sup>| 𝑛 \\> 0 }"
    ],
    [
      {
        "content": "###### Type-0.5\n- Recursive Grammar (RG)\n- Recursive Language (RL)",
        "bg": "#F4F5F7"
      },
      "<strong>recursive grammar</strong> if it contains [production rules](https://en.wikipedia.org/wiki/Formal_grammar#The_syntax_of_grammars) that are [recursive](https://en.wikipedia.org/wiki/Recursion_(computer_science)), meaning that expanding a non-terminal according to these rules can eventually lead to a string that includes the same non-terminal again. Otherwise, it is called a <strong>non-recursive grammar</strong>",
      ""
    ],
    [
      {
        "content": "###### Type-0\n- Recursively Enumerable Grammar (REG)\n- Recursively Enumerable Language (REL)\n\n[[Turing Machine (TM)]]",
        "bg": "#F4F5F7"
      },
      "defined by rules of the form:\n- 𝛼𝐴𝛽 → 𝛿",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

Every regular language is context-free, every context-free language is context-sensitive, every context-sensitive language is recursive, and every recursive language is recursively enumerable
````
^excerpt
