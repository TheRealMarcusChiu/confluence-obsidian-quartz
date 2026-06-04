---
title: "Finite-State Transducer (FST)"
created: 2021-09-13T05:25:01.434-05:00
modified: 2021-09-13T05:25:01.434-05:00
parent: "[[Automata (Sequential Model of Computation)]]"
children: []
---
###### Finite-State Transducer (FST)
- models [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|Context-Free Grammars (CFG)]]
- is a [[Finite-State Automaton／Machine (FSA／FSM)|Finite-State Automaton (FSA, FA)]] which produces output as well as reading input, which means it is useful for parsing (while a "bare" FSA can only be used for recognizing, i.e. pattern matching)
- consists of a finite number of states which are linked by transitions labeled with an input/output pair. The FST starts out in a designated start state and jumps to different states depending on the input, while producing output according to its transition table
- multiple FSTs can be combined into a single one using an FST compiler, which produced a single FST that was much smaller than the sum of its parts and ran very fast
- are useful in [[Natural Language Processing (NLP) - Computational Linguistics|NLP]] and speech recognition because they have nice algebraic properties, most notably that they can be freely combined (form an algebra) under composition, which implements relational composition on regular relations (think of this as non-deterministic function composition) while staying very compact. FSTs can do parsing of regular languages into strings in linear time
