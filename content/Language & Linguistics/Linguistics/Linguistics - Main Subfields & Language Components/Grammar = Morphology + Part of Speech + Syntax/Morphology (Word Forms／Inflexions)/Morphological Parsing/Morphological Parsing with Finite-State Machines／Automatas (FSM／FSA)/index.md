---
title: "Morphological Parsing with Finite-State Machines／Automatas (FSM／FSA)"
created: 2021-09-13T04:44:01.526-05:00
modified: 2021-09-13T04:44:01.526-05:00
parent: "[[Morphological Parsing]]"
children: []
---
using [[Finite-State Automaton／Machine (FSA／FSM)|Finite-State Machines/Automatas (FSM/FSA)]] to capture the morphology of a language, by either:
- accepting strings that are in the language
- rejecting strings that are not in language

possibilities:
- list all words in the language2
- list all [[Morphology (Word Forms／Inflexions)|stems and affixes]] of a language + representation of the morphotactics that tells us how they fit together

### Example of Morphotactics

the FSA for English nominal inflection

![[Morphological Parsing with Finite-State Machines／Automatas (FSM／FSA)/morphotactics-fsm.png|150]]

the FSA for English verb inflection

![[Morphological Parsing with Finite-State Machines／Automatas (FSM／FSA)/morphotactics-fsm-verb-inflection.png|350]]
