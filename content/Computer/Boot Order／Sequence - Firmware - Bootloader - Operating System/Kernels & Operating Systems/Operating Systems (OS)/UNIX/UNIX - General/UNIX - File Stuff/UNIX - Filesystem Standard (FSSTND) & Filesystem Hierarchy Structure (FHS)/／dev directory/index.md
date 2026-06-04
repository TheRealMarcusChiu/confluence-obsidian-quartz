---
title: "／dev directory"
created: 2020-01-02T00:48:08.878-06:00
modified: 2020-01-02T14:59:09.064-06:00
parent: "[[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)]]"
children: []
---
/dev directory
- contains the special device files for all the devices
- the device files are created during installation, and later with the <strong>/dev/MAKEDEV</strong> script. The <strong>/dev/MAKEDEV.local</strong> is a script written by the system administrator that creates local-only device files or links (i.e. those that are not part of the standard <strong>MAKEDEV</strong>, such as device files for some non-standard device driver)
```merge-table
{
  "rows": [
    [
      {
        "content": "directory",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "device type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "major and minor node",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "/dev/dsp",
      "- digital signal processor\n- forms the interface between sound-software and sound-card",
      "",
      ""
    ],
    [
      "/dev/fd0",
      "- the first floppy drive\n- if you are lucky enough to have several drives then they will be numbered sequentially",
      "",
      "- major node 2\n- minor node 0"
    ],
    [
      "/dev/fb0",
      "- the first framebuffer device\n- a framebuffer is an abstracation layer between software and graphics hardware\n- this means applications do not need to know about what kind of hardware you have but merely how to communicate with the frame buffer driver's API",
      "",
      "- major node 29\n- minor node 0"
    ],
    [
      "/dev/hda\n/dev/hdb\n/dev/hdc\n/dev/hdd\n...",
      "- /dev/hba - is the master [[Integrated Device Electronics (IDE) - Advanced Technology Attachment (ATA)|IDE]] drive on the primary IDE controller\n- /dev/hdb - is the slave on the primary controller\n- /dev/hdc - is the master on the secondary controller\n- /dev/hdd - is the slave on the secondary controller\n- each disk is separated into at least 4 partitions:\n\t- partitions 1-4 are primary partitions\n\t- partitions 5-∞ are logical partitions inside extended partitions\n- the major and minor node numbers are somewhat complex. For the first IDE controller all partitions are block devices on major node 3. The master drive hda is at minor 0 and the slave drive hdb is at minor 64. For each partition inside the drive add the partition number to the minor minor node number for the drive. For example /dev/hdb5 is major 3, minor 69 (64 + 5 = 69). Drives on the secondary interface are handled the same way, but with major node 22",
      "",
      ""
    ],
    [
      "/dev/ht0",
      "- the first IDE tape drive\n- subsequent drives are numbered ht1, ht2 etc\n- they are character devices",
      "",
      "- major node 37\n- minor node:\n\t- 0 for ht0\n\t- 1 for ht1\n\t- etc"
    ],
    [
      "/dev/js0",
      "- the first analogue joystick\n- subsequent joysticks are numbered: js1, js2, etc",
      "",
      "- major node 15\n- minor node start at 0"
    ],
    [
      "/dev/djs0",
      "- the first digital joystick\n- subsequent joysticks are numbered: djs1, djs2, etc",
      "",
      "- major node 15\n- minor node start at 128"
    ],
    [
      "/dev/lp0",
      "- the first parallel printer device\n- subsequent printers are numbered: lp1, lp2, etc",
      "character",
      "- major node 6\n- minor node start at 0"
    ],
    [
      "/dev/loop",
      "- the first loopback device\n- loopback device are used for mounting filesystems which are not located on other block devices such as disks (e.g. if you wish to mount an iso9660 CD-ROM image without burning it to CD then you need to use a loopback device to do so. This is usually transparent to the user and is handled by the mount command.",
      "block",
      "- major node 7\n- minor node start at 0"
    ],
    [
      "/dev/md0",
      "- first metadisk group\n- meta disks are related to RAID devices",
      "block",
      "- major node 9\n- minor nodes start at 0"
    ],
    [
      "/dev/mixer",
      "- this is part of the OSS (Open Sound System) driver",
      "character",
      "- major node 14\n- minor node start at 0"
    ],
    [
      "/dev/null",
      "- the bit bucket\n- a black hole where you can send data for it never to be seen again\n- anything sent to /dev/null will disappear",
      "character",
      "- major node 1\n- minor node 3"
    ],
    [
      "/dev/psaux",
      "- the PS/2 mouse port",
      "character",
      "- major node 10\n- minor node 1"
    ],
    [
      "/dev/pda",
      "- parallel port IDE disks\n- these are named similarly to disks on the internal IDE controllers (/dev/hd\\*)\n- They are block devices on major node 45. Minor nodes need slightly more explanation here. The first device is /dev/pda and it is on minor node 0. Partitions on this device are found by adding the partition number to the minor number for the device. Each device is limited to 15 partitions each rather than 63 (the limit for internal IDE disks). /dev/pdb minor nodes start at 16, /dev/pdc at 32 and /dev/pdd at 48. So for example the minor node number for /dev/pdc6 would be 38 (32 + 6 = 38). This scheme limits you to 4 parallel disks of 15 partitions each",
      "block",
      "- major node 45\n- minor nodes explained in description"
    ],
    [
      "/dev/pcd0",
      "- parallel port CD-ROM drive\n- these are numbered from 0 onwards",
      "block",
      "- major node 46\n- minor nodes start at 0"
    ],
    [
      "/dev/pt0",
      "- parallel port atpe devices\n- tapes do not have partitions so these are just numbered sequentially",
      "character",
      "- major node 96\n- minor nodes start at 0"
    ],
    [
      "/dev/parport0",
      "- the raw parallel ports\n- most devices which are attached to parallel ports have their own drivers. This is a device to access the port directly.",
      "character",
      "- major node 99\n- minor node start at 0"
    ],
    [
      "/dev/random",
      "- kernel random number generator\n- /dev/random is a non-deterministic generator which means that the value of the next number cannot be guessed from the preceding ones. It uses the entropy of the system hardware to generate numbers. When it has no more entropy to use then it must wait until it has collected more before it will allow any more numbers to be read from it",
      "character",
      "- major node 1\n- minor node 8"
    ],
    [
      "/dev/urandom",
      "- kernel random number generator\n- /dev/urandom works similarly to /dev/random. Initially it also uses the entropy of the system hardware, but when there is no more entropy to use it will continue to return numbers using a pseudo random number generating formula. This is considered to be less secure for vital purposes such as cryptographic key pair generation. If security is your overriding concern then use /dev/random, if speed is more important then /dev/urandom works fine",
      "character",
      "- major node 1\n- minor node 9"
    ],
    [
      "/dev/sda\n/dev/sdb\n/dev/sdc",
      "- the first [[Small Computer Systems Interface (SCSI)|SCSI]] drive on the first SCSI bus\n- the following drives are named similarly to [[Integrated Device Electronics (IDE) - Advanced Technology Attachment (ATA)|IDE]] drives: /dev/sdb, /dev/sdc",
      "",
      ""
    ],
    [
      "/dev/ttyS0",
      "- the first serial port\n- many times this is the port used to connect an external modem to your system",
      "",
      ""
    ],
    [
      "/dev/zero",
      "- this simple way of getting many 0s\n- every time you read from this device it will return 0\n- useful when you want a file of fixed length but don't care what it contains",
      "character",
      "- major node 1\n- minor node 5"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
