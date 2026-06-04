---
title: "Lexical Semantic Relations - (Synonymy Antonymy Hypernymy Hyponymy Holonymy Meronymy Troponymy)"
created: 2021-09-13T04:44:09.780-05:00
modified: 2021-09-13T04:44:09.780-05:00
parent: "[[Lexical Semantics]]"
children: []
---
### Lexical Semantic Relation Types
- <strong>synonymy</strong> - same meaning
- <strong>antonymy</strong> - opposite meaning
- <strong>ontological relations</strong>:
	- <strong>hypernymy</strong> (superordination) - a word more general than a hyponym
	- <strong>hyponymy</strong> (subordination) - a word more specific than a hypernym
- <strong>holonymy</strong> - whole to part relation
- <strong>meronymy</strong> - part to whole relation
- <strong>troponymy</strong> - particular way to do something
	- to nibble is to eat in a certain manner
	- to gorge is to eat in a different manner

### Examples - Grouped by Part of Speech
> [!tabs]
>
> === Noun Relations
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Noun Relation",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Definition",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Hypernym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "from concepts to superordinates",
>       "<font style=\"color: rgb(51,51,153);\">meal is a hypernym of lunch</font>"
>     ],
>     [
>       {
>         "content": "Hyponym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "from concepts to subtypes",
>       "<font style=\"color: rgb(51,51,153);\">lunch is a hyponym of meal</font>"
>     ],
>     [
>       {
>         "content": "Has-Member",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "from groups to their members",
>       "<font style=\"color: rgb(51,51,153);\">faculty has-member professor </font>"
>     ],
>     [
>       {
>         "content": "Member-Of",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "from members to their groups",
>       "<font style=\"color: rgb(51,51,153);\">professor is member-of faculty </font>"
>     ],
>     [
>       {
>         "content": "Meronym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "from wholes to parts",
>       "<font style=\"color: rgb(51,51,153);\">leg is a meronym of table </font>"
>     ],
>     [
>       {
>         "content": "Holonym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "from parts to wholes",
>       "<font style=\"color: rgb(51,51,153);\">table is a holonym of leg </font>"
>     ],
>     [
>       {
>         "content": "Antonym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "opposites",
>       "<font style=\"color: rgb(51,51,153);\">leader is antonym of follower </font>"
>     ]
>   ],
>   "tableStyle": "width: 80.6324%;"
> }
> ```
>
> === Verb Relations
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Verb Relation",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Definition",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Hypernym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "hypernym is (semantics) a word or phrase whose referents form a set including as a subset the referents of a subordinate term",
>       "- <font style=\"color: rgb(51,51,153);\">travel is a hypernym of fly</font>\n- <font style=\"color: rgb(51,51,153);\">fly → travel</font>"
>     ],
>     [
>       {
>         "content": "Troponym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "a troponym is (grammar) a verb that indicates more precisely the manner of doing something by replacing a verb of a more generalized meaning",
>       "- <font style=\"color: rgb(51,51,153);\">stroll is a troponym of walk</font>\n- <font style=\"color: rgb(51,51,153);\">stroll → walk</font>"
>     ],
>     [
>       {
>         "content": "Antonym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "opposites",
>       "- <font style=\"color: rgb(51,51,153);\">increase is antonym of</font><font style=\"color: rgb(51,51,153);\">decrease </font>"
>     ]
>   ],
>   "tableStyle": "width: 80.336%;"
> }
> ```
> - <strong>verb entailment</strong> - from events to the events they entail
> 	- <strong><strong>semantic relation</strong></strong> - hypernym/hyponym and troponym
> 		- fly → travel
> 		- stroll → walk
> 		- snore → sleep
> 	- <strong>causative relation</strong> - if 𝑉<sub>1</sub> is a [[Causality (Necessary - Sufficient - Contributory)|sufficient cause]] of 𝑉<sub>2</sub>, then 𝑉<sub>1</sub> entails 𝑉<sub>2</sub>
> 		- give →causative-relation→ have
> - <strong>bidirectional verb entailment</strong> -
> 	- synonyms: beat ↔ defeat
> 	- not synonyms: ?
>
> ###### Verb Entailments
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Verb Entailment",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 4
>       },
>       null,
>       null,
>       null
>     ],
>     [
>       {
>         "content": "Temporal Inclusion",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "Not Temporal Inclusion",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       {
>         "content": "Troponym",
>         "align": "center"
>       },
>       {
>         "content": "Not Troponym",
>         "align": "center"
>       },
>       {
>         "content": "Backward Presupposition",
>         "align": "center"
>       },
>       {
>         "content": "Cause",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "limp → walk\nlisp → talk",
>         "align": "center"
>       },
>       {
>         "content": "snore → sleep\nbuy → pay",
>         "align": "center"
>       },
>       {
>         "content": "succeed → try\nuntie → tie",
>         "align": "center"
>       },
>       {
>         "content": "kill → die\ngive → have",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```
>
> === Adjective Relations
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Adjective Relation",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Definition",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Antonym",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "Opposite",
>       "<font style=\"color: rgb(51,51,153);\">heavy is antonym of</font>light\n<font style=\"color: rgb(51,51,153);\">quickly is antonym of </font><font style=\"color: rgb(51,51,153);\">slowly</font>"
>     ]
>   ],
>   "tableStyle": "width: 80.336%;"
> }
> ```
