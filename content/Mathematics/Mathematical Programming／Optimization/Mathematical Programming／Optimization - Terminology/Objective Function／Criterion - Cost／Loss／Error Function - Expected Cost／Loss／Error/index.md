---
title: "Objective Function／Criterion - Cost／Loss／Error Function - Expected Cost／Loss／Error"
created: 2021-09-13T05:26:21.228-05:00
modified: 2024-09-23T09:56:38.970-05:00
parent: "[[Mathematical Programming／Optimization - Terminology]]"
children: []
---
<strong>objective function</strong> or <strong>criterion</strong> - the function we want to optimize (either: minimize or maximize)
- <strong>cost function</strong> or <strong>loss function</strong> or <strong>error function:</strong>
	- an objective function we want to MINIMIZE
	- is evaluated against a SINGLE training example:
		- 𝑙(𝜃|𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>)
- <strong>expected cost</strong> or <strong>expected loss</strong> or <strong>expected error</strong>:
	- is evaluated against the ENTIRE training set 𝒟:
		- 𝐿(𝜃|𝒟) = 𝐄<sub>(𝑥,𝑦)\~𝒟</sub>\[𝑙(𝜃|𝑥,𝑦)\]

# Example Functions

see: [[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis|Model - Performance/Accuracy/Evaluation/Goodness-of-Fit Measures/Metrics/Analysis]]
# Resources
- [Imperial's Deep learning course: Loss functions](https://www.youtube.com/watch?v=XJwekTdkJ44&list=PLut9dwe1z0dDOlSikFHe-HH4O3uxETj4m&index=14)
