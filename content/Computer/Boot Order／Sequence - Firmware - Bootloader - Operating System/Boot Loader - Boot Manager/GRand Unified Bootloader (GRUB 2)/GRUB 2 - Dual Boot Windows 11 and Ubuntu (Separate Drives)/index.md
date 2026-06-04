---
title: "GRUB 2 - Dual Boot Windows 11 and Ubuntu (Separate Drives)"
created: 2023-01-28T13:12:44.753-06:00
modified: 2023-12-08T19:20:19.955-06:00
parent: "[[GRand Unified Bootloader (GRUB 2)]]"
children: []
---
In this article, we will install Ubuntu on a computer already pre-installed with Windows 11
# Resources
- [https://askubuntu.com/questions/1130372/dual-booting-win-10-and-ubuntu-18-04-on-two-separate-physical-ssds/1130381#1130381](https://askubuntu.com/questions/1130372/dual-booting-win-10-and-ubuntu-18-04-on-two-separate-physical-ssds/1130381#1130381)
- [https://askubuntu.com/questions/1425637/how-can-i-add-windows-11-to-grub-menu](https://askubuntu.com/questions/1425637/how-can-i-add-windows-11-to-grub-menu)

# Instructions
1. Turn off the computer
2. Remove the Windows drive
3. Insert the secondary drive into the computer
4. Insert Ubuntu USB into the computer
5. Start the computer and enter BIOS
	1. disable fast boot
	2. choose Ubuntu USB as the primary boot
6. Exit BIOS
7. Install Ubuntu onto the secondary drive
8. Once Ubuntu is installed, restart and wait for a prompt to remove the USB
9. Remove USB
10. Turn off the computer
11. Insert Windows drive back into the computer
12. Turn on the computer and enter BIOS
	1. make Ubuntu drive the primary boot
	2. make Windows drive the secondary boot
13. Exit BIOS and boot Ubuntu

###### Enable GRUB Menu
1. Open terminal
2. <code><font style="color: rgb(122,134,154);">sudo vim /etc/default/grub</font></code>
3. change the following lines to
	1. <code><font style="color: rgb(0,128,0);">GRUB\_TIMEOUT\_STYLE=menu</font></code>
	2. <code><font style="color: rgb(0,128,0);">GRUB\_TIMEOUT=10</font></code>
4. <code><font style="color: rgb(122,134,154);">sudo update-grub</font></code>
5. Restart the computer
6. GRUB menu should show both Ubuntu and Windows

# If GRUB Menu Does not show Windows

> [!expand-ui]- Method #1
> ###### Get the UUID of the Windows [[EFI System Partition (ESP)]]
> 1. <code><font style="color: rgb(122,134,154);">sudo fdisk -l</font></code>
> 2. 
>     ```
>     Device             Start        End   Sectors   Size Type
>     /dev/nvme0n1p1      2048    1050623   1048576   512M EFI System
>     /dev/nvme0n1p2   1050624  874729471 873678848 416.6G Linux filesystem
>     /dev/nvme0n1p3 874729472  874762239     32768    16M Microsoft reserved
>     /dev/nvme0n1p4 874762240 1000214527 125452288  59.8G Microsoft basic data
>     ```
> 3. <code><font style="color: rgb(122,134,154);">sudo blkid /dev/nvme0n1p1</font></code>
> 4. 
>     ```
>     dev/nvme0n1p1: UUID="3C26-6A4C" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="3b64b43f-e7eb-4ac8-a32c-9af2edf64d0d"
>     ```
> 5. the UUID is <code><font style="color: rgb(122,134,154);">3C26-6A4C</font></code>
>
> ###### Create a custom GRUB entry for Windows
> 1. Open terminal
> 2. <code><font style="color: rgb(122,134,154);">sudo chmod o+w /etc/grub.d/40\_custom</font></code>
> 3. <code><font style="color: rgb(122,134,154);">sudo vim /etc/grub.d/40\_custom</font></code>
> 4. add the following contents in <code><font style="color: rgb(122,134,154);">40\_custom</font></code> replacing <code><font style="color: rgb(122,134,154);">3C26-6A4C</font></code>
> 5. 
>     ```
>     menuentry 'Windows 11' {
>         search --fs-uuid --no-floppy --set=root 3C26-6A4C
>         chainloader (${root})/EFI/Microsoft/Boot/bootmgfw.efi
>     }
>     ```
> 6. <code><font style="color: rgb(122,134,154);">sudo chmod o-w /etc/grub.d/40\_custom</font></code>
> 7. <code><font style="color: rgb(122,134,154);">sudo update-grub</font></code>
> 8. Restart the computer
> 9. GRUB menu should show both Ubuntu and Windows

> [!expand-ui]- Method #2
> Requires BIOS [[Secure Boot|secure boot]] to be turned off
> - vim /etc/default/grub
> - uncomment the following line
> - 
>     ```
>     GRUB_DISABLE_OS_PROBER=false
>     ```
> - <code><font style="color: rgb(122,134,154);">sudo update-grub</font></code>
> - Restart the computer
> - GRUB menu should show both Ubuntu and Windows
