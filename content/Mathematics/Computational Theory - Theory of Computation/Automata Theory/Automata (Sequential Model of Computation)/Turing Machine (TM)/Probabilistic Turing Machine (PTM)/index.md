---
title: "Probabilistic Turing Machine (PTM)"
created: 2021-09-13T05:25:02.237-05:00
modified: 2023-12-07T14:47:38.350-06:00
parent: "[[Turing Machine (TM)]]"
children: []
---
In [[Computability Theory - Recursion Theory|computability theory]], a <strong>probabilistic [[Turing Machine (TM)|Turing machine]]</strong> is a [[Non-Deterministic Turing Machine (NTM)|non-deterministic Turing machine]] that chooses between the available transitions at each point according to some [[Univariate Probability Distribution|probability distribution]]

As a consequence, a probabilistic Turing machine can (unlike a [[Deterministic Turing Machine (DTM)|deterministic Turing Machine]]) have stochastic results; on a given input and instruction state machine, it may have different run times, or it may not halt at all; further, it may accept input in one execution and reject the same input in another execution.
