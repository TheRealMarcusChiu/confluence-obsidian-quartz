---
title: "Lesk Algorithm"
created: 2020-11-21T01:31:40.268-06:00
modified: 2020-11-21T01:51:20.455-06:00
parent: "[[Word Sense Disambiguation (WSD)]]"
children: []
---
###### Lesk Algorithm
- used for [[Word Sense Disambiguation (WSD)]]
- use dictionary or thesaurus as indirect kind of supervision. choose the sense whose gloss shares the most words with target word neighborhood

### Lesk Algorithm
```py
# returns best sense of word
def simplified_lesk(word, sentence):
	best_sense = most_frequent_sense_for(word)
	max_overlap = 0
	context = set_of_words_in(sentence)
	for sense in senses_of(word):
		signature = set_of_words_in_gloss_and_example_sentences_of(sense)
		overlap = compute_overlap(signature, context)
		if overlap > max_overlap:
			max_overlap = overlap
			best_sense = sense
	return best_sense
```
### Lesk Algorithm - Example

> [!expand]- Click here to expand...
> given sentence:
> - <code><font style="color: rgb(128,128,128);">The bank can guarantee deposits will eventually cover future tuition costs because it invests in adjustable-rate mortgage securities</font></code>
>
> find sense of <code><font style="color: rgb(128,128,128);">bank</font></code>
>
> below is the gloss and examples sentences of the word <code><font style="color: rgb(128,128,128);">bank</font></code>:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "bank<sup>1</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "rowspan": 2
>       },
>       {
>         "content": "gloss",
>         "bg": "blue"
>       },
>       {
>         "content": "- a financial institution that accepts deposits and channels the money into lending activities",
>         "bg": "blue"
>       }
>     ],
>     [
>       {
>         "content": "examples",
>         "bg": "yellow"
>       },
>       {
>         "content": "- <code><font style=\"color: rgb(128,128,128);\">he cashed a check at the bank</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">that bank holds the mortgage on my home</font></code>",
>         "bg": "yellow"
>       }
>     ],
>     [
>       {
>         "content": "bank<sup>2</sup>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "rowspan": 2
>       },
>       {
>         "content": "gloss",
>         "bg": "blue"
>       },
>       {
>         "content": "- sloping land (especially the slope besides a body of water)",
>         "bg": "blue"
>       }
>     ],
>     [
>       {
>         "content": "examples",
>         "bg": "yellow"
>       },
>       {
>         "content": "- <code><font style=\"color: rgb(128,128,128);\">they pulled the canoe up on the bank</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">he sat on the bank of the river and watched the currents</font></code>",
>         "bg": "yellow"
>       }
>     ]
>   ]
> }
> ```
>
> based on the Lesk Algorithm, we have:
> - <strong>bank</strong><sup><strong>1</strong></sup>- 2 content words overlap
> - <strong>bank</strong><sup><strong>2</strong></sup>- 0 content words overlap
>
> thus, we choose <strong>bank<sup>1</sup></strong> as the most probable sense used in the sentence
### Lesk Algorithm - Improvements
- include related words (i.e. hyponyms)
- apply a weight to each overlapping word
- [[Term-Frequency Inverse-Document-Frequency (TF-IDF) Term Frequency - Inverse Document Frequency|inverse document frequency (idf)]] value
