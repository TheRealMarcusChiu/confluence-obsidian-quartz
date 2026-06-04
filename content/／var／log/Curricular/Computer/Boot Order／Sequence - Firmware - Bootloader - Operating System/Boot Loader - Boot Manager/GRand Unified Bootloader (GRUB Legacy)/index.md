---
title: "GRand Unified Bootloader (GRUB Legacy)"
created: 2019-08-27T10:46:01.231-05:00
modified: 2023-01-27T17:44:08.111-06:00
parent: "[[Boot Loader - Boot Manager]]"
children: []
---
###### GRand Unified Bootloader (GRUB Legacy)
- is a multi-boot bootloader previously maintained by the GNU Project
- was originally designed and implemented by Erich Stefan Boleyn
- newer [[GRand Unified Bootloader (GRUB 2)]]

original article: [https://www.dedoimedo.com/computers/grub.html](https://www.dedoimedo.com/computers/grub.html)
## Table of contents
## Everything is a file

To be able to successfully master the secrets of GRUB, you must understand one of the basic foundations of \*NIX-based operating systems. Everything is a file. Even hard disks and partitions are treated as files. There is no magic. If you remember this, you will find the supposedly perilous task of tampering with partitions no different than playing with files using a file explorer (or the command line). Now that we have established this, we can move on to the more technical parts of grubbing.
## Introduction

GNU GRUB is a bootloader (can also be spelled boot loader) capable of loading a variety of free and proprietary operating systems. GRUB will work well with Linux, DOS, Windows, or BSD. GRUB stands for <font style="color: rgb(255,0,0);">GR</font>and <font style="color: rgb(255,0,0);">U</font>nified <font style="color: rgb(255,0,0);">B</font>ootloader.

GRUB is dynamically configurable. This means that the user can make changes during the boot time, which include altering existing boot entries, adding new, custom entries, selecting different kernels, or modifying [initrd](http://en.wikipedia.org/wiki/Initrd). GRUB also supports [Logical Block Address](http://en.wikipedia.org/wiki/Logical_Block_Address) mode. This means that if your computer has a fairly modern BIOS that can access more than 8GB (first 1024 cylinders) of hard disk space, GRUB will automatically be able to access all of it.

GRUB can be run from or be installed to any device (floppy disk, hard disk, CD-ROM, USB drive, network drive) and can load operating systems from just as many locations, including network drives. It can also decompress operating system images before booting them. You can learn much, much more from the official [GNU GRUB Manual 0.97](http://www.gnu.org/software/grub/manual/legacy/grub.html).
### What about LILO?

You may have heard about another Linux bootloader called LILO (stands for <font style="color: rgb(255,0,0);">LI</font>nux <font style="color: rgb(255,0,0);">LO</font>ader). While a sensible option for many Linux users, I believe that GRUB is a better choice, for several reasons:
- LILO supports only up to 16 different boot selections; GRUB supports an unlimited number of boot entries.
- LILO cannot boot from network; GRUB can.
- LILO must be written again every time you change the configuration file; GRUB does not.
- LILO does not have an interactive command interface.

All in all, it seems that GRUB is the winner. So let's see what this baby can do.
## How does GRUB work?

When a computer boots, the BIOS transfers control to the first boot device, which can be a hard disk, a floppy disk, a CD-ROM, or any other BIOS-recognized device. We'll concentrate on hard disks, for the sake of simplicity.

The first sector on a hard is called the <font style="color: rgb(255,0,0);">[[Partition／Volume - Disk Partitioning - Partition Schema|Master Boot Record (MBR)]]</font>. This sector is only 512 bytes long and contains a small piece of code (446 bytes) called the primary boot loader and the partition table (64 bytes) describing the primary and extended partitions.

By default, MBR code looks for the partition marked as active and once such a partition is found, it loads its boot sector into memory and passes control to it.

GRUB replaces the default MBR with its own code.

Furthermore, GRUB works in <font style="color: rgb(255,0,0);">stages</font>.

<font style="color: rgb(255,0,0);">Stage 1</font> is located in the MBR and mainly points to <font style="color: rgb(255,0,0);">Stage 2</font>, since the MBR is too small to contain all of the needed data.

<font style="color: rgb(255,0,0);">Stage 2</font> points to its configuration file, which contains all of the complex user interface and options we are normally familiar with when talking about GRUB. Stage 2 can be located anywhere on the disk. If Stage 2 cannot find its configuration table, GRUB will cease the boot sequence and present the user with a command line for manual configuration.

<font style="color: rgb(255,0,0);">Stage 1.5</font> also exists and might be used if the boot information is small enough to fit in the area immediately after MBR.

The Stage architecture allows GRUB to be large (\~20-30K) and therefore fairly complex and highly configurable, compared to most bootloaders, which are sparse and simple to fit within the limitations of the Partition Table.
## GRUB notation

This section is intended to help you get familiar with GRUB, without touching anything. The next section deals with actual files and manual configuration. GRUB has its own notation, which is very similar yet somewhat different from the general notation a typical Linux user might be used to. Now, here's an example of a typical GRUB entry:

(hd0,1)
- The <font style="color: rgb(255,0,0);">brackets</font> are a must; all devices listed in GRUB menu must be enclosed in brackets.
- <font style="color: rgb(255,0,0);">hd</font> stands for hard disk; alternatively, <font style="color: rgb(255,0,0);">fd</font> stands for floppy disk, <font style="color: rgb(255,0,0);">cd</font> stands for CD-ROM etc.
- The <font style="color: rgb(255,0,0);">first number</font> (integer for geeks) refers to the <font style="color: rgb(255,0,0);">physical hard drive number</font>; in this case, the <font style="color: rgb(255,0,0);">first</font> drive, as they are counted from <font style="color: rgb(255,0,0);">zero</font> up. For example, <font style="color: rgb(255,0,0);">hd2</font> refers to the <font style="color: rgb(255,0,0);">third physical hard drive</font>.
- The <font style="color: rgb(255,0,0);">second number</font> refers to the <font style="color: rgb(255,0,0);">partition number</font> of the <font style="color: rgb(255,0,0);">selected hard drive</font>; again, partitions are counted from <font style="color: rgb(255,0,0);">zero</font> up. In this case, <font style="color: rgb(255,0,0);">1</font> stands for the <font style="color: rgb(255,0,0);">second</font> partition.

From here, it is evident that GRUB (menu) does not discriminate between IDE or SCSI drives or primary or logical partitions. The task of deciding which hard drive or partition may boot is left to BIOS and Stage 1. As you see, the notation is very simple.

<font style="color: rgb(255,0,0);">Primary</font> partitions are marked from <font style="color: rgb(255,0,0);">0</font> to <font style="color: rgb(255,0,0);">3</font> <font style="color: rgb(255,0,0);">(hd?,0)</font>, <font style="color: rgb(255,0,0);">(hd?,1)</font>, <font style="color: rgb(255,0,0);">(hd?,2)</font>, <font style="color: rgb(255,0,0);">(hd?,3)</font>. <font style="color: rgb(255,0,0);">Logical</font> partitions in the <font style="color: rgb(255,0,0);">extended </font>partition are counted from <font style="color: rgb(255,0,0);">4</font> up, regardless of the actual number of primary partitions on the hard disk, e.g. <font style="color: rgb(255,0,0);">(hd1,7)</font>.

The entries alone are not enough to boot an operating system though. GRUB also needs to know what operating system <font style="color: rgb(255,0,0);">images</font> to load. These are assigned as parameters to each of the called devices, including special flags (switches). For example, Windows Safe Mode is a special flag. Here is an example of a GRUB menu booting only Ubuntu.

![[GRand Unified Bootloader (GRUB Legacy)/grub_ubuntu_boot_1.jpg]]

Here's an example of a GRUB menu from a computer with triple boot (SUSE 10.2, Ubuntu 6.10 and Windows XP). This is the actual menu.lst on one of my real machines.

![[GRand Unified Bootloader (GRUB Legacy)/grub_triple_boot.jpg]]

Let's try to understand what the entries mean. Only uncommented lines count. <font style="color: rgb(255,0,0);">Comments</font> are marked with <font style="color: rgb(255,0,0);">\#</font>. The lines that have a series of small gray <font style="color: rgb(255,0,0);">x</font>s showing are in indication that text therein belongs to the line preceding it. In other words, there text simply dropped to another line to visually accommodate the text editor and screen resolution limitations.
default 0
timeout 8

The first line (<font style="color: rgb(255,0,0);">default 0</font>) means that the first operating system listed will be booted. In this case, it's SUSE 10.2. The second line (<font style="color: rgb(255,0,0);">timeout 8</font>) tells how much time (seconds) the user has to make his choice before the default entry is loaded. Simple, isn't it?
gfxmenu (hd0,2)/boot/message

The GRUB menu can also be graphic. The fancy stuff needed to present the user with a colorful background and possibly some extras is located on the <font style="color: rgb(255,0,0);">first</font> physical disk, <font style="color: rgb(255,0,0);">third</font> partition (hd0,2). This is a <font style="color: rgb(255,0,0);">primary</font> partition, as we have seen earlier.
title openSUSE 10.2
root (hd0,2)
kernel /boot/vmlinuz-...
initrd /boot/initrd.img-...

This is the first operating system entry in the menu.
- <font style="color: rgb(255,0,0);">title</font> is as simple as it sounds. It's merely a string that's meant to help the user read the menu in human terminology.
- <font style="color: rgb(255,0,0);">root (hd0,2)</font> tells GRUB where its configuration files are located. In this instance, they can be found under <font style="color: rgb(255,0,0);">(hd0,2)/boot/grub</font>.
- <font style="color: rgb(255,0,0);">kernel /boot/vmlinuz-...</font> boots the actual kernel <font style="color: rgb(255,0,0);">image</font>. There can be many such images available. The fact there is no device specified before the <font style="color: rgb(255,0,0);">/boot/vmlinuz</font> indicates the image is located on the <font style="color: rgb(255,0,0);">same</font> partition as the GRUB itself. This is often the default case for your primary choice of operating system.
- <font style="color: rgb(255,0,0);">initrd /boot/initrd.img-...</font> is the temporary file system that makes system preparations - adapts generic kernel image to specific hardware - before the real root is loaded.

The extra switches used after the kernel indicate where the actual root is located, what graphic mode is used and where the swap partition resides. This article will not go into detail regarding the more advanced GRUB configurations.
title Ubuntu, kernel ... (/dev/sda9)
kernel (hd0,8)/boot/vmlinuz-...
initrd (hd0,8)/boot/initrd.img-...
- Again, <font style="color: rgb(255,0,0);">title</font> indicates a name, in this case fancily adorned with technical details.
- <font style="color: rgb(255,0,0);">kernel (hd0,8)/boot/vmlinuz-...</font> points to the <font style="color: rgb(255,0,0);">9th</font> partition on the <font style="color: rgb(255,0,0);">first</font> hard disk <font style="color: rgb(255,0,0);">(hd0,8)</font>. Accidentally, the root flag <font style="color: rgb(255,0,0);">(/dev/sda9)</font> indicates that the root partition is the <font style="color: rgb(255,0,0);">same</font> as the one containing the kernel image. Normally, this is the case, and for the sake of simplicity, you will want this option during your installations.
- <font style="color: rgb(255,0,0);">initrd (hd0,8)/boot/initrd.img-...</font> nothing new here.

Note regarding kernel images and root partitions: On older computers with BIOS that do not support access to more than the first 1024 cylinders, you might setup a boot partition that contains the kernel image, while the root itself is located elsewhere. But people with computers younger than the botched Y2K crisis need not worry.

Another thing you might notice is that the Ubuntu entry is fairly detailed. This feature is called <font style="color: rgb(255,0,0);">Multi-boot Compliance</font>; openSUSE recognizes Ubuntu and can accurately call its images (including special switches) and mount the partitions. However, most operating systems are only partially multi-boot compliant. A little later on, I will show you how the Ubuntu entry could have been treated differently, with the same results.
title Windows
rootnoverify (hd0,0)
chainloader (hd0,0)+1
- <font style="color: rgb(255,0,0);">rootnoverify (hd0,0)</font> means that openSUSE cannot understand Windows operating system, i.e. no multi-boot compliance. Therefore, the operating system is called without any fore-knowledge of the kernel. GRUB assumes that the relevant boot images will be found on the target partition and <font style="color: rgb(255,0,0);">mounted</font> by the other operating system bootloader. As you can see, Windows was installed on the <font style="color: rgb(255,0,0);">first</font> partition of the <font style="color: rgb(255,0,0);">first</font> hard disk. This is the most convenient option.
- <font style="color: rgb(255,0,0);">chainloader (hd0,0)+1</font> feature is used for operating systems that cannot be booted directly. Not surprisingly, Windows operating systems cannot be booted directly. They are booted by the method of <font style="color: rgb(255,0,0);">chainloading</font>. As the name implies, GRUB passes the control of the boot sequence to another bootloader, located on the device to which the menu entry points. This can be a Windows operating system, but also any other, including Linux.

Back to Ubuntu. You remember that I have told we could have booted Ubuntu in an alternative way? Indeed, we could have simply chainloaded it, just like Windows.
title Ubuntu
root (hd0,8)
chainloader (hd0,8)+1

This would have worked equally well. The last option in the menu allows you to boot SUSE in the <font style="color: rgb(255,0,0);">failsafe</font> mode (sort of Safe Mode, no graphics) and does not contribute to our knowledge, therefore we will skip it at the moment. Let's see some more examples. The example below is actually written in the <font style="color: rgb(255,0,0);">Ubuntu menu.lst</font>(commented, of course).
title Windows 95/98/NT/2000
root (hd0,0)
makeactive
chainloader +1

title Linux
root (hd0,1)
kernel /vmlinuz root=/dev/hda3 ro

By now, you should be able to "read" GRUB language with ease. We begin with the <font style="color: rgb(255,0,0);">title</font>. <font style="color: rgb(255,0,0);">root</font> specifies the partition where we expect to find the Windows kernel and <font style="color: rgb(255,0,0);">mounts</font> it (<font style="color: rgb(255,0,0);">rootnoverify</font> would leave this job to the Windows bootloader). <font style="color: rgb(255,0,0);">makeactive</font> command sets the <font style="color: rgb(255,0,0);">active</font> partition on the root disk (above) to <font style="color: rgb(255,0,0);">GRUB root device</font>. This means that the next command, <font style="color: rgb(255,0,0);">chainloader</font>, is executed without the target partition specified (as the target partition is the same, now).

The second entry is even simpler. We name a Linux, we call its partition and we boot the kernel. In this case, we see the very interesting case where the <font style="color: rgb(255,0,0);">kernel image</font> and <font style="color: rgb(255,0,0);">root (/) partition</font> of the operating system are NOT located on the same partition. This would be a very likely case for older computers - or ones with a specific boot partition. Finally, the crazy stuff: [A GRUB menu booting 100+ systems of DOS, Windows, Linux, BSD, and Solaris](http://www.justlinux.com/forum/showthread.php?threadid=143973).

You see, it's very simple! Once you get the hang of it, it actually becomes fun. For more information, you must read the [GNU GRUB Manual 0.97](http://www.gnu.org/software/grub/manual/grub.html). In particular, you need to familiar with [The list of command line and menu entry commands](http://www.gnu.org/software/grub/manual/grub.html#Command_002dline-and-menu-entry-commands).
## GRUB configuration
<font style="color: rgb(255,0,0);">Most of the time, you will not want or need to touch GRUB. When you install operating systems, especially in the right sequence (inconsiderate OS first - like Windows, flexible OS later - Linux and family), the GRUB will be installed automatically and relevant entries appended.</font>

Nevertheless, you should know when and what to do if things go wrong.
### Installation of GRUB

GRUB can be installed to a variety of devices. Most people will be interested in setting up GRUB on their hard disk. Nevertheless, it does not hurt to know learn about other options. Of course, you can skip forward. Before we install anything, we need to know where our files are. If installed, GRUB menu is located on the root partition under:

/boot/grub/menu.lst

Always, always back this file up before making any changes! The GRUB files can be found in the image of your operating system (usually a CD), under:
/usr/lib/grub/i386-pc

You should also be aware of the basic Linux commands regarding the hard disks and partitions. To this end, you might want to try my article [Highly useful Linux commands & configurations](https://www.dedoimedo.com/computers/linux_commands.html). Nevertheless, for those who do not fancy reading yet another article, here's a brief version:

You can display your PC environment information either through terminal or a text editor. Files through text editor are invoked by specifying the text editor and a target file (with su or sudo for system files).
sudo vi /etc/fstab
OR
sudo gedit /etc/fstab

Alternatively, you can simply print the contents of the files in the terminal by using the [cat](http://www.linuxjournal.com/article/1322) (concatenate) command.
(sudo) cat /etc/fstab

Some useful commands that one might need when dealing with boot, hard drives and partitions: Display the partition table:
fdisk -l

Display the mounted partitions:
cat /etc/fstab

Now that we know what we need and where to find it, it's time to install GRUB.
###### GRUB on a floppy disk

To create GRUB on a floppy disk, we must copy the <font style="color: rgb(255,0,0);">Stage 1</font> and <font style="color: rgb(255,0,0);">Stage 2</font> files from the image directory to the <font style="color: rgb(255,0,0);">first</font> and <font style="color: rgb(255,0,0);">second sector</font> of the floppy disk. We'll use the [dd](http://www.linuxjournal.com/article/1320) command, which copies information sector by sector. Here's the set of commands that you need to execute (taken from the Manual):
cd /usr/lib/grub/i386-pc
dd if=stage1 of=/dev/fd0 bs=512 count=1
dd if=stage2 of=/dev/fd0 bs=512 seek=1

Just a short explanation: <font style="color: rgb(255,0,0);">if</font> stands for input file, <font style="color: rgb(255,0,0);">of</font> stands for output file, <font style="color: rgb(255,0,0);">/dev/fd0</font> refers to the first mounted floppy device, <font style="color: rgb(255,0,0);">bs</font> specifies the block size (in bytes), <font style="color: rgb(255,0,0);">count</font> instructs how many blocks should be copied, and <font style="color: rgb(255,0,0);">seek</font>tells how many blocks should be skipped before writing. Not surprisingly, since we need to write the files to the first two sectors of the floppy disk, we write <font style="color: rgb(255,0,0);">stage1</font> to the <font style="color: rgb(255,0,0);">first</font> sector, and copy <font style="color: rgb(255,0,0);">stage2</font> to the <font style="color: rgb(255,0,0);">second</font> (skip first, then write). Now that we have taken this deep fancy for the command line, I'll leave you with the nuances of different commands for homework. More on <font style="color: rgb(255,0,0);">dd</font> on [Wikipedia](http://en.wikipedia.org/wiki/Dd_%28Unix%29).

Regarding the GRUB on floppy, that's it. Since we have copies the stages from OS image, all of the required information is there. Of course, you can always make manual adjustments. But that's the next chapter.
###### Installing GRUB natively

Native install means placing <font style="color: rgb(255,0,0);">GRUB Stage 1</font> in the <font style="color: rgb(255,0,0);">first sector</font> of the hard disk (<font style="color: rgb(255,0,0);">MBR</font> or <font style="color: rgb(255,0,0);">Partition Table</font>). This means you will be able to boot without a secondary device, like a floppy disk (which have become a rarity nowadays). However, this also means that if you install an inconsiderate OS later on (like Windows) or try to repair the MBR for some reason (by running fdisk /MBR from DOS prompt), you will erase the GRUB and render all systems listed in the menu.lst unbootable.

To install GRUB in MBR, you will need to boot from external media (floppy, live Linux CD). Then, once you reach the GRUB prompt, execute the following commands:

Find the <font style="color: rgb(255,0,0);">GRUB root device</font>:
find /boot/grub/stage1

GRUB will search for all available <font style="color: rgb(255,0,0);">Stages 1</font> and present them. If you have more than one operating system image present (e.g. SUSE, Kubuntu, Mandriva), you will have more than one <font style="color: rgb(255,0,0);">stage1</font> available. Example - Let's say the computer has the following operating systems installed on different partitions:
- <font style="color: rgb(255,0,0);">SUSE</font> on <font style="color: rgb(255,0,0);">(hd0,1)</font>
- <font style="color: rgb(255,0,0);">Kubuntu</font> on <font style="color: rgb(255,0,0);">(hd0,2)</font>
- <font style="color: rgb(255,0,0);">Mandriva</font> on <font style="color: rgb(255,0,0);">(hd0,4)</font>

All these will be returned as potential roots for GRUB device (as each OS has its own files). If you wish to use <font style="color: rgb(255,0,0);">SUSE GRUB</font>, then you will setup the <font style="color: rgb(255,0,0);">GRUB root device</font> to <font style="color: rgb(255,0,0);">(hd0,1)</font>:
root (hd0,1)

If you want <font style="color: rgb(255,0,0);">Mandriva's GRUB</font>, then:
root (hd0,4)

If you know in advance what you want to do, you can skip the find command. Once you have decided on the root, you need to write the information to the MBR:
setup (hd0)

Finally, quit the GRUB prompt:
quit

As a sequence, the commands that you need are:
find /boot/grub/stage1 (optional)
root (hdX,Y)
setup (hd0)
quit

You can also setup GRUB on another drive or partition, but then you will have to <font style="color: rgb(255,0,0);">chainload</font> GRUB to another bootloader for this to work. That's it. Easy peasy orange squeasy!
###### Installing GRUB with grub-install

This method is considered less safe (according to the Manual), as it guesses the mapping. Still, for total newbs in need of dire help, this might be the preferred method. You only need to invoke a single command - namely, where to install the bootloader. Furthermore, this command can be written in several ways, all equivalent:
grub-install /dev/hda

grub-install /dev/hd0

grub-install '(hd0)'

grub-install hd0

After you have installed the GRUB, your operating systems should boot. Once booted, you can once again start playing with GRUB, manually changing settings - adding and removing entries, chainloading other bootloaders, or even hiding and unhiding partitions.
### Setting up GRUB manually (after installation)

You can reconfigure or reinstall GRUB at any moment.
###### Backup!

First, before you make any changes to the GRUB configuration file, it is most warmly recommended that you backup the existing menu. You might even consider copying to another machine or printing the menu, in case things go bunkerous.
cp /boot/grub/menu.lst /boot/grub/menu.lst\_backup

To access GRUB, execute the following command in Linux terminal:
sudo grub

After a few moments, the GRUB command line should show up. You can identify it by the <font style="color: rgb(255,0,0);">grub\></font> prompt.

![[GRand Unified Bootloader (GRUB Legacy)/grub_prompt_3.jpg]]

Alternatively, you can reach the GRUB command line during bootup. When the GRUB menu loads, press <font style="color: rgb(255,0,0);">C</font> on the keyboard.
###### Adding a new operating system to the GRUB menu

Let's say you have installed yet another operating system on your machine, Sabayon. During the installation, you skip the GRUB setup. This means that the original GRUB remains untouched - and it does not contain an entry about Sabayon. For all practical purposes, Sabayon is not bootable.

Note: GRUB menu entries are called <font style="color: rgb(255,0,0);">stanzas</font> (probably a twist of instance?). So, we need to add Sabayon to the list. If you know where Sabayon is installed, you just need to add its entry to the menu.lst.
title Sabayon
root (hdX,Y)
chainloader +1

That's it. You can also do this while booting the computer, without editing the menu. When the original GRUB comes up, press <font style="color: rgb(255,0,0);">C</font> to reach the command line. And then:
root (hdX,Y)
chainloader +1

Optionally, you will use the <font style="color: rgb(255,0,0);">find</font> command to get around. Basically, this is the whole of GRUB magic. As you can see, it's very very simple. But for people who have never heard of GRUB and see long lists of strange commands, the prospect can be daunting. Now that we have covered the basics of grubbing, it's time for extras and some more common problems.
## Common problems
### GRUB got deleted; how to restore?

This will often happen if you install Windows after Linux. Windows assumes it's the only operating system in the world and does not try to live with existing information present in the MBR; it overwrites it. For people with dual-boot and very little knowledge of Linux, this is a disaster. Luckily, it's very easily recoverable one.
###### The easy way

Use [Super Grub Disk](http://www.supergrubdisk.org/). I have written about this tool in detail in my article [A (cool) list of Linux tools](https://www.dedoimedo.com/computers/collection_linux.html), under [Rescue](https://www.dedoimedo.com/computers/collection_linux.html#rescue).
###### The hard way
- Boot from floppy disk or CD (any Linux live CD should do).
- Get to the grub command line.

find /boot/grub/stage1 (optional)
root (hdX,Y)
setup (hd0)
quit

The same as before!
### Windows is installed on a non-first hard disk (Swapping)

GRUB cannot directly boot Microsoft operating systems. And sometimes, even chainloading may not work, especially if Windows is not installed on the first hard disk. Once again, you should remember that you should always install Windows first, on the first hard disk, on the first partition (the rule of three first). Nevertheless, even if you have Windows installed on a separate disk, you can solve the problem by <font style="color: rgb(255,0,0);">swapping</font>. You need to perform a <font style="color: rgb(255,0,0);">virtual swap</font> between hard disks. Like this:
map (hd0) (hd1)
map (hd1) (hd0)

After you add these two lines, you should be able to boot into Windows (or DOS, for that matter).
### There is more than one Windows operating system installed on one hard disk (Hide/Unhide)

Again, Windows can cause problems if there's more than one instance present on a hard disk, especially if installed on primary partitions. When you use the chainloader command, the control is transferred to the Windows boot loader, but which one?

The problem is easily solved by <font style="color: rgb(255,0,0);">hiding</font> and <font style="color: rgb(255,0,0);">unhiding</font> partitions. If GRUB hides a partition, it will not be visible by Windows and prevent a possible confusion. Vice versa, if you unhide a partition, Windows will detect it and be able to boot from it, without getting confused.

Here's the example taken from the Manual that demonstrates this point. Let's say we have Windows installed on the <font style="color: rgb(255,0,0);">first</font> and the <font style="color: rgb(255,0,0);">second</font> partition of your hard disk. We wish to boot the <font style="color: rgb(255,0,0);">first</font> instance of Windows. Then, we need to execute the following set of commands to make it all work:
unhide (hd0,0)
hide (hd0,1)
rootnoverify (hd0,0)
chainloader +1
makeactive
### You resized a partition; GRUB is gone

This is an interesting case. It can happen after you use a partitioning or an imaging software to make changes to the Partition Table. Usually, this will happen when you make such a change in Windows. Linux will not be informed of the change, because Windows is blind to anything else on the machine save Microsoft thingies. Consequently, GRUB will suffer.

The solution is that most likely the filesystem is damaged and needs to be repaired. Boot from a live CD and execute the following commands, assuming you know where Linux partitions are. Check the filesystem:
fsck.ext2 /dev/hdXY

Replace <font style="color: rgb(255,0,0);">X</font> and <font style="color: rgb(255,0,0);">Y</font> with hard disk letter and partition number that you want to check (hda2, hdb3, etc.). Create the <font style="color: rgb(255,0,0);">ext2/3 filesystem parameters</font> again.
tune2fs -j /dev/hdXY

Now <font style="color: rgb(255,0,0);">mount</font> the <font style="color: rgb(255,0,0);">root filesystem</font> on <font style="color: rgb(255,0,0);">/mnt/sysimage</font> and run <font style="color: rgb(255,0,0);">grub</font>:
mount -t ext2 /dev/hdXY /mnt/sysimage
OR
mount -t ext2 /dev/hdXY /mnt/sysimage

cd /mnt/sysimage/sbin
grub

You're back to the familiar grounds. For more information on Linux commands, including <font style="color: rgb(255,0,0);">fsck.ext2</font>, <font style="color: rgb(255,0,0);">tune2fs</font> and others, see [Manual pages](http://linuxreviews.org/man/) on [Linux Reviews](http://linuxreviews.org/index.html.en).
