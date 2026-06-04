---
title: "Systolic Arrays - Wavefront Processors"
created: 2022-12-18T00:18:54.171-06:00
modified: 2022-12-18T13:32:17.253-06:00
parent: "[[Computer Organization - Microarchitecture (µarch - uarch)]]"
children: []
---
###### Systolic Arrays - Wavefront Processors
- its name is derived from systole as an analogy to the regular pumping of blood by the heart
- is a homogeneous network of tightly coupled [[Data Processing Unit (DPU)|data processing units (DPU)]] called cells or nodes. Each node or DPU independently computes a partial result as a function of the data received from its upstream neighbors, stores the result within itself and passes it downstream

# Systolic Array - Use Cases

Systolic arrays are often hard-wired for specific operations, such as "multiply and accumulate", to perform massively parallel integration, convolution, correlation, matrix multiplication, or data sorting tasks. They are also used for dynamic programming algorithms, used in DNA and protein sequence analysis
# Systolic Array - Architecture vs Von Neumann
- Unlike the more common [[Von Neumann Architecture／Model - Princeton Architecture - Stored-Program Computer|Von Neumann architecture]], where program execution follows a script of instructions stored in common memory, addressed and sequenced under the control of the CPU's program counter (PC), the individual nodes within a systolic array are triggered by the arrival of new data and always process the data in exactly the same way. The actual processing within each node may be hard-wired or block micro coded, in which case the common node personality can be block programmable.
- A major benefit of systolic arrays is that all operand data and partial results are stored within (passing through) the processor array. There is no need to access external buses, main memory, or internal caches during each operation as is the case with Von Neumann architecture. Sequential limits on parallel performance dictated by Amdahl's Law also do not apply
- The systolic array paradigm with data-streams driven by data counters, is the counterpart of the Von Neumann architecture with instruction-stream driven by a program counter
