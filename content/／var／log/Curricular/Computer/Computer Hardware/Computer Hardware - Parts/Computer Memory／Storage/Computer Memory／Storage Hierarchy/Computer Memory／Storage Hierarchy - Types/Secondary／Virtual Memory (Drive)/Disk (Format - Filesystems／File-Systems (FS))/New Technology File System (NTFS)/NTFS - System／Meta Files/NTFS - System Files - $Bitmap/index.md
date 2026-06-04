---
title: "NTFS - System Files - $Bitmap"
created: 2020-06-15T21:41:54.680-05:00
modified: 2020-06-15T22:14:29.319-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$Bitmap
- is a type of [[NTFS - System／Meta Files|NTFS System File]]
- this file describes the allocation status of each cluster in the file system
- inode \#6 in \$MFT
- [[NTFS - File Attributes - $DATA|$DATA attribute]] in the file contains a string of bytes where each bit indicates whether the corresponding cluster is:
	- available (0)
	- allocated (1)
- the size of \$DATA is multiple of 8. Since each byte contains 8 bits, this is equivalent to saying that NTFS bitmap describes the disk in chunks of 64 clusters. However, in most cases the real size of a disk is not a multiple of 64 NTFS clusters. To avoid a mapping mismatch, there is usually a section at the end of the \$Bitmap file that corresponds to the space beyond the end of the drive, and all bits of that section are always marked as 1
- the \$DATA attribute is always nonresident
- \$BITMAP attribute is used to describe the allocation status of index records and [[NTFS - MFT File Record／Entry|MFT entries]]
- the Defrag utility would want each byte in the bitmap to be either 0x00 or 0xFF. Anything else is "a hole" requiring a defragmentation
