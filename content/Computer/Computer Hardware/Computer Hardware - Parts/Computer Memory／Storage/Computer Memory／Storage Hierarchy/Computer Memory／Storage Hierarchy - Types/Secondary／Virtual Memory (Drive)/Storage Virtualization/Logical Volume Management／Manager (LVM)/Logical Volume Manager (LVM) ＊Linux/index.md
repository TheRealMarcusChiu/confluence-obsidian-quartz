---
title: "Logical Volume Manager (LVM) ＊Linux"
created: 2020-06-10T23:31:44.873-05:00
modified: 2023-02-20T13:22:06.406-06:00
parent: "[[Logical Volume Management／Manager (LVM)]]"
children:
  - "[[LVM - Commands]]"
---
###### Logical Volume Manager (LVM) \*Linux
````excerpt
- is a [device mapper](https://en.wikipedia.org/wiki/Device_mapper) target that provides [[Logical Volume Management／Manager (LVM)|logical volume management]] for the [[Linux Kernel|Linux kernel]]
- is NOT a [[Disk (Format - Filesystems／File-Systems (FS))|filesystem]] but runs alongside a filesystem
- can also include [[Redundant Array of Independent Disks (RAID)|RAID]] functionality and supports RAID 1, 5, and 6
- originally written in 1998 by Heinz Mauelshagen
- was based on the Hewlett-Packard Unix OS volume manager
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Linux Logical Volume Manager (LVM) Deep Dive Tutorial](https://www.youtube.com/watch?v=MeltFN-bXrQ)
