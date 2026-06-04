---
title: "Modified Harvard Architecture"
created: 2023-01-09T22:08:14.984-06:00
modified: 2023-01-09T22:15:44.077-06:00
parent: "[[Computer Organization - Microarchitecture (µarch - uarch)]]"
children: []
---
###### Modified Harvard Architecture
- is very much like a Harvard architecture machine, but it relaxes the strict separation between instruction and data while still letting the CPU concurrently access two (or more) memory buses
- the most common modification includes separate instruction and data caches backed by a common address space
	- while the CPU executes from the cache, it acts as a pure Harvard machine
	- when accessing backing memory, it acts like a von Neumann machine (where code can be moved around like data, which is a powerful technique)
- this modification is widespread in modern processors, such as the [[ARM (Advanced RISC Machine - Acorn RISC Machine)|ARM]] architecture, Power ISA, and [[x86 x64 (x86-16, x86-32, x86-64)|x86]] processors
