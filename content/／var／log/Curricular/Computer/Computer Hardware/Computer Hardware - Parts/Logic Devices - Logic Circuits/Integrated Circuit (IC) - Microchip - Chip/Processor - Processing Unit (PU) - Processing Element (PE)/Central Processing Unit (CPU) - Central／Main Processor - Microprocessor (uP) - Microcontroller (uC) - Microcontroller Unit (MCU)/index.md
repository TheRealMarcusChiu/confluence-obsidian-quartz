---
title: "Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)"
created: 2019-04-09T14:10:43.328-05:00
modified: 2023-03-13T11:23:57.675-05:00
parent: "[[Processor - Processing Unit (PU) - Processing Element (PE)]]"
children:
  - "[[AMD Processors／CPUs]]"
  - "[[AMD vs Intel]]"
  - "[[Engineering Sample (ES) - Qualification Samples (QS)]]"
  - "[[Hard Microprocessor - Hardcore Microprocessor - Hard Processor]]"
  - "[[Intel® Processors／CPUs - Intel Graphics Technology]]"
  - "[[Motorola Processors]]"
  - "[[NEORV32 RISC-V Processor]]"
  - "[[STMicroelectronics Processors]]"
  - "[[Soft Microprocessor - Softcore Microprocessor - Soft Processor]]"
---
###### Central Processing Unit (CPU) - Central/Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)
- is an implementation of a [[Computer Organization - Microarchitecture (µarch - uarch)|Computer Organization (Microarchitecture - µarch - uarch)]]
- executes instructions that make up a computer program (see [[Computer Architecture]])
- is part of a computer that fetches, decodes, and executes instructions, as opposed to memory, I/O, etc

# CPU History
- In the stone age days of computers, a mainframe CPU occupied multiple cabinets
- Later a mini computer's CPU occupied one or a few [[Printed Circuit Breadboard／Boards (PCB)|printed circuit boards (PCB)]]
- The next step was to integrate a CPU on a single [[Integrated Circuit (IC) - Microchip - Chip|integrated chip]] (thus called a <em>microprocessor</em>)

From there the development forks:
- <strong>microcontroller (uC)</strong> - is a CPU combined with memory and I/O on the same chip, creating a complete computer on a single chip
- <strong>system-on-a-chip</strong> - a moderately powerful CPU (more powerful than those in a uC, but less than those in a desktop CPU) combined with a small boot ROM and a set of complex peripherals, like a video/LCD subsystem, MPEG decoder, wired or wireless ethernet interface, [[Universal Serial Bus (USB) 2.0／3.0／3.2／4.0 Gen 1／2 (Specification／Interface)|USB]] interfaces, etc. to create a '[[System on Chip (SoC) - System on a Chip|system-on-a-chip]]'. These chips form the heart of modern set-top boxes and the small Linux systems (Beaglebone, [[Raspbian - Raspberry Pi|Raspberry Pi]], etc.) derived from them
- <strong>super-microprocessors</strong> - the CPU-on-a-chip is made more powerful (faster, parallel execution, fast execution of complex instructions like divide and transcendentals), a cache is added, more CPUs are combined in one chip, etc

# CPU Brands
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [WikiChip](https://en.wikichip.org/wiki/WikiChip)
