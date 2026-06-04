---
title: "Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic"
created: 2021-09-13T04:44:28.915-05:00
modified: 2026-05-21T14:31:33.357-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children:
  - "[[Propositional Logic - (Negation - Conjunctive - Disjunctive) Normal Forms (NNF - CNF - DNF)]]"
---
<strong>Propositional Logic</strong> or <strong>Propositional Calculus</strong> (aka <strong>Sentential Logic</strong> and <strong>Statement Logic</strong>)
````excerpt
- the logic of [[Propositions|propositions]] (i.e. statements)
- is the branch of logic that studies:
	- methods of joining and/or modifying [[Propositions|propositions]]
	- the logical relationships and properties that are derived from these <em>methods of joining and/or modifying [[Propositions|propositions]]</em>
````
^excerpt

# Syntax & Semantics

```merge-table
{
  "rows": [
    [
      {
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Semantics",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "propositional symbols",
        "bg": "#F4F5F7"
      },
      "- denoted as capitalized letters (e.g. 𝐴, 𝐵, 𝐶, etc)\n- each propositional symbol has a Boolean value, either: 𝑡𝑟𝑢𝑒 or 𝑓𝑎𝑠𝑒"
    ],
    [
      {
        "content": "logical connectives/[[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|operators]]",
        "bg": "#F4F5F7"
      },
      "- [[Binary／Dyadic Operations／Operators|binary operators]]:\n\t- ↔⟷ - iff\n\t- → - implies\n\t- ∧ - and\n\t- ∨ - or\n- [[Unary Operations／Operators|unary operator]]:\n\t- ¬ - not"
    ],
    [
      {
        "content": "proposition/formulae/sentence",
        "bg": "#F4F5F7"
      },
      "- a proposition of <em>propositional symbol(s)</em> and <em>logical connective(s)</em>\n- example propositions:\n\t- <em>𝑃 ∨ 𝑄 → 𝑅</em>\n\t- <em>𝑃</em>\n\t- <em>¬𝑅</em>\n- <strong>interpretation/truth assignment</strong>\n\t- is a function from its set of propositional symbols to {𝑡𝑟𝑢𝑒, 𝑓𝑎𝑙𝑠𝑒}\n- <strong>relations between proposition/formulae/sentence</strong>\n\t- ≃ - equivalent\n\t- ⊨ - entails\n- <strong>types of proposition/formulae/sentence</strong>\n\t- <strong>valid/tautology</strong> - a formulae is <em>valid/tautology</em> iff every <em>interpretation</em> evaluates to <em>true</em>\n\t- <strong>satisfiable</strong> - a formalae is <em>satisfiable</em> iff there exists an <em>interpretation</em> that evaluates to <em>true</em>\n\t- <strong>unsatisfiable</strong> - a formulae is <em>unsatisfiable</em> iff there are no <em>interpretations</em> that evaluate to <em>true</em>"
    ]
  ]
}
```
# Equivalences

```merge-table
{
  "rows": [
    [
      {
        "content": "Equivalences",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "idempotency laws",
        "bg": "#F4F5F7"
      },
      "- 𝐴 ∧ 𝐴 ≃ 𝐴\n- 𝐴 ∨ 𝐴 ≃ 𝐴"
    ],
    [
      {
        "content": "commutative laws",
        "bg": "#F4F5F7"
      },
      "- 𝐴 ∧ 𝐵 ≃ 𝐵 ∧ 𝐴\n- 𝐴 ∨ 𝐵 ≃ 𝐵 ∨ 𝐴"
    ],
    [
      {
        "content": "associative laws",
        "bg": "#F4F5F7"
      },
      "- (𝐴 ∧ 𝐵) ∧ 𝐶 ≃ 𝐴 ∧ (𝐵 ∧ 𝐶)\n- (𝐴 ∨ 𝐵) ∨ 𝐶 ≃ 𝐴 ∨ (𝐵 ∨ 𝐶)"
    ],
    [
      {
        "content": "distributive laws",
        "bg": "#F4F5F7"
      },
      "- 𝐴 ∨ (𝐵 ∧ 𝐶) ≃ (𝐴 ∨ 𝐵) ∧ (𝐴 ∨ 𝐶)\n- 𝐴 ∧ (𝐵 ∨ 𝐶) ≃ (𝐴 ∧ 𝐵) ∨ (𝐴 ∧ 𝐶)"
    ],
    [
      {
        "content": "De Morgan's Laws",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "definitions of connectives",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "more negation laws",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "simplification",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ],
  "tableStyle": "width: 68.5227%;"
}
```
# Inference Rules / Logical Consequences / Entailment / ⊨

the notation 𝐴 ⊨ 𝐵 (formulae 𝐵 can be derived from formulae(s) 𝐴 by inference) has an alternative notation shown below
- <code>𝐴</code>
- <code>𝐵̅</code>

which emphasizes that this is not a sentence, but an inference rule. whenever a proposition/formulae/sentence(s) matches the pattern above the line, the inference rule concludes the premise below the line
![[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic/1.png|600]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
