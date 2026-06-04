---
title: "New Technology File System (NTFS)"
created: 2020-06-10T14:49:36.472-05:00
modified: 2025-06-10T16:33:26.491-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS))]]"
children:
  - "[[NTFS - Other]]"
  - "[[NTFS - System Files - $MFT - Master File Table (MFT)]]"
  - "[[NTFS - System／Meta Files]]"
  - "[[NTFS - Versions]]"
  - "[[NTFS - Volume Boot Record (VBR) or Partition Boot Sector (PBS)]]"
---
###### New Technology File System (NTFS)
````excerpt
- is a proprietary journaling [[Disk (Format - Filesystems／File-Systems (FS))|file system]] developed by [[Microsoft]]
````
^excerpt

# NTFS - Predecessors
- [[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)|FAT12]]
- [[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)|FAT16]]
- [[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)|FAT32]]
- HPFS

# NTFS - Versions
- [[NTFS - Versions]]

# NTFS - Diagram
![[New Technology File System (NTFS)/ntfs-volume.png|500]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Section",
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
        "content": "[[NTFS - Volume Boot Record (VBR) or Partition Boot Sector (PBS)|NTFS's Volume Boot Record (VBR)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- [[Partition／Volume Boot Record／Sector (VBR)|Partition/Volume Boot Record/Sector (VBR)]] for [[New Technology File System (NTFS)|NTFS Volume]]"
    ],
    [
      {
        "content": "[[NTFS - System Files - $MFT - Master File Table (MFT)|$MFT - Master File Table (MFT)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- contains a [[NTFS - MFT File Record／Entry|MFT record]] for every file and folder in the NTFS volume"
    ],
    [
      {
        "content": "[[NTFS - System／Meta Files|NTFS's System Files]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- all are hidden from view on the [[New Technology File System (NTFS)|NTFS Volume]]\n- a system file is one used by the file system to store its metadata and to implement the file system"
    ],
    [
      {
        "content": "File Area",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- user files"
    ]
  ]
}
```
# NTFS - Other
```dataview
LIST
FROM ""
WHERE file.folder = [[NTFS - Other]].file.folder + "/" + [[NTFS - Other]].file.name
```

# NTFS - Entire Tree
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
