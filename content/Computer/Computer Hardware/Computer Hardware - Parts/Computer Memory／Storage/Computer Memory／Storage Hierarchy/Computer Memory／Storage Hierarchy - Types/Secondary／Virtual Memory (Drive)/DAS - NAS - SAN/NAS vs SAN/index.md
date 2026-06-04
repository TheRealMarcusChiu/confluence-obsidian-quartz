---
title: "NAS vs SAN"
created: 2022-09-11T14:48:53.038-05:00
modified: 2022-09-11T15:08:32.435-05:00
parent: "[[DAS - NAS - SAN]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Network Attached Storage (NAS)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Storage Area Network (SAN)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Both were developed to solve the problem of making stored data available to many users at once",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "NAS is a single storage device that serves files over Ethernet",
      "SAN is a tightly coupled network of multiple devices"
    ],
    [
      "NAS devices deliver shared storage as network-mounted volumes and use protocols like NFS and SMB/CIFS",
      "SAN-connected disks appear to the user as local drives"
    ],
    [
      "Data accessed as if it were a network-attached drive.",
      "Servers access data as if it were a local hard drive."
    ],
    [
      "Speed-dependent on local [[Transmission Control Protocol (TCP)|TCP]]/[[Internet Protocol (IP)|IP]] [[802.3 - Ethernet|Ethernet]] network, typically 1GbE to 10GbE and affected by the number of other users accessing the storage at the same time. Generally slower throughput and higher latency due to the nature of Ethernet packetization, waiting for the file server, and latency in general",
      "High speed using Fibre Channel, most commonly available in 16 Gb/s to 32 Gb/s. Fibre Channel can be delivered via high-speed Ethernet such as 10Gb or 40Gb+ networks using protocols such as FCoE and iSCSI"
    ],
    [
      "- [[Server Message Block Protocol (SMB)|SMB]]/[[Common Internet File System (CIFS)|CIFS]]\n- [[Network File System (NFS)|NFS]]\n- [[SSH File Transfer Protocol (SFTP)]]\n- WebDAV",
      "- [[Fibre Channel (FC)|Fibre Channel]]\n- [[Internet Small Computer Systems Interface (iSCSI)|iSCSI]]\n- Fibre Channel over Ethernet (FCoE)"
    ],
    [
      "- low-end NAS is not highly scalable\n- high-end NAS scale to petabytes using clusters or scale-out nodes",
      "Can add more storage controllers, or expanded storage arrays allowing SAN admins to scale performance, storage, or both."
    ],
    [
      "Simply connects to your existing Ethernet network.",
      "Requires dedicated Fibre Channel connections for clients, servers, and storage, and often a separate, dedicated Ethernet network for file request traffic."
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;width: 80.8788%;"
}
```
