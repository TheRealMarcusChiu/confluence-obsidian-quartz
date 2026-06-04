---
title: "The Art of Prolog - Chapter 1 - Basic Constructs"
created: 2019-03-15T17:32:40.037-05:00
modified: 2019-03-15T17:32:53.826-05:00
parent: "[[The Art of Prolog - Summaries]]"
children: []
---
- basic structure in logic programs is a <em>term</em>
- <strong>term</strong>
	- is a constant, a variable, or a compound term
		- <strong>constants</strong>
			- denotes particular objects
			- which can be either an <strong>atom</strong> or a <strong>number</strong>
			- considered a <em>functor</em> of arity = 0
		- <strong>variables</strong>
			- denote a single but unspecified object
		- <strong>compound term</strong>
			- consists of
				- a <em>functor</em>
				- a sequence of one or more terms called <em>arguments</em>
				- exp compound term: <code>sentence(nphrase(john),vbphrase(verb(likes),nphrase(mary)))</code>
	- ground v nonground terms/instance:
		- <strong>ground terms/instance</strong> - contains no variables
		- <strong>nonground terms/instance</strong> - contains variables
- <strong>functor</strong>
	- is characterized by its: (name - which is an atom) and (arity - number of arguments)
	- <em>unary functor</em> - a functor with 1 argument
	- <em>binary functor</em> - a functor with 2 arguments
	- <em>ternary functor</em> - a functor with 3 arguments

- <strong>logic program</strong>
	- is a finite set of <em>clauses/rules</em>
- <strong>clause</strong> or <strong>rule</strong>
	- is a universally quantified logical sentence of the form
	- <code>A ← B1, B2, ..., Bk. for k≥0</code>
	- where A and Bi are goals
	- read declaratively: "A is implied by the conjunction of the Bi"
	- read procedurally: "To answer query A, answer the conjunctive query: B1, B2, ..., Bk"
	- A is called the clause's head
	- Bi is called the clause's body
	- <strong>fact</strong> or unit clause\_\_ - if k=0, no Bs
	- <strong>iterative clause</strong> - if k=1, one B
- <strong>query</strong>
	- <strong>query in conjunction form</strong>
	- <code>A1, ..., An?</code> where n\>0

### Computation
- <em>computation</em> of a <em>logic program</em> P finds an instance of a given query logically deducible from P. A goal G is deducible from a program P if there is an instance A of G where A ← B1, ..., Bn, n≥0, is a <em>ground instance</em> of a clause in P, and the Bi are deducible from <em>logic program</em> P. Deduction of a goal G from an identical fact is a special case

### Meaning
- <em>meaning</em> of a program P is inductively defined using <em>logical deduction</em>. The set of <em>ground instances</em> of <em>facts</em> in <em>logic program</em> P are in the meaning. A <em>ground goal</em> G is in the meaning if there is a <em>ground instance</em> G ← B1, ..., Bn of a rule in P such that B1, ..., Bn are in the meaning. The meaning consists of the <em>ground instances</em> that are deducible from the program
- an intended meaning M of a program is also a set of <em>ground unit goals</em>.
- a <em>logic program</em> P is:
	- <strong>correct</strong> with respect to an <em>intended meaning</em> M, if M(P) is a subset of M
	- <strong>complete</strong> with respect to an <em>intended meaning</em> M, if M is a subset of M(P)
	- <strong>correct</strong> and <strong>complete</strong> with respect to an <em>intended meaning</em> M, if M = M(P)
- 3 basic statements
	- facts
	- rules
	- queries
