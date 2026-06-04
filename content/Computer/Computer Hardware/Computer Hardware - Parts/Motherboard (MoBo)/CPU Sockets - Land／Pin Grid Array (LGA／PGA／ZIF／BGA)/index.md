---
title: "CPU Sockets - Land／Pin Grid Array (LGA／PGA／ZIF／BGA)"
created: 2022-09-11T21:14:05.848-05:00
modified: 2025-10-11T02:08:47.871-05:00
parent: "[[Motherboard (MoBo)]]"
children: []
---
# CPU Socket - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Land Grid Array (LGA)",
        "bg": "#F4F5F7"
      },
      "- pins are located in the CPU socket (e.g. motherboard)"
    ],
    [
      {
        "content": "Pin Grid Array (PGA)",
        "bg": "#F4F5F7"
      },
      "- pins are located on the CPU itself\n- variants:\n\t- Plastic Pin Grid Array (PPGA)\n\t- Flip-Chip Pin Grid Array (FCPGA)\n\t- Ceramic Pin Grid Array (CPGA)\n\t- Organic Pin Grid Array (OPGA)"
    ],
    [
      {
        "content": "Zero Insertion Force (ZIF)",
        "bg": "#F4F5F7"
      },
      "- pins are located either on the socket or CPU\n- is a type of socket that requires very little (but not literally zero) force for insertion. then uses a lever to secure the placement"
    ],
    [
      {
        "content": "Ball Grid Array (BGA)",
        "bg": "#F4F5F7"
      },
      "- is not technically a socket\n- microprocessors are permanently mounted in this socket\n- instead of pins, some copper balls are soldered directly to the motherboard"
    ]
  ]
}
```
# CPU Socket - Names

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Intel® Processors／CPUs - Intel Graphics Technology|Intel]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Socket 423</strong> - It was used in the versions that gave rise to the Pentium 4 – a kind of legend - the “quality mark” that every computer geek dreamed of\n- <strong>LGA 771</strong> - To install server and desktop Xeons and Core 2\n- <strong>LGA 775</strong> - Released in 2004 for 4 Stumps, Dual-Core, and Core 2 Duo\n- <strong>LGA 1155</strong> - Introduced in 2011 For “stones” on Sandy Bridge architecture\n- <strong>LGA 1356</strong> - It appeared in 2012 as a solution for dual-processor servers\n- <strong>LGA 1151</strong> - Replacement LGA1150, introduced in 2015 In 2017, version 1151v2 appeared, which is currently supported\n- <strong>LGA 2066</strong> - Replacement of LGA 2011-3 released in 2017\n- <strong>LGA 1200</strong> - Released in Q2 2020 for Comet Lake architecture\n- <strong>LGA 1700</strong> - Released in Q4 2021 for Alder Lake and Raptor Lake"
    ],
    [
      {
        "content": "[[AMD Processors／CPUs|AMD]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>Socket A</strong> - Introduced in 1999 as a solution for the new Athlon CPU, the main competitor to the Pentium III\n- <strong>Socket 754</strong> - This is the first socket to be used in the AMD Athlon 64 processor. This type allows the use of Turion and Sempron\n- <strong>Socket 939</strong> - “Simplified” version of the server Socket 940 Used since 2004\n- <strong>AM3</strong> - It appeared in 2009 Designed for processors that already support DDR3\n- <strong>FM1</strong> - Introduced in 2011 as a solution for hybrid CPUs with Fusion architecture\n- <strong>AM1</strong> - Introduced in 2014 for budget Kabini CPUs with Jaguar microarchitecture\n- <strong>AM4</strong> - Introduced in 2016 as a slot for Ryzen brand processors on Zen architecture (PGA)\n- <strong>TR4</strong> - Modification for Ryzen Threadripper processors, released in 2017\n- <strong>AM5</strong> - Introduced in 2022 for Zen 4 microarchitecture (LGA)"
    ]
  ]
}
```
# AMD EPYC Socket Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Socket",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Pin Count / Type (if known)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Target Use / Positioning",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "EPYC (or AMD) Generations / Codenames",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Key Features / Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "SP3",
        "bg": "#F4F5F7"
      },
      "LGA 4094",
      "Mainstream server / data-center",
      "- EPYC “Naples” (7001)\n- EPYC “Rome” (7002)\n- EPYC “Milan” (7003)",
      "- 8 [[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|channels]] DDR4\n- full I/O integrated in the CPU (system-on-chip design)"
    ],
    [
      {
        "content": "SP4",
        "bg": "#F4F5F7"
      },
      "—",
      "(Not publicly used / announced)",
      "—",
      "—"
    ],
    [
      {
        "content": "SP5",
        "bg": "#F4F5F7"
      },
      "LGA 6096",
      "High-performance / density server / general server segment",
      "- EPYC “Genoa” and successors (e.g. 9004 series)",
      "- 12 [[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|channels]] of DDR5\n- large I/O (PCIe 5.0)"
    ],
    [
      {
        "content": "SP6",
        "bg": "#F4F5F7"
      },
      "LGA 4844",
      "Lower-power / edge / telco / compact server platforms",
      "- EPYC “Siena” (8004 series)",
      "- smaller socket “variant” of SP5\n- fewer memory channels (6)\n- I/O, focused on reduced footprint / power efficiency"
    ],
    [
      {
        "content": "SP7",
        "bg": "#F4F5F7"
      },
      "LGA 7536 (projected)",
      "Future high-end / next generation servers",
      "- EPYC “Venice” / “Verano” / future “9006 / 9007” series",
      "- expected to support advanced features (DDR5, PCIe Gen 6, large core counts)"
    ]
  ]
}
```
