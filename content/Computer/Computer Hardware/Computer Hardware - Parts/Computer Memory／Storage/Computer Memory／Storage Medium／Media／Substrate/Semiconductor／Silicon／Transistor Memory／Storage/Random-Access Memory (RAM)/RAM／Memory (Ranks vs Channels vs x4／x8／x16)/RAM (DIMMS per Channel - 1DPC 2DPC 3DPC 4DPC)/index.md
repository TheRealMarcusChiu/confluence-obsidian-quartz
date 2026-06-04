---
title: "RAM (DIMMS per Channel - 1DPC 2DPC 3DPC 4DPC)"
created: 2025-10-14T14:55:39.564-05:00
modified: 2025-10-14T15:00:39.799-05:00
parent: "[[RAM／Memory (Ranks vs Channels vs x4／x8／x16)]]"
children: []
---
###### RAM (DIMMS per Channel - 1DPC 2DPC 3DPC 4DPC)
````excerpt
- how many memory modules (DIMMs) are connected to a [[RAM Channels (Single／One／1 - Multi - Dual／Two／2 Quad／Four／4 Hexa／Six／6 Octa／Eight／8 Dodeca／Twelve／12 Channels) Memory System／Architecture|single memory channel]] on the [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|memory controller]]
````
^excerpt

# DPC

```merge-table
{
  "rows": [
    [
      {
        "content": "DPC",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Meaning",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Frequency",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bandwidth",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Latency",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Use Case",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "1DPC",
        "bg": "#F4F5F7"
      },
      "One DIMM plugged into that channel (simplest, fastest)",
      "Highest",
      "Full per-DIMM bandwidth",
      "Lowest",
      "Performance-optimized (HPC, gaming)"
    ],
    [
      {
        "content": "2DPC",
        "bg": "#F4F5F7"
      },
      "Two DIMMs plugged into that same channel (shared bus, slightly slower)",
      "Slightly lower",
      "Higher total capacity",
      "Slightly higher",
      "Capacity-optimized (servers)"
    ],
    [
      {
        "content": "3DPC+",
        "bg": "#F4F5F7"
      },
      "Rare on modern DDR4/DDR5 systems — signal integrity issues",
      "Not supported on modern DDR5",
      "—",
      "—",
      "—"
    ]
  ]
}
```
