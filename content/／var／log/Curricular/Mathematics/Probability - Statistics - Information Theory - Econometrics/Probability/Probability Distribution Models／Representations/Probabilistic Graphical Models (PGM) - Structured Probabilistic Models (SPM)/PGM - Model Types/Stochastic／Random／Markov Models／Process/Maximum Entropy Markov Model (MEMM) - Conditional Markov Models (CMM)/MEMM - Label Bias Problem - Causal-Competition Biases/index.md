---
title: "MEMM - Label Bias Problem - Causal-Competition Biases"
created: 2021-09-13T05:27:08.791-05:00
modified: 2023-06-04T09:32:53.628-05:00
parent: "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)]]"
children: []
---
Recalling how the transition probabilities are computed in a [[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)]] the probability of the next state is only dependent on the observation (i.e., the sequence of words) and the previous state, that is, we have an exponential model for each state to tell us the conditional probability of the next states:

![[MEMM - Label Bias Problem - Causal-Competition Biases/MEMM-label-bias-problem-1.png|125]]
MEMM transition probability computation

This causes the so-called Label Bias Problem, and Lafferty et al. 2001 demonstrate this through experiments and report it
# Basic Intuition

![[MEMM - Label Bias Problem - Causal-Competition Biases/MEMM-label-bias-problem-2.png|301]]
Label Bias Problem

Given the observation sequence: <strong><em>r</em> <em>i</em> <em>b</em></strong>

<em>“In the first time step, r matches both transitions from the start state, so the probability mass gets distributed roughly equally among those two transitions. Next, we observe i. Both states 1 and 4 have only one outgoing transition. State 1 has seen this observation often in training, and state 4 has almost never seen this observation; but like state 1, state 4 has no choice but to pass all its mass to its single outgoing transition, since it is not generating the observation, only conditioning on it. Thus, states with a single outgoing transition effectively ignore their observations.”</em>

<strong><em>“the top path and the bottom path will be about equally likely, independently of the observation sequence. If one of the two words is slightly more common in the training set, the transitions out of the start state will slightly prefer its corresponding transition, and that word’s state sequence will always win.”</em></strong>
- Transitions from a given state are competing against each other only
- Per state normalization, i.e. the sum of transition probability for any state has to sum to 1
- MEMM are normalized locally over each observation where the transitions going out from a state to compete only against each other, as opposed to all the other transitions in the model
- States with a single outgoing transition effectively ignore their observations
- Causes bias: states with fewer arcs are preferred

# Solution

The idea of a [[First-Order Linear Chain CRF|Linear Chain Conditional Random Field]] is to drop this local per-state normalization, and replace it with a global per sequence normalization
