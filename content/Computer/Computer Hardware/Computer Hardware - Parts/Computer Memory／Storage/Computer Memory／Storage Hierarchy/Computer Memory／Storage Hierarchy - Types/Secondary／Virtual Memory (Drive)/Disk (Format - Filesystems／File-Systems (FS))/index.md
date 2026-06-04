---
title: "Disk (Format - Filesystems／File-Systems (FS))"
created: 2019-03-15T01:53:14.818-05:00
modified: 2025-09-24T12:51:41.042-05:00
parent: "[[Secondary／Virtual Memory (Drive)]]"
children:
  - "[[Another Union File System (AuFS)]]"
  - "[[Apple File System (APFS)]]"
  - "[[Btrfs]]"
  - "[[Ceph Storage Cluster - CephFS - Ceph File System]]"
  - "[[EXTended Filesystem (MINIX - EXT - EXT2 - EXT3 - EXT4)]]"
  - "[[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)]]"
  - "[[Google File System (GFS - GoogleFS)]]"
  - "[[HFS Plus - HFS+ - Mac OS Extended - HFS Extended]]"
  - "[[Hierarchical File System (HFS) - Mac OS Standard - HFS Standard]]"
  - "[[New Technology File System (NTFS)]]"
  - "[[TernFS]]"
  - "[[Union File System (UnionFS)]]"
  - "[[Unix File System (UFS) - Berkeley／BSD Fast File System (FFS)]]"
  - "[[X File System (XFS)]]"
  - "[[Zettabyte File System (ZFS)]]"
---
###### Disk (Format - Filesystems/File-Systems (FS))
````excerpt
- <strong>format</strong> is called <em>low-level format</em>
- <strong>filesystem</strong> is called <em>high-level format</em>

a <strong>file system</strong> or <strong>filesystem</strong> (<strong>fs</strong>) controls how data is stored and retrieved
````
^excerpt

###### TODO

[Linux System Administrators Guide - https://www.tldp.org/LDP/sag/html/filesystems.html](https://www.tldp.org/LDP/sag/html/filesystems.html)
# Comparisons
- [[Disk (Format - Filesystems／File-Systems (FS)) - Comparisons|Disk (Format - Filesystems/File-Systems (FS)) - Comparisons]]

![](https://www.youtube.com/watch?v=_h30HBYxtws)
# File System Types

```merge-table
{
  "rows": [
    [
      {
        "content": "File System",
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "content": "Introduced",
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "content": "OS",
        "header": true,
        "bg": "#c1c7d0",
        "align": "center"
      },
      {
        "content": "Max File Size",
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "content": "Max FS Size",
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "content": "Journal",
        "header": true,
        "bg": "#c1c7d0"
      }
    ],
    [
      {
        "content": "[[File Allocation Table (FAT) - (FAT12 - FAT16 - FAT32 - VFAT)]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "",
      "",
      ""
    ],
    [
      {
        "content": "- FAT16",
        "bg": "#F4F5F7"
      },
      "1983",
      "MSDOS V2",
      "4GB",
      "16MB to 8GB",
      "N"
    ],
    [
      {
        "content": "- FAT32",
        "bg": "#F4F5F7"
      },
      "1997",
      "Windows 95",
      "4GB",
      "8GB to 2TB",
      "N"
    ],
    [
      {
        "content": "High Performance File System (HPFS)",
        "bg": "#F4F5F7"
      },
      "1988",
      "OS/2",
      "4GB",
      "2TB",
      "N"
    ],
    [
      {
        "content": "[[New Technology File System (NTFS)]]",
        "bg": "#F4F5F7"
      },
      "1993",
      "Windows NT",
      "16EB",
      "16EB",
      "Y"
    ],
    [
      {
        "content": "Hierarchical File System (HFS, HFS+)",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "",
      "",
      ""
    ],
    [
      {
        "content": "- HFS",
        "bg": "#F4F5F7"
      },
      "1993",
      "IBM",
      "",
      "",
      "N"
    ],
    [
      {
        "content": "- HFS+",
        "bg": "#F4F5F7"
      },
      "1998",
      "Mac OS",
      "8EiB",
      "8EiB",
      "N"
    ],
    [
      {
        "content": "[[Unix File System (UFS) - Berkeley／BSD Fast File System (FFS)|Unix File System (UFS)]]\n\n[[Unix File System (UFS) - Berkeley／BSD Fast File System (FFS)|Berkeley/BSD Fast File System (FFS)]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "",
      "",
      ""
    ],
    [
      {
        "content": "- UFS1",
        "bg": "#F4F5F7"
      },
      "1983",
      "BSD",
      "16GiB to 256TiB",
      "16EiB",
      "N"
    ],
    [
      {
        "content": "- UFS2",
        "bg": "#F4F5F7"
      },
      "2002",
      "FreeBSD",
      "512GiB to 32PiB",
      "512ZiB",
      "N"
    ],
    [
      {
        "content": "Extended File Allocation Table (exFAT)",
        "bg": "#F4F5F7"
      },
      "2006",
      "Windows",
      "16EiB",
      "64ZiB",
      "N"
    ],
    [
      {
        "content": "[[EXTended Filesystem (MINIX - EXT - EXT2 - EXT3 - EXT4)|EXTended Filesystem (EXT)]]",
        "bg": "#F4F5F7"
      },
      "",
      "",
      "",
      "",
      ""
    ],
    [
      {
        "content": "- ext",
        "bg": "#F4F5F7"
      },
      "1992",
      "Linux",
      "2GB",
      "2GB",
      "N"
    ],
    [
      {
        "content": "- ext2",
        "bg": "#F4F5F7"
      },
      "1993",
      "Linux",
      "16GB to 2TB4",
      "2TB to 32TB",
      "N"
    ],
    [
      {
        "content": "- ext3",
        "bg": "#F4F5F7"
      },
      "1999",
      "Linux",
      "16GB to 2TB4",
      "2TB to 32TB",
      "Y"
    ],
    [
      {
        "content": "- ext4",
        "bg": "#F4F5F7"
      },
      "2008",
      "Linux",
      "16TiB",
      "1 EiB",
      "Y"
    ],
    [
      {
        "content": "ReiserFS3",
        "bg": "#F4F5F7"
      },
      "2001",
      "Linux",
      "8TB8",
      "16TB",
      "Y"
    ],
    [
      {
        "content": "ReiserFS4",
        "bg": "#F4F5F7"
      },
      "2005",
      "Linux",
      "?",
      "?",
      "Y"
    ],
    [
      {
        "content": "[[X File System (XFS)]]",
        "bg": "#F4F5F7"
      },
      "1994",
      "IRIX",
      "9EB",
      "9EB",
      "Y"
    ],
    [
      {
        "content": "Journaled File System (JFS)",
        "bg": "#F4F5F7"
      },
      "?",
      "AIX",
      "8EB",
      "512TB to 4PB",
      "Y"
    ],
    [
      {
        "content": "Veritas File System (VxFS)",
        "bg": "#F4F5F7"
      },
      "1991",
      "SVR4.0",
      "16EB",
      "?",
      "Y"
    ],
    [
      {
        "content": "[[Zettabyte File System (ZFS)]]",
        "bg": "#F4F5F7"
      },
      "2004",
      "Solaris 10",
      "1YB",
      "16EB",
      "N"
    ],
    [
      {
        "content": "[[Hierarchical File System (HFS) - Mac OS Standard - HFS Standard|Hierarchical File System (HFS)]]",
        "bg": "#F4F5F7"
      },
      "1985",
      "Mac OS",
      "2GB",
      "",
      ""
    ],
    [
      {
        "content": "[[HFS Plus - HFS+ - Mac OS Extended - HFS Extended|HFS Plus - HFS Extended]]",
        "bg": "#F4F5F7"
      },
      "1998",
      "Mac OS",
      "8EiB",
      "8EiB",
      "Y"
    ],
    [
      {
        "content": "[[Apple File System (APFS)]]",
        "bg": "#F4F5F7"
      },
      "2017",
      "Mac OS",
      "8EiB",
      "8EiB",
      ""
    ],
    [
      {
        "content": "[[Btrfs]]",
        "bg": "#F4F5F7"
      },
      "2007",
      "Linux",
      "16EiB",
      "16EiB",
      ""
    ],
    [
      {
        "content": "Union Based",
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      }
    ],
    [
      {
        "content": "[[Union File System (UnionFS)]]",
        "bg": "#F4F5F7"
      },
      "",
      "Linux",
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[Another Union File System (AuFS)]]",
        "bg": "#F4F5F7"
      },
      "",
      "Linux",
      "",
      "",
      ""
    ],
    [
      {
        "content": "Network Based",
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      },
      {
        "header": true,
        "bg": "#c1c7d0"
      }
    ],
    [
      {
        "content": "[[Network File System (NFS)]]",
        "bg": "#F4F5F7"
      },
      "1984",
      "UNIX",
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[SSHFS]]",
        "bg": "#F4F5F7"
      },
      "",
      "Linux",
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[Common Internet File System (CIFS)]]",
        "bg": "#F4F5F7"
      },
      "",
      "Windows",
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[TernFS]]",
        "bg": "#F4F5F7"
      },
      "2025",
      "",
      "",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
