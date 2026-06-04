---
title: "Enterprise and Datacenter Standard Form Factor (EDSFF)"
created: 2023-12-08T11:22:14.592-06:00
modified: 2025-12-15T18:06:11.248-06:00
parent: "[[Computer IO I／O Input／Output Ports／Devices]]"
children: []
---
###### Enterprise and Datacenter Standard Form Factor (EDSFF)
````excerpt
- is a family of form factors and interface standards for [[Solid State Drives (SSD)|SSDs]] and [[Rack Servers|rack servers]]
- created by a consortium of 15 companies
````
^excerpt

# EDSFF - Form Factors

```merge-table
{
  "rows": [
    [
      {
        "content": "E1.L\nEDSFF 1U Long",
        "bg": "#F4F5F7"
      },
      "- is a form factor that was developed to maximize capacity per drive and per rack unit in a 1U server or storage array (JBOD, JBOF), with superior manageability, serviceability, and thermal characteristics vs traditional form factors that were designed for rotating media\n- there are options for x4 or x8 lanes of PCIe while fitting vertically in a 1U chassis to allow for scalable bandwidth per drive, as well as options for 9.5 or 18mm heat sinks for various power and thermal environments (25W and 40W respectively)\n- it improves data center serviceability, and is designed to be hot pluggable and front access serviceable with LEDs built into an integrated enclosure"
    ],
    [
      {
        "content": "E1.S\nEDSFF 1U Short",
        "bg": "#F4F5F7"
      },
      "- is a flexible, power-efficient building block for hyperscale and enterprise compute nodes and storage, as well as for Compute Express Link (CXL) memory modules\n- the M.2 110mm form factor was popular in hyperscale data centers due to its low-cost structure, flexibility, and scalability of multiple drives per server. However, it faced challenges in terms of hotplug/serviceability, thermals and overheating, and scaling to high capacities\n- E1.S addresses these issues while maintaining a small form factor. It is slightly longer but wider than M.2, designed to accommodate more media (NAND) packages for increased capacity per drive. It fits vertically in a 1U chassis, similar to E1.L, enhancing serviceability and cooling efficiency"
    ],
    [
      {
        "content": "E2",
        "bg": "#F4F5F7"
      },
      "- was a form factor that was developed to support at least 64 NAND packages and fit vertically into standard 2U rack systems\n- it leverages the E.1S, E1.L, and E3.S/L specifications on protocol, transport, connector, pinout, and electrical\n- it leverages the E1.S and E3.L specifications on enclosure thickness, latch/carrier, and EMI/ESD\n- it leverages the E.3.S/L specifications on enclosure width and connector alignmen"
    ],
    [
      {
        "content": "EDSFF E3.S\nEDSFF E3.L",
        "bg": "#F4F5F7"
      },
      "- EDSFF E3 is a family of form factors designed to update and replace the traditional U.2 2.5-inch form factor in servers and storage systems\n- the different versions share the same height (76mm), and have commonality in length (112.75mm and 142.2mm) and width (7.5mm and 16.8mm)\n- these hot-pluggable drives are designed more optimally for flash density of the SSD and system chassis\n- the E3 family connector is designed for x4 to x16 PCIe lanes and power envelopes up to 70W\n- all versions should be slot/connector compatible and are designed to be front accessible\n- designed for future servers and storage systems, EDSFF E3 will accommodate next generations of PCI Express and can accommodate device types such as GPUs and NICs"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# EDSFF - Size Specification

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Width",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Length",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Thickness",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "E1.L 9.5mm",
        "bg": "#F4F5F7"
      },
      "38.4mm",
      "318.75mm",
      "318.75mm"
    ],
    [
      {
        "content": "E1.L 18mm",
        "bg": "#F4F5F7"
      },
      "38.4mm",
      "318.75mm",
      "18mm"
    ],
    [
      {
        "content": "E1.S 5.9mm",
        "bg": "#F4F5F7"
      },
      "31.5mm",
      "111.49mm",
      "5.9mm"
    ],
    [
      {
        "content": "E1.S 8mm heat spreader",
        "bg": "#F4F5F7"
      },
      "31.5mm",
      "111.49mm",
      "8.01mm"
    ],
    [
      {
        "content": "E1. Symmetric Enclosure",
        "bg": "#F4F5F7"
      },
      "313.75mm",
      "118.75mm",
      "9.5mm"
    ],
    [
      {
        "content": "E1. Symmetric Enclosure",
        "bg": "#F4F5F7"
      },
      "313.75mm",
      "118.75mm",
      "15mm"
    ],
    [
      {
        "content": "E1. Symmetric Enclosure",
        "bg": "#F4F5F7"
      },
      "313.75mm",
      "118.75mm",
      "25mm"
    ],
    [
      {
        "content": "E2",
        "bg": "#F4F5F7"
      },
      "76mm",
      "200mm",
      "9.5mm"
    ],
    [
      {
        "content": "E3.S",
        "bg": "#F4F5F7"
      },
      "76mm",
      "112.75mm",
      "7.5mm"
    ],
    [
      {
        "content": "E3.S 2T",
        "bg": "#F4F5F7"
      },
      "76mm",
      "112.75mm",
      "16.8mm"
    ],
    [
      {
        "content": "E3.L",
        "bg": "#F4F5F7"
      },
      "76mm",
      "142.2mm",
      "7.5mm"
    ],
    [
      {
        "content": "E3.L 2T",
        "bg": "#F4F5F7"
      },
      "76mm",
      "142.2mm",
      "16.8mm"
    ]
  ]
}
```
# Resources
- [https://www.snia.org/forums/cmsi/knowledge/formfactors](https://www.snia.org/forums/cmsi/knowledge/formfactors)
