---
title: "NTFS - File Attributes - $VOLUME_INFORMATION"
created: 2020-06-15T14:36:42.169-05:00
modified: 2020-06-15T21:24:14.999-05:00
parent: "[[NTFS - File Attributes]]"
children: []
---
###### \$VOLUME\_INFORMATION
- a type of [[NTFS - File Attributes|NTFS File Attribute]]
- contains info about the volume

### Contains
- NTFS volume name
- NTFS version number
- flags to signal operations to be performed on boot
    ```merge-table
    {
      "rows": [
        [
          {
            "content": "Flag Value",
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
          "dirty"
        ],
        [
          "0x0002",
          "resize LogFile"
        ],
        [
          "0x0004",
          "upgrade on mount"
        ],
        [
          "0x0008",
          "mounted on NT4"
        ],
        [
          "0x0010",
          "delete USN underway"
        ],
        [
          "0x0020",
          "repair Object IDs"
        ],
        [
          "0x8000",
          "modified by chkdsk"
        ]
      ]
    }
    ```
- if the dirty flag is set, on the next reboot, chkdsk /f will run
