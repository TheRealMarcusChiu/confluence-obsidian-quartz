---
title: "(Entity - Named Entity) Recognition／Identification／Chunking／Extraction／Resolution (NER)"
created: 2020-09-26T19:12:56.487-05:00
modified: 2020-11-02T19:50:54.075-06:00
parent: "[[Information Retrieval (IR) - Information Extraction (IE)]]"
children:
  - "[[Word Shapes]]"
---
- <strong>Entity Extraction (EE)</strong> - extracting entities from unstructured text
- <strong>Entity Resolution</strong> refers to the task of finding all mentions of same real-world entity within a knowledge base or across multiple knowledge bases
- <strong>Named Entity Recognition/Identification/Chunking/Extraction/Resolution</strong>
	- a type of Entity Extraction where entities are NAMES (i.e. [[Nouns|proper nouns]])
	- is a subtask of [[Information Retrieval (IR) - Information Extraction (IE)|information extraction]] that seeks to locate and classify NAMED entities mentioned in unstructured text into predefined categories such as person names, organizations, locations, medical, etc

### NER - 2 Steps/Tasks
1. identify named entity's boundary
2. identify named entity's category

### NER - Example

```merge-table
{
  "rows": [
    [
      {
        "content": "Unstructured Text",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Predefined Categories",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "The decision by the independent MP <font style=\"color: rgb(0,204,255);\">Andrew Wilkie</font> to withdraw his support for the minority <font style=\"color: rgb(128,0,0);\">Labor</font> government sounded dramatic but it should not further threaten its stability. When, after the <font style=\"color: rgb(255,102,0);\">2010</font> election, <font style=\"color: rgb(0,204,255);\">Wilkie</font>, <font style=\"color: rgb(0,204,255);\">Rob Oakeshott</font>, <font style=\"color: rgb(0,204,255);\">Tony Windsor</font> and the <font style=\"color: rgb(128,0,0);\">Greens</font> agreed to support <font style=\"color: rgb(128,0,0);\">Labor</font>, they gave just two guarantees: confidence and supply",
      "- <font style=\"color: rgb(255,102,0);\">date</font>\n- <font style=\"color: rgb(0,204,255);\">person's name</font>\n- <font style=\"color: rgb(128,0,0);\">organization's name</font>"
    ]
  ],
  "tableStyle": "width: 98.3209%;"
}
```
### NER - Possible Feature Candidates
- [[Word Shapes]]

### NER - Methods

sequence models such as:
- [[Hidden Markov Models (HMM)|hidden markov models]]
- [[Maximum Entropy (Maxent) Models|maximum entropy models]]
- [[Conditional／Discriminative Random Fields (CRF)|conditional random fields]]

### Resources
- [Stanford - YouTube Lectures](https://www.youtube.com/watch?v=0qWDkRdWbSw&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&index=45&ab_channel=MausamJain)
