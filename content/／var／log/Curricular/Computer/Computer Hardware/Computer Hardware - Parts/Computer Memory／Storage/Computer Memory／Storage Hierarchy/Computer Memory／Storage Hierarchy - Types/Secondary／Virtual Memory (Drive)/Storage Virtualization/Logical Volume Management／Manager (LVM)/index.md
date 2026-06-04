---
title: "Logical Volume Management／Manager (LVM)"
created: 2023-02-20T12:54:16.339-06:00
modified: 2023-02-20T13:13:43.911-06:00
parent: "[[Storage Virtualization]]"
children:
  - "[[Logical Volume Manager (LVM) ＊Linux]]"
---
###### Logical Volume Management/Manager (LVM)
````excerpt
- a type of [[Storage Virtualization|storage virtualization]]
- provides a method of allocating space on mass-storage devices that is more flexible than conventional [[Partition／Volume - Disk Partitioning - Partition Schema|partitioning schemes]] to store volumes. In particular, a volume manager can concatenate, stripe together or otherwise combine partitions (or block devices in general) into larger virtual partitions that administrators can re-size or move, potentially without interrupting system use
- its implementation takes place in a layer in the device-driver stack of an [[Operating Systems (OS)|OS]] (as opposed to within storage devices or in a network)
````
^excerpt

# LVM - Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Zettabyte File System (ZFS)]]
