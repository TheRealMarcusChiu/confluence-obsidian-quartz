---
title: "Event Logic／Calculus"
created: 2021-09-13T04:44:26.357-05:00
modified: 2021-09-13T04:44:26.357-05:00
parent: "[[Formal Logical Systems／Languages or Logic Classes]]"
children: []
---
[[Situational Logic／Calculus|situation calculus]] works well on a single agent performing instantaneous, discrete actions. However, when actions have duration and overlaps with each other, <strong>event calculus</strong> should be used.

<strong>event calculus</strong>
- is based on points in time rather than situations
- in event calculus, fluents (functions or predicates that vary from one situation or time to the next) hold at points in time rather than at situations
- designed to reason over intervals of time
- an event calculus axiom says that a fluent is true at a point in time if the fluent was initiated by an event at some time in the past and was not terminated by an intervening event
- the INITIATES and TERMINATES relations plays a similar role to the RESULT relation in situation calculus
	- INITIATES(e,f,t) means that event e at time t cause fluent f to be true
	- TERMINATES(w,f,t) means that event w at time t causes fluent f to be false
- HAPPENS(e,t) means event e happens at time t
- CLIPPED(f,t1,t2) means fluent f is terminated at sometime between time t1 and t2
- this gives us functionality similar to situational calculus but with ability to talk about time points and intervals (e.g. HAPPENS(turn\_off(light\_switch\_1), 1:00) meaning "light switch was turned off at 1:00")
- extensions of event calculus to address problems of indirect effects, events with duration, concurrent events, continuously changing events, nondeterministic effects, causal constraints, etc
