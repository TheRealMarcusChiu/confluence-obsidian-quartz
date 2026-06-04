---
title: "Transformation-Based PoS Tagging"
created: 2020-10-01T22:10:30.017-05:00
modified: 2020-10-01T23:02:24.883-05:00
parent: "[[Part-of-Speech (PoS) Tagging]]"
children: []
---
###### Transformation-Based PoS Tagging
- a type of [[Part-of-Speech (PoS) Tagging]]
- the pure [[Rule-Based PoS Tagging|rule-based tagging]] approach is too expensive, slow, tedious
- basic idea is to do a poor job first, and then use learned rules to improve things
- rules can be auto-learned by feeding it training data (unlike the rule-based tagging)

### Process

given:
- dictionary of words with their corresponding [[Part of Speech (PoS)|PoS Tag]] <font style="color: rgb(128,128,128);">(unlike rule-based tagging, each word has exactly one tag, the mostly likely tag of the word)</font>
- set of rules that selectively transforms PoS Tags <font style="color: rgb(128,128,128);">(unlike rule-based tagging, the rules transforms PoS tags instead of removing them)</font>
- input sentence to be PoS Tagged

steps:
- according to the dictionary, assign each word of the input sentence the most likely PoS Tag
- according to the set of rules, transform tags of sentence until no more transformations are made <font style="color: rgb(128,128,128);">(after each transformation we return to the first rule again and continue "transforming" until a single pass through the entire set of rules have been made without any transforms)</font>

### Example

based on the probabilities below, the most probable PoS Tag for the word <code>race</code> is NN
- 𝐏(NN|<code>race</code>) = 0.98
- 𝐏(VB|<code>race</code>) = 0.02

thus in the dictionary we have:
- <code>race</code> → NN

we do this for each word

now let's consider the 2 input sentences:
- <code>is expected to race tomorrow</code>
- <code>the race for outer space</code>

we tag the sentences based on the dictionary:
- <code>is</code>/VBZ <code>expected</code>/VBN <code>to</code>/TO <code>race</code>/NN <code>tomorrow</code>/NN
- <code>the</code>/DT <code>race</code>/NN <code>for</code>/IN <code>outer</code>/JJ <code>space</code>/NN

according to the set of rules, we transform tags

say we come across a rule like below:
- <span style="white-space: pre-wrap"><code>Change NN to VB when the previous tag is TO</code></span>

for the first sentence we transform <code>race</code>/NN into <code>race</code>/VB
for the second sentence we do nothing for this rule
- <code>is</code>/VBZ <code>expected</code>/VBN <code>to</code>/TO <code>race</code>/VB <code>tomorrow</code>/NN
- <code>the</code>/DT <code>race</code>/NN <code>for</code>/IN <code>outer</code>/JJ <code>space</code>/NN

then return to the first rule and continue "transforming" until a single pass through the entire set of rules have been made without any transforms
### Learning (How to Learn the Set of Rules) - Brill's Transformation Based Learning (TLB)

steps:
1. tag the corpus with the most likely tag for each word ([[N-Grams (Monograms／Unigrams - Bigrams)|unigram model]])
2. choose a transformation that deterministically replaces an existing tag with a new tag such that the resulting tagged training corpus has the lowest error rate out of all transformations
3. apply that transformation to the training set
4. iterate
5. return as your tagger one that:
	1. first tags using unigrams and then
	2. applies the learned transformations in order

###### Brill's Transformation Based Learning (TLB) - Pseudocode
```
function TBL(corpus) returns transforms-queue {
	INITIALIZE-WITH-MOST-LIKELY-TAGS(corpus)
	until end condition is met do
		templates ← GENERATE-POTENTIAL-RELEVANT-TEMPLATES
		best-transform ← GET-BEST-TRANSFORM(corpus, templates)
		APPLY-TRANSFORM(best-transform, corpus)
		ENQUEUE(best-transform-rule, transforms-queue)
	end
	return transforms-queue
}

function GET-BEST-TRANDFORM(corpus, templates) returns transform {
	foreach template in templates
		(instance, score) ← GET-BEST-INSTANCE(corpus, template)
		if (score > best-transform.score) {
			best-transform ← (instance, score)
		}
	return best-transform
}

function GET-BEST-INSTANCE(corpus, template) returns transform {
	for from-tag ← from tag1 to tagn do
		for to-tag ← from tag1 to tagn do
			for pos ← from 1 to corpus-size do
				if (correct-tag(pos) == to-tag && current-tag(pos) == from-tag)
					num-good-transforms(current-tag(pos-1))++
				else if (correct-tag(pos) == from-tag && current-tag(pos) == from-tag)
					num-bad-transforms(current-tag(pos-1))++
				end
				best-Z ← ARGMAXᵢ(num-good-transforms(i) - num-bad-transforms(i))
				tmp = num-good-transforms(best-Z) - num-bad-transforms(best-Z)
				if (temp > best-intance.score)
					best.rule ← "Change tag from " + from-tag + " to " + to-tag + " if prev tag is " + best-Z
					best.score ← num-good-transforms(best-Z) - num-bad-transforms(best-Z)
	return best
}

function APPLY-TRANSFORM(transform, corpus) {
	for pos ← from 1 to corpus-size do
		if (current-tag(pos) == best-rule-from && current-tag(pos-1) == best-rule-prev)
			current-tag(pos) ← best-rule-to
}
```
