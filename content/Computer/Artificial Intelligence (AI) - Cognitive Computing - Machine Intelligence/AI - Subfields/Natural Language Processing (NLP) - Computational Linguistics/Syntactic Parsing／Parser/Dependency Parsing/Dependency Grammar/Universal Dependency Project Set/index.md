---
title: "Universal Dependency Project Set"
created: 2020-11-02T14:49:57.824-06:00
modified: 2020-11-02T15:07:42.364-06:00
parent: "[[Dependency Grammar]]"
children: []
---
###### Universal Dependency Project Set
- provides an inventory of dependency relations that are linguistically motivated, computationally useful, and cross-linguistically applicable

### Subset of Dependency Relation Types

```merge-table
{
  "rows": [
    [
      {
        "content": "### Clausal Argument Relations",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Examples with <font style=\"color: rgb(128,128,0);\">head</font> and <font style=\"color: rgb(0,128,0);\">dependent</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "SUBJ",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Subject - Predicate (Verb - Object)|subject]]",
      "<code><font style=\"color: rgb(128,128,128);\"><strong><font style=\"color: rgb(0,128,0);\">We </font><font style=\"color: rgb(128,128,0);\">booked</font> </strong><font style=\"color: rgb(128,128,128);\">her</font><font style=\"color: rgb(128,128,128);\"> the flight</font>\n</font></code>"
    ],
    [
      {
        "content": "DOBJ",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Direct Object - Indirect Object - Object of a Preposition|direct object]]",
      "<code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">We </font><strong><font style=\"color: rgb(128,128,0);\">booked</font> </strong>her<font style=\"color: rgb(128,128,128);\"> the <strong><font style=\"color: rgb(0,128,0);\">flight</font></strong></font>\n</font></code>"
    ],
    [
      {
        "content": "IOBJ",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Direct Object - Indirect Object - Object of a Preposition|indirect object]]",
      "<code><font style=\"color: rgb(128,128,128);\">We <strong><font style=\"color: rgb(128,128,0);\">booked</font> <font style=\"color: rgb(0,128,0);\">her</font></strong> the flight</font></code>"
    ],
    [
      {
        "content": "CCOMP",
        "header": true,
        "bg": "#F4F5F7"
      },
      "clausal complement",
      ""
    ],
    [
      {
        "content": "XCOMP",
        "header": true,
        "bg": "#F4F5F7"
      },
      "open clausal complement",
      ""
    ],
    [
      {
        "content": "### Nominal Modifier Relations",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Examples with <font style=\"color: rgb(128,128,0);\">head</font> and <font style=\"color: rgb(0,128,0);\">dependent</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "NMOD",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Nominals (PoS)|nominal]] modifier",
      "<code><font style=\"color: rgb(128,128,128);\">We took the <strong><font style=\"color: rgb(0,128,0);\">morning</font></strong> <font style=\"color: rgb(128,128,0);\"><strong>flight</strong></font></font></code>"
    ],
    [
      {
        "content": "AMOD",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Adjectives|adjectival]] modifier",
      "<code><font style=\"color: rgb(128,128,128);\">We took the <strong><font style=\"color: rgb(0,128,0);\">cheapest</font> <font style=\"color: rgb(128,128,0);\">flight</font></strong></font></code>"
    ],
    [
      {
        "content": "NUMMOD",
        "header": true,
        "bg": "#F4F5F7"
      },
      "numeric modifier",
      "<code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">We took <font style=\"color: rgb(0,128,0);\"><strong>1000</strong></font></font><strong> <font style=\"color: rgb(128,128,0);\">flights</font></strong>\n</font></code>"
    ],
    [
      {
        "content": "APPOS",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Figures of Speech (FoS)|appositional]] modifier",
      "<code><font style=\"color: rgb(128,128,128);\"><strong><font style=\"color: rgb(128,128,0);\">United</font></strong>, a <strong><font style=\"color: rgb(0,128,0);\">unit</font></strong> of UAL, matched the fares</font></code>"
    ],
    [
      {
        "content": "DET",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Determiners (Articles)|determiner]]",
      "<code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(0,128,0);\"><strong>The</strong></font> <strong><font style=\"color: rgb(128,128,0);\">flight</font></strong> was canceled</font></code>"
    ],
    [
      {
        "content": "CASE",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Adpositions (Prepositions - Postpositions - Circumposition)|adpositions]] and other case markers",
      "<code><font style=\"color: rgb(128,128,128);\">Book the flight <font style=\"color: rgb(0,128,0);\"><strong>through</strong></font> <strong><font style=\"color: rgb(128,128,0);\">Houston</font></strong></font></code>"
    ],
    [
      {
        "content": "### Other Notable Relations",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "### Examples with <font style=\"color: rgb(128,128,0);\">head</font> and <font style=\"color: rgb(0,128,0);\">dependent</font>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "CONJ",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Conjunct",
      "<code><font style=\"color: rgb(128,128,128);\">We</font> <strong><font style=\"color: rgb(128,128,0);\">flew</font></strong> <font style=\"color: rgb(128,128,128);\">to Denver and</font> <strong><font style=\"color: rgb(0,128,0);\">drove</font></strong> <font style=\"color: rgb(128,128,128);\">to home</font></code>"
    ],
    [
      {
        "content": "CC",
        "header": true,
        "bg": "#F4F5F7"
      },
      "[[Conjunctions|Coordinating Conjunction]]",
      "<code><font style=\"color: rgb(128,128,128);\">We flew to Denver</font> <font style=\"color: rgb(0,128,0);\"><strong>and</strong></font> <strong><font style=\"color: rgb(128,128,0);\">drove</font></strong> <font style=\"color: rgb(128,128,128);\">to home</font></code>"
    ]
  ]
}
```
