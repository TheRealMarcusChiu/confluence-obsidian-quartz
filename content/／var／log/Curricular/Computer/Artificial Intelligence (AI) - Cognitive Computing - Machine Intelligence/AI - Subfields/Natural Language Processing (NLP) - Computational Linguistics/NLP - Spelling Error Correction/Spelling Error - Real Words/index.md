---
title: "Spelling Error - Real Words"
created: 2020-10-15T21:51:20.516-05:00
modified: 2020-10-15T22:07:29.985-05:00
parent: "[[NLP - Spelling Error Correction]]"
children: []
---
###### Real-Word Spelling Errors

for example:
- leaving in about fifteen <font style="color: rgb(128,0,0);">minuets</font>
- the design <font style="color: rgb(128,0,0);">an</font> construction of the system
- can they <font style="color: rgb(128,0,0);">lave</font> him my messages?
- the study was conducted mainly <font style="color: rgb(128,0,0);">be</font> John Black

25-40% of spelling errors are real words
### Solving Real-World Spelling Errors - Processes

for each word in sentence:
- generate candidate set
- the word itself
- all single-letter edits that are English words
- words that are homophones

choose best candidates
- noisy channel model
- task-specific classifier

given a sentence \[𝑤<sub>1</sub>, ..., 𝑤<sub>𝑘</sub>\] generate a set of candidates for each word 𝑤<sub>𝑖</sub>:
- candidate(𝑤<sub>1</sub>) = \[𝑤<sub>1</sub>, 𝑤<sub>1</sub>', 𝑤<sub>1</sub>'', ...\]
- ...
- candidate(𝑤<sub>𝑘</sub>) = \[𝑤<sub>𝑘</sub>, 𝑤<sub>𝑘</sub>', 𝑤<sub>𝑘</sub>'', ...\]

choose sequence 𝑊 that maximizes 𝐏(𝑊)
###### Example Noisy Channel For Real-Word Spell Correction
![[Spelling Error - Real Words/real-word-spelling-error.png|301]]
###### Simplification: One Error Word Per Sentence
- out of all possible sentence with one word replaced
	- 𝑤<sub>1</sub>, <font style="color: rgb(128,0,0);">𝑤''<sub>2</sub></font>, 𝑤<sub>3</sub>, ... two on thew
	- 𝑤<sub>1</sub>, 𝑤<sub>2</sub>, <font style="color: rgb(128,0,0);">𝑤'<sub>3</sub></font>, ... two of threw
	- <font style="color: rgb(128,0,0);">𝑤'''<sub>1</sub></font>, 𝑤<sub>2</sub>, 𝑤<sub>3</sub>, ... too of thew
- choose sequence 𝑊 that maximizes 𝐏(𝑊)

###### Where to Get Probabilities
- language model (e.g. unigram, bigram, n-gram) optionally with stupid backoff
- channel/error model
	- same as for non-word spelling correction
	- plus additional probability for no error 𝐏(𝑤|𝑤)

### Peter Norvig's "threw" Example

```merge-table
{
  "rows": [
    [
      {
        "content": "noisy word",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "candidate source word",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑛𝑜𝑖𝑠𝑦-𝑐ℎ𝑎𝑟(𝑠) | 𝑠𝑜𝑢𝑟𝑐𝑒-𝑐ℎ𝑎𝑟(𝑠)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑛𝑜𝑖𝑠𝑦-𝑐ℎ𝑎𝑟(𝑠) | 𝑠𝑜𝑢𝑟𝑐𝑒-𝑐ℎ𝑎𝑟(𝑠))",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑠𝑜𝑢𝑟𝑐𝑒-𝑐ℎ𝑎𝑟(𝑠))",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑛𝑜𝑖𝑠𝑦-𝑐ℎ𝑎𝑟(𝑠) | 𝑠𝑜𝑢𝑟𝑐𝑒-𝑐ℎ𝑎𝑟(𝑠)) · 𝐏(𝑠𝑜𝑢𝑟𝑐𝑒-𝑐ℎ𝑎𝑟(𝑠))",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "thew",
      "the",
      "ew|e",
      "0.000007",
      "0.02",
      "0.00000014"
    ],
    [
      "thew",
      "thew",
      "",
      "0.95",
      "0.00000009",
      "0.000000085"
    ],
    [
      "thew",
      "thaw",
      "e|a",
      "0.001",
      "0.0000007",
      "0.000000001"
    ],
    [
      "thew",
      "threw",
      "h|hr",
      "0.000008",
      "0.000004",
      "0.00000000003"
    ],
    [
      "thew",
      "thwe",
      "ew|we",
      "0.000003",
      "0.00000004",
      "0.0000000000001"
    ]
  ]
}
```
