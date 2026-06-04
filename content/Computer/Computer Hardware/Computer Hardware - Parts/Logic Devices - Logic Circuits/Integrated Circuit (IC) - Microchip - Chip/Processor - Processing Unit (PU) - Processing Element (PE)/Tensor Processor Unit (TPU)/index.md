---
title: "Tensor Processor Unit (TPU)"
created: 2021-05-29T15:34:05.303-05:00
modified: 2026-05-21T12:40:10.571-05:00
parent: "[[Processor - Processing Unit (PU) - Processing Element (PE)]]"
children:
  - "[[TPU8t TPU8i]]"
---
###### Tensor Processor Unit (TPU)
````excerpt
- is an [AI accelerator](https://en.wikipedia.org/wiki/AI_accelerator)[[Application-Specific Integrated Circuit (ASIC)|ASIC]] developed by [Google](https://en.wikipedia.org/wiki/Google) specifically for [[Artificial Neural Networks (ANN)|neural network]][[Machine Learning (ML) - Pattern Recognition|machine learning]], particularly using Google's own TensorFlow software
- [[Google]] began using TPUs internally in 2015, and in 2018 made them available for third party use, both as part of its cloud infrastructure and by offering a smaller version of the chip for sale
````
^excerpt

# TPU Use Case
The current generation of TPUs are not really great for training networks, they’re more focused on executing predictions with them after training
# TPU vs CPU
A TPU is a co-processor, it cannot execute code in its own right, all code execution takes place on the [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]] which just feeds a stream of micro-operations to the TPU
# TPU vs GPU
The main difference is that TPUs are cheaper and use a lot less power, and can thus complete really large prediction jobs cheaper than GPUs, or make it simpler to use prediction in a low-latency service.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
