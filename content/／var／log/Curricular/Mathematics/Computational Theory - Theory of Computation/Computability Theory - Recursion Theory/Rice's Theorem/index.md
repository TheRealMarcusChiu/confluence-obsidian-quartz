---
title: "Rice's Theorem"
created: 2023-07-03T16:05:27.056-05:00
modified: 2023-07-03T16:12:10.644-05:00
parent: "[[Computability Theory - Recursion Theory]]"
children: []
---
###### Rice's Theorem
````excerpt
- in [[Computability Theory - Recursion Theory|computability theory]], it states that all non-trivial semantic properties of programs are undecidable:
	- a semantic property is one about the program's behavior (e.g. does the program terminate for all inputs)
	- a syntactic property (e.g. does the program contain an if-then-else statement)
	- a property is non-trivial if it is neither:
		- true for every partial computable function
		- false for every partial computable function
- can be put into terms of functions: for any non-trivial property of [partial functions](https://en.wikipedia.org/wiki/Partial_function), no general and effective method can decide whether an algorithm computes a partial function with that property. Hence, a property of partial functions is called trivial if it holds for all [partial computable functions](https://en.wikipedia.org/wiki/Computable_function) or for none, and an effective decision method is called general if it decides correctly for every algorithm
````
^excerpt
