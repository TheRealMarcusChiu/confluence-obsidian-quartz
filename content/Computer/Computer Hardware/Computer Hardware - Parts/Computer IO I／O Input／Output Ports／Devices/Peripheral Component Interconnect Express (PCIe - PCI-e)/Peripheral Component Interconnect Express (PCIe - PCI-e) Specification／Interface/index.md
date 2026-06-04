---
title: "Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface"
created: 2019-09-03T23:44:50.793-05:00
modified: 2025-10-21T13:05:08.053-05:00
parent: "[[Peripheral Component Interconnect Express (PCIe - PCI-e)]]"
children:
  - "[[Active-State Power Management (ASPM)]]"
  - "[[PLX Technology／Chips]]"
---
###### Peripheral Component Interconnect Express (PCIe - PCI-e)
````excerpt
- is a high-speed serialcomputerexpansion bus standard
- designed to replace the older PCI, PCI-X, and [[Accelerated Graphics Port (AGP)|AGP]] bus standards
- see physical [[Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots ／ Lanes|PCIe slots]]
````
^excerpt

# PCIe - Performance

```merge-table
{
  "rows": [
    [
      {
        "content": "PCIe\nVersion",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Year\nIntroduced",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Line \nCode",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Transfer \nRate",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "[[Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots ／ Lanes|PCIe Physical Slot]] Width's Lane Throughput",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 6
      },
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "×1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "×2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "×4",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "×8",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "×16",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "×32",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "1.0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "2003",
      {
        "content": "[8b/10b](https://en.wikipedia.org/wiki/8b/10b)",
        "align": "center"
      },
      "2.5 [GT](https://en.wikipedia.org/wiki/Gigatransfers)/s",
      "0.25GB/s",
      "0.50GB/s",
      "1GB/s",
      "2GB/s",
      "4GB/s",
      "8GB/s"
    ],
    [
      {
        "content": "2.0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "2007",
      {
        "content": "8b/10b",
        "align": "center"
      },
      "5.0 GT/s",
      "0.5GB/s",
      "1GB/s",
      "2GB/s",
      "4GB/s",
      "8GB/s",
      "16GB/s"
    ],
    [
      {
        "content": "3.0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "2010",
      {
        "content": "[128b/130b](https://en.wikipedia.org/wiki/128b/130b)",
        "align": "center"
      },
      "8.0 GT/s",
      "1GB/s",
      "2GB/s",
      "4GB/s",
      "8GB/s",
      "16GB/s",
      "32GB/s"
    ],
    [
      {
        "content": "3.1",
        "bg": "#F4F5F7"
      },
      "2014",
      "[128b/130b](https://en.wikipedia.org/wiki/128b/130b)",
      "8.0 GT/s",
      "1GB/s",
      "2GB/s",
      "4GB/s",
      "8GB/s",
      "16GB/s",
      "32GB/s"
    ],
    [
      {
        "content": "4.0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "2017",
      {
        "content": "128b/130b",
        "align": "center"
      },
      "16.0 GT/s",
      "2GB/s",
      "4GB/s",
      "8GB/s",
      "16GB/s",
      "32GB/s",
      "64GB/s"
    ],
    [
      {
        "content": "5.0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "2019",
      {
        "content": "128b/130b",
        "align": "center"
      },
      "32.0 GT/s",
      "4GB/s",
      "8GB/s",
      "16GB/s",
      "32GB/s",
      "64GB/s",
      "128GB/s"
    ],
    [
      {
        "content": "6.0",
        "bg": "#F4F5F7",
        "align": "left"
      },
      "2021",
      {
        "content": "128b/130b",
        "align": "center"
      },
      "64.0 GT/s",
      "8GB/s",
      "16GB/s",
      "32GB/s",
      "64GB/s",
      "128GB/s",
      "256GB/s"
    ]
  ],
  "tableStyle": "text-align: right;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
