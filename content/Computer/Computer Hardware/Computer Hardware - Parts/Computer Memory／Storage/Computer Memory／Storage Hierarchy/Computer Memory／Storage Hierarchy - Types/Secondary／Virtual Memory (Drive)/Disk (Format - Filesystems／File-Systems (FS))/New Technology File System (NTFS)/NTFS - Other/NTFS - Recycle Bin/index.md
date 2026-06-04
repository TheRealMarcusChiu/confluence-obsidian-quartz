---
title: "NTFS - Recycle Bin"
created: 2020-06-15T23:02:57.240-05:00
modified: 2020-06-15T23:06:20.976-05:00
parent: "[[NTFS - Other]]"
children: []
---
deleted files are moved to the Recycle Bin in the RECYCLER directory

files are renamed in the format Dx\#.ext, where:
- x = lowercase drive letter from where the file was deleted
- \# = sequence number of the order in which the file was deleted
- ext = original file extension

every user who has deleted at least one file has an individual subdirectory, named with the user's SID

user's subdirectory contains desktop.ini, INFO2, and any files that this user has deleted

INFO2 file:
- keeps a lists of all files in the RECYCLER subdirectory
- stores the original path/file name
- contains [[ASCII]] data, [[Unicode]] data, and date/time of deletion for each deleted file or folder

once created, user;s subdirectory is never deleted
