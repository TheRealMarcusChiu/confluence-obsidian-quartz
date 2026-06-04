---
title: "Random-Access Memory (RAM)"
created: 2019-08-27T13:34:02.386-05:00
modified: 2026-04-30T01:05:57.668-05:00
parent: "[[Semiconductor／Silicon／Transistor Memory／Storage]]"
children:
  - "[[1：1 Mode (Gear1 Mode - \"UCLK DIV1 Mode\" on \"UCLK==MEMCLK\") vs 1：2 Mode (Gear2 Mode)]]"
  - "[[Direct Memory Access (DMA)]]"
  - "[[Error-Correcting Codes (ECC)]]"
  - "[[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)]]"
  - "[[RAM Slot Layout (Daisy Chain vs T-Topology)]]"
  - "[[RAM Timings (Column Address Strobe Latency (CL／CAS Latency) - RAS to CAS Delay (tRCD) - Row Precharge Time (tRP) - Active to Precharge Delay (tRAS))]]"
  - "[[RAM Types]]"
  - "[[RAM／Memory (Ranks vs Channels vs x4／x8／x16)]]"
  - "[[RDIMM - UDIMM - LRDIMM - MRDIMM]]"
  - "[[SIMM - DIMM - SO-DIMM - RIMM]]"
  - "[[Single Data Rate (SDR) - Double Data Rate (DDR)]]"
---
###### Random-Access Memory (RAM)
````excerpt
- is a type of [[Semiconductor／Silicon／Transistor Memory／Storage|semiconductor memory]]
- sometimes synonymous to [[Primary／Main／Physical Computer Memory／Storage|primary/main/physical memory]] when referred as [[Dynamic RAM (DRAM)|DRAM]]
````
^excerpt

# RAM - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Dynamic RAM (DRAM)]]",
        "bg": "#F4F5F7"
      },
      "![[Dynamic RAM (DRAM)#^excerpt]]"
    ],
    [
      {
        "content": "[[Static RAM (SRAM)]]",
        "bg": "#F4F5F7"
      },
      "![[Static RAM (SRAM)#^excerpt]]"
    ],
    [
      {
        "content": "[[Non-Volatile RAM (NVRAM)]]",
        "bg": "#F4F5F7"
      },
      "![[Non-Volatile RAM (NVRAM)#^excerpt]]"
    ],
    [
      {
        "content": "[[Synchronous Dynamic RAM (SDRAM)]]",
        "bg": "#F4F5F7"
      },
      "![[Synchronous Dynamic RAM (SDRAM)#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# RAM - Classifications

```merge-table
{
  "rows": [
    [
      {
        "content": "Classification",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "MHz",
        "bg": "#F4F5F7"
      },
      "DDR-xxxx",
      "- DDR3-1333",
      "- is the standard used to classify memory chips\n- The first number, DDR-xxxx, indicates the maximum clock speed that the memory chips support. For instance, DDR400 memories work at 400 MHz at the most, DDR2-800 can work up to 800 MHz, and DDR3-1333 can work up to 1,333 MHz\n- It is important to note that this is not the real clock speed of the memory\n- The real clock of the DDR, DDR2 and DDR3 memories is half of the labeled clock speed. Therefore DDR400 memories work at 200 MHz, DDR2-800 memories work at 400 MHz, and DDR3-1333 memories work at 666 MHz"
    ],
    [
      {
        "content": "MB/s",
        "bg": "#F4F5F7"
      },
      "PC-xxxx",
      "- PC3-10666",
      "- Originally, the number after \"PC\" that was used to label memory modules stood for the clock rate of the data transfer (e.g. PC133). This was later changed to the peak data transfer rate in Mbps, so memory that is classified as PC5300 has a peak data transfer rate of 5300 Mbps\n- is the standard used to classify memory modules\n- The second number, PC-xxxx, indicates the maximum transfer rate that the memory reaches, in MB/s.\n\t- DDR400 memories transfer data at 3,200 MB/s at the most, and hence they are labeled as PC3200\n\t- DDR2-800 memories transfer data at 6,400 MB/s and they are labeled as PC2-6400\n\t- DDR3-1333 memories can transfer data at 10,664 MB/s and they are labeled as PC3-10600 or PC3-10666\n- As you can see, we use the number “2” or “3” after “DDR” or “PC” to indicate that we are talking about a DDR2 or DDR3 memory, not DDR"
    ],
    [
      {
        "content": "Timing & Latency",
        "bg": "#F4F5F7"
      },
      "x-x-x-x",
      "- 7-7-7-18",
      "- see [[RAM Timings (Column Address Strobe Latency (CL／CAS Latency) - RAS to CAS Delay (tRCD) - Row Precharge Time (tRP) - Active to Precharge Delay (tRAS))|RAM Timings]]"
    ],
    [
      {
        "content": "Voltage",
        "bg": "#F4F5F7"
      },
      "xV",
      "- 1.2V",
      "- RAM voltage"
    ]
  ],
  "tableStyle": "width: 99.9282%;"
}
```

<strong>PC</strong> - is the memory module
- <strong>PC2</strong> - indicates the module uses DDR2 memory
- <strong>PC3</strong> - indicates the module uses DDR3 memory
- <strong>PC4</strong> - indicates the module uses DDR4 memory
- <strong>PC5</strong> - indicates the module uses DDR5 memory

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://forum-en.msi.com/index.php?threads/ram-explained-why-two-modules-are-better-than-four-single-vs-dual-rank-stability-testing.363139/](https://forum-en.msi.com/index.php?threads/ram-explained-why-two-modules-are-better-than-four-single-vs-dual-rank-stability-testing.363139/)

![](https://www.youtube.com/watch?v=PVad0c2cljo)![](https://www.youtube.com/watch?v=7J7X7aZvMXQ)
