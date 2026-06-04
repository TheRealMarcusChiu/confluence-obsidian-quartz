---
title: "initrd (Initial RAM Disk) vs initramfs (Initial RAM File System)"
created: 2019-08-27T21:37:30.206-05:00
modified: 2024-09-01T14:14:14.617-05:00
parent: "[[UNIX - Boot Process]]"
children:
  - "[[Inspecting the Content of an Initrd File]]"
---
<strong><code>initrd</code> (Initial [[RAM Disk|Ram Disk]]</strong><strong>)</strong> is a scheme for loading a temporary root [[Disk (Format - Filesystems／File-Systems (FS))|file system]] into [[Primary／Main／Physical Computer Memory／Storage|memory]].

2 different methods of achieving this:

```merge-table
{
  "rows": [
    [
      {
        "content": "initrd",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is a fixed-size block device, which requires to be 'formatted' by a filesystem such as ext2\n- it sits on /dev/ram0 by default\n- cannot be enlarged or shortened"
    ],
    [
      {
        "content": "initramfs",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- a [[Data Archiving Formats - Data Compression Formats|cpio archive]] which is simply unpacked during boot to ramfs memory\n- this memory is of dynamic size and thus can be shortened or enlarged as needed"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
