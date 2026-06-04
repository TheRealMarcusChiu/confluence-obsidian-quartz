---
title: "Constituency／Phrase Parsing"
created: 2020-10-10T23:45:51.811-05:00
modified: 2020-11-07T19:28:00.928-06:00
parent: "[[Syntactic Parsing／Parser]]"
children:
  - "[[Bottom-Up Chart Parsing]]"
  - "[[CYK Algorithm]]"
  - "[[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking]]"
---
###### Constituency/Phrase Parsing
- is the task of breaking text/sentences into constituents (sub-phrases and words)
	- non-terminals in the parse tree are types of phrases
	- terminals are the words in the sentence
- builds on top of [[Part-of-Speech (PoS) Tagging|PoS tagging]] by combining the tags into larger constituents/phrases
- constituency parsing with [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|Context-Free Grammar (CFG) or Phrase Structure Grammar (PSG)]] refers to the task of assigning proper trees to input strings/sentences
	- proper here means a tree:
		- that covers all and only elements of the input
		- has an <code><font style="color: rgb(128,128,128);">S</font></code> at the top
	- proper doesn't actually mean that the tree is correct
- involves search which involves the making of choices

### Constituency Parsing - Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "Constituency Parsing Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Time Complexity (sentence of length 𝑛)",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking|Top-Down Search/Parsing]]\n[[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking|Bottom-Up Search/Parsing]]\n[[Top-Down Search／Parsing - Bottom-Up Search／Parsing - Control & Backtracking|Control & Backtracking]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑂(𝐶<sup>𝑛</sup>) where:\n- 𝐶 is the work at each step"
    ],
    [
      {
        "content": "[[CYK Algorithm]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑂(𝑛<sup>3</sup>·|𝐺|) where:\n- |𝐺| is the number of rules in the given grammar"
    ],
    [
      {
        "content": "[[Bottom-Up Chart Parsing]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑂(𝐾·𝑛<sup>3</sup>) where:\n- 𝐾 is the work at each step (𝐾 \\>\\> 𝐶)"
    ]
  ]
}
```
### Constituency Parsing - Other
- [[Translating From Constituency to Dependency Structures]]
