---
title: "Secure Boot"
created: 2019-08-28T19:58:39.743-05:00
modified: 2019-08-28T20:20:59.349-05:00
parent: "[[Boot Firmware - BIOS／UEFI Settings／Configurations]]"
children: []
---
<strong>Secure Boot</strong> (a platform feature in [[Unified EFI (UEFI)|UEFI]]) will check the [[Boot Loader - Boot Manager|boot loader]] before launching it and ensure it’s signed by a trusted entity. If the boot loader has been replaced or tampered, [[Unified EFI (UEFI)|UEFI]] won’t allow it to boot. This prevents malware from hijacking your boot process and concealing itself from your [[Operating Systems (OS)|operating system]]
## Microsoft Requires Secure Boot Enabled
<strong>Microsoft requires PC manufacturers to enable Secure Boot</strong> if they want to place a [[Windows]] logo sticker to their PC. Hence, these PCs ship with Microsoft’s certificate stored in UEFI. This prevents [[Linux]] operating systems from booting
## How Microsoft Allows Linux Distributions to Boot with Secure Boot
Linux distributions can pay a one-time fee of \$99 to access the Microsoft Sysdev portal, where they can apply to have their boot loaders signed.

Linux distributions generally have a “shim” signed. The shim is a small boot loader that simply boots the Linux distributions main [[GRand Unified Bootloader (GRUB 2)|GRUB]] boot loader. The Microsoft-signed shim checks to ensure it’s booting a boot loader signed by the Linux distribution, and then the Linux distribution boots normally
## How You Can Disable or Control Secure Boot
1. you can disable Secure Boot in the UEFI settings
2. you can customize Secure Boot to control which signing certificates Secure Boot offers
3. you can sign your own Linux boot loader and ensure your PC could only boot boot loaders you personally compiled and signed
