---
title: "Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)"
created: 2021-09-13T05:25:05.033-05:00
modified: 2022-01-16T16:16:10.550-06:00
parent: "[[Formal Grammars - Chomsky Hierarchy]]"
children:
  - "[[Chomsky-Normal Form (CNF)]]"
  - "[[Lexicalized CFG (LCFG)]]"
  - "[[Probabilistic CFG (PCFG)]]"
  - "[[Probabilistic Lexicalized CFG (PLCFG)]]"
---
###### Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur/Normal Form (BNF)
- is a type of [[Formal Grammar - Formal Language|Formal Grammar]] used to model Context-Free Language (CFL)
- is Type-2 Grammar of [[Formal Grammars - Chomsky Hierarchy|Chomsky's Hierarchy]]
- used for parsing sentence structure (which is called Phrase Structure Grammar (PSG))
- BNF is another syntax expression of CFG where: → is replaced with ::=, and or is replaced with |

# CFG/PSG/BNF - Grammar Rule Restrictions
- grammar rules are equations that consist of a single non-terminal on the left and any number of terminals and non-terminals on the right
	- 𝐴 → 𝛼
- where:
	- 𝐴 - a non-terminal
	- 𝛼 - a string of terminals and/or non-terminals (may also be empty-string)

# CFG/PSG/BNF - Problems

constituency is a key phenomena easily captured with PSG/CFG rules

but significant problems with:
- agreement
- subcategorization

# CFG/PSG/BNF - Example (Sentence Types)

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Sentence Form / Grammar Rule",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "CFG",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "BNF",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Declaratives",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 </font><font style=\"color: rgb(165,0,33);\">→<font style=\"color: rgb(165,0,33);\"> 𝑁𝑃 𝑉𝑃</font></font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 ::=</font><font style=\"color: rgb(165,0,33);\"> 𝑁𝑃 𝑉𝑃</font>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(0,128,0);\">\\[The plane\\] \\[left\\].</font></code>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Imperatives",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 </font><font style=\"color: rgb(165,0,33);\">→ </font><font style=\"color: rgb(165,0,33);\">𝑉𝑃</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 ::=</font><font style=\"color: rgb(165,0,33);\">𝑉𝑃</font>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(0,128,0);\">\\[Leave\\]!</font></code>",
        "align": "center"
      }
    ],
    [
      {
        "content": "Yes-No Questions",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 </font><font style=\"color: rgb(165,0,33);\">→ <font style=\"color: rgb(165,0,33);\">𝐴𝑢𝑥</font><font style=\"color: rgb(165,0,33);\"> 𝑁𝑃 𝑉𝑃</font></font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 ::=</font><font style=\"color: rgb(165,0,33);\"> 𝐴𝑢𝑥 𝑁𝑃 𝑉𝑃</font>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(0,128,0);\">\\[Did\\] \\[the plane\\] \\[leave\\]?</font></code>",
        "align": "center"
      }
    ],
    [
      {
        "content": "WH Questions",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 </font><font style=\"color: rgb(165,0,33);\">→ 𝑊𝐻-𝑁𝑃 𝐴𝑢𝑥</font><font style=\"color: rgb(165,0,33);\"> 𝑁𝑃 𝑉𝑃</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(165,0,33);\">𝑆 ::=</font><font style=\"color: rgb(165,0,33);\"> 𝑊𝐻-𝑁𝑃 𝐴𝑢𝑥</font><font style=\"color: rgb(165,0,33);\"> 𝑁𝑃 𝑉𝑃</font>",
        "align": "center"
      },
      {
        "content": "<code><font style=\"color: rgb(0,128,0);\">\\[When\\] \\[did\\] \\[the plane\\] \\[leave\\]?</font></code>",
        "align": "center"
      }
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
