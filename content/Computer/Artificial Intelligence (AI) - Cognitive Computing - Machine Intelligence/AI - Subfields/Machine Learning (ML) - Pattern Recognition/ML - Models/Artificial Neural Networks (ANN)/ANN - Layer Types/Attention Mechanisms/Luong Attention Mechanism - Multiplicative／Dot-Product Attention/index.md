---
title: "Luong Attention Mechanism - Multiplicative／Dot-Product Attention"
created: 2023-12-21T15:34:19.985-06:00
modified: 2023-12-23T23:43:50.524-06:00
parent: "[[Attention Mechanisms]]"
children: []
---
###### Luong Attention Mechanism - Multiplicative/Dot-Product Attention
````excerpt
- TODO
````
^excerpt

# Steps
1. [Producing the Encoder Hidden States](https://blog.floydhub.com/attention-mechanism/#luong-att-step1) - The Encoder produces hidden states of <strong>each</strong> element in the input sequence
2. [Decoder RNN](https://blog.floydhub.com/attention-mechanism/#luong-att-step2) - the previous decoder's hidden state and decoder output are passed through the <strong>Decoder RNN</strong> to generate a <strong>new hidden state</strong> for that time step
3. [Calculating Alignment Scores](https://blog.floydhub.com/attention-mechanism/#luong-att-step3) - using the new decoder hidden state and the encoder hidden states, <strong>alignment scores</strong> are calculated
4. [Softmaxing the Alignment Scores](https://blog.floydhub.com/attention-mechanism/#luong-att-step4) - the alignment scores for each encoder hidden state are combined and represented in a single <strong>vector</strong> and subsequently <strong>softmaxed</strong>
5. [Calculating the Context Vector](https://blog.floydhub.com/attention-mechanism/#luong-att-step5) - the encoder's hidden states and their respective alignment scores are multiplied to form the <strong>context vector</strong>
6. [Producing the Final Output](https://blog.floydhub.com/attention-mechanism/#luong-att-step6) - the context vector is <em>concatenated</em> with the decoder hidden state generated in step 2 as passed through a fully connected layer to produce a <strong>new output</strong>
7. The process (steps 2-6) <strong>repeats</strong> itself for each time step of the decoder until a token is produced or output is past the specified maximum length

# Resources
- [https://blog.floydhub.com/attention-mechanism/](https://blog.floydhub.com/attention-mechanism/)
- [https://machinelearningmastery.com/the-luong-attention-mechanism/](https://machinelearningmastery.com/the-luong-attention-mechanism/)
