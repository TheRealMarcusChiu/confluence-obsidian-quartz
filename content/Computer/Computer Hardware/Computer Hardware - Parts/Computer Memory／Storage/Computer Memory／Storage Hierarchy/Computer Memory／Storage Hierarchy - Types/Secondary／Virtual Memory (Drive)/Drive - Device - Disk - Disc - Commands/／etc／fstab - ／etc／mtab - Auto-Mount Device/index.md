---
title: "／etc／fstab - ／etc／mtab - Auto-Mount Device"
created: 2020-01-10T19:55:06.191-06:00
modified: 2022-09-24T01:04:43.514-05:00
parent: "[[Drive - Device - Disk - Disc - Commands]]"
children: []
---
- <strong>/etc/fstab</strong> - contains the filesystems mounted automatically at startup by the <strong>mount -a</strong> command (in /etc/rc or equivalent startup file). Under Linux, also contains information about swap areas used automatically by <strong>swapon -a</strong>
- <strong>/etc/mtab </strong>- list of currently mounted [[Disk (Format - Filesystems／File-Systems (FS))|filesystems]]. Initially set up by the bootup scripts, and updated automatically by the <strong>mount</strong> command

# Locate the Partition or Disk to Mount

The first thing to be done is to locate the partition you want to mount. In this case, we'll be working with an entire drive. To do this, open a terminal window and issue the command:
```
> sudo fdisk -l
...
Disk /dev/sdb: 465.8 GiB, 500107861504 bytes, 976773167 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 3BA2AEA2-3882-39D2-3AA2-3CC284C9B132

Device     Start       End   Sectors   Size Type
/dev/sdb1   2048 976773133 976771086 465.8G Linux filesystem
```
# Locate the UUID

Next, we need to find the UUID (Universal Unique Identifier) of the drive. To do that, issue the command:
```
> sudo blkid
/dev/sda1: UUID="a48e93bb-a4cb-a2ab-a85b-a9072def5ebb" TYPE="ext4" PARTUUID="923e22fe-01"
...
```
# Create a Mount Point

Before we add the entry to fstab, we must first create a mount point for the drive. The mount point is the directory where users will access the data on the drive (as they can't access /dev/sdb1 itself). So let's create a directory called data with the command:
```
sudo mkdir /home/marcuschiu/mount-point
```
# The Auto-Mount Entry

In order to create the Auto-Mount entry, issue the command:
```
sudo vim /etc/fstab
```

At the bottom of that file, we'll add an entry that contains the information we've discovered. The entry will look like this:
```
UUID=a48e93bb-a4cb-a2ab-a85b-a9072def5ebb /home/marcuschiu/mount-point    auto nosuid,nodev,nofail,x-gvfs-show 0 0
```
- <strong>UUID=a48e93bb-a4cb-a2ab-a85b-a9072def5ebb</strong> - is the UUID of the drive. You don't have to use the UUID here. You could just use /dev/sdj, but it's always safer to use the UUID as that will never change (whereas the device name could)
- <strong>/home/marcuschiu/mount-point</strong>- is the mount point for the device
- <strong>auto</strong> - automatically mounts the partition at boot
- <strong>nosuid</strong> - specifies that the filesystem cannot contain set userid files. This prevents root escalation and other security issues
- <strong>nodev</strong> - specifies that the filesystem cannot contain special devices (to prevent access to random device hardware)
- <strong>nofail</strong> - removes the error check
- <strong>x-gvfs-show</strong> - show the mount option in the file manager. If this is on a GUI-less server, this option won't be necessary
- <strong>0</strong> - determines which filesystems need to be dumped (0 is the default)
- <strong>0</strong> - determine the order in which filesystem checks are done at boot time (0 is the default)

# Testing The FS Entry

Before you reboot the machine, you need to test your new fstab entry. To do this, issue the command:
```
sudo mount -a
```

If you see no errors, the fstab entry is correct and you're safe to reboot.

you could also check the file /etc/mtab, which is a list of mounted devices
```
> cat /etc/mtab
...
/dev/sdb1 /home/marcuschiu/backup-drive ext4 rw,relatime,errors=remount-ro,data=ordered 0 0
```
