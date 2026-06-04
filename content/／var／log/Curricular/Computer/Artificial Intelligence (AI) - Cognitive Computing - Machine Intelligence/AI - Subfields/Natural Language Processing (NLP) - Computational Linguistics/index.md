---
title: "Natural Language Processing (NLP) - Computational Linguistics"
created: 2019-03-15T01:31:10.136-05:00
modified: 2022-04-16T21:04:26.990-05:00
parent: "[[AI - Subfields]]"
children:
  - "[[Affirmation vs Negation]]"
  - "[[Dealing with Non-Literal Language]]"
  - "[[Distribution Semantics]]"
  - "[[FrameNet (FN) - Frame Semantics]]"
  - "[[Information Retrieval (IR) - Information Extraction (IE)]]"
  - "[[Language Models]]"
  - "[[Latent Semantic Analysis (LSA)]]"
  - "[[NLP - Articles]]"
  - "[[NLP - Disambiguating Ambiguity]]"
  - "[[NLP - Midterm Review]]"
  - "[[NLP - Sequence Problems]]"
  - "[[NLP - Spelling Error Correction]]"
  - "[[Part-of-Speech (PoS) Tagging]]"
  - "[[Sentiment Analysis - Opinion Mining - Emotion AI]]"
  - "[[Speech to Speech (STS)]]"
  - "[[Speech to Text (STT)]]"
  - "[[Syntactic Parsing／Parser]]"
  - "[[Text Classification]]"
  - "[[Text to Speech (TTS)]]"
  - "[[Tokenizer - Tokenization Algorithm]]"
  - "[[Voice Activity Detection (VAD)]]"
---
###### Natural Language Processing (NLP) - Computational Linguistics
- other names include<strong> Speech & Language Processing</strong>, <strong>Human Language Technology</strong>, and <strong>Speech Recognition & Synthesis</strong>
- is a subfield of [[Linguistics|linguistics]] and [[Artificial Intelligence (AI) - Cognitive Computing - Machine Intelligence|artificial intelligence]] that is concerned with the computer's ability to read, understand and derive meaning from [[Languages (Human／Natural Languages)|human/natural languages]]
- is an interdisciplinary field concerned with the computational modeling of natural language

# NLP - Tutorials
- [NLP Introduction](https://www.youtube.com/watch?v=3Dt_yh1mf_U&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm&t=4s) - [Lecture Slides](https://web.stanford.edu/~jurafsky/NLPCourseraSlides.html) - 2012 Stanford Course \~ by Dan Jurafsky & Christopher Manning
- [NLP with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ&list=PL3FW7Lu3i5Jsnh1rnUwq_TcylNr7EkRe6&ab_channel=StanfordUniversitySchoolofEngineering) - 2017 Stanford Course \~ by Christopher Manning & Richard Socher
- [A Comprehensive Learning Path to Understand and Master NLP in 2020](https://www.analyticsvidhya.com/blog/2020/01/learning-path-nlp-2020/)
- [Ultimate Guide to Understand and Implement Natural Language Processing (with codes in Python)](https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/)

# NLP - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# NLP - System Types
- <strong>rule-based</strong> vs <strong>statistical</strong> -
- <strong>manual </strong>vs<strong> automatic</strong> -

# NLP - Tasks
### Audio/Visual Related
- <strong>Audio Related</strong>
	- <strong>Speech Recognition</strong> - speech to text
	- 
		- <strong>Speech Segmentation</strong> - the task of separating speech into smaller units
	- <strong>Speech Synthesis</strong> - text to speech
- <strong>Visual Related</strong> - [[Computer Vision (CV)]]
	- <strong>Optical Character Recognition (OCR)</strong> - image to text
	- <strong>Text-to-Image</strong> - text to image

### Syntax Related
- <strong>Grammar Induction</strong> - generate a [[Formal Grammar - Formal Language|formal grammar]] that describes a language's syntax
- <strong>Segmentation/Tokenizer:</strong>
	- <strong>Sentence Segmentation (Sentence Boundary Disambiguation)</strong> - task of separating a body of text into sentences
	- <strong>Tokenization (Word Segmentation)</strong> - process of breaking a body of text into tokens (e.g. words and/or phrases)
	- <strong>Morphological Segmentation</strong> - the task of separating words into individual [[Morphology (Word Forms／Inflexions)|morphemes]] and identifying the classes of morphemes
- <strong>Normalization</strong> - process of normalizing a token (e.g. U.S.A to USA?)
	- <strong>Lower/Upper Casing</strong> -
	- <strong>Stemming</strong> - the task of reducing inflected/derived words to their root form (removing affixes) (e.g. automates automatic automation → automat)
		- porter's algorithm - the most common english stemmer
	- <strong>Lemmatization</strong> - the task of removing inflectional words and return the lemma (base dictionary form of a word) and grouping together different forms of the same word (e.g. am are is → be | car cars car's cars' → car)
		- also takes into consideration the context of the word in order to solve other problems like disambiguation
- <strong>[[Part-of-Speech (PoS) Tagging]]</strong> - the task of determining the [[Part of Speech (PoS)]] for each word in a sentence
- <strong>[[Constituency／Phrase Parsing|Syntactic Parsing]]</strong> - is a method of syntactic analysis of a sentence (e.g. the task of determining the parse-tree of a given sentence)
	- <strong>Constituency Parsing</strong> - focuses on building out parse-tree of constituents
	- <strong>[[Dependency Parsing]]</strong> - focuses on the relationships between words in a sentence (e.g. marking words like primary-objects and predicates)

### Semantic Related
- <strong>Word/Phrase Semantics:</strong>
	- <strong>Morphology </strong>- components of words that carry meanings aside from actual definition of word (e.g. singular vs plural)
	- <strong>Lexical Semantics</strong> - meaning of individual words (in context)
	- <strong>Compositional Semantics </strong>- meaning of phrases/groups of words (e.g. distinction between Western Europe and Eastern Europe)
- <strong>[[Distribution Semantics]]</strong> - theories and methods for quantifying and categorizing semantic similarities between linguistic items based on their distributional properties in large samples of language data
- <strong>Machine Translation</strong> - task of translating a document from one language to another
- <strong>[[Information Retrieval (IR) - Information Extraction (IE)|Information Extraction]]</strong> - the task of extracting information (e.g. entities, relations, events, temporal, etc) from a body of text
	- <strong>[[(Entity - Named Entity) Recognition／Identification／Chunking／Extraction／Resolution (NER)|Named Entity Recognition]]</strong> - the task of determining proper names in a body of text
	- <strong>[[Entity Relation Extraction (RE)|Relationship Extraction]]</strong> - the task of identifying the relationships among entities in a body of text (e.g. who is married to whom)
	- etc
	- <strong>Textual Entailment Recognition</strong> - given 2 text fragments, determine if one being true (either):
		- entails the other
		- entails the other's negation
		- allows the other to be true or false
- <strong>Text Classification</strong> -
	- <strong>[[Sentiment Analysis - Opinion Mining - Emotion AI|Sentiment Analysis]]</strong> - the task of determining the sentiment of a body of text or a word
		- positive, neutral, or negative
		- emotion (happy, sad, angry, etc)
		- etc
	- <strong>Topic Segmentation</strong> - the task of separating a body of text into segments each of which are devoted to a topic
	- <strong>Topic Recognition/Labeling</strong> - the task of identifying the topic of text
	- <strong>Language Detection</strong> - determining the language of the text
	- <strong>Intent Detection</strong> - determining the underlying goal/intent of a given text
	- <strong>Sentence Type Identification</strong> -
		- request/command - e.g. open the door
		- statement - e.g. the door is open
		- question - e.g. is the door open?
- <strong>[[NLP - Disambiguating Ambiguity|Disambiguating Ambiguity]]</strong> - the task of disambiguating the ambiguous nature of human language

### Discourse Related
- <strong>Automatic Summarization</strong> - the task of producing a summary of a body of text
- <strong>Referring Expressions D</strong><strong>etection</strong> - a more general task of coreference resolution. the task of identifying "bridging relationships". (e.g. "he enter the house through the front door" the front door is a referring expression and the bridging relationship to be identified is the fact that the door is of John's house)
	- <strong>Co-Reference Resolution</strong> - the task of determining which words ("mentions") refer to the same objects ("entities"). makes use of knowledge about how words like that or pronouns like it or she refer to previous parts of the discourse
	- 
		- <strong>[[Exophora - Endophora - Anaphora - Cataphora|Exophora/Endophora/Cataphora/Anaphora]] Resolution</strong> - a specific type of coreference resolution concerned with matching up pronouns with the nouns or name-entities to which they refer
- <strong>Question-Answering</strong> - given question, determine the meaning of words, then determine the answer. (see [[Search Engines - Types]])
- <strong>Conversational Agents</strong> or <strong>Dialogue Systems</strong> - superset of question-answering. computer programs that are able to converse with humans in natural language
- <strong>Discourse Analysis</strong> - a number of tasks:
	- identifying the discourse structure of connected text
	- recognizing and classifying speech-acts in text (e.g. yes-no question, content question, statement, assertion, etc)
