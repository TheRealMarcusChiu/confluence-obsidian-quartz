---
title: "Logical Block Addressing (LBA) Mode - Logical Sector Number (LSN)"
created: 2020-06-09T23:10:41.180-05:00
modified: 2022-09-11T15:28:17.021-05:00
parent: "[[Drive - Device - Disk - Disc - Memory Addressing Modes]]"
children: []
---
###### Logical block addressing (LBA) - Logical Sector Number (LSN)
- also known as BIOS INT 13h extensions drive geometry translation
- is a common scheme used for specifying the location of blocks of data stored on [[Computer Memory／Storage Devices|computer storage devices]] (e.g. [[Hard Disk Drives (HDD) - Fixed Disk|HDD]])
- is a particularly simple [linear addressing](https://en.wikipedia.org/wiki/Linear_addressing) scheme; blocks are located by an integer index, with the first block being LBA 0, the second LBA 1, and so on

# LBA - Types

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
        "content": "Addressable Size",
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
        "content": "LBA 22-bit",
        "bg": "#F4F5F7"
      },
      "2GB Limit",
      "- 1986 - IDE"
    ],
    [
      {
        "content": "LBA 28-bit",
        "bg": "#F4F5F7"
      },
      "128GB Limit",
      "- 1994 - ATA-1"
    ],
    [
      {
        "content": "LBA 32-bit",
        "bg": "#F4F5F7"
      },
      "2<sup>32</sup> × 512 bytes = 2TiB ≈ 2.19TB",
      ""
    ],
    [
      {
        "content": "LBA 48-bit",
        "bg": "#F4F5F7"
      },
      "2<sup>48</sup> × 512 bytes = 128PiB ≈ 144.1PB",
      "- 48-bit LBA scheme was introduced in 2003 with the [ATA-6](https://en.wikipedia.org/wiki/ATA-6) standard\n- current PC-compatible computers support INT 13h Extensions, which use 64-bit structures for LBA addressing and should encompass any future extension of LBA addressing, though modern operating systems implement direct disk access and do not use the [[Basic Input／Output System (BIOS)|BIOS]] subsystems, except at [boot load](https://en.wikipedia.org/wiki/Boot_loader) time. However, the common [DOS](https://en.wikipedia.org/wiki/DOS) style [[Master Boot Record (MBR)|Master Boot Record (MBR)]] partition table only supports [disk partitions](https://en.wikipedia.org/wiki/Disk_partition) up to 2 TiB in size. For larger partitions, this needs to be replaced by another scheme, for instance, the [[GUID Partition Table (GPT)|GUID Partition Table (GPT)]] which has the same 64-bit limit as the current INT 13h Extensions"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
- [[LBA & CHS - Mappings／Conversion|LBA & VHS - Mappings/Conversion]]
