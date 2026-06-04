---
title: "NLP - Ambiguity"
created: 2026-05-15T22:24:24.600-05:00
modified: 2026-05-15T22:25:57.400-05:00
parent: "[[NLP - Disambiguating Ambiguity]]"
children: []
---
An input is <strong>ambiguous</strong> is multiple, alternative linguistic structures can be built for it
# Ambiguity Types
- spoken ambiguity -
- textual ambiguity -
- semantic ambiguity -
- <strong>phonetic ambiguity</strong> - different words of same sound
- <strong>lexical ambiguity</strong> -
- <strong>morphological ambiguity</strong> -
- <strong>syntactical ambiguity</strong> - when a word has more than one [[Part of Speech (PoS)|part of speech]]. leads to structural ambiguity
- <strong>structural ambiguity</strong> - when a sentence has more than one possible parse tree structures
- <strong>semantical ambiguity</strong> - when a word/phrase has more than one possible meaning

# Spoken Ambiguity

the spoken sentence "<code><font style="color: rgb(128,128,128);">I made her duck</font></code>", can have phonetic ambiguity
- <code><font style="color: rgb(128,128,128);">I</font></code> sounds like <code><font style="color: rgb(128,128,128);">eye</font></code>
- <code><font style="color: rgb(128,128,128);">made</font></code> sounds like <code><font style="color: rgb(128,128,128);">maid</font></code>

# Text Ambiguity

the textual sentence <em>"</em><code><font style="color: rgb(128,128,128);">I made her duck<em>"</em></font></code> can have multiple meanings
- <em>I cooked waterfowl for her</em>
- <em>I cooked waterfowl belonging to her</em>
- <em>I created the (plaster?) duck she owns</em>
- <em>I caused her to quickly lower her head or body</em>
- <em>I waved my magic wand and turned her into undifferentiated waterfowl</em>

the words <code><font style="color: rgb(128,128,128);">duck</font></code> and <code><font style="color: rgb(128,128,128);">her</font></code> are morphologically or syntactically ambiguous
- the word <code><font style="color: rgb(128,128,128);">her</font></code> can be a [[Pronouns|dative pronoun]] or a [[Pronouns|possessive pronoun]]
- the word <code><font style="color: rgb(128,128,128);">duck</font></code> can be a [[Verbs|verb]] or a [[Nouns|noun]]

the word <code><font style="color: rgb(128,128,128);">made</font></code> is:
- syntactically ambiguous:
	- the verb <code><font style="color: rgb(128,128,128);">made</font></code> can be:
		- [[Verbs|transitive verb]] - taking a single [[Direct Object - Indirect Object - Object of a Preposition|direct object]]
		- [[Verbs|ditransitive verb]] - taking 2 objects (e.g. the first object (her) was transformed into the second object (duck))
	- the word <code><font style="color: rgb(128,128,128);">made</font></code> can take a direct object and a verb (e.g. the object (her) was caused to perform the verb action (duck))
- semantically ambiguous:
	- <code><font style="color: rgb(128,128,128);">made</font></code> can mean <code><font style="color: rgb(128,128,128);">create</font></code> or <code><font style="color: rgb(128,128,128);">cook</font></code>
