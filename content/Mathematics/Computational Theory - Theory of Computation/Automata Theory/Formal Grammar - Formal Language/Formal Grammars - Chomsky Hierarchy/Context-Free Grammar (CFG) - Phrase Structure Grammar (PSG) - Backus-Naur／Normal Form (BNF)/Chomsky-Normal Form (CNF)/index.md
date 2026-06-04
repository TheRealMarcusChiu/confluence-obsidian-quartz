---
title: "Chomsky-Normal Form (CNF)"
created: 2021-09-13T05:25:06.298-05:00
modified: 2021-09-13T05:25:06.298-05:00
parent: "[[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)]]"
children: []
---
###### Chomsky-Normal Form (CNF) - Binary Form
- are grammars rules are of the form:
	- 𝐴 → 𝐵𝐶
	- 𝐴 → 𝑎
- that is, rules can expand to either 2 non-terminals or to a single terminal
- any [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur/Normal Form (BNF)]] rules can be rewritten into <strong>Chomsky-Normal Form</strong>

### Example Binarization

```merge-table
{
  "rows": [
    [
      {
        "content": "Original Lexicon",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Original Grammar",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "CNF",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "- 𝐵 → 𝑏\n- 𝐶 → 𝑐\n- 𝐷 → 𝑑",
        "bg": "green"
      },
      {
        "content": "- 𝑍 → 𝐴\n- 𝐴 → 𝐵𝐶𝐷",
        "bg": "yellow"
      },
      {
        "content": "- 𝑍 → 𝑋𝐷\n- 𝐴 → 𝑋𝐷\n- 𝑋 → 𝐵𝐶\n- 𝐵 → 𝑏\n- 𝐶 → 𝑐\n- 𝐷 → 𝑑",
        "bg": "blue"
      }
    ]
  ]
}
```
### Example Grammar Transformation

```merge-table
{
  "rows": [
    [
      {
        "content": "Original Lexicon",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Original Grammar",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "CNF",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "- 𝐷𝑒𝑡 → 𝑡ℎ𝑎𝑡 | 𝑡ℎ𝑖𝑠 | 𝑎\n- 𝑁𝑜𝑢𝑛 → 𝑏𝑜𝑜𝑘 | 𝑓𝑙𝑖𝑔ℎ𝑡 | 𝑚𝑒𝑎𝑙 | 𝑚𝑜𝑛𝑒𝑦\n- 𝑉𝑒𝑟𝑏 → 𝑏𝑜𝑜𝑘 | 𝑖𝑛𝑐𝑙𝑢𝑑𝑒 | 𝑝𝑟𝑒𝑓𝑒𝑟\n- 𝑃𝑟𝑜𝑛𝑜𝑢𝑛 → 𝐼 | 𝑠ℎ𝑒 | 𝑚𝑒\n- 𝑃𝑟𝑜𝑝𝑒𝑟-𝑁𝑜𝑢𝑛 → 𝐻𝑜𝑢𝑠𝑡𝑜𝑛 | 𝑁𝑊𝐴\n- 𝐴𝑢𝑥 → 𝑑𝑜𝑒𝑠\n- 𝑃𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑖𝑜𝑛 → 𝑓𝑟𝑜𝑚 | 𝑡𝑜 | 𝑜𝑛 | 𝑛𝑒𝑎𝑟 | 𝑡ℎ𝑟𝑜𝑢𝑔ℎ",
        "bg": "green",
        "rowspan": 5
      },
      {
        "content": "- 𝑆 → 𝑁𝑃 𝑉𝑃\n- 𝑆 → 𝐴𝑢𝑥 𝑁𝑃 𝑉𝑃",
        "bg": "yellow"
      },
      {
        "content": "- 𝑆 → 𝑁𝑃 𝑉𝑃\n- 𝑆 → 𝑋<sub>1</sub> 𝑉𝑃\n- 𝑋<sub>1</sub> → 𝐴𝑢𝑥 𝑁𝑃",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "- 𝑆 → 𝑉𝑃",
        "bg": "yellow"
      },
      {
        "content": "- 𝑆 → 𝑏𝑜𝑜𝑘 | 𝑖𝑛𝑐𝑙𝑢𝑑𝑒 | 𝑝𝑟𝑒𝑓𝑒𝑟\n- 𝑆 → 𝑉𝑒𝑟𝑏 𝑁𝑃\n- 𝑆 → 𝑋<sub>2</sub> 𝑃𝑃\n- 𝑆 → 𝑉𝑒𝑟𝑏 𝑃𝑃\n- 𝑆 → 𝑉𝑃 𝑃𝑃",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "- 𝑁𝑃 → 𝑃𝑟𝑜𝑛𝑜𝑢𝑛\n- 𝑁𝑃 → 𝑃𝑟𝑜𝑝𝑒𝑟-𝑁𝑜𝑢𝑛\n- 𝑁𝑃 → 𝐷𝑒𝑡 𝑁𝑜𝑚𝑖𝑛𝑎𝑙\n- 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 → 𝑁𝑜𝑢𝑛\n- 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 → 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 𝑁𝑜𝑢𝑛\n- 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 → 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 𝑃𝑃\n- 𝑉𝑃 → 𝑉𝑒𝑟𝑏\n- 𝑉𝑃 → 𝑉𝑒𝑟𝑏 𝑁𝑃",
        "bg": "yellow"
      },
      {
        "content": "- 𝑁𝑃 → 𝐼 | 𝑠ℎ𝑒 | 𝑚𝑒\n- 𝑁𝑃 → 𝑇𝑊𝐴 | 𝐻𝑜𝑢𝑠𝑡𝑜𝑛\n- 𝑁𝑃 → 𝐷𝑒𝑡 𝑁𝑜𝑚𝑖𝑛𝑎𝑙\n- 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 → 𝑏𝑜𝑜𝑘 | 𝑓𝑙𝑖𝑔ℎ𝑡 | 𝑚𝑒𝑎𝑙 | 𝑚𝑜𝑛𝑒𝑦\n- 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 → 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 𝑁𝑜𝑢𝑛\n- 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 → 𝑁𝑜𝑚𝑖𝑛𝑎𝑙 𝑃𝑃\n- 𝑉𝑃 → 𝑏𝑜𝑜𝑘 | 𝑖𝑛𝑐𝑙𝑢𝑑𝑒 | 𝑝𝑟𝑒𝑓𝑒𝑟\n- 𝑉𝑃 → 𝑉𝑒𝑟𝑏 𝑁𝑃",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "- 𝑉𝑃 → 𝑉𝑒𝑟𝑏 𝑁𝑃 𝑃𝑃",
        "bg": "yellow"
      },
      {
        "content": "- 𝑉𝑃 → 𝑋<sub>2</sub> 𝑃𝑃\n- 𝑋<sub>2</sub> → 𝑉𝑒𝑟𝑏 𝑁𝑃",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "- 𝑉𝑃 → 𝑉𝑒𝑟𝑏 𝑃𝑃\n- 𝑉𝑃 → 𝑉𝑃 𝑃𝑃\n- 𝑃𝑃 → 𝑃𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑖𝑜𝑛 𝑁𝑃",
        "bg": "yellow"
      },
      {
        "content": "- 𝑉𝑃 → 𝑉𝑒𝑟𝑏 𝑃𝑃\n- 𝑉𝑃 → 𝑉𝑃 𝑃𝑃\n- 𝑃𝑃 → 𝑃𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑖𝑜𝑛 𝑁𝑃",
        "bg": "blue"
      }
    ]
  ]
}
```
