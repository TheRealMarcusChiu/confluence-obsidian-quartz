---
title: "Probability Theory"
created: 2021-09-13T04:44:28.710-05:00
modified: 2024-01-22T12:58:02.721-06:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children: []
---
TODO: see [[Probability]]

trying to use classical logic to cope with a domain like medical diagnosis thus fails for three main reasons:
- <strong>laziness</strong>: it is too much work to list the complete set of antecedents or consequents needed to ensure an exceptionless rule and too hard to use such rules
- <strong>ignorance</strong> - lack of knowledge or information
	- <strong>theoretical ignorance</strong>: medical science has no complete theory for the domain
	- <strong>practical ignorance</strong>: even if we know all the rules, we might be uncertain about a particular patient because not all the necessary tests have been or can be run

classical logic has a<strong> qualification problem</strong> - the impossibility of listing all the preconditions required for a real-world action to have its intended effect

probability provides a way of summarizing the uncertainty that comes from our <strong>laziness</strong> and <strong>ignorance</strong>

classical logic statements are made with respect to the <strong>real world</strong>
probability statements are made with respect to a <strong>knowledge state</strong>, not to the <strong>real world</strong>
###### Uncertainty and Rational Decisions

Consider the A<sub>90</sub>plan for getting to the airport (<em>leaving home 90 minutes before the flight departs and driving at a reasonable speed</em>). Suppose it gives us a 97% chance of catching our flight. Does this mean it is a rational choice? Not necessarily: there might be other plans, such as A<sub>180</sub>, with higher probabilities. If it is vital not to miss the flight, then it is worth risking the longer wait at the airport. What about A<sub>1440</sub>, a plan that involves leaving home 24 hours in advance? In most circumstances, this is not a good choice, because although it almost guarantees getting there on time, it involves an intolerable wait—not to mention a possibly unpleasant diet of airport food.

To make such choices, an agent must have <strong>preferences</strong> between different <strong>outcomes</strong> (a completely specified state) of various plans.
###### Representing and Reasoning Preferences

<strong>utility theory</strong>
- used to represent preferences and reasoning with it
- utility means "the quality of being useful"
- the utility of a outcome/state is relative to an agent
- a utility function accounts for any set of preferences

###### Theory of Rational Decisions

<strong>decision theory</strong>
- <strong>decision-theory </strong>= <strong>probability-theory </strong>+ <strong>utility-theory</strong>
- fundamental idea of decision theory is that an agent is rational if and only if it chooses an action of maximum expected utility (MEU)
- <strong>maximum expected utility </strong><strong>(MEU)</strong> - choosing an action out of a set of all possible actions in current state that yields the highest expected utility (an average over all the possible outcomes of the action)
- a decision-theoretic agent’s belief state represents not just the possibilities for world states but also their probabilities
