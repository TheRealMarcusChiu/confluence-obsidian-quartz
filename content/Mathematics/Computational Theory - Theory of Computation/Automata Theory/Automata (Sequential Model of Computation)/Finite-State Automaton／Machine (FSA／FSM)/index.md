---
title: "Finite-State Automaton／Machine (FSA／FSM)"
created: 2021-09-13T05:25:00.915-05:00
modified: 2021-09-13T05:25:00.915-05:00
parent: "[[Automata (Sequential Model of Computation)]]"
children: []
---
<strong>Finite-State Automaton (FSA)</strong> or <strong>Finite State Machine (FSM)</strong> or <strong>Finite-State Automata</strong> or<strong> Finite Automata</strong> or <strong>Automaton</strong>
- is an [[Automata (Sequential Model of Computation)|automata]] used to model [[Formal Grammars - Chomsky Hierarchy|regular grammars]]

### FSM Parameters
- <strong>Q</strong> - a finite set of states
- <strong>Σ</strong> - a finite set of input symbols
- <strong>q</strong> - the start state
- <strong>F</strong> - a finite set of final states
- <strong>ẟ(q, i)</strong> - a transition function or transition matrix between states. given a state q in Q and input i in Σ, ẟ(q, i) returns a new state q' in Q. thus, ẟ is a relation from Q x Σ to Q

### FSM - Types (Deterministic vs Non-Deterministic)
- <strong>Deterministic FSA</strong> <strong>(DFSA)</strong> - algorithm have exactly 1 choice for every input
- <strong>Non-Deterministic FSA (NFSA)</strong> - algorithm have more than 1 choice for at least 1 input
	- <strong>epsilon-transition</strong> or <strong>ϵ-transition</strong> - automaton may transition without input

###### Deterministic FSA
![[Finite-State Automaton／Machine (FSA／FSM)/deterministic-finite-state-automaton.png|330]]
###### Non-Deterministic FSA (multiple choices for input a)
![[Finite-State Automaton／Machine (FSA／FSM)/non-deterministic-finite-state-automaton.png|330]]
###### Non-Deterministic FSA (<strong>ϵ-transition)</strong>
![[Finite-State Automaton／Machine (FSA／FSM)/non-deterministic-finite-state-automaton-2.png|330]]
### Problem with NFSA

the problem with Non-Deterministic FSM is figuring out which choice to make when there are multiple choices
###### 3 Standard Solutions:
- <strong>backup</strong> - whenever choice point reached, we put a marker at input and state the automaton was in. then if it turns out we took the wrong choice, we backup and try another path
- <strong>look ahead</strong> - look ahead in the input sequence to help us decide which path to take at choice point
- <strong>parallelism</strong> - whenever choice point reached,  proceed with every alternative path in parallel

### Relation of DFSA and NFSA

for any NFSA there is an equivalent DFSA

there is a simple algorithm for converting NFSA to DFSA, although the number of states in this equivalent DFSA may be much larger
