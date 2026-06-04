---
title: "Magic Bytes"
created: 2020-01-06T01:05:42.347-06:00
modified: 2020-01-06T01:14:34.487-06:00
parent: "[[Computer Terms]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Executable Binaries",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mnemonic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Magic Bytes Signature",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>DOS Executable</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"MZ\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code>0x4D 0x5A</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>PE32 Executable</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"MZ\"</font>....<font style=\"color: rgb(136,0,0);\">\"PE..\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0</font>x4D <font style=\"color: rgb(136,0,0);\">0</font>x5A ... <font style=\"color: rgb(136,0,0);\">0x50 0x45</font> <font style=\"color: rgb(136,0,0);\">0x00 0x00</font></code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(188,96,96);\">Mach</font>-<font style=\"color: rgb(188,96,96);\">O</font> Executable (<font style=\"color: rgb(136,0,0);\">32</font> bit)</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"FEEDFACE\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code>0xFE 0xED 0xFA 0xCE</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(188,96,96);\">Mach</font>-<font style=\"color: rgb(188,96,96);\">O</font> Executable (<font style=\"color: rgb(136,0,0);\">64</font> bit)</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"FEEDFACF\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code>0xFE 0xED 0xFA 0xCF</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>ELF Executable</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\".ELF\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code>0x7F 0x45 0x4C 0x46</code></span>"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Compressed Archives",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mnemonic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Signature",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>Zip Archive</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"PK..\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0</font>x50 <font style=\"color: rgb(136,0,0);\">0</font>x4B <font style=\"color: rgb(136,0,0);\">0x03 0x04</font></code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>Rar Archive</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"Rar!....\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0x52 0x61</font> <font style=\"color: rgb(136,0,0);\">0x72 0x21</font> <font style=\"color: rgb(136,0,0);\">0</font>x1A <font style=\"color: rgb(136,0,0);\">0x07 0x01</font> <font style=\"color: rgb(136,0,0);\">0</font>x00</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>Ogg Container</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"OggS\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0</font>x4F <font style=\"color: rgb(136,0,0);\">0x67 0x67</font> <font style=\"color: rgb(136,0,0);\">0</font>x53</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>Matroska/EBML Container</code></span>",
      "<span style=\"white-space: pre-wrap\"><code>N/A</code></span>",
      "<span style=\"white-space: pre-wrap\"><code>0x45 0x1A 0xA3 0xDF</code></span>"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      {
        "content": "Image File Formats",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Mnemonic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Signature",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>PNG Image</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\".PNG....\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0x89 0x50</font> <font style=\"color: rgb(136,0,0);\">0</font>x4E <font style=\"color: rgb(136,0,0);\">0</font>x47 <font style=\"color: rgb(136,0,0);\">0</font>x0D <font style=\"color: rgb(136,0,0);\">0</font>x0A <font style=\"color: rgb(136,0,0);\">0</font>x1A <font style=\"color: rgb(136,0,0);\">0</font>x0A</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>BMP Image</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"BM\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code>0x42 0x4D</code></span>"
    ],
    [
      "<span style=\"white-space: pre-wrap\"><code>GIF Image</code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"GIF87a\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0x47 0x49</font> <font style=\"color: rgb(136,0,0);\">0x46 0x38</font> <font style=\"color: rgb(136,0,0);\">0x37 0x61</font></code></span>"
    ],
    [
      "",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">\"GIF89a\"</font></code></span>",
      "<span style=\"white-space: pre-wrap\"><code><font style=\"color: rgb(136,0,0);\">0x47 0x49</font> <font style=\"color: rgb(136,0,0);\">0x46 0x38</font> <font style=\"color: rgb(136,0,0);\">0x39 0x61</font></code></span>"
    ]
  ]
}
```
