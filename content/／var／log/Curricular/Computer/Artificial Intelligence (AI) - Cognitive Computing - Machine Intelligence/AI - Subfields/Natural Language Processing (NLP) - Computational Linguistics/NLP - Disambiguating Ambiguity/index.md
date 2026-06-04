---
title: "NLP - Disambiguating Ambiguity"
created: 2019-10-25T16:41:48.830-05:00
modified: 2026-05-15T22:27:58.817-05:00
parent: "[[Natural Language Processing (NLP) - Computational Linguistics]]"
children:
  - "[[NLP - Ambiguity]]"
  - "[[Word Sense Disambiguation (WSD)]]"
  - "[[Word Similarity／Distance]]"
---
###### Disambiguating Ambiguity
````excerpt
- is a subtask of [[Natural Language Processing (NLP) - Computational Linguistics|NLP]] to disambiguate [[NLP - Ambiguity|ambiguity]]
````
^excerpt

# Disambiguating Ambiguity
- <strong>lexical disambiguation</strong>:
	- <strong>part-of-speech disambiguation</strong> - determining the correct [[Part of Speech (PoS)]] tag of a word with several possible PoS tags. [[Statistical-Based PoS Tagging - Using Hidden Markov Model (HMM)|HHMs for PoS]] can be used to solve this problem
	- <strong>word sense disambiguation</strong> - determining the correct meaning/sense of a [[Homo／Hetero-nym／nymy／graph／phone - Synonym - Polyseme／Polysemy - Capitonym - Monosemy|polysemy/homonym]] (a word with several different meanings)
- <strong>syntactic disambiguation</strong> - determining the correct parse tree among several possible trees. can be solved with probabilistic parsing
- <strong>speech act interpretation</strong> - determining whether sentence is a question or statement

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
