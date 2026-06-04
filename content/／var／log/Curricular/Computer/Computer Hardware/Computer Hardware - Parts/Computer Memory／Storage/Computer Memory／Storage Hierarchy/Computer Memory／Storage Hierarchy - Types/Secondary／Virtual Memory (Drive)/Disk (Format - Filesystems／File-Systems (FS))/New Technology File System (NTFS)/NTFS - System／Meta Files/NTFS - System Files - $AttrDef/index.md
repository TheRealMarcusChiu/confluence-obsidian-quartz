---
title: "NTFS - System Files - $AttrDef"
created: 2020-06-15T21:20:50.057-05:00
modified: 2020-06-15T21:36:00.729-05:00
parent: "[[NTFS - System／Meta Files]]"
children: []
---
###### \$AttrDef
- a type of [[NTFS - System／Meta Files|NTFS System File]]
- located at inode \#4 of the \$MFT
- contains list of [[NTFS - File Attributes|NTFS File Attributes]] available on this version of NTFS
- for each attribute, the following info is provided:
	- attribute name
	- ID
	- usage rules (currently not in use)
	- flags
	    ```merge-table
	    {
	      "rows": [
	        [
	          {
	            "content": "flag",
	            "header": true,
	            "bg": "#F4F5F7"
	          },
	          {
	            "content": "description",
	            "header": true,
	            "bg": "#F4F5F7"
	          }
	        ],
	        [
	          "0x02",
	          "indexed"
	        ],
	        [
	          "0x40",
	          "always resident"
	        ],
	        [
	          "0x80",
	          "can be non-resident"
	        ]
	      ]
	    }
	    ```
	- max size
	- min size

### \$AttrDef - Windows XP Example

```merge-table
{
  "rows": [
    [
      {
        "content": "Attribute ID",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Flags",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- I - indexed\n- R - always resident\n- N - can be nonresident",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Min Size",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Max Size",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "0x10",
      "[[NTFS - File Attributes - $STANDARD_INFORMATION|$STANDARD_INFORMATION]]",
      "0x40",
      "R",
      "0x30",
      "0x48"
    ],
    [
      "0x20",
      "[[NTFS - File Attributes - $ATTRIBUTE_LIST|$ATTRIBUTE_LIST]]",
      "0x80",
      "N",
      "",
      ""
    ],
    [
      "0x30",
      "[[NTFS - File Attributes - $FILE_NAME|$FILE_NAME]]",
      "0x42",
      "IR",
      "0x44",
      "0x242"
    ],
    [
      "0x40",
      "[[NTFS - File Attributes - $OBJECT_ID|$OBJECT_ID]]",
      "0x40",
      "R",
      "",
      "0x100"
    ],
    [
      "0x50",
      "[[NTFS - File Attributes - $SECURITY_DESCRIPTOR|$SECURITY_DESCRIPTOR]]",
      "0x80",
      "N",
      "0x2",
      "0x100"
    ],
    [
      "0x60",
      "[[NTFS - File Attributes - $VOLUME_NAME|$VOLUME_NAME]]",
      "0x40",
      "R",
      "0xC",
      "0xC"
    ],
    [
      "0x70",
      "[[NTFS - File Attributes - $VOLUME_INFORMATION|$VOLUME_INFORMATION]]",
      "0x40",
      "R",
      "",
      ""
    ],
    [
      "0x80",
      "[[NTFS - File Attributes - $DATA|$DATA]]",
      "0x00",
      "",
      "",
      ""
    ],
    [
      "0x90",
      "[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ROOT]]",
      "0x40",
      "R",
      "",
      ""
    ],
    [
      "0xA0",
      "[[NTFS - File Attributes - $INDEX_ALLOCATION & $INDEX_ROOT﻿﻿|$INDEX_ALLOCATION]]",
      "0x80",
      "N",
      "",
      ""
    ],
    [
      "0xB0",
      "[[NTFS - File Attributes - $BITMAP|$BITMAP]]",
      "0x80",
      "N",
      "",
      ""
    ],
    [
      "0xC0",
      "[[NTFS - File Attributes - $REPARSE_POINT／$SYMBOLIC_LINK|$REPARSE_POINT]]",
      "0x80",
      "N",
      "0x4000",
      ""
    ],
    [
      "0xD0",
      "[[NTFS - File Attributes - $EA_INFORMATION and $EA|$EA_INFORMATION]]",
      "0x40",
      "R",
      "0x8",
      "0x8"
    ],
    [
      "0xE0",
      "[[NTFS - File Attributes - $EA_INFORMATION and $EA|$EA]]",
      "0x00",
      "",
      "",
      "0x10000"
    ],
    [
      "0xF0",
      "$PROPERTY_SET",
      "",
      "",
      "",
      ""
    ],
    [
      "0x100",
      "[[NTFS - File Attributes - $LOGGED_UTILITY_STREAM|$LOGGED_UTILITY_STREAM]]",
      "0x80",
      "N",
      "",
      "0x10000"
    ]
  ]
}
```
