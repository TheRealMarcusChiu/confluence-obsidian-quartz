---
title: "Word2Vec"
created: 2020-11-09T21:54:59.654-06:00
modified: 2024-08-19T16:38:52.979-05:00
parent: "[[Word Embeddings／Embedding]]"
children: []
---
###### Word2Vec
````excerpt
- is a method to efficiently create [[Word Embeddings／Embedding|word embeddings]]
- introduced by Google researchers since 2013
- is a shallow, two-layer [[Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)|feed-forward neural networks]] that are trained to reconstruct linguistic contexts of words
````
^excerpt

# Word2Vec - Modes

Word2Vec can utilize either of two model architectures:
- <strong>continuous bag-of-words (CBoW)</strong> - the model predicts the current word from a window of surrounding context words
- <strong>continuous skip-gram</strong> - the model uses the current word to predict the surrounding window of context words

# Word2Vec - Architectures
![[Word2Vec/word2vec-cbow-neural-network-architecture.png]]
# Word2Vec - Code
```py
from gensim.models import KeyedVectors

model = KeyedVectors.load_word2vec_format('data/GoogleNews-vectors-negative300.bin', binary=True)
similar_words = model.most_similar('robots')
print(similar_words)
```
