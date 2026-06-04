---
title: "Partition／Volume - Disk Partitioning - Partition Schema"
created: 2019-03-15T01:48:04.585-05:00
modified: 2022-09-24T20:23:18.832-05:00
parent: "[[Secondary／Virtual Memory (Drive)]]"
children:
  - "[[Apple Partition Map (APM)]]"
  - "[[EFI System Partition (ESP)]]"
  - "[[GUID Partition Table (GPT)]]"
  - "[[Master Boot Record (MBR)]]"
  - "[[Partition IDs／Types]]"
  - "[[Partition／Volume Boot Record／Sector (VBR)]]"
---
````excerpt
- <strong>partition</strong> or<strong> volume</strong> is a slice of a [[Computer Memory／Storage Devices|storage device]]
- <strong>disk partitioning</strong> or <strong>disk slicing</strong> is the creation of one or more partitions/volumes on a [[Computer Memory／Storage Devices|storage device]] so that each partition can be managed separately. It is typically the first step of preparing a newly installed disk before the [[Disk (Format - Filesystems／File-Systems (FS))|file system]] is created on the partition
- <strong>partition schema </strong>defines how a disk is partitioned. it includes a <strong>partition table</strong> that contains the meta-data of each partition (e.g. file system type, etc)
````
^excerpt

# Partition Schema - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Partition Schema",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Short Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Master Boot Record (MBR)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Master Boot Record (MBR)#^excerpt]]"
    ],
    [
      {
        "content": "[[GUID Partition Table (GPT)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[GUID Partition Table (GPT)#^excerpt]]"
    ],
    [
      {
        "content": "[[Apple Partition Map (APM)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Apple Partition Map (APM)#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
