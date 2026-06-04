---
title: "MBR - Viewing"
created: 2020-06-09T16:27:00.876-05:00
modified: 2020-06-09T17:39:33.335-05:00
parent: "[[Master Boot Record (MBR)]]"
children: []
---
### Method 1
```
# copy the first 512 bytes of /dev/sda to a new file mbr.bin
dd if=/dev/sda of=mbr.bin bs=512 count=1

# dump file in -xa format
od -xa mbr.bin
```
### Method 2 (hexedit)
```
hexedit /dev/sda
```
### Method 3
```
sudo dd if=/dev/sdd ibs=512 count=1 | hexdump -C
```
