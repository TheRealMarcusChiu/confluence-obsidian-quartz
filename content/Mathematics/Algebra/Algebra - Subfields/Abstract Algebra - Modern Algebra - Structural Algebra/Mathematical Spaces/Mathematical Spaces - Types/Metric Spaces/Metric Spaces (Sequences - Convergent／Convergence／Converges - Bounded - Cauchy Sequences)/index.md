---
title: "Metric Spaces (Sequences - Convergent／Convergence／Converges - Bounded - Cauchy Sequences)"
created: 2023-06-22T23:43:10.465-05:00
modified: 2023-06-24T11:12:31.680-05:00
parent: "[[Metric Spaces]]"
children: []
---
Let (𝑋, 𝑑) be a [[Metric Spaces|metric space]] where:
- 𝑋 be a set of elements
- 𝑑 is a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]] (i.e. 𝑑 : 𝑋×𝑋 → ℝ<sup>+</sup>)

# Sequence in 𝑋

A <em>sequence</em> of 𝑋 is denoted as either 1 of the following:
1. (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>∞</sub>)
2. (𝑥<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>
3. 𝑥: ℕ → 𝑋
4. 𝑛 ↦ 𝑥<sub>𝑛</sub>

# Convergent Sequence

A sequence (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>∞</sub>) is <em>convergent</em> if:
- ∃𝑥̃∊𝑋 ∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛∊𝑁 : 𝑑(𝑥<sub>𝑛</sub>,𝑥̃) \< 𝜀

The above formula can be written as:
- 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑥<sub>𝑛</sub>) = 𝑥̃

# Bounded Sequence

A sequence (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>∞</sub>) is <em>bounded</em> if:
- ∃𝑝∊𝑋 ∃𝛽∊ℝ ∀𝑛∊ℕ : 𝑑(𝑝,𝑥<sub>𝑛</sub>) \< 𝛽

# Cauchy Sequences <sup>[[Mathematical Space (Cauchy Sequences)|(general definition)]]</sup>

A sequence (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>∞</sub>) is a Cauchy sequence if for every positive [real number](http://confluence.marcuschiu.com/display/NOT/Real+Numbers+System) 𝜀 \> 0 there is a positive integer 𝑁 such that for all positive integers 𝑚,𝑛 \> 𝑁, the distance
- 𝑑(𝑥<sub>𝑚</sub>,𝑥<sub>𝑛</sub>) \< 𝜀

Cauchy Sequences are used to define [completeness in metric spaces](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=52396888)
# Convergent Sequence vs Bounded Sequence
- a <em>sequence is convergent</em> if the value of the terms tends to a fixed number as the number of terms keeps on increasing
- a <em>sequence is bounded</em> if there exist two numbers such that all the terms of the sequence lie between these two numbers

A sequence being bounded is not a sufficient condition for a sequence to converge. For example, the sequence (−1)n is bounded, but the sequence diverges because the sequence oscillates between 1 and −1 and never approaches a finite number.

However, every <em>bounded sequence</em> contains a <em>convergent subsequence</em>. In other words, we can pick out some terms of the sequence that are getting closer and closer to each other (even if they aren't getting closer to all the terms in the original sequence).
# Convergent Sequence vs Cauchy Sequence

A sequence:
- (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>∞</sub>)

is a Cauchy sequence, if:
- ∀𝜀\>0 ∃𝑁\>0 ∀𝑚,𝑛\>𝑁 : 𝑑(𝑥<sub>𝑚</sub>,𝑥<sub>𝑛</sub>) \< 𝜀

is a Convergent sequence, if:
- ∃𝑥̃∊𝑋 ∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛∊𝑁 : 𝑑(𝑥<sub>𝑛</sub>,𝑥̃) \< 𝜀

###### Difference
- a Cauchy sequence need not be a convergent sequence
- every convergent sequence is Cauchy
- Convergent: there’s a particular thing your sequence elements get and stay arbitrarily close to
- Cauchy: the elements themselves get and stay arbitrarily close to each other
