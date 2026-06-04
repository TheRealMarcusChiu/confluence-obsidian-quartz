---
title: "Redundant Array of Independent Disks (RAID)"
created: 2019-08-27T13:23:01.379-05:00
modified: 2025-10-21T14:06:00.733-05:00
parent: "[[Secondary／Virtual Memory (Drive)]]"
children: []
---
###### Redundant Array of Independent Disks (RAID)
````excerpt
- is a data <em>storage virtualization</em> technology that combines multiple physical [[Secondary／Virtual Memory (Drive)|disk drive]] components into one or more logical units for the purposes of data redundancy, performance improvement, or both
- a [[RAID Controllers／Cards|RAID card]] is used to combine multiple physical drives
````
^excerpt

# RAID - Introduction

![](https://www.youtube.com/watch?v=U-OCdTeZLac)
# RAID Configurations

RAID Configurations depend on the [[Motherboard (MoBo)|motherboard]] whether it supports them

```merge-table
{
  "rows": [
    [
      {
        "content": "RAID Configuration",
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
        "content": "RAID 0",
        "bg": "#F4F5F7"
      },
      "- splits data in 2 and writes into 2 drives\n- faster reads and writes"
    ],
    [
      {
        "content": "RAID 1",
        "bg": "#F4F5F7"
      },
      "- writes data into 2 drives\n- redundancy 2 drives are copies of each other"
    ],
    [
      {
        "content": "RAID 5",
        "bg": "#F4F5F7"
      },
      "- allows up to 1 drive to fail without data loss\n- often requires a dedicated RAID controller card for faster writes"
    ],
    [
      {
        "content": "RAID 6",
        "bg": "#F4F5F7"
      },
      "- allows up to 2 drives to fail without data loss\n- often requires a dedicated RAID controller card for faster writes\n- slower than RAID 5"
    ],
    [
      {
        "content": "RAID 10\nRAID 1+0",
        "bg": "#F4F5F7"
      },
      "- combination of RAID 0 and 1"
    ],
    [
      {
        "content": "RAID 50\nRAID 5+0",
        "bg": "#F4F5F7"
      },
      "- combines distributed parity (RAID 5) with striping (RAID 0)\n- requires a minimum of six drives"
    ],
    [
      {
        "content": "RAID 60\nRAID 6+0",
        "bg": "#F4F5F7"
      },
      "- is a type of nested RAID level that combines the block-level stripping feature of RAID level 0 with the dual parity of RAID level 6"
    ]
  ]
}
```
# Other
- [[ZFS - VDEV Configurations (Striped／Stripe - Mirrored／Mirror - RAIDZ／RAIDZ1／RAIDZ2／RAIDZ3)|RAIDZ/RAIDZ1/RAIDZ2/RAIDZ3]]
