---
title: "NTFS - Volume Reparse (Mount) Points"
created: 2020-06-15T22:53:48.059-05:00
modified: 2020-06-15T22:59:09.607-05:00
parent: "[[NTFS - System Files - $Reparse]]"
children: []
---
###### Volume Reparse (Mount) Points

reparse points are similar to Unix Mount Points

![[NTFS - Volume Reparse (Mount) Points/ntfs-reparse-mount-points.png|301]]

directory on NTFS is actually a root of another volume

allows a directory tree to replace multiple drive letters

similar to multiple hard drives, CD/DVD ROM, and floppy drives as they appear as subdirectories on [[UNIX|Unix]] as a single tree:
<span style="white-space: pre-wrap"><code>    /dev/hda</code><br><code>    /dev/hdb</code><br><code>    /dev/cdrom</code><br><code>    /dev/floppy</code></span>

Those same four devices would be appearing as C:, D:, E:, A:, respectively, on [[Windows]]
