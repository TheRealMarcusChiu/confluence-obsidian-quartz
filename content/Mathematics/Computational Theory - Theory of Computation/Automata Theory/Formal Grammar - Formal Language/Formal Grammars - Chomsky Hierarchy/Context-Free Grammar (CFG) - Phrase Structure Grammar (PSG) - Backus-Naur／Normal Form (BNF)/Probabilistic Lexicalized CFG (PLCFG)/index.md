---
title: "Probabilistic Lexicalized CFG (PLCFG)"
created: 2021-09-13T05:25:05.399-05:00
modified: 2026-05-21T15:03:49.126-05:00
parent: "[[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)]]"
children:
  - "[[Collins Parser]]"
---
###### Probabilistic Lexicalized CFG (PLCFG)
````excerpt
- a type of [[Probabilistic CFG (PCFG)|Probabilistic CFG]] that takes into account the terminal symbols for context
````
^excerpt

# PLCFG - Problem With Plain CFG

Given the sentence:
- <code>workers dumped sacks into a bin</code>

The 2 possible parse trees are:

![[Probabilistic Lexicalized CFG (PLCFG)/probabilistic-lexicalized-context-free-grammar.png|400]]

In terms of [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|Phrase Structure Grammar (PSG)]] this is the prepositional phrase attachment ambiguity
# PLCFG - Solving With PLCFG
![[Probabilistic Lexicalized CFG (PLCFG)/plcfg-solution-example.png|400]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Internal Rules",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Lexical Rules",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- 𝑆(<code><font style=\"color: rgb(128,128,128);\">dumped</font></code>) → 𝑁𝑃(<code><font style=\"color: rgb(128,128,128);\">workers</font></code>) 𝑉𝑃(<code><font style=\"color: rgb(128,128,128);\">dumped</font></code>)\n- 𝑁𝑃(<code><font style=\"color: rgb(128,128,128);\">workers</font></code>) → 𝑁𝑁𝑆(<code><font style=\"color: rgb(128,128,128);\">workers</font></code>)\n- 𝑉𝑃(<code><font style=\"color: rgb(128,128,128);\">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style=\"color: rgb(128,128,128);\">dumped</font></code>) 𝑁𝑃(<code><font style=\"color: rgb(128,128,128);\">sacks</font></code>) 𝑃𝑃(<code><font style=\"color: rgb(128,128,128);\">into</font></code>)\n- 𝑁𝑃(<code><font style=\"color: rgb(128,128,128);\">sacks</font></code>) → 𝑁𝑁𝑆(<code><font style=\"color: rgb(128,128,128);\">sacks</font></code>)\n- 𝑃𝑃(<code><font style=\"color: rgb(128,128,128);\">into</font></code>) → 𝑃(<code><font style=\"color: rgb(128,128,128);\">into</font></code>) 𝑁𝑃(<code><font style=\"color: rgb(128,128,128);\">bin</font></code>)\n- 𝑁𝑃(<code><font style=\"color: rgb(128,128,128);\">bin</font></code>) → 𝐷𝑇(<code><font style=\"color: rgb(128,128,128);\">a</font></code>) 𝑁𝑁(<code><font style=\"color: rgb(128,128,128);\">bin</font></code>)",
      "- 𝑁𝑁𝑆(<code><font style=\"color: rgb(128,128,128);\">workers</font></code>) → <code><font style=\"color: rgb(128,128,128);\">workers</font></code>\n- 𝑉𝐵𝐷(<code><font style=\"color: rgb(128,128,128);\">dumped</font></code>) → <code><font style=\"color: rgb(128,128,128);\">dumped</font></code>\n- 𝑁𝑁𝑆(<code><font style=\"color: rgb(128,128,128);\">sacks</font></code>) → <code><font style=\"color: rgb(128,128,128);\">sacks</font></code><code></code>\n- 𝑃(<code><font style=\"color: rgb(128,128,128);\">into</font></code>) → <code><font style=\"color: rgb(128,128,128);\">into</font></code>\n- 𝐷𝑇(<code><font style=\"color: rgb(128,128,128);\">a</font></code>) → <code><font style=\"color: rgb(128,128,128);\">a</font></code>\n- 𝑁𝑁(<code><font style=\"color: rgb(128,128,128);\">bin</font></code>) → <code><font style=\"color: rgb(128,128,128);\">bin</font></code>"
    ]
  ],
  "tableStyle": "width: 68.75%;"
}
```

lexical heads play an important role since the semantics of the head dominates the semantics of the phrase

annotate each non-terminal phrasal node in a parse tree with its lexical head
- a Lexicalized CFG shows lexical preferences between heads and their constituents
	- 𝐴(𝑎) → 𝛼
- a [[Probabilistic CFG (PCFG)|Probabilistic CFG]] show the likelihood of each rule/head combination
	- 𝐴 → 𝛼\[𝑝\]

together a Probabilistic Lexicalized CFG rule has the form:
- 𝐴(𝑎) → 𝛼\[𝑝\]

an example set of PLCFG rules:
- 𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">sacks</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>) \[3×10<sup>-10</sup>\]
- 𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">cats</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>) \[8×10<sup>-11</sup>\]
- 𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">hats</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>) \[4×10<sup>-10</sup>\]
- 𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">sacks</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">above</font></code>) \[1×10<sup>-12</sup>\]
- ...

since it is not possible to store all possibilities, one solution is to cluster some of the cases based on their semantic category
- e.g. <code><font style="color: rgb(128,128,128);">hats</font></code> and <code><font style="color: rgb(128,128,128);">sacks</font></code> are inanimate objects
- e.g. <code><font style="color: rgb(128,128,128);">dumped</font></code> prefers preposition <code><font style="color: rgb(128,128,128);">into</font></code> over <code><font style="color: rgb(128,128,128);">above</font></code>

# PLCFG - Learning Probabilities

main way (probability of rule):
- 𝐏(𝛼|𝐴,𝑎) = 𝐶𝑜𝑢𝑛𝑡(𝐴(𝑎) → 𝛼) / 𝛴<sub>𝛽</sub> 𝐶𝑜𝑢𝑛𝑡𝑠(𝐴(𝑎) → 𝛽)
- 𝐏(𝛼|𝐴,𝑎) = 𝐶𝑜𝑢𝑛𝑡(𝐴(𝑎) → 𝛼) / 𝐶𝑜𝑢𝑛𝑡𝑠(𝐴(𝑎))

another way (probability of head):
- 𝐏(𝑏|𝐵,𝑎) = 𝐶𝑜𝑢𝑛𝑡(𝐴(𝑎) → ... 𝐵(𝑏) ...) / 𝛴<sub>𝛽</sub> 𝐶𝑜𝑢𝑛𝑡𝑠(𝐴(𝑎) → ... 𝐵 ...)

for example:
- the mother head is <code><font style="color: rgb(128,128,128);">dumped</font></code> and the head of 𝑃𝑃 is <code><font style="color: rgb(128,128,128);">into</font></code>:
	- 𝐏(<code><font style="color: rgb(128,128,128);">into</font></code>|𝑃𝑃,<code><font style="color: rgb(128,128,128);">dumped</font></code>) = 𝐶𝑜𝑢𝑛𝑡(𝑋(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → ... 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>) ...) / 𝛴<sub>𝛽</sub> 𝐶𝑜𝑢𝑛𝑡𝑠(𝑋(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → ... 𝑃𝑃 ...)
	- 𝐏(<code><font style="color: rgb(128,128,128);">into</font></code>|𝑃𝑃,<code><font style="color: rgb(128,128,128);">dumped</font></code>) = 2/9
- the mother head is <code><font style="color: rgb(128,128,128);">sacks</font></code> and the head of 𝑃𝑃 is <code><font style="color: rgb(128,128,128);">into</font></code>:
	- 𝐏(<code><font style="color: rgb(128,128,128);">into</font></code>|𝑃𝑃,<code><font style="color: rgb(128,128,128);">sacks</font></code>) = 𝐶𝑜𝑢𝑛𝑡(𝑋(<code><font style="color: rgb(128,128,128);">sacks</font></code>) → ... 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>) ...) / 𝛴<sub>𝛽</sub> 𝐶𝑜𝑢𝑛𝑡𝑠(𝑋(<code><font style="color: rgb(128,128,128);">sacks</font></code>) → ... 𝑃𝑃 ...)
	- 𝐏(<code><font style="color: rgb(128,128,128);">into</font></code>|𝑃𝑃,<code><font style="color: rgb(128,128,128);">sacks</font></code>) = 0/0
- thus, the head probabilities predict that <code><font style="color: rgb(128,128,128);">into</font></code> is more likely to modify <code><font style="color: rgb(128,128,128);">dumped</font></code> than <code><font style="color: rgb(128,128,128);">sacks</font></code>

# PCFG to PLCFG

probability of rule 𝑟:
- in PCFG the probability of a node 𝑛 being expanded by a rule 𝑟 is conditioned only by the syntactic category of node 𝑛:
	- 𝐏(𝑟(𝑛)|𝑛)
- in PLCFG, we add one more conditioning factor, the headword of the node ℎ(𝑛):
	- 𝐏(𝑟(𝑛)|𝑛,ℎ(𝑛)) <font style="color: rgb(128,128,128);">\# is the conditional probability of expanding rule 𝑟 given the syntactic category of 𝑛 and the lexical information ℎ(𝑛)</font>

probability of head ℎ:
- 
	- 𝐏(ℎ(𝑛)=<code><font style="color: rgb(128,128,128);">word</font></code>|𝑛,ℎ(𝑚(𝑛)))
- where:
	- ℎ(𝑚(𝑛)) - is the head of the node's mother
- for example:
	- 𝐏(ℎ(𝑛)=<code><font style="color: rgb(128,128,128);">sacks</font></code>|𝑛=𝑁𝑃, ℎ(𝑚(𝑛))=<code><font style="color: rgb(128,128,128);">dumped</font></code>)
- which is the probability that an 𝑁𝑃 whose mother node is <code><font style="color: rgb(128,128,128);">dumped</font></code> has the head <code><font style="color: rgb(128,128,128);">sacks</font></code>
- this probability captures the depending information between <code><font style="color: rgb(128,128,128);">dumped</font></code> and <code><font style="color: rgb(128,128,128);">sacks</font></code>

Thus, the updated formula for computing the probability of a parse tree 𝑇:
- 𝐏(𝑇,𝑆) = 𝛱<sub>𝑛𝑜𝑑𝑒𝑠∊𝑇</sub> \[ 𝐏(𝑟(𝑛)|𝑛,𝑔(𝑛)) × 𝐏(ℎ(𝑛)|𝑛,ℎ(𝑚(𝑛))) \]

# PLCFG - Learning Probabilities
- 𝐏(𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">sacks</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>))
- 𝐏(𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">sacks</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>) | 𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>))

can be estimated as:
- 𝐶𝑜𝑢𝑛𝑡(𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>) → 𝑉𝐵𝐷(<code><font style="color: rgb(128,128,128);">dumped</font></code>) 𝑁𝑃(<code><font style="color: rgb(128,128,128);">sacks</font></code>) 𝑃𝑃(<code><font style="color: rgb(128,128,128);">into</font></code>)) / 𝐶𝑜𝑢𝑛𝑡(𝑉𝑃(<code><font style="color: rgb(128,128,128);">dumped</font></code>))

however, this is difficult due to small number of times such a specific rule applies

instead, make independence assumptions
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
