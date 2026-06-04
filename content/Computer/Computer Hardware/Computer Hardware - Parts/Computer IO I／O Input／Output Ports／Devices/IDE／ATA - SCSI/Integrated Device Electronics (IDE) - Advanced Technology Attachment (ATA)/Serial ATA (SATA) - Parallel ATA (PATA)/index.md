---
title: "Serial ATA (SATA) - Parallel ATA (PATA)"
created: 2019-08-31T14:30:44.898-05:00
modified: 2023-12-08T11:18:56.662-06:00
parent: "[[Integrated Device Electronics (IDE) - Advanced Technology Attachment (ATA)]]"
children: []
---
2 [[Integrated Device Electronics (IDE) - Advanced Technology Attachment (ATA)|ATA]] interfaces that are used to connect to mass storage devices (e.g. [[Secondary／Virtual Memory (Drive)|drives]]):
- <strong>Parallel ATA (PATA)</strong> - obsolete in favor of SATA
- <strong>Serial ATA (SATA)</strong> - uses [[Advance Host Controller Interface (AHCI)]] as a communication interface between software & SATA devices

# SATA Versions

```merge-table
{
  "rows": [
    [
      {
        "content": "Interface",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Date",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Speed",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Bandwidth",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Backward Compatible",
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
      {
        "content": "<strong>SATA Revision 1.0</strong>",
        "bg": "#F4F5F7"
      },
      "2003",
      "1.5Gb/s",
      "150MB/s",
      "N/A",
      ""
    ],
    [
      {
        "content": "<strong>SATA Revision 2.0</strong>",
        "bg": "#F4F5F7"
      },
      "2004",
      "3Gb/s",
      "300MB/s",
      "SATA I",
      ""
    ],
    [
      {
        "content": "<strong>SATA Revision 3.0</strong>",
        "bg": "#F4F5F7"
      },
      "2008",
      "6Gb/s",
      "600MB/s",
      "SATA I and SATA II",
      ""
    ],
    [
      {
        "content": "<strong>SATA Express (SATAe) Revision 3.2</strong>",
        "bg": "#F4F5F7"
      },
      "2013",
      "16Gb/s",
      "1600MB/s",
      "",
      "uses 2 PCIe"
    ]
  ]
}
```
###### Example

A drive that supports a SATA III interface, when connected to a SATA III port, can reach up to:
- 550MB/s sequential read rate
- 520MB/s sequential write rate

However, when the same drive is connected to a SATA II port, it can only reach up to:
- 285MB/s sequential read rate
- 275MB/s sequential write rate
