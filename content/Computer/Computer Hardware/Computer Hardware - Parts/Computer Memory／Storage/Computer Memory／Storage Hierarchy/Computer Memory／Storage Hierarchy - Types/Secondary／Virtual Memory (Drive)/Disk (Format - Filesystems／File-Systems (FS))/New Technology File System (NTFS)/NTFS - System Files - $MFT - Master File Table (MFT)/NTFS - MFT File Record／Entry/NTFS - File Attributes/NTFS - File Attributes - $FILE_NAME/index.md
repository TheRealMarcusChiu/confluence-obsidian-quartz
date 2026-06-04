---
title: "NTFS - File Attributes - $FILE_NAME"
created: 2020-06-15T14:23:36.924-05:00
modified: 2020-06-16T23:10:50.791-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$FILE\_NAME
- a type of [[NTFS - File Attributes|NTFS File Attribute]]

### Contains
- the inode number of the parent directory that contains this file. Parent Directory Reference contains 2 parts:
	- 6 bytes for the inode number of the parent
	- 2 bytes for an internal sequence number for NTFS integrity checks
- timestamps are repeated (same as in [[NTFS - File Attributes - $STANDARD_INFORMATION|$STANDARD_INFORMATION]] attribute) but here the timestamps are often out of sync
	- they are not updated unless the file name changes
	- only if the file is renamed, the times are also updated
- file size (file length) both the:
	- actual size of the file
	- amount of disk space allocated (i.e. the actual size + cluster slack are recorded)
- flags (same as in [[NTFS - File Attributes - $STANDARD_INFORMATION|$STANDARD_INFORMATION]])
- the name of the file (is padded with 0x00 to even 8 byte cutoff point)
- if file name creation is turned on, any files with long names will have a second \$FILE\_NAME attribute that contains the short name

### \$FILE\_NAME

```merge-table
{
  "rows": [
    [
      {
        "content": "Bytes",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Diagram",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "24",
      "attribute header",
      {
        "content": "![[NTFS - File Attributes - $FILE_NAME/ntfs-mft-file-attribute-file-name.png]]",
        "rowspan": 13
      }
    ],
    [
      "6",
      "$MFT record number of parent directory"
    ],
    [
      "2",
      "sequence number of the parent directory"
    ],
    [
      "8",
      "creation date and time (UTC)"
    ],
    [
      "8",
      "last modified date and time (UTC)"
    ],
    [
      "8",
      "$MFT modified date and time (UTC)"
    ],
    [
      "8",
      "last accessed date and time (UTC)"
    ],
    [
      "8",
      "allocated size of the file"
    ],
    [
      "8",
      "actual size of the file"
    ],
    [
      "4",
      "flags (see table below)"
    ],
    [
      "4",
      "reparse value"
    ],
    [
      "1",
      "filename length in characters"
    ],
    [
      "N",
      "filename namespace (0=POSIX 1=Win32 2=DOS)"
    ]
  ]
}
```
### Flag Values (DOS Permissions)

same as [[NTFS - File Attributes - $STANDARD_INFORMATION|$STANDARD_INFORMATION]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Hex",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0x0001",
      "read only"
    ],
    [
      "0x0002",
      "hidden"
    ],
    [
      "0x0004",
      "system"
    ],
    [
      "0x0020",
      "archive"
    ],
    [
      "0x0040",
      "device"
    ],
    [
      "0x0080",
      "normal"
    ],
    [
      "0x0100",
      "temporary"
    ],
    [
      "0x0200",
      "sparse file"
    ],
    [
      "0x0400",
      "reparse point"
    ],
    [
      "0x0800",
      "compressed"
    ],
    [
      "0x1000",
      "offline"
    ],
    [
      "0x2000",
      "not content indexed"
    ],
    [
      "0x4000",
      "encrypted"
    ]
  ]
}
```
