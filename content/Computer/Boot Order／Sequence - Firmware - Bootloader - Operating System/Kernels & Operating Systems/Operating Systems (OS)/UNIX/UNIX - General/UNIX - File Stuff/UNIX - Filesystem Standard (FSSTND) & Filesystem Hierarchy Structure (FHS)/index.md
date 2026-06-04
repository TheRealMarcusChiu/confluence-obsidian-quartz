---
title: "UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)"
created: 2019-12-30T15:22:23.363-06:00
modified: 2020-06-25T22:15:06.967-05:00
parent: "[[UNIX - File Stuff]]"
children:
  - "[[sbin v bin]]"
  - "[[／dev directory]]"
  - "[[／etc directory]]"
  - "[[／lib directory]]"
  - "[[／proc directory]]"
  - "[[／usr directory]]"
  - "[[／var directory]]"
---
<strong>Filesystem Standard (FSSTND),</strong> now<strong> Filesystem Hierarchy Standard</strong> (<strong>FHS</strong>) defines the directory-structure & directory-contents in [[UNIX]]-like/[[Linux]] distributions
## Directory Structure

```merge-table
{
  "rows": [
    [
      {
        "content": "Directory",
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
      ".",
      "- references the current directory"
    ],
    [
      "..",
      "- references the directory immediately above in the hierarchy"
    ],
    [
      "/",
      "- the root of the file system\n- all files and directories fall under this"
    ],
    [
      "[[／proc directory|/proc]]",
      "- special directory holds all the details about the Linux system"
    ],
    [
      "[[／usr directory|/usr]]",
      "- stands for Unix System Resources\n- contains system utilities\n- contents are usually static"
    ],
    [
      "[[／var directory|/var]]",
      "- contains files to which the system writes data during the course of its operation"
    ],
    [
      "/bin",
      "- contains the <em>executable</em> (i.e., ready to run) programs that must be available in order to attain minimal functionality for the purposes of <em>booting</em> (i.e., starting) and repairing a system"
    ],
    [
      "/sbin",
      "- system binaries\n- contains essential system admin programs that are generally run by the superuser (on Windows the superuser is called Administrator)"
    ],
    [
      "[[sbin v bin|*/bin vs */sbin]]",
      "- \\*/bin - contains binary executable files or links to them\n- \\*/sbin - contains system admin binary executable files or links to them"
    ],
    [
      "[[／lib directory|/lib]]",
      "- contains shared libraries needed by the programs on the [[Root Filesystem (rootfs)|root filesystem]]"
    ],
    [
      "/opt",
      "- optional software\n- third party software is usually installed here (similar to \"Program Files\" directory in Windows)"
    ],
    [
      "[[／etc directory|/etc]]",
      "- system configuration files\n- where things like password file, and global system configuration files live"
    ],
    [
      "/media",
      "- mount points for [removable media](https://en.wikipedia.org/wiki/Removable_media) such as [CD-ROMs](https://en.wikipedia.org/wiki/CD-ROM) (appeared in FHS-2.3 in 2004)"
    ],
    [
      "/mnt",
      "- temporary <em>mount points</em> for <em>mounting </em>[[Computer Memory／Storage Devices|storage devices]], such as CDROMs, floppy disks and USB (universal serial bus) key drives"
    ],
    [
      "/root",
      "- is the <em>home directory</em> of the <em>root user/account</em>"
    ],
    [
      "/home",
      "- contains user home directories (similar to \"Documents and Settings\" folder in Windows)"
    ],
    [
      "/tmp",
      "- temporary files\n- when the system reboots, these go away"
    ],
    [
      "/boot",
      "- contains files used by the [[Boot Loader - Boot Manager|boot loader/manager]] (e.g. [[GRand Unified Bootloader (GRUB 2)]]). Kernel images are often kept here instead of in the root directory. If there are many kernel images, the directory can easily grow rather big, and it might be better to keep it in a separate filesystem. Another reason would be to make sure the kernel images are within the first 1024 cylinders of an IDE disk. This 1024 cylinder limit is no longer true in most cases. With modern [[Basic Input／Output System (BIOS)|BIOS]]es the 1024 cylinder limit can be passed with [[Logical Block Addressing (LBA) Mode - Logical Sector Number (LSN)|logical block addressing (LBA)]]"
    ],
    [
      "/kernel",
      "- the core operating system (similar to \"Windows\" folder in Windows)"
    ],
    [
      "/run",
      "- modern Linux distributions include a <code>/run</code> directory as a [[Temporary Filesystem (TMPFS)|temporary filesystem (tmpfs)]] which stores volatile runtime data\n- replaced /var/run"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
## Versions

```merge-table
{
  "rows": [
    [
      {
        "content": "Version",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Release Date",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "1.0",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "1994-02-14",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "FSSTND",
        "bg": "red"
      }
    ],
    [
      {
        "content": "1.1",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "1994-10-09",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "FSSTND",
        "bg": "red"
      }
    ],
    [
      {
        "content": "1.2",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "1995-03-28",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "FSSTND",
        "bg": "red"
      }
    ],
    [
      {
        "content": "2.0",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "1997-10-26",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "FHS 2.0 is the direct successor for FSSTND 1.2. Name of the standard was changed to Filesystem Hierarchy Standard.",
        "bg": "red"
      }
    ],
    [
      {
        "content": "2.1",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "2000-04-12",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "FHS",
        "bg": "red"
      }
    ],
    [
      {
        "content": "2.2",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "2001-05-23",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "FHS",
        "bg": "red"
      }
    ],
    [
      {
        "content": "2.3",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "2004-01-29",
        "bg": "yellow",
        "align": "center"
      },
      {
        "content": "FHS",
        "bg": "yellow"
      }
    ],
    [
      {
        "content": "<strong>3.0</strong>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "2015-05-18",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "FHS",
        "bg": "green"
      }
    ],
    [
      {
        "content": "- <strong>RED</strong>: old version\n- <strong>YELLOW</strong>: older version, still supported\n- <strong>GREEN</strong>: latest version",
        "colspan": 3
      },
      null,
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
