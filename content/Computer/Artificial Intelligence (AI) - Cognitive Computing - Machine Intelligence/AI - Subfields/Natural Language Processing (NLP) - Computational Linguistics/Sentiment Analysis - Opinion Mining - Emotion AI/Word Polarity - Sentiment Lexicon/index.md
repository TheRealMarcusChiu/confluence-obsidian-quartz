---
title: "Word Polarity - Sentiment Lexicon"
created: 2020-11-02T22:04:28.238-06:00
modified: 2020-11-02T22:21:31.652-06:00
parent: "[[Sentiment Analysis - Opinion Mining - Emotion AI]]"
children:
  - "[[Hatzivassiloglou and McKeown for Identifying Word Polarity]]"
  - "[[Turney Algorithm]]"
  - "[[Using WordNet to Learn Word Polarity]]"
---
###### Sentiment Lexicon
- is a collection of words (also known as polar or opinion words) associated with their sentiment orientation

### Sentiment Lexicons
- SentiWordNet
- Opinion Lexicon
- General Inquirer
- MPQA
- LIWC

### Word Polarity
- how likely is each word to appear in each sentiment class (e.g. positive vs negative, 1-star to 10-stars, etc)?
- can't use raw counts
- instead use likelihood:
	- likelihood = 𝐏(𝑤|𝑐) = 𝑓𝑟𝑒𝑞𝑢𝑒𝑛𝑐𝑦(𝑤,𝑐) / \[ 𝛴<sub>𝑤ᵢ∊𝑐</sub> 𝑓𝑟𝑒𝑞𝑢𝑒𝑛𝑐𝑦(𝑤ᵢ,𝑐) \]
- then make then comparable between words, using scaled likelihood:
- scaled likelihood = 𝐏(𝑤|𝑐) / 𝐏(𝑤)

![[Word Polarity - Sentiment Lexicon/image-7.png|600]]
### Logical Negation

is logical negation (e.g. no, not) associated with negative sentiment?

![[Word Polarity - Sentiment Lexicon/image-8.png|400]]
### Semi-Supervised Learning of Lexicons

intuition:
- start with a seed set of words (e.g. good, poor)
- find other words that have similar polarity:
	- using "and" and "but"
	- using words that occur nearby in the same document
	- using WordNet synonyms and antonyms

algorithms:
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
