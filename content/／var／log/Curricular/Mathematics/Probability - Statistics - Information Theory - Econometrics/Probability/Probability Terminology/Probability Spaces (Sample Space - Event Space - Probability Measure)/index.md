---
title: "Probability Spaces (Sample Space - Event Space - Probability Measure)"
created: 2021-09-13T05:28:39.860-05:00
modified: 2024-01-17T17:32:09.021-06:00
parent: "[[Probability Terminology]]"
children:
  - "[[Probability Measure]]"
---
###### Probability Spaces (𝛺,𝐹,𝐏)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a type of [[Measure Spaces|measure space]] such that the [[Measure／Measures|measure]] of the whole space is equal to one
- in [[Probability Theory|probability theory]], a probability space or a probability triple (𝛺, 𝐹, 𝐏) is a mathematical construct that provides a formal model of a [[Stochastic／Random／Markov Models／Process|random process]]:
	- a <strong>sample space/set</strong> <strong>𝛺</strong> which is the set of all possible outcomes
	- an <strong>event space/set</strong> <strong>𝐹</strong> more specifically a [[σ-Algebra - σ-Field of Sets - σ-field|σ-algebra]] on <strong>𝛺</strong>, where each event is a subset of <strong>𝛺</strong> i.e. a set containing zero or more outcomes (there are a maximum of 2<sup>|𝛺|</sup> events)
	- a <strong>[[Probability Measure|probability measure]]</strong> 𝐏: 𝐹 → \[0, 1\] that assigns each event in the event space a [[Probability|probability]] (i.e. a number between 0 and 1)
````
^excerpt

# Probability Space - Definition

A probability space is a triple (𝛺, 𝐹, 𝑃) consisting of:
- a sample space 𝛺 is the non-empty set of all possible outcomes
- the event space [[σ-Algebra - σ-Field of Sets - σ-field|σ-algebra]] 𝐹⊆2<sup>𝛺</sup> (also called σ-field) – a set of subsets of 𝛺, called events, such that:
	- 𝐹 contains the entire sample space: 𝛺∊𝐹
	- 𝐹 is closed under complements: if 𝐴∊𝐹, then also 𝛺\\𝐴∊𝐹
	- 𝐹 is closed under countable unions: if 𝐴<sub>𝑖</sub>∊ 𝐹 for 𝑖=1,2,..., then also (⋃<sub>1≤𝑖≤∞</sub> 𝐴<sub>𝑖</sub>) ∊ 𝐹
	- 𝐹 is closed under countable intersections: if 𝐴<sub>𝑖</sub>∊ 𝐹 for 𝑖=1,2,..., then also (⋂<sub>1≤𝑖≤∞</sub> 𝐴<sub>𝑖</sub>) ∊ 𝐹 <font style="color: rgb(122,134,154);">\# the corollary from the previous two properties and De Morgan’s law</font>
- the [[Probability Measure|probability measure]], 𝐏: 𝐹 → \[0, 1\], that assigns each event in the event space a probability, which is a number between 0 and 1
	- 𝐏 is [countably additive](https://en.wikipedia.org/wiki/Countably_additive) (also called σ-additive): if {𝐴<sub>𝑖</sub>}<sub>1≤𝑖≤∞</sub> ⊆ 𝐹 is a countable collection of pairwise disjoint sets, then 𝐏(⋃<sub>1≤𝑖≤∞</sub> 𝐴<sub>𝑖</sub>) = 𝛴<sub>1≤𝑖≤∞</sub> 𝐏(𝐴<sub>𝑖</sub>)
	- the measure of the entire sample space is equal to one: 𝐏(𝛺) = 1

# Probability Space - Example of Flipping 2 Coins

```merge-table
{
  "rows": [
    [
      "![[Probability Spaces (Sample Space - Event Space - Probability Measure)/probability-space-example.png|450]]\n\n[[probability-space-example.drawio]]",
      "𝛺 = {(H,H), (H,T), (T,H), (T,T)}\n- 𝐏(observation ∊ 𝑓) where 𝑓 ∊ <strong>F</strong>\n\nfor example:\n- 𝐏(observation ∊ {(H,H)}) = 0.25\n- 𝐏(observation ∊ {(H,H), (T,T)}) = 0.50\n- ..."
    ]
  ]
}
```
