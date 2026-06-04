---
title: "Error Detection"
created: 2019-11-13T09:32:37.092-06:00
modified: 2025-10-28T23:49:20.476-05:00
parent: "[[Error - Detection & Correction]]"
children:
  - "[[Erasure Coding]]"
  - "[[Error Detection - Checksum]]"
  - "[[Error Detection - Cyclic Redundancy Check (CRC)]]"
  - "[[Error Detection - Internet Checksum]]"
  - "[[Error Detection - One-Dimensional Parity]]"
  - "[[Error Detection - Send Extra Copy]]"
  - "[[Error Detection - two-dimensional parity]]"
---
###### Error Detection
````excerpt
- is the detection of errors caused by noise or other impairments during transmission from the transmitter to the receiver
````
^excerpt

# Error Detecting Goals

design error detection algorithms that both:
- maximize the probability of detecting errors
- use a small number of redundant bits

# Error Detecting Algorithms

```merge-table
{
  "rows": [
    [
      {
        "content": "Error Detecting Algorithms",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Cryptographically Secure",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Error Detection - Send Extra Copy|Send Extra Copy]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Error Detection - One-Dimensional Parity|One-Dimensional Parity]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Error Detection - two-dimensional parity|Two-Dimensional Parity]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Error Detection - Checksum|Checksum]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Error Detection - Internet Checksum|Internet Checksum]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Error Detection - Cyclic Redundancy Check (CRC)|Cyclic Redundancy Check (CRC)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "7,4 Hamming Code",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NO</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Cryptographic Hash Function - Message Digest Function]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">YES</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Secure／Keyed Cryptographic Hash Function|Secure/Keyed Cryptographic Hash Function]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">YES</font>",
        "bg": "green",
        "align": "center"
      }
    ]
  ]
}
```
