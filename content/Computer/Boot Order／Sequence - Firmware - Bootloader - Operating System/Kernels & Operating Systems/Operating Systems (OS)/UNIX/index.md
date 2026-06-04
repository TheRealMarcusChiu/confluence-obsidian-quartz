---
title: "UNIX"
created: 2019-03-15T02:21:01.639-05:00
modified: 2026-05-21T18:06:53.568-05:00
parent: "[[Operating Systems (OS)]]"
children:
  - "[[UNIX - General]]"
  - "[[UNIX Versions]]"
---
###### UNIX
````excerpt
- is a simple [[Operating Systems (OS)|operating system]], but it takes a genius to understand the simplicity
- originally Uniplexed Information and Computing Service (UNICS)
- was developed in AT&T’s Bell Labs back in the mid-to-late 1960’s
- had a single [[Disk (Format - Filesystems／File-Systems (FS))|file system]] that programs use to communicate with each other. This is why “everything is a file” on [[Linux]] – including hardware devices and special files that provide system information or other data. It’s also why only [[Windows]] has drive letters, which it inherited from DOS — on other operating systems, every file on the system is part of a single directory hierarchy.
````
^excerpt

# Versions

```merge-table
{
  "rows": [
    [
      "```dataview\nLIST\nFROM \"\"\nWHERE file.folder = [[UNIX Versions]].file.folder + \"/\" + [[UNIX Versions]].file.name\n```",
      "![[UNIX/unix-timeline.png|500]]\n\n[https://commons.wikimedia.org/wiki/File:Unix_timeline.en.svg](https://commons.wikimedia.org/wiki/File:Unix_timeline.en.svg)"
    ]
  ]
}
```
# General
```dataview
LIST
FROM ""
WHERE file.folder = [[UNIX - General]].file.folder + "/" + [[UNIX - General]].file.name
```
