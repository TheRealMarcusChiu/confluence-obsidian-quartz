---
title: "Translating From Constituency to Dependency Structures"
created: 2020-11-02T15:13:33.850-06:00
modified: 2020-11-02T16:28:15.588-06:00
parent: "[[Syntactic Parsing／Parser]]"
children: []
---
### From [[Constituency／Phrase Parsing|Constituency/Phrase Parsing]] to [[Dependency Parsing]]
![[Translating From Constituency to Dependency Structures/constituency-syntactic-parse-tree.png|600]]

[[constituency-syntactic-parse-tree.drawio]]
### 2 Subtasks
1. identifying all the head-dependent relations in the structure
	1. relies heavily on the use of head rules constituency parsing, first developed for use in [[Probabilistic Lexicalized CFG (PLCFG)|lexicalized probabilistic]] parsers (e.g. Collin's Parser)
	2. Here’s a simple and effective algorithm from Xia and Palmer (2001):
		1. Mark the head child of each node in a phrase structure, using the appropriate head rules
		2. In the dependency structure, make the head of each non-head child depend on the head of the head-child
2. identifying the correct dependency relations for these relations
