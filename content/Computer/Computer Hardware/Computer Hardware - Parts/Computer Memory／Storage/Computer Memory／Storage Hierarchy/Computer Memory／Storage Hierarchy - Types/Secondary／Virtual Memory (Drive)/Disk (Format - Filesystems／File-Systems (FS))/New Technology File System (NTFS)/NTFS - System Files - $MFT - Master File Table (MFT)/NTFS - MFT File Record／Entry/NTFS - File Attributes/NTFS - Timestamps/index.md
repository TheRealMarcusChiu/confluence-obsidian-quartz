---
title: "NTFS - Timestamps"
created: 2020-06-15T14:15:57.784-05:00
modified: 2020-06-15T14:20:08.751-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
MAC times are stored in a number of place in an [[NTFS - MFT File Record／Entry|NTFS file entry]]:
- [[NTFS - File Attributes - $STANDARD_INFORMATION|$STANDARD_INFORMATION]] - timestamps are kept current
- \$FILE\_NAME - timestamps are outdated

File access time is the last time that the file was accessed in any way and has granularity of 1 hour (this prevents constant excessive update to the metadata)

Windows converts:
- local time to UTC time for storage
- UTC time to local time for display

Interpretation problems occur if disk is examined on a system with a different timezone setting
