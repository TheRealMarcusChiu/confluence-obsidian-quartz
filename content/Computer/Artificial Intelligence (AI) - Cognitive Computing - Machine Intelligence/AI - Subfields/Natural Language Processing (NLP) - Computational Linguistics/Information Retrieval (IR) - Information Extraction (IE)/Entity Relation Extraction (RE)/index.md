---
title: "Entity Relation Extraction (RE)"
created: 2020-10-15T23:35:24.537-05:00
modified: 2020-11-02T18:43:39.667-06:00
parent: "[[Information Retrieval (IR) - Information Extraction (IE)]]"
children:
  - "[[Weakly Supervised RE (Bootstrapping)]]"
---
###### Entity Relation Extraction (RE) - Relation Extraction (RE)
- is the task of extracting semantic relationships from unstructured text, these relationships:
	- occur between two or more entities of a certain type (e.g. Person, Organisation, Location)
	- fall into a number of semantic categories (e.g. married to, employed by, lives in)
- usually done after entities are extracted i.e. [[(Entity - Named Entity) Recognition／Identification／Chunking／Extraction／Resolution (NER)|Named Entity Recognition (NER)]]
- a subfield of [[Information Retrieval (IR) - Information Extraction (IE)|Information Extraction (IE)]] which itself is a subfield of [[Natural Language Processing (NLP) - Computational Linguistics|Natural Language Processing (NLP)]]

### RE - Progress
- [http://nlpprogress.com/english/relationship_extraction.html](http://nlpprogress.com/english/relationship_extraction.html)

### RE - 2 Steps/Tasks

given two or more entities:
1. determine whether a relation exists between them
2. determine the type of relation between them

### RE - Methods
- Rule-Based RE
- Supervised RE
- Semi-Supervised RE:
	- [[Weakly Supervised RE (Bootstrapping)]] (Bootstrapping (using seeds))
	- Distantly Supervised RE
- Unsupervised RE

### RE - Possible Features to Consider

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Possible Feature Candidates</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(204,153,255);\">\\<e1\\> American Airlines \\</e1\\></font><font style=\"color: rgb(128,128,128);\"> , a unit of AMR, immediately matched the move, spokesman </font><font style=\"color: rgb(204,153,255);\">\\<e2\\> Tim Wagner \\</e2\\></font><font style=\"color: rgb(128,128,128);\"> said</font>",
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>entity-based features</strong>\n\t- entity types\n\t- entity head\n\t- concatenation of entity types\n\t- entity level (e.g. NAME, NOMINAL, PRONOUN, etc)\n- <strong>word-based features</strong>\n\t- between-entity bag of words\n\t- word(s) before entity\n\t- word(s) after entity\n- <strong>syntactic features</strong>\n\t- constituent path\n\t- base syntactic chunk path\n\t- typed dependency path",
      "- <strong>entity-based features</strong>\n\t- entity types: <font style=\"color: rgb(128,128,128);\">{e1=ORG, e2=PERSON}</font>\n\t- entity head: <font style=\"color: rgb(128,128,128);\">{e1=airlines, e2=Wagner}</font>\n\t- concatenation of entity types: <font style=\"color: rgb(128,128,128);\">ORG-PERSON</font>\n\t- entity level: <font style=\"color: rgb(128,128,128);\">{e1=NAME, e2=NAME}</font>\n- <strong>word-based features</strong>\n\t- between-entity bag of words: <font style=\"color: rgb(128,128,128);\">{a, unit, of AMR, immediately, matched, the, move, spokesman}</font>\n\t- word(s) before entity: <font style=\"color: rgb(128,128,128);\">{e1=NONE, e2=spokesman}</font>\n\t- word(s) after entity: <font style=\"color: rgb(128,128,128);\">{e1=a, e2=said}</font>\n- <strong>syntactic features</strong>\n\t- constituent path: <font style=\"color: rgb(128,128,128);\">NP↑NP↑S↑S↓NP</font>\n\t- base syntactic chunk path: <font style=\"color: rgb(128,128,128);\">NP→NP→PP→NP→VP→NP→NP</font>\n\t- typed dependency path: <font style=\"color: rgb(128,128,128);\">Airlines ←<sub>𝑠𝑢𝑏𝑗</sub> matched ←<sub>𝑐𝑜𝑚𝑝</sub> said →<sub>𝑠𝑢𝑏𝑗</sub> Wagner</font>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
