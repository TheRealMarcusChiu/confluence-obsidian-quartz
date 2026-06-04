---
title: "NTFS - Transaction"
created: 2020-06-15T21:09:09.609-05:00
modified: 2020-06-15T21:13:10.817-05:00
parent: "[[NTFS - System Files - $LogFile]]"
children: []
---
### NTFS Transaction - Example

when a program is modifying a file, the following steps might occur:
- read MFT entry for directory entry file it's in
- read directory entry file it's in
- read MFT record for file
- write file
- update A time in file's MFT record
- update M time in file's MFT record
- update A time in directory entry for that file
- update M time in directory entry for that file

the list gets considerably longer if the file is encrypted or compressed

if the program fails before all transaction steps are complete due to a crash, the system rools back to the previous values in order to maintain consistency of the file system

This is not to be confused with running CHKDSK. NTFS itself is providing a reliable, crash-resilient environment
