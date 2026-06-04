---
title: "Zero／0 Correlation does not imply Independence"
created: 2021-11-11T21:41:38.643-06:00
modified: 2021-11-11T21:47:35.177-06:00
parent: "[[Pearson's Correlation Coefficient (R)]]"
children: []
---
0 [[Pearson's Correlation Coefficient (R)|correlation]] does not [[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)|imply]] the variables are [[Probability (Dependence／Dependent - Independence／Independent)|independent]]
# Reason

Correlation measures linear association between two given variables and it has no obligation to detect any other form of association else.

So those two variables might be associated in several other non-linear ways and correlation could not distinguish from the independent cases.
# Example Proof by Contradiction

As a very didactic, artificial, and non-realistic example, one can consider 𝑋 such that 𝐏(𝑋=𝑥)=1/3 for 𝑥=−1,0,1 and 𝑌=𝑋<sup>2</sup>. Notice that they are not only associated, but one is a function of the other. Nonetheless, their correlation is 0, for their association is orthogonal to the association that correlation can detect
