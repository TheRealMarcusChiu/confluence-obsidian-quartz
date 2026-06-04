---
title: "Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention"
created: 2023-12-21T15:34:42.416-06:00
modified: 2025-10-10T19:49:32.040-05:00
parent: "[[Attention Mechanisms]]"
children:
  - "[[Multi-Head Attention (MHA)]]"
  - "[[Scaled Dot-Product Attention (SDPA)]]"
---
###### Transformer Attention Mechanism
````excerpt
- self-attention is an [[Attention Mechanisms|attention mechanism]] relating different positions of a single sequence to compute a representation of the sequence
- self-attention has been used successfully in a variety of tasks including reading comprehension, abstractive summarization, textual entailment and learning task-independent sentence representations
- used in [[Transformer Neural Networks (TNN) - Transformers|transformer]] neural networks
````
^excerpt

# Introduction

![](https://www.youtube.com/watch?v=eMlx5fFNoYc&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=7)
# Query/Key/Value Intuition

The key/value/query concepts come from retrieval systems. For example, when you type a query to search for some video on Youtube, the search engine will map your <strong>query</strong> against a set of <strong>keys</strong> (video title, description etc.) associated with candidate videos in the database, then present you the best matched videos (<strong>values</strong>).
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://proceedings.neurips.cc/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf](https://proceedings.neurips.cc/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf)
- [https://machinelearningmastery.com/the-transformer-attention-mechanism/](https://machinelearningmastery.com/the-transformer-attention-mechanism/)
