---
title: "Deterministic Turing Machine (DTM)"
created: 2021-09-13T05:25:03.018-05:00
modified: 2021-09-13T05:25:03.018-05:00
parent: "[[Turing Machine (TM)]]"
children: []
---
In a <strong>deterministic[[Turing Machine (TM)|Turing machine]] (DTM)</strong>, the set of rules prescribes <strong>at most one action</strong> to be performed for any given situation. In contrast to [[Non-Deterministic Turing Machine (NTM)]] which allows more than 1 action.

A deterministic Turing machine has a <em>transition function</em> that, for a given state and symbol under the tape head, specifies three things:
- the symbol to be written to the tape,
- the direction (left, right or neither) in which the head should move, and
- the subsequent state of the finite control.

For example, an X on the tape in state 3 might make the DTM write a Y on the tape, move the head one position to the right, and switch to state 5.
