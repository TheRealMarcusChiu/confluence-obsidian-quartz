---
title: "Treebanks"
created: 2020-10-10T23:20:52.763-05:00
modified: 2020-10-10T23:45:37.788-05:00
parent: "[[Syntactic Parsing／Parser]]"
children: []
---
### Treebanks
- a corpus of sentences where each sentence is paired with a parse tree (presumably the right one)
- useful for:
	- corpus linguistics - investigating the empirical detail of various constructions in a given language
	- statistical parsers -
- Penn Treebank - widely used treebank

### Treebank Grammars
- treebanks implicitly define a grammar for the language covered in the treebank
- simply take the local rules that make up the sub-trees in all trees in the treebank and you have a grammar
- not complete, but if you have a decent size corpus, you'll have a grammar with decent coverage
- such grammar tend to be very flat due to the fact that they tend to avoid recursion. for example, the Penn Treebank has 4500 different rules for VPs. Among them:
	- VP → VBD PP
	- VP → VBD PP PP
	- VP → VBD PP PP PP
	- VP → VBD PP PP PP PP

### Heads in Trees
- finding heads in treebank trees is a task that arises
- we can visualize this task by annotating the nodes of a parse tree with the heads of each corresponding node

![[Treebanks/NLP1.png|450]]
### Head Finding
- a standard way to do head finding is to use a simple set of tree traversal rules specific to each non-terminal in the grammar

![[Treebanks/NLP2.png|301]]
