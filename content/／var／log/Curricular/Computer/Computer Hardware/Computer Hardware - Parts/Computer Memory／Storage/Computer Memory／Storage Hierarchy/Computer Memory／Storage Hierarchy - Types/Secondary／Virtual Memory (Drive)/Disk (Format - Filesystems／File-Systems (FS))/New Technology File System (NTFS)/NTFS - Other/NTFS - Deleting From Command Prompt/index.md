---
title: "NTFS - Deleting From Command Prompt"
created: 2020-06-15T23:06:31.754-05:00
modified: 2020-06-16T16:15:50.200-05:00
parent: "[[NTFS - Other]]"
children: []
---
when a file is deleted at command prompt:
- the file does not go into the [[NTFS - Recycle Bin|Recycle Bin]]
- part of the file or the complete file can be recovered using forensic tools

tasks performed by the [[Operating Systems (OS)|operating system]] (also when a file is permanently deleted from the [[NTFS - Recycle Bin|Recycle Bin]]):
- the clusters are made available for new data
- the [[NTFS - File Attributes - $BITMAP|MFT attribute $BITMAP]] is updated
- file attributes of the MFT are marked as available
- any connections to the inodes and Virtual Filenames (VFN) / Logical Cluster Number (LCN) cluster locations are removed
- the list of links to the cluster locations is deleted
