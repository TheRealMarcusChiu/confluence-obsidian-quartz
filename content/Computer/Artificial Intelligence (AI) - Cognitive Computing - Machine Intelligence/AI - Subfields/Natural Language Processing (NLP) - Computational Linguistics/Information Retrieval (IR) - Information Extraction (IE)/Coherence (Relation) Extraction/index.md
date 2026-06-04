---
title: "Coherence (Relation) Extraction"
created: 2020-11-20T14:57:19.802-06:00
modified: 2020-11-20T17:22:36.470-06:00
parent: "[[Information Retrieval (IR) - Information Extraction (IE)]]"
children: []
---
###### Coherence (Relation) Extraction
- a discourse is coherent when its sentences are logically related to each other
- coherence extraction is important for:
	- coreference
	- word sense disambiguation
	- interpretation
	- other linguistic problems

### Coherence Relation Types
𝑆<sub>0</sub> and 𝑆<sub>1</sub>represent the meanings of two related sentences

```merge-table
{
  "rows": [
    [
      {
        "content": "Result",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Infer that 𝑆<sub>0</sub> causes or could cause the state 𝑆<sub>1</sub>or event asserted by\n<code><font style=\"color: rgb(128,128,128);\">John bought an Acura. His father went ballistic</font></code>"
    ],
    [
      {
        "content": "Explanation",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Infer that S<sub>1</sub> causes or could cause the state or event asserted by 𝑆<sub>0</sub>\n<code><font style=\"color: rgb(128,128,128);\">John hid Bill’s car keys. He was drunk</font></code>"
    ],
    [
      {
        "content": "Parallel",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Infer 𝑃(𝑎<sub>1</sub>, 𝑎<sub>2</sub>, ...) from the assertion of 𝑆<sub>0</sub> and 𝑃(𝑏<sub>1</sub>, 𝑏<sub>2</sub>, ...) from the assertion of S<sub>1</sub>, where 𝑎<sub>𝑖</sub> and 𝑏<sub>𝑖</sub> are similar, for all 𝑖\n<code><font style=\"color: rgb(128,128,128);\">John bought an Acura. Bill leased a BMW</font></code>"
    ],
    [
      {
        "content": "Elaboration",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Infer the same proposition 𝑃 from the assertions of 𝑆<sub>0</sub> and 𝑆<sub>1</sub>\n<code><font style=\"color: rgb(128,128,128);\">John bought an Acura. He purchased a beautiful New Integra</font></code>"
    ],
    [
      {
        "content": "Occasion",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a change of state can be inferred from 𝑆<sub>0</sub>, whose final state can be inferred from 𝑆<sub>1</sub>, or vice-versa,\na change of state can be inferred from 𝑆<sub>1</sub>, whose initial state can be inferred from 𝑆<sub>0</sub><code><font style=\"color: rgb(128,128,128);\">John bought an Acura. He drove to the ballgame.</font></code>"
    ],
    [
      {
        "content": "etc",
        "header": true,
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
### Action-Based Coherence

```merge-table
{
  "rows": [
    [
      {
        "content": "Effect Causality",
        "header": true,
        "bg": "#F4F5F7"
      },
      "every action has some effects:\n- intended effects\n- side effects"
    ],
    [
      {
        "content": "Precondition Causality",
        "header": true,
        "bg": "#F4F5F7"
      },
      "every action has a set of conditions that typically must hold before action starts"
    ],
    [
      {
        "content": "Enablement",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an action enables another if the effects of the first establish 1 or more preconditions for the second\n<font style=\"color: rgb(128,128,128);\">electric spark enables fire</font>"
    ],
    [
      {
        "content": "Decomposition",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an action is a subpart of another action if the first action is one of a sequence of substeps that constitute the execution of the second action\n<font style=\"color: rgb(128,128,128);\">preheating oven is a substep of baking a cake</font>"
    ],
    [
      {
        "content": "Generalization\nGeneration",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an action generates another if executing the first also executes the second one\n<font style=\"color: rgb(128,128,128);\">turn a switch on, generates turning a light on</font>"
    ]
  ]
}
```
