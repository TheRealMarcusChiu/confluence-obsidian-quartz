---
title: "UNIX - File Types (ls -l)"
created: 2019-03-17T14:28:31.408-05:00
modified: 2020-01-02T02:19:23.700-06:00
parent: "[[UNIX - File Stuff]]"
children: []
---
### ls Command
```
ls -l /dev/ttyS0
crw-rw-r--    1 root     dialout    4,  64 Aug 19 18:56 /dev/ttyS0
```
### File Types

```merge-table
{
  "rows": [
    [
      {
        "content": "character code",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "file type",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "-",
      "regular file"
    ],
    [
      "d",
      "directory"
    ],
    [
      "s",
      "symbolic link"
    ],
    [
      "",
      "socket"
    ],
    [
      "",
      "named pipe"
    ],
    [
      "c",
      "character device file"
    ],
    [
      "b",
      "block device file"
    ],
    [
      "",
      "door"
    ]
  ]
}
```
