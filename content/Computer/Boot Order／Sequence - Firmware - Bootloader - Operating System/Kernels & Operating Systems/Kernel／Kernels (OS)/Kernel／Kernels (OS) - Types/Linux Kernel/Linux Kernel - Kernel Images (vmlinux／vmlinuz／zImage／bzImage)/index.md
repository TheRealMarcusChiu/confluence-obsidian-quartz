---
title: "Linux Kernel - Kernel Images (vmlinux／vmlinuz／zImage／bzImage)"
created: 2024-09-01T14:38:06.115-05:00
modified: 2024-09-01T14:50:52.363-05:00
parent: "[[Linux Kernel]]"
children:
  - "[[vmlinuz (Virtual Memory LINUx gZip - Compressed Linux kernel Executable)]]"
---
# Linux Kernel - Source Code

The <strong>Linux Kernel</strong> is usually stored in the <strong>/boot</strong> directory
###### Example Linux Kernel

example [[Ubuntu]] /boot directory

![[Linux Kernel - Kernel Images (vmlinux／vmlinuz／zImage／bzImage)/boot-directory-example.png|500]]

the kernel file, in Ubuntu, is stored in the /boot folder and is called vmlinuz-<em>version</em>

when virtual memory was developed for easier multitasking abilities, “vm” was put at the front of the file to show that the kernel supports virtual memory. For a while, the Linux kernel was called vmlinux, but the kernel grew too large to fit in the available boot memory so the kernel image was compressed and the ending x was changed to a z to show it was compressed with zlib [[Data Compression|compression]]. This same compression isn’t always used, often replaced with LZMA or BZIP2, and some kernels are simply called zImage.

version numbering will be in the format A.B.C.D where:
- A.B will probably be 4.4
- C will be version
- D indicates patches or fixes

![[Linux Kernel - Kernel Images (vmlinux／vmlinuz／zImage／bzImage)/linux kernel files.png|500]]
# Kernel Images - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "vmlinux",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- the original, uncompressed, non-bootable Linux kernel image\n- to make it bootable, we add a multi-boot header, boot sector, and setup routines"
    ],
    [
      {
        "content": "[[vmlinuz (Virtual Memory LINUx gZip - Compressed Linux kernel Executable)|vmlinuz]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- the compressed, bootable Linux kernel image\n- when we gzip compress vmlinux we create vmlinuz"
    ],
    [
      {
        "content": "vmlinux.bin",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- the uncompressed binary image generated during Linux kernel source code compilation\n- the image file is not directly executable and is too big for practical use"
    ],
    [
      {
        "content": "zimage",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- refers to a distinct compressed kernel image file format\n- it's designed for x86-based systems\n- compressed using LZ77\n- smaller image file than bzimage"
    ],
    [
      {
        "content": "bzimage",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- TODO [https://www.baeldung.com/linux/kernel-images](https://www.baeldung.com/linux/kernel-images#:~:text=vmlinuz%20is%20a%20compressed%20Linux,contains%20the%20kernel)"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
