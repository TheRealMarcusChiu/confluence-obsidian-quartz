---
title: "Transformer Neural Networks (TNN) - Transformers"
created: 2020-08-02T21:25:21.339-05:00
modified: 2025-10-10T18:30:01.884-05:00
parent: "[[ANN - Architectures]]"
children:
  - "[[Generative Pre-trained Transformer (GPT)]]"
  - "[[Positional Encoding Theory]]"
---
###### Transformer Neural Networks (TNN) - Transformers
````excerpt
- is a [[Deep Learning|deep learning]] model introduced in 2017, used primarily in the field of [[Natural Language Processing (NLP) - Computational Linguistics|natural language processing]]
- like [[Recurrent Neural Networks (RNN)|Recurrent Neural Networks (RNNs)]] and [[Gated Recurrent Neural Networks (Gated RNN)|Gated RNNs (e.g. LSTM & GRU)]], Transformers are designed to handle sequential data, such as natural language, for tasks such as translation and text summarization. However, unlike RNNs, Transformers do not require that the sequential data be processed in order. For example, if the input data is a natural language sentence, the Transformer does not need to process the beginning of it before the end. Due to this feature, the Transformer allows for much more parallelization than RNNs and therefore reduces training times
- is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence aligned RNNs or convolution
````
^excerpt

# How it Works - TL;DR
- [3Blue1Brown - Attention in Transformers](https://www.youtube.com/watch?v=eMlx5fFNoYc&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=7)
- [3Blue1Brown - Storing Facts in Multi-Layer Perceptron](https://www.youtube.com/watch?v=9-Jl0dxWQs8&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=8)
- [StatQuest - Transformer Neural Networks](https://www.youtube.com/watch?v=zxQyTK8quyY&t=10s)
- [StatQuest - Decoder-Only Transformers](https://www.youtube.com/watch?v=bQ5BoolX9Ag)

Transformer architecture outline:
- <code><font style="color: rgb(122,134,154);">input → [[Word Embeddings／Embedding|word embeddings]] + [[Positional Encoding Theory|positional encodings]] → \[multi-head [[Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention|self-attention]] block → [[Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)|multi-layer perceptron]]\]\*96 → word un-embedding</font></code>

First self-attention block architecture:

```merge-table
{
  "rows": [
    [
      "![[Transformer Neural Networks (TNN) - Transformers/transformer-encoder.png]]",
      "1. <strong>[[Word Embeddings／Embedding|word embeddings]]</strong> - encodes words into numbers\n2. <strong>[[Positional Encoding Theory|positional encoding]]</strong> - encodes positions of words\n3. <strong>[[Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention|self-attention]]</strong> - encodes the relationships among words\n4. <strong>residual connections</strong> - mainly helps mitigate the [[Vanishing Gradient Problem|vanishing gradient problem]]"
    ]
  ]
}
```

MLP architecture:

```merge-table
{
  "rows": [
    [
      "![[Transformer Neural Networks (TNN) - Transformers/transformer-mlp.png|500]]",
      "Each token that has gone through the previous attention block will go through the following steps:\n- linear up-scaling\n- non-linear transformation (i.e. ReLU)\n- linear down-scaling\n- then added with original token"
    ]
  ]
}
```
# Transformer - Timeline of Models
![[Transformer Neural Networks (TNN) - Transformers/transformers-timeline-of-models.png|350]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [[Attention Is All You Need.pdf]] - 2017 white paper
