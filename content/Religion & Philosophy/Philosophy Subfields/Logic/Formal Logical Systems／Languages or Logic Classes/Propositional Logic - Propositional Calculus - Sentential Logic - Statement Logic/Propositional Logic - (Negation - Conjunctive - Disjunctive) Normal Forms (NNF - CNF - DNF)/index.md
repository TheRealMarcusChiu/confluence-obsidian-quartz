---
title: "Propositional Logic - (Negation - Conjunctive - Disjunctive) Normal Forms (NNF - CNF - DNF)"
created: 2021-09-13T04:44:29.290-05:00
modified: 2021-09-13T04:44:29.290-05:00
parent: "[[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic]]"
children: []
---
- <strong>literal</strong> - is an atomic formula or its negation
- <strong>maxterm</strong> - is a literal or a <strong>disjunction</strong> of literals
- <strong>minterm</strong> - is a literal or a <strong>conjunction</strong> of literals

### Types of Normal Forms

```merge-table
{
  "rows": [
    [
      {
        "content": "Types",
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
      "Negation Normal Form (NNF)",
      "a formula where:\n- the only <em>logical connectives</em> allowed are <em>and</em>, <em>or</em>, and <em>not</em>\n- not is only applied to atomic formulae"
    ],
    [
      "Conjunctive Normal Form (CNF)",
      "a formulae that is a conjunction of maxterms/disjunctions"
    ],
    [
      "Disjunctive Normal Form (DNF)",
      "a formulae that is a disjunction of minterms/conjunctions"
    ]
  ]
}
```
### Translation to Normal Form
- <strong>Translation to NNF</strong>
	- remove ↔  and →
		- A ↔ B ≃ (A → B) and (B → A)
		- A → B ≃ ¬A or B
	- push negations in until they apply only to atomic literals
		- ¬¬A ≃ A
		- ¬(A and B) ≃ ¬A or ¬B
		- ¬(A or B) ≃ ¬A and ¬B
	- at this point the formula is in Negation Normal Form
- <strong>Translation to CNF from NNF</strong>
	- push disjunctions (or) in until they apply only to literals
		- A or (B and C) ≃ (A or B) and (A or C)
	- delete any maxterm that contains both P and ¬P since it is equivalent to <em>true</em>
	- delete any maxterm that includes another maxterm
		- A and (A or B) ≃ A
	- take 2 maxterms of the form below
		- (P or A) and (¬P or A) ≃ A
- <strong>Translation to DNF from NNF</strong>
	- push conjunctions (and) in until they apply only to literals
		- A and (B or C) ≃ (A and B) or (A and C)
	- exactly the same simplifications can be performed for DNF as for CNF, exchanging the roles of <em>∧</em> and <em>v</em>
