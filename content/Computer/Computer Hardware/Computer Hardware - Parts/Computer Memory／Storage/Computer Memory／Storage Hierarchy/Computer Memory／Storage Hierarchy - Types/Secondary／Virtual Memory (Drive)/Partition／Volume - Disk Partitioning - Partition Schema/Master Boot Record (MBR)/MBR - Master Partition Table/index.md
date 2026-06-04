---
title: "MBR - Master Partition Table"
created: 2020-06-09T21:51:12.629-05:00
modified: 2020-06-17T13:19:17.350-05:00
parent: "[[Master Boot Record (MBR)]]"
children: []
---
###### Master Partition Table
- resides in the [[Master Boot Record (MBR)]]
- is a 64 byte structure made up of 4x16 byte partition entries
- the fixed size of the partition table limits the [[Operating Systems (OS)|OS]] to 4 partitions, but modern OS have built in the capability for many more partitions through a concept called extended partitions

Master Partition Table is the last 64 bytes of the MBR

![[MBR - Master Partition Table/MBR.png|1000]]
### Description of a 16-byte Partition Entry

```merge-table
{
  "rows": [
    [
      {
        "content": "Entry",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Length",
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
        "content": "Status\n\nBoot Indicator",
        "bg": "#F4F5F7"
      },
      "1 byte",
      "- determines whether the partition is bootable or not\n- has two acceptable values:\n\t- 0x00 (Non-Bootable)\n\t- 0x80 (Bootable)\n- only one partition can be marked as bootable per [[Computer Memory／Storage Devices|disk medium]], otherwise an \"Invalid partition table\" error will be thrown by the [[MBR - Master Boot Code|master boot code]]"
    ],
    [
      {
        "content": "Starting Sector in CHS Values",
        "bg": "#F4F5F7"
      },
      "3 bytes",
      "- identifies the partition's first sector using [[Cylinder-Head-Sector (CHS) Addressing Mode|Cylinder Head Sector (CHS) Addressing]]\n- works only if the sector is within the first 1024 cylinders of the storage medium. When sector is beyond that point, the CHS tuples are normally set to their maximum allowed values of 1023/254/63; which stand for the 1024th cylinder, 255th head and 63rd sector, due to the fact, cylinder and head counts begin at 0 and sector begins at 1. These values appear on the disk as 3 bytes: FE FF FF\n- the three bytes representing the CHS address are broken up:\n\t- cylinder value is 10 bits (1024)\n\t- head value is 8 bits (256)\n\t- sector value is 6 bits (64)\n- this CHS addressing scheme allows for a maximum addressable size of:\n\t- 1024×256×63 \\* 512 = 8.4GB = 7.8GiB (using 512 byte sectors)"
    ],
    [
      {
        "content": "Partition Type",
        "bg": "#F4F5F7"
      },
      "1 byte",
      "- represents the type of [[Disk (Format - Filesystems／File-Systems (FS))|file system]] the partition is using\n- a list of partition type ids can be found [here](http://www.win.tue.nl/~aeb/partitions/partition_types-1.html)\n- helps determine which [[Disk (Format - Filesystems／File-Systems (FS))|file system]] [[Linux Kernel - Device Drivers|device driver]] to load on boot"
    ],
    [
      {
        "content": "Ending Sector in CHS Values",
        "bg": "#F4F5F7"
      },
      "3 bytes",
      "- see Starting CHS (replace all instance of first sector with last sector)"
    ],
    [
      {
        "content": "Starting Sector in LBA",
        "bg": "#F4F5F7"
      },
      "4 bytes",
      "- identifies the volume/partition's first sector (just as the Starting CHS values do) but does so with a 4 byte [[Logical Block Addressing (LBA) Mode - Logical Sector Number (LSN)|Logical Block Addressing (LBA)]] (starts counting from Absolute Sector 0), which means it can locate the beginning of a partition within the first  FFFF FFFFh or 4,294,967,296 sectors, for hard disks up to about 2,199,023,255,552 bytes (exactly 2 TiB) assuming 512 byte sectors\n- this limit is only exceeded by the introduction of the [[GUID Partition Table (GPT)]]"
    ],
    [
      {
        "content": "Total Sectors\n\nPartition Size",
        "bg": "#F4F5F7"
      },
      "4 bytes",
      "- as with Starting Sector in LBA, allows up to 2TiB for size of each partition\n- this limit is only exceeded by the introduction of the [[GUID Partition Table (GPT)]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
