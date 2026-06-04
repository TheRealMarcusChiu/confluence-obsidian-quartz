---
title: "AI Chapter 6 - Agents That Reason Logically"
created: 2019-03-15T14:52:24.036-05:00
modified: 2023-12-18T18:19:33.301-06:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
### Terms
- <strong>knowing/knowledge</strong> - facts and rules
- <strong>knowledge base</strong> - a collection of <em>sentences</em> or representations of facts about the world
- <strong>background knowledge</strong> - initial <em>knowledge base</em>
- <strong>sentence</strong>
	- an individual representation, expressed in a language called <em>knowledge representation language</em>
	- types of sentences:
		- <strong>valid</strong>
			- a sentence is valid iff it is true in all possible interpretations and all possible worlds
			- also called
				- necessarily true sentence
				- analytic sentences
				- tautologies
		- <strong>satisfiable</strong>
			- a sentence is satisfiable iff it is true in some interpretation in some world
		- <strong>unsatisfiable</strong>
			- a sentence is unsatisfiable iff it is never true in any interpretation in any world

# A Knowledge-Based Agent
- a knowledge-based agent can be described in 3 levels:
	- <strong>knowledge level</strong> or <strong>epistemological level</strong> - the most abstract level of what it knows
	- <strong>logical level</strong> - the level which knowledge is encoded into sentences
	- <strong>implementation level</strong> - the level which there are physical representations of sentences

# Knowledge Representation Language & Reasoning - Logic
- <strong>Knowledge Representation Language</strong>
	- the goal is to express facts in computer-tractable form
	- <em>knowledge representation language</em> is defined by 2 aspects
		- <strong>syntax</strong> - physical patterns stored in computer
		- <strong>semantics</strong> - the meaning of syntax
	- difference between <em>facts</em> and their <em>representations</em>
		- <em>reasoning mechanisms</em> must operate on <em>representations</em> of <em>facts</em> rather than <em>facts</em> themselves
	- types of languages
		- languages used for knowledge representation (an agent's internal knowledge)
		- languages used for communication with other agents (such as natural languages)
	- a good <em>knowledge representation language</em> should combine the advantages of <em>natural</em> and <em>formal</em> languages
	- <strong>semantics</strong>
		- a <em>sentence</em> does not mean something by itself
		- most languages are <em>compositional</em> - the meaning of sentences is a function of the meaning of its parts
- <strong>Reasoning or Inference</strong>
	- <strong>reasoning/inference</strong> - the process of reaching to a conclusion
		- <strong>logical inference</strong> or <strong>deduction</strong> - sound reasoning
	- <strong>entailment</strong> - the generation of <em>valid</em> sentences, given <em>background knowledge base</em>
	- <strong>inference procedure</strong> - the steps to derive a sentence <em>a</em> from <em>knowledge base</em>
	- <strong>proof</strong> - the record of operation of a sound <em>inference procedure</em>
	- <strong>complete inference procedure</strong> - the ability to find a proof for any <em>sentence</em> that is entailed
- <strong>Logic</strong>
	- logic consists of 2 things
		- a formal system for describing states of affairs, consisting of:
			- syntax of the language - which describes how to make <em>sentences</em>
			- semantics of the language - which states the systematic constraints on how sentences relate to states of affairs
		- the proof theory - a set of rules for deducing the entailments of a set of sentences
	- properties of logic:
		- <strong>monotonicity</strong> - logic is monotonic, if <em>KB1 ⊨ a then (KB1 ∪ KB2) ⊨ a</em>
	- kinds of logic:

![[AI Chapter 6 - Agents That Reason Logically/1.png]]
# [Propositional Logic](http://doc.marcuschiu.com/log-page/5c47ac56154cee28cd8f400b)
