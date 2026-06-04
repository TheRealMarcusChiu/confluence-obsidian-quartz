---
title: "Bahdanau Attention Mechanism - Additive Attention"
created: 2023-12-21T15:33:35.111-06:00
modified: 2023-12-21T17:38:46.521-06:00
parent: "[[Attention Mechanisms]]"
children: []
---
###### Bahdanau Attention Mechanism - Additive Attention
````excerpt
- is the first type of [[Attention Mechanisms|attention mechanism]]
- came from a paper by [Dzmitry Bahdanau](https://arxiv.org/pdf/1409.0473.pdf?ref=blog.floydhub.com)
- aimed to improve the [[Encoder-Decoder Model|sequence-to-sequence model]] in machine translation by aligning the decoder with the relevant input sentences and implementing Attention
````
^excerpt

# Steps

```merge-table
{
  "rows": [
    [
      "1. [Producing the Encoder Hidden States](https://blog.floydhub.com/attention-mechanism/#bahdanau-att-step1) - The Encoder produces hidden states of <strong>each</strong> element in the input sequence\n2. [Calculating Alignment Scores](https://blog.floydhub.com/attention-mechanism/#bahdanau-att-step2) between the previous decoder's hidden state and each of the encoder’s hidden states are calculated <em>(Note: The last encoder hidden state can be used as the first hidden state in the decoder)</em>\n3. [Softmaxing the Alignment Scores](https://blog.floydhub.com/attention-mechanism/#bahdanau-att-step3) - the alignment scores for each encoder hidden state are combined and represented in a single <strong>vector</strong> and subsequently <strong>softmaxed</strong>\n4. [Calculating the Context Vector](https://blog.floydhub.com/attention-mechanism/#bahdanau-att-step4) - the encoder's hidden states and their respective alignment scores are <em>multiplied</em> to form the <strong>context vector</strong>\n5. [Decoding the Output](https://blog.floydhub.com/attention-mechanism/#bahdanau-att-step5) - the context vector is <em>concatenated</em> with the previous decoder output and fed into the <strong>Decoder RNN</strong> for that time step along with the previous decoder hidden state to produce a <strong>new output</strong>\n6. The process (steps 2-5) <strong>repeats</strong> itself for each time step of the decoder until a token is produced or output is past the specified maximum length",
      "![[Bahdanau Attention Mechanism - Additive Attention/bahdanau-attention.jpeg|400]]"
    ]
  ]
}
```
# TODO

[https://blog.floydhub.com/attention-mechanism/](https://blog.floydhub.com/attention-mechanism/)
# Resources
- [https://blog.floydhub.com/attention-mechanism/](https://blog.floydhub.com/attention-mechanism/)
- [https://machinelearningmastery.com/the-bahdanau-attention-mechanism/](https://machinelearningmastery.com/the-bahdanau-attention-mechanism/)
