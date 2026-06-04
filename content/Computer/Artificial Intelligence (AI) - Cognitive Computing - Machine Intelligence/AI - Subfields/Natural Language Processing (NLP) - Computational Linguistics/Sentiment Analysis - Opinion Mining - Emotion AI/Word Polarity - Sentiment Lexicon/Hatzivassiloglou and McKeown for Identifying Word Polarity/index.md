---
title: "Hatzivassiloglou and McKeown for Identifying Word Polarity"
created: 2020-11-02T22:18:47.459-06:00
modified: 2020-11-02T22:18:57.388-06:00
parent: "[[Word Polarity - Sentiment Lexicon]]"
children: []
---
###### Hatzivassiloglou and McKeown for Identifying Word Polarity
- intuition:
	- adjectives conjoined by "and" have same polarity (e.g. fair and legitimate, corrupt and brutal)
	- adjectives conjoined by "but" have different polarity (e.g. fair but brutal)
- processes:
	- start with seed set (i.e. a labelled set of sentiment words)
	- expand seed set to conjoined adjectives, which results in a graph
	- use clustering algorithm to divide the graph
