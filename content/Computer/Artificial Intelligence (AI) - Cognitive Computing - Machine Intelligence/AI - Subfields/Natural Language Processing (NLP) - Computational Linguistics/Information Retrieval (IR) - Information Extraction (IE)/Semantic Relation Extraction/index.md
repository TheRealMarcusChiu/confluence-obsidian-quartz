---
title: "Semantic Relation Extraction"
created: 2020-11-21T19:34:23.577-06:00
modified: 2026-05-21T13:34:19.170-05:00
parent: "[[Information Retrieval (IR) - Information Extraction (IE)]]"
children: []
---
###### Semantic Relation Extraction
- extracting [[Semantics|semantics]]/[[Semantic Relations|semantic relations]] from unstructured text data

# An Approach to Lexical-Syntactic Pattern Discovery
1. pick one Semantic Relation at a time
2. find lexico-syntactic patterns that express that SR
3. create a corpus with positive and negative examples
4. learn constraints that discover the SR
5. evaluate performance: precision and recall

# Lexical-Syntactic Patterns Expressing Meronymy

Variety of meronymy expressions

```merge-table
{
  "rows": [
    [
      {
        "content": "Explicit Part-Whole Constructions",
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">The substance consists of two ingredients</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">Iceland is a member of NATO</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">He is part of the game</font></code> (\\*not part-whole)"
    ],
    [
      {
        "content": "Implicit Part-Whole Constructions",
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">girl’s mouth</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">eyes of the baby</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">high heel shoes</font></code>"
    ],
    [
      {
        "content": "Manual Inspection of Pattern Types",
        "bg": "#F4F5F7"
      },
      "- lexical-level patterns\n- phrase-level patterns\n- sentence-level patterns"
    ]
  ]
}
```

Get pattern statistics and select the most frequent ones:
- <code><font style="color: rgb(128,128,128);">NP1 of NP2</font></code>
- <code><font style="color: rgb(128,128,128);">NP1’s NP2</font></code>
- <code><font style="color: rgb(128,128,128);">NP1 have NP2</font></code>

# <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">Meronymy </font></font>Learning Algorithm
- input: positive and negative meronymic examples of concept pairs
- output: semantic constraints on concepts

algorithm:
1. Generalize the training examples:
	- example: <code>{part\#sense; whole\#sense; target}</code>
	- generalized example: <code>{part\#sense, class<sub>part</sub>\#sense; whole\#sense, class<sub>whole</sub>\#sense; target}</code>
	- e.g. <code>{aria\#1, entity\#1; opera\#1, abstraction\#6; Yes}</code>
	- types of examples:
		- positive: <code>{X<sub>class</sub>\#sense; Y<sub>class</sub>\#sense; Yes}</code>
		- negative: <code>{X<sub>class</sub>\#sense; Y<sub>class</sub>\#sense; No}</code>
		- ambiguous: <code>{X<sub>class</sub>\#sense; Y<sub>class</sub>\#sense; Yes/No}</code>
2. Learn constraints for the unambiguous examples (positive and negative)
3. Specialize the ambiguous examples:
	1. based on the IS-A information provided by WordNet
	2. initially, each semantic class represented the root of one of the noun hierarchies in WordNet
	3. Go down in the hierarchy and specialize the semantic classes that correspond to the part, respectively whole
	4. repeat the specialization until no more ambiguous examples in the training corpus
