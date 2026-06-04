---
title: "Term-Frequency Inverse-Document-Frequency (TF-IDF) Term Frequency - Inverse Document Frequency"
created: 2019-11-02T12:15:21.763-05:00
modified: 2022-01-31T02:04:39.720-06:00
parent: "[[Feature Conversion - Text Embeddings／Embedding]]"
children: []
---
###### Term-Frequency Inverse-Document-Frequency (TF-IDF)
- is a statistical method in determining the importance of a word with respect to other words in a document and the document itself with respect to other documents

# TF-IDF Computation

the<strong> TF-IDF</strong> weight is the product of 2 terms:
- <strong>Term Frequency (TF) normalized</strong> - the number of times a word appears in a document, divided by the total number of words in that document
- <strong>Inverse Document Frequency (IDF)</strong> - computed as the logarithm of the number of the documents in the corpus divided by the number of documents where the specific term appears

### <strong>TF: Term Frequency</strong>

measures how frequently a term occurs in a document. Since every document is different in length, it is possible that a term would appear much more times in long documents than shorter ones. Thus, the term frequency is often divided by the document length (aka. the total number of terms in the document) as a way of normalization:
```
TF(t) = (Number of times term t appears in a document) / (Total number of terms in the document)
```
### <strong>IDF: Inverse Document Frequency</strong>

measures how important a term is. While computing TF, all terms are considered equally important. However, it is known that certain terms, such as "is", "of", and "that", may appear a lot of times but have little importance. Thus we need to weigh down the frequent terms while scaling up the rare ones, by computing the following:
```
IDF(t) = log_e(Total number of documents / Number of documents with term t in it)
```
# TF-IDF Computation Example

Consider a document containing 100 words wherein the word cat appears 3 times. The term frequency (i.e., TF) for cat is then (3 / 100) = 0.03. Now, assume we have 10 million documents and the word cat appears in one thousand of these. Then, the inverse document frequency (i.e., IDF) is calculated as log(10,000,000 / 1,000) = 4. Thus, the TF-IDF weight is the product of these quantities: 0.03 \* 4 = 0.12.
