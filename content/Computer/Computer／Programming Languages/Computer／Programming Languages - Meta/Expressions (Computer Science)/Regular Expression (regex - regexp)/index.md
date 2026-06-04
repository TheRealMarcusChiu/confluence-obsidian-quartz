---
title: "Regular Expression (regex - regexp)"
created: 2019-10-16T10:37:44.184-05:00
modified: 2020-05-18T00:56:03.533-05:00
parent: "[[Expressions (Computer Science)]]"
children: []
---
````excerpt
<strong>Regular Expression (regex - regexp)</strong> is a sequence of characters that define a search pattern. Usually such patterns are used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation
````
^excerpt

### Regular Expressions - Relation to Finite-State Automata (FSA)
- a regular expression is 1 way of describing a [[Finite-State Automaton／Machine (FSA／FSM)|finite-state automata]]
- any regular expression can be implemented as a finite-state automata
- any finite-state automata can be described as a regular expression
- a regular expression is 1 way of characterizing a particular kind of formal language called regular language
- both regular expressions and finite-state automata can be used to describe regular languages
- regular grammar - is another way of describing regular languages

### Regular Expressions - Operators

```merge-table
{
  "rows": [
    [
      {
        "content": "syntax",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "example use",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "example matches",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "|",
      "boolean \"or\" separates alternatives",
      "gray|grey",
      "- gray\n- grey"
    ],
    [
      "[]",
      "square brackets is another way of |",
      "gr[ae]y",
      "- gray\n- grey"
    ],
    [
      "\\[A-Z\\]",
      "an upper case letter",
      "",
      ""
    ],
    [
      "\\[a-z\\]",
      "a lower case letter",
      "",
      ""
    ],
    [
      "[0-9]",
      "a single digit",
      "",
      ""
    ],
    [
      "[^]",
      "carat means negation only when first in []",
      "[^Ss]",
      ""
    ],
    [
      "()",
      "grouping are used to define the scope and precedence of the operators",
      "gr(a|e)y",
      "- gray\n- grey"
    ],
    [
      "?",
      "indicates zero or one occurrences of the preceding element",
      "colou?r",
      "- color\n- colour"
    ],
    [
      "*",
      "indicates <em>zero or more</em> occurrences of the preceding element",
      "ab*c",
      "- ac\n- abc\n- abbc"
    ],
    [
      "+",
      "indicates <em>one or more</em> occurrences of the preceding element",
      "ab+c",
      "- abc\n- abbc"
    ],
    [
      "{n}",
      "the preceding item is matched exactly <em>n</em> times",
      "",
      ""
    ],
    [
      "{min,}",
      "the preceding item is matched min or more times",
      "",
      ""
    ],
    [
      "{min, max}",
      "the preceding item is matched at least min times, but not more than max times",
      "",
      ""
    ],
    [
      ".",
      "wildcard matches any character",
      "a.b",
      "- acb\n- a-b"
    ],
    [
      "^",
      "anchors beginning",
      "",
      ""
    ],
    [
      "$",
      "anchors end",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 95.9888%;"
}
```
