---
title: "Data Processing Unit (DPU)"
created: 2022-12-18T12:23:57.438-06:00
modified: 2022-12-18T13:31:07.849-06:00
parent: "[[Processor - Processing Unit (PU) - Processing Element (PE)]]"
children: []
---
###### Data Processing Unit (DPU)
- a specialized electronic circuit with hardware acceleration of data processing for data-centric computing
- differentiates itself:
	- from a CPU by a lack of a program counter (replaced with a data counter)
	- from a GPU by a [[Computer Organization - Microarchitecture (µarch - uarch)|MIMD]] architecture rather than a [[Computer Organization - Microarchitecture (µarch - uarch)|SIMD]] architecture (required as each request needs to make different decisions and follow a different path through the chip)
- can be either [[Application-Specific Integrated Circuit (ASIC)|ASIC]]-based, [[Field-Programmable Gate Arrays (FPGA)|FPGA]]-based or [[System on Chip (SoC) - System on a Chip|SoC]]-based
