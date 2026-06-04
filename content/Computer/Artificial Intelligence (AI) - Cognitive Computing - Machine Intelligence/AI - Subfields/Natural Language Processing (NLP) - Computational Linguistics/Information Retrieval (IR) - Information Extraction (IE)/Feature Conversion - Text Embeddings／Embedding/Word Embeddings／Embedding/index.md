---
title: "Word Embeddings／Embedding"
created: 2020-11-09T21:46:57.537-06:00
modified: 2024-08-19T16:33:33.804-05:00
parent: "[[Feature Conversion - Text Embeddings／Embedding]]"
children:
  - "[[FastText]]"
  - "[[GloVe (Global Vectors for Word Representation)]]"
  - "[[Indicator Encoding]]"
  - "[[One-Hot Encoding]]"
  - "[[Ordinal Encoding]]"
  - "[[Word2Vec]]"
---
###### Word Embeddings
````excerpt
- a type of [[Feature Conversion - Text Embeddings／Embedding|Text Embeddings]] that maps words/phrases from the vocabulary to real numbers (or vectors)
- conceptually it involves a mathematical [[Feature Projection／Extraction - Embeddings|embedding]] from space with many dimensions to a continuous [[Vector Spaces - Linear Spaces|vector space]] with a much lower dimension
````
^excerpt

# Word Embedding - Spectrum
![[Word Embeddings／Embedding/word-embeddings-spectrum.png|500x114]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Classification Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Density",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Ordinal Encoding|Reverse One-Hot Encoding]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "dense",
        "align": "center"
      },
      "- each word is assigned a unique number\n- two downsides to this approach:\n\t- the integer-encoding is arbitrary (it does not capture any relationship between words).\n\t- an integer-encoding can be challenging for a model to interpret. A linear classifier, for example, learns a single weight for each feature. Because there is no relationship between the similarity of any two words and the similarity of their encodings, this feature-weight combination is not meaningful"
    ],
    [
      {
        "content": "[[One-Hot Encoding]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "sparse",
        "align": "center"
      },
      "- each word is represented as a vector where:\n\t- its length equal to the size of the vocabulary\n\t- has zeros everywhere except a 1 that corresponds to the word"
    ],
    [
      {
        "content": "Word Embeddings",
        "bg": "#F4F5F7"
      },
      {
        "content": "middle",
        "align": "center"
      },
      "- each word is represented as a vector"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Word Embedding - Methods Generating Mapping
- [[Artificial Neural Networks (ANN)|neural networks]]
- [[Feature Dimensional／Dimensionality Reduction|dimensionality reduction]] on the word [co-occurrence matrix](https://en.wikipedia.org/wiki/Co-occurrence_matrix)
- [[Probability Distribution Models／Representations|probabilistic models]]
- explainable knowledge base method
- explicit representation in terms of the context in which words appear

# Word Embeddings - Taxonomy
![[Word Embeddings／Embedding/taxonomy-of-word-embeddings.png|800]]

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Bag of Words (BoW)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "a text, such as a sentence or a document, is represented as the bag of its words, disregarding grammar and even word order but keeping multiplicity"
    ],
    [
      {
        "content": "[[Term-Frequency Inverse-Document-Frequency (TF-IDF) Term Frequency - Inverse Document Frequency|TF-IDF]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "gets this importance score by getting the term’s frequency (TF) and multiplying it by the term inverse document frequency (IDF)"
    ],
    [
      {
        "content": "[[Word2Vec]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "shallow, two-layer neural networks that are trained to reconstruct linguistic contexts of words. Word2vec can utilize either of two model architectures: continuous bag-of-words (CBOW) or continuous skip-gram. In the CBOW architecture, the model predicts the current word from a window of surrounding context words. In the continuous skip-gram architecture, the model uses the current word to predict the surrounding window of context words"
    ],
    [
      {
        "content": "[[GloVe (Global Vectors for Word Representation)|GloVe]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "Training is performed on aggregated global word-word co-occurrence statistics from a corpus, and the resulting representations showcase interesting linear substructures of the word vector space"
    ],
    [
      {
        "content": "[[FastText]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "unlike GloVe, it embeds words by treating each word as being composed of character n-grams instead of a word whole. This feature enables it not only to learn rare words but also out-of-vocabulary words"
    ],
    [
      {
        "content": "[ELMO (Embeddings from Language Model)](https://arxiv.org/abs/1802.05365)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "learns contextualized word representations based on a neural language model with a character-based encoding layer and two BiLSTM layers"
    ],
    [
      {
        "content": "[CoVe (Contextualized Word Vectors)](https://arxiv.org/abs/1708.00107)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "uses a deep LSTM encoder from an attentional sequence-to-sequence model trained for machine translation to contextualize word vectors"
    ],
    [
      {
        "content": "[[BERT (Bidirectional Encoder Representations from Transformers)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "transformer-based language representation model trained on a large cross-domain corpus. Applies a masked language model to predict words that are randomly masked in a sequence, and this is followed by a next-sentence-prediction task for learning the associations between sentences"
    ],
    [
      {
        "content": "[XLM (Cross-lingual Language Model)](https://arxiv.org/abs/1901.07291)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "it’s a transformer pre-trained using next token prediction, a BERT-like masked language modeling objective, and a translation objective"
    ],
    [
      {
        "content": "[RoBERTa (Robustly Optimized BERT Pretraining Approach)](https://arxiv.org/abs/1907.11692)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "it builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with much larger mini-batches and learning rates"
    ],
    [
      {
        "content": "[ALBERT (A Lite BERT for Self-supervised Learning of Language Representations)](https://arxiv.org/abs/1909.11942)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "it presents parameter-reduction techniques to lower memory consumption and increase the training speed of BERT"
    ]
  ]
}
```
# Resources
- [[embeddings.pdf|What are Embeddings - Vicki Boykis]]
