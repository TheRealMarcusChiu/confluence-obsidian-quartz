---
title: "Monotonic／Admissible - Non-Monotonic／Defeasible"
created: 2021-09-13T04:44:31.576-05:00
modified: 2022-01-07T20:18:34.207-06:00
parent: "[[Formal Logical Systems／Languages or Logic Classes - Properties]]"
children: []
---
<strong>monotonicity</strong> and <strong>non-monotonicity</strong> are [[Formal Logical Systems／Languages or Logic Classes - Properties|properties]] of [[Formal Logical Systems／Languages or Logic Classes|Formal Logical Systems/Languages or Logic Classes]]
# Monotonic Logic or Admissible Logic
- a property of a [formal logic language](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=330016) where the addition of any axioms to an existing theory T does not result in removal from the set of consequences of T
- set of theorems of the system does not change when that rule is added to the existing rules of the system
- requires all entailed sentences to remain entailed after new sentences are added to the KB. That is if KB |= α then KB ∧ β |= α
- i.e. for all sets of sentences A and B: if (A ⊨ α) then (A,B ⊨ α) where α is a sentence

# Non-Monotonic Logic or Defeasible Logic
- a formal logic that is not monotonic/admissible
- similar to: [[Reasoning (Argument)|defeasible reasoning]]
