---
title: "Integrated Memory Controller (IMC)"
created: 2024-09-22T22:46:24.850-05:00
modified: 2025-10-14T14:38:18.100-05:00
parent: "[[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)]]"
children: []
---
###### Integrated Memory Controller (IMC)
````excerpt
- is a [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|memory controller]] is integrated into another chip, such as an integral part of a [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|microprocessor]]
````
^excerpt

# IMC - History
Most modern desktop or workstation microprocessors use an <strong>integrated memory controller</strong> (<strong>IMC</strong>), including microprocessors from [[Intel Corporation|Intel]], [[Advanced Micro Devices (AMD)|AMD]], and those built around the [[ARM (Advanced RISC Machine - Acorn RISC Machine)|ARM architecture]].
- Prior to [K8](https://en.wikipedia.org/wiki/AMD_K8) (circa 2003), [[AMD Processors／CPUs|AMD microprocessors]] had a memory controller implemented on their motherboard's [northbridge](https://en.wikipedia.org/wiki/Northbridge_(computing)). In K8 and later, AMD employed an integrated memory controller.
- Likewise, until [Nehalem](https://en.wikipedia.org/wiki/Nehalem_(microarchitecture)) (circa 2008), [Intel](https://en.wikipedia.org/wiki/Intel) microprocessors used memory controllers implemented on the motherboard's northbridge. Nehalem and later switched to an integrated memory controller.
- Other examples of microprocessor architectures that use <em>integrated memory controllers</em> include [NVIDIA](https://en.wikipedia.org/wiki/NVIDIA)'s [Fermi](https://en.wikipedia.org/wiki/Fermi_(microarchitecture)), [IBM](https://en.wikipedia.org/wiki/IBM)'s [POWER5](https://en.wikipedia.org/wiki/POWER5), and [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems)'s [UltraSPARC T1](https://en.wikipedia.org/wiki/UltraSPARC_T1).

# IMC - Downsides
While an integrated memory controller has the potential to increase the system's performance, such as by reducing memory latency, it locks the microprocessor to a specific type (or types) of memory, forcing a redesign in order to support newer memory technologies.
