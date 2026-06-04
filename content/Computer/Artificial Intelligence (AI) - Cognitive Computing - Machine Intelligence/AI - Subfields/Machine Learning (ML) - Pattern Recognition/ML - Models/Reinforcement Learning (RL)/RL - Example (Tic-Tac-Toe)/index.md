---
title: "RL - Example (Tic-Tac-Toe)"
created: 2020-09-10T14:35:12.914-05:00
modified: 2022-09-19T02:52:27.733-05:00
parent: "[[Reinforcement Learning (RL)]]"
children: []
---
# Initial State

𝑇\[𝑠,𝑣\] - table of all possible states 𝑠 paired with a probability 𝑣 of winning from that state
- states with 3 Xs in a row are assigned 𝑣=1.0
- states with 3 Os in a row are assigned 𝑣=0.0
- all other states are assigned 𝑣=0.5

# Training

the policy is selected from 2 of the following:
- greedy move - select move that leads to the state with greatest value 𝑣
- random exploratory move - select move among other possible states

# Learning

each greedy move we backup the value with update rule called temporal-difference learning method
- 𝑉(𝑠) ← 𝑉(𝑠) + 𝛼 \[𝑉(𝑠') - 𝑉(𝑠)\]

where:
- 𝛼 step-size parameter - which influences the rate of learning.
- 𝑉(𝑠) - estimated value of state 𝑠
- 𝑠 - state before greedy move
- 𝑠' - state after greedy move

If the step-size parameter is not reduced all the way to zero over time, then this player also plays well against opponents that slowly change their way of playing
