---
title: "Direct Memory Access (DMA)"
created: 2019-08-31T15:03:15.393-05:00
modified: 2024-09-03T23:14:02.022-05:00
parent: "[[Random-Access Memory (RAM)]]"
children:
  - "[[Remote Direct Memory Access (RDMA)]]"
---
###### Direct Memory Access (DMA)
````excerpt
- is a feature of computer systems that allows certain hardware subsystems to access [[Primary／Main／Physical Computer Memory／Storage|main system memory]] (i.e. [[Random-Access Memory (RAM)|RAM]]), INDEPENDENT of the [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|CPU]]
- comparisons:
	- without DMA, when the CPU is using<em> programmed input/output</em>, it is typically fully occupied for the entire duration of the read or write operation, and is thus unavailable to perform other work
	- with DMA, the CPU first initiates the transfer, then it does other operations while the transfer is in progress, and it finally receives an interrupt from the <strong>DMA Controller (DMAC)</strong> when the operation is done
````
^excerpt

# DMA - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
