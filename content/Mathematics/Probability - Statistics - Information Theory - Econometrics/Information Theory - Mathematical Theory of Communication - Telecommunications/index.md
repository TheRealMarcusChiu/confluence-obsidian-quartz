---
title: "Information Theory - Mathematical Theory of Communication - Telecommunications"
created: 2021-09-13T05:26:25.201-05:00
modified: 2026-01-03T00:10:53.249-06:00
parent: "[[Probability - Statistics - Information Theory - Econometrics]]"
children:
  - "[[Conditional Relative Entropy]]"
  - "[[Fisher Information - Fisher Information Matrix]]"
  - "[[Mathematical Capacity of a Communications Channel]]"
  - "[[Multivariate Entropy (Joint Entropy - Conditional Entropy - (Pointwise) Mutual Information ／ Information Gain - Variation of Information)]]"
  - "[[Source Coding Theorem]]"
  - "[[Telegraph／Telegraphy]]"
  - "[[Teletype (TTY)]]"
  - "[[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)]]"
---
<font style="color: rgb(128,128,128);"><em>information is a subtle mixture of predictability and surprise</em></font>
###### Information Theory - Mathematical Theory of Communication
````excerpt
- studies the quantification of information both in storage and communication
- originally proposed by Claude Shannon in 1948 to find fundamental limits on signal processing and communication operations such as data compression, in a landmark paper titled <em>[A Mathematical Theory of Communication](http://www.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)</em>
````
^excerpt

# Communication System

```merge-table
{
  "rows": [
    [
      "![[Information Theory - Mathematical Theory of Communication - Telecommunications/communications-system-schematic.png|500]]",
      "A communication system has 5 components:\n- <strong>information source</strong> - produces a <strong>message</strong> or sequence of messages to be communicated to the receiving terminal\n- <strong>transmitter</strong> - operates on the <strong>message</strong> in some way to produce a <strong>signal</strong> suitable for transmission over the channel\n- <strong>channel</strong> - the medium used to transmit the <strong>signal</strong> from transmitter to receiver\n- <strong>receiver</strong> - operates on the <strong>signal</strong> to produce the <strong>message</strong>\n- <strong>destination</strong> - is the entity for whom the <strong>message</strong> is intended for"
    ]
  ]
}
```
# Communication System - Categories/Classes
###### Message Type
- <strong>discrete message</strong> - the message is a sequence of discrete symbols (e.g. sequence of letters)
- <strong>continuous message</strong> - the message is treated as a continuous function (e.g. voice)

###### Signal Type
- <strong>discrete signal</strong> - the signal is a sequence of discrete symbols (e.g. bits in an [[Internet Protocol (IP)|IP]] network)
- <strong>continuous signal</strong> - the signal are treated as continuous functions (e.g. electromagnetic waves, specifically radio waves)

###### Communication System Type (Message & Signal)
- <strong>discrete system</strong> - both the message and signal are discrete (e.g. telegraph; messages are sequences of letters, signals are sequences of dots, dashes, and spaces of dots, dashes, and spaces)
- <strong>continuous system</strong> - both the message and signal are discrete (e.g. radio or television)
- <strong>mixed system</strong> - message and signal is mixed (e.g. [[Modulation Categories - (Pulse／Quadrature Amplitude／Frequency／Phase／Width／Position／Coding Shift-Keying) Modulation|PCM]] transmission of speech)

###### Channel Type
- <strong>noiseless channel</strong> - an idealistic channel in which no information is lost, corrupted, nor duplicated
- <strong>noisy channel</strong> - a realistic channel in which information can be lost, corrupted, or duplicated

# Message Source Statistical

𝑆 is the size of possible symbols such as (letters, words, etc)
- <strong>zero-order</strong> - each message symbol has an equal probability of being produced
- <strong>first-order</strong> - 𝑆⁰=1 state - unigrams - each message symbol has
- <strong>second-order</strong> - 𝑆¹ states - [[N-Grams (Monograms／Unigrams - Bigrams)|bigrams]] -
- <strong>third-order</strong> - 𝑆² states - trigrams -
- <strong>n<sup>th</sup>-order</strong> - 𝑆<sup>𝑛</sup> states - n-grams -

# Subpages
- [[Quantum Information Theory]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Resources
- [[The Information - A History, a Theory, a Flood.pdf]]
- [Jakob Foerster's - Video Lectures](https://www.youtube.com/watch?v=BCiZc0n6COY&list=PLruBu5BI5n4aFpG32iMbdWoRVAA-Vcso6)
- [YouTube Channel - cse6222yorku](https://www.youtube.com/channel/UCEFL7YLqmfa8fMW8iExYF2g)
