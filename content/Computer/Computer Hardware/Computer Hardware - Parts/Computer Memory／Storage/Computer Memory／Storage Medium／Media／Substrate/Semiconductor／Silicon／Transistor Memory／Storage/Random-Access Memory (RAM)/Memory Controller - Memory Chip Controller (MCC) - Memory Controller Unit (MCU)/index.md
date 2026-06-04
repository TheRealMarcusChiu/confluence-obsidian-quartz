---
title: "Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)"
created: 2024-09-22T22:43:32.385-05:00
modified: 2025-10-14T15:21:37.243-05:00
parent: "[[Random-Access Memory (RAM)]]"
children:
  - "[[Integrated Memory Controller (IMC)]]"
---
###### Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)
````excerpt
- is a [[Digital／Boolean Logic Circuits|digital circuit]] that handles communication between the [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]] and [[Primary／Main／Physical Computer Memory／Storage|main memory]]
````
^excerpt

# MCC

In modern systems:
- the memory controller is integrated on the CPU die (i.e. [[Integrated Memory Controller (IMC)|Integrated Memory Controller]]), not in the motherboard chipset (unlike older designs like pre-Nehalem Intel CPUs)
- each CPU socket (or die) typically has 1, 2, 4, 6, 8, or 12 memory controllers, depending on the architecture
- each controller usually handles one memory channel — so “dual channel” means 2 controllers inside the CPU

the memory controller can also support [[RAM (1S／2S Single／Double Sided Module - Single／1R - Dual／2R - Quad／4R - Octo／8R) Multi Ranks - Memory Rank|multi rank]], [[RAM (DIMMS per Channel - 1DPC 2DPC 3DPC 4DPC)|dimms per channel]], and [[Error-Correcting Codes (ECC)|error-correcting codes]]
# IMC - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "CPU",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Cores",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Memory Controllers",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|Channels]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Intel Core i9-14900K",
      "24",
      "2",
      "[[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|Dual Channel]] DDR5",
      "Shared by all cores"
    ],
    [
      "[[Ryzen|AMD Ryzen 9 7950X]]",
      "16",
      "2",
      "Dual Channel [[Random-Access Memory (RAM)|DDR5]]",
      "Shared via I/O die"
    ],
    [
      "[[AMD EPYC Processors|AMD EPYC 9654]]",
      "96",
      "12",
      "[[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|12-Channel]] DDR5",
      "Each [[CCX CCD (Compute Core CompleX Chiplet Compute Die)|CCD]] (8 cores) connects to I/O die with shared MCs"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
