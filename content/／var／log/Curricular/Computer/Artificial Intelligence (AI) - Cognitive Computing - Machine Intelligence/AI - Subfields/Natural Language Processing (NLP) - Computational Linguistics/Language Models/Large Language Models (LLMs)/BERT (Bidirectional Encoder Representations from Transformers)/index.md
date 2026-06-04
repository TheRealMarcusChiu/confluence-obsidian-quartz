---
title: "BERT (Bidirectional Encoder Representations from Transformers)"
created: 2024-08-19T14:37:16.013-05:00
modified: 2024-08-19T17:09:30.034-05:00
parent: "[[Large Language Models (LLMs)]]"
children: []
---
###### BERT (Bidirectional Encoder Representations from Transformers)
````excerpt
- is a [[Large Language Models (LLMs)|large language model]]
- introduced in 2018
- developed by [[Google]]
- [[Transformer Neural Networks (TNN) - Transformers|transformer]]-based language representation model trained on a large cross-domain corpus
- applies a [[Causal Language Modeling (CLM) vs Masked Language Modeling (MLM) vs Sequence-to-Sequence (Seq2Seq)|masked language model]] to predict words that are randomly masked in a sequence, and this is followed by a next-sentence-prediction task for learning the associations between sentences
- because BERT doesn’t have a decoder component, it can’t generate text, which paved the way for GPT models to pick up where BERT left off
````
^excerpt

# BERT - Pyramid of Fundamental Concepts
![[BERT (Bidirectional Encoder Representations from Transformers)/BERT-pyramid-of-fundamental-concepts.png|450]]
# Resources
- [https://arxiv.org/abs/1810.04805](https://arxiv.org/abs/1810.04805)
