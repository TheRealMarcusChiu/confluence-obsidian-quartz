---
title: "Grover’s Algorithm"
created: 2026-01-02T23:45:22.788-06:00
modified: 2026-01-02T23:47:11.762-06:00
parent: "[[Quantum - Algorithms／Computing／Programming／Systems]]"
children: []
---
###### Grover’s Algorithm
````excerpt
- is a [[Quantum - Algorithms／Computing／Programming／Systems|quantum algorithm]] that helps find a specific item in an unsorted database much faster than classical algorithms
````
^excerpt

# Classical vs. Grover’s Algorithm
- <strong>Classical search</strong>: If you have a set of N items and you're looking for one specific item, the classical algorithm would need to check each item one by one. In the worst case, this would take O(N) time.
- <strong>Grover’s algorithm</strong>: Grover's algorithm can find the item in O(√N) time, which is much faster as the database size grows larger. For instance, if there were a million items, a classical algorithm would require about 1 million steps, while Grover’s algorithm would only need around 1,000 steps.

# How It Works (at a High Level)
1. <strong>Initialization</strong>: Grover’s algorithm starts by creating a superposition of all possible states, using quantum bits (qubits).
2. <strong>Oracle Function</strong>: An "oracle" (a quantum black box function) is used to mark the solution. The oracle flips the sign of the state corresponding to the correct solution. It doesn’t "find" the solution, but marks it in a way that can be recognized by the algorithm.
3. <strong>Amplitude Amplification</strong>: Grover then applies a process called "amplitude amplification," which increases the probability of the correct answer by amplifying the amplitude of the marked state (the solution), while reducing the amplitude of others.
4. <strong>Measurement</strong>: After a few iterations of the oracle and amplitude amplification, you measure the qubits to get the solution.

The main speed-up comes from the fact that, unlike classical search, Grover’s algorithm doesn't need to check each item individually. It uses quantum superposition and interference to focus on the correct answer much faster.
