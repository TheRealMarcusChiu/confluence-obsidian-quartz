---
title: "Solid State Drives (SSD)"
created: 2019-09-02T13:23:08.999-05:00
modified: 2025-12-15T16:02:06.633-06:00
parent: "[[Computer Memory／Storage Devices]]"
children:
  - "[[SSD Brands]]"
---
###### Solid State Drives (SSD)
- is a type of [[Computer Memory／Storage Devices|storage device]]
````excerpt
- uses [[Integrated Circuit (IC) - Microchip - Chip|integrated circuit]] assemblies as memory to store data persistently (typically [[NAND Flash Memory]] as the [[Computer Memory／Storage Medium／Media／Substrate|storage medium]])
- defragmentation not needed
- has a controller to manage random-access-memory
- typically used as [[Secondary／Virtual Memory (Drive)|secondary memory]]
````
^excerpt

# SSD - History

When SSDs first developed, it was clear that the older [[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]] data transport system was a bottleneck. The SSDs could transfer data much faster than SATA could send it. [[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)|NVMe]] was the answer. It can send data 3–6 times faster, but it needed a faster bus, and [[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe]] was already there and could do the job. The first NVMe drives used the usual PCIe slot form factor. But that took up a lot of room on the motherboard, and so the M.2 form factor was designed
# SSD - Things to Consider
- [[Memory Controller - Memory Chip Controller (MCC) - Memory Controller Unit (MCU)|Memory Controller]] -
- [[Dynamic RAM (DRAM)|DRAM]] Cache -
- Storage Medium Types:
	- [[NAND Flash Memory]] - SLC, MLC, TLC, QLC, or PLC
	- [[Intel® Optane™ Memory|Intel® Optane™]]

# SSD - Types

![](https://www.youtube.com/watch?v=5Mh3o886qpg)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

additional details: [https://www.snia.org/forums/cmsi/knowledge/formfactors](https://www.snia.org/forums/cmsi/knowledge/formfactors)

```merge-table
{
  "rows": [
    [
      {
        "content": "Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Physical Connector",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Connection Protocol",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Connection Technology",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Form Factor",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Image",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "2.5” [[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#F4F5F7"
      },
      "- connects over SATA cables\n- similar shape to a traditional [[Hard Disk Drives (HDD) - Fixed Disk|2.5\" HDD]]",
      {
        "content": "SATA",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "[[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "[[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "2.5\"",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "![[Solid State Drives (SSD)/ssd-form-factor-sas-vs-sata.jpeg|100x74]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[Serial Attached SCSI (SAS)|SAS]]",
        "bg": "#F4F5F7"
      },
      "- similar shape to SATA connector",
      {
        "content": "SAS",
        "bg": "#ffbdad",
        "align": "center"
      },
      {
        "content": "[[Serial Attached SCSI (SAS)|SAS]]",
        "bg": "#ffbdad",
        "align": "center"
      },
      {
        "content": "[[Serial Attached SCSI (SAS)|SAS]]",
        "bg": "#ffbdad",
        "align": "center"
      },
      {
        "content": "2.5\"",
        "bg": "#fffae6",
        "align": "center"
      }
    ],
    [
      {
        "content": "mini-SATA\nmSATA",
        "bg": "#F4F5F7"
      },
      "- is a smaller version of the full-size SATA SSD\n- supports only [[Serial ATA (SATA) - Parallel ATA (PATA)|SATA interface]]",
      {
        "content": "mini-SATA",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "[[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "[[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "similar to M.2",
        "bg": "#deebff",
        "align": "center"
      },
      "![[Solid State Drives (SSD)/mini-SATA-mSATA.png|100x61]]"
    ],
    [
      {
        "content": "NVMe [[M.2 - Next Generation Form Factor (NGFF)|M.2]]",
        "bg": "#F4F5F7"
      },
      "- TODO",
      {
        "content": "M.2",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "[[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe]]",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "[[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)|NVMe]]",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "content": "M.2",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "![[Solid State Drives (SSD)/M.2.png|150]]\n\n> [!expand]- M.2 Size Chart\n> It is available in various lengths to enable different SSD drive capacities; the longer the drive, the more [[NAND Flash Memory|NAND flash]] chips can be mounted on it leading to higher capacity drives.\n> - M.2 2260 would be 22mm wide and 60mm long\n> - M.2 2280 would be 22mm wide and 80mm long\n>\n> ![[Solid State Drives (SSD)/NVMe-M.2-Size-Chart.jpg|400]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "SATA M.2",
        "bg": "#F4F5F7"
      },
      "- TODO",
      {
        "content": "M.2",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "[[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "[[Serial ATA (SATA) - Parallel ATA (PATA)|SATA]]",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "M.2",
        "bg": "#deebff",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[U.2 Connector|U.2]]",
        "bg": "#F4F5F7"
      },
      "- typically for high-end servers",
      {
        "content": "SFF-8639",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "content": "[[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe]]",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "[[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)|NVMe]]",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "content": "ANY",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "![[Solid State Drives (SSD)/u.2-ssd-connector.png|150]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[U.3 Connector|U.3]]",
        "bg": "#F4F5F7"
      },
      "- U.2 but also supports SATA and SAS",
      {
        "content": "SFF-8639",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "content": "PCIe/SATA/SAS",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "NVMe/SATA/SAS",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "ANY",
        "bg": "#fffae6",
        "align": "center"
      }
    ],
    [
      {
        "content": "PCIe",
        "bg": "#F4F5F7"
      },
      "- SSD using [[Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots ／ Lanes|PCIe physical slot]]",
      {
        "content": "[[Peripheral Component Interconnect Express (PCIe - PCI-e) Physical Slots ／ Lanes|PCIe Slots]]",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "[[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe]]",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "[[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)|NVMe]]",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "content": "Card",
        "bg": "#f4f5f7",
        "align": "center"
      },
      "![[Solid State Drives (SSD)/pcie-ssd-card.jpg|100x61]]"
    ],
    [
      {
        "content": "[[Enterprise and Datacenter Standard Form Factor (EDSFF)|EDSFF]]",
        "bg": "#F4F5F7"
      },
      "![[Enterprise and Datacenter Standard Form Factor (EDSFF)#^excerpt]]",
      {
        "content": "?",
        "align": "center"
      },
      {
        "content": "[[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe]]",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "[[NVM Express (NVMe) - Non-Volatile Memory Host Controller Interface Specification (NVMHCIS)|NVMe]]",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "content": "Card",
        "bg": "#f4f5f7",
        "align": "center"
      },
      "![[Solid State Drives (SSD)/EDSFF-family.jpg|100]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
