---
title: "ZFS - VDEV Configurations (Striped／Stripe - Mirrored／Mirror - RAIDZ／RAIDZ1／RAIDZ2／RAIDZ3)"
created: 2024-06-07T14:45:14.433-05:00
modified: 2024-06-24T20:18:35.140-05:00
parent: "[[Zettabyte File System (ZFS)]]"
children: []
---
- <strong>VDEV configurations</strong> for [[Zettabyte File System (ZFS)|ZFS]]

# VDEV Configurations - Introduction
- [https://www.truenas.com/blog/zfs-pool-performance-1/](https://www.truenas.com/blog/zfs-pool-performance-1/)
- [https://www.truenas.com/blog/zfs-pool-performance-2/](https://www.truenas.com/blog/zfs-pool-performance-2/)

# VDEV Configurations - Comparison Chart

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Stripe",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Mirror",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "RAIDZ1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "RAIDZ2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "RAIDZ3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Stripe+mirror",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Min number of disks",
        "bg": "#F4F5F7"
      },
      {
        "content": "1",
        "align": "center"
      },
      {
        "content": "2",
        "align": "center"
      },
      {
        "content": "2",
        "align": "center"
      },
      {
        "content": "4",
        "align": "center"
      },
      {
        "content": "5",
        "align": "center"
      },
      {
        "content": "4",
        "align": "center"
      }
    ],
    [
      {
        "content": "Fault to­le­ran­ce",
        "bg": "#F4F5F7"
      },
      {
        "content": "None",
        "align": "center"
      },
      {
        "content": "(N-1) disk",
        "align": "center"
      },
      {
        "content": "1 disk",
        "align": "center"
      },
      {
        "content": "2 disks",
        "align": "center"
      },
      {
        "content": "3 disk",
        "align": "center"
      },
      {
        "content": "(N-1) disk in each N-disk mirror",
        "align": "center"
      }
    ],
    [
      {
        "content": "Disk space over­head",
        "bg": "#F4F5F7"
      },
      {
        "content": "None",
        "align": "center"
      },
      {
        "content": "(N-1)/N",
        "align": "center"
      },
      {
        "content": "1 disk",
        "align": "center"
      },
      {
        "content": "2 disks",
        "align": "center"
      },
      {
        "content": "3 disks",
        "align": "center"
      },
      {
        "content": "(N-1)*P for P stipe over N-disk mirrors",
        "align": "center"
      }
    ],
    [
      {
        "content": "Read speed",
        "bg": "#F4F5F7"
      },
      {
        "content": "Fast",
        "align": "center"
      },
      {
        "content": "Fast",
        "align": "center"
      },
      {
        "content": "Slow, see below",
        "align": "center",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "Fast",
        "align": "center"
      }
    ],
    [
      {
        "content": "Write speed",
        "bg": "#F4F5F7"
      },
      {
        "content": "Fast",
        "align": "center"
      },
      {
        "content": "Fair",
        "align": "center"
      },
      {
        "content": "Slow, See below",
        "align": "center",
        "colspan": 3
      },
      null,
      null,
      {
        "content": "Fair",
        "align": "center"
      }
    ],
    [
      {
        "content": "Hard­ware cost",
        "bg": "#F4F5F7"
      },
      {
        "content": "Cheap",
        "align": "center"
      },
      {
        "content": "High to highest",
        "align": "center"
      },
      {
        "content": "High",
        "align": "center"
      },
      {
        "content": "Very high",
        "align": "center"
      },
      {
        "content": "Very High (disks)",
        "align": "center"
      },
      {
        "content": "High to highest",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```
# TODO

![](https://www.youtube.com/watch?v=_aACgNm8UCw)
# Resources
- [https://www.raidz-calculator.com/raidz-types-reference.aspx](https://www.raidz-calculator.com/raidz-types-reference.aspx)
