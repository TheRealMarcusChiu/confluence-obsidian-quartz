---
title: "CPU vs GPU"
created: 2021-05-29T15:29:52.451-05:00
modified: 2021-05-29T15:33:02.070-05:00
parent: "[[Processor - Processing Unit (PU) - Processing Element (PE)]]"
children: []
---
# GPU Approach

The [[Graphics Processing Unit (GPU) - Graphics Card|GPU]] approach is great where the exact same processing needs be applied to large volumes of data; for example:
- a million vertices that needs to be transformed in the same way
- many million pixels that need the processing to produce their color

Assuming they don't become data block/pipeline stalled, GPUs programs general offer more predictable time bound execution due to its restrictions; which again is good for temporal parallelism e.g. the programs need to repeat their cycle at a certain rate for example 60 times a second (16ms) for 60 fps.
# CPU Approach

The [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]] approach however is better for decisioning and performing multiple different tasks at the same time and dealing with changing inputs and requests.

Apart from its many other uses and purposes, the CPU is used to orchestrate work for the GPU to perform
