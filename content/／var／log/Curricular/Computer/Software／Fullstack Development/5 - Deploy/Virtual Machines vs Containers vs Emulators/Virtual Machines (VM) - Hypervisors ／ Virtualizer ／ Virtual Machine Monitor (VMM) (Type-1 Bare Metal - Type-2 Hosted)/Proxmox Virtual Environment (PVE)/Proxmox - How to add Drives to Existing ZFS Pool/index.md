---
title: "Proxmox - How to add Drives to Existing ZFS Pool"
created: 2025-12-05T20:10:49.482-06:00
modified: 2025-12-20T15:24:55.366-06:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
based on:
- [https://www.youtube.com/watch?v=RnvbRfg99lA](https://www.youtube.com/watch?v=RnvbRfg99lA)
- [[ZFS - How to Add New Drives into Existing ZPool in Mirror Mode]]

As of Fall 2025, Proxmox UI does not currently support adding additional drives to an existing ZFS pool as you can see below.

![[Proxmox - How to add Drives to Existing ZFS Pool/1.png|900]]

Everything has to be done through command line
```
zpool status
ls -lsah /dev/disk/by-id/
zpool add $ZFS_POOL_NAME_HERE mirror $DISK_NAME_1 $DISK_NAME_2
zpool add rpool mirror ata-QEMU_HARDDISK_QM00007 ata-QEMU_HARDDISK_QM00009
zpool status
```

![[Proxmox - How to add Drives to Existing ZFS Pool/2.png|500]]

Navigate back to Proxmox UI and verify the drives has been added.

![[Proxmox - How to add Drives to Existing ZFS Pool/3.png|900]]
