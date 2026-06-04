---
title: "Text Classification"
created: 2020-11-02T20:08:19.392-06:00
modified: 2026-05-21T03:47:45.321-05:00
parent: "[[Natural Language Processing (NLP) - Computational Linguistics]]"
children:
  - "[[Text Classification - Boolean Multinomial Naive Bayes]]"
---
###### Text Classification
````excerpt
- is the process of assigning tags or categories to text according to its content
````
^excerpt

# Text Classification - Subtypes
- [[Sentiment Analysis - Opinion Mining - Emotion AI|sentiment analysis]]
- topic labeling
- spam detection
- intent detection
- etc

# Text Classification - Baseline Algorithm
- tokenization & lemmatization
- feature extraction
	- handle negation (e.g. not, didn't, etc)
- classification using different classifiers:
	- knowledge-based
	- statistical-based
		- Naive Bayes Models
			- Naive Bayes Model
			- [[Text Classification - Boolean Multinomial Naive Bayes|Boolean Multinomial Naive Bayes Model]] - a modification of Naive Bayes Model
		- Maximum Entropy (MaxEnt) Models
		- Support Vector Machines (SVM)
	- hybrid
