---
title: "HDD - Cylinder-Head-Sector (CHS) - Cluster - Block"
created: 2020-01-09T14:39:18.694-06:00
modified: 2020-06-16T00:06:52.384-05:00
parent: "[[Hard Disk Drives (HDD) - Fixed Disk]]"
children: []
---
<strong>Cylinder-Head-Sector</strong> (<strong>CHS</strong>)
- is an early method for giving addresses to each physical block of data on a [[HDD - Cylinder-Head-Sector (CHS) - Cluster - Block|Hard Disk Drive (HDD)]]
- CHS values are used to specify the geometry of a disk

### Terminology

```merge-table
{
  "rows": [
    [
      {
        "content": "Terms",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "Sector",
      "- the most common physical sector size is 512 bytes\n- in CHS addressing the <em>sector</em> numbers always start at <strong>1</strong> (there is no sector 0)"
    ],
    [
      "Track",
      "- are the thin concentric circular strips of sectors\n- strictly speaking a track is a given Cylinder-Head combination"
    ],
    [
      "Cylinder",
      "- is a division of data in a disk drive, as used in the:\n\t- Cylinder-Head-Sector (CHS) Addressing Mode of a [Fixed Block Architecture](https://en.wikipedia.org/wiki/Fixed_Block_Architecture) disk\n\t- Cylinder-Head-Record (CHR) Addressing Mode of a [CKD disk](https://en.wikipedia.org/wiki/CKD_disk)\n- the concept is concentric, hollow, cylindrical slices through the physical disks (platters)"
    ],
    [
      "Header",
      "- a device that reads and writes data in a hard drive"
    ],
    [
      "Cluster",
      "- usually a cluster is a group of sectors"
    ],
    [
      "Block",
      "- usually a block is a group of clusters"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

![](http://confluence.marcuschiu.com/download/attachments/10944887/hard-disk-schematic.png?version=1&modificationDate=1578603009058&api=v2)
