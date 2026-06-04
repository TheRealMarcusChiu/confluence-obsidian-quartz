---
title: "Linux Boot Process Involving vmlinuz & initrd"
created: 2024-09-01T14:25:01.875-05:00
modified: 2024-09-01T14:52:53.147-05:00
parent: "[[UNIX - Boot Process]]"
children: []
---
1. <strong>Loading Stage</strong> - the [[Boot Order／Sequence - Firmware - Bootloader - Operating System|bootloader]] (like [[GRand Unified Bootloader (GRUB 2)|GRUB]]) loads both the [[vmlinuz (Virtual Memory LINUx gZip - Compressed Linux kernel Executable)|vmlinuz]] and [[initrd (Initial RAM Disk) vs initramfs (Initial RAM File System)|initrd]] into [[Primary／Main／Physical Computer Memory／Storage|main memory]]
2. <strong>Decompression of vmlinuz</strong> - the embedded routine of vmlinuz decompresses the kernel into main memory
3. <strong>Handoff to initrd</strong> - post-decompression, control is passed to the kernel, which then mounts the initrd as its initial root filesystem
4. <strong>Module Loading</strong> - the initrd's primary role is to load necessary modules. These modules are crucial for the kernel to access the hardware required to mount the real root filesystem
5. <strong>Transition to Actual Root Filesystem</strong> - once the necessary drivers are loaded, the kernel can mount the real root filesystem and continue the boot process

In summary, vmlinuz and initrd are integral to the Linux boot process.
- [[vmlinuz (Virtual Memory LINUx gZip - Compressed Linux kernel Executable)|vmlinuz]], as a compressed kernel image, reduces the initial load time and memory usage
- [[initrd (Initial RAM Disk) vs initramfs (Initial RAM File System)|initrd]] provides a temporary root filesystem to facilitate the kernel in loading necessary modules to access the actual root filesystem
