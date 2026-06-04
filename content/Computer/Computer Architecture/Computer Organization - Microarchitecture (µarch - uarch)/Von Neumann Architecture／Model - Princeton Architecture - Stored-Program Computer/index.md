---
title: "Von Neumann Architecture／Model - Princeton Architecture - Stored-Program Computer"
created: 2022-12-18T12:41:07.647-06:00
modified: 2023-01-28T14:47:36.697-06:00
parent: "[[Computer Organization - Microarchitecture (µarch - uarch)]]"
children: []
---
###### Von Neumann Architecture - Von Neumann Model - Princeton Architecture
- is a [[Computer Architecture|computer architecture]] based on a 1945 description by John von Neumann
- is a [[Computer Organization - Microarchitecture (µarch - uarch)|SISD]] instruction stream-driven architecture
- the term "von Neumann architecture" has evolved to refer to any <strong>stored-program computer</strong> in which an instruction fetch and a data operation cannot occur at the same time (since they share a common bus). This is referred to as the von Neumann bottleneck, which often limits the performance of the corresponding system

###### Stored-Program Computer
- is a computer that keeps both program instructions and data in the same [[Primary／Main／Physical Computer Memory／Storage|primary memory]]

# Von Neumann Architecture - History
- before 1945 computers were not programmable (i.e. software did not exist as it was hardwired into computers)
- ENIAC was the first programmable computer, completed in 1945
	- is technically a program-controlled computer, instead of a stored-program computer
	- was programmed by setting switches and inserting patch cables to route data and control signals between various functional units (this was a manual process)
	- it could take three weeks to set up and debug a program on ENIAC
- EDVAC was the successor to ENIAC
	- considered the first stored-program computer

# Von Neumann Architecture - Use Cases
- the ability to treat instructions as data is what makes [[Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader|assemblers, compilers, linkers, loaders]], and other automated programming tools possible
- it makes "programs that write programs" possible
- some high-level languages leverage the von Neumann architecture by providing an abstract, machine-independent way to manipulate executable code at runtime

# Von Neumann Architecture - Components

The document describes a design architecture for an electronic digital computer with these components
- A processing unit with both an arithmetic logic unit and processor registers
- A control unit that includes an instruction register and a program counter
- Memory that stores data and instructions
- External mass storage
- Input and output mechanisms

# Von Neumann Architecture - Bottleneck

The shared bus between the program memory and data memory leads to the von Neumann bottleneck, the limited throughput (data transfer rate) between the [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]] and memory; compared to the amount of memory
# Von Neumann Architecture - Self-Modifying Code (Introduction to Software Bugs)

Aside from the von Neumann bottleneck, program modifications can be quite harmful, either by accident or design
