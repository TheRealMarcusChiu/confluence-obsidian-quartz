---
title: "Information Retrieval (IR) - Information Extraction (IE)"
created: 2019-11-02T11:54:06.080-05:00
modified: 2023-07-12T16:17:49.980-05:00
parent: "[[Natural Language Processing (NLP) - Computational Linguistics]]"
children:
  - "[[(Entity - Named Entity) Recognition／Identification／Chunking／Extraction／Resolution (NER)]]"
  - "[[Coherence (Relation) Extraction]]"
  - "[[Coreference／Co-Reference Extraction]]"
  - "[[Entity Relation Extraction (RE)]]"
  - "[[Event Extraction]]"
  - "[[Feature Conversion - Text Embeddings／Embedding]]"
  - "[[Numerical Expression Recognition]]"
  - "[[Referring Expression Extraction]]"
  - "[[Semantic Relation Extraction]]"
  - "[[Temporal Expression Recognition - Temporal Analysis]]"
---
- <strong>Information Retrieval (IR)</strong> retrieves relevant facts from unstructured data that are NOT specified in advance
- <strong>Information Extraction (IE)</strong> extracting relevant facts from unstructured data that are specified in advance

both <strong>IE</strong> and <strong>IR</strong> are subtasks of [[Natural Language Processing (NLP) - Computational Linguistics]]
# IR/IE - Other
an implementation of [[Feature Projection／Extraction - Embeddings|Feature Extraction]] that extracts specific [[Features - Feature Functions - Feature Engineering - Feature-Based Models|Features]] (i.e. entities, relations, events, etc) from text

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
# IR/IE - Model Types

```merge-table
{
  "rows": [
    [
      "To effectively retrieve relevant documents, the documents are typically transformed into a suitable representation. Each retrieval strategy incorporates a specific model for its document representation purposes. The picture on the right illustrates the relationship between some common models.\n\nmodels are categorized according to two dimensions:\n1. <strong>Mathematical Basis</strong>\n2. <strong>Properties of the Model</strong>",
      "![[Information Retrieval (IR) - Information Extraction (IE)/Information-Retrieval-Models.png|400]]"
    ]
  ],
  "tableStyle": "width: 81.9392%;"
}
```
### Dimension \#1 - Mathematical Basis

```merge-table
{
  "rows": [
    [
      {
        "content": "Basis Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Models",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Set-Theoretic Models",
        "bg": "#F4F5F7"
      },
      "represent documents as sets of words or phrases. Similarities are usually derived from set-theoretic operations on those sets",
      "- [Standard Boolean model](https://en.wikipedia.org/wiki/Standard_Boolean_model)\n- [Extended Boolean model](https://en.wikipedia.org/wiki/Extended_Boolean_model)\n- [Fuzzy Retrieval](https://en.wikipedia.org/wiki/Fuzzy_retrieval)"
    ],
    [
      {
        "content": "Algebraic Models",
        "bg": "#F4F5F7"
      },
      "represent documents and queries usually as vectors, matrices, or tuples. The similarity of the query vector and document vector is represented as a scalar value",
      "- [Vector Space Model](https://en.wikipedia.org/wiki/Vector_space_model)\n- [Generalized Vector Space Model](https://en.wikipedia.org/wiki/Generalized_vector_space_model)\n- [(Enhanced) Topic-Based Vector Space Model](https://en.wikipedia.org/wiki/Topic-based_vector_space_model)\n- [Extended Boolean Model](https://en.wikipedia.org/wiki/Extended_Boolean_model)\n- [Latent Semantic Indexing](https://en.wikipedia.org/wiki/Latent_semantic_indexing) a.k.a. [[Latent Semantic Analysis (LSA)|Latent Semantic Analysis]]"
    ],
    [
      {
        "content": "Probabilistic Models",
        "bg": "#F4F5F7"
      },
      "treat the process of document retrieval as a [[Probabilistic Inference|probabilistic inference]]. Similarities are computed as probabilities that a document is relevant for a given query.\n\nProbabilistic theorems like [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Bayes' Theorem]] are often used in these models",
      "- [Binary Independence Model](https://en.wikipedia.org/wiki/Binary_Independence_Model)\n- [Probabilistic Relevance Model](https://en.wikipedia.org/wiki/Probabilistic_relevance_model) on which is based the [okapi (BM25)](https://en.wikipedia.org/wiki/Probabilistic_relevance_model_(BM25)) relevance function\n- [Uncertain Inference](https://en.wikipedia.org/wiki/Uncertain_inference)\n- [Language Models](https://en.wikipedia.org/wiki/Language_model)\n- [Divergence-From-Randomness Model](https://en.wikipedia.org/wiki/Divergence-from-randomness_model)\n- [Latent Dirichlet Allocation](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)"
    ],
    [
      {
        "content": "Feature-based Retrieval Models",
        "bg": "#F4F5F7"
      },
      "View documents as vectors of values of <em>[[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature functions]]</em> and seek the best way to combine these features into a single relevance score, typically by [learning to rank](https://en.wikipedia.org/wiki/Learning_to_rank) methods. Feature functions are arbitrary functions of document and query, and as such can easily incorporate almost any other retrieval model as just another feature",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Dimension \#2 - Properties of the Model

```merge-table
{
  "rows": [
    [
      {
        "content": "Properties of the Model",
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
        "content": "Models without Term-Interdependencies",
        "bg": "#F4F5F7"
      },
      "treat different terms/words as independent. This fact is usually represented in vector space models by the [orthogonality](https://en.wikipedia.org/wiki/Orthogonality) assumption of term vectors or in probabilistic models by an [independency](https://en.wikipedia.org/wiki/Independence_(mathematical_logic)) assumption for term variables"
    ],
    [
      {
        "content": "Models with Immanent Term Interdependencies",
        "bg": "#F4F5F7"
      },
      "allow a representation of interdependencies between terms. However, the degree of interdependency between two terms is defined by the model itself. It is usually directly or indirectly derived (e.g. by [[Feature Dimensional／Dimensionality Reduction|dimensional reduction]]) from the [co-occurrence](https://en.wikipedia.org/wiki/Co-occurrence) of those terms in the whole set of documents"
    ],
    [
      {
        "content": "Models with Transcendent Term Interdependencies",
        "bg": "#F4F5F7"
      },
      "allow a representation of interdependencies between terms, but they do not allege how the interdependency between two terms is defined. They rely on an external source for the degree of interdependency between two terms. (For example, human or sophisticated algorithms)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
