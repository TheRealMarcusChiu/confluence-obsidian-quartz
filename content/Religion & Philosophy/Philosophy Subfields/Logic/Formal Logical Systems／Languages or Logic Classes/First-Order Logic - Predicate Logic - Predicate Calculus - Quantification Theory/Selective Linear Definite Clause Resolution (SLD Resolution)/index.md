---
title: "Selective Linear Definite Clause Resolution (SLD Resolution)"
created: 2021-09-13T04:44:27.484-05:00
modified: 2021-09-13T04:44:27.484-05:00
parent: "[[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory]]"
children: []
---
The term <em>resolution</em> in logic refers to a mechanical method for proving statements in [[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|first-order logic]]. It is applied to two clauses in a sentence, and by unification, it eliminates a literal that occurs positive in one clause and negative in the other. A literal stated in the antecedent of an implication is negative because an implication <font style="color: rgb(128,128,128);"><em>P → Q</em></font> is equivalent to <font style="color: rgb(128,128,128);"><em>¬P v Q</em></font>. Therefore, in

<font style="color: rgb(128,128,128);"><em>(man(X) → mortal(X)) ʌ man(socrates) </em></font>

we can unify <font style="color: rgb(128,128,128);"><em>socrates</em></font> with <font style="color: rgb(128,128,128);"><em>X</em></font>. This will give us

<font style="color: rgb(128,128,128);"><em>(man(socrates) → mortal(socrates)) ʌ man(socrates) </em></font>

which is equivalent to

<font style="color: rgb(128,128,128);"><em>(¬man(socrates) v mortal(socrates)) ʌ man(socrates) </em></font>

By distribution, we have

<font style="color: rgb(128,128,128);"><em>(¬man(socrates) ʌ man(socrates)) v (mortal(socrates) ʌ man(socrates))</em></font>

Since<em><font style="color: rgb(128,128,128);"> ¬man(socrates) ʌ </font></em><em><font style="color: rgb(128,128,128);">man(socrates)</font></em> is false, we have

<font style="color: rgb(128,128,128);"><em>mortal(socrates) ʌ man(socrates) </em></font>

Through this resolution process, we proved <font style="color: rgb(128,128,128);"><em>mortal(socrates)</em></font>. Resolution with backtracking is the basic control mechanism in Prolog.

SLD resolution is a term used in [[Computer Languages - Logic／Logical Programming Languages|logic programming]] to refer to the control strategy used in such languages to resolve issues of nondeterminism. By definition, SLD resolution is linear resolution with a selection function for definite sentences. A definite sentence has exactly one positive literal in each clause and this literal is selected to be resolved upon, i.e., replaced in the goal clause by the conjunction of negative literals which form the body of the clause.
