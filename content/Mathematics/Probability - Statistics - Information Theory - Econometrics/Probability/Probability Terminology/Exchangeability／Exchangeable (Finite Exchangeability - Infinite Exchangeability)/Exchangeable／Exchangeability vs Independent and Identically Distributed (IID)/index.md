---
title: "Exchangeable／Exchangeability vs Independent and Identically Distributed (IID)"
created: 2024-02-12T17:05:59.504-06:00
modified: 2024-02-12T17:20:55.793-06:00
parent: "[[Exchangeability／Exchangeable (Finite Exchangeability - Infinite Exchangeability)]]"
children: []
---
[[Exchangeability／Exchangeable (Finite Exchangeability - Infinite Exchangeability)|Exchangeable/Exchangeability]] vs [[Independent and Identically Distributed (IID)]]
# Exchangeability Does NOT Imply IID

The following is an <strong>exchangeable</strong> but not <strong>IID</strong>.

Consider an urn with a red ball and a blue ball; with a probability 1/2 of drawing either. Balls are drawn without replacement. Let:
- $Y_i = \begin{cases} 1 & \text{if the }i\text{th ball is red} \\ 0 & \text{otherwise} \\ \end{cases}$

Since 𝐏(𝑦<sub>1</sub>=1,𝑦<sub>2</sub>=0) = 𝐏(𝑦<sub>1</sub>=0,𝑦<sub>2</sub>=1) then {𝑦<sub>1</sub>,𝑦<sub>2</sub>} are <strong>exchangeable</strong>.

However, they are not [[Probability Independence|independent]] because:
- 𝐏(𝑦<sub>2</sub>=1|𝑦<sub>1</sub>=1) ≠ 𝐏(𝑦<sub>2</sub>=1)
- 0 ≠ 1/2

# IID Implies Exchangeability

If {𝑦<sub>1</sub>, 𝑦<sub>2</sub>, ..., 𝑦<sub>𝑛</sub>} are IID, then they are exchangeable.
