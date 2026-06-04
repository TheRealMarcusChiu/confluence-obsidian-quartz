---
title: "GRU vs LSTM"
created: 2023-07-16T12:09:59.184-05:00
modified: 2023-07-16T12:11:29.566-05:00
parent: "[[Gated Recurrent Neural Networks (Gated RNN)]]"
children: []
---
- [[Long-Short Term Memory (LSTM)]] - has three gates (input, output, and forget gate)
- [[Gated Recurrent Unit (GRU)]] - has two gates (reset and update gate)

GRU couples forget as well as input gates. GRU uses fewer training parameters and therefore use less memory, execute faster, and train faster than LSTM whereas LSTM is more accurate on dataset using longer sequence. In short, if a sequence is large or accuracy is very critical, please go for LSTM whereas for less memory consumption and faster operation go for GRU. If you do not have many floating point operations per second (FLOPs) to spare switch to GRU. LSTM has three values at the output (output, hidden, and cell) whereas GRU has two values at the output (output and hidden)
