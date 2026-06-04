---
title: "Boot Loader - Boot Manager"
created: 2019-03-15T02:00:55.737-05:00
modified: 2023-02-18T12:52:39.260-06:00
parent: "[[Boot Order／Sequence - Firmware - Bootloader - Operating System]]"
children:
  - "[[Boot Camp Assistant]]"
  - "[[GRand Unified Bootloader (GRUB 2)]]"
  - "[[GRand Unified Bootloader (GRUB Legacy)]]"
  - "[[rEFInd]]"
---
````excerpt
- <strong>boot managers</strong> present a menu of boot options or provide some other way to control the boot process. The user can then select an option, and the boot manager passes control to the selected tool
- <strong>boot loaders</strong> handle the task of loading an [[Operating Systems (OS)|OS]] kernel into memory, often along with support files such as a [[Linux]] [[initrd (Initial RAM Disk) vs initramfs (Initial RAM File System)|initial RAM disk (initrd)]] file, and starting the kernel running
````
^excerpt

From an [[Extensible Firmware Interface (EFI)|EFI]]/[[Unified EFI (UEFI)|UEFI]] perspective, both <strong>boot loaders</strong> and <strong>boot managers</strong> are simply EFI/UEFI programs
# Boot Loader and/or Boot Manager - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Boot Loaders \nand/or \nBoot Managers",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Deprecated?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[[Basic Input／Output System (BIOS)|BIOS]]\nand/or\n[[Unified EFI (UEFI)|EFI/UEFI]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Partition／Volume - Disk Partitioning - Partition Schema|Master Boot Record (MBR)]]",
        "bg": "#F4F5F7"
      },
      "N/A",
      {
        "content": "<font style=\"color: rgb(255,204,0);\">PHASING OUT</font>\n\n<font style=\"color: rgb(255,204,0);\"><font style=\"color: rgb(0,0,0);\">&</font></font>\n\n<font style=\"color: rgb(255,204,0);\"><font style=\"color: rgb(51,153,102);\">IN SUPPORT</font></font>",
        "bg": "#fffae6"
      },
      {
        "content": "BIOS",
        "bg": "#e6fcff"
      },
      "is a [[Partition／Volume - Disk Partitioning - Partition Schema|partition scheme]] type"
    ],
    [
      {
        "content": "Grand Unified Boot Loader 2 ([[GRand Unified Bootloader (GRUB 2)]])",
        "bg": "#F4F5F7"
      },
      {
        "content": "BOTH",
        "bg": "#eae6ff"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">IN SUPPORT</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "EFI/UEFI",
        "bg": "#deebff"
      },
      "superseded <strong>GRUB Legacy</strong>"
    ],
    [
      {
        "content": "Grand Unified Boot Loader Legacy ([[GRand Unified Bootloader (GRUB Legacy)|GRUB Legacy]])",
        "bg": "#F4F5F7"
      },
      {
        "content": "BOTH",
        "bg": "#eae6ff"
      },
      {
        "content": "<font style=\"color: rgb(255,204,0);\">PHASING OUT</font>",
        "bg": "#fffae6"
      },
      {
        "content": "EFI/UEFI",
        "bg": "#deebff"
      },
      "superseded by<strong> GRUB 2</strong>"
    ],
    [
      {
        "content": "[[Boot Camp Assistant]]",
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "<font style=\"color: rgb(51,153,102);\">IN SUPPORT</font>",
        "bg": "#e3fcef"
      },
      "",
      "![[Boot Camp Assistant#^excerpt]]"
    ],
    [
      {
        "content": "LInux LOader (LILO)",
        "bg": "#F4F5F7"
      },
      {
        "content": "LOADER",
        "bg": "#e6fcff"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DEPRECATED</font>",
        "bg": "#ffebe6"
      },
      "",
      "is a [[Linux]] bootloader"
    ],
    [
      {
        "content": "[gummiboot/systemd-boot](http://www.rodsbooks.com/efi-bootloaders/gummiboot.html)",
        "bg": "#F4F5F7"
      },
      {
        "content": "MANAGER",
        "bg": "#deebff"
      },
      "",
      "",
      ""
    ],
    [
      {
        "content": "[[rEFInd]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "MANAGER",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\">IN SUPPORT</font>",
        "bg": "#e3fcef"
      },
      {
        "content": "EFI/UEFI",
        "bg": "#deebff"
      },
      "![[rEFInd#^excerpt]]"
    ],
    [
      {
        "content": "rEFIt",
        "bg": "#F4F5F7"
      },
      {
        "content": "MANAGER",
        "bg": "#deebff"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DEPRECATED</font>",
        "bg": "#ffebe6"
      },
      {
        "content": "EFI/UEFI",
        "bg": "#deebff"
      },
      "is the out-of-development predecessor to <strong>rEFInd</strong>"
    ],
    [
      {
        "content": "SYSLINUX",
        "bg": "#F4F5F7"
      },
      {
        "content": "LOADER",
        "bg": "#e6fcff"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DEPRECATED</font>",
        "bg": "#ffebe6"
      },
      "",
      ""
    ],
    [
      {
        "content": "EFI Stub Loader",
        "bg": "#F4F5F7"
      },
      {
        "content": "LOADER",
        "bg": "#e6fcff"
      },
      "",
      "",
      "this program turns a Linux kernel into its own bootloader. This means that a boot manager can launch a Linux kernel, much as a boot loader could"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
