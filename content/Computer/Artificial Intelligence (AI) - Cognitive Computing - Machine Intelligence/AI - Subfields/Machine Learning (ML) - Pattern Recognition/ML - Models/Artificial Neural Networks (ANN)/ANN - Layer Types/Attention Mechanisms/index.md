---
title: "Attention Mechanisms"
created: 2023-12-21T15:25:31.918-06:00
modified: 2025-10-10T19:47:44.821-05:00
parent: "[[ANN - Layer Types]]"
children:
  - "[[Bahdanau Attention Mechanism - Additive Attention]]"
  - "[[Luong Attention Mechanism - Multiplicative／Dot-Product Attention]]"
  - "[[Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention]]"
---
###### Attention Mechanisms
````excerpt
- mimics cognitive attention
- Attention was introduced to address the problem of long sequences in Machine Translation, which is also a problem for most other [[Natural Language Processing (NLP) - Computational Linguistics|NLP]] tasks as well
- in broad terms, attention is one component of a network’s architecture, and is in charge of managing and quantifying the interdependence:
	- between the input and output elements (General Attention)
	- within the input elements (Self-Attention)
- in technical terms, it calculates "soft" weights for each [[Word Embeddings／Embedding|word embedding]] in the context window of a text document
	- it can be done either in parallel (such as in [[Transformer Neural Networks (TNN) - Transformers|transformers]]) or sequentially (such as in [[Recurrent Neural Networks (RNN)|recurrent neural networks]])
	- "soft" weights can change during each runtime, in contrast to "hard" weights, which are pre-trained and fine-tuned and remain frozen afterward
````
^excerpt

# Attention Mechanism - Types

For [[Language Models|language models]] (e.g. [[Large Language Models (LLMs)|LLM]], [[Transformer Neural Networks (TNN) - Transformers|Transformers]], [[Recurrent Neural Networks (RNN)|RNN]])

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Bahdanau Attention Mechanism - Additive Attention|Bahdanau Attention Mechanism]]",
        "bg": "#F4F5F7"
      },
      "- aka additive attention",
      "- [[Recurrent Neural Networks (RNN)|RNN]]"
    ],
    [
      {
        "content": "[[Luong Attention Mechanism - Multiplicative／Dot-Product Attention|Luong Attention Mechanism]]",
        "bg": "#F4F5F7"
      },
      "- aka multiplicative attention",
      "- RNN"
    ],
    [
      {
        "content": "[[Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention|Transformer Attention Mechanism]]",
        "bg": "#F4F5F7"
      },
      "- aka self-attention / decomposable attention",
      "- [[Transformer Neural Networks (TNN) - Transformers|Transformer]]"
    ],
    [
      {
        "content": "Sparse Attention Mechanisms",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Blockwise Attention",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Linformer",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Reformer",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Ring Attention",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Longformer",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "Adaptive Attention Span",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ]
  ]
}
```

For [[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN|convolutional neural networks]], attention mechanisms can be distinguished by the dimension on which they operate, namely:

```merge-table
{
  "rows": [
    [
      {
        "content": "Spatial Attention",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Channel Attention",
        "bg": "#F4F5F7"
      },
      ""
    ],
    [
      {
        "content": "Combinations",
        "bg": "#F4F5F7"
      },
      ""
    ]
  ]
}
```
# Resources
- [https://en.wikipedia.org/wiki/Attention_(machine_learning)](https://en.wikipedia.org/wiki/Attention_(machine_learning))
- [https://machinelearningmastery.com/the-attention-mechanism-from-scratch/](https://machinelearningmastery.com/the-attention-mechanism-from-scratch/)
