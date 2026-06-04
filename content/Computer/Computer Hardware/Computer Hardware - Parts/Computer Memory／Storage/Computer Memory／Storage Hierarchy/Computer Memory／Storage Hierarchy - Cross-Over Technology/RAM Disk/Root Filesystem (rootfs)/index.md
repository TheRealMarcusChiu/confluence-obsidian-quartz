---
title: "Root Filesystem (rootfs)"
created: 2020-01-02T00:25:00.279-06:00
modified: 2026-05-21T03:48:25.500-05:00
parent: "[[RAM Disk]]"
children: []
---
###### Root Filesystem (rootfs)
````excerpt
- is the [[Disk (Format - Filesystems／File-Systems (FS))|filesystem]] contained on the same disk partition on which the [[Root Filesystem (rootfs)|root directory (/)]] is located
- it is the filesystem on top of which all other file systems are mounted as the system boots up
- should generally be small, since it contains very critical files and a small, infrequently modified filesystem has a better chance of not getting corrupted. A corrupted root filesystem will generally mean that the system becomes unbootable except with special measures
- the root directory generally doesn't contain any files, except perhaps on older systems where the standard boot image for the system, usually called /vmlinuz was kept there. (Most distributions have moved those files the the /boot directory. Otherwise, all files are kept in subdirectories under the root filesystem
````
^excerpt
