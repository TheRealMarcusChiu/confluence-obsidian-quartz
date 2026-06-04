---
title: "Encoder-Decoder Model"
created: 2023-12-21T16:18:34.693-06:00
modified: 2024-08-18T12:59:32.288-05:00
parent: "[[ANN - Architectures]]"
children: []
---
###### Encoder-Decoder Model
````excerpt
- is composed of an encoder and a decoder that typically implemented as [[Recurrent Neural Networks (RNN)|RNNs]]
	- the encoder captures the context of the input sequence and sends it to the decoder
	- the decoder then produces the final output sequence
````
^excerpt

# Encoder-Decoder - Architecture Components

```merge-table
{
  "rows": [
    [
      {
        "content": "Encoder",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The encoder is responsible for processing the input sequence and capturing its essential information, which is stored as the hidden state of the network and, in a model with an attention mechanism, a context vector. The context vector is the weighted sum of the input hidden states and is generated for every time instance in the output sequences."
    ],
    [
      {
        "content": "Decoder",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The decoder takes the context vector and hidden states from the encoder and generates the final output sequence. The decoder operates in an autoregressive manner, producing one element of the output sequence at a time. At each step, it considers the previously generated elements, the context vector, and the input sequence information to make predictions for the next element in the output sequence. Specifically, in a model with an attention mechanism, the context vector and the hidden state are concatenated together to form an attention hidden vector, which is used as an input for the decoder."
    ],
    [
      {
        "content": "[[Attention Mechanisms|Attention Mechanism]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "The attention mechanism is an enhancement introduced by Bahdanau et al. in 2014 to address limitations in the basic Seq2Seq architecture where a longer input sequence results in the hidden state output of the encoder becoming irrelevant for the decoder. It enables the model to selectively focus on different parts of the input sequence during the decoding process. At each decoder step, an alignment model calculates the attention score using the current decoder state and all of the attention hidden vectors as input. An alignment model is another neural network model that is trained jointly with the seq2seq model used to calculate how well an input, represented by the hidden state, matches with the previous output, represented by the attention hidden state. A [[Soft-Arg-Max／Argmax Function - Softmax Function|softmax function]] is then applied to the attention score to get the attention weight."
    ]
  ]
}
```
