---
title: "Long-Short Term Memory (LSTM)"
created: 2020-11-17T15:37:50.686-06:00
modified: 2023-07-16T12:08:04.226-05:00
parent: "[[Gated Recurrent Neural Networks (Gated RNN)]]"
children:
  - "[[LSTM - Understanding LSTM Networks]]"
---
###### Long-Short Term Memory (LSTM)
````excerpt
- is a type of [[Gated Recurrent Neural Networks (Gated RNN)|gated recurrent neural network]] aimed to deal with the [[Vanishing Gradient Problem|vanishing gradient problem]] present in traditional [[Recurrent Neural Networks (RNN)|RNN]]s
- its relative insensitivity to gap length is its advantage over [[Recurrent Neural Networks (RNN)|traditional RNNs]], [[Hidden Markov Models (HMM)|hidden Markov models]], and other sequence learning methods
````
^excerpt

# LSTM - How it Works

see: [[LSTM - Understanding LSTM Networks]]
# LSTM - Structure

```merge-table
{
  "rows": [
    [
      {
        "content": "Structure Diagram",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Equations",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Range",
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
        "content": "![[Long-Short Term Memory (LSTM)/LSTM-Structure.png|490]]",
        "rowspan": 9
      },
      "𝑥<sub>𝑡</sub>",
      "∊ℝ<sup>𝑛</sup>",
      "input vector"
    ],
    [
      "All 𝑊s",
      "∊ℝ<sup>ℎx(𝑛+ℎ)</sup>",
      "weight matrices"
    ],
    [
      "All 𝑏s",
      "∊ℝ<sup>ℎ</sup>",
      "bias vectors"
    ],
    [
      "𝑓<sub>𝑡</sub> = 𝜎(𝑊<sub>𝑓</sub>\\[ℎ<sub>𝑡-1</sub>,𝑥<sub>𝑡</sub>\\] + 𝑏<sub>𝑓</sub>)",
      "∊(0,1)<sup>ℎ</sup>",
      "forget gate's activation vector"
    ],
    [
      "𝑖<sub>𝑡</sub> = 𝜎(𝑊<sub>𝑖</sub>\\[ℎ<sub>𝑡-1</sub>,𝑥<sub>𝑡</sub>\\] + 𝑏<sub>𝑖</sub>)",
      "∊(0,1)<sup>ℎ</sup>",
      "input/update gate's activation vector"
    ],
    [
      "𝐶<sub>𝑡</sub> = 𝑡𝑎𝑛ℎ(𝑊<sub>𝐶</sub>\\[ℎ<sub>𝑡-1</sub>,𝑥<sub>𝑡</sub>\\] + 𝑏<sub>𝐶</sub>)",
      "∊(-1,1)<sup>ℎ</sup>",
      "cell input activation vector"
    ],
    [
      "𝑜<sub>𝑡</sub> = 𝜎(𝑊<sub>𝑜</sub>\\[ℎ<sub>𝑡-1</sub>,𝑥<sub>𝑡</sub>\\] + 𝑏<sub>𝑜</sub>)",
      "∊(0,1)<sup>ℎ</sup>",
      "output gate's activation vector"
    ],
    [
      "𝑐<sub>𝑡</sub> = 𝑓<sub>𝑡</sub><strong>⊙ </strong>𝑐<sub>𝑡-1</sub> + 𝑖<sub>𝑡</sub><strong>⊙ </strong>𝐶<sub>𝑡-1</sub>",
      "∊ℝ<sup>ℎ</sup>",
      "cell state vector"
    ],
    [
      "ℎ<sub>𝑡</sub> = 𝑜<sub>𝑡</sub> ⊙ 𝑡𝑎𝑛ℎ(𝑐<sub>𝑡</sub>)",
      "∊(-1,1)<sup>ℎ</sup>",
      "output vector"
    ]
  ]
}
```
# Resources
- [Chris Olah's Visualizing LSTM](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)
