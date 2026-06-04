---
title: "Probabilistic CFG (PCFG)"
created: 2021-09-13T05:25:06.502-05:00
modified: 2026-05-21T03:18:26.999-05:00
parent: "[[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)]]"
children: []
---
###### Probabilistic CFG (PCFG)
- is a [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|Context-Free Grammar (CFG)]] with [[Probability|probability]]

# PCFG - Grammar Rule Restrictions
- grammar rules are equations that consist of a single non-terminal on the left and any number of terminals and non-terminals on the right
	- 𝐴 → 𝛼\[𝑝\]
- where:
	- 𝐴 - non-terminal
	- 𝛼 - string of terminals and/or non-terminals (may also be empty-string)
	- 𝑝 - a number between \[0,1\] expressing 𝐏(𝛼|𝐴)
- and the following restriction:
	- 𝛴<sub>𝛽</sub>𝐏(𝛽|𝐴) = 1

the following are equivalent:
- 𝐴 → 𝛼\[𝑝\]
- 𝐏(𝐴 → 𝛼)
- 𝐏(𝐴 → 𝛼 | 𝐴)
- 𝐏(𝛼|𝐴)
- 𝐏( 𝑅𝑖𝑔ℎ𝑡-𝐻𝑎𝑛𝑑-𝑆𝑖𝑑𝑒 | 𝐿𝑒𝑓𝑡-𝐻𝑎𝑛𝑑-𝑆𝑖𝑑𝑒 )

# PCFG - Parse Tree

a PCFG assigns a probability of parse tree 𝑇:
- 𝐏(𝑇) = 𝛱<sub>𝑛𝑜𝑑𝑒∊𝑇</sub>𝐏(𝑟𝑢𝑙𝑒(𝑛𝑜𝑑𝑒))

given a sentence 𝑆 we want to find a parse tree 𝑇ˆ with highest probability:
- 𝑇ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑇</sub> 𝐏(𝑇|𝑆)
- 𝑇ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑇</sub> 𝐏(𝑇,𝑆)/𝐏(𝑆)
- 𝑇ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑇</sub> 𝐏(𝑇,𝑆) <font style="color: rgb(128,128,128);">\# 𝐏(𝑆) is a constant with respect to 𝑇</font>
- 𝑇ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑇</sub>𝐏(𝑆|𝑇)𝐏(𝑇) <font style="color: rgb(128,128,128);">\# via </font>[[Probability (Product Rule - Chain Rule)|chain rule]]
- 𝑇ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑇</sub> 𝐏(𝑇) <font style="color: rgb(128,128,128);">\# 𝐏(𝑆|𝑇) = 1</font>
- 𝑇ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑇</sub>𝛱<sub>𝑛𝑜𝑑𝑒∊𝑇</sub>𝐏(𝑟𝑢𝑙𝑒(𝑛𝑜𝑑𝑒))

# PCFG - Learning Probabilities

treebank contains parse trees for a large corpus:
- 𝐏(𝐴 → 𝛼 | 𝐴) = 𝐶𝑜𝑢𝑛𝑡(𝐴 → 𝛼) / 𝛴<sub>𝛽</sub>𝐶𝑜𝑢𝑛𝑡(𝐴 → 𝛽)
- 𝐏(𝐴 → 𝛼 | 𝐴) = 𝐶𝑜𝑢𝑛𝑡(𝐴 → 𝛼) / 𝐶𝑜𝑢𝑛𝑡(𝐴)

# PCFG - Problems
1. a PCFG production probabilities are independent w.r.t. each other
	1. this is a problem when the choice of how a node expands depends on the location of that node in the parse tree
> [!expand]- Click here to expand...
> 1. syntactic subject are often realized with pronouns
> 2. direct objects use more non-pronomial noun-phrases
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "pronoun",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "non-pronoun",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "subject",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "91%",
>       "9%"
>     ],
>     [
>       {
>         "content": "object",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "34%",
>       "66%"
>     ]
>   ]
> }
> ```
>
> the rules do not capture the table above:
> - 𝑁𝑃 → 𝐷𝑒𝑇 𝑁𝑜𝑢𝑛 \[0.28\]
> - 𝑁𝑃 → 𝑃𝑟𝑜𝑛𝑜𝑢𝑛 \[0.25\]
2. a PCFG are insensitive to the words they expand:
	1. in reality lexical information about words plays an important role in selecting the correct parse trees
> [!expand]- Click here to expand...
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Sentence Example",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Correct Parse",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "<code><font style=\"color: rgb(128,128,128);\">I ate pizza with anchovies</font></code>",
>       "𝑁𝑃 → 𝑁𝑃 𝑃𝑃 <font style=\"color: rgb(128,128,128);\">(𝑃𝑃 is attached to 𝑁𝑃)</font>"
>     ],
>     [
>       "<code><font style=\"color: rgb(128,128,128);\">I ate pizza with friends</font></code>",
>       "𝑉𝑃 → 𝑁𝑃 𝑃𝑃 <font style=\"color: rgb(128,128,128);\">(𝑃𝑃 is attached to 𝑉𝑃 )</font>"
>     ]
>   ]
> }
> ```
3. lexical preference of verbs (subcategorization)
	1. this problem exists in plain [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|CFG]]
> [!expand]- Click here to expand...
> <code><font style="color: rgb(128,128,128);">Moscow sent more than 100,000 soldiers into Afghanistan</font></code>
> 1. the 𝑃𝑃 <code><font style="color: rgb(128,128,128);">into Afghanistan</font></code> is attached to the verb <code><font style="color: rgb(128,128,128);">sent</font></code> not to <code><font style="color: rgb(128,128,128);">soldiers</font></code>
> 2. this is because the verb <code><font style="color: rgb(128,128,128);">send</font></code> subcategorizes for destination expressed by [[Adpositions (Prepositions - Postpositions - Circumposition)|preposition]] <code><font style="color: rgb(128,128,128);">into</font></code>
4. [[Conjunctions|coordination conjunction]] ambiguities
	1. 
> [!expand]- Click here to expand...
> 1. <code><font style="color: rgb(128,128,128);">(dogs in houses) and (cats)</font></code>
> 2. <code><font style="color: rgb(128,128,128);">dogs in (houses and cats)</font></code>
>
> the first parse is correct because dogs and cats are semantic siblings (i.e. animals)
>
> the second parse makes no sense (dogs inside a cat?)
