---
title: "Non-Deterministic Turing Machine (NTM)"
created: 2021-09-13T05:25:03.249-05:00
modified: 2021-09-13T05:25:03.249-05:00
parent: "[[Turing Machine (TM)]]"
children: []
---
In contrast to a [[Deterministic Turing Machine (DTM)]], a <strong>non-deterministic [[Turing Machine (TM)|Turing machine]]</strong> (<strong>NTM</strong>), the set of rules may prescribe <strong>more than one action</strong> to be performed for any given situation.

For example, an X on the tape in state 3 might allow the NTM to either:
- Write a Y, move right, and switch to state 5
- Write an X, move left, and stay in state 3

### Resolution of Multiple Rules

How does the NTM "know" which of these actions it should take? There are two ways of looking at it. One is to say that the machine is the "luckiest possible guesser"; it always picks a transition that eventually leads to an accepting state, if there is such a transition. The other is to imagine that the machine "branches" into many copies, each of which follows one of the possible transitions. Whereas a DTM has a single "computation path" that it follows, an NTM has a "computation tree". If at least one branch of the tree halts with an "accept" condition, we say that the NTM accepts the input.
