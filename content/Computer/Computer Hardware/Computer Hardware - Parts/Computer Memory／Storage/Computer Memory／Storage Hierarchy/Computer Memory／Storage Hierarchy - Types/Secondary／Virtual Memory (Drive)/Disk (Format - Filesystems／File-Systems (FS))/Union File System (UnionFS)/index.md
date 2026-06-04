---
title: "Union File System (UnionFS)"
created: 2019-10-15T21:42:55.919-05:00
modified: 2019-10-15T21:45:28.785-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS))]]"
children:
  - "[[UnionFS - Copy-on-Write (CoW)]]"
---
<strong>Unionfs</strong> is a filesystem service for Linux, FreeBSD and NetBSD which implements a [union mount](https://en.wikipedia.org/wiki/Union_mount) for other [[Disk (Format - Filesystems／File-Systems (FS))|file systems]]. It allows files and directories of separate file systems, known as branches, to be transparently overlaid, forming a single coherent file system. Contents of directories which have the same path within the merged branches will be seen together in a single merged directory, within the new, virtual filesystem.

When mounting branches, the priority of one branch over the other is specified. So when both branches contain a file with the same name, one gets priority over the other.

The different branches may be either <em>read-only</em> or <em>read-write</em> file systems, so that writes to the virtual, merged copy are directed to a specific real file system. This allows a file system to appear as writable, but without actually allowing writes to change the file system, also known as [copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write). This may be desirable when the media is physically read-only, such as in the case of Live CDs.
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
