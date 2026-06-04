---
title: "NTFS - System Files - $LogFile"
created: 2020-06-15T21:06:37.299-05:00
modified: 2020-06-15T21:09:07.591-05:00
parent: "[[NTFS - System／Meta Files]]"
children:
  - "[[NTFS - Transaction]]"
---
###### \$LogFile
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- all instances of access to the objects on disk are considered series of transactions on NTFS
- records transaction progress
- contains detailed info only about recent transactions (it scrolls around in circular fashion) therefore, it is not the whole volume history
- once full, the first entry is overwritten with the next new entry
- located at inode \#2 of the \$MFT
