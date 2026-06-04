---
title: "Inode (Index Node)"
created: 2020-01-06T13:41:16.130-06:00
modified: 2020-01-06T13:59:27.852-06:00
parent: "[[UNIX - System File Tables (File Descriptor - Open File - Vnode - Inode)]]"
children: []
---
<strong>Inode (Index Node)</strong> is a [[Data Structures|data structure]] in a [[Unix File System (UFS) - Berkeley／BSD Fast File System (FFS)|Unix-style file system]] that describes a [[Disk (Format - Filesystems／File-Systems (FS))|file-system]] object such as a [file](https://en.wikipedia.org/wiki/Computer_file) or a [directory](https://en.wikipedia.org/wiki/Directory_(computing))

Each inode stores:
- object's metadata - (times of last change, access, modification, owner, permissions, etc)
- disk block location(s) of the object's data

Directories are lists of names assigned to inodes. A directory contains an entry for itself, its parent, and each of its children
### Inode Pointer Structure
The <strong>inode pointer structure</strong> is a structure adopted by the [inode](https://en.wikipedia.org/wiki/Inode) of a file in the [[Unix File System (UFS) - Berkeley／BSD Fast File System (FFS)|Unix File System (UFS)]] to list the addresses of a file's [data blocks](https://en.wikipedia.org/wiki/Block_(data_storage)). It is also adopted by many related file systems, including the [[EXTended Filesystem (MINIX - EXT - EXT2 - EXT3 - EXT4)|ext3 filesystem]]

In the past, the structure may have consisted of eleven or thirteen pointers, but most modern file systems use fifteen pointers. These pointers consist of (assuming 15 pointers in the inode):
- <strong>12 pointers</strong> that directly point to blocks of the file's data (direct pointers)
- <strong>1 singly indirect pointer</strong> (a pointer that points to a block of pointers that then point to blocks of the file's data)
- <strong>1 doubly indirect pointer</strong> (a pointer that points to a block of pointers that point to other blocks of pointers that then point to blocks of the file's data)
- <strong>1 triply indirect pointer</strong> (a pointer that points to a block of pointers that point to other blocks of pointers that point to other blocks of pointers that then point to blocks of the file's data)

NOTE: a block of pointers can be of any size, unlike the inode entry itself which is fixed to 15 pointers

![[Inode (Index Node)/inode-structure.png|400]]
### Commands

to get inode number of a filesystem object(s)
```bash
ls -i
```

to retrieve the metadata of a filesystem object
```bash
stat [filesystem object]
```
