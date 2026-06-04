---
title: "Sentiment Analysis - Opinion Mining - Emotion AI"
created: 2019-10-20T11:17:06.312-05:00
modified: 2020-11-02T22:24:09.037-06:00
parent: "[[Natural Language Processing (NLP) - Computational Linguistics]]"
children:
  - "[[Word Polarity - Sentiment Lexicon]]"
---
- <strong>Sentiment</strong> (opinion) - a view or attitude towards a situation or event
- <strong>Sentiment Analysis</strong> (also known as <strong>Opinion Mining</strong> or <strong>E</strong><strong>motion AI</strong>)
	- refers to the use of [[Natural Language Processing (NLP) - Computational Linguistics|natural language processing]], [text analysis](https://en.wikipedia.org/wiki/Text_analytics), [computational linguistics](https://en.wikipedia.org/wiki/Computational_linguistics), and [biometrics](https://en.wikipedia.org/wiki/Biometrics) to systematically identify, extract, quantify, and study [[Affective／Emotion Science|affective]] states and subjective information
	- is a kind of [[Text Classification]]
	- is the detection of attitudes given a body of Text:
		- Attitude Source/Holder
		- Attitude Target/Aspect/Attribute
		- Attitude Type - from either:
			- a set of types (e.g. like, love, hate, value, desire, etc)
			- weighted polarity (e.g. positive-neutral-negative, together with strength)

# <strong>Sentiment Analysis - Task Types</strong>

increasing complexity:
- is the attitude of text positive or negative
- rank the attitude of test from 1 to 5
- detect the target, source and/or attitude types

# <strong>Sentiment Analysis - Classification Types</strong>

```merge-table
{
  "rows": [
    [
      {
        "content": "Class Type",
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
        "content": "Polarity Classification",
        "header": true,
        "bg": "#F4F5F7"
      },
      "basic task in sentiment analysis is classifying the <em>polarity</em> of a given text at the document, sentence, or feature/aspect level—whether the expressed opinion in a document, a sentence or an entity feature/aspect is:\n- positive\n- negative\n- neutral"
    ],
    [
      {
        "content": "Emotional Classification",
        "header": true,
        "bg": "#F4F5F7"
      },
      "advanced, \"beyond polarity\" sentiment classification looks, for instance, at emotional states such as \"angry\", \"sad\", and \"happy\""
    ],
    [
      {
        "content": "Subjectivity/Objectivity Identification",
        "header": true,
        "bg": "#F4F5F7"
      },
      "classifying a given text (usually a sentence) into one of two classes:\n- objective\n- subjective\n\nThis problem can sometimes be more difficult than polarity classification"
    ],
    [
      {
        "content": "Feature/Aspect-Based",
        "header": true,
        "bg": "#F4F5F7"
      },
      "refers to determining the opinions or sentiments expressed on different features or aspects of entities\n\ndifferent features can generate different sentiment responses (e.g. a hotel can have a convenient location, but mediocre food. location and food are different features of the entity hotel)"
    ]
  ]
}
```
# <strong>Sentiment Analysis - Baseline Algorithm</strong>

see: [[Text Classification]]'s Baseline Algorithm section
# <strong>Other</strong>

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
