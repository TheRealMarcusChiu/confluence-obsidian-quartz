---
title: "Cylinder-Head-Sector (CHS) Addressing Mode"
created: 2020-06-11T21:17:34.711-05:00
modified: 2022-09-11T15:27:42.451-05:00
parent: "[[Drive - Device - Disk - Disc - Memory Addressing Modes]]"
children: []
---
###### Cylinder-Head-Sector (CHS) Addressing Mode
- based on old [[HDD - Cylinder-Head-Sector (CHS) - Cluster - Block|HDD's Cylinder-Head-Sector (CHS)]]
- addressing starts at 0/0/1 because sector number 0 is disallowed
- sometimes heads are limited to 255, because of a bug in [Microsoft DOS](https://en.wikipedia.org/wiki/MS-DOS)/[IBM PC DOS](https://en.wikipedia.org/wiki/IBM_PC_DOS) crashes on boot when encountering volumes with 256 heads

# CHS - Types

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
        "content": "CHS Bits",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "CHS",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Addressable Max",
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
        "content": "CHS 24-bit",
        "bg": "#F4F5F7"
      },
      "10/8/6",
      "1024/256/63\n\n1024/255/63 (for limited 255 heads)",
      "8GB",
      "- 1979 - Introduced with \"[fixed-block-architecture](https://en.wikipedia.org/wiki/Fixed-block_architecture)\"\n- old BIOS"
    ],
    [
      {
        "content": "CHS 28-bit",
        "bg": "#F4F5F7"
      },
      "16/4/8",
      "65536/16/255",
      "128GB",
      "- 1994 - EIDE/ATA2"
    ],
    [
      {
        "content": "Combining CHS 24 & 28",
        "bg": "#F4F5F7"
      },
      "10/4/6",
      "1024/16/63",
      "504MB",
      "- takes the lower limit of CHS-24 and CHS-28"
    ],
    [
      {
        "content": "ECHS",
        "bg": "#F4F5F7"
      },
      "",
      "1024/128/63",
      "4032MB",
      ""
    ],
    [
      {
        "content": "Revised ECHS",
        "bg": "#F4F5F7"
      },
      "",
      "1024/240/63",
      "7560MB",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
- [[LBA & CHS - Mappings／Conversion|LBA & VHS - Mappings/Conversion]]
