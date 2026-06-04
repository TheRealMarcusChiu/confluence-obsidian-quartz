---
title: "Complex Programmable Logic Device (CPLD)"
created: 2021-12-14T03:19:35.466-06:00
modified: 2023-05-21T20:22:46.285-05:00
parent: "[[Programmable Logic Device (PLD)]]"
children: []
---
###### Complex Programmable Logic Device (CPLD)
- is a programmable logic device with complexity between that of [[Programming Array Logic (PAL) - Programmable Logic Array (PLA)|PLAs/PALs]] and [[Field-Programmable Gate Arrays (FPGA)|FPGAs]]
- contains a bunch of PLA/PAL blocks whose inputs and outputs are connected together by a global interconnection matrix. So a CPLD has two levels of programmability:
	- each PLA/PAL block can be programmed
	- and then the interconnections between the PLA/PAL blocks can be programmed

# CPLD - Diagram

```merge-table
{
  "rows": [
    [
      "![[Complex Programmable Logic Device (CPLD)/cpld-diagram.png|500]]",
      "- [[Programming Array Logic (PAL) - Programmable Logic Array (PLA)|PLA/PAL diagrams]]"
    ]
  ]
}
```
# Subpages
- [[CPLD vs FPGA]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
