---
title: "Genetic Algorithm"
created: 2019-12-01T12:46:03.814-06:00
modified: 2019-12-01T12:48:57.278-06:00
parent: "[[Algorithm Types]]"
children: []
---
The <strong>Genetic Algorithm</strong> applies concepts from evolutionary biology and at- tempts to find a good solution by mimicking the process of natural selection and the “survival of the fittest”
### How Genetic Algorithm Works
- The potential solutions are viewed as members of a population. Each such member can be described, for example, by a vector. Initially we can start with a random population, i.e., a set of random vectors.
- In each iteration certain operations are executed that randomly change the population. Two fundamental operations are:
	- Mutation. This means that some randomly chosen individuals (vectors) undergo random changes. For example, some of their bits (in case of binary vectors) are reversed.
	- Crossover. Two randomly selected individuals (vectors) “mate” and create offsprings that inherit the combined properties of the parents. For example, the components of the offspring vectors are obtained by swapping some components of the parent vectors
- After each round of random changes the fitness of each individual is evaluated by a fitness function that can measure how good is each solution vector. Those that are not fit enough, die, while the fit ones survive.
- The population evolves through such iterations. After a large number of iterations one can hope that the arising population already contains good solutions with high fitness value.
