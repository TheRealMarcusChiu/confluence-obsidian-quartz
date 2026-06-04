---
title: "Dependency Grammar"
created: 2020-11-02T14:44:19.158-06:00
modified: 2020-11-02T15:13:09.318-06:00
parent: "[[Dependency Parsing]]"
children:
  - "[[Universal Dependency Project Set]]"
---
###### Dependency Grammar
- phrasal constituents ([[Verb Phrase (VP)|verb phrases]], noun phrases, prepositional phrases, etc) & [[Context-Free Grammar (CFG) - Phrase Structure Grammar (PSG) - Backus-Naur／Normal Form (BNF)|phrase-structure rules]] do not play a direct role
- the syntactic structure of a sentence is described solely in terms of the words (or lemmas) in a sentence and an associated set of directed binary grammatical relations that hold among the words

### Dependency Tree

A dependency tree is a directed graph that satisfies the following constraints:
- there is a single designated root node that has no incoming arcs
- with the exception of the root node, each vertex has exactly one incoming arc
- there is a unique path from the root node to each vertex in V.

Taken together, these constraints ensure that:
- each word has a single head
- that the dependency structure is connected
- that there is a single root node from which one can follow a unique directed path to each of the words in the sentence

### Dependency Tree - Example

> [!indent]
> ![[Dependency Grammar/dependency-structure-example.png|301]]

Relations among the words are illustrated in the above sentence with directed, labeled arcs from heads to dependents. We call this a typed dependency structure typed dependency because the labels are drawn from a fixed inventory of grammatical relations. It also includes a root node that explicitly marks the root of the tree, the head of the entire structure
### Projectivity

an arc from a head to a dependent is said to be <strong>projective</strong> if there is a path from the head to every word that lies between the head and the dependent in the sentence.

a dependency tree is said to be <strong>projective</strong> if all the arcs that make it up are projective

```merge-table
{
  "rows": [
    [
      {
        "content": "A Projective Dependency Tree",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "A Non-Projective Dependency Tree",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[Dependency Grammar/dependency-structure-example.png|301]]",
      "![[Dependency Grammar/non-projectivity.png|450]]"
    ]
  ]
}
```
### Dependency Relation Sets
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
