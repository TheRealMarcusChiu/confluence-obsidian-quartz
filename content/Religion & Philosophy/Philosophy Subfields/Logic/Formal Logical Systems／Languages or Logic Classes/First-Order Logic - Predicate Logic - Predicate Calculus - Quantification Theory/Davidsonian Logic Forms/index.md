---
title: "Davidsonian Logic Forms"
created: 2021-09-13T04:44:26.944-05:00
modified: 2023-07-08T23:22:44.333-05:00
parent: "[[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory]]"
children: []
---
###### Davidsonian Logic Forms
````excerpt
- is the intermediate form between [[Syntactic Parsing／Parser|syntactic parse]] and deeper semantic meaning
- this form is preferred over syntactic parse when it comes to reasoning and other logic manipulation in a knowledge base
- preserves syntactic links between words in the sentence
````
^excerpt

# Stuff

> [!expand-ui]- predicates
> - a predicate is generated for every noun, verb, adjective or adverb in the sentence
> - the name of a predicate includes the base form, and [[Part of Speech (PoS)|part-of-speech]]
> - for example:
> 	- <code><font style="color: rgb(128,128,128);">A learner is enrolled in an educational institution</font></code>
> 	- has predicates: (learner:n, enroll:v, educational\_institution:n)
>
> Predicate Arguments
> - all verb predicates, as well as the nominalization representing actions, events or states have three arguments:
> - action/static/event\_predicate (𝑒<sub>𝑖</sub>, 𝑥<sub>𝑗</sub>, 𝑥<sub>𝑘</sub>), where:
> 	- 𝑒<sub>𝑖</sub> represents the action, state or event 𝑖
> 	- <font style="color: rgb(204,153,0);"><font style="color: rgb(41,41,41);">𝑥</font><font style="color: rgb(41,41,41);"><sub>𝑗</sub></font> </font>represents the syntactic subject 𝑗 of 𝑒<sub>𝑖</sub>
> 	- 𝑥<sub>𝑘</sub> represents the syntactic direct object 𝑘 of 𝑒<sub>𝑖</sub>
> - for example:

> [!expand-ui]- modifiers
> - predicates generated from modifiers share the same arguments with the predicates corresponding to the phrase heads.
> - for example:
> 	- adjectives have same predicates as nouns:
> 		- <code><font style="color: rgb(128,128,128);">a manmade object</font></code>
> 		- object:n(𝑥<sub>1</sub>) & man-made:a(𝑥<sub>1</sub>)
> 	- adverbial predicate is the eventuality of the verb it modifies
> 		- <code><font style="color: rgb(128,128,128);">run quickly</font></code>
> 		- run:v(𝑒<sub>1</sub>, 𝑥<sub>1</sub>, 𝑥<sub>2</sub>) & quickly:r(𝑒<sub>1</sub>)

> [!expand-ui]- conjunctions
> - conjunctions are transformed in predicates.
> - conjunction predicates have a variable number of arguments
>
> examples:
> - <code><font style="color: rgb(0,102,255);"><font style="color: rgb(128,128,128);">An achievement demonstrating great skill or mastery</font> </font></code>
> - achievement:n(x1) & demonstrate: v(e1,x1,x2) & or(x2,x3,x4) & skill:n(x3) & great:a(x3) & mastery:n(x4)
>
> - <code><font style="color: rgb(0,102,255);"><font style="color: rgb(128,128,128);">Roll and turn skillfully</font> </font></code>
> - and(e1,e2,e3) & roll:v(e2,x1,x2) & turn:v(e3,x1,x2) & skillfully:r(e1)
>
> - <code><font style="color: rgb(0,102,255);"><font style="color: rgb(128,128,128);">An unintentional but embarrassing blunder</font> </font></code>
> - blunder:n(x1) & but(x1,x2,x3) & unintentional:a(x2) & embarrassing:a(x3)

> [!expand-ui]- prepositions
> - every preposition is a predicate with two arguments:
> 	- the first argument corresponding to the predicate of the head of the phrase, to which PP attaches
> 	- the second argument corresponds to prepositional object
>
> examples:
> - <code><font style="color: rgb(128,128,128);">Deprive <strong>of</strong> value <strong>for</strong> payment </font></code>
> - deprive:v(e1,x1,x2) & <strong>of(e</strong><strong>1,x3</strong><strong>)</strong> & value:n(x3) & <strong>for(x</strong><strong>3,x4</strong><strong>)</strong> & payment:n(x4)
>
> - <code><font style="color: rgb(128,128,128);">Playing the position <strong>of</strong> pitcher <strong>on</strong> a baseball team </font></code>
> - playing:v(e1,x1,x2) & position:n(x2) & <strong>of(x</strong><strong>2,x3</strong><strong>)</strong> & pitcher:n(x3) & <strong>on(e</strong><strong>1,x4</strong><strong>)</strong> & baseball\_team:n(x4)

> [!expand-ui]- complex nominals
> - a new predicate nn is introduced to link together the collocating nouns.
> - nn has a variable number of arguments, the first representing the result of aggregation of the nouns, the rest one for each noun
>
> example:
> - <code><font style="color: rgb(128,128,128);">An organization created for <strong>business ventures</strong></font></code>
> - organization:n(x2) & create(e1,x1,x2) & for(e1,x3) & <strong>nn(x</strong><strong>3,x4,x5) & business:n(x4) & venture:n(x5</strong><strong>)</strong>
> - <code><font style="color: rgb(128,128,128);"><strong>Government income</strong> credited to taxation</font></code>
> - <strong>nn(x2,x3,x4) & government:n(x3) & income:n(x4</strong><strong>)</strong> & credit:v(e1,x1,x2) & to(e1,x5) & taxation:n(x5)
# Examples
- <font style="color: rgb(0,102,255);">A game played with rackets by two or four players who hit a ball back and forth over a net that divides a tennis court</font>
- game:n(x2) & play:v(e1,x1,x2) & with(e1,x3) & racket:n(x3) & by(e1,x1) & or(x1,x4,x5) & two:n(x4) & four:n(x5) & player:n(x1) & hit:v(e2,x1,x6) & ball:n(x6) & back\_and\_forth:r(e2) & over(e2,x7) & net:n(x7) & divide:v(e3,x7,x8) & tennis\_court:n(x8)
