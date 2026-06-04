---
title: "NTFS - Volume Boot Record (VBR) or Partition Boot Sector (PBS)"
created: 2020-06-10T20:07:24.700-05:00
modified: 2025-06-10T16:34:51.952-05:00
parent: "[[New Technology File System (NTFS)]]"
children:
  - "[[NTFS - BIOS Parameter Block (BPB) & Extended BPB (EBPB)]]"
---
###### Volume Boot Record (VBR) or Partition Boot Sector (PBS)
````excerpt
- is a type of [[Partition／Volume Boot Record／Sector (VBR)|Partition/Volume Boot Record/Sector (VBR)]] for [[New Technology File System (NTFS)|NTFS Volume]]
- all values are stored in [[Big Endian - Little Endian|little endian]] order (except strings)
````
^excerpt

# VBR/PBS - Simple

```merge-table
{
  "rows": [
    [
      {
        "content": "Byte Offset",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Field Length",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Field Name",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">0x00</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">3 bytes</font>",
        "align": "center"
      },
      "<font style=\"color: rgb(255,0,0);\">Jump Instruction</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,0);\">0x03</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">8 bytes</font>",
        "align": "center"
      },
      "<font style=\"color: rgb(255,0,0);\">OEM ID</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,128);\">0x0B</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,128);\">25 bytes</font>",
        "align": "center"
      },
      "<font style=\"color: rgb(0,128,128);\">BIOS Partition Block (BPB)</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,128);\">0x24</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,128);\">48 bytes</font>",
        "align": "center"
      },
      "<font style=\"color: rgb(0,128,128);\">Extended BPB (EBPB)</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,153,0);\">0x54</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,153,0);\">426 bytes</font>",
        "align": "center"
      },
      "<font style=\"color: rgb(255,153,0);\">Bootstrap Code</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(255,0,255);\">0x01FE</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,255);\">2 bytes</font>",
        "align": "center"
      },
      "<font style=\"color: rgb(255,0,255);\">End of Sector Marker</font>"
    ]
  ]
}
```
````excerpt
![[NTFS - Volume Boot Record (VBR) or Partition Boot Sector (PBS)/NTFS-Volume-Boot-Record.png|450]]
````
^excerpt

# VBR/PBS - Detailed

```merge-table
{
  "rows": [
    [
      {
        "content": "Byte Offset",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Field Length",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Typical Value",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Field Name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null,
      {
        "content": "Purpose",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "0x00",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "3 bytes",
        "bg": "red"
      },
      {
        "content": "EB 52 90\n\n0xEB5290",
        "bg": "red"
      },
      {
        "content": "VBR Header",
        "bg": "red",
        "rowspan": 2
      },
      {
        "content": "JMP instruction",
        "bg": "red"
      },
      {
        "content": "causes execution to continue after the data structures in this boot sector",
        "bg": "red"
      }
    ],
    [
      {
        "content": "0x03",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "8 bytes",
        "bg": "red"
      },
      {
        "content": "4E 54 46 53 20 20 20 20\n\n\"<code>NTFS</code>\"\nWord \"NTFS\" followed by four trailing spaces (0x20)",
        "bg": "red"
      },
      {
        "content": "OEM ID",
        "bg": "red"
      },
      {
        "content": "this is the magic cookie that indicates this is an NTFS file system",
        "bg": "red"
      }
    ],
    [
      {
        "content": "0x0B",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "blue"
      },
      {
        "content": "02 00\n\n0x0200",
        "bg": "blue"
      },
      {
        "content": "[[NTFS - BIOS Parameter Block (BPB) & Extended BPB (EBPB)|BPB]]",
        "bg": "blue",
        "rowspan": 11
      },
      {
        "content": "Bytes Per Sector",
        "bg": "blue"
      },
      {
        "content": "the number of bytes in a disk sector.",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x0D",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0x08",
        "bg": "blue"
      },
      {
        "content": "Sectors Per Cluster",
        "bg": "blue"
      },
      {
        "content": "the number of sectors in a cluster. If the value is greater than 0x80, the amount of sectors is 2 to the power of the absolute value of considering this field to be negative.",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x0E",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x0000",
        "bg": "#F4F5F7"
      },
      {
        "content": "- Reserved Sectors\n- unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "- how much space is reserved by the OS at the start of disk\n- this is always 0",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x10",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "3 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x000000",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x13",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x0000",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x15",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0xF8",
        "bg": "blue"
      },
      {
        "content": "Media Descriptor",
        "bg": "blue"
      },
      {
        "content": "the type of drive (e.g. 0xF8 denotes a hard drive)",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x16",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x0000",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x18",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "blue"
      },
      {
        "content": "3F 00\n\n0x003F",
        "bg": "blue"
      },
      {
        "content": "Sectors Per Track",
        "bg": "blue"
      },
      {
        "content": "the number of disk sectors in a drive track",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x1A",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "blue"
      },
      {
        "content": "FF 00\n\n0x00FF",
        "bg": "blue"
      },
      {
        "content": "Number of Heads",
        "bg": "blue"
      },
      {
        "content": "the number of heads on the drive",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x1C",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "4 bytes",
        "bg": "blue"
      },
      {
        "content": "3F 00 00 00\n\n0x0000003F",
        "bg": "blue"
      },
      {
        "content": "Hidden Sectors",
        "bg": "blue"
      },
      {
        "content": "the number of sectors preceding the partition",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x20",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "4 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x00000000",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x24",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0x80",
        "bg": "blue"
      },
      {
        "content": "[[NTFS - BIOS Parameter Block (BPB) & Extended BPB (EBPB)|EBPB]]",
        "bg": "blue",
        "rowspan": 13
      },
      {
        "bg": "blue"
      },
      {
        "content": "physical drive number (identical to [DOS 3.4 EBPB](https://en.wikipedia.org/wiki/BIOS_parameter_block#DOS_3.4_EBPB))",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x25",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0x00",
        "bg": "blue"
      },
      {
        "bg": "blue"
      },
      {
        "content": "Flags etc. (identical to DOS 3.4 EBPB)",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x26",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0x80",
        "bg": "blue"
      },
      {
        "bg": "blue"
      },
      {
        "content": "extended boot signature (0x80 aka \"8.0\") (similar to DOS 3.4 EBPB and [DOS 4.0 EBPB](https://en.wikipedia.org/wiki/BIOS_parameter_block#DOS_4.0_EBPB))",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x27",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x00",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x28",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "8 bytes",
        "bg": "blue"
      },
      {
        "content": "4A F5 7F 00 00 00 00 00\n\n0x00000000007FF54A",
        "bg": "blue"
      },
      {
        "content": "Total Sectors",
        "bg": "blue"
      },
      {
        "content": "the partition size in sectors",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x30",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "8 bytes",
        "bg": "blue"
      },
      {
        "content": "04 00 00 00 00 00 00 00\n\n0x0000000000000004",
        "bg": "blue"
      },
      {
        "content": "file $MFT cluster number",
        "bg": "blue"
      },
      {
        "content": "the logical cluster number that contains the Master File Table",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x38",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "8 bytes",
        "bg": "blue"
      },
      {
        "content": "54 FF 07 00 00 00 00 00\n\n0x000000000007FF54",
        "bg": "blue"
      },
      {
        "content": "file $MFTMirr cluster number",
        "bg": "blue"
      },
      {
        "content": "the logical cluster number that contains a backup of the Master File Table",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x40",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0xF6",
        "bg": "blue"
      },
      {
        "content": "Bytes or Clusters Per File Record Segment",
        "bg": "blue"
      },
      {
        "content": "- a positive value denotes the number of clusters in a File Record Segment\n- a negative value denotes the amount of bytes in a File Record Segment, in which case the size is 2 to the power of the absolute value. (0xF6 = -10 → 2<sup>10</sup> = 1024)",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x41",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "3 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x000000",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x44",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "1 byte",
        "bg": "blue"
      },
      {
        "content": "0x01",
        "bg": "blue"
      },
      {
        "content": "Bytes or Clusters Per Index Buffer",
        "bg": "blue"
      },
      {
        "content": "- a positive value denotes the number of clusters in an Index Buffer\n- a negative value denotes the amount of bytes and it uses the same algorithm for negative numbers as the \"Bytes or Clusters Per File Record Segment.\"",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x45",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "3 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x000000",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "unused",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x48",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "8 bytes",
        "bg": "blue"
      },
      {
        "content": "0x1C741BC9741BA514",
        "bg": "blue"
      },
      {
        "content": "Volume Serial Number",
        "bg": "blue"
      },
      {
        "content": "a unique random number assigned to this partition, to keep things organized",
        "bg": "blue"
      }
    ],
    [
      {
        "content": "0x50",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "4 bytes",
        "bg": "#F4F5F7"
      },
      {
        "content": "0x00000000",
        "bg": "#F4F5F7"
      },
      {
        "content": "- Checksum\n- unused",
        "bg": "#F4F5F7"
      },
      {
        "content": "supposedly a checksum",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "0x54",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "426 bytes",
        "bg": "yellow"
      },
      {
        "bg": "yellow"
      },
      {
        "content": "Bootstrap Code",
        "bg": "yellow",
        "colspan": 2
      },
      null,
      {
        "content": "- the code that loads the rest of the operating system\n- this is pointed to by the first 3 bytes of this sector",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "0x01FE",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "2 bytes",
        "bg": "red"
      },
      {
        "content": "55 AA\n\n0xAA55",
        "bg": "red"
      },
      {
        "content": "End-of-sector Marker",
        "bg": "red",
        "colspan": 2
      },
      null,
      {
        "content": "this flag indicates that this is a valid boot sector",
        "bg": "red"
      }
    ]
  ],
  "tableStyle": "width: 1052.0px;"
}
```
