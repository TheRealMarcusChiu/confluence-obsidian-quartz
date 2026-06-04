---
title: "ZFS - How to Add New Drives into Existing ZPool in Mirror Mode"
created: 2025-12-20T15:21:16.989-06:00
modified: 2026-01-10T20:57:57.794-06:00
parent: "[[Zettabyte File System (ZFS)]]"
children: []
---
# Find Disk IDs
```
lsblk -o NAME,SIZE,MODEL,SERIAL

ls -l /dev/disk/by-id/
...
lrwxrwxrwx 1 root root  9 Dec 16 14:57 ata-ST18000NT001-3LU101_ZR5FF5EW -> ../../sdc
lrwxrwxrwx 1 root root  9 Dec 16 14:57 ata-ST18000NT001-3LU101_ZR5FFCVC -> ../../sdd
...
```
# If it was used in Ceph and/or Device Mapper Exist

Remove the device-mapper mapping (if present)
```
ls /dev/mapper | grep ceph
dmsetup remove /dev/mapper/ceph--*
```

Remove LVM metadata completely
```
pvremove -ff /dev/sdh
or
pvremove -ff -y /dev/sdh
```
# Wipe Old Filesystem Signatures
```
wipefs -a /dev/disk/by-id/ata-ST18000NT001-3LU101_ZR5FF5EW
wipefs -a /dev/disk/by-id/ata-ST18000NT001-3LU101_ZR5FFCVC

sgdisk --zap-all /dev/disk/by-id/ata-ST18000NT001-3LU101_ZR5FF5EW
sgdisk --zap-all /dev/disk/by-id/ata-ST18000NT001-3LU101_ZR5FFCVC
```
# Add the Mirror VDEV to the Pool
```
zpool add $Z_POOL_NAME_HERE mirror \
  /dev/disk/by-id/ata-ST18000NT001-3LU101_ZR5FF5EW \
  /dev/disk/by-id/ata-ST18000NT001-3LU101_ZR5FFCVC
```
# Verify
```
zpool status
```
