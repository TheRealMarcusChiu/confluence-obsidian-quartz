---
title: "NTFS - File Attributes - $STANDARD_INFORMATION"
created: 2020-06-15T14:10:58.467-05:00
modified: 2020-06-16T23:06:23.591-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$STANDARD\_INFORMATION
- a [[NTFS - File Attributes|NTFS File Attribute]] that includes information such as: MAC timestamps, DOS file permissions, link count, flags, owner, & security id

### \$STANDARD\_INFORMATION

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
      {
        "content": "24",
        "align": "center"
      },
      "[[NTFS - File Attributes - Header|attribute header]]",
      {
        "content": "![[NTFS - File Attributes - $STANDARD_INFORMATION/ntfs-mft-file-attribute-standard-information.png|600]]",
        "rowspan": 14
      }
    ],
    [
      {
        "content": "8",
        "align": "center"
      },
      "creation data and time (UTC)"
    ],
    [
      {
        "content": "8",
        "align": "center"
      },
      "last modified date and time (UTC)"
    ],
    [
      {
        "content": "8",
        "align": "center"
      },
      "$MFT modified date and time (UTC)"
    ],
    [
      {
        "content": "8",
        "align": "center"
      },
      "last accessed date and time (UTC)"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "flags (see table below)"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "maximum number of versions"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "version number"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "class ID"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "owner ID"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "security ID"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "quota charged"
    ],
    [
      {
        "content": "4",
        "align": "center"
      },
      "quota charged padding?"
    ],
    [
      {
        "content": "8",
        "align": "center"
      },
      "update sequence number"
    ]
  ]
}
```
### Flag Values (DOS Permissions)

same as [[NTFS - File Attributes - $FILE_NAME|$FILE_NAME]]

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
