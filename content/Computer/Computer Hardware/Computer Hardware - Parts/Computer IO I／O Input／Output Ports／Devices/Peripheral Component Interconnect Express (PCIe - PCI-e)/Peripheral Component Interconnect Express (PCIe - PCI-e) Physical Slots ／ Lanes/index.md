---
title: "Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots ／ Lanes"
created: 2024-08-07T11:45:11.031-05:00
modified: 2025-10-14T15:24:53.220-05:00
parent: "[[Peripheral Component Interconnect Express (PCIe - PCI-e)]]"
children: []
---
###### Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots
````excerpt
- uses the [[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe specification]]
- are expansion slots found on a computer's [[Motherboard (MoBo)|motherboard]]
- they allow additional hardware components to be connected to the computer, such as graphics cards, sound cards, network cards, and other peripherals
````
^excerpt

# PCIe Slots - Lanes<font style="color: rgb(84,89,93);"> (×1 ×2 ×4 ×8 ×16 </font><font style="color: rgb(84,89,93);">×32</font>)

```merge-table
{
  "rows": [
    [
      "![[Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots ／ Lanes/pcie-slot-sizes.jpg|400]]",
      "A lane is composed of two pairs, with one pair for receiving data and the other for transmitting. Thus, each lane is composed of four wires.\n\nPhysical PCIe links may contain 1, 2, 4, 8, 12, 16, or 32 lanes."
    ]
  ],
  "tableStyle": "width: 71.1961%;"
}
```
- consumer CPUs will typically allow for 16 to 24 PCIe lanes
- higher-end CPUs will typically allow for 64 or more PCIe lanes
```merge-table
{
  "rows": [
    [
      {
        "content": "Number of Lanes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Typical Example Cards",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "x1",
        "bg": "#F4F5F7"
      },
      "- Port/Hub Expansions\n- Sound Cards\n- Network Cards\n- Capture Cards"
    ],
    [
      {
        "content": "x4",
        "bg": "#F4F5F7"
      },
      "- Port/Hub Expansions\n- High-Bandwidth Network Cards\n- NAS Storage\n- RAID Controller Cards\n- Capture Cards\n- [[M.2 - Next Generation Form Factor (NGFF)|M.2]] and [[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)|NVMe]] Adapters"
    ],
    [
      {
        "content": "x8",
        "bg": "#F4F5F7"
      },
      "- Higher-Bandwidth Implementations of other Expansion Cards\n- Multi-Slot NVMe Adapters\n- Low-End Graphics Cards that are actually made for PCIe x8 slot lengths (something like an AMD RX 560)"
    ],
    [
      {
        "content": "x16",
        "bg": "#F4F5F7"
      },
      "- Graphics Cards, in general\n- Enthusiast or Server-Grade Expansion Cards (Network and Storage most common)"
    ]
  ]
}
```
# PCIe Slots - Chipset Lanes vs Processor Lanes

```merge-table
{
  "rows": [
    [
      {
        "content": "Chipset Lane",
        "bg": "#F4F5F7"
      },
      "- connects directly to [[Chipsets|chipset]]\n- limited bandwidth\n- bottlenecked by chipset\n- generally connect to [[Universal Serial Bus (USB) 2.0／3.0／3.2／4.0 Gen 1／2 (Specification／Interface)|USB]], other M.2 and PCIe slots, and [[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]"
    ],
    [
      {
        "content": "Processor Lane",
        "bg": "#F4F5F7"
      },
      "- connects directly to [[Central Processing Unit (CPU) - Central／Main Processor - Microprocessor (uP) - Microcontroller (uC) - Microcontroller Unit (MCU)|processor]]\n- more bandwidth\n- not bottlenecked by chipset\n- generally connect to [[Graphics Processing Unit (GPU) - Graphics Card|GPU]] and [[M.2 - Next Generation Form Factor (NGFF)|M.2]] slots"
    ]
  ]
}
```
