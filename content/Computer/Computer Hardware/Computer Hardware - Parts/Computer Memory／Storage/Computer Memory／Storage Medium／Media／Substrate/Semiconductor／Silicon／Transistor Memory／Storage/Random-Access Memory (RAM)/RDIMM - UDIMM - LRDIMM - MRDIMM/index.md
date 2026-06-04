---
title: "RDIMM - UDIMM - LRDIMM - MRDIMM"
created: 2024-08-30T01:47:00.003-05:00
modified: 2025-10-16T13:55:48.293-05:00
parent: "[[Random-Access Memory (RAM)]]"
children:
  - "[[Load-Reduced Dual Memory Module (LRDIMM ／ LR-DIMM)]]"
  - "[[Multiplexed Rank DIMM (MRDIMM)]]"
  - "[[Registered／Buffered Dual Inline Memory Module (RDIMM)]]"
  - "[[Unbuffered Dual Inline Memory Module (UDIMM)]]"
---
# RDIMM vs UDIMM

In modern CPUs the [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|memory controller]] is on the CPU die (i.e. [[Integrated Memory Controller (IMC)|integrated memory controller]]), starting long ago for AMD Opteron chips and with the Core i series for Intel. Most desktop CPUs then talk directly to the DIMM sockets holding the RAM. It works and no extra logic is needed. That is cheap to build, and the speed is high because there's no delay going from the memory controller to the RAM.

But a memory controller can only drive a limited current at high speeds. This means that there is a limit to how many memory sockets can be added to a motherboard. (And to make it more complex, to how much the DIMMs can use, which leads to [[RAM (1S／2S Single／Double Sided Module - Single／1R - Dual／2R - Quad／4R - Octo／8R) Multi Ranks - Memory Rank|memory ranks]]).

On server computers you often want to use more memory than desktop computers. Therefore a "register" buffer is added to the memory. Reads from the chips on the DIMM first get copied to this buffer. A clock cycle later this buffer connects to the memory controller to transfer the data.

This buffer/register delays things, making memory slower. That is undesirable and thus it is only used/needed on boards that have a lot of memory banks. Most consumer boards do not need this, and most consumer CPU's do not support it.

Unbuffered RAM vs. buffered/registered RAM isn't a case where one is better or worse than the other. They just have different trade-offs in terms of how many memory slots you can have. Registered RAM allows more RAM at the cost of some speed (and possibly expense). In most cases where you need as much memory as possible, that extra memory more than compensates for the RAM running at a slightly slower speed.
# RDIMM vs LRDIMM vs UDIMM vs MRDIMM

```merge-table
{
  "rows": [
    [
      {
        "content": "Memory Type",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "[[RAM (1S／2S Single／Double Sided Module - Single／1R - Dual／2R - Quad／4R - Octo／8R) Multi Ranks - Memory Rank|Rank]] Support",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Max Capacity per Module",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "[[Error-Correcting Codes (ECC)|ECC]] Support",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "DDR4",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "DDR5",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Multiplexed Rank DIMM (MRDIMM)|MRDIMM]]",
        "bg": "#F4F5F7"
      },
      "- generally support more ranks than RDIMMs",
      "64GB?",
      "128GB-4TB?",
      {
        "content": "yes",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Load-Reduced Dual Memory Module (LRDIMM ／ LR-DIMM)|LRDIMM]]",
        "bg": "#F4F5F7"
      },
      "- generally support more ranks than RDIMMs",
      "[256GB](https://www.amazon.com/DDR4-2933-PC4-23400-Reduced-Servers-Workstations/dp/B08F2X7WSR?th=1)",
      "128GB-2TB",
      {
        "content": "yes",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Registered／Buffered Dual Inline Memory Module (RDIMM)|RDIMM]]",
        "bg": "#F4F5F7"
      },
      "- generally support more ranks than UDIMMs",
      "[256GB](https://www.amazon.com/DDR4-3200-PC4-25600-Registered-Servers-Workstations/dp/B08F2SWM8J?th=1)",
      "[256GB](https://www.amazon.com/NEMIX-RAM-SuperServer-SYS-F521E3-RTB-SYS-F511E2-RT/dp/B0CQ322WKX?th=1)",
      {
        "content": "yes",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Unbuffered Dual Inline Memory Module (UDIMM)|UDIMM]]",
        "bg": "#F4F5F7"
      },
      "- supports 1R and 2R",
      "32GB",
      "128GB",
      {
        "content": "yes",
        "bg": "#e3fcef",
        "align": "center"
      }
    ]
  ]
}
```
