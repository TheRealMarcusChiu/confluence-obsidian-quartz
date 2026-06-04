---
title: "Weakly Supervised RE (Bootstrapping)"
created: 2020-11-02T14:34:16.745-06:00
modified: 2020-11-02T18:52:28.457-06:00
parent: "[[Entity Relation Extraction (RE)]]"
children: []
---
###### Weakly Supervised RE

The idea here is to either:
- start out with a set of hand-crafted rules and automatically find new ones from the unlabeled text data, through and iterative process (bootstrapping)
- start out with a sed of seed tuples, describing entities with a specific relation <font style="color: rgb(128,128,128);">(e.g. seed={(ORG:IBM, LOC:Armonk), (ORG:Microsoft, LOC:Redmond)} states entities having the relation “based in”)</font>
```merge-table
{
  "rows": [
    [
      "![[Weakly Supervised RE (Bootstrapping)/weakly-supervised-relation-extraction.png|400]]\nSnowball: Extracting relations from large plain-text collections",
      "Snowball is a fairly old example of an algorithm which does this:\n1. Start with a set of seed tuples (or extract a seed set from the unlabeled text with a few hand-crafted rules).\n2. Extract occurrences from the unlabeled text that matches the tuples and tag them with a NER (named entity recognizer).\n3. Create patterns for these occurrences, e.g. “ORG is based in LOC”.\n4. Generate new tuples from the text, e.g. (ORG:Intel, LOC: Santa Clara), and add to the seed set.\n5. Go step 2 or terminate and use the patterns that were created for further extraction"
    ]
  ]
}
```
### Example
- seed tuple: <code><font style="color: rgb(128,128,128);">\<Mark Twain, Elmira\></font></code>
- grep/google for the environments of the seed tuple:
	- <code><font style="color: rgb(128,128,128);">Mark Twain is buried in Elmira, NY</font></code>
		- <code><font style="color: rgb(255,153,0);">X is buried in Y</font></code>
	- <code><font style="color: rgb(128,128,128);">The grave of Mark Twain is in Elmira</font></code>
		- <code><font style="color: rgb(255,153,0);">The grave of X is in Y</font></code>
	- <code><font style="color: rgb(128,128,128);">Elmira is Mark Twain's final resting place</font></code>
		- <code><font style="color: rgb(255,153,0);">Y is X's final resting place</font></code>
- use those patterns to grep for new tuples
- iterate
