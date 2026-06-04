---
title: "Using WordNet to Learn Word Polarity"
created: 2020-11-02T22:21:34.426-06:00
modified: 2020-11-02T22:22:17.287-06:00
parent: "[[Word Polarity - Sentiment Lexicon]]"
children: []
---
###### Using WordNet to Learn Word Polarity

processes:
1. create positive and negative seed words
2. find synonyms and antonyms:
	1. positive set - add synonyms of positive words and antonyms of negative words
	2. negative set - add synonyms of negatives words and antonyms of positive words
3. repeat step 2 (following chains of synonyms)
4. filter
