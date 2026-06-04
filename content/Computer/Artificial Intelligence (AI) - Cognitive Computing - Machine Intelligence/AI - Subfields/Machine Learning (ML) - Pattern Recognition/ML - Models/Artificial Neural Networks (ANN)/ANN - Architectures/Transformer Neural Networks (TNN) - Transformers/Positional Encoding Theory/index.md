---
title: "Positional Encoding Theory"
created: 2023-12-23T12:45:20.555-06:00
modified: 2025-10-10T18:41:34.661-05:00
parent: "[[Transformer Neural Networks (TNN) - Transformers]]"
children:
  - "[[Positional Encoding (Sinusoidal - Cosine／Sine)]]"
  - "[[Why Positional Encodings and (Semantic Encodings ／ Word Embeddings) Added Together Instead of Concatenated]]"
---
###### Positional Encoding Theory
````excerpt
- is a way to represent the location of an item in a sequence
````
^excerpt

# Positional Encoding - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- in [[BERT (Bidirectional Encoder Representations from Transformers)|BERT]], positional encodings are themselves trainable vectors, so no sinusoidal function is used anymore
