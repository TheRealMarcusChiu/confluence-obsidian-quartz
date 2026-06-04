---
title: "Spelling Error - Noisy-Channel Model"
created: 2020-10-14T00:53:10.085-05:00
modified: 2026-05-21T13:33:07.479-05:00
parent: "[[NLP - Spelling Error Correction]]"
children: []
---
Many problems in language processing can be viewed as noisy channel problems
- Optical Character Recognition
- Spelling Correction
- Speech recognition
- Machine translation

# The Noisy Channel Model of Spelling

𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑 → noisy-channel → 𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑

find the most probable 𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑 given the observed 𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑:
- 𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑</sub> 𝐏(𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑|𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑)
- 𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑</sub> 𝐏(𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑|𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑)𝐏(𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑)/𝐏(𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑) <font style="color: rgb(128,128,128);">\# </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Theorem]]
- 𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑ˆ = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑</sub> 𝐏(𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑|𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑)𝐏(𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑) <font style="color: rgb(128,128,128);">\# 𝐏(𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑) is a constant w.r.t. 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑</sub></font>

where:
- 𝐏(𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑) - [[Language Models|language model]] (prior probability)
- 𝐏(𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑|𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑) - noisy channel model or error model (likelihood)

# Language Model Probability
- unigram, bigram, trigram, n-gram
- web-scale spelling correction
	- stupid backoff

# Noisy Channel Model - Problems

It is fruitless to try to collect statistics about the misspellings of individual words given a large dictionary. You'll likely never get enough data.

We need a way to compute 𝐏(𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑|𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑) without using direct information.

This is where Edit Distance come in
# Edit Distance

Damerau-Levenshtein Edit Distance is the minimal edit distance between 2 strings, where edits are:
- deletion
	- there → ther
- insertion (also allow insertion of space or hyphen)
	- the → ther
- substitution
	- now → noq
- transposition of 2 adjacent characters
	- the → teh

# Candidate Generation
- 80% of errors are within 1 edit distance
- \~100% of errors are within 2 edit distance

# Learning

Collect statistics for each error type from a large corpus.

For example, asking for 𝐏(<code><font style="color: rgb(128,128,128);">acress</font></code>|<code><font style="color: rgb(128,128,128);">actress</font></code>) is assumed to be the same as asking for the probability that a deletion of <code><font style="color: rgb(128,128,128);">t</font></code> happened here 𝐏(<code><font style="color: rgb(128,128,128);">c</font></code>|<code><font style="color: rgb(128,128,128);">ct</font></code>)

So just collect a large corpus of text (containing errors) and see how often <code><font style="color: rgb(128,128,128);">t</font></code> gets deleted
# Channel/Error Model Probability

𝐏(𝑥|𝑦) = probability of edit

where:
- 𝑑𝑒𝑙\[𝑥,𝑦\]: count of 𝑥 in noisy training set when it should be 𝑥𝑦
- 𝑖𝑛𝑠\[𝑥,𝑦\]: count of 𝑥𝑦 in noisy training set when it should be 𝑥
- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏\[𝑥,𝑦\]: count of 𝑦 in noisy training set when it should be 𝑥?????</font>
- 𝑡𝑟𝑎\[𝑥,𝑦\]: count of 𝑦𝑥 in noisy training set when it should be 𝑥𝑦

single edit:
- 𝐏(𝑥|𝑥𝑦) = 𝑑𝑒𝑙\[𝑥,𝑦\] / 𝑐𝑜𝑢𝑛𝑡-𝑠𝑜𝑢𝑟𝑐𝑒\[𝑥,𝑦\] <font style="color: rgb(128,128,128);">\# if deletion</font>
- 𝐏(𝑥𝑦|𝑥) = 𝑖𝑛𝑠\[𝑥,𝑦\] / 𝑐𝑜𝑢𝑛𝑡-𝑠𝑜𝑢𝑟𝑐𝑒\[𝑥\] <font style="color: rgb(128,128,128);">\# if insertion</font>
- 𝐏(𝑥|𝑦) = <font style="color: rgb(255,0,0);">𝑠𝑢𝑏\[𝑥,𝑦\]</font> / 𝑐𝑜𝑢𝑛𝑡-𝑠𝑜𝑢𝑟𝑐𝑒\[𝑦\] <font style="color: rgb(128,128,128);">\# if substitution</font>
- <font style="color: rgb(51,51,153);"><font style="color: rgb(51,51,51);">𝐏(𝑦𝑥|𝑥𝑦) = 𝑡𝑟𝑎\[𝑥,𝑦\] / 𝑐𝑜𝑢𝑛𝑡-𝑠𝑜𝑢𝑟𝑐𝑒\[𝑥,𝑦\] <font style="color: rgb(128,128,128);">\# if transposition</font></font></font>

let:
- 𝑠 be correct 𝑠𝑜𝑢𝑟𝑐𝑒-𝑤𝑜𝑟𝑑 where 𝑠 = \[𝑠<sub>1</sub>, ..., 𝑠<sub>𝑗</sub>\]
- 𝑛 be misspelled 𝑛𝑜𝑖𝑠𝑦-𝑤𝑜𝑟𝑑 where 𝑛 = \[𝑠<sub>1</sub>, ..., 𝑠<sub>𝑘</sub>\]

for single edit:
- 𝐏(𝑛|𝑠) = 𝑑𝑒𝑙\[𝑠<sub>𝑖-1</sub>,𝑠<sub>𝑖</sub>\] / 𝑐𝑜𝑢𝑛𝑡\[𝑠<sub>𝑖-1</sub>,𝑠<sub>𝑖</sub>\] <font style="color: rgb(128,128,128);">\# if deletion</font>
- 𝐏(𝑛|𝑠) = 𝑖𝑛𝑠\[𝑠<sub>𝑖-1</sub>,𝑛<sub>𝑖</sub>\] / 𝑐𝑜𝑢𝑛𝑡\[𝑠<sub>𝑖-1</sub>\] <font style="color: rgb(128,128,128);">\# if insertion</font>
- 𝐏(𝑛|𝑠) = 𝑠𝑢𝑏\[𝑛<sub>𝑖</sub>,𝑠<sub>𝑖</sub>\] / 𝑐𝑜𝑢𝑛𝑡\[𝑠<sub>𝑖</sub>\] <font style="color: rgb(128,128,128);">\# if substitution</font>
- <font style="color: rgb(51,51,153);"><font style="color: rgb(51,51,153);"><font style="color: rgb(51,51,153);"><font style="color: rgb(51,51,51);">𝐏(𝑛|𝑠) = 𝑡𝑟𝑎\[𝑠<sub>𝑖</sub>,𝑠<sub>𝑖+1</sub>\] / 𝑐𝑜𝑢𝑛𝑡\[𝑠<sub>𝑖</sub>,𝑠<sub>𝑖+1</sub>\] <font style="color: rgb(128,128,128);">\# if transposition</font></font></font></font></font>

# Noisy Channel Probability Model For "acress"
- 𝑛 = acress
```merge-table
{
  "rows": [
    [
      {
        "content": "Candidate Correction 𝑠=?",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Correct Letter",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Error Letter",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑛|𝑠",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑛|𝑠)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑠)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑛|𝑠)𝐏(𝑠)\\*10<sup>9</sup>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<code>actress</code>",
      "<code>t</code>",
      "<code>-</code>",
      "<code>c|ct</code>",
      "0.000117",
      "0.0000231",
      "2.7027"
    ],
    [
      "<code>cress</code>",
      "<code>-</code>",
      "<code>a</code>",
      "<code>a|^</code>",
      "0.00000144",
      "0.000000544",
      "0.00078336"
    ],
    [
      "<code>caress</code>",
      "<code>ca</code>",
      "<code>ac</code>",
      "<code>ac|ca</code>",
      "0.00000164",
      "0.00000170",
      "0.002788"
    ],
    [
      "<code>access</code>",
      "<code>c</code>",
      "<code>r</code>",
      "<code>r|c</code>",
      "0.00000209",
      "0.0000916",
      "0.191444"
    ],
    [
      "<code>across</code>",
      "<code>o</code>",
      "<code>e</code>",
      "<code>e|o</code>",
      "0.0000093",
      "0.000299",
      "2.7807"
    ],
    [
      "<code>acres</code>",
      "<code>-</code>",
      "<code>s</code>",
      "<code>es|e</code>",
      "0.0000321",
      "0.0000318",
      "1.02078"
    ],
    [
      "<code>acres</code>",
      "<code>-</code>",
      "<code>s</code>",
      "<code>ss|s</code>",
      "0.0000342",
      "0.0000318",
      "1.08756"
    ]
  ]
}
```

thus, <code><font style="color: rgb(128,128,128);">acress</font></code> would be corrected to <code><font style="color: rgb(128,128,128);">across</font></code>
# Using a Bigram Language Model

using a unigram language model is not as good as using a bigram model

for example:
- "<code><font style="color: rgb(128,128,128);">... a versatile acress whose combination ...</font></code>"
- what would acress be corrected to?
	- a unigram language model may correct it to <code><font style="color: rgb(128,128,128);">across</font></code> however the sentence won't make much sense <code><font style="color: rgb(128,128,128);">actress</font></code> would be better
	- a bigram model would be better
- 𝐏(<code><font style="color: rgb(128,128,128);">actress|versatile</font></code>) = 0.000021
- 𝐏(<code><font style="color: rgb(128,128,128);">whose|actress</font></code>) = 0.0010
- 𝐏(<code><font style="color: rgb(128,128,128);">across|versatile</font></code>) = 0.000021
- 𝐏(<code><font style="color: rgb(128,128,128);">whose|across</font></code>) = 0.000006
- 𝐏('<code><font style="color: rgb(128,128,128);">versatile actress whose</font></code>') = 0.000021 \* 0.0010 = 210x10⁻¹⁰
- 𝐏('<code><font style="color: rgb(128,128,128);">versatile across whose</font></code>') = 0.000021 \* 0.000006 = 1.26x10⁻¹⁰
